"use client"
import MarkdownRender from '@/components/markdown'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { DownloadIcon } from 'lucide-react'
import React from 'react'

const Editor = () => {
    const [content, setContent] = React.useState('')

    return (
        <section className='my-12 flex flex-1 items-center justify-center'>
            <div className="container mx-auto h-full">
                <div className="grid grid-cols-2 gap-2 h-full">
                    <Textarea className="p-4 h-full focus:outline-none border overflow-y-scroll scroll-smooth" value={content} onChange={e => setContent(e.target.value)}></Textarea>
                    <div className='h-full p-4 border flex flex-col overflow-y-hidden scroll-smooth'>
                        <MarkdownRender className='flex-1'>
                            {content}
                        </MarkdownRender>
                        <div className='flex gap-2 bg-primary'>
                            <Button className='w-full' onClick={() => {
                                const blob = new Blob([content], { type: 'text/markdown' })
                                const url = URL.createObjectURL(blob)
                                const a = document.createElement('a')
                                a.href = url
                                a.download = 'file.md'
                                a.click()
                                URL.revokeObjectURL(url)
                            }}>
                                <DownloadIcon className='mr-2 w-4 h-4' />
                                Download Markdown File
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Editor