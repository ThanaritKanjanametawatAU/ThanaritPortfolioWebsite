import { getPostData, getAllPostSlugs } from '@/lib/mdx'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)
  
  return {
    title: `${post.title} - Thanarit Kanjanametawat`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Thanarit Kanjanametawat'],
      images: [post.image],
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostData(slug)

  return (
    <article className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/#blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <header className="mb-12">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold
            prose-h1:text-4xl prose-h1:mb-8
            prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
            prose-p:mb-6 prose-p:leading-relaxed
            prose-pre:bg-secondary prose-pre:border
            prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-ul:my-6 prose-ol:my-6
            prose-li:my-2
            prose-img:rounded-lg prose-img:my-8
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-primary prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </div>
    </article>
  )
}