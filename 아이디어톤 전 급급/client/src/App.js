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
import salerecord from './components/SaleRecord/salerecord'
import order from './components/Order/order'
import store_statistic from './components/store_statistic/store_statistic';
import store from './components/Store/store'

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
        <Route exact path="/pos/:number" component = {Pos} />
        <Route exact path="/modal" component = {modal} />
        <Route exact path="/salerecord" component = {salerecord} />
        <Route exact path="/order" component = {order} />
        <Route exact path="/statistic" component = {store_statistic} />
        <Route exact path="/store" component = {store} />
      </Switch>
    </div>
  </Router>
  );
}
export default App;



