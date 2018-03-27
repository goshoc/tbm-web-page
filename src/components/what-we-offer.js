import React, {Component} from 'react'
import '../css/content-landing.css';

class WhatWeOffer extends Component {

  render() {

    return (
      <section className="x-services ptb-100 gray-bg">

        <section className="section-title">
          <div className="container text-center">
            <h2>What We Offer</h2>
            <span className="bordered-icon"><i className="fa fa-circle-thin"></i></span>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="thumbnail clearfix">
                <a href="#"><img className="img-responsive" src="img/img-offer-1.jpg" alt="Image"></img></a>

                <div className="caption">
                  <h3><a href="#">Investment</a></h3>

                  <p>Praesent dapibus eleifend aug eget sollicitudin velit malesuada Aliquam blandit diam feugiat tellus odio malesuada ex.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="thumbnail clearfix">
                <a href="#"><img className="img-responsive" src="img/img-offer-2.jpg" alt="Image"></img></a>

                <div className="caption">
                  <h3><a href="#">Planning</a></h3>

                  <p>Praesent dapibus eleifend aug eget sollicitudin velit malesuada Aliquam blandit diam feugiat tellus odio malesuada ex.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="thumbnail clearfix">
                <a href="#"><img className="img-responsive" src="img/img-offer-3.jpg" alt="Image"></img></a>

                <div className="caption">
                  <h3><a href="#">Analysis</a></h3>

                  <p>Praesent dapibus eleifend aug eget sollicitudin velit malesuada Aliquam blandit diam feugiat tellus odio malesuada ex.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="thumbnail clearfix">
                <a href="#"><img className="img-responsive" src="img/img-offer-4.jpg" alt="Image"></img></a>

                <div className="caption">
                  <h3><a href="#">Banking</a></h3>

                  <p>Praesent dapibus eleifend aug eget sollicitudin velit malesuada Aliquam blandit diam feugiat tellus odio malesuada ex.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

    )
  }
}
export default WhatWeOffer;
