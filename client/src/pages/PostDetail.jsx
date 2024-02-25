import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/mern-blog-assets/blog22.jpg'


const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consectetur officia autem illum odit, error, molestiae accusamus 
            eligendi iusto id vel placeat maiores iure fugiat at vero modi consequatur voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt iste iusto 
          quo cum et, voluptatem at, modi harum eaque amet expedita culpa. Nulla, molestias 
          a porro repellat maxime ut mollitia iste reiciendis autem natus! Eum dignissimos 
          voluptate saepe quia possimus suscipit labore tempore ad dolorem doloremque quae 
          itaque cum porro tenetur quis quo voluptas molestiae omnis ratione, totam dolore!
        </p>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorum magni 
        excepturi ea temporibus iste laboriosam debitis unde dignissimos animi delectus 
        possimus, in quae! Rerum omnis sapiente earum quia eveniet labore necessitatibus iure 
        similique eius. Soluta consectetur nobis tempora nihil sint facere dolores illum 
        inventore, distinctio fugit! Reprehenderit laudantium, possimus ipsa eos atque at 
        impedit vitae fugit delectus quas officiis modi quis ipsam consequuntur incidunt 
        nihil dolorem ut quo culpa mollitia vel nobis molestiae architecto? Quis consequatur, 
        vitae amet explicabo corporis numquam similique expedita, vero hic ipsum delectus 
        dicta veniam voluptas reprehenderit temporibus voluptatum neque voluptates, id fugiat.
        Quo, reiciendis numquam a beatae vitae, veniam dolorum distinctio atque pariatur ex labore.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id dolorum dignissimos expedita 
          officiis aliquid iste voluptate beatae natus eligendi.
        </p>
      </div>
    </section>
  )
}

export default PostDetail
