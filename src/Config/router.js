import React from 'react'
import {UserLogin,UserReg,Select,Header,ConLogin,ConReg,Splash,userDash,usertabs,conDash,BMJS } from '../Components'
import Profile from "../Components/Consultant/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";


export default class AppRouter extends React.Component{
    render(){
        return(
            <AnimatePresence>
            <Router>
                <Route exact path='/' component={Splash} />
                <Route path='/select' component={Select} />
                <Route path='/UserLogin' component={UserLogin} />
                <Route path='/ConLogin' component={ConLogin} />
                <Route path='/UserReg' component={UserReg} />
                <Route path='/ConReg' component={ConReg} />
                <Route path='/userDash' component={userDash} />
                <Route path='/usertabs' component={usertabs} />
                <Route path='/conDash' component={conDash} />
                <Route path='/Profile'  component={Profile} />
                <Route path='/BMJS' component={BMJS} />                
            </Router>
            </AnimatePresence>
        )
    }
}