import React, {Component} from 'react'
import logoTBM from '../img/logo-tbm.png';
import '../css/footer-mio.css';

class GlobalAppBar extends Component {

  render() {

    return (<div className="footer">
      <footer className="footer">

        <div className="footer-widget-section">
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-4 footer-block">
                <div className="footer-widget widget_text">
                  <div className="footer-logo">
                    <a href="https://www.tbmsrl.com.ar" className="footer-brand">
                      <img src={logoTBM} alt="TBM" style={{
                          maxWidth: '100%'
                        }}></img>
                    </a>
                  </div>
                </div>
              </div>

              <div id="footer-widget-area" className="content-sidebar widget-area" role="complementary">
                <div className="col-sm-4 footer-block ">
                  <div className="footer-widget widget_text">
                    <ul className="menu-footer">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8601">
                        <a href="">About Us</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8805">
                        <a href="">Nuestra historia</a>
                      </li>
                      <li id="menu-item-8605" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8605">
                        <a href="">Certificaciones</a>
                      </li>
                      <li id="menu-item-8604" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8604">
                        <a href="">Directorio</a>
                      </li>
                      <li id="menu-item-8606" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8606">
                        <a href="">Clientes</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4 footer-block">
                  <div className="footer-widget widget_text">
                    <ul className="menu-footer">
                      <li id="menu-item-8627" className="no-click menu-item menu-item-type-custom menu-item-object-custom menu-item-8627">
                        <a href="/home">Company</a>
                      </li>
                      <li id="menu-item-8623" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8623">
                        <a href="/careers/">Careers</a>
                      </li>
                      <li id="menu-item-8952" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8952">
                        <a href="">En las noticias</a>
                      </li>
                      <li id="menu-item-8626" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-8626">
                        <a href="">Contacto</a>
                      </li>
                      <li id="menu-item-322" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-322">
                        <a href="">Mapa del sitio</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>

    </div>)
  }
}
export default GlobalAppBar;
