import React from 'react';
import Card from './components/card';
import Hero from './components/Hero';
import TeamsSection from './components/TeamsSection';
import Np from "./components/np";

const App = () => {
  return (
    <div className='grid sm-w-360  md-w-1440'>
      {/* <Hero />
      <Card /> */}
      <TeamsSection />
      {/* <Np /> */}
    </div>
  );
}
export default App


