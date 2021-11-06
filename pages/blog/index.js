import React from 'react'
import Link from 'next/link'
import Banner from '../../components/Banner'
import styles from '../../styles/Blog.module.css'

const Blog = ({ blog }) => {
  const { blogs } = blog

  return (
    <div>
      <Banner
        title="Blog"
        subtitle=""
        path="svg/banner-instructor-learner.svg"
        alt="Instructors and learners"
        width="540"
        height="520"
      />
      <div className={styles.blogContainer}>
        <div className={styles.blogfirstCol}>
          {blogs && blogs.map(blog =>
          (
            <div key={blog.title} className={styles.blogItem}>
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
          <div>
            <h3>Search</h3>
            <input type="text" placeholder="Type your keywords" />
          </div>
          <div >
            <h3>Popular Post</h3>
          </div>
          <div>
            <h3>Categories</h3>
          </div>
          <div>
            <h3>Tags</h3>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Blog


export async function getStaticProps() {
  try {
    const req = await fetch("https://api-us-east-1.graphcms.com/v2/ckvbhd3dw0cs901y04kmdehj1/master", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        query: `
        query{
          blogs{
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
