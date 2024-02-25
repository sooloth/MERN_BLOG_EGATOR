import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/mern-blog-assets/avatar1.jpg'


const PostAuthor = () => {
  return (
    <div>
      <Link to={`/posts/users/sdfdf`} className='post__author'>
        <div className="post__author-avatar">
            <img src={Avatar} alt=""  />
        </div>
        <div className="post__author-details">
            <h5>By: Ernest Achiever</h5>
            <small>Just Now</small>
        </div>
      </Link>
    </div>
  )
}

export default PostAuthor
