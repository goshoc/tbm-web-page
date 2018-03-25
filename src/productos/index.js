import React, {Component} from 'react'
import '../css/productos.css';
import Producto323th from '../img/productos/323_th.jpg';
import Producto421th from '../img/productos/421_th.jpg';
class Productos extends Component {

  // https://www.ibm.com/security?lnk=ushpv18c5&lnk2=learn
  // y
  // https://www.ibm.com/us-en/

  render() {

    return (<div className="productos">
      <nav className="product-filter">

        <h1>PRODUCTOS</h1>

        <div className="sort">

          <div className="collection-sort">
            <label>Filtrados por:</label>
            <select>
              <option value="/">PLC</option>
            </select>
          </div>

          <div className="collection-sort">
            <label>Ordenados por:</label>
            <select>
              <option value="/">Featured</option>
            </select>
          </div>

        </div>

      </nav>
      <section className="products">
        <div className="product-card">
          <div className="product-image">
            <img alt="producto 323" src={Producto323th}></img>
          </div>
          <div className="product-info">
            <h5>Hitachi - Serie EH - CPU EHV+</h5>
            <button className="btn btn-default">Detalles</button>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img alt="producto 421" src={Producto421th}></img>
          </div>
          <div className="product-info">
            <h5>Fatek Serie FBs</h5>
            <button className="btn btn-default">Detalles</button>
          </div>
        </div>
        <div className="card text-center">
          <div className="product-image">
          <img alt="producto 421" src={Producto421th}></img>
          </div>
          <div className="card-body">
            <h5 className="card-title">Fatek Serie FB</h5>
          </div>
          <div className="card-body">
            <a href="#" className="btn btn-primary">Detalles</a>
          </div>
        </div>
        <div className="card text-center">
          <div className="product-image">
            <img alt="producto 323" src={Producto323th}></img>
          </div>
          <div className="card-body">
            <h5 className="card-title">Hitachi - Serie EH - CPU EHV+</h5>
          </div>
          <div className="card-body">
            <a href="#" className="btn btn-primary">Detalles</a>
          </div>
        </div>

      </section>
    </div>)
  }
}
export default Productos;
