import React from 'react'
import {Formik,Form,Button,Container} from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';
import '../App.css'

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

class SelectApp extends React.Component{

    gotoUL = ()=>{
        this.props.history.push('/UserLogin')
}
    gotoCL = ()=>{
        this.props.history.push('/ConLogin')
}
render(){
  return (
    <div className='selection'>
     <h1 style={{color:'',textTransform:'uppercase'}}>Do you want to be A</h1>
     <div className='selection2'>
    <div className='userBox'>
    <h2>User</h2>
    <p style={{textAlign:'justify'}}>  
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Culpa aliquid temporibus dolores quidem ex enim magni repellat dolore ratione laborum repellendus vitae, ipsum illo quos reiciendis quo voluptas odit unde?
    </p>
    <Button variant="secondary" onClick={this.gotoUL}>
    Continue As A user
    </Button>
    </div>


    <div className='userBox'>
    <h2>Consultant</h2>
    <p style={{textAlign:'justify'}}>  
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Culpa aliquid temporibus dolores quidem ex enim magni repellat dolore ratione laborum repellendus vitae, ipsum illo quos reiciendis quo voluptas odit unde?
    </p>
    <Button variant="secondary" onClick={this.gotoCL}>
    Continue As A Consultant
    </Button>
    </div>
    </div>
    </div>
  );
}
}

export default SelectApp;
