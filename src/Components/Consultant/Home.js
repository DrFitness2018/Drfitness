import React from 'react'
import './Home.css'
import Profile_Pic from '../../Images/lambi7.jpg'
import {input} from 'react-bootstrap'
import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk';

export default function Home() {
    const mystyle = {
        color: "white",
        padding: "10px",
        fontFamily: "Arial",
        textDecoration: "none"
      };
      const underline = {
          textDecoration: "none",
          color: "white",
          paddingTop: "10px",
          display: "inline-block",
      };
    return (
        <div className="container emp-profile mt-5 mb-4">
            <form method="">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img style={{width:'100%'}} src={Profile_Pic} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5 style={{color:'white'}}>Consultant Profile</h5>
                            <h6 style={{color:'white'}}>Fitness Specialist</h6>
                            <p style={{color:'white'}} className="profile-rating mt-3 mb-5">RANKINGS : <span> 1/10 </span></p>

                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active" id="homes-tab" data-toggle="tab" href="#homes" role="tab">About</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" id="profiles-tab" data-toggle="tab" href="#profiles" role="tab">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input style={{borderRadius:'10px'}} type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div style={mystyle} className="profile-work">
                            <p>WORK LINKS</p>
                            <a style={underline} href="https://www.instagram.com">Instagram</a><br/>
                            <a style={underline} href="https://www.facebook.com/wahaj.shera">Facebook</a><br/>
                            <a style={underline} href="https://www.youtube.com/watch?v=kHEhhV3EyPU" target="_thapa">Thapa Technical</a><br/>
                            <a style={underline} href="https://github.com/DrFitness2018/Drfitness">DrFitness Github</a><br/>
                            <a style={underline} href="https://www2.kickassanime.ro/anime/that-time-i-got-reincarnated-as-a-slime-season-2-part-2-694666">Slime Datta Ken</a><br/>
                            <a style={underline} href="https://www2.kickassanime.ro/anime/tokyo-revengers-uncensored-434278/episode-19-461870">Tokyo Manji Gang</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8 pl-4 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="homes" role="tabpanel" aria-labelledby="homes-tab">
                                <div style={{color:'white'}} className="row">
                                    <div className="col-md-6">
                                        <label>User ID</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>4763406758673894734</p>
                                    </div>
                                </div>
                                <div style={{color:'white'}} className="row mt-3">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Demon Lord</p>
                                    </div>
                                </div>
                                <div style={{color:'white'}} className="row mt-3">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>https://github.com/DrFitness2018/Drfitness</p>
                                    </div>
                                </div>
                                <div style={{color:'white'}} className="row mt-3">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>0335-2614032</p>
                                    </div>
                                </div>
                                <div style={{color:'white'}} className="row mt-3">
                                    <div className="col-md-6">
                                        <label>Profession</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Fitness Specialist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profiles" role="tabpanel" aria-labelledby="profiles-tab">
                                <div style={{color:'white'}} className="row">
                                    <div className="col-md-6">
                                        <label>Experience</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div style={{color:'white'}} className="row mt-3">
                                    <div className="col-md-6">
                                        <label>Hourly Rate</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>15$/hr</p>
                                    </div>
                                </div>
                                <div style={{color:'white'}} className="row mt-3">
                                    <div className="col-md-6">
                                        <label>Total Projects</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>230</p>
                                    </div>
                                </div>
                                <div style={{color:'white'}} className="row mt-3">
                                    <div className="col-md-6">
                                        <label>English Level</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div style={{color:'white'}} className="row mt-3">
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
        
    )
}
