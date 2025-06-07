export async function deleteFileFromGithub(fileUrl: string): Promise<{ success: boolean } | { error: string }> {
    try {
        const match = fileUrl.match(/https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/[^/]+\/(.+)/);

        if (!match || match.length < 4) {
            throw new Error('Invalid GitHub raw file URL');
        }

        const [, , , filePath] = match;

        const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
        const REPO = process.env.GITHUB_REPO!;
        const USERNAME = process.env.GITHUB_USERNAME!;

        const fileResponse = await fetch(`https://api.github.com/repos/${USERNAME}/${REPO}/contents/${filePath}`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
        });

        if (!fileResponse.ok) {
            throw new Error(`Failed to fetch file metadata: ${fileResponse.statusText}`);
        }

        const fileData = await fileResponse.json();
        const fileSha = fileData.sha;

        const deleteResponse = await fetch(`https://api.github.com/repos/${USERNAME}/${REPO}/contents/${filePath}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: `Delete ${filePath}`,
                sha: fileSha,
            }),
        });

        if (!deleteResponse.ok) {
            throw new Error(`Failed to delete file: ${deleteResponse.statusText}`);
        }

        return { success: true };
    } catch (error: any) {
        return { error: error.message };
    }
}
