import Breadcrumb from '@/components/base/breadcrumb'
import Pricing from '@/components/server/pricing'
import React from 'react'

const Page = () => {
    return (
        <main>
            <Breadcrumb links={[['Pricing', '#']]} />
            <Pricing />
        </main>
    )
}

export default Page