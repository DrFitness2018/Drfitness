import logo from './logo.svg';
import React,{useState,useEffect} from 'react'
import Header from './Components/header'
import { Wave, Random } from 'react-animated-text';
import {Fade,Button} from 'react-bootstrap'
import Approuter from './Config/router'
import './App.css';


  function App() {
    const [open, setOpen] = useState(false);
    // useEffect(()=>{
    //   const timer = setTimeout(() => console.log("Hello, World!"), 3000);
    //   return () => clearTimeout(timer);
    // },[])

    return(
      <div className="App">
      <Header />
      <Approuter />
      </div>
    )};
  
  export default App;

