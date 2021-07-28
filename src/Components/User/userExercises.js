import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../../App.css";

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
    backgroundColor: theme.palette.background.paper,
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
          backgroundColor: "#121212",
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
            backgroundColor: "#f5f5f5",
          }}
        >
          <h2 style={{ fontWeight: "bold" }}> Follow Exercises</h2>
          <img src="//i0.wp.com/thumbs.gfycat.com/RelievedGregariousIberianmole-size_restricted.gif?w=1155\u0026h=1226\"></img>
          <h4>Squats</h4>
          <img src="//i0.wp.com/thumbs.gfycat.com/EasyGoldenIndianpalmsquirrel-size_restricted.gif?w=1155\u0026h=1236\"></img>
          <h4>Overhead press</h4>
          <img src="//i0.wp.com/thumbs.gfycat.com/BiodegradableDistantFreshwatereel-size_restricted.gif?w=1155\u0026h=1220\"></img>
          <h4>Pull-ups</h4>
          <img
            width="400px"
            src="https://i0.wp.com/thumbs.gfycat.com/AnyShinyGharial-size_restricted.gif?w=1575"
          ></img>
          <h4>Push-ups</h4>
          <img src="//i0.wp.com/thumbs.gfycat.com/ConcernedHeftyCrayfish-size_restricted.gif?w=1155\u0026h=1228\"></img>
          <h4>Bench press</h4>
          <img src="	https://i0.wp.com/thumbs.gfycat.com/UnknownPleasedKodiakbear-size_restricted.gif?w=1575"></img>
          <h4>Lunges</h4>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lean
      </TabPanel>
    </div>
  );
}
