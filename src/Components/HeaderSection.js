import React from 'react'

export default function HeaderSection() {
  return (
    <>
    <div className="container-fluid">
            <div className="banner_section layout_padding">
               <h1 className="banner_taital">welcome <br/>our blog</h1>
               <div id="my_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="image_main">
                           <div className="container">
                              <img src="assets/images/img-1.png" className="image_1"/>
                              <div className="contact_bt"><a href="contact.html">Contact Us</a></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="image_main">
                           <div className="container">
                              <img src="assets/images/img-1.png" className="image_1"/>
                              <div className="contact_bt"><a href="contact.html">Contact Us</a></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="image_main">
                           <div className="container">
                              <img src="assets/images/img-1.png" className="image_1"/>
                              <div className="contact_bt"><a href="contact.html">Contact Us</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>
         <div className="container">
    <div className="touch_setion">
       <div className="box_main">
          <div className="image_2 active">
             <h4 className="who_text active">Who am i</h4>
          </div>
       </div>
       <div className="box_main">
          <div className="image_3">
             <h4 className="who_text">Get In Touch</h4>
          </div>
       </div>
       <div className="box_main">
          <div className="image_4">
             <h4 className="who_text">Facebook</h4>
          </div>
       </div>
    </div>
 </div>
    </>
    
  )
}
