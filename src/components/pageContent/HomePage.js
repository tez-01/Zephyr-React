import React from 'react'
import Home from '../home/homes/Home';
import Branding from '../home/branding/Branding';
import Details from '../home/details/Details';
import Projects from '../home/projects/Projects';
import Features from '../home/features/Features';
import Count from '../home/count/Count';
import Advance from '../home/advance/Advance';

const HomePage = () => {
  return (
    <>
        <Home />
        <Branding />
        <Details />
        <Projects />
        <Features />
        <Count />
        <Advance />
    </>
  )
}

export default HomePage;