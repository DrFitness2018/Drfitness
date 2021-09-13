import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/conDash',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Availibility',
    path: '/Availible',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Inbox',
    path: '/Inbox',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Appointments',
    path: '/Appointments',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Schedule',
    path: '/Schedule',
    icon: <AiIcons.AiFillSchedule/>,
    cName: 'nav-text'
  },
  {
    title: 'Video Consultation',
    path: '/VideoConsult',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },

  
  // {
  //   title: 'Recent Activity',
  //   path: '/RecentAct',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];