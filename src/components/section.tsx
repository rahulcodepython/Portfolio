import { cn } from '@/lib/utils'
import React from 'react'

const Section = ({ className, id, children }: { className?: string, id?: string, children: React.ReactNode }) => {
  return (
    <div className={cn("w-full max-w-6xl container mx-auto flex flex-col gap-8 items-center justify-center", className)} id={id}>
      {children}
    </div>
  )
}

export default Section