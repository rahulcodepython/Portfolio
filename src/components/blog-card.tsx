import { BlogItemType } from "@/types"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AnimatedCard from "./animated-card"

const BlogCard = ({ children, blog }: { children?: React.ReactNode; blog: BlogItemType }) => {
    return (
        <AnimatedCard className="bg-white dark:bg-bg-dark rounded-lg overflow-hidden">
            <Image src={blog.image} alt={blog.title} className="w-full h-48 object-cover" width={500} height={300} />
            <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-bold">{blog.title}</h3>
                <p className="text-gray-600 dark:text-white">{blog.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-white flex items-center gap-1">
                        <Calendar className="w-4 h-4 -mt-1" />
                        <span>
                            {blog.date}
                        </span>
                    </span>
                    <Link href={`/blog/${blog._id}`} className="text-primary font-medium flex items-center gap-1 hover:text-primary hover:scale-105 transition-transform duration-200">
                        <span>
                            Read More
                        </span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                {children}
            </div>
        </AnimatedCard>
    )
}

export default BlogCard