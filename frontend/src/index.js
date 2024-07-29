import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import InventDashboard from './views/invent-dashboard'
import AddInventItem from './views/add-invent-item'
import UpdateInventItem from './views/update-invent-item'
import ViewInventItem from './views/view-invent-item'
import InventSearchResultId from './views/invent-search-result-id'
import InventSearchResultCondition from './views/invent-search-result-condition'
//import LowStockInventItems from './views/low-stock-invent-items'
import InventLowStock from './views/invent-low-stock'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    
      <Router>
        <ToastContainer/>
        <div>
          <Route component={InventDashboard} exact path="/invent-dashboard" />
          <Route component={AddInventItem} exact path="/add-invent-item" />
          <Route component={UpdateInventItem} exact path="/update-invent-item/:id" />
          <Route component={ViewInventItem} exact path="/view-invent-item/:id" />
          <Route component={InventSearchResultId} exact path="/invent-search-result-id"/>
          <Route component={InventSearchResultCondition} exact path="/invent-search-result-condition"/>
          <Route component={InventLowStock} exact path="/invent-low-stock" />
          {/*<Route component={LowStockInventItems} exact path="/low-stock-invent-items"/> */}
        </div>
      </Router>
    
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
