import React from 'react'
import ChatComponent from '../Consultant/ChatComponent'
import BannerWithText from '../BannerImgComponents/BannerImgComponents';
import bannerimg from "../../Images/Chor.jpg";

const Inbox = () => {
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
        heading={"Chat App"}
        subHeading={`Chat App`}
        LinksBan={LinksBan}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
        />
       <ChatComponent/>
       </>
    )
}

export default Inbox
