import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Heading from './Heading.js';
import StockCard from './StockCard.js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from "react-bootstrap";
import CoSymForm from "./CoSymForm";
import API from "../utils/API.js";
import '../index.css';
import Logo from "../assets/ginanfurtrans.png";




class IntroSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: [
        {ticker: "AAPL",
          name: "Apple"
        },
        {ticker: "GOOG",
          name: "Google"
        }
      ]
    };
  }
  andleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSymbolInputChange = event => {
    const value = event.target.value;
    console.log("Keith's tracking 1 done")
    console.log(value)
    // const name = event.target.name;
    this.setState({
      ticker: value.toUpperCase()
    });
  };

  // When the form is submitted, search the companies.json for the value of `this.state.search`
  handleSymbolFormSubmit = event => {
    event.preventDefault();
    console.log("Keith's tracking 2 too")

    // if(this.state.selectedOption === "symbol"){

    //   this.stockPriceSearch(this.state.ticker)
    // } 
    // else {
      API.getCompanySymbols(this.state.ticker).then(res=>{
        console.log(res)
        let symbol = res.data.companies[0].ticker;
        this.stockPriceSearch(symbol)
      })
    // }

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
  API.getCompanySymbols(symbol)
  .then(res =>{
    //let companies=res.data.companies
    //console.log(res.data.companies.map(companies=> companies.ticker )))
    // this.setState({companies: res.data.companies })

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

      let close = monthsObject[keysArr[0]]["4. close"]
      console.log('close', close)

      API.getCompanyInfo(symbol).then(info=>{
        console.log("info", info)
        this.setState({
            high: high, 
            low: low,
            close: close,
            short_description: info.data.short_description,
            name: info.data.legal_name
          });
          this.props.setsearch(symbol)
          this.props.history.push("/create")

      })
    })
    .catch(err=>{
      console.log(err)
      //do something to let the user know its not a real stock symbol
      //have an error message in the state
      alert("Not a real stock symbol")
    })
  }

  componentDidMount() {
    axios.get('/api/stocks')
    .then(res => {
      this.setState({ stocks: res.data });
      console.log(this.state.stocks);
      console.log("butt");
    });
      setInterval(()=>{
        axios.get('/api/stocks')
        .then(res => {
          this.setState({ stocks: res.data });
          console.log("Reloaded API");
        });
      }, 3600000);
  };

  // addColorToMeter(){
  //   let status = ({this.state.close}-{state.low})/(Number{this.state.high}))-(Number(state.low));
  //   if (status < "50%") {
  //     let meter_color = "progress-bar progress-bar-danger"
  //     let size = "width:" + status
  //     this.setState({stock_status: meter_color})
  //     this.setState({meter_percentage: size})
  //   }
  //   if (status >"50%" && status < "75%"){
  //     let meter_color = "progress-bar progress-bar-warning"
  //     let size = "width:" + status
  //     this.setState({stock_status: meter_color})
  //     this.setState({meter_percentage: size})
  //   }
  //   if (status  >"75%"){
  //     let meter_color = "progress-bar progress-bar-success"
  //     let size = "width:" + status
  //     this.setState({stock_status: meter_color})
  //     this.setState({meter_percentage: size})
  //   // }
  //   // else{
  //   //   // we're adding more numbers
  //   //   let newEquation = equation + newLogic
  //   //   this.setState({equation: newEquation})
  //   }
  
  // };
  
  render() {
    return (
      <div className="back">
      <div>
        <Heading />
        
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
              {/* <h3 className="panel-title"> */}
              <img src={Logo} className="logoImg"/>
            {/* </h3> */}
            {/* <img src={Helmet} className="helmetImg"/> */}
            </div>  
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Stock</Link></h4>
            <CoSymForm searchtype={this.state.searchtype}
              value={this.state.ticker}
              handleSymbolInputChange={this.handleSymbolInputChange}
              handleSymbolFormSubmit={this.handleSymbolFormSubmit}
              searchJobs={this.searchJobs}
              selectedOption= {this.state.selectedOption}
              onChange = {this.onChange}
              />
          </div>    
          <div className="cardsDiv" style={{display:"flex", justifyContent: "center", flexWrap: "wrap", padding: "20px"}}>
                  {this.state.stocks.map(stock =>
                      <StockCard 
                        id={stock._id}
                        ticker={stock.ticker}
                        name={stock.name}
                        high= {stock.high}
                        low={stock.low}
                        close={stock.close}
                      />
                  )}
            </div>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default IntroSearch;
