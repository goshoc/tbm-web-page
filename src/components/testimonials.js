import React, {Component} from 'react'

class Testimonials extends Component {

  render() {

    return (
      <section className="testimonial">
        <section className="section-title">
          <div className="container text-center">
            <h2>Satisfied Customer</h2>
            <span className="bordered-icon"><i className="fa fa-circle-thin"></i></span>
          </div>
        </section>
        <div className="container">
          <div id="testimonialSlider" className="carousel slide" data-ride="carousel">


            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <blockquote>
                  <ul>
                    <li><img src="img/img-testimonial-1.jpg" className="img-responsive" alt="" /></li>
                    <li className="name">Justus Kühn</li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egetvel lacus pretium rhoncus a quis nisly Ut vehicula gravida dui in pulvinar donec diam elit consequat eget augue vitae aliquet sollicitudin.
                  </p>

                </blockquote>
              </div>
              <div className="item">
                <blockquote>
                  <ul>
                    <li><img src="img/img-testimonial-2.jpg" className=" img-responsive" alt="" /></li>
                    <li className="name">Lennox Arnold</li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egetvel lacus pretium rhoncus a quis nisly Ut vehicula gravida dui in pulvinar donec diam elit consequat eget augue vitae aliquet sollicitudin.
                  </p>

                </blockquote>
              </div>
              <div className="item">
                <blockquote>
                  <ul>
                    <li><img src="img/img-testimonial-3.jpg" className="img-responsive" alt="" /></li>
                    <li className="name">Paulina Berger</li>
                  </ul>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egetvel lacus pretium rhoncus a quis nisly Ut vehicula gravida dui in pulvinar donec  diam elit consequat eget augue vitae aliquet sollicitudin.
                  </p>
                </blockquote>
              </div>
            </div>

            <a className="left carousel-control" href="#testimonialSlider" role="button" data-slide="prev">
              <span><i className="fa fa-angle-left"></i></span>
              <span className="sr-only">Previous</span>
          </a>
            <a className="right carousel-control" href="#testimonialSlider" role="button" data-slide="next">
              <span><i className="fa fa-angle-right"></i></span>
              <span className="sr-only">Next</span>
          </a>
          </div>

        </div>
      </section>


    )
  }
}
export default Testimonials;
