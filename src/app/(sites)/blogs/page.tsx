import BlogCard from "@/components/blog-card"
import Heading from "@/components/heading"
import Section from "@/components/section"
import { BlogItemType } from "@/types"
import { getBaseUrl } from "@/utils/GetBaseUrl"

const Blogs = async () => {
    const baseUrl = await getBaseUrl();

    const response = await fetch(`${baseUrl}/api/blogs`, {
        cache: 'force-cache',
        next: { revalidate: 120 },
    });

    if (!response.ok) {
        return <Section className="mt-8 flex flex-col justify-start">
            <Heading title="Blogs" />
            <div className="text-center p-4">
                Failed to load blogs
            </div>
        </Section>
    }

    const blogs: BlogItemType[] = await response.json();

    return (
        <Section className="mt-8 flex flex-col justify-start">
            <Heading title="Blogs" />
            {
                blogs.length === 0 && <div className="text-center p-4">
                    No blogs found
                </div>
            }

            {
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        blogs.map((blog) => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))
                    }
                </div>
            }
        </Section>
    )
}

export default Blogs