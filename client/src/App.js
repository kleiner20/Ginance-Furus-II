import React, { Component } from 'react';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IntroSearch from './components/IntroSearch';
// import './index.css';




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
