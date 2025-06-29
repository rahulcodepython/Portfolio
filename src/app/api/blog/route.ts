import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/models/blog";
import { Stats } from "@/models/stats";
import { deleteFileFromGithub } from "@/utils/DeleteFile";
import { uploadFileToGitHub } from "@/utils/UploadeFile";

export async function GET(req: Request) {
    await connectDB();

    const blogs = await Blog.find();

    return new Response(JSON.stringify(blogs), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const title = formData.get("title");
        const description = formData.get("description");
        const date = formData.get("date");
        const image = formData.get("image") as File | null;
        const file = formData.get("file") as File | null;

        if (!image || typeof image.name !== 'string' || typeof image.arrayBuffer !== 'function' || !title || !description || !file) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const imageUploadResponse = await uploadFileToGitHub(image, 'blogImage');
        if ('error' in imageUploadResponse) {
            return new Response(JSON.stringify({ error: imageUploadResponse.error }), { status: imageUploadResponse.status, headers: { 'Content-Type': 'application/json' } });
        }

        const fileUploadResponse = await uploadFileToGitHub(file as File, 'blogContent');
        if ('error' in fileUploadResponse) {
            return new Response(JSON.stringify({ error: fileUploadResponse.error }), { status: fileUploadResponse.status, headers: { 'Content-Type': 'application/json' } });
        }

        await connectDB();

        const newBlog = new Blog({
            title: title,
            description: description,
            date: date,
            image: imageUploadResponse.downloadUrl,
            content: fileUploadResponse.downloadUrl,
        });
        const savedBlog = await newBlog.save();

        if (!savedBlog) {
            return new Response(JSON.stringify({ error: 'Failed to save blog' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

        const stats = await Stats.findOne();

        if (stats) {
            stats.blogs += 1;
            await stats.save();
        } else {
            const newStats = new Stats({
                projects: 0,
                blogs: 1,
                message: 0,
                unreadMessages: 0,
            });
            await newStats.save();
        }

        return new Response(JSON.stringify({ msg: 'Blog created successfully', data: savedBlog }), { status: 201, headers: { 'Content-Type': 'application/json' } });
    } catch {
        return new Response(JSON.stringify({ error: 'Failed to create blog' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function PATCH(req: Request) {
    try {
        const formData = await req.formData();

        const id = formData.get("_id");
        if (!id) {
            return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const oldBlogImage = await Blog.findById(id);

        if (!oldBlogImage) {
            return new Response(JSON.stringify({ error: 'Blog not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        const title = formData.get("title");
        const description = formData.get("description");
        const date = formData.get("date");
        const image = formData.get("image") as File | null;
        const file = formData.get("file") as File | null;

        const updateData: any = {};

        if (title) updateData.title = title;
        if (description) updateData.description = description;
        if (date) updateData.date = date;

        if (image && typeof image.name === 'string' && typeof image.arrayBuffer === 'function') {
            const deleteImage = await deleteFileFromGithub(oldBlogImage.image);
            if ('error' in deleteImage) {
                return new Response(JSON.stringify({ error: deleteImage.error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
            }

            const imageUploadResponse = await uploadFileToGitHub(image, 'blogImage');
            if ('error' in imageUploadResponse) {
                return new Response(JSON.stringify({ error: imageUploadResponse.error }), { status: imageUploadResponse.status, headers: { 'Content-Type': 'application/json' } });
            }
            updateData.image = imageUploadResponse.downloadUrl;
        }

        if (file && file instanceof File) {
            const deleteFile = await deleteFileFromGithub(oldBlogImage.content);
            if ('error' in deleteFile) {
                return new Response(JSON.stringify({ error: deleteFile.error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
            }

            const fileUploadResponse = await uploadFileToGitHub(file, 'blogContent');
            if ('error' in fileUploadResponse) {
                return new Response(JSON.stringify({ error: fileUploadResponse.error }), { status: fileUploadResponse.status, headers: { 'Content-Type': 'application/json' } });
            }
            updateData.content = fileUploadResponse.downloadUrl;
        }

        await connectDB();

        const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedBlog) {
            return new Response(JSON.stringify({ error: 'Blog not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify({ msg: 'Blog updated successfully', data: updatedBlog }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch {
        return new Response(JSON.stringify({ error: 'Failed to update blog' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function DELETE(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("_id");

        if (!id) {
            return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        await connectDB();

        const blogToDelete = await Blog.findById(id);

        if (!blogToDelete) {
            return new Response(JSON.stringify({ error: 'Blog not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        const deleteImage = await deleteFileFromGithub(blogToDelete.image);
        if ('error' in deleteImage) {
            return new Response(JSON.stringify({ error: deleteImage.error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const deleteFile = await deleteFileFromGithub(blogToDelete.content);
        if ('error' in deleteFile) {
            return new Response(JSON.stringify({ error: deleteFile.error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const deleteBlog = await Blog.findByIdAndDelete(id);

        if (!deleteBlog) {
            return new Response(JSON.stringify({ error: 'Failed to delete blog' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

        const stats = await Stats.findOne();

        if (stats) {
            stats.blogs -= 1;
            await stats.save();
        } else {
            const newStats = new Stats({
                projects: 0,
                blogs: 0,
                message: 0,
                unreadMessages: 0,
            });
            await newStats.save();
        }

        return new Response(JSON.stringify({ msg: 'Blog deleted successfully' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch {
        return new Response(JSON.stringify({ error: 'Failed to delete blog' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}