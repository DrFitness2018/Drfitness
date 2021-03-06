import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "react-bootstrap";
import "../Consultant/Home.css";
import shera from "../../Images/sheraa.PNG";
import tulaib from "../../Images/tulaibs.PNG";
import doc from "../../Images/lap-consul/1.JPG";

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

export default function Appointments() {
  const classes = useStyles();
  // const [usersList, setUsersList] = useState([])
  const usersList = [
    {
      id: 1,
      profile:  tulaib ,
      name: "Dr. Tulaib",
      conDesc: "Fitness Trainer",
      selectedSlot: "2:00 - 3:00 PM",
    },
    {
      id: 1,
      profile:  doc ,
      name: "Dr. Shaheda Anwar",
      conDesc: "Therapist",
      selectedSlot: "3:00 - 4:00 PM",
    },
 
  ];

  return (
    <div className="docpages">
      <h2 className="heading">Upcoming Appointments</h2>

      {usersList.map((user, id) => {
        return (
          <div className="appoinmentCards">
            <div>
              <Avatar
                alt={user.name}
                src={user.profile}
                style={{ width: "100px", height: "100px",textAlign:'left' }}
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
              <h4>{user.conDesc}</h4>
              <h5 style={{fontweight: "bold"}}>Selected slot: <span>{user.selectedSlot}</span></h5>
            </div>
            <div className="cardsbutton">
              <div className="AcceptDecButton">
                <Button variant="primary" style={{ marginTop: "10px" }}>
                  Chat
                </Button>
                <Button style={{ marginTop: "10px" }} variant="outline-success">
                  Remainder
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
