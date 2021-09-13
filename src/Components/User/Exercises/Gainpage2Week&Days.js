import Avatar from "@material-ui/core/Avatar";
import React, { useState } from 'react'
import bannerimg from "../../../Images/Chor.jpg";
import BannerWithText from '../../BannerImgComponents/BannerImgComponents';
import './Gainpage2Week&Days.css'
<<<<<<< HEAD
import { 
  Day1, 
  Day2, 
  Day3, 
  Day4, 
  Day5,
  Day6, 
  Day7,
  Day8,
  Day9,
  Day10,
  Day11,
  Day12,
  Day13,
  Day14,
  Day15,
  Day16,
  Day17,
  Day18,
  Day19,
  Day20,
  Day21,
  Day22,
  Day23,
  Day24,
  Day25,
  Day26,
  Day27,
  Day28,
  Day29,
  Day30,

} from './ExercisesObjectData';
=======
import { Day1 } from './ExercisesObjectData';
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
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
<<<<<<< HEAD
            <div className="">
              <div className="">
                <div className="col ">
=======
            <div className="container d-flex justify-content-center">
              <div className="row mt-1">
                <div className="col">
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5

                  {
                    selectedTabdays === "Day1" ? (
                      <>
<<<<<<< HEAD

                        <div className="">
                          <div className="">
                            <div className="d-flex flex-column align-items-center">

                              {Day1.map((user, id) => {
                                return (
                                  <div className="appoinmentCards w-50 d-flex justify-content-center">
=======
                     
                        <div className="container d-flex flex-column ">
                          <div className="row mt-1">
                            <div className="col">

                              {Day1.map((user, id) => {
                                return (
                                  <div className="appoinmentCards w-50">
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
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
<<<<<<< HEAD

=======
                                      
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5

                                );
                              })}



                            </div>
                          </div>
<<<<<<< HEAD

                        </div>

                      </>) :
                      selectedTabdays === "Day2" ? (
                        <>
                          <div className="">
                            <div className="">
                              <div className="d-flex flex-column align-items-center">

                                {Day2.map((user, id) => {
                                  return (
                                    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
=======
                          <button 
                          style={{ marginTop: "20px"}} className="btn btn-primary">Start Exercise</button>

                        </div>
                         
                      </>) :
                      selectedTabdays === "Day2" ? (
                        <>
                          <div className="container">
                            <div className="row mt-1">
                              <div className="col">World</div>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                            </div>
                          </div>
                        </>) :
                        selectedTabdays === "Day3" ? (
                          <>
<<<<<<< HEAD
                            <div className="">
                              <div className="">
                              <div className="d-flex flex-column align-items-center">

{Day3.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
=======
                            <div className="container">
                              <div className="row mt-1">
                                <div className="col">DrFit</div>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                              </div>
                            </div>
                          </>) :
                          selectedTabdays === "Day4" ? (
                            <>
<<<<<<< HEAD
                              <div className="">
                                <div className="">
                                <div className="d-flex flex-column align-items-center">

{Day4.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
=======
                              <div className="container">
                                <div className="row mt-1">
                                  <div className="col">App</div>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                                </div>
                              </div>
                            </>) :
                            selectedTabdays === "Day5" ? (
                              <>
<<<<<<< HEAD
                                <div className="">
                                  <div className="">
                                  <div className="d-flex flex-column align-items-center">

{Day5.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
=======
                                <div className="container">
                                  <div className="row mt-1">
                                    <div className="col">App Native</div>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                                  </div>
                                </div>
                              </>) :
                              selectedTabdays === "Day6" ? (
                                <>
<<<<<<< HEAD
                                  <div className="">
                                    <div className="">
                                    <div className="d-flex flex-column align-items-center">

{Day6.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
=======
                                  <div className="container">
                                    <div className="row mt-1">
                                      <div className="col">React</div>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                                    </div>
                                  </div>
                                </>) :
                                selectedTabdays === "Day7" ? (
                                  <>
<<<<<<< HEAD
                                    <div className="">
                                      <div className="">
                                      <div className="d-flex flex-column align-items-center">

{Day7.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
=======
                                    <div className="container">
                                      <div className="row mt-1">
                                        <div className="col">Js</div>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                                      </div>
                                    </div>
                                  </>) : null

<<<<<<< HEAD

                  }



                </div>
                <div className="d-flex justify-content-center">
                  <button
                    style={{ marginTop: "20px" }} className="btn btn-primary">Start Exercise</button>

=======
                  }


>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                </div>
              </div>
            </div>
          </>
        ) :
          selectedTab === "Week2" ? (
            <>
<<<<<<< HEAD
            {[
              "Day8",
              "Day9",
              "Day10",
              "Day11",
              "Day12",
              "Day13",
              "Day14",

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
            <div className="">
              <div className="">
                <div className="col ">

                  {
                    selectedTabdays === "Day8" ? (
                      <>

                        <div className="">
                          <div className="">
                            <div className="d-flex flex-column align-items-center">

                              {Day8.map((user, id) => {
                                return (
                                  <div className="appoinmentCards w-50 d-flex justify-content-center">
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

                        </div>

                      </>) :
                      selectedTabdays === "Day9" ? (
                        <>
                          <div className="">
                            <div className="">
                              <div className="d-flex flex-column align-items-center">

                                {Day9.map((user, id) => {
                                  return (
                                    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                          </div>
                        </>) :
                        selectedTabdays === "Day10" ? (
                          <>
                            <div className="">
                              <div className="">
                              <div className="d-flex flex-column align-items-center">

{Day10.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                            </div>
                          </>) :
                          selectedTabdays === "Day11" ? (
                            <>
                              <div className="">
                                <div className="">
                                <div className="d-flex flex-column align-items-center">

{Day11.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                              </div>
                            </>) :
                            selectedTabdays === "Day12" ? (
                              <>
                                <div className="">
                                  <div className="">
                                  <div className="d-flex flex-column align-items-center">

{Day12.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                </div>
                              </>) :
                              selectedTabdays === "Day13" ? (
                                <>
                                  <div className="">
                                    <div className="">
                                    <div className="d-flex flex-column align-items-center">

{Day13.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                  </div>
                                </>) :
                                selectedTabdays === "Day14" ? (
                                  <>
                                    <div className="">
                                      <div className="">
                                      <div className="d-flex flex-column align-items-center">

{Day14.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                    </div>
                                  </>) : null


                  }



                </div>
                <div className="d-flex justify-content-center">
                  <button
                    style={{ marginTop: "20px" }} className="btn btn-primary">Start Exercise</button>

                </div>
              </div>
            </div>
          </>
          ) :
            selectedTab === "Week3" ? (
              <>
              {[
                "Day15",
                "Day16",
                "Day17",
                "Day18",
                "Day19",
                "Day20",
                "Day21",
  
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
              <div className="">
                <div className="">
                  <div className="col ">
  
                    {
                      selectedTabdays === "Day15" ? (
                        <>
  
                          <div className="">
                            <div className="">
                              <div className="d-flex flex-column align-items-center">
  
                                {Day15.map((user, id) => {
                                  return (
                                    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
  
                          </div>
  
                        </>) :
                        selectedTabdays === "Day16" ? (
                          <>
                            <div className="">
                              <div className="">
                                <div className="d-flex flex-column align-items-center">
  
                                  {Day16.map((user, id) => {
                                    return (
                                      <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                            </div>
                          </>) :
                          selectedTabdays === "Day17" ? (
                            <>
                              <div className="">
                                <div className="">
                                <div className="d-flex flex-column align-items-center">
  
  {Day17.map((user, id) => {
    return (
      <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                              </div>
                            </>) :
                            selectedTabdays === "Day18" ? (
                              <>
                                <div className="">
                                  <div className="">
                                  <div className="d-flex flex-column align-items-center">
  
  {Day18.map((user, id) => {
    return (
      <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                </div>
                              </>) :
                              selectedTabdays === "Day19" ? (
                                <>
                                  <div className="">
                                    <div className="">
                                    <div className="d-flex flex-column align-items-center">
  
  {Day19.map((user, id) => {
    return (
      <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                  </div>
                                </>) :
                                selectedTabdays === "Day20" ? (
                                  <>
                                    <div className="">
                                      <div className="">
                                      <div className="d-flex flex-column align-items-center">
  
  {Day20.map((user, id) => {
    return (
      <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                    </div>
                                  </>) :
                                  selectedTabdays === "Day21" ? (
                                    <>
                                      <div className="">
                                        <div className="">
                                        <div className="d-flex flex-column align-items-center">
  
  {Day21.map((user, id) => {
    return (
      <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                      </div>
                                    </>) : null
  
  
                    }
  
  
  
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      style={{ marginTop: "20px" }} className="btn btn-primary">Start Exercise</button>
  
                  </div>
                </div>
              </div>
            </>
            ) :
              selectedTab === "Week4" ? (
                <>
            {[
              "Day22",
              "Day23",
              "Day24",
              "Day25",
              "Day26",
              "Day27",
              "Day28",
              "Day29",
              "Day30",

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
            <div className="">
              <div className="">
                <div className="col ">

                  {
                    selectedTabdays === "Day22" ? (
                      <>

                        <div className="">
                          <div className="">
                            <div className="d-flex flex-column align-items-center">

                              {Day22.map((user, id) => {
                                return (
                                  <div className="appoinmentCards w-50 d-flex justify-content-center">
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

                        </div>

                      </>) :
                      selectedTabdays === "Day23" ? (
                        <>
                          <div className="">
                            <div className="">
                              <div className="d-flex flex-column align-items-center">

                                {Day23.map((user, id) => {
                                  return (
                                    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                          </div>
                        </>) :
                        selectedTabdays === "Day24" ? (
                          <>
                            <div className="">
                              <div className="">
                              <div className="d-flex flex-column align-items-center">

{Day24.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                            </div>
                          </>) :
                          selectedTabdays === "Day25" ? (
                            <>
                              <div className="">
                                <div className="">
                                <div className="d-flex flex-column align-items-center">

{Day25.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                              </div>
                            </>) :
                            selectedTabdays === "Day26" ? (
                              <>
                                <div className="">
                                  <div className="">
                                  <div className="d-flex flex-column align-items-center">

{Day26.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                </div>
                              </>) :
                              selectedTabdays === "Day27" ? (
                                <>
                                  <div className="">
                                    <div className="">
                                    <div className="d-flex flex-column align-items-center">

{Day27.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                  </div>
                                </>) :
                                selectedTabdays === "Day28" ? (
                                  <>
                                    <div className="">
                                      <div className="">
                                      <div className="d-flex flex-column align-items-center">

{Day28.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                    </div>
                                  </>) : selectedTabdays === "Day29" ? (
                                  <>
                                    <div className="">
                                      <div className="">
                                      <div className="d-flex flex-column align-items-center">

{Day29.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                    </div>
                                  </>) : selectedTabdays === "Day30" ? (
                                  <>
                                    <div className="">
                                      <div className="">
                                      <div className="d-flex flex-column align-items-center">

{Day30.map((user, id) => {
  return (
    <div className="appoinmentCards w-50 d-flex justify-content-center">
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
                                    </div>
                                  </>): null


                  }



                </div>
                <div className="d-flex justify-content-center">
                  <button
                    style={{ marginTop: "20px" }} className="btn btn-primary">Start Exercise</button>

                </div>
              </div>
            </div>
          </>
=======
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
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
              ) : null
        }
      </div>
    </>
  )

}
