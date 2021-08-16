import logo from './logo.svg';
import React,{useState,useEffect} from 'react'
import Header from './Components/header'
import { Wave, Random } from 'react-animated-text';
import {Fade,Button} from 'react-bootstrap'
import Approuter from './Config/router'
import './App.css';
import imgs from "./Images/Chor.jpg";
import Splash from './Components/Splash'


  function App() {
    const [open, setOpen] = useState(false);
    // useEffect(()=>{
    //   const timer = setTimeout(() => console.log("Hello, World!"), 3000);
    //   return () => clearTimeout(timer);
    // },[])

    return(
      <div 
      style={{
        // display:'flex',
        // flexDirection:'column',
        // // alignItems:'center',
        // justifyContent:'center',
        // backgroundColor: "#166d3b",
        // // background: "-webkit-linear-gradient(#233329, #166d3b)",
        // backgroundImage: `url(${imgs})`,
        // backgroundSize:'100% 100%',
        // objectFit:'contain',
        // backgroundRepeat:'repeat',
        
      }}
      className="main"
      >
        <div 
        style={{
          // backgroundColor: "rgba(100, 181, 246, 0.61)",
          // backgroundColor: "rgba(144, 202, 249, 0.61)",
          backgroundColor: "rgba(0, 0, 0, 0.61)",
          // backgroundColor: "BLACK",
          // backgroundColor: "rgba(165, 214, 167, 0.61)",
          // backgroundColor: "rgba(245, 245, 245, 0.61)",
          // backgroundColor: "rgba(67, 160, 71, 0.61)",
          // backgroundColor: "rgba(67, 160, 71, 0.61)",
          // backdropFilter: "blur(5px)",
        }}
        > 
        <Header />
        {/* <Splash /> */}
      <Approuter />
        </div>
 
      </div>
    )};
  
  export default App;

