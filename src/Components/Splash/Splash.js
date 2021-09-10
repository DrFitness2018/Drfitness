import { Fade, Button } from "react-bootstrap";
import "../../App.css";
import React from "react";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageTransition={
  in:{
    opacity:1
  },
  out:{
    opacity:0
  }
}

class Splash extends React.Component {

  gotoSelect = () => {
    this.props.history.push("/select");
  };
  render() {
    return (
      <div
        // className="parallax"
        style={{ height: "85vh", margin: "0%" }}

      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "30px",
            // backgroundColor: "#166d3b",
            // backgroundColor: "red",
            // backgroundImage: "linear-gradient(147deg, #166d3b 0%, #000000 74%)",
            // backgroundImage: `url(${imgs})`,
            // backgroundSize:'1600px 600px',
            // backgroundRepeat:'no-repeat',
            // background: "-webkit-linear-gradient(#233329, #166d3b)",
            // background: {imgs},
            fontFamily: "fantasy",
            color: "white",
            textAlign: "center",
          }}
        >
          <motion.div transition={{delay:0.2,type:'spring',stiffness:100}} initial={{y:-150}} animate={{y:-10}} 
          // <motion.div transition={{delay:1.5}} initial="out" animate="in" exit="out" variants={pageTransition}
            style={{
              alignSelf: 'start',
              width: 'max',
              padding: 40,
              marginTop: 50,
              marginLeft: 20,
              borderRadius: "20px ",
              backgroundColor: "rgba(0, 0, 0, 0.61)",
              // backgroundColor: "rgba(102, 187, 106, 0.61)",
              // backdropFilter: "blur(5px)",
              // boxShadow: "0px 5px 20px  #63d471",
              // color:'#212121'
              textAlign: "center",
              fontWeight: "bold",
              color: "#ffff",
            }}
          >
            <h1
              style={{
                textAlign: "left",
                fontWeight: "bold",
                fontFamily: 'Pacifico'
              }}
            >
              Dr Fitness
              <span>
                <h3>Get Fit or Stay Sick</h3>
              </span>
            </h1>
            <div>
              <div className="textarea">
                <p className="text">
                  Perfect app for starting your Fitness journey <br /> or taking your
                  fitness to the next level!
                </p>
                <Link
                  to="/select"
                  className="btn"
                  style={{
                    backgroundColor: "#63d471",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "#212121",
                    borderColor: "#63d471",
                    // borderRadius:'50%',
                    width: "50%",
                    borderRadius: "20px",
                    alignSelf: "center",
                  }}
                >
                  Lets Go
                </Link>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    );
  }
}

export default Splash;
