import { getBaseUrl } from '@/utils/GetBaseUrl';
import DashboardBlogs from './dashboard-blogs';

const DashboardBlogsLayout = async () => {
    const baseurl = await getBaseUrl();
    const response = await fetch(`${baseurl}/api/blog`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'force-cache',
        next: { revalidate: 120 },
    });
    const data = await response.json();
    return (
        <DashboardBlogs data={data} />
    )
}

export default DashboardBlogsLayout