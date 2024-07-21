import React from 'react'
import { Link } from 'react-router-dom'
export default function Post(props) {
    // console.log("props",props)
  return (
<div className="row">
               <div className="col-lg-8 col-sm-12">
                  <div className="about_img"><img src="assets/images/img-8.png"/></div>
                  <div className="like_icon"><img src="assets/images/like-icon.png"/></div>
                  <p className="post_text">Post By : 09/06/2019</p>
                  <h2 className="most_text">{ props.item && props.item.title ? props.item.title : ''}<br/>River {props.item && props.item.id ? props.item.id : ''}</h2>
                  <p className="lorem_text">{props.item && props.item.body ? props.item.body:''}</p>
                  <div className="social_icon_main">
                     <div className="social_icon">
                        <ul>
                           <li><a href="#"><img src="assets/images/fb-icon.png"/></a></li>
                           <li><a href="#"><img src="assets/images/twitter-icon.png"/></a></li>
                           <li><a href="#"><img src="assets/images/instagram-icon.png"/></a></li>
                        </ul>
                     </div>
                     <div className="read_bt"><Link to="#">Read More</Link></div>
                     <div className="read_bt"><button type="button" onClick={props.delete}className='btn btn-danger'>Delete</button></div>

                  </div>
               </div>
               <div className="col-lg-4 col-sm-12">
                  <div className="about_main">
                     <h1 className="follow_text">CONNECT & FOLLOW</h1>
                     <div className="follow_icon">
                        <ul>
                           <li><a href="#"><img src="assets/images/fb-icon-1.png"/></a></li>
                           <li><a href="#"><img src="assets/images/twitter-icon-1.png"/></a></li>
                           <li><a href="#"><img src="assets/images/linkedin-icon-1.png"/></a></li>
                           <li><a href="#"><img src="assets/images/instagram-icon-1.png"/></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
  )
}
