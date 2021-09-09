import '../../App.css';
import React from 'react'
import { Wave, Random } from 'react-animated-text';
import {Formik,Form,Button,Container} from 'react-bootstrap'
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";


const pageTransition={
  in:{
    opacity:1
  },
  out:{
    opacity:0
  }
}
class ConL extends React.Component {

  // gotoUserR = () => {
  //   this.props.history.push("/ConReg");
  // };
  // gotoUserDash = () => {
  //   this.props.history.push("/conDash");
  // };
  
  render() {
    return (
      <motion.div initial="out" animate="in" exit="out" variants={pageTransition}
        className="formssP"
        style={{
          //background: "-webkit-linear-gradient(#233329, #166d3b)",
        }}
      >
        <div className="formss">
          <h2
            style={{
              fontFamily: "fantasy",
              color:'#212121'
            }}
          >
            Login
            <Link
                  to="/conDash"
                  className="btn"
                  style={{
                    fontFamily: "serif",
                    marginLeft: 20,
                    border: "1px solid",
                    color: "#63d471",
                  }}
                >
                  Skip
                </Link>
          </h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #63d471",
                  color: "#63d471",
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
               style={{
                backgroundColor: "transparent",
                border: "2px solid #233329",
                color: "#63d471",
              }} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Not a robot?" />
            </Form.Group>
            {/* <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input" />
  </Form.Group> */}
               <Link
                  to="/conDash"
                  className="btn"
                  style={{
                    fontFamily: "serif",
                    marginLeft: 20,
                    border: "1px solid",
                    color: "#63d471",
                  }}
                >
                  Login
                </Link>
          </Form>
          {/* <p>Don't have any Account?</p>
          <Link
                  to="/ConReg"
                  className="btn"
                  style={{
                    fontFamily: "serif",
                    marginLeft: 20,
                    border: "1px solid",
                    color: "#63d471",
                  }}
                >
                  Sign Up
                </Link> */}
      </div>
        </motion.div>
    );
  }
}

export default ConL;
