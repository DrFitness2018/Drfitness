import '../App.css';
import React from 'react'
import { Wave, Random } from 'react-animated-text';
import {Formik,Form,Button,Container} from 'react-bootstrap'


class UserL extends React.Component{
    gotoUserR = ()=>{
        this.props.history.push('/UserReg')
      }
    gotoUserDash = ()=>{
        this.props.history.push('/userDash')
      }
render(){
  return (
<div className='formssP'>
<div className='formss'>
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
  <Button variant="secondary" type="submit"  onClick={this.gotoUserDash}>
    Login
  </Button>
</Form>
<p>Don't have any Account?</p>
<Button variant="outline-secondary" onClick={this.gotoUserR}>Sign up</Button>
</div>
  </div>
  );
}
}

export default UserL;
