import React, { useState, useEffect, useContext} from "react";
import "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import BMIs from "../../Images/bmi.jpg";
import "../../App.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom'
import imgs from '../../Images/fullbody.jpg'

const { CircularProgress, LinearProgress } = require("@material-ui/core");

const pageTransition={
  in:{
    opacity:1
  },
  out:{
    opacity:0
  }
}
class BMApp extends React.Component {
  

  constructor() {
    super();

    this.state = {
      heightFeet: "",
      heightInch: "",
      weight: "",
      on :false
    };

    this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
    this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  toggle = () =>{
    this.setState({
      on:!this.state.on
    })
  }
  handleHeightFeetChange(event) {
    this.setState({
      heightFeet: event.target.value,
    });
  }

  handleHeightInchChange(event) {
    this.setState({
      heightInch: event.target.value,
    });
  }

  handleWeightChange(event) {
    this.setState({
      weight: event.target.value,
    });
  }

  calculateBMI() {
    if (this.state.weight && this.state.heightFeet && this.state.heightInch) {
      // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
      let INCHES_IN_FEET = 12;

      var height = Number(this.state.heightFeet);
      // convert feet to inches
      height *= INCHES_IN_FEET;
      // add the inches input field
      height += Number(this.state.heightInch);

      let weight = this.state.weight;

      var bmi = (weight / (height * height)) * 703;
      bmi = bmi.toFixed(2);

      return bmi;
    }
  }

  getBMIResults(bmi) {
    let bmiResults = {
      label: "",
      alertClass: "",
    };

    if (bmi <= 18.5) {
      bmiResults.label = "Underweight";
      bmiResults.alertClass = "alert-danger";
    } else if (bmi <= 24.9) {
      bmiResults.label = "Normal weight";
      bmiResults.alertClass = "alert-success";
    } else if (bmi <= 29.9) {
      bmiResults.label = "Overweight";
      bmiResults.alertClass = "alert-warning";
    } else if (bmi >= 30) {
      bmiResults.label = "Obesity";
      bmiResults.alertClass = "alert-danger";
    } else {
      bmiResults.label = "BMI";
      bmiResults.alertClass = "alert-primary";
    }

    return bmiResults;
  }

  render() {
    let bmi = this.calculateBMI();
    let results = this.getBMIResults(bmi);

    return (
      <motion.div initial="out" animate="in" exit="out" variants={pageTransition}
        style={{
          display: "flex",
          flexDirection: "column",
          // padding: "10px",
          alignItems: "center",
          height: '100%',
          // minHeight:'85vh',
          // backgroundColor: "#166d3b",
          // backgroundColor: "red",
          // backgroundImage: "linear-gradient(147deg, #166d3b 0%, #000000 74%)",
          backgroundImage: `url(${imgs})`,
          objectFit:'contain',
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center',
          width: '100%',
          backgroundSize:'cover',
          // backgroundSize:'1600px 600px',
          // backgroundRepeat:'no-repeat',
          // background: "-webkit-linear-gradient(#233329, #166d3b)",
          // background: {imgs},
          fontFamily: "fantasy",
          color: "white",
          textAlign: "center",
          // paddingBottom: '50px'
          //backgroundImage: 
        }} //className="main"
      >
        <div style={{
        width: '100%', height: '100%', 
        display: 'flex',justifyContent: 'center',
        padding:20,
        // paddingBottom: 20,
        backgroundColor: "rgba(58, 83, 155, 0.4)",
        backdropFilter: "blur(5px)"
      }}
      >

    
        <div
          style={{
            // backgroundColor: "grey",
            //  justifyContent:'center',
            width: "40%",
            padding: 40,
            marginTop: 50,
            // border: "1px solid black",
            borderRadius: "20px ",
            // opacity:'50%'
            backgroundColor: "whitesmoke", 
            // backgroundColor: "rgba(102, 187, 106, 0.61)",
            // backgroundColor: "rgba(238, 238, 238, 0.61)",
            // backgroundColor: "rgba(67, 160, 71, 0.61)",
            // backdropFilter: "blur(5px)",
            // boxShadow:'0px 5px 20px  #63d471',
            // color:'#212121'
            color:'#121212',
            display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              flexDirection: "column",
              //backgroundColor: "transparent",
              // backgroundColor:'red'
              //background: "-webkit-linear-gradient(#233329, #166d3b)",
              textAlign: "center"
          }}
        >
          
            <div className="row">
              <div
                className="col-xs-12"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    color: "#121212",
                    borderRadius: 50,
                    padding: 10,
                    // fontFamily:
                    //   "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    fontFamily: "fantasy",
                    fontSize: "1.8rem",
                    // backgroundColor: "#63d471",
                    // backgroundImage:"linear-gradient(315deg, #63d471 0%, #166d3b 74%)",
                    width: "max-content",
                    // marginLeft: 20,
                  }}
                >
                  Let Us<span style={{   fontFamily: "fantasy",
                    fontSize: "1.8rem",color:"#63d471"}}>Analyze</span> Your<span style={{   fontFamily: "fantasy",
                    fontSize: "1.8rem",color:"#63d471"}}>BMI</span> 
                </h3>
                {/* <h1>Let us Analyze your BMI</h1> */}
                <h6
                  className="wordingsUserGain"
                  style={{
                    color:'#121212',
                    fontWeight: "normal",
                    // background: "-webkit-linear-gradient(#ffff, #63d471)",
                    // WebkitBackgroundClip: "text",
                    // WebkitTextFillColor: "transparent",
                  }}
                >
                  Enter your weight(lbs) and height(ft and inches) below !
                </h6>
                {/* <p>Enter your weight(lbs) and height(ft and inches) below !</p> */}
              </div>
            </div>
            <div
              className="row bms"
              style={{ alignContent: "center", justifyContent: "center" }}
            >
              <div>
                <form>
                  <div className="form-group">
                    <legend>Weight</legend>
                    <div className="row">
                      <div style={{ width: "100%", padding: "0 20px 0 20px" }}>
                        <input
                          className="form-control"
                          id="bmiWeight"
                          type="number"
                          min="1"
                          max="1000"
                          style={{
                            backgroundColor: "transparent",
                            border: "2px solid darkgray",
                            color: "#63d471",
                          }}
                          value={this.state.weight}
                          onChange={this.handleWeightChange}
                        />
                        <label className="control-label" htmlFor="bmiWeight">
                          lb
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <legend>Height</legend>
                    <div className="row">
                      <div style={{ width: "100%", padding: "0 20px 0 20px" }}>
                        <input
                          className="form-control"
                          id="bmiHeightFeet"
                          type="number"
                          min="1"
                          max="12"
                          value={this.state.heightFeet}
                          style={{
                            backgroundColor: "transparent",
                            border: "2px solid darkgray",
                            color: "#63d471",
                          }}
                          onChange={this.handleHeightFeetChange}
                        />
                        <label className="control-label" htmlFor="bmiHeightFeet">
                          ft
                        </label>
                      </div>
                      <div style={{ width: "100%", padding: "0 20px 0 20px" }}>
                        <input
                          className="form-control"
                          id="bmiHeightInch"
                          type="number"
                          min="0"
                          max="12"
                          value={this.state.heightInch}
                          onChange={this.handleHeightInchChange}
                          style={{
                            backgroundColor: "transparent",
                            border: "2px solid darkgray",
                            color: "#63d471",
                          }}
                        />
                        <label className="control-label" htmlFor="bmiHeightInch">
                          in
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
                <div>
                  {/* <button onClick={BmiDisplay}>reasult</button> */}
                  {/* <button onClick={this.BmiDisplay}>show</button>
                  {
                    this.render &&             
                    <button type="submit" onClick={BmiDisplay}>Preview</button>
                  // }
                  {isPreviewShown && <BmiDisplay/>} */}
                  <Button variant="outline-success" onClick={this.toggle}  >Calculate BMI</Button>
                   { this.state.on && 
                  <BmiDisplay
                    bmi={bmi}
                    label={results.label}
                    alertClass={results.alertClass}
                    // style={{display:'none'}}
                  />
                   }
                </div>
              </div>
            </div>
            
            { this.state.on && <Weight bmi={bmi} label={results.label} fnc={this.gotoSelect} />}
          
        </div>
        </div>
      </motion.div>
      
    );
  }
}

