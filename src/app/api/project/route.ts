import { connectDB } from "@/lib/mongodb";
import { Project } from "@/models/project";
import { Stats } from "@/models/stats";
import { deleteFileFromGithub } from "@/utils/DeleteFile";
import { uploadFileToGitHub } from "@/utils/UploadeFile";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const title = formData.get("title");
        const description = formData.get("description");
        const category = formData.get("category");
        const image = formData.get("image") as File;
        const technologies = JSON.parse(formData.get("technologies") as string);
        const github = formData.get("github");
        const live = formData.get("live");

        if (!image || typeof image.name !== 'string' || typeof image.arrayBuffer !== 'function' || !title || !description || !github) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const fileUploadResponse = await uploadFileToGitHub(image, 'project');
        if ('error' in fileUploadResponse) {
            return new Response(JSON.stringify({ error: fileUploadResponse.error }), { status: fileUploadResponse.status, headers: { 'Content-Type': 'application/json' } });
        }

        await connectDB();

        const project = new Project({ title, description, image: fileUploadResponse.downloadUrl, technologies, category, github, live });

        const newProject = await project.save();

        if (!newProject) {
            return new Response(JSON.stringify({ error: 'Failed to create project' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

        const stats = await Stats.findOne();

        if (stats) {
            stats.projects += 1;
            await stats.save();
        } else {
            const newStats = new Stats({
                projects: 1,
                blogs: 0,
                message: 0,
                unreadMessages: 0,
            });
            await newStats.save();
        }

        return new Response(JSON.stringify({ msg: 'Project created successfully', data: newProject }), { status: 201, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Error creating project:', error);
        return new Response(JSON.stringify({ error: 'Failed to create project' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function PATCH(req: Request) {
    try {
        const formData = await req.formData();
        const projectId = formData.get("_id");
        if (!projectId) {
            return new Response(JSON.stringify({ error: 'Project ID is required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const updates: any = {};
        const title = formData.get("title");
        const description = formData.get("description");
        const category = formData.get("category");
        const image = formData.get("image") as File;
        const technologies = formData.get("technologies") ? JSON.parse(formData.get("technologies") as string) : undefined;
        const github = formData.get("github");
        const live = formData.get("live");

        Object.assign(updates, { title, description, category, technologies, github, live });

        if (image && typeof image.name === 'string' && typeof image.arrayBuffer === 'function') {
            const oldProject = await Project.findById(projectId);

            if (!oldProject) {
                return new Response(JSON.stringify({ error: 'Project not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
            }

            const deleteImage = await deleteFileFromGithub(oldProject?.image);
            if ('error' in deleteImage) {
                return new Response(JSON.stringify({ error: deleteImage.error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
            }

            const fileUploadResponse = await uploadFileToGitHub(image, 'project');
            if ('error' in fileUploadResponse) {
                return new Response(JSON.stringify({ error: fileUploadResponse.error }), { status: fileUploadResponse.status, headers: { 'Content-Type': 'application/json' } });
            }
            updates.image = fileUploadResponse.downloadUrl;
        }

        await connectDB();

        const project = await Project.findByIdAndUpdate(projectId, updates, { new: true });

        if (!project) {
            return new Response(JSON.stringify({ error: 'Project not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify({ msg: 'Project updated successfully', data: project }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch {
        return new Response(JSON.stringify({ error: 'Failed to update project' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const projectId = searchParams.get("_id");
        if (!projectId) {
            return new Response(JSON.stringify({ error: 'Project ID is required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        await connectDB();

        const project = await Project.findById(projectId);
        if (!project) {
            return new Response(JSON.stringify({ error: 'Project not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        const fileDeleteResponse = await deleteFileFromGithub(project.image);

        if ('error' in fileDeleteResponse) {
            return new Response(JSON.stringify({ error: fileDeleteResponse.error }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

        const deleteProject = await Project.findByIdAndDelete(projectId);

        if (!deleteProject) {
            return new Response(JSON.stringify({ error: 'Failed to delete project' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

        const stats = await Stats.findOne();

        if (stats) {
            stats.projects -= 1;
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

        return new Response(JSON.stringify({ msg: 'Project deleted successfully' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch {
        return new Response(JSON.stringify({ error: 'Failed to delete project' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
