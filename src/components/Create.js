import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API from "../utils/API.js";
import CoSymForm from "./CoSymForm";
// import Companies from "../data/companies.json";

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
      low: null,
      stock_status: '',
      meter_percentage: ''
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
//   searchSymbols = () => {
//     const searchQuery = this.state.search.trim();
//     const searchResults = Companies.filter((emp) => emp.company === searchQuery);
//     this.setState({ 'result': searchResults, 'searchtype': 'Company' });
// console.log("searchSymbols?")
//   };

//   searchJobs = event => {
//     event.preventDefault();
//     console.log("here")
//     const searchQuery = this.state.ticker.trim();
//     const searchResults = Companies.filter((co) => co.company === searchQuery);
//     this.setState({ 'result': searchResults, 'searchtype': 'coSym' });
//     console.log("searchJobs")
//   };


  // When this component mounts, search for the company
  componentDidMount() {
    // if (this.state.searchtype === "job") {
    //   this.searchJobs();
    // } else {
    //   this.searchSymbols();
    // }
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSymbolInputChange = event => {
    const value = event.target.value;
    console.log("Keith's tracking 1")
    console.log(value)
    // const name = event.target.name;
    this.setState({
      ticker: value
    });
  };

  // When the form is submitted, search the companies.json for the value of `this.state.search`
  handleSymbolFormSubmit = event => {
    event.preventDefault();
    console.log("Keith's tracking 2 weeee")
    this.stockPriceSearch(this.state.ticker)
    this.companySearch(this.state.ticker)
    // .then(res =>{
    //   console.log(res.data)
    //   //let companies=res.data.companies
    //   //console.log(res.data.companies.map(companies=> companies.ticker )))
    //   //this.setState({companies: res.data.companies })
    // })
    };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getCompanySymbols(this.state.ticker)
    .then(res =>{
      //let companies=res.data.companies
      //console.log(res.data.companies.map(companies=> companies.ticker )))
      this.stockPriceSearch(res.something)
    })
    console.log("Get Co. Symbols")
  };

companySearch = (symbol)=>{
  console.log("lion")
  API.getCompanySymbols(symbol)
  .then(res =>{
    //let companies=res.data.companies
    //console.log(res.data.companies.map(companies=> companies.ticker )))
    // this.setState({companies: res.data.companies })
    console.log("RIChard")
    console.log(res.data)
})
console.log("company search 2")
}
  stockPriceSearch = (symbol)=>{
    let companyArray=['OAT', 'DIS', 'AAPL']
    //event.preventDefault();
    //used api function to get monthly high/low stock prices
    //and yesterday's close price
    // for( let i = 0; i < companyArray.length; i++){
    //   API.getStockPrices(companyArray[i])
    // }
    API.getStockPrices(symbol)
    .then(res=>{
      console.log("Keith symbol tracking 3")
      console.log((res.data))
      let monthsObject = res.data["Monthly Adjusted Time Series"]
      

      console.log(monthsObject)

      // for(let month in monthsObject){
      //   console.log(month)
      //   //monthsObject[month]
      // }

      let keysArr = Object.keys(monthsObject);
      keysArr = keysArr.slice(0,12);
      console.log(keysArr)
      console.log(keysArr.length)

      const monthArray = Object.keys(monthsObject).map(i => monthsObject[i])
      console.log("marray")
      console.log(monthArray)

      let high = 0;
      let low = 99999999;
      keysArr.forEach(date=>{
        // console.log(monthsObject[date]["2. high"])
        if(monthsObject[date]["2. high"] > high){
          high = monthsObject[date]["2. high"]
        }
        if(monthsObject[date]["3. low"] < low){
          low = monthsObject[date]["3. low"]
        }
      })
      console.log('high', high)
      console.log('low', low)
      //prolly put these in state

      let close = monthsObject[keysArr[0]]["4. close"]
      console.log('close', close)

      this.setState({high: high, low: low, close: close});
    })
    .catch(err=>{
      console.log(err)
      //do something to let the user know its not a real stock symbol
      //have an error message in the state
    })
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
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Back to Portfolio</Link></h4>
            <form onSubmit={this.onSubmit}>
            <CoSymForm
              searchtype={this.state.searchtype}
              value={this.state.ticker}
              handleSymbolInputChange={this.handleSymbolInputChange}
              handleSymbolFormSubmit={this.handleSymbolFormSubmit}
              searchJobs={this.searchJobs}
            />
              {/* <div class="form-group">
                <label for="ticker">ticker:</label>
                <input type="text" class="form-control" name="ticker" value={ticker} onChange={this.onChange} placeholder="ticker" />
              </div> */}
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