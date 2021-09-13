import Avatar from "@material-ui/core/Avatar";
import React, { useState } from 'react'
import bannerimg from "../../../Images/Chor.jpg";
import BannerWithText from '../../BannerImgComponents/BannerImgComponents';
import './Gainpage2Week&Days.css'
import { Day1 } from './ExercisesObjectData';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import "../../Consultant/Home.css";
export default function Gainpage2(props) {


  const LinksBan = [

    {
      subLinkName: 'Exercises',
      subDash: '/',
      subLink: '/diets'
    },

  ];
  const [selectedTab, setSelectedTab] = useState("Week1");
  const [selectedTabdays, setSelectedTabdays] = useState("Day1");

  console.log(props)
  return (
    <>

      <BannerWithText
        imgSrc={bannerimg}
        heading={"Exercises"}
        subHeading={`Gain And Lean`}
        LinksBan={LinksBan}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />
      <div className="container">
        {[
          "Week1",
          "Week2",
          "Week3",
          "Week4",

        ].map((item, index) => (
          <div
            className="d-flex d-inline-flex"
            key={index + 1}
            onClick={() => setSelectedTab(item)}
          >
            <div
              className={
                selectedTab === item ? "labTeamBtnActive" : "labTeamBtn"
              }
            >
              <span
                className={
                  selectedTab === item ? "text-white" : " light-Color-Para"
                }
                style={{ fontSize: "13px" }}
              >
                {item}

              </span>
            </div>
          </div>
        ))}

        {selectedTab === "Week1" ? (

          <>
            {[
              "Day1",
              "Day2",
              "Day3",
              "Day4",
              "Day5",
              "Day6",
              "Day7",

            ].map((item, index) => (
              <div
                className=""
                key={index + 1}
                onClick={() => setSelectedTabdays(item)}
              >
                <div
                  className={
                    selectedTabdays === item ? "labTeamBtnActive" : "labTeamBtn"
                  }
                >
                  <span
                    className={
                      selectedTabdays === item ? "text-white" : " light-Color-Para"
                    }
                    style={{ fontSize: "13px" }}
                  >
                    {item}
                  </span>
                </div>
              </div>
            ))}
            <div className="container d-flex justify-content-center">
              <div className="row mt-1">
                <div className="col">

                  {
                    selectedTabdays === "Day1" ? (
                      <>
                     
                        <div className="container d-flex flex-column ">
                          <div className="row mt-1">
                            <div className="col">

                              {Day1.map((user, id) => {
                                return (
                                  <div className="appoinmentCards w-50">
                                    <div>
                                      <Avatar
                                        alt=''
                                        src={user.gifImage}
                                        style={{ width: "300px", height: "300px", textAlign: 'left' }}
                                      />
                                    </div>
                                    <div style={{ textAlign: "left" }}>
                                      <h3
                                        style={{
                                          fontFamily: "fantasy",
                                        }}
                                      >
                                        {user.exerciseName}
                                      </h3>
                                      <h4>{user.Reps}</h4>
                                      {/* <h5 style={{fontweight: "bold"}}>Selected slot: <span>{user.description}</span></h5> */}
                                    </div>
                                    <div className="cardsbutton ">
                                      <div className="AcceptDecButton ">
                                        <Link to='#' className="btn btn-primary" variant="primary" style={{ marginTop: "10px" }}>
                                          AngleChecker
                                        </Link>
                                        <Link to='#' className="btn btn-success" style={{ marginTop: "10px" }} variant="outline-success">
                                          Info
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                      

                                );
                              })}



                            </div>
                          </div>
                          <button 
                          style={{ marginTop: "20px"}} className="btn btn-primary">Start Exercise</button>

                        </div>
                         
                      </>) :
                      selectedTabdays === "Day2" ? (
                        <>
                          <div className="container">
                            <div className="row mt-1">
                              <div className="col">World</div>
                            </div>
                          </div>
                        </>) :
                        selectedTabdays === "Day3" ? (
                          <>
                            <div className="container">
                              <div className="row mt-1">
                                <div className="col">DrFit</div>
                              </div>
                            </div>
                          </>) :
                          selectedTabdays === "Day4" ? (
                            <>
                              <div className="container">
                                <div className="row mt-1">
                                  <div className="col">App</div>
                                </div>
                              </div>
                            </>) :
                            selectedTabdays === "Day5" ? (
                              <>
                                <div className="container">
                                  <div className="row mt-1">
                                    <div className="col">App Native</div>
                                  </div>
                                </div>
                              </>) :
                              selectedTabdays === "Day6" ? (
                                <>
                                  <div className="container">
                                    <div className="row mt-1">
                                      <div className="col">React</div>
                                    </div>
                                  </div>
                                </>) :
                                selectedTabdays === "Day7" ? (
                                  <>
                                    <div className="container">
                                      <div className="row mt-1">
                                        <div className="col">Js</div>
                                      </div>
                                    </div>
                                  </>) : null

                  }


                </div>
              </div>
            </div>
          </>
        ) :
          selectedTab === "Week2" ? (
            <>
              <div className="container">
                <div className="row mt-5">
                </div>
              </div>
            </>
          ) :
            selectedTab === "Week3" ? (
              <>
                <div className="container">
                  <div className="row mt-5">
                  </div>
                </div>
              </>
            ) :
              selectedTab === "Week4" ? (
                <>
                  <div className="container">
                    <div className="row mt-5">
                    </div>
                  </div>
                </>
              ) : null
        }
      </div>
    </>
  )

}
