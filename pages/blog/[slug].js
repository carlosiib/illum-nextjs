import React from 'react'
import styles from '../../styles/Blog.module.css'

const BlogPost = ({ blog }) => {

  console.log(blog.blogs[0])
  return (
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

    </div >
  )
}

export default BlogPost

export async function getStaticPaths() {
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

  const paths = res.data.blogs.map((post) => {
    return {
      params: {
        slug: `${post.slug}`
      }
    }
  })

  return {
    paths,
    fallback: false
  }


}

export async function getStaticProps(context) {
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
  console.log(res)

  return {
    props: {
      blog: data
    }
  }

}
