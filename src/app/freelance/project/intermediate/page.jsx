"use client"
import { UpdateBreadcrumLink } from '@/context/controller/breadcrumController'
import Pricing from '@/app/freelance/components/server/pricing'
import data from '@/data/data'
import React from 'react'

const IntermediatePlanPage = () => {
    UpdateBreadcrumLink([['Pricing', '/freelance/pricing'], ['intermediate', '#']])
    return data.pricing.map((item, index) => {
        return item.plan.toLowerCase() === 'intermediate' ? <Pricing item={item} key={index} isHireMeButton={false} forwordLink={''} />
            : null
    })
}

export default IntermediatePlanPage