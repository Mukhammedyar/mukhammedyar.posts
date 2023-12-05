import React, { useEffect, useRef, useState } from 'react'
import PostError from '../../../API/Error/error'
import PostService from '../../../API/PostService'
import { useFentching } from '../../../Hooks/useFetching'
import { useObserver } from '../../../Hooks/useObserver'
import { usePost } from '../../../Hooks/useSortedPosts'
import { getTolalCount } from '../../../utils/utils'
import AddPost from '../addPost/addPost'
import Loader from '../Loader/Loader'
import Modal from '../Modal/modal'
import PageCounter from '../PageCounter/PageCounter'
import PostFilter from '../PostFilter/PostFilter'
import PostList from '../PostList/postList'
import Sort from '../sort/sort'

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ query: '', sort: '' })
    const [visible, setVisible] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()
  
  const [fetchPosts, isLoading, postError] = useFentching(async(limit , page) => {
    const res = await PostService.getAll(limit, page);
    setPosts([...posts, ...res.data]);
    const totalCount=res.headers['x-total-count']
    setTotalPages(getTolalCount(totalCount, limit))
  })
  const sortedSearchedPosts = usePost(posts, filter.sort, filter.query)

  useObserver(lastElement,page < totalPages, isLoading, () => {
    setPage(page + 1)
  })
  
  useEffect(() => {
       fetchPosts(limit, page)
    }, [page, limit])

  const changePage=(page)=>{
    setPage(page);
  }

  const addPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePosts = (post) => {
    setPosts(posts.filter(p => p.id!== post.id))
   }
  return (
    <div className='main'>
        <div className='d-flex justify-content-around w-100 container align-items-center mt-5'>
          <button className='btn btn-primary' onClick={e => setVisible(!visible)}>Add New Post</button>  
        </div>
        <hr />
        <PostFilter
          filter={filter} 
          setFilter={setFilter} /
        >
        <Modal visible={visible} setVisible={setVisible}>
          <AddPost create={addPost} onClick={() => setVisible(!visible)} />
        </Modal> 

      <div>
        <Sort
          className="mt-3 m-3"
          value={limit}
          onChange={value => setLimit(value)}
          defaultValue="sort posts by numbers"
          options={[
            {value:5 , name: "5"},
            {value:10 , name: "10"},
            {value:25 , name: "25"},
            {value:-1 , name: "all posts"},
          ]}
        />
        {postError &&
          <PostError error={postError} />
        }
        { isLoading &&
           <Loader />
        }
        <PostList posts={sortedSearchedPosts} remove={removePosts} />
        <div className='bg-white p-5' ref={lastElement}></div>
        <PageCounter onClick={changePage} page={page} totalPages={totalPages} />
      </div>
    </div>
  )
}
