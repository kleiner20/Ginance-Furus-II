import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import API from "../utils/API";

class Create extends Component {

  constructor() {
    super();
    this.state = {
      result: [],
      search: '',
      searchtype: 'Company',
      companies: '',
      error: '',
      ticker: '',
      name: '',
      close: null,
      investors_notes: '',
      short_description: '',
      earnings_date: '',
      high: null,
      low: null
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { ticker, name, close, investors_notes,short_description, earnings_date, high, low } = this.state;

    axios.post('/api/stocks', { ticker, name, close, investors_notes, short_description, earnings_date, high, low })
      .then((result) => {
        this.props.history.push("/")
      });
  }
  // searchSymbols = () => {
  //   const searchQuery = this.state.search.trim();
  //   const searchResults = Companies.filter((emp) => emp.company === searchQuery);
  //   this.setState({ 'result': searchResults, 'searchtype': 'Company' });

  // };







  render() {
    const { ticker, name, close, investors_notes,short_description, earnings_date, high, low } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-name">
              ADD STOCK
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Portfolio</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="ticker">ticker:</label>
                <input type="text" class="form-control" name="ticker" value={ticker} onChange={this.onChange} placeholder="ticker" />
              </div>
              <div class="form-group">
                <label for="name">name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="name" />
              </div>
              <div class="form-group">
                <label for="close">close:</label>
                <input type="text" class="form-control" name="close" value={close} onChange={this.onChange} placeholder="close" />
              </div>
              <div class="form-group">
                <label for="investors_notes">Investors Notes:</label>
                <textArea class="form-control" name="investors_notes" onChange={this.onChange} placeholder="investors_notes" cols="80" rows="3">{investors_notes}</textArea>
              </div>
              <div class="form-group">
                <label for="short_description">short_description:</label>
                <textArea class="form-control" name="short_description" onChange={this.onChange} placeholder="short_description" cols="80" rows="3">{short_description}</textArea>
              </div>
              <div class="form-group">
                <label for="earnings_date">Earnings Date:</label>
                <input type="number" class="form-control" name="earnings_date" value={earnings_date} onChange={this.onChange} placeholder="Earnings Date" />
              </div>
              <div class="form-group">
                <label for="high">high:</label>
                <input type="text" class="form-control" name="high" value={high} onChange={this.onChange} placeholder="high" />
              </div>
              <div class="form-group">
                <label for="low">low:</label>
                <input type="text" class="form-control" name="low" value={low} onChange={this.onChange} placeholder="low" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;