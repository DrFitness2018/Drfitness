import React, { useState, useEffect } from "react";
import { Splash, Header ,Usertabs} from "./Components";
import Approuter from "./Config/router";
import Footer from "./Components/footer/Footer";
import "./App.css";
import ParticlesBg from "particles-bg";


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
<<<<<<< HEAD
          paddingTop:'100px'  
=======
          // paddingTop:'100px'  
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
        }}>
      <Approuter />
      {/* <Usertabs/> */}
      </div>
        </div>

      </div>
      <Footer />
      {/* <ParticlesBg type="cobweb"  color="#63d471" bg={true}  />  */}

    </div>
  );
}

export default App;
