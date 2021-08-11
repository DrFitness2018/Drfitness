import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./userExercise.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    color: "black",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#233329",
          color: "white",
        }}
      >
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Gain" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Lean" href="/trash" {...a11yProps(1)} />
          {/* <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "#f5f5f5",
            color: "#212121",
          }}
        >
          <h2
            // style={{
            //   fontWeight: "bold",
            //   textAlign: "center",
            //   fontFamily: "serif",
            //   padding: 30,
            // }}
            style={{
              color: "#212121",
              borderRadius: 50,
              padding: 10,
              // fontFamily:
              //   "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              fontFamily: "fantasy",
              fontSize: "1.8rem",
              // backgroundColor: "#63d471",
              // backgroundImage:"linear-gradient(315deg, #63d471 0%, #166d3b 74%)",
              width: "100%",
              // marginLeft: 20,
            }}
          >
            {" "}
            These Exercises will help you Gain weight
          </h2>
          <div className="leftHeadRightImage">
            <h1 className="heading">Squats</h1>
            <img className="images" src="//i0.wp.com/thumbs.gfycat.com/RelievedGregariousIberianmole-size_restricted.gif?w=1155\u0026h=1226\"></img>
            {/* <img width={400} src="https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1530743652042-8AW6T0MPM6Q0JYEV6AO9/image-asset.gif"></img> */}
          </div>
          <div className="RightHeadLeftImage">
            <img className="images" src="//i0.wp.com/thumbs.gfycat.com/EasyGoldenIndianpalmsquirrel-size_restricted.gif?w=1155\u0026h=1236\"></img>
            <h1 className="heading">Overhead press</h1>
          </div>
          <div className="leftHeadRightImage">
            <h1 className="heading">Pull-ups</h1>
            <img className="images" src="//i0.wp.com/thumbs.gfycat.com/BiodegradableDistantFreshwatereel-size_restricted.gif?w=1155\u0026h=1220\"></img>
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
            <img className="images" src="//i0.wp.com/thumbs.gfycat.com/ConcernedHeftyCrayfish-size_restricted.gif?w=1155\u0026h=1228\"></img>
          </div>
          <div className="RightHeadLeftImage">
            <img className="images" src="	https://i0.wp.com/thumbs.gfycat.com/UnknownPleasedKodiakbear-size_restricted.gif?w=1575"></img>
            <h1 className="heading">Lunges</h1>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lean
      </TabPanel>
    </div>
  );
}
