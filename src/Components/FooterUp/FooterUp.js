import React from "react";
import "./FooterUp.css";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (

    <>

      <div className="backg">


        <div className="container">

          <footer className="text-center text-lg-start text-white">
            <div className="container p-4">
              <div className="row mt-4">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 first1">
                  <h5 className="text-uppercase fhead">Quick Links</h5>

                  <ul className="list-unstyled mb-0" style={{textDecoration:'none'}}>
                  <li>
              
              <Link to="/" className="linkFoot">
                Home
              </Link>
            
          </li>
          <li>
          
              <Link to='/BMJS' className="linkFoot">
                BMI
              </Link>
            
          </li>
          <li>
          
              <Link to='/userDash' className="linkFoot">
                Exercises
              </Link>
            
          </li>
          <li>
          {/* Telemedicine Link */}
              <Link to='/diets' className="linkFoot">
                Diet Plans
              </Link>
            
          </li>
          <li>
          
              <Link to='/feedback' className="linkFoot">
                Feedback
              </Link>
            
          </li>
          <li>
          
              <Link to="/inbox" className="linkFoot">
                Inbox
              </Link>
            
          </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 second2">
                  <h5 className="text-uppercase fhead">User Features</h5>

                  <ul className="list-unstyled">
                  <li>
              
              <Link to='/video' className="linkFoot">
              Live Video Session
              </Link>
            
          </li>
          <li>
          
              <Link to='/GainPage2' className="linkFoot">
                30 Day Exercise Plan
              </Link>
            
          </li>
        
          <ul className="list-unstyled list-inline mt-3">
          <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1 text-white" title="Facebook">
          <i className="fa fa-facebook-square fa-2x "></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1 text-white" title="Linkedin">
          <i className="fa fa-linkedin fa-2x"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1 text-white" title="Twitter">
          <i className="fa fa-twitter-square fa-2x"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1 text-white" title="Youtube">
          <i className="fa fa-youtube-square fa-2x"></i>
        </a>
      </li>
      </ul>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 d-xs-none mb-4 mb-md-0 three3">
                  <h5 className="text-uppercase fhead">Subscribe for Newsletter</h5>


                  <div className="form-row">
                                        <div className="col dk-footer-form">
                                            <input type="email" className="form-control" placeholder="Your Email..."/>
                                            <button type="submit">
                                                <span style={{fontSize:'12px',padding:'8px 6px' ,fontWeight:'500'}}>SUBSCRIBE</span>
                                            </button>
                                        </div>
                                    </div>

            <h5 className="fhead mt-2">Download Apps</h5>
            <figure style={{ display: "flex", margin: "12px" }}>
             
            <Link to='#' >
             
              <img
              alt=""
                loading="lazy"
                src={
                  "https://www.ri-demo.co/concord/final/wp-content/uploads/2019/06/ios.png"
                }
                className="imghightwidth"
              />
              </Link>



              <Link to='#' >
              <img
              alt=""
                loading="lazy"
                src={
                  "https://www.ri-demo.co/concord/final/wp-content/uploads/2019/06/android.png"
                }
                className="imghightwidth"
              />
              </Link>
            </figure>


                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase fhead">Get In Touch</h5>

                  <ul className="list-unstyled">
                  <li className="linkFoot">
              <span className="Typograpy_lastblock_Span">Call :</span> <span>+8801991145006</span>
              </li>
              <li className="linkFoot">
              <span className="Typograpy_lastblock_Span">Email:</span> info@concordpharma-bd.com
              </li>
              <li className="linkFoot">
              <span className="Typograpy_lastblock_Span">Visitor Count</span>
              <span className="ms-2"><Link to='https://www.freecounterstat.com" title="website hits counter'>
              <img src="https://counter10.stat.ovh/private/freecounterstat.php?c=wg2el4krc3mzdqf834cy12ftxqsuyh4l" border="0" title="website hits counter" alt="website hits counter"/>
              </Link></span>
              </li>
              
               <li >
              
                  <Link to='/' className="linkFoot">
                  <i className="fa fa-phone"></i>
                      <span className="ms-2">Enquiry</span>
                  </Link>
                
              </li>
              <li >
            
                  <Link to='/' className="linkFoot">
                  <i className="fa fa-globe"></i>
                  <span className="ms-2">Distribution Center</span>
                  </Link>
                
              </li>
                  </ul>
                </div>
              </div>
            </div>

          </footer>

          <div>

            <div>



            </div>


          </div>
        </div>
      </div>



      <div className="FooterlastContainer ">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className="FooterlastContainercolor m-1">
            © Copyright 2021. All Right reserved.
          </p>
          <p className="FooterlastContainercolor m-1">
            Designed and Developed by{" "}

            <Link to="#" style={{ textDecoration: "none" }}>
              <span style={{ color: "#fff" }}>Dr Fitness Group 22</span>
            </Link>

          </p>
        </div>
      </div>
    </>




  );
};

export default Footer;
