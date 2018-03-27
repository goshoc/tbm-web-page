import React, {Component} from 'react'
import ArcorPhoto from '../img/companies/__arcor.jpg';

class OurCustomers extends Component {

  render() {

    return (
      <section className="client-logo ptb-100">
      <section className="section-title">
        <div className="container text-center">
          <h2>Confían en nosotros</h2>
          <span className="bordered-icon"><i className="fa fa-circle-thin"></i></span>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src={ArcorPhoto} alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src="img/logo-client-2.jpg" alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src="img/logo-client-3.jpg" alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src="img/logo-client-4.jpg" alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src="img/logo-client-5.jpg" alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src="img/logo-client-6.jpg" alt="Image"></img></a>
          </div>

        </div>
      </div>

    </section>
)
  }
}
export default OurCustomers;
