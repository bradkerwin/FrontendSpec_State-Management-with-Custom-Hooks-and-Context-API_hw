import React, { useEffect, useState } from 'react'

const usePosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        setPosts(await response.json())
    }

  return posts
}

export default usePosts