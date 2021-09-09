import React,{SetStateAction} from "react";
import { Button } from "react-bootstrap";
import imgs from "../../../Images/lambi7.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import config from "../../../Config/router";
import '../Exercises/GainCrds.css'

export default function LeanPage1() {

  const whichExercise = [{
    Exercise: "",
  }]
 const setExerciseButton=()=>{
  whichExercise.Exercise='30 Days Plan'
  console.log("Pechay buton se aya hua => ",whichExercise.Exercise)
  }
  return (
    <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="cardImgLean">
        <div className="overlaycard">
          <h1>Want to Lose weight in 30 Days?</h1>
          <h4>Try these Exercises and Gain Weight</h4>
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
    <h4 className="mt-2" style={{textTransform:"uppercase",fontFamily:'fantasy',textAlign:'left'}}>Challenges</h4>
    <div className="row mt-3">
      <div className="col">
        <div className="LosebellyMen">
          <div className="overlaycard">
            <h1>Lose Belly Fat</h1>
            <h4> For Men</h4>
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
                Start Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
      <div className="LosebellywoMen">
        <div className="overlaycard">
          
          <h1>Lose Belly Fat</h1>
          <h4>For Women</h4>
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
              Start Plan
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
    <h4 className="mt-4" style={{textTransform:"uppercase",fontFamily:'fantasy',textAlign:'left'}}>Yoga</h4>
    <div className="row mt-2">
      <div className="col mt-2">
        <div className="yoga">
          <div className="overlaycard">
            <h2>Yoga to loose weight</h2>
            <h5>Daily Yoga 30 Days</h5>
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
