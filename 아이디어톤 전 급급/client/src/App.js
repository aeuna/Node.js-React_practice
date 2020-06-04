import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Pos from './components/Pos/Pos'
import MenuAdd from './components/MenuAdd'
import modal from './components/modal/modal';

function App() {
  return (
    <Router>
    <div>


      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/menuadd" component = {MenuAdd} />
        <Route exact path="/pos" component = {Pos} />
        <Route exact path="/modal" component = {modal} />
      </Switch>
    </div>
  </Router>
  );
}
export default App;
