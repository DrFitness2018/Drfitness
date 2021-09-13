import React,{ useState} from 'react'
import LabConsultantImg1 from "../../Images/lap-consul/1.JPG";
import LabConsultantImg2 from "../../Images/lap-consul/2.JPG";
import LabConsultantImg3 from "../../Images/lap-consul/3.JPG";
import LabConsultantImg6 from "../../Images/lap-consul/6.JPG";
import LabConsultantImg7 from "../../Images/lap-consul/7.JPG";
import LabConsultantImg8 from "../../Images/lap-consul/8.JPG";
import LabConsultantImg9 from "../../Images/lap-consul/9.JPG";
import LabConsultantImg10 from "../../Images/lap-consul/10.JPG";
import LabConsultantImg11 from "../../Images/lap-consul/11.JPG";
import LabConsultantImg12 from "../../Images/lap-consul/rahenuma.jpg";
import LabConsultantImg13 from "../../Images/lap-consul/sharmin.jpg";
import tr1 from "../../Images/tr1.jpg";
import tr4 from "../../Images/tr4.jpg";
import tr5 from "../../Images/tr5.jpg";
import ConsultantCards from "../../Components/ConsultantsCards/consultantcard";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import bannerimg from "../../Images/Chor.jpg";
=======
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5


import HeadingComponent from '../HeadingComponent';
import './Consult.css'
<<<<<<< HEAD
import BannerWithText from '../BannerImgComponents/BannerImgComponents';
=======
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5

const Consult = () => {
    const LabConsultantsData = [
      {
        imgSrc: LabConsultantImg1,
        label: "DR. SHAHEDA ANWAR",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: LabConsultantImg2,
        label: "DR.TAHMINA JHUMKY",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: LabConsultantImg3,
        label: "DR. FARAH-SUL-LAIL",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
  
      {
        imgSrc: LabConsultantImg6,
        label: "DR.FARZANA FERDOUSI",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: LabConsultantImg7,
        label: "DR.SONIA FERDOUS",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: LabConsultantImg8,
        label: "DR.ARIFA AKRAM",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: LabConsultantImg9,
        label: "DR. SAIKA FAROOK",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: LabConsultantImg10,
        label: "DR. SHARMIN CHOWDHURY",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: LabConsultantImg11,
        label: "PROF DR.MIZANUR RAHMAN",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: LabConsultantImg12,
        label: "DR. RUMANA AHMED",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: LabConsultantImg13,
        label: "DR.SHARMIN JAHAN SHELLY",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
    ];
    const Trainer = [
      {
        imgSrc: tr1,
        label: "Trainer Alex",
        star:4,
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: tr4,
        label: "Trainer Adam",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: tr5,
        label: "Trainer ",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
  
      {
        imgSrc: tr4,
        label: "Trainer Adam",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      {
        imgSrc: tr5,
        label: "Trainer Adam",
        details: "10:00 12:30 1:00 1:30 2:00 2:30 3:00",
      },
      
    ];


  const [selectedTab, setSelectedTab] = useState("Doctors");
  let history = useHistory();

<<<<<<< HEAD
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
  
  return (
        <>
       <BannerWithText 
      imgSrc={bannerimg}
      heading={"Consultants"}
      subHeading={`Consultants`}
      LinksBan={LinksBan}
      height={"400px"}
      backgroundSize={"100% 400px"}
      conmarpad={"mt-5 pt-5"}
      fontsize={"60px"}
      />
        <div className="mt-5">
       
=======

  
  return (
        <>
        <div className="mt-5">
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
        <button className="btn btn-outline-primary ml-3" onClick={() => history.goBack()}>Back</button>
        <HeadingComponent heading={"Consultants"} />
        {/* <h2>Consultants</h2> */}
      </div>
      <div className="container">
        {[
          "Doctors",
          "Trainers",
          
        ].map((item, index) => (
          <div
            className="d-flex d-inline-flex "
            key={index + 1}
            onClick={() => setSelectedTab(item)}
          >
            <div
              className={
              selectedTab === item ? "labTeamBtnActive" : "labTeamBtn"
              }
            >
              <span
                className={
                  selectedTab === item ? "text-white" : " light-Color-Para"
                }
                style={{ fontSize: "13px" }}
              >
                {item}
              </span>
            </div>
          </div>
        ))}

        {selectedTab === "Doctors" ? (
          <>
           <div className="container">
        <div className="row mt-5">
          {LabConsultantsData?.map((item, index) => (
            <div className="col-lg-3 col-sm-6 center-childrens" key={index}>
              <ConsultantCards
                imgSrc={item?.imgSrc}
                label={item?.label}
                details={item?.details}
              />
            </div>
          ))}
        </div>
      </div>
          </>
        ) : selectedTab === "Trainers" ? (
          <>
           <div className="container">
        <div className="row mt-5">
          {Trainer?.map((item, index) => (
            <div className="col-lg-3 col-sm-6 center-childrens" key={index}>
              <ConsultantCards
                imgSrc={item?.imgSrc}
                label={item?.label}
                details={item?.details}
              />
            </div>
          ))}
        </div>
      </div>
          </>
        ) : null}
</div>

        </>
    )
}

export default Consult
