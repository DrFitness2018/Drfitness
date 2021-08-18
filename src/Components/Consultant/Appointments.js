import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import "./Home.css";
import shera from "../../Images/sheraa.PNG";
import tulaib from "../../Images/tulaibs.PNG";
import mehmaam from "../../Images/mehmaams.PNG";
import shah from "../../Images/shahzaibs.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    backgroundColor: "pink",
  },
  // inline: {
  //   display: 'inline',
  // },
}));

export default function Appointments() {
  const classes = useStyles();
  // const [usersList, setUsersList] = useState([])
  const usersList = [
    {
      id: 1,
      profile: { tulaib },
      name: "Tulaib",
      phone: "0305-2504520",
      selectedSlot: "2:00 - 3:00 PM",
    },
    {
      id: 2,
      profile: { shera },
      name: "Shera",
      phone: "0300-2517225",
      selectedSlot: "3:00 - 4:00 PM",
    },
    {
      id: 3,
      profile: { mehmaam },
      name: "Mehmaam",
      phone: "0332-8733232",
      selectedSlot: "3:00 - 4:00 PM",
    },
    {
      id: 3,
      profile: { mehmaam },
      name: "Mehmaam",
      phone: "0332-8733232",
      selectedSlot: "3:00 - 4:00 PM",
    },
  ];

  return (
    <div className="docpages">
      <h2 className="heading">New/Pending clients requests</h2>

      {usersList.map((user, id) => {
        return (
          <div className="appoinmentCards">
            <div>
              <Avatar
                alt={user.name}
                src={user.profile}
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div style={{ textAlign: "left" }}>
              <h3
                style={{
                  fontFamily: "fantasy",
                }}
              >
                {user.name}
              </h3>
              <h4>{user.phone}</h4>
              <h5>Slot: {user.selectedSlot}</h5>
            </div>
            <div className="cardsbutton">
              <div className="AcceptDecButton">
                <Button variant="success" style={{ marginTop: "10px" }}>
                  Accept
                </Button>
                <Button style={{ marginTop: "10px" }} variant="outline-danger">
                  Decline
                </Button>
              </div>
              <Button style={{ marginTop: "10px" }} variant="outline-secondary">
                Request to change slot
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
