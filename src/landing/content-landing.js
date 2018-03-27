import React, {Component} from 'react'


import LandingCarousel from '../components/landing-carousel.js';
import WhatWeOffer from '../components/what-we-offer.js';
import OurCapability from '../components/our-capability.js';
import OurTeam from '../components/our-team.js';
import Testimonials from '../components/testimonials.js';
import OurCustomers from '../components/our-customers.js';


class ContentLanding extends Component {



  render() {

    return (<div>
      <LandingCarousel/>
      <WhatWeOffer/>
      <OurCapability/>
      <OurTeam/>
      <Testimonials/>
      <OurCustomers/>
    </div>)
  }
}
export default ContentLanding;