function BmiDisplay(props) {
  var disp = "none";
  return (
    <div
      className={"bmi-result alert mt-3 " + props.alertClass}
      style={{
        display: { disp },
      }}
    >
      <div>{props.bmi || "--.-"}</div>
      <div>{props.label}</div>
    </div>
  );
}
// const DeleayComponent = (props) => {
//   const [show, setShow] = React.useState(false);

//   React.useEffect(() => {
//     setTimeout(() => {
//       setShow(true);
//     }, 2000);
//     if (props.bmi <= 18.5) {
//       alert("Underweight");
//     } else if (props.bmi <= 24.9) {
//       alert("Normal");
//     } else if (props.bmi <= 29.9) {
//       alert("Over");
//     }
//   }, [show]);

//   if (!show) return null;

//   return (
//     <>
//       {/* <h3>Too Low we sugges to increase your weight.... See our exercise and diet plan to increase or Gain weight</h3> */}
//     </>
//   );
// };

function Weight(props) {
  const [level, setlevel] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setlevel((newlevel) => (newlevel >= 100 ? 0 : newlevel + 10));
  //   }, 500);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  if (props.bmi <= 18.5) {
    return (
      <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        maxWidth: "70%"
      }}
    >
      <h2
        className="wordings"
        style={{
          fontWeight: "normal",
          // background: "-webkit-linear-gradient(#ffff  , #63d471)",
          // WebkitBackgroundClip: "text",
          // WebkitTextFillColor: "transparent",
          color:'#121212',

          fontSize: "22px",
        }}
      >
        According to your <span style={{color:'#63d471'}}> BMI ({props.bmi})</span> Your Weight is Too Low, we sugess
        you to Gain some weight
      </h2>
      <h4
        className="wordings2"
        style={{
          fontWeight: "normal",
          // background: "-webkit-linear-gradient(#ffff, #63d471)",
          // WebkitBackgroundClip: "text",
          // WebkitTextFillColor: "transparent",
          color:'#121212',
          fontSize: "22px",
        }}
      >
        Don't know how to Gain? <span style={{color:'#63d471'}}> Follow our Exercise and Diet plan Accordingly</span>
      </h4>
      <Link to='/userDash' className="btn btn-outline-success">
        Let's See
      </Link>
    </div>
    );
  } else if (props.bmi <= 24.9) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        maxWidth: "70%"

        }}
      >
        <h2
          className="wordings"
          style={{
            fontWeight: "normal",
            // background: "-webkit-linear-gradient(#ffff  , #63d471)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            fontSize: "22px",
          color:'#121212',

          }}
        >
          According to your <span style={{color:'#63d471'}}> BMI ({props.bmi})</span> Your Weight is Normal, we sugess
          you to Maintain weight
        </h2>
        <h4
          className="wordings2"
          style={{
            fontWeight: "normal",
            // background: "-webkit-linear-gradient(#ffff, #63d471)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          color:'#121212',

            fontSize: "22px",
          }}
        >
        Don't know how to Maintain? <span style={{color:'#63d471'}}> Follow our Exercise and Diet plan Accordingly</span>
        </h4>
        <Link to='/userDash' className="btn btn-outline-light">
          Let's See
        </Link>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        maxWidth: "70%",
        // backgroundColor:'red'

        }}
      >
        <h2
          className="wordings"
          style={{
            fontWeight: "normal",
            // background: "-webkit-linear-gradient(#ffff  , #63d471)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          color:'#121212',

            fontSize: "22px",
          }}
        >
          According to your <span style={{color:'#63d471'}}> BMI ({props.bmi})</span> Your Weight is Too much, we sugess
          you to Lean some weight
        </h2>
        <h4
          className="wordings2"
          style={{
            fontWeight: "normal",
            // background: "-webkit-linear-gradient(#ffff, #63d471)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          color:'#121212',

            fontSize: "22px",
          }}
        >
        Don't know how to Lean? <span style={{color:'#63d471'}}> Follow our Exercise and Diet plan Accordingly</span>
        </h4>
        <Link to='/userDash' className="btn btn-outline-success">
          Let's See
        </Link>
      </div>
    );
  }
}

//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );

export default withRouter(BMApp);
