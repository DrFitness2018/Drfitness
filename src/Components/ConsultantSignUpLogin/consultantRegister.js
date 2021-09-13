import '../../App.css';
import React, { useState, createContext } from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";
import ConLogin from "../ConsultantSignUpLogin/consultantLogin"


export default function ConsultantRegister(props) {
  const [name, setName] = useState('')
  const [modalShow, setModalShow] = React.useState(false);

  const onchange = (data) => {
    setName(data)
  }
  console.log(name)
  return (
    <div className='formssP'>
      <div className='formss'>
        <h2
          style={{
            color: '#121212',
            fontFamily: "fantasy",
          }}
        >
          Profile<span style={{color:"#63d471", fontFamily: "fantasy",textAlign:'left'}}>Information</span>
          {/* <Link
            to="/UserLogin"
            className="btn"
            style={{
              fontFamily: "serif",
              marginLeft: 20,
              border: "1px solid",
              color: "#63d471",
            }}
          >
            Skip to Login
          </Link> */}
          <Button variant="primary-outlined" style={{
            fontFamily: "serif",
            marginLeft: 20,
            border: "1px solid",
            color: "#63d471",
          }}
            onClick={() => setModalShow(true)}>
            Skip to Login
          </Button>

        </h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: '#121212', float: 'left' ,fontWeight: 'lighter'}}>Name</Form.Label>
            <Form.Control
              style={{
                backgroundColor: "transparent",
                border: "2px solid darkgray",
                color: "#63d471",
              }}
              type="name" placeholder="Enter username"
              onChange={(e) => { onchange(e.target.value) }} />
          </Form.Group>
          {/* <br /> */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: '#121212', float: 'left' ,fontWeight: 'lighter'}}>Email address</Form.Label>
            <Form.Control
              style={{
                backgroundColor: "transparent",
                border: "2px solid darkgray",
                color: "#63d471",
              }}
              type="email" placeholder="Enter email" />
            <Form.Text className="text" style={{ color: '#121212' }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ color: '#121212', float: 'left' ,fontWeight: 'lighter'}}>Password</Form.Label>
            <Form.Control
              style={{
                backgroundColor: "transparent",
                border: "2px solid darkgray",
                color: "#63d471"
              }}
              type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: '#121212', float: 'left' ,fontWeight: 'lighter'}}>Contact</Form.Label>
            <Form.Control
              style={{
                backgroundColor: "transparent",
                border: "2px solid darkgray",
                color: "#63d471",
              }}
              type="name" placeholder="+92 300 1234567" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label style={{ color: '#121212', float: 'left',textAlign:'left',marginTop:5 ,fontWeight: 'lighter'}} >Upload you Professional/Doctor Certificate</Form.Label>
            <Form.Control  style={{
                backgroundColor: "transparent",
                border: "2px solid darkgray",
                color: "#63d471",
                paddingBottom:35
              }} type="file" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: '#121212', float: 'left',fontWeight: 'lighter' }}>Gender</Form.Label>
            <Form.Control
              style={{
                backgroundColor: "transparent",
                border: "2px solid darkgray",
                color: "#63d471",
              }}
              type="name" placeholder="Male/Female" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree with Terms and Conditions" />
          </Form.Group>
          {/* <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Upload Professional GYM/PHYSIOTHERAPIST certificate" />
          </Form.Group> */}
          <br />
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
            Register
          </Link>
        </Form>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Consultant Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ConLogin />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
