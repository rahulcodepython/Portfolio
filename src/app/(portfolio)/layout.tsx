import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import React from 'react'

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <FlickeringGrid
                className="absolute inset-0 z-0 size-full w-full h-full"
                squareSize={2}
                gridGap={6}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.1}
            />
            {children}
        </main>
    )
}

export default PortfolioLayout