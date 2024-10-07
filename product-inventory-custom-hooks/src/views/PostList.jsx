import React from 'react'
import usePosts from '../hooks/usePosts'

const PostList = () => {
    const posts = usePosts()

  return (
    <>
        {posts}
    </>
  )
}

export default PostList