import React from 'react'
import { UserLogin, UserReg, Select, Header, ConLogin, ConReg, Splash, UserDash,Usertabs, ConDash, BMJS } from '../Components'
import Profile from "../Components/Consultant/Home";
import Consult from "../Components/User/Consult";
import Gainpage2 from "../Components/User/Exercises/Gainpage2Week&Days"
// import HomePage from "../Components/HomePage/HomePage"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";


export default class AppRouter extends React.Component {
    render() {
        return (
            <AnimatePresence>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Splash/>
                        </Route>
                        <Route path='/select'>
                            <Select />
                        </Route>
                        <Route path='/UserLogin'>
                            <UserLogin />
                        </Route>
                        <Route path='/ConLogin'>
                            <ConLogin />
                        </Route>
                        <Route path='/UserReg'>
                            <UserReg />
                        </Route>
                        <Route path='/ConReg'>
                            <ConReg />
                        </Route>
                        <Route path='/userDash'>
                            <UserDash />
                        </Route>
                        <Route path='/usertabs'>
                            <Usertabs/>
                        </Route>
                        <Route path='/consult'>
                            <Consult/>
                        </Route>
                        <Route path='/conDash'>
                            <ConDash />
                        </Route>
                        <Route path='/Profile'>
                            <Profile />
                        </Route>
                        <Route path='/BMJS'>
                            <BMJS />
                        </Route>
                        <Route path='/GainWeek2'>
                            <Gainpage2 />
                        </Route>
                    </Switch>
                </Router>
            </AnimatePresence>
        )
    }
}