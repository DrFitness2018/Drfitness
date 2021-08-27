import React,{useState,useEffect} from 'react'
import {Splash,Header, usertabs} from './Components'
import Approuter from './Config/router'
import './App.css';


  function App() {
    const [open, setOpen] = useState(false);
   
    return(
      <div 
      style={{
        
      }}
      className="main"
      >
        <div 
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.61)",
        }}
        > 
        {/* <Header /> */}
        {/* <Splash /> */}
        <div style={{
          paddingTop:'100px'
        }}>
      <Approuter />
      <usertabs/>
      </div>
        </div>
 
      </div>
    )};
  
  export default App;

