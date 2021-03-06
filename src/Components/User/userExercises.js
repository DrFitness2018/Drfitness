import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./userExercise.css";
import ExercisesG from "./Exercises/ExercisesGain";
import ExercisesL from "./Exercises/ExercisesLean";
import BannerWithText from "../BannerImgComponents/BannerImgComponents";
import bannerimg from "../../Images/Chor.jpg";

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
    backgroundColor:'#EEEEEE',
    color: "black",
  },
}));

export default function NavTabs() {
  const LinksBan = [
    {
      subLinkName: 'Home',
      subDash: '/',
      subLink: '/'
    },
    {
      subLinkName: 'Diet Plan',
      subDash: '/',
      subLink: '/diets'
    },

  ];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
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
      
      <AppBar
        position="static"
        style={{
          backgroundColor: "#233329",
          color: "white",
          marginTop:'-40px'
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
        <ExercisesG />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExercisesL />
      </TabPanel>
    </div>
  );
}
     