import React, {Component} from 'react'


import LandingCarousel from '../components/landing-carousel.js';
import WhatWeOffer from '../components/what-we-offer.js';
import OurCapability from '../components/our-capability.js';
import OurTeam from '../components/our-team.js';
import Testimonials from '../components/testimonials.js';
import OurCustomers from '../customers/our-customers.js';
import FormContacto from '../contacto/contacto.js';


class ContentLanding extends Component {



  render() {

    return (<div>
      <LandingCarousel/>
      <WhatWeOffer/>
      <OurCapability/>
      {/* <OurTeam/> */}
      {/* <Testimonials/> */}
      <OurCustomers/>
      <FormContacto/>
    </div>)
  }
}
export default ContentLanding;
