import '../App.css';
import React from 'react'
import { Wave, Random } from 'react-animated-text';
import {Formik,Form,Button,Container} from 'react-bootstrap'


class UserR extends React.Component{

render(){
  return (
   
  <div className='formssP'>
<div className='formss'>
    <h2>Register as a user</h2>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Not a robot?" />
  </Form.Group>
  {/* <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input" />
  </Form.Group> */}
  <Button variant="secondary" type="submit">
    Register
  </Button>
</Form>

</div>
  </div>
  );
}
}

export default UserR;
