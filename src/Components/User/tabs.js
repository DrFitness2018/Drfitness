import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Navbar from "./drawerusernew/navbar";
import UserExercise from "../../Components/User/userExercises";
import UserDiets from "../../Components/User/userDietPlans";
import "../../App.css";
import ExercisesG from "../User/Exercises/ExercisesGain";
import ExercisesL from "./Exercises/ExercisesLean";

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
    // backgroundColor:'#fafafa',
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
      {/* <Navbar /> */}
      <AppBar
        position="static"
        style={{
          backgroundColor: "#060b26",
          // background: "-webkit-linear-gradient(#000000, #166d3b)",
          color: "white",
          // position:'sticky'
        }}
      >
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          // style={{backgroundColor:'#fefefe'}}
        >
          <LinkTab label="Gain" href="/GainExercises" {...a11yProps(0)} />
          <LinkTab label="Lean" href="/LeanExercises" {...a11yProps(1)} />
          {/* <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <ExercisesG />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ExercisesL />
      </TabPanel>
    </div>
  );
}
