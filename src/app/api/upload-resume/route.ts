import { connectDB } from "@/lib/mongodb";
import { Resume } from "@/models/resume";
import { uploadFileToGitHub } from "@/utils/UploadeFile";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const file = formData.get("file") as File | null;

        if (!file) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const fileUploadResponse = await uploadFileToGitHub(file, 'resume');
        if ('error' in fileUploadResponse) {
            return new Response(JSON.stringify({ error: fileUploadResponse.error }), { status: fileUploadResponse.status, headers: { 'Content-Type': 'application/json' } });
        }

        await connectDB();

        const existingResume = await Resume.findOne();

        if (existingResume) {
            existingResume.resume = fileUploadResponse.downloadUrl;
            const updatedResume = await existingResume.save();

            if (!updatedResume) {
                return new Response(JSON.stringify({ error: 'Failed to update resume' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
            }
            return new Response(JSON.stringify({ msg: 'Resume updated successfully' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }

        const newResume = new Resume({
            resume: fileUploadResponse.downloadUrl,
        })
        const savedResume = await newResume.save();

        if (!savedResume) {
            return new Response(JSON.stringify({ error: 'Failed to save resume' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify({ msg: 'Resume created successfully' }), { status: 201, headers: { 'Content-Type': 'application/json' } });
    } catch {
        return new Response(JSON.stringify({ error: 'Failed to create resume' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}