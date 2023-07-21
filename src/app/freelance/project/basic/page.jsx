"use client"
import Pricing from '@/app/freelance/components/server/pricing'
import data from '@/data/data'
import React from 'react'

const BasicPlanPage = () => {
    return data.pricing.map((item, index) => {
        return item.plan.toLowerCase() === 'basic' ? <Pricing item={item} key={index} isHireMeButton={false} forwordLink={''} />
            : null
    })
}

export default BasicPlanPage