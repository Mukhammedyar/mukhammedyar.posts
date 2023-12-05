import {Link} from 'react-router-dom'
import './postItem.css'


 function PostItem({ posts, deletePost }) {

  return (
      <>
      {posts.map((post, index) => 
        <div key={index } className="postItem">
            <div className='id-text'>
                <div className="id">
                    <span>{post.id}</span>
                </div>
                <div className="textPostItem">
                    <strong>{post.title}</strong>
                    <p>{post.body}</p>
                </div>    
            </div>
          {/* <button className="btn-light border-primary p-2 px-3 mx-2 btn" onClick={() => router.push(`/posts/${post.id}`)}>Open</button> */}
          <Link to={`/posts/${post.id}`}>
            <button className="btn-light border-primary p-2 px-3 mx-2 btn">Open</button>
          </Link>
          <button onClick={() => deletePost(post)} className="btn btn-outline-danger">
            Delete
          </button>
        </div>
        )}
    </>
  )
}

export default PostItem