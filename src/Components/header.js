import "../App.css";
import React, { useState } from "react";
import { Wave, Random } from "react-animated-text";
import logo from "../Images/logoMuqqa.png";

function App() {
  return (
    <div style={{margin:"0%"}}>
      <div className="App-header" style={{
                // backgroundColor: "rgba(28, 59, 23, 0.61)",
                // backgroundColor: "rgba(144, 202, 249, 0.61)",
                // backgroundColor: "rgba(0, 0, 0, 0.61)",
                backgroundColor: "rgba(255, 255, 255, 0.61)",
                backdropFilter: "blur(5px)",
      }}>
        <img src={logo} width="150" style={{marginRight:''}}></img>
        {/* <Wave text="Dr Fitness" effect="stretch" effectChange={2.0} /> */}
      </div>
    </div>
  );
}

export default App;
