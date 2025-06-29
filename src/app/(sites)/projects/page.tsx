import { getBaseUrl } from "@/utils/GetBaseUrl";
import ProjectGrid from "./project-grid";

const ProjectPage = async () => {
    const baseurl = await getBaseUrl();

    const response = await fetch(`${baseurl}/api/project`, {
        cache: 'force-cache',
        next: { revalidate: 120 },
    });

    const data = await response.json();

    return <ProjectGrid projects={data} />
}

export default ProjectPage;