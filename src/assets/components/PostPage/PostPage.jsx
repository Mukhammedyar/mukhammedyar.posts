import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../../../API/PostService';
import { useFentching } from '../../../Hooks/useFetching';
import Loader from '../Loader/Loader';


export default function PostPage() {
  const param = useParams()
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])

  const [fetchPostsById, isLoading, error] = useFentching(async id => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  const [fetchCommentsById, isComLoading, comError] = useFentching(async id => {
    const response = await PostService.getCommentsById(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostsById(param.id)
    fetchCommentsById(param.id)
  },[])
  
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      {isLoading 
        ? <Loader/>
        : 
        <div className="post">
            <h3 className='text-center text-primary mt-5'>You opened {post.id}s post</h3>
            <hr />
          <h4>Title: {post.title}</h4>
          <p>{post.body }</p>
        </div>
      }
      <div className='d-flex flex-column justify-content-center gap-2'>
        <h2 className='mb-5 mt-3 border-top pt-3'>Comments</h2>
      {isLoading
        ? <Loader />
        : comments.map(com => (
          <div className='border p-3 card' key={com.id}>
            <strong className='w-50 rounded p-1 px-3'><span className='text-primary'>By </span>{com.email}</strong>
            <h4>{ com.name}</h4>
            <p>{ com.body}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}
