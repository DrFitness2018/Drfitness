import { Fade, Button } from "react-bootstrap";
import "../../App.css";
import React from "react";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  gotoSelect = () => {
    this.props.history.push("/select");
  };
  render() {
    return (
      <div style={{ height: "100vh", margin: "0%" }}>
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

            // backgroundImage:
          }}
        >
          <div
            style={{
              // backgroundColor: "grey",
              //  justifyContent:'center',
              width: "fit-content",
              padding: 40,
              marginTop: 50,
              // border: "1px solid black",
              borderRadius: "20px ",
              // opacity:'50%'
              backgroundColor: "rgba(0, 0, 0, 0.61)",
              // backgroundColor: "rgba(102, 187, 106, 0.61)",
              // backgroundColor: "rgba(238, 238, 238, 0.61)",
              // backgroundColor: "rgba(67, 160, 71, 0.61)",
              // backdropFilter: "blur(5px)",
              boxShadow: "0px 5px 20px  #63d471",
              // color:'#212121'
              textAlign: "center",
              fontWeight: "bold",
              color: "#ffff",
            }}
          >
            <h1
              style={{
                textAlign: "center",

                fontWeight: "bold",
              }}
            >
              Dr Fitness
              <span>
                <h3>Get Fit or Stay Sick</h3>
              </span>
            </h1>
            {/* <Header /> */}
            {/* <Wave text="WELCOME TO DR FITNESS" effect="stretch" effectChange={2.0}  /> */}
            <div
              style={
                {
                  // display: "flex",
                  // flexDirection: "row",
                  // justifyContent: "space-evenly",
                  // alignItems: 'normal',
                }
              }
            >
              <div className="textarea">
                <p className="text">
                  Perfect app for starting your Fitness journey or taking your
                  fitness to the next level!
                </p>
                {/* <Button
                  variant="outline-light"
                  onClick={this.gotoSelect}
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
                  Get Started
                </Button> */}
                <Link
                  to="/select"
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                >
                  Start Plan
                </Link>
                {/* <Popup trigger={<button> Trigger</button>} position="right center">
              <div style={{
                display:"flex",
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
              }}>
                <h1>
                  Daily Tips
                </h1>
                <h4>
                  Okay Lorey weight uthaa !
                </h4>
              </div>
            </Popup> */}
              </div>
              {/* <img
            className="splashImage"
            src={logo}
            width=""
            height="400"
            style={{ marginRight: "" }}
          ></img> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
