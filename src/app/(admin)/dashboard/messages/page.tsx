import DashboardMessage from '@/app/(admin)/dashboard/messages/dashboard-message';
import { getBaseUrl } from '@/utils/GetBaseUrl';

const DashboardMessageLayout = async () => {

    const baseurl = await getBaseUrl();

    const response = await fetch(`${baseurl}/api/message`, {
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