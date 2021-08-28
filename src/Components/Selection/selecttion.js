import React from "react";
import { Formik, Form, Button, Container } from "react-bootstrap";
import "../../App.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";


const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

class SelectApp extends React.Component {
  gotoUL = () => {
    this.props.history.push("/UserLogin");
  };
  gotoCL = () => {
    this.props.history.push("/ConLogin");
  };
  render() {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        className="selection"
      >
        {/* Dosra Kaam */}

        {/* <div className="col">
          <h1
            style={{
              color: "",
              textTransform: "uppercase",
              fontFamily: "fantasy",
              // fontWeight:'lighter'
              textAlign: "right",
              fontStyle: "oblique",
              textShadow: "1px 1px 3px #212121",
              fontSize: "6rem",
              marginRight: "10px",
            }}
          >
            JOIN
          </h1>
          <div className="userBox">
            <h3
              style={{
                textTransform: "uppercase",
                fontFamily: "fantasy",
                marginTop: "40px",
                textShadow: "1px 1px 3px #212121",
              }}
            >
              User
            </h3>
            <p style={{ textAlign: "justify", fontStyle: "oblique" }}>
              Dr Fitness will help you to achieve great results, within a short
              period of time. Use our workout plans as your personal trainer and
              see your body improve, fast! This app contains detailed
              description and video for each exercise. Furthermore, our app
              provides workout routines for Bodybuilding, Fat Loss, Mass Gain
              and Gain Strength.
            </p>
            <Button
              variant="secondary"
              onClick={this.gotoUL}
              style={{
                backgroundColor: "#212121",
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "#63d471",
                width: "50%",
                alignSelf: "center",
              }}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="col">
          <h1
            style={{
              color: "",
              textTransform: "uppercase",
              fontFamily: "fantasy",
              // fontWeight:'lighter'
              textAlign: "left",
              fontStyle: "oblique",
              marginLeft: "-10px",
              textShadow: "1px 1px 3px #63d471",
              fontSize: "6rem",
            }}
          >
            US
          </h1>
          <div className="userBox">
            <h3
              style={{
                textTransform: "uppercase",
                fontFamily: "fantasy",
                marginTop: "40px",
                textShadow: "1px 1px 3px #63d471",
              }}
            >
              Consultant
            </h3>
            <p
              style={{
                textAlign: "justify",
                fontStyle: "oblique",
                color: "darkgray",
              }}
            >
              Fitness Consultants help clients achieve their fitness goals.
              Examples of Fitness Consultant duties are assessing client fitness
              levels, offering nutrition advice, developing personalized fitness
              programs, creating meal plans, and teaching clients how to prevent
              injuries.
            </p>
            <br></br>
            <Button
              variant="secondary"
              onClick={this.gotoCL}
              style={{
                backgroundColor: "#63d471",
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "#212121",
                width: "50%",
                borderColor: "#212121",
                alignSelf: "center",
                boxShadow: "1px 1px 3px #212121",
              }}
              // title="continuw"
            >
              Continue
            </Button>
          </div>
        </div> 
        */}

        {/* Dosra Kaam  khatam*/}

        {/* pehla kaam shuru*/}

        <div classname="selection">
          <h1
            style={{
              color: "#212121",
              textTransform: "uppercase",
              fontFamily: "fantasy",
              // fontWeight:'lighter'
              fontStyle: "oblique",
            }}
          >
            Be a user or Train our user
          </h1>
          <div className="selection2">
            <div className="userBox">
              <h3
                style={{
                  textTransform: "uppercase",
                  fontFamily: "fantasy",
                }}
              >
                User
              </h3>
              <p style={{ textAlign: "justify", fontStyle: "oblique" }}>
                Dr Fitness will help you to achieve great results, within a
                short period of time. Use our workout plans as your personal
                trainer and see your body improve, fast! This app contains
                detailed description and video for each exercise. Furthermore,
                our app provides workout routines for Bodybuilding, Fat Loss,
                Mass Gain and Gain Strength.
              </p>
              {/* <Button
                variant="secondary"
                onClick={this.gotoUL}
                style={{
                  backgroundColor: "#63d471",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#212121",
                }}
              >
                Continue
              </Button> */}
              <Link
                  to="/UserLogin"
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                >
                  Let's get Fit
                </Link>
            </div>

            <div className="userBox">
              <h3
                style={{
                  textTransform: "uppercase",
                  fontFamily: "fantasy",
                }}
              >
                Consultant
              </h3>
              <p style={{ textAlign: "justify", fontStyle: "oblique" }}>
                Fitness Consultants help clients achieve their fitness goals.
                Examples of Fitness Consultant duties are assessing client
                fitness levels, offering nutrition advice, developing
                personalized fitness programs, creating meal plans, and teaching
                clients how to prevent injuries.
              </p>
              <br></br>
              {/* <Button
                variant="secondary"
                onClick={this.gotoCL}
                style={{
                  backgroundColor: "#63d471",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#212121",
                }}
              >
                Continue
              </Button> */}
              <Link
                  to="/ConLogin"
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                >
                  Become part of our family
                </Link>
            </div>
          </div>
        </div>
        {/* pehla kaam khatam*/}
      </motion.div>
    );
  }
}

export default SelectApp;
