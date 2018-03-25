import React, {Component} from 'react';

class Contacto extends Component {

  render() {

    return (<section id="contact">
      <a href="#contact">&nbsp;</a>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4>Contacto</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form name="sentMessage" id="contactForm" noValidate="">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre *" name="firstname" required="true" data-validation-required-message="Por favor ingrese su nombre."></input>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Apellido *" name="lastname" required="true" data-validation-required-message="Por favor ingrese su apellido."></input>
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email *" name="email" required="true" data-validation-required-message="Por favor ingrese su email."></input>
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Mensaje" name="message" required="" data-validation-required-message="Por favor ingrese el mensaje."></textarea>
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button type="submit" className="btn btn-xl">Enviar</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          )
  }
}
export default Contacto;
