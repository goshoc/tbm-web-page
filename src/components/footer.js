import React, {Component} from 'react'
import logoTBM from '../img/logo-tbm.png';
import '../css/footer-css.css';



class GlobalAppBar extends Component {

  render() {

    return (<div className="footer">
      <footer id="footer">
        <div className="container-fluid">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-2 text-center hidden-xs hidden-sm">
                <a href="https://www.tbmsrl.com.ar" className="footer-brand">
                  <img src={logoTBM} alt="TBM" style={{ maxWidth: 150 }}></img>
                </a>
                <ul className="social-line"></ul>
              </div>
              <div className="col-md-10">
                <div id="footer-widget-area" className="content-sidebar widget-area" role="complementary">
                  <div className="row">
                    <div id="nav_menu-4" className="col-md-3 widget widget_nav_menu">
                      <h3 className="sidebar-title">About</h3>
                      <div className="menu-about-container">
                        <ul id="menu-about" className="menu">
                          <li id="menu-item-8601" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8601">
                            <a href="">About Us</a>
                          </li>
                          <li id="menu-item-8805" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8805">
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
                    <div id="nav_menu-6" className="col-md-3 widget widget_nav_menu">
                      <h3 className="sidebar-title">Company</h3>
                      <div className="menu-company-container">
                        <ul id="menu-company" className="menu">
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
          </div>
          <div className="footer-bottom">
            <div className="row">

              <div>
                <div className="footer-nav">
                  <ul id="menu-footer-links-menu" className="menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                      TBM S.R.L.
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                      Rosario, Santa Fe (Argentina)
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-322">
                      <a href="http://www.tbm.com.ar">www.tbm.com.ar</a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                      tbm@tbm.com.ar
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                      Lamadrid 470 - Zona i - Nave 2 - PB Of. 2 (S2001EBJ)
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                      Tel: +54 341 5277920
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-1">
                <ul className="social-icons menu">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>)
  }
}
export default GlobalAppBar;
