import React, {Component} from 'react'

class OurTeam extends Component {

  render() {

    return (
      <section className="team ptb-100">
        <section className="section-title">
          <div className="container text-center">
            <h2>Our Team</h2>
            <span className="bordered-icon"><i className="fa fa-circle-thin"></i></span>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <figure className="thumbnail">
                <a href="#"><img src="img/img-team-1.jpg" className="img-responsive" alt="Image"></img></a>
                <figcaption className="caption text-center">
                  <h3>Reena Scot -
                          <small>Director</small>
                      </h3>
                </figcaption>
              </figure>
            </div>


            <div className="col-sm-4">
              <figure className="thumbnail">
                <a href="#"><img src="img/img-team-2.jpg" className="img-responsive" alt="Image"></img></a>
                <figcaption className="caption text-center">
                  <h3>David Martin -
                          <small>Founder</small>
                      </h3>
                </figcaption>
              </figure>
            </div>


            <div className="col-sm-4">
              <figure className="thumbnail">
                <a href="#"><img src="img/img-team-3.jpg" className="img-responsive" alt="Image"></img></a>
                <figcaption className="caption text-center">
                  <h3>Jenefir White -
                          <small>marketing</small>
                      </h3>
                </figcaption>
              </figure>
            </div>


          </div>

          <div className="row">
            <div className="col-sm-4">
              <figure className="thumbnail">
                <a href="#"><img src="img/img-team-4.jpg" className="img-responsive" alt="Image"></img></a>
                <figcaption className="caption text-center">
                  <h3>Reena Scot -
                          <small>Director</small>
                      </h3>
                </figcaption>
              </figure>
            </div>


            <div className="col-sm-4">
              <figure className="thumbnail">
                <a href="#"><img src="img/img-team-5.jpg" className="img-responsive" alt="Image"></img></a>
                <figcaption className="caption text-center">
                  <h3>David Martin -
                          <small>Founder</small>
                      </h3>
                </figcaption>
              </figure>
            </div>


            <div className="col-sm-4">
              <figure className="thumbnail">
                <a href="#"><img src="img/img-team-6.jpg" className="img-responsive" alt="Image"></img></a>
                <figcaption className="caption text-center">
                  <h3>Jenefir White -
                          <small>marketing</small>
                      </h3>
                </figcaption>
              </figure>
            </div>


          </div>

        </div>

      </section>


          )
  }
}
export default OurTeam;
