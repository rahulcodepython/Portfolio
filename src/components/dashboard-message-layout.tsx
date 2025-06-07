import { getBaseUrl } from '@/utils/GetBaseUrl';
import DashboardMessage from './dashboard-message';

const DashboardMessageLayout = async () => {

    const baseurl = await getBaseUrl();

    const response = await fetch(`${baseurl}/api/messages`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'force-cache',
        next: { revalidate: 120 },
    })

    const data = await response.json()


    return (
        <DashboardMessage data={data} />
    )
}

export default DashboardMessageLayout