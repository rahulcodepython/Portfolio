import MarkdownRender from '@/components/markdown';
import { getBaseUrl } from '@/utils/GetBaseUrl';
import matter from "gray-matter";
import { Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import CopyToClipboard from './copy-to-clipboard';


const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    if (!id) {
        return notFound();
    }

    const baseurl = await getBaseUrl();

    const response = await fetch(`${baseurl}/api/blog-single?_id=${id}`, {
        cache: 'force-cache',
        next: { revalidate: 120 },
    });

    if (!response.ok) {
        return notFound();
    }

    const responseData = await response.json();

    const { content, data } = matter(responseData);

    return (
        <article className="container mx-auto bg-white dark:bg-bg-dark rounded-xl shadow-md overflow-hidden my-12 flex flex-col justify-start">
            {
                <div className="p-8">
                    <h1 className="text-4xl font-bold mb-4 w-full text-center">
                        {data.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-sm mb-8 w-full">
                        <div className="flex items-center gap-2">
                            <User className="w-3 h-3 -mt-0.5" />
                            <span>{"Rahul Das"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 -mt-0.5" />
                            <span>{data.date}</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <p className="text-xl mb-8 border-l-4 border-primary pl-4 py-2 italic">
                            {data.description}
                        </p>
                    </div>
                    <MarkdownRender className='my-8 container mx-auto'>
                        {content}
                    </MarkdownRender>
                    <CopyToClipboard />
                </div>
            }
        </article>
    )
}

export default Blog