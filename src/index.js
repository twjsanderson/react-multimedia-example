import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Multimedia1 from './components/multimedia1'; 
import Multimedia2 from './components/multimedia2'; 
import Multimedia3 from './components/multimedia3'; 
import Multimedia4 from './components/multimedia4';
import './index.css';


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">Multimedia1</Link>
      <Link className="p-3" to="/multimedia2">Multimedia2</Link>
      <Link className="p-3" to="/multimedia3">Multimedia3</Link>
      <Link className="p-3" to="/multimedia4">Multimedia4</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Multimedia1} />
        <Route path="/multimedia2" component={Multimedia2} />
        <Route path="/multimedia3" component={Multimedia3} />
        <Route path="/multimedia4" component={Multimedia4} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
