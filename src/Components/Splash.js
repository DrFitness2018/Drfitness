import {Fade,Button} from 'react-bootstrap'
import "../App.css";
import React from 'react'


class Splash extends React.Component{
  gotoSelect = ()=>{
    this.props.history.push('/select')
  }
  render(){
    return (
      <div className='App'>
      <div className='splash'>
        {/* <Header /> */}
        {/* <Wave text="WELCOME TO DR FITNESS" effect="stretch" effectChange={2.0}  /> */}
        <div className='textarea'>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur a. t amet coaass amet conse. t amet consectetur adipisicing elit.
          Culpa aliquid temporibus dolores quidem ex enim magni repellat dolore ratione laborum repellendus vitae, ipsum illo quos reiciendis quo voluptas odit unde?
        </p>
        </div>
        <Button  variant="outline-light" onClick={this.gotoSelect} >Get Started</Button>
      </div>
      </div>
    );
  }

}

export default Splash;
