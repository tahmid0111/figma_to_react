import {useEffect, useState} from 'react'

const BlogTwo = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.org/users')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return (
    <div>
      {
        posts.map((post, index) => <p key={index}>{post.email}</p>)
      }
    </div>
  )
}

export default BlogTwo
