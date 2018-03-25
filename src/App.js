import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import GlobalAppBar from './components/app-bar.js';
// import ContentLanding from './landing/content-landing.js';
import Footer from './components/footer.js';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './routes';

class App extends Component {
  render() {
    return (<div className="App">
      <GlobalAppBar/>
      <Router>
        <AppRoutes/>
      </Router>
      <Footer/>
      {/* <ContentLanding/> */}
      {/* <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p> */
      }

    </div>);
  }
}

export default App;
