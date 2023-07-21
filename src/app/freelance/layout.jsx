import Breadcrumb from '@/app/freelance/components/client/breadcrumb'
import React from 'react'

const FreelanceLayout = ({ children }) => {
    return (
        <>
            <Breadcrumb />
            {children}
        </>
    )
}

export default FreelanceLayout