import React, { SetStateAction } from "react";
import { Button } from "react-bootstrap";
import imgs from "../../../Images/lambi8.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import config from "../../../Config/router";
import '../Exercises/GainCrds.css'


export default function GainPage1() {

  const whichExercise = [{
    Exercise: "",
  }]
  const setExerciseButton = () => {
    whichExercise.Exercise = '30 Days Plan'
    console.log("Pechay buton se aya hua => ", whichExercise.Exercise)
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="cardImg">
          <div className="overlaycard">

            <h1>Want to gain weight in 30 Days?</h1>
            <h4>Try these Exercises and Gain Weight</h4>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button variant="outline-light">See details</Button>
              <Link
                to={{
                  pathname: '/ExerciseGain/GainPage2',
                  data: '30days Plan'
                }}
                className="btn"
                style={{
                  backgroundColor: "white",
                  marginLeft: "5px",
                }}
                onClick={setExerciseButton}
              >
                Start Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h4 className="mt-2" style={{textTransform:"uppercase",fontFamily:'fantasy',textAlign:'left'}}>Challenges</h4>
      <div className="row mt-3">
        <div className="col">
          <div className="fullbody">
            <div className="overlaycard">
              <h1>Full Body Workout</h1>
              <h4>7X4 CHALLENGE</h4>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Button variant="outline-light">See details</Button>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
        <div className="lowerbody">
          <div className="overlaycard">
            
            <h1>Lower Body Workout</h1>
            <h4>7X4 CHALLENGE</h4>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button variant="outline-light">See details</Button>
              <Link
                to={{
                  pathname: '/GainWeek2',
                  data: '30days Plan'
                }}
                className="btn"
                style={{
                  backgroundColor: "white",
                  marginLeft: "5px",
                }}
                onClick={setExerciseButton}
              >
                Start Plan
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>



      <h4 className="mt-4" style={{textTransform:"uppercase",fontFamily:'fantasy',textAlign:'left'}}>Beginner</h4>
      <div className="row mt-2">
        <div className="col mt-2">
          <div className="fullbody begAbs" >
            <div className="overlaycard">
              <h2>ABS</h2>
              <h5>15 - 20 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>CHEST</h2>
              <h5>15 - 20 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>ARM</h2>
              <h5>15 - 20 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>LEG</h2>
              <h5>15 - 20 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h4>SHOULDER AND BACK</h4>
              <h5>15 - 20 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>

      
      </div>
      <h4 className="mt-4" style={{textTransform:"uppercase",fontFamily:'fantasy',textAlign:'left'}}>INTERMEDIATE</h4>
      <div className="row mt-2">
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>ABS</h2>
              <h5>20 - 30 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>CHEST</h2>
              <h5>20 - 30 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>ARM</h2>
              <h5>20 - 30 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>LEG</h2>
              <h5>20 - 30 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h4>SHOULDER AND BACK</h4>
              <h5>20 - 30 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainPage2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
  

      
      </div>
      <h4 className="mt-4" style={{textTransform:"uppercase",fontFamily:'fantasy',textAlign:'left'}}>aDVANCE</h4>
      <div className="row mt-2">
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>ABS</h2>
              <h5>30 - 40 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>CHEST</h2>
              <h5>30 - 40 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>ARM</h2>
              <h5>30 - 40 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h2>LEG</h2>
              <h5>30 - 40 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="fullbody">
            <div className="overlaycard">
              <h4>SHOULDER AND BACK</h4>
              <h5>30 - 40 MINS</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to={{
                    pathname: '/GainWeek2',
                    data: '30days Plan'
                  }}
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                  onClick={setExerciseButton}
                >
                  Start Workout
                </Link>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}
