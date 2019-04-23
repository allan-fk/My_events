import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
// import { MemoryRouter } from 'react-router';
import Homepage  from './Views/Homepage';
import Osm  from './Views/Profile';


const Routes = () => (
    <Router>
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route path="/about" component={Osm}/>
    </div>
  </Router>
)

export default Routes