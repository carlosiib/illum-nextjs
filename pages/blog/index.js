import React from 'react'


const Blog = ({ users }) => {
  return (
    <div>
      <p >Blog</p>
      {users && users.map(u => (<p key={u.id}>{u.name}</p>))}
    </div >

  )
}

export default Blog

// Executed in server
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const req = await res.json()
    return {
      props: {
        users: req
      }
    }
  } catch (error) {
    console.log(error)
  }
}
