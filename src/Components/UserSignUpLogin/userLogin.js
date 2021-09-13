import "../../App.css";
import React from "react";
import { Wave, Random } from "react-animated-text";
import { Formik, Form, Button, Container } from "react-bootstrap";
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
class UserL extends React.Component {

  gotoUserR = () => {
    this.props.history.push("/UserReg");
  };
  gotoUserDash = () => {
    this.props.history.push("/userDash");
  };
  
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
              color:'#212121',
              fontFamily: "fantasy",
            }}
          >
            Login
            {/* <Button
              variant="outline-secondary"
              onClick={this.gotoUserDash}
              style={{
                fontFamily: "serif",
                marginLeft: 20,
                border: "1px solid",
                color: "#63d471",
              }}
            >
              Skip
            </Button> */}
                  <Link
                  to="/BMJS"
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
            {/* <Button
              variant="secondary"
              type="submit"
              onClick={this.gotoUserDash}
              style={{
                color: "#212121",
                backgroundColor: "#63d471",
                textTransform: "uppercase",
              }}
            >
              Login
            </Button> */}
               <Link
                  to="/userDash"
                  className="btn"
                  style={{
                    fontFamily: "serif",
                    // marginLeft: 20,
                    marginTop:10,
                    border: "1px solid",
                    color: "#63d471",
                  }}
                >
                  Login
                </Link>
          </Form>
          {/* <Button
            variant="outline-secondary"
            onClick={this.gotoUserR}
            style={{
              color: "#63d471",
              // backgroundColor: "#63d471",
              border: "1px solid",

              textTransform: "uppercase",
            }}
          >
            Sign up
          </Button> */}
      </div>
        </motion.div>
    );
  }
}

export default UserL;
