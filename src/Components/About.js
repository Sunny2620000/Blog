import React from "react";

export default function About(){
    return(
        <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 col-sm-12">
                  <div className="about_img"><img src="assets/images/about-img.png"/></div>
                  <div className="like_icon"><img src="assets/images/like-icon.png"/></div>
                  <p className="post_text">Post By : 09/06/2019</p>
                  <h2 className="most_text">Most Awesome Blue Lake With Snow <br/>Mountain</h2>
                  <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                  <div className="social_icon_main">
                     <div className="social_icon">
                        <ul>
                           <li><a href="#"><img src="assets/images/fb-icon.png"/></a></li>
                           <li><a href="#"><img src="assets/images/twitter-icon.png"/></a></li>
                           <li><a href="#"><img src="assets/images/instagram-icon.png"/></a></li>
                        </ul>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12">
                  <div className="image_5"><img src="assets/images/img-5.png"/></div>
                  <h1 className="about_taital">About Us</h1>
                  <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                  <div className="read_bt_1"><a href="#">Read More</a></div>
               </div>
            </div>
         </div>
      </div>
    )
}