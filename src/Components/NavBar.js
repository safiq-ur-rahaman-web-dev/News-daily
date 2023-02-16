import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
 
    return (
        <>
        
        <nav className="navbar navbar-expand-sm fixed-top bg-light dark  ">
  <div className="container">
    <Link className="navbar-brand" to="/" style={{fontFamily: 'monospace', fontSize:'30px'}}>NewsDaily</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Top Headlines</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        </>
      
    )
  
}
export default NavBar