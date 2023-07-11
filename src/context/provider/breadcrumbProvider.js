'use client';
import React from "react";

export const BreadcrumbContext = React.createContext({})

export const BreadcrumbContextProvider = ({ children }) => {
    const [link, setLink] = React.useState([])

    return (
        <BreadcrumbContext.Provider value={{ link, setLink }}>
            {children}
        </BreadcrumbContext.Provider>
    )
};