"use client"
import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';
import React from 'react';
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from 'sonner';

const MarkdownRender = ({ children, className = "" }) => {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            toast('Copied to clipboard')
        });
    };
    return (
        <article className={cn('prose dark:prose-invert dark:text-gray-200 max-w-full w-full', className)}>
            <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                    table: ({ children }) => (
                        <table className="w-full border-collapse border border-gray-300">{children}</table>
                    ),
                    th: ({ children }) => (
                        <th className="border border-gray-300 px-4 py-2 text-left">
                            {typeof children === 'string' || React.isValidElement(children) ? children : null}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="border border-gray-300 px-4 py-2">{children}</td>
                    ),
                    pre: ({ children }) => {
                        const codeText = children.props.children;

                        return <pre className="relative p-4 m-0 rounded-md bg-gray-200 dark:bg-black text-black dark:text-white">
                            {children}
                            <div className='absolute right-4 top-4'>
                                <Copy className='w-4 h-4 cursor-pointer' onClick={() => handleCopy(codeText)} />
                            </div>
                        </pre>
                    },
                    hr: () => (
                        <hr className="border-gray-300 dark:border-gray-600 my-2" />
                    ),
                }}>
                {children}
            </Markdown>
        </article>
    )
}

export default MarkdownRender