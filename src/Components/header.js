import "../App.css";
import React, { useState } from "react";
import { Wave, Random } from "react-animated-text";
import logo from "../Images/DF.png";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} width="100" style={{marginRight:'20px'}}></img>
        <Wave text="Dr Fitness" effect="stretch" effectChange={2.0} />
      </div>
    </div>
  );
}

export default App;
