import React from "react";
import logo from "../../Images/logoMuqqa.png";

const Footer = () => (
    <footer className="page-footer font-small blue mt-5">
        <img src={logo} width="150"  style={{display:'block',marginLeft:'auto',marginRight:'auto',marginBottom:'20px' }}></img>
    <div className="footer-copyright text-center py-3 " style={{color:'white',backgroundColor:'#212121 '}}> 
      © 2020 Copyright:
      <a href="https://mdbootstrap.com/"> DrFitness.com</a>

    </div>
  </footer>
);

export default Footer;
