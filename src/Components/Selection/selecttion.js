import React, { useState } from "react";
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap";
import "../../App.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import UserLogin from '../UserSignUpLogin/userLogin'
import UserReg from '../UserSignUpLogin/userRegister'
// import UserReg from '../UserSignUpLogin/usersignupnew'
import ConLogin from '../ConsultantSignUpLogin/consultantLogin'
import ConReg from '../ConsultantSignUpLogin/consultantRegister'


const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default function Selection(props) {
  const [key, setKey] = useState('user');

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className="selection"
    >
      <div style={{
        width: '100%', height: '100%', 
        backgroundColor: "rgba(58, 83, 155, 0.4)",
        backdropFilter: "blur(5px)"
      }}>

        {/* third kaam */}
        <h1
          style={{
            color: "#212121",
            textTransform: "uppercase",
            fontFamily: "fantasy",
            fontStyle: "oblique",
            marginTop:'20px',
            color:'whitesmoke'
          }}
        >
          Be a user or Train our user
        </h1>
       <div style={{width: "100%",display: "flex",justifyContent: "center"
 ,padding:'20px'}}>
        <Container className="abc" >
          <Row>
            <Col>
              <Tabs defaultActiveKey="user"
                id="controlled-tab-example">
                <Tab eventKey="user" title="User">
                  <UserReg />
                </Tab>
                <Tab eventKey="consultant" title="Consultant">
                  <ConReg />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
      {/* third kaam khatam */}
    </motion.div>
  );
}
