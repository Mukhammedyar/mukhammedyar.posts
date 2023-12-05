import React from 'react'
import PostItem from '../postItem/postItem'
import './postList.css'

export default function PostList({ posts, remove }) {
  

  return (
    <div className="postList">
      <h1>Posts</h1>
      <PostItem posts={posts} deletePost={remove} />
    </div>
  )
}
