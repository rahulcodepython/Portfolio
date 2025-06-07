import { BlogItemType } from '@/types'
import BlogCard from '../../components/blog-card'
import Heading from '../../components/heading'
import Section from '../../components/section'

const Blogs = ({ blogs }: { blogs: BlogItemType[] }) => {
    return (
        <Section id='blogs' className="max-w-7xl">
            <Heading title="Blogs" />
            {
                blogs.length === 0 && <div className='text-center'>No blogs available</div>
            }
            {
                blogs.length !== 0 && <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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