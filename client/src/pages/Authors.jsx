import React, { useState } from 'react'

import Avatar1 from '../images/mern-blog-assets/avatar1.jpg'
import Avatar2 from '../images/mern-blog-assets/avatar2.jpg'
import Avatar3 from '../images/mern-blog-assets/avatar3.jpg'
import Avatar4 from '../images/mern-blog-assets/avatar4.jpg'
import Avatar5 from '../images/mern-blog-assets/avatar5.jpg'
import { Link } from 'react-router-dom'

const authorsData = [
  {id: 1, avatar: Avatar1, name: 'Plex Chonthiza', posts: 3},
  {id: 2, avatar: Avatar2, name: 'Phone Phonetix', posts: 5},
  {id: 3, avatar: Avatar3, name: 'Pele Guatemala', posts: 0},
  {id: 4, avatar: Avatar4, name: 'Phetsomphone Keovongsa', posts: 2},
  {id: 5, avatar: Avatar5, name: 'Sitthison Singsuvong', posts: 1}, 
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className="authors">
      {authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={avatar} alt={` Image of ${name}`} />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'>No users/authors found.</h2>}
    </section>
  )
}

export default Authors
