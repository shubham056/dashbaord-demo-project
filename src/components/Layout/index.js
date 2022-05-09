import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';

export default function Layout({ pageHeading }) {
  return (
    <>
    <SideBar />
    <Header heading={pageHeading}/>
    </>
  )
}
