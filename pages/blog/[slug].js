import React from 'react'
import { useRouter } from 'next/router'

const BlogPost = () => {
  const router = useRouter();
  const slug = router.query.slug

  return (
    <div>
      <h1>Blog post {slug}</h1>
    </div>
  )
}

export default BlogPost
