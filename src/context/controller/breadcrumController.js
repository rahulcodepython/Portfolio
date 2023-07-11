"use client"
import { BreadcrumbContext } from '@/context/provider/breadcrumbProvider'
import React from 'react';

export const GetBreadcrumLink = () => {
    const { link, setLink } = React.useContext(BreadcrumbContext);
    return link
}

export const UpdateBreadcrumLink = (newLink) => {
    const { link, setLink } = React.useContext(BreadcrumbContext);
    setLink(newLink)
}