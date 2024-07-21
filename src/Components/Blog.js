import React, { useState,useEffect } from "react";
import Post from "./Post";
import axios from "../Services/Instance";

export default function Blog(){
   const [post,setdata] = useState([]);
   useEffect(()=>{
      const fetchdata = async()=>{
         try{
            const response = await axios.get('posts');
            // console.log("response",response)
            setdata(response.data);
            // console.log("setdata",[post])
         }catch{
            console.log("error")
         }
      }
      fetchdata();
   },[])

   const deletePostHandler = (id) =>{
      // event.preventDefault();
      alert(id)
      try{
         axios.delete('posts/'+id).then((response)=>{
            console.log("resposne",response)
      }).catch((error)=>{
         console.log("error",error)
      })
      }catch{
         console.log("error")
      }
   }
   const getTenPost = post.slice(0,5)
    return(
        <div className="about_section layout_padding">
         <div className="container">
            {getTenPost.map((items,i)=>{ return <Post delete={()=>deletePostHandler(items.id)} key={i} item={items}/>})}
         </div>
      </div>
    )
}