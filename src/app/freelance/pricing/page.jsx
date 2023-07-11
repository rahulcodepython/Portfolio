"use client"
import { UpdateBreadcrumLink } from '@/context/controller/breadcrumController'
import Pricing from '@/app/freelance/components/server/pricing'
import React from 'react'
import data from '@/data/data'

const PricingPage = () => {
    UpdateBreadcrumLink([['Pricing', '#']])
    return (
        <section className="bg-white mx-4 sm:mx-8 lg:mx-12 rounded-xl shadow-2xl p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10" id='pricing'>
            <h1 className='text-xl md:text-3xl font-semibold'>
                Choose a flexible plans that suit you
            </h1>
            <div className="flex flex-col lg:flex-row gap-10 w-full justify-around">
                {
                    data.pricing.map((item, index) => {
                        return <Pricing item={item} index={index} isHireMeButton={true} forwordLink={`/freelance/project/${item.plan.toLowerCase()}`} key={index} />
                    })
                }
            </div>
        </section>
    )
}

export default PricingPage