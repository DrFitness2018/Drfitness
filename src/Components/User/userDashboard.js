import { Fade, Button } from "react-bootstrap";
import React from "react";
import BMJS from "../User/bmjs";
import Dash from "../User/Drawer";

class userDash extends React.Component {
  gotoSelect = () => {
    this.props.history.push("/select");
  };
  render() {
    return (
      <div>
        <Dash />
        <BMJS />
        {/* <UAppRouter /> */}
      </div>
    );
  }
}

export default userDash;
