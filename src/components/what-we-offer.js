import React, {Component} from 'react'
import '../css/content-landing.css';
import AutomatizacionYControlPhoto from '../img/servicios/automatizacion.jpg';
import ControlySeguridadPhoto from '../img/servicios/control_de_acceso.jpg';
import InstrumentacionPhoto from '../img/servicios/instrumentacion.jpg';

class WhatWeOffer extends Component {

  render() {

    return (
      <section className="x-services ptb-100 gray-bg">

        <section className="section-title">
          <div className="container text-center">
            <h2>Nuestras áreas</h2>
            <span className="bordered-icon"><i className="fa fa-circle-thin"></i></span>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="thumbnail clearfix">
                <a href="#"><img className="img-responsive" src={AutomatizacionYControlPhoto} alt="Image"></img></a>

                <div className="caption">
                  <h3><a href="#">Automatización y Control</a></h3>

                  <p>Variadores de velocidad. PLC. Interfaces (HMI). Reguladores de temperatura.Fuentes de alimentación. Comunicación inalámbrica. Instalación y puesta en marcha. Servicio de reparación y mantenimiento.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="thumbnail clearfix">
                <a href="#"><img className="img-responsive" src={ControlySeguridadPhoto} alt="Image"></img></a>

                <div className="caption">
                  <h3><a href="#">Seguridad y control de acceso</a></h3>

                  <p>Control de acceso biométrico. Cámaras de seguridad. Control de acceso. Control de asistencia de personal. Identificación por RFiD. Instalación y capacitación. Servicio de reparación y mantenimiento.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="thumbnail clearfix">
                <a href="#"><img className="img-responsive" src={InstrumentacionPhoto} alt="Image"></img></a>

                <div className="caption">
                  <h3><a href="#">Instrumentación</a></h3>

                  <p>Sensores. Adquisidores de datos ACR. Instrumentos de medición y registro. Instrumentos de medición Amprobe. Calibración y certificación de instrumentos. Perfiles térmicos. Calificación IQ, OQ, PQ.</p>
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
