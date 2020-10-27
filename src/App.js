import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './footer';
import home from './home';
import albums from './albums';
import notfound from './notfound';




function App() {





  return (
    <div>



     <Router>
     <Nav/>
       <Switch>
      <Route path ="/" exact component={home} />
      <Route path ="/album" component={albums} />
      <Route component={notfound} />
      </Switch>
     </Router>

     <Footer />
     </div>

  );
}

export default App;
/*
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<div className="row">
  <div className="col-sm-8 bg-primary">1</div>
  <div className="col-sm-4 bg-secondary">2</div>
</div>
<div className="text-success">IKar.sy</div>
<div class="p-3 mb-2 bg-info text-white">.bg-info</div>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
*/
