import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <ul className='footer__categories'>
          <li><Link to="/posts/categories/Agriculture">Agriculture</Link></li>
          <li><Link to="/posts/categories/Business">Business</Link></li>
          <li><Link to="/posts/categories/Education">Education</Link></li>
          <li><Link to="/posts/categories/Entertainment">Entertainment</Link></li>
          <li><Link to="/posts/categories/Art">Art</Link></li>
          <li><Link to="/posts/categories/Investment">Investment</Link></li>
          <li><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
          <li><Link to="/posts/categories/Weather">Weather</Link></li>
        </ul>
        <div className="footer__copyright">
          <small>All Right Reserved &copy; Copyright, Sooloth SCH </small>
        </div>
      </footer>
    </div>
  )
}

export default Footer

