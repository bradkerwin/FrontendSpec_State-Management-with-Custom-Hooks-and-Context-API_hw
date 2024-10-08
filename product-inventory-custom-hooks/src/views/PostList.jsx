import React from 'react'
import usePosts from '../hooks/usePosts'

const PostList = () => {
    const posts = usePosts()
    console.log(posts);
  return (
    <>
        {posts.map(post => (
          <div>
            <li>Body: {post.body}</li>
            <li>ID: {post.id}</li>
            <li>Title: {post.title}</li>
            <li>User ID: {post.userId}</li>
            <br></br>
          </div>
        ))}
    </>
  )
}

export default PostList