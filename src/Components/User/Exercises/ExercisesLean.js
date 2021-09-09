import React from "react";
import LeanCard from "./LeanPage1Cards";

export default function ExercisesLean() {
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
      <LeanCard />
    </div>
  );
}
