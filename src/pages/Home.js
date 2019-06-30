import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import Featured from '../Components/Featured';

export default function Home() {
    return (
      <>
      <Hero>
        <Banner title="Luxuries Rooms" subtitle="delux rooms starting at $299"  >
          <Link to="/rooms" className="btn-primary"> Our Rooms</Link>
        </Banner>
      
      </Hero>
      <Services></Services>
      <Featured></Featured>
      
</>
    );
}

