import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Blog from './Components/Blog';
import About from './Components/About';
import NewsLetter from './Components/NewsLetter';
import Recent from './Components/Recent';
import Tag from './Components/Tag';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
// import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 1 login, 0-not login
      auth: false,
      posts:null
    }
  }
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
  //     // console.log("success",response)
  //     this.setState({posts:response.data})
  //   }).catch((error)=>{
  //     console.log("error",error)
  //   })
  // }
  loginHandler = () => {
    this.setState({
      auth: !this.state.auth
    })
  }

  render() {
    return (
      <Router>
        <Header isLogged={this.loginHandler} status={this.state.auth} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={this.state.auth === false ? <Navigate to="/" /> : <Blog />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/tag" element={<Tag />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    )
  }
}

export default App;

// statefull components wo components hote hai jo state mai kuch value store ho aur render mai changes ho usse statefull components bolte hai 
// stateless components wo components hote hai jo state mai kuch value store nahi hoti
//Q1.MOunting Components
// ans:-these methods are called in the following order when an instance of a component is being created and inserted into the DOM.
//1.1 contructor(),static getDerivedStateFromProps(),render(),componentDidMount()
//Q2. Updating Components
//ans:-these methods are called in the following order when a component is being re-rendered or updating due to changes in props or state.
//1.1 static getDerivedStateFromProps(),shouldComponentUpdate(),render(),getSnapshotBefore,ComponentDidUpdate()
//Q3. Unmounting Components
//ans:-these methods are called in the following order when a component is being removed from the DOM
//1.1 componentWillUnmount()
