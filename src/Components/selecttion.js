import React from "react";
import { Button } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";

// import Paper from "@material-ui/core/Paper";
import "../App.css";

// const { Formik } = formik;

// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   username: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   zip: yup.string().required(),
//   file: yup.mixed().required(),
//   terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
// });

const pageTransition={
  in:{
    opacity:1
  },
  out:{
    opacity:0
  }
}

class SelectApp extends React.Component {
  gotoUL = () => {
    this.props.history.push("/UserLogin");
  };
  gotoCL = () => {
    this.props.history.push("/ConLogin");
  };
  render() {
    return (
      <motion.div initial="out" animate="in" exit="out" variants={pageTransition}
        className="selection"
        style={
          {
            // background: "-webkit-linear-gradient(#233329, #166d3b)",
          }
        }
      >
        <h1
          style={{
            color: "",
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
                backgroundColor: "#63d471",
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "#212121",

                // background: "-webkit-linear-gradient(#233329, #166d3b)",
              }}
            >
              Continue
            </Button>
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
              Examples of Fitness Consultant duties are assessing client fitness
              levels, offering nutrition advice, developing personalized fitness
              programs, creating meal plans, and teaching clients how to prevent
              injuries.
            </p>
            <br></br>
            <br></br>
            <Button
              variant="secondary"
              onClick={this.gotoCL}
              style={{
                backgroundColor: "#63d471",
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "#212121",
                // marginTop:'50px'
                // background: "-webkit-linear-gradient(#233329, #166d3b)",
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default SelectApp;
