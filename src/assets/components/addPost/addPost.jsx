import React, { useState } from 'react'
import './addPost.css'

export default function AddPost({ create, onClick }) {
  const [post, setPost] = useState({ title: '', description: '' })

  const addPost = (e) => {
    e.preventDefault()
    if (post.title !== "", post.description !== "") {
      const newPost = { ...post, id: Date.now() }
      setPost({ title: '', description: '' })
      create(newPost)
      onClick()
    } else {
      alert("please provide a form")
    }
  }

  return (
    <form action="submit" className=''>
      <input
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder='title'
      />
      <input
        type="text"
        value={post.description}
        placeholder='description'
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <button type='submit' onClick={addPost}>Add</button>
    </form>
  )
}
