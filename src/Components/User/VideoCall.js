import React from 'react'
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from '../VideoPlayer';
import Sidebar from '../Sidebar';
import Notifications from '../Notifications';
import BannerWithText from '../BannerImgComponents/BannerImgComponents';
import bannerimg from "../../Images/Chor.jpg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  appBar1: {
    borderRadius: 15,
    margin: '0px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '450px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',

  },
}));

const VideoCall = () => {
  const classes = useStyles();
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
    heading={"Video App"}
    subHeading={`Video App`}
    LinksBan={LinksBan}
    height={"400px"}
    backgroundSize={"100% 400px"}
    conmarpad={"mt-5 pt-5"}
    fontsize={"60px"}
    />
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h3" align="center">Live Video Session</Typography>
      </AppBar>
      <AppBar className={classes.appBar1} position="static" color="inherit">
        <Typography variant="h5" align="center">Consult With Your Doctor Or Trainer</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
    </>
  );
}

export default VideoCall
