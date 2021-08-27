import React from 'react'
import { Button } from "react-bootstrap";
import imgs from "../../../Images/lambi8.jpg";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import config from '../../../Config/router'
export default function GainPage1() {
    return (
        <div>
              <div
        style={{
          backgroundColor: "#1E88E5",
          minWidth: "50%",
          minHeight: "200px",
          // border: "1px solid gray",
          boxShadow: "0px 6px 10px #888888",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${imgs})`,
          objectFit: "contain",
          backgroundSize: "cover",
          color: "white",
        }}
      >
        <h1>Want to gain weight in 30 Days?</h1>
        <h4>Try these Exercises and Gain Weight</h4>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button variant="outline-light">See details</Button>

          <Link
            to='/GainWeek2'
            className="btn"
            style={{
              backgroundColor: "white",
              marginLeft: "5px",
            }}
          >
            Start Plan
          </Link>
  
  
        </div>
      </div>

        </div>
    )
}
