import React from "react";
import "./Home.css";
import Profile_Pic from "../../Images/lap-consul/1.JPG";
import { Button } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Divider from "@material-ui/core/Divider";
import CountUp from 'react-countup';
import Recent from "./RecenAct"

export default function Home() {
  const mystyle = {
    color: "#060b26",
    padding: "10px",
    fontFamily: "Arial",
    textDecoration: "none",
  };
  const underline = {
    textDecoration: "none",
    color: "black",
    paddingTop: "10px",
    display: "inline-block",
  };
  return (
    <div className="docpages">
      <div className="container mt-4">
        <h3 className="heading">Dashboard</h3>
      </div>
      <div
        className="container emp-profile mt-2 mb-2 "
        style={{
          backgroundColor: "#FAFAFA",
          padding: 20,
          boxShadow: "0px 2px 5px #888888",
        }}
      >
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img style={{ width: "100%" }} src={Profile_Pic} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h3 >My Profile</h3>
                <h5 style={{ color: "darkgray" }}>Fitness Specialist</h5>
                <p
                  style={{ color: "#060b26" }}
                  className="profile-rating mt-3 mb-5"
                >
                  RANKINGS : <span> 1/10 </span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              {/* <input
              style={{ borderRadius: "10px" }}
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            /> */}
              <Button variant="outline-primary">Edit Profile</Button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div style={mystyle} className="profile-work">
                <p style={{ fontWeight: "bold" }}>WORK LINKS</p>
                <a style={underline} href="https://www.instagram.com">
                  Instagram
                </a>
                <Divider />

                {/* <br /> */}
                <a
                  style={underline}
                  href="https://www.facebook.com/wahaj.shera"
                >
                  Facebook
                </a>
                <Divider />
            
                <br />
                <a
                  style={underline}
                  href="https://github.com/DrFitness2018/Drfitness"
                >
                  DrFitness Github
                </a>
                <br />
               
                <br />
            
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-4 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div style={{ color: "black" }} className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>4763406758673894734</p>
                    </div>
                  </div>
                  <div style={{ color: "black" }} className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Dr Shaheda Anwar</p>
                    </div>
                  </div>
                  <div style={{ color: "black" }} className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>Drshaheda@gmail.com</p>
                    </div>
                  </div>
                  <div style={{ color: "black" }} className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>0335-2614032</p>
                    </div>
                  </div>
                  <div style={{ color: "black" }} className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Fitness Specialist</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profiles"
                  role="tabpanel"
                  aria-labelledby="profiles-tab"
                >
                  <div style={{ color: "black" }} className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div style={{ color: "black" }} className="row mt-3">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>15$/hr</p>
                    </div>
                  </div>
                  <div style={{ color: "black" }} className="row mt-3">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div style={{ color: "black" }} className="row mt-3">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div style={{ color: "black" }} className="row mt-3">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Divider />
      <div className="container mt-4 mb-5">
        <div className="dash">
          <div className="dashcards bg1">
            <h5 style={{fontSize:'3rem'}}><CountUp redraw={true} end={30} duration={2}/></h5>
            <h6 style={{marginLeft:20}}>Pending Appointments</h6>
          </div>
          <div className="dashcards bg2">
          <h5 style={{fontSize:'3rem'}}><CountUp redraw={true} end={2} duration={2}/></h5>
            <h6 style={{marginLeft:20}}>Today's Appointments</h6>
          </div>
          <div className="dashcards bg3">
          <h5 style={{fontSize:'3rem'}}><CountUp redraw={true} end={0} duration={2}/></h5>
            <h6 style={{marginLeft:20}}>Total Appointments</h6>
          </div>
          <div className="dashcards bg4">
          <h5 style={{fontSize:'3rem'}}><CountUp redraw={true} end={21} duration={2}/></h5>
            <h6 style={{marginLeft:20}}>Total Patients</h6>
          </div>
        </div>
          <h3 className="heading"  style={{ marginTop:20}}>Recent Activity</h3>
          <Recent/>
      </div>
    </div>
  );
}
