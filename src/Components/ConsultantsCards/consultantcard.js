import React, { useState } from 'react'
import "./consultantcard.css";
import { Link } from "react-router-dom";
import heartIcon from "../../Images/heart-icon.png";
import { Form, Button, Container, Modal } from 'react-bootstrap'

const Consultantcard = ({ imgSrc, details, label }) => {

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowSlot, setModalShowSlot] = React.useState(false);



  console.log({ imgSrc, details, label });
  return (
    <>
      <div
        className="card center-childrens mb-5"
        style={{ width: "18rem", maxHeight: "430px" }}
      >
        <img className="covidTeamCardImg mt-3" src={imgSrc} alt="" />
        <span className="covidTeamImgIcon">
          <img src={heartIcon} alt="" />
        </span>
        <div className="text-center mt-4">
          <h5 className="card-title covidTEamHeadingCard gray-headin">

            {label}
          </h5>
          {/* Available Slots :
                    <div style={{ backgroundColor: 'red' }}> <p className="card-text covidTeamCardText">{details}</p></div> */}
          <div><span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></div>
          <div classNameName="socialmediasIconCovidTeam">
            <span className="light-Color-Para">
              <i className="fab fa-facebook-square"></i>
            </span>
            <span className="ml-2 light-Color-Para">
              <i className="fab fa-linkedin"></i>
            </span>
            <span className="ml-2 light-Color-Para">
              <i className="fab fa-twitter-square"></i>
            </span>
            <span className="ml-2 light-Color-Para">
              <i className="fab fa-dribbble-square"></i>
            </span>
          </div>
          <div className="w-100 d-flex justify-content-between p-2">
            <Link
              onClick={() => setModalShow(true)}
              className="CovidTeamCardBtn text-cente mt-4">
              Book
            </Link>
            <Link
              onClick={() => setModalShowSlot(true)}
              className="CovidTeamCardBtn text-cente mt-4"
              style={{ backgroundColor: 'transparent', border: "1px solid #1a4774", color: '#1a4774', marginLeft: '5px' }}>
              Available Slots
            </Link>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCenteredModalSlots
        show={modalShowSlot}
        onHide={() => setModalShowSlot(false)}
      />
    </>

  )
}

export default Consultantcard
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pay to Proceed Further
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          To Book Appointment Pay Respective Fees of Consultant
          <span style={{ color: '#1a4774', fontWeight: 'bold' }}>500 RS</span>
        </h4>
        <h6>
          See available slots then Enter
        </h6>
        <Button variant="outline-primary">
          Proceed to payment method
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModalSlots(props) {

  const slot = ['2:00-3:00 PM', '5:00-6:00 PM', '10:00-11:00 PM']
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Available Time Slots of Consultant
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          Select Availible<span style={{ color: '#1a4774', fontWeight: 'bold' }}>Time Slot</span>
        </h4>
        <ul style={{ listStyle: 'none', display: "inline-flex" }}><h2 style={{
          fontWeight: 'bold',
          color: '#1a4774'
        }}>Monday</h2>
          {
            slot.map((item) => {
              return <li style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'Lightgray', margin: '5px' }}>{item}</li>
            })
          }
        </ul>
        <ul style={{ listStyle: 'none', display: "inline-flex" }}><h2 style={{
          fontWeight: 'bold',
          color: '#1a4774'
        }}>Tuesday</h2>
          {
            slot.map((item) => {
              return <li style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'Lightgray', margin: '5px' }}>{item}</li>
            })
          }
        </ul>
        <ul style={{ listStyle: 'none', display: "inline-flex" }}><h2 style={{
          fontWeight: 'bold',
          color: '#1a4774'
        }}>Wednesday</h2>
          {
            slot.map((item) => {
              return <li style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'Lightgray', margin: '5px' }}>{item}</li>
            })
          }
        </ul>
        <ul style={{ listStyle: 'none', display: "inline-flex" }}><h2 style={{
          fontWeight: 'bold',
          color: '#1a4774'
        }}>Thursday</h2>
          {
            slot.map((item) => {
              return <li style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'Lightgray', margin: '5px' }}>{item}</li>
            })
          }
        </ul>
        <ul style={{ listStyle: 'none', display: "inline-flex" }}><h2 style={{
          fontWeight: 'bold',
          color: '#1a4774'
        }}>Friday</h2>
          {
            slot.map((item) => {
              return <li style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'Lightgray', margin: '5px' }}>{item}</li>
            })
          }
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}