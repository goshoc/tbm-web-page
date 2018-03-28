import React, {Component} from 'react';
import InstrumentacionPhoto from '../img/servicios/instrumentacion.jpg';

class LandingCarousel extends Component {

  render() {

    return (  <div id="x-corp-carousel" className="carousel slide hero-slide hidden-xs" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#x-corp-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#x-corp-carousel" data-slide-to="1"></li>
                <li data-target="#x-corp-carousel" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img src="img/hero-slide-1.jpg" alt="Hero Slide"></img>

                  <div className="carousel-caption">
                    <h1>Automatización y control</h1>

                    <p>Intrinsicly negotiate corporate synergy rather than user-centric web services. Synergistically transition emerging schemas and.</p>
                  </div>
                </div>
                <div className="item">
                  <img src="img/hero-slide-2.jpg" alt="..."></img>

                  <div className="carousel-caption">
                    <h1>Instrumentación</h1>

                    <p>Sensores. Adquisidores de datos ACR. Instrumentos de medición y registro. Instrumentos de medición Amprobe. Calibración y certificación de instrumentos. Perfiles térmicos. Calificación IQ, OQ, PQ.</p>
                  </div>
                </div>
                <div className="item">
                  <img src="img/hero-slide-3.jpg" alt="..."></img>

                  <div className="carousel-caption">
                    <h1>Seguridad y Control de Acceso</h1>

                    <p>Monotonectally envisioneer 24/7 bandwidth with reliable imperatives. Continually unleash unique niches after go forward.</p>
                  </div>
                </div>
              </div>


              <a className="left carousel-control" href="#x-corp-carousel" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
        </a>
              <a className="right carousel-control" href="#x-corp-carousel" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
        </a>
            </div>)
  }
}
export default LandingCarousel;
