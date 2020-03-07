import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './components/Heading.js';
import Jumbotron from './components/Jumbotron.js';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: []
    };
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
      <div>
        <Heading />
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              My Portfolio
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Stock</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Buy/Sell Meter</th>
                  <th>Chart</th>
                </tr>
              </thead>
              <tbody>
                {this.state.stocks.map(stocks =>
                  <tr>
                    <td><Link to={`/show/${stocks._id}`}>{stocks.ticker}</Link></td>

                    <td>
                      {/* Low: ${stocks.low}<br></br>
                        Close ${stocks.close}<br></br>
                        High ${stocks.high}<br></br> */}
  <div class="progress">
    <div class={this.state.stock_status} role="progressbar" aria-valuenow={stocks.close} aria-valuemin={stocks.low} aria-valuemax={stocks.high} style={this.state.meter_percentage}>
      ${stocks.close}
    </div></div>


                    </td>
                    <td>{stocks.investors_notes}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
