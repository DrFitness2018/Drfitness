import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom' 
// import './dash.css'
import Exercises from "./userExercises"
import DietPlan from "./userDietPlans"
import Consult from './Consult'
import Feedback from './FeedBack'
import Inbox from './Inbox'
import Navbar from "./drawerusernew/navbar";
import Video from "./VideoCall";
import Appointments from "./Appointments";
import GainPage2 from "./Exercises/Gainpage2Week&Days";
import GainPage3 from "./Exercises/GainPage3ActualExercise";



function UserDashboard() {  
//   const classes = useStyles();

    return (
      <div>
        <Router>
          
        <Navbar/>
            <Switch>
                <Route exact path='/userDash'  component={Exercises} />
                <Route path='/diets'  component={DietPlan} />
                <Route path='/consult'  component={Consult} />
                <Route path='/feedback'  component={Feedback} />
                <Route path='/inbox'  component={Inbox} />
                <Route path='/video'  component={Video} />
                <Route path='/feedback'  component={Feedback} />
                <Route path='/appointments'  component={Appointments} />
                <Route path='/ExerciseGain/GainPage2'  component={GainPage2} />
                <Route path='/GainPage3'  component={GainPage3} />
            </Switch>
        </Router>
      </div>
    );
}

export default UserDashboard;
