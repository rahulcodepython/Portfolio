import { cn } from '@/lib/utils'
import React from 'react'

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    className?: string
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '', ...props }) => {
    return (
        <div className={cn(`shadow-sm hover:shadow-2xl hover:scale-110 transition-all ease-in-out duration-300`, className)} {...props}>
            {children}
        </div>
    )
}

export default AnimatedCard