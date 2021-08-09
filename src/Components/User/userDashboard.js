import { Fade, Button } from "react-bootstrap";
import React from "react";
import BMJS from "../User/bmjs";
import Drawer from "../User/Drawer";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    color: "black",
  },
}));

function UserDash() {
  const classes = useStyles();

    return (
      <div className={classes.root} style={{backgroundColor:'#121212',color:'white'}}>
        {/* <Drawer /> */}
        <BMJS />
        {/* <UAppRouter /> */}
      </div>
    );
}

export default UserDash;
