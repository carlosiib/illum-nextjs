import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../../components/Banner'
import BlogSideBar from '../../components/BlogSideBar'
import styles from '../../styles/Blog.module.css'

const Blog = ({ blog }) => {
  const { blogs } = blog

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="description" content="Start learninig with Illumidesk Blog." />
        <title>ILLUMIDESK | BLOG</title>
      </Head>

      <Banner
        title="Blog"
        subtitle=""
        path="svg/banner-instructor-learner.svg"
        alt="Instructors and learners"
      />
      <div className={styles.blogContainer}>
        <div className={styles.blogfirstCol}>
          {blogs && blogs.map(blog =>
          (
            <div key={blog.id} className={styles.blogItem}>
              <img className={styles.blogEntryImg} src={blog.image.url} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p>{blog.previewContent}</p>
              <Link href={`/blog/${blog.slug}`}>
                <a className="path-content-anchor">
                  Read More
                  <i className={styles.blogArrow}>&#8594;</i>
                </a>
              </Link>
            </div>
          ))
          }

        </div>
        <div className={styles.blogSecondCol}>
          <BlogSideBar />
        </div>
      </div>
    </div >

  )
}

export default Blog


export async function getServerSideProps() {
  const GRAPHCMS_API_KEY = process.env.GRAPHCMS_API_KEY;

  try {
    const req = await fetch(`${GRAPHCMS_API_KEY}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        query: `
        query{
          blogs{
            id
            title
            slug
            previewContent
            image {
              url
            }
          }  
        }        
        `
      })
    })
    const res = await req.json()
    const { data } = res

    return {
      props: {
        blog: data
      }
    }
  } catch (error) {
    console.log(error)
  }
}
