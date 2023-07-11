"use client"
import { UpdateBreadcrumLink } from '@/context/controller/breadcrumController'
import Pricing from '@/app/freelance/components/server/pricing'
import data from '@/data/data'
import React from 'react'

const BasicPlanPage = () => {
    UpdateBreadcrumLink([['Pricing', '/freelance/pricing'], ['Basic', '#']])
    return data.pricing.map((item, index) => {
        return item.plan.toLowerCase() === 'basic' ? <Pricing item={item} key={index} isHireMeButton={false} forwordLink={''} />
            : null
    })
}

export default BasicPlanPage