import "../../App.css";
import React, { useState } from "react";
import { Wave, Random } from "react-animated-text";
import logo from "../../Images/logoMuqqa.png";

function Header() {
  return (
    <div style={{margin:"0%"}}>
      <div className="App-header" style={{
                backgroundColor: "rgba(255, 255, 255, 0.61)",
                backdropFilter: "blur(5px)",
                // backgroundColor:'white',
                // border:'10px solid #63d471'
      }}>
        <img src={logo} width="150" style={{marginRight:''}}></img>
      </div>
    </div>
  );
}

export default Header;
