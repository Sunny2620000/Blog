import React from "react";
export default function Recent(){
    return(
        <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 col-sm-12">
                  <div className="about_img"><img src="assets/images/img-10.png"/></div>
                  <div className="like_icon"><img src="assets/images/like-icon.png"/></div>
                  <p className="post_text">Post By : 09/06/2019</p>
                  <h2 className="most_text">Most Awesome Blue Lake With Snow <br/>foreste</h2>
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
                  <div className="newsletter_main">
                     <h1 className="recent_taital">Recent post</h1>
                     <div className="recent_box">
                        <div className="recent_left">
                           <div className="image_6"><img src="assets/images/img-6.png"/></div>
                        </div>
                        <div className="recent_right">
                           <h3 className="consectetur_text">Consectetur adipiscing</h3>
                           <p className="dolor_text">ipsum dolor sit amet, consectetur adipiscing </p>
                        </div>
                     </div>
                     <div className="recent_box">
                        <div className="recent_left">
                           <div className="image_6"><img src="assets/images/img-7.png"/></div>
                        </div>
                        <div className="recent_right">
                           <h3 className="consectetur_text">Consectetur adipiscing</h3>
                           <p className="dolor_text">ipsum dolor sit amet, consectetur adipiscing </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}