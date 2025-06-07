export async function uploadFileToGitHub(
    file: File,
    type: 'blogImage' | 'project' | 'blogContent' | 'resume'
): Promise<
    { downloadUrl: string; htmlUrl: string; status: number } | { error: string; status: number }
> {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
    const REPO = process.env.GITHUB_REPO!;
    const USERNAME = process.env.GITHUB_USERNAME!;
    const BRANCH = process.env.GITHUB_BRANCH || 'main';

    if (!file || typeof file.name !== 'string' || typeof file.arrayBuffer !== 'function') {
        return { error: 'Invalid file uploaded', status: 400 };
    }

    const arrayBuffer = await file.arrayBuffer();
    const content = Buffer.from(arrayBuffer).toString('base64');
    const filename = file.name;

    const path = `portfolio/${type === "project" ? "projectImage" : type === "blogImage" ? "blogImage" : type === "blogContent" ? "blogContent" : type === "resume" ? "resume" : ""}/${filename}`;
    const apiUrl = `https://api.github.com/repos/${USERNAME}/${REPO}/contents/${path}`;

    let sha: string | undefined;

    const existingFileRes = await fetch(`${apiUrl}?ref=${BRANCH}`, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    if (existingFileRes.ok) {
        const existingFileData = await existingFileRes.json();
        sha = existingFileData.sha;
    }

    const uploadRes = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: sha ? `Update ${filename}` : `Upload ${filename}`,
            content,
            sha,
            branch: BRANCH,
        }),
    });

    const data = await uploadRes.json();

    if (!uploadRes.ok) {
        return { error: data.message || 'Failed to upload to GitHub', status: uploadRes.status };
    }

    return {
        downloadUrl: data.content.download_url,
        htmlUrl: data.content.html_url,
        status: uploadRes.status,
    };
}
