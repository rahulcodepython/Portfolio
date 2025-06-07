import { ProjectItemType } from '@/types';
import { getBaseUrl } from '@/utils/GetBaseUrl';
import DashboardProjects from './dashboard-projects';

const DashboardProjectLayout = async () => {
    const baseurl = await getBaseUrl();

    const response = await fetch(`${baseurl}/api/projects`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'force-cache',
        next: { revalidate: 120 },
    });
    const data: ProjectItemType[] = await response.json();

    return (
        <DashboardProjects data={data} />
    )
}

export default DashboardProjectLayout