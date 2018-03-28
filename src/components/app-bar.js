import React, {Component} from 'react'
import logoTBM from '../img/logo-tbm2.png';
import '../css/app-bar.css';

class GlobalAppBar extends Component {

  render() {

    return (<div>
      <nav className="navbar m-menu navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src={logoTBM} alt=""></img>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="#navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right main-nav">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="uc-mobile-menu-pusher">
        <div className="content-wrapper"></div>
      </div>
      <div className="uc-mobile-menu uc-mobile-menu-effect">
        <button type="button" className="close" aria-hidden="true" data-toggle="offcanvas" id="uc-mobile-menu-close-btn">&times;</button>
        <div>
          <div>
            <ul id="menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>

      )
  }
}
export default GlobalAppBar;
