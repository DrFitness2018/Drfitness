import React from 'react'
import Splash from '../Components/Splash'
import Select from '../Components/selecttion'
import UserLogin from '../Components/userLogin'
import ConLogin from '../Components/consultantLogin'
import UserReg from '../Components/userRegister'
import ConReg from '../Components/consultantRegister'
import userDash from '../Components/User/userDashboard'
import usertabs from '../Components/User/tabs'
import conDash from '../Components/Consultant/consultDashboard'
import BMJS from '../Components/User/bmjs'
import {AnimatePresence, motion} from 'framer-motion'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

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
                <Route path='/BMJS' component={BMJS} />                
            </Router>
            </AnimatePresence>
        )
    }
}