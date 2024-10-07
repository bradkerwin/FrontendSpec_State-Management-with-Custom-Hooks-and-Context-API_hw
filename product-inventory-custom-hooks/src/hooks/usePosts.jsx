import React, { useEffect, useState } from 'react'

const usePosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async() => {
        const response = fetch('https://jsonplaceholder.typicode.com/guide/')
        .then((response) => response.json())
        setPosts(response)
    }

  return posts
}

export default usePosts