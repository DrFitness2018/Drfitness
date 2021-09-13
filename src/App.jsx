import React, { useState, useEffect } from "react";
import { Splash, Header ,Usertabs} from "./Components";
import Approuter from "./Config/router";
import "./App.css";
import ParticlesBg from "particles-bg";
import Footer from "./Components/FooterUp/FooterUp"


function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        // backgroundColor: "transparent",
      }}
    >
      <div    
>
        {/* <div
          style={{
            // backgroundColor: "rgba(0, 0, 0, 0.61)",
          }}
        >
          <Header />
          <div
            style={{
              paddingTop: "100px",
              // marginBottom:30
            }}
          >
            <Approuter />
          </div> */}
      
        <div 
        style={{
          // backgroundColor: "rgba(0, 0, 0, 0.61)",
        }}
        > 
        {/* <Header /> */}
        {/* <Splash /> */}
        <div style={{
          // paddingTop:'100px'  
        }}>
      <Approuter />
      {/* <Usertabs/> */}
      </div>
        </div>

      </div>
      <Footer/>
      {/* <ParticlesBg type="cobweb"  color="#63d471" bg={true}  />  */}

    </div>
  );
}

export default App;
