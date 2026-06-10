import React from 'react';
import Hero from './hero';
import Awards from './awards';
import Pricing from './pricing';
import Stats from './stats';
import Education from './education';
import OpenAccount from '../openaccount';


function HomePage() {
    return ( 
        <>
       <div style={{ paddingTop: "70px" }}>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        
        <Education />
        <OpenAccount />
        </div>
        
    


        </>
     );
}

export default HomePage;
