import React from 'react'
import ReactDOM from 'react-dom'
import ChatComponent from './ChatComponent'
import BannerWithText from '../BannerImgComponents/BannerImgComponents';
import bannerimg from "../../Images/Chor.jpg";



export default function Inbox() {
  const LinksBan = [
    {
      subLinkName: 'Home',
      subDash: '/',
      subLink: '/'
    },
 

  ];
  return (
      <>
      <BannerWithText
      imgSrc={bannerimg}
      heading={"Available Slots"}
      subHeading={`Available Slots`}
      LinksBan={LinksBan}
      height={"400px"}
      backgroundSize={"100% 400px"}
      conmarpad={"mt-5 pt-5"}
      fontsize={"60px"}
      />
        <div className="docpages">
      <div
        className="container emp-profile mt-5 mb-4 "
        style={{
          backgroundColor: "#FAFAFA",
          padding: 20,
          boxShadow: "0px 2px 5px #888888",
        }}
      >
        <ChatComponent />
        {/* { ReactDOM.render(<ChatComponent />, document.getElementById('root')) } */}
      </div>
      </div>
      </>
    )
}
