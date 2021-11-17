import React from 'react';
import NavbarResp from './components/pages/NavbarResp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/pages/Footer';

function App() {
  return (
  <>
  <div className="App">
    <Router>
      <NavbarResp/>
        <Switch>
          <Route path="/" exact component = {Home}/>
          
        </Switch>
        <Footer/>
    </Router>
  </div>
    
  </>
  );
}

export default App;
