import React, {Component} from 'react'

class OurCapability extends Component {

  render() {

    return (        <section className="x-features">
              <section className="section-title">
                <div className="container text-center">
                  <h2>Our Capabilities</h2>
                  <span className="bordered-icon"><i className="fa fa-circle-thin"></i></span>
                </div>
              </section>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 img-left">
                    <img className="img-responsive" src="img/img-about.png" alt=""></img>
                  </div>
                  <div className="col-md-6">
                    <div className="promo-block-wrapper clearfix">
                      <div className="promo-icon">
                        <i className="fa fa-line-chart"></i>
                      </div>
                      <div className="promo-content">
                        <h3>We teach you how to improve your business</h3>

                        <p>Lorem ipsum dolor sit consectetuer adipiscing elit nonummy ib uismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                      </div>
                    </div>


                    <div className="promo-block-wrapper clearfix">
                      <div className="promo-icon">
                        <i className="fa fa-life-ring"></i>
                      </div>
                      <div className="promo-content">
                        <h3>We make the technology affordable for you</h3>

                        <p>Lorem ipsum dolor sit consectetuer adipiscing elit nonummy ib uismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                      </div>
                    </div>


                    <div className="promo-block-wrapper clearfix">
                      <div className="promo-icon">
                        <i className="fa fa-calculator"></i>
                      </div>
                      <div className="promo-content last-type">
                        <h3>Seamlessly grow wireless human capital before turnkey.</h3>

                        <p>Lorem ipsum dolor sit consectetuer adipiscing elit nonummy ib uismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </section>

          )
  }
}
export default OurCapability;
