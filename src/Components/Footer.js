import React from "react";

export default function Footer(){
    return (
        <div className="footer_section layout_padding">
         <div className="container">
            <div className="footer_logo"><a href="index.html"><img src="assets/images/footer-logo.png"/></a></div>
            <div className="footer_menu">
               <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="features.html">Features</a></li>
                  <li><a href="contact.html">contact us</a></li>
               </ul>
            </div>
            <div className="contact_menu">
               <ul>
                  <li><a href="#"><img src="assets/images/call-icon.png"/></a></li>
                  <li><a href="#">Call : +01 1234567890</a></li>
                  <li><a href="blog.html"><img src="assets/images/mail-icon.png"/></a></li>
                  <li><a href="features.html">demo@gmail.com</a></li>
               </ul>
            </div>
         </div>
      </div>
    )
}