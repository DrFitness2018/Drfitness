import React from "react";
import { useHistory } from "react-router-dom";
import "../../Consultant/Home.css";
import GainCards from "./GainPage1Cards";

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
      <GainCards />
    </div>
  );
}
export default ExercisesCards;
