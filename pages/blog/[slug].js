import React from 'react'
import Head from 'next/head'
import BlogSideBar from '../../components/BlogSideBar'
import styles from '../../styles/Blog.module.css'

const BlogPost = ({ blog }) => {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />

        <meta name="description" content={blog.blogs[0].previewContent} />
        <title>{blog.blogs[0].title}</title>

      </Head>

      <div className={styles.blogContainer}>
        <div className={styles.blogfirstCol}>
          <img src={blog.blogs[0].image.url} alt={blog.blogs[0].title} loading="lazy" />
          <h1>{blog.blogs[0].title}</h1>
          <div className={styles.previewContent}>
            {blog.blogs[0].previewContent}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: blog.blogs[0].content.html }}
            className={styles.blogContent}
          >
          </div>
          <hr className="box-line-dashed"></hr>
        </div>
        <div className={styles.blogSecondCol}>
          <BlogSideBar />
        </div>

      </div >
    </>
  )
}

export default BlogPost

export async function getServerSideProps(context) {
  const { params } = context
  const slug = params.slug

  const req = await fetch("https://api-us-east-1.graphcms.com/v2/ckvbhd3dw0cs901y04kmdehj1/master", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query: `
      query getBlog($slug: String){
        blogs(where: {slug: $slug }){
          title
          previewContent
          content{
            raw
            html
          }
          image {
            url
          }
        }
      }`,
      variables: { slug }
    })
  })
  const res = await req.json()
  const { data } = res

  return {
    props: {
      blog: data
    }
  }

}
