import React, { Component } from 'react';

// import ZingChart from 'zingchart-react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './components/Heading.js';
// import Jumbotron from './components/Jumbotron.js';
import axios from 'axios';
import Chart from './components/Chart.js';
import TableRow from './components/TableRow.js';
// import './App.css';
import './index.css';
require('dotenv').config();

import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IntroSearch from './components/IntroSearch';





class App extends Component {
state = {
  SearchTerm:  ""
}

searchUpdate = (term)=>{
  this.setState({ SearchTerm: term})
}

  render(){
    return(
      <div>
      <Router>
      <div>
        <Route exact path='/' render={routerProps => <IntroSearch {...routerProps} setsearch={this.searchUpdate}/>} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' render={routerProps =><Create {...routerProps} searchterm = {this.state.SearchTerm} />} />
        <Route path='/show/:id' component={Show} />
      </div>
  </Router>
  </div>
    )
  }
}
export default App;
