import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "react-bootstrap";
import "./Home.css";
import shera from "../../Images/sheraa.PNG";
import tulaib from "../../Images/tulaibs.PNG";
import mehmaam from "../../Images/mehmaams.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    // backgroundColor: theme.palette.background.paper,
    // backgroundColor: "pink",
  },
  // inline: {
  //   display: 'inline',
  // },
}));

export default function RecentAct() {
  const classes = useStyles();
  // const [usersList, setUsersList] = useState([])
  const usersList = [
    {
      id: 1,
      profile:  tulaib ,
      name: "Tulaib",
      phone: "0305-2504520",
      selectedSlot: "2:00 - 3:00 PM",
      day: "Monday",
    },
    {
      id: 2,
      profile:  shera ,
      name: "Shera",
      phone: "0300-2517225",
      selectedSlot: "3:00 - 4:00 PM",
      day: "Tuesday",
    },
    {
      id: 3,
      profile:  mehmaam ,
      name: "Mehmaam",
      phone: "0332-8733232",
      selectedSlot: "3:00 - 4:00 PM",
      day: "Friday",
    },
  ];

  return (
    <div style={{backgroundColor:'#eeeeee',padding:20,paddingBottom:40}}>
      {/* <h2 className="heading">Recent Activity with Clients</h2> */}

      {usersList.map((user, id) => {
        return (
          <div className="appoinmentCardsR">
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
                  fontFamily: 'cursive',color:'#0d47a1'
                }}
              >
                {user.name}
              </h3>
              <h6>{user.phone}</h6>
              <h5 style={{fontWeight:'bold',color:'#0d47a1'}}>Slot <span style={{fontWeight:'normal',color:'#212121'}}>{user.selectedSlot}</span></h5>
              <h5 style={{fontWeight:'bold',color:'#0d47a1'}}>Day <span style={{fontWeight:'normal',color:'#212121'}}>{user.day}</span></h5>
            </div>
            <div className="cardsbutton">
              <div className="AcceptDecButton">
                <Button variant="success" style={{ marginTop: "10px" }}>
                  Remainder
                </Button>
                <Button style={{ marginTop: "10px" }} variant="outline-primary">
                  Ask their improvemnts
                </Button>
              </div>
              <Button style={{ marginTop: "10px" }} variant="outline-secondary">
                Message{" "}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
