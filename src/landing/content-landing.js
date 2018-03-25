import React, {Component} from 'react'
import Contacto from '../contacto/contacto.js';
// import Fondo from '../img/circuit-board.jpg';
import '../css/content-landing.css';

class ContentLanding extends Component {

  // https://www.ibm.com/security?lnk=ushpv18c5&lnk2=learn
  // y
  // https://www.ibm.com/us-en/

  render() {

    return (<div className="contentLanding">
      <div className="presentation">
        <h1 className="inspirated-phrase hidden-xs">“No es sobre las ideas. Sino hacer que éstas se vuelvan realidad”</h1>
        <div className="areas-trabajo">
          <div className="areas-info-corta">
            <h3 className="nombres-areas">Automatización y control</h3>
            <button class="btn btn-xl">Más información</button>
          </div>
          <div className="areas-info-corta">
            <h3 className="nombres-areas">Seguridad y control de acceso</h3>
            <button class="btn btn-xl">Más información</button>
          </div>
          <div className="areas-info-corta">
            <h3 className="nombres-areas">Instrumentación</h3>
            <button class="btn btn-xl">Más información</button>
          </div>
        </div>
      </div>
      <Contacto/>
    </div>)
  }
}
export default ContentLanding;
