import React from "react";

export default function NewsLetter(){
    return (
        <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 col-sm-12">
                  <div className="about_img"><img src="assets/images/img-9.png"/></div>
                  <div className="like_icon"><img src="assets/images/like-icon.png"/></div>
                  <p className="post_text">Post By : 09/06/2019</p>
                  <h2 className="most_text">Most Awesome Blue Lake With Snow <br/>sky</h2>
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
                     <h1 className="newsletter_taital">NEWSLETTER</h1>
                     <div className="input_box">
                        <input type="text" className="input_text" placeholder="Enter Your email" name="Enter Your email"/>
                        <input type="text" className="input_text" placeholder="Your name" name="Your name"/>
                        <div className="send_text"><a href="#">Subscribe</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        
    )
}