import React, {Component} from 'react'
import Acindar from '../img/companies/acindar.jpg';
import Tresm from '../img/companies/3m.jpg';
import Agd from '../img/companies/agd.jpg';
import Arcor from '../img/companies/arcor.jpg';
import Bagley from '../img/companies/bagley.jpg';
import BancoSantaFe from '../img/companies/banco_de_santa_fe.jpg';
import Beta from '../img/companies/beta.jpg';
import Bunge from '../img/companies/bunge.jpg';
import Cargill from '../img/companies/cargill.jpg';
import Carrefour from '../img/companies/carrefour.jpg';
import Citycenter from '../img/companies/citycenter.jpg';
import Cocacola from '../img/companies/cocacola.jpg';
import Freddo from '../img/companies/freddo.jpg';
import Fundar from '../img/companies/fundar.jpg';


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
            <a href="#"><img src={Acindar} alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src={Tresm} alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src={Agd} alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src={Arcor} alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src={Bagley} alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src={BancoSantaFe} alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src={Beta} alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src={Bunge} alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src={Cargill} alt="Image"></img></a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 section-margin">
            <a href="#"><img src={Carrefour} alt="Image"></img></a>
          </div>

        </div>
      </div>

    </section>
)
  }
}
export default OurCustomers;
