import Breadcrumb from '@/components/base/breadcrumb'
import Job from '@/components/server/job'
import React from 'react'

const Page = ({ params }) => {
    return (
        <main>
            <Breadcrumb links={[['Pricing', '/hire-me/pricing'], ['Job Request', '#']]} />
            <Job plan={params.plan} />
        </main>
    )
}

export default Page