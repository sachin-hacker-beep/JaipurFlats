import React from 'react'
import Navigation from './navbar';
import Banner from './banner';
import Bestview from './bestview';
import Videosec from './videosec';
import Bestdeals from './bestdeals';
// import Property from './property';
import Footer from './footer';
import Properties from './properties';

function Home() {
  return (
    <>
    	<Navigation />
      <Banner />    
      <Bestview />
      <Videosec />
      <Bestdeals />
      <Properties />
      <Footer />
    </>
  )
}

export default Home