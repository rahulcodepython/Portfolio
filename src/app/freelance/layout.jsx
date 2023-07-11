import { BreadcrumbContextProvider } from '@/context/provider/breadcrumbProvider'
import Breadcrumb from '@/app/freelance/components/client/breadcrumb'
import React from 'react'

const FreelanceLayout = ({ children }) => {
    return (
        <BreadcrumbContextProvider>
            <Breadcrumb />
            {children}
        </BreadcrumbContextProvider>
    )
}

export default FreelanceLayout