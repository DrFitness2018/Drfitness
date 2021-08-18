import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom' 
import './dash.css'
import Profile from './Home'
import Availible from './Availibility'
import Inbox from './Inbox'
import Appointments from './Appointments'
import VideoConsult from './VideoConsult'
import RecentAct from './RecenAct'
import Navbar from '../Consultant/navbar'

function ConsultantDash() {  
//   const classes = useStyles();

    return (
      <div>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Profile} />
                <Route path='/Availible' component={Availible}/>
                <Route path='/Inbox' component={Inbox}/>
                <Route path='/Appointments' component={Appointments}/>
                <Route path='/VideoConsult' component={VideoConsult}/>
                <Route path='/RecentAct' component={RecentAct}/>
            </Switch>
        </Router>
      </div>
    );
}

export default ConsultantDash;
