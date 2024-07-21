import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import HeaderSection from "./HeaderSection";
import About from "./About";
import Blog from "./Blog";
import NewsLetter from "./NewsLetter";
import Recent from "./Recent";
import Tag from "./Tag";
import Contact from "./Contact";

export default function Home(){
    return(
        <>
            
            <HeaderSection/>
            <About/>
            <Blog/>
            <NewsLetter/>
            <Recent/>
            <Tag/>
            <Contact/>
            
        </>

    )
}