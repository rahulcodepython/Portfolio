import BlogCard from '@/components/blog-card'
import Heading from '@/components/heading'
import Section from '@/components/section'
import { BlogItemType } from '@/types'

const Blogs = ({ blogs }: { blogs: BlogItemType[] }) => {
    return (
        <Section id='blogs' className="max-w-7xl">
            <Heading title="Blogs" />
            {
                blogs.length === 0 && <div className='text-center'>No blogs available</div>
            }
            {
                blogs.length !== 0 && <div className="flex flex-wrap gap-6 justify-center">
                    {
                        blogs.map((blog) => {
                            return <BlogCard key={blog._id} blog={blog} />
                        })
                    }
                </div>
            }
        </Section>
    )
}

export default Blogs