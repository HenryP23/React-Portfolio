import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Navabar from './components/Navabar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="Container">

    <Navabar />
        <Switch>
          <Route path = "/" component={Home} exact />
          <Route path = "/portfolio" component={Portfolio} />
        </Switch>
    <Footer />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
