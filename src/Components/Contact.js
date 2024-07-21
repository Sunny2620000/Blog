import React from "react";
import axios from "../Services/Instance";
export default function Contact() {
  const submitHandler=(event)=>{
    event.preventDefault();
    alert("Submitted")
    const name=event.target.name.value
    const email = event.target.email.value
    const phone = event.target.phone.value
    const message = event.target.message.value
    // console.log("name",name,"email",email,"phone",phone,"message",message)
    try{
      const result = axios.post("posts",{
          name:name,
          email:email,
          phone:phone,
          message:message
      }).then((response) =>{
          console.log("response",response)
          event.target.reset() //for reset the data into the form
      }).catch((error)=>{
        console.log("error",error)
      })
    }catch{
      console.log("error")
    }
  }
  return (
    <div className="contact_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li 
                  data-target="#carouselExampleIndicators" 
                  data-slide-to="0" 
                  className="active"
                  style={{ textIndent: '0', border: 'none', color: '#000', fontSize: '18px', textAlign: 'center' }}
                >
                  1
                </li>
                <li 
                  data-target="#carouselExampleIndicators" 
                  data-slide-to="1"
                  style={{ textIndent: '0', border: 'none', color: '#000', fontSize: '18px', textAlign: 'center' }}
                >
                  2
                </li>
                <li 
                  data-target="#carouselExampleIndicators" 
                  data-slide-to="2"
                  style={{ textIndent: '0', border: 'none', color: '#000', fontSize: '18px', textAlign: 'center' }}
                >
                  3
                </li>
                <li 
                  data-target="#carouselExampleIndicators" 
                  data-slide-to="3"
                  style={{ textIndent: '0', border: 'none', color: '#000', fontSize: '18px', textAlign: 'center' }}
                >
                  4
                </li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="contact_img"></div>
                </div>
                <div className="carousel-item">
                  <div className="contact_img"></div>
                </div>
                <div className="carousel-item">
                  <div className="contact_img"></div>
                </div>
                <div className="carousel-item">
                  <div className="contact_img"></div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={submitHandler}>
          <div className="col-md-6">
            <div className="mail_section">
              <h1 className="contact_taital">Contact us</h1>
              <input type="text" className="email_text" placeholder="Name" name="name"/>
              <input type="text" className="email_text" placeholder="Phone" name="phone"/>
              <input type="email" className="email_text" placeholder="Email" name="email"/>
              <textarea className="massage_text" placeholder="Message" rows="5" id="comment" name="message"></textarea>
              <div className="send_bt"><button type="submit" className="btn btn-primary">send</button></div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
