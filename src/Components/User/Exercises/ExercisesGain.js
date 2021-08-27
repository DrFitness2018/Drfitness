import React from "react";
import { useHistory } from "react-router-dom";
import "../../Consultant/Home.css";
import { Button } from "react-bootstrap";
import imgs from "../../../Images/lambi8.jpg";
import GainCards from './GainPage1Cards'

function ExercisesCards() {
  let history = useHistory();
  function gotoCard1() {
    history.push("/CardsGain");
  }
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
          // backgroundColor: "#63d471",
        color: "#212121",
      }}
    >
      <h2 className="heading"> These Exercises will help you Gain weight</h2>

      {/* To Yaha P Gainpage1 show hojy jisme Cards hoon Weight Gain k Ek example uski mn
      nechay bna kr dikha deta hun*/}
      <GainCards/>

      {/* Phr jb card p start plan p click kre to wo next page p chala gae week wale ... phr exercise wale 
      iss trah s ho */}

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
        <div style={{
          backgroundColor: "rgba(0, 0, 0, 0.61)",
          width:'100%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center',
          display:'flex',
          flexDirection:'column',
          padding:20
        }}>

        <h1>Want to gain weight in 30 Days?</h1>
        <h4>Try these Exercises and Gain Weight</h4>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button variant="outline-light">See details</Button>



          <Button
            variant="outline"
            style={{
              backgroundColor: "white",
              marginLeft: "5px",
            }}
          >
            Start Plan
          </Button>
        </div>
        </div>
      </div>

      {/* <div className="leftHeadRightImage">
        <h1 className="heading">Squats</h1>
        <img
          className="images"
          src="//i0.wp.com/thumbs.gfycat.com/RelievedGregariousIberianmole-size_restricted.gif?w=1155\u0026h=1226\"
        ></img>
      </div>
      <div className="RightHeadLeftImage">
        <img
          className="images"
          src="//i0.wp.com/thumbs.gfycat.com/EasyGoldenIndianpalmsquirrel-size_restricted.gif?w=1155\u0026h=1236\"
        ></img>
        <h1 className="heading">Overhead press</h1>
      </div>
      <div className="leftHeadRightImage">
        <h1 className="heading">Pull-ups</h1>
        <img
          className="images"
          src="//i0.wp.com/thumbs.gfycat.com/BiodegradableDistantFreshwatereel-size_restricted.gif?w=1155\u0026h=1220\"
        ></img>
      </div>
      <div className="RightHeadLeftImage">
        <img
          className="images"
          width="400px"
          src="https://i0.wp.com/thumbs.gfycat.com/AnyShinyGharial-size_restricted.gif?w=1575"
        ></img>
        <h4 className="heading">Push-ups</h4>
      </div>
      <div className="leftHeadRightImage">
        <h1 className="heading">Bench press</h1>
        <img
          className="images"
          src="//i0.wp.com/thumbs.gfycat.com/ConcernedHeftyCrayfish-size_restricted.gif?w=1155\u0026h=1228\"
        ></img>
      </div>
      <div className="RightHeadLeftImage">
        <img
          className="images"
          src="	https://i0.wp.com/thumbs.gfycat.com/UnknownPleasedKodiakbear-size_restricted.gif?w=1575"
        ></img>
        <h1 className="heading">Lunges</h1>
      </div> */}
    </div>
  );
}
export default ExercisesCards;
