import { Fade, Button } from "react-bootstrap";
import "../App.css";
import React from "react";
import logo from "../Images/main.png";

class Splash extends React.Component {
  gotoSelect = () => {
    this.props.history.push("/select");
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          alignItems: "center",
          height: 532,
          // backgroundColor: "#166d3b",
          // backgroundImage: "linear-gradient(147deg, #166d3b 0%, #000000 74%)",
          background: "-webkit-linear-gradient(#233329, #166d3b)",
          fontFamily: "fantasy",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>
          Dr Fitness{" "}
          <span>
            <h3>Get Fit or Stay Sick</h3>
          </span>
        </h1>
        {/* <Header /> */}
        {/* <Wave text="WELCOME TO DR FITNESS" effect="stretch" effectChange={2.0}  /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <img
            className="splashImage"
            src={logo}
            width=""
            height="400"
            style={{ marginRight: "" }}
          ></img>
          <div className="textarea">
            <p className="text">
              Perfect app for starting your Fitness journey or taking your
              fitness to the next level!
            </p>
            <Button
              variant="outline-light"
              onClick={this.gotoSelect}
              style={{
                backgroundColor: "transparent",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#212121",
                borderColor: "#63d471",
                // borderRadius:'50%',
                // width:'20%',
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
