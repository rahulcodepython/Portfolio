"use client"
import { BreadcrumbContext } from '@/context/provider/breadcrumbProvider'
import React from 'react';

export const useBreadcrumbContext = () => {
    React.useContext(BreadcrumbContext);
}