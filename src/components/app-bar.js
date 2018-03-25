import React, {Component} from 'react'
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import logoTBM from '../img/logo-tbm.png';
import '../css/app-bar.css';


class GlobalAppBar extends Component {

  render() {

    return (<div className="app-bar">

      <Navbar className="navigation-bar">
        <Navbar.Header>
            <img className="icon-bar" src={logoTBM} alt="TBM Logo" href="#home"/>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            La empresa
          </NavItem>
          <NavItem eventKey={2} href="#">
            Productos
          </NavItem>
          <NavItem eventKey={3} href="#">
            Servicios
          </NavItem>
          <NavItem eventKey={4} href="#">
            Novedades
          </NavItem>

        </Nav>
      </Navbar>
    </div>)
  }
}
export default GlobalAppBar;
