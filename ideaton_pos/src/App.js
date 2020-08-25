import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Pos from './components/Pos/Pos';
import MenuAdd from './components/MenuAdd';
import modal from './components/modal/modal';
import salerecord from './components/SaleRecord/salerecord';
import store from './components/Store/store';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/menuadd' component={MenuAdd} />
          <Route exact path='/pos' component={Pos} />
          <Route exact path='/modal' component={modal} />
          <Route exact path='/salerecord' component={salerecord} />
          <Route exact path='/' component={store} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
