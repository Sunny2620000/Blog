import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props){
return (
    <>
    <div className="header_section">
         <div className="container-fluid header_main">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <Link className="logo" to="/"><img src="assets/images/logo.png"/></Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/blog" >Blog</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/recent">Features</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" onClick={props.isLogged}>{props.status ? "Logout" : "Login"}</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="#"><img src="assets/images/serach-icon.png"/></Link>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
         
      </div>
    </>
    
)
}