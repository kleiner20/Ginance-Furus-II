import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Heading from './components/Heading.js';
import Jumbotron from './components/Jumbotron.js';
import axios from 'axios';
import API from './utils/API';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      progress: 0,
      meter_color: '',
      meter_progress: '',
      meter_value: ''
    };
    this.addColorToMeter = this.addColorToMeter.bind(this)
  }

  componentDidMount() {
    axios.get('/api/stocks')
    .then(res => {
      this.setState({ stocks: res.data });
      console.log(this.state.stocks);
      console.log("butt");
    });
    //Interval to refresh the page periodically
      // setInterval(()=>{
      //   axios.get('/api/stocks')
      //   .then(res => {
      //     this.setState({ stocks: res.data });
      //     console.log("Reloaded API");
      //   });
      // }, 3600000);
  };

  GetClosingPrices(){
    const {stocks} = this.state
    stocks.map((stock, i) => {
      // map through stocks and call api to get closing price
      API.getSecuritiePrices(stock.ticker)
      .then(res =>{
        console.log(res)
      })

      // set state with new data

      return true  
    } )
  }

  //My Meter code that I'm coming back to
// ProgressChange = (e) => {
//   let meter_color = '';
//   let meter_progress = '';
//   let progress = (this.state.close-this.state.low)/(this.state.high-this.state.low);
//   console.log(progress)
//   if(progress < .25){
//     meter_color = "progress-bar progress-bar-danger"
//   }
//   if(progress > .25 && progress < .50){
//     meter_color = "progress-bar progress-bar-warning"
//   }
//   if(progress > .50 && progress < .75){
//     meter_color = "progress-bar progress-bar-info"
//   }
//   if(progress > .75) {
//     meter_color = "progress-bar progress-bar-success"
//   }
//   this.setState({meter_color: meter_color});
//   console.log(this.state.progress)
//   meter_progress = "width:" + progress + "%";
//   this.setState({meter_progress: meter_progress});
//   console.log(this.state.meter_progress)
//   let meter_value = progress.toString();
//   this.setState({meter_value: meter_value});
// }


  addColorToMeter(low, close, high){
    let status = (close - low)/(high - low);
    console.log(status)
    if (status < 0.50) {
      let meter_color = "progress-bar progress-bar-danger"
      let size = (status * 100).toString() + "%"
      this.setState({meter_progress: size})
      this.setState({meter_value: (status * 100)})
      this.setState({meter_color: "progress-bar progress-bar-danger"})
    }
    if (status > 0.50 && status < .75){
      let meter_color = "progress-bar progress-bar-warning"
      let size = (status * 100).toString() + "%"
      this.setState({meter_progress: size})
      this.setState({meter_value: (status * 100)})
      this.setState({meter_color: "progress-bar progress-bar-warning"})
    }
    if (status  > 0.75){
      let meter_color = "progress-bar progress-bar-success"
      let size = (status * 100).toString() + "%"
      this.setState({meter_progress: size})
      this.setState({meter_value: (status * 100)})
      this.setState({meter_color: "progress-bar progress-bar-success"})
    }
    // else{
    //   // we're adding more numbers
    //   let newEquation = equation + newLogic
    //   this.setState({equation: newEquation})
    // }
  
  };
  
  render() {
    return (
      <div>
        {/* <Heading /> */}
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
                  <th>Investor Notes</th>
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
    <div class={this.state.meter_color} role="progressbar" aria-valuenow={this.state.meter_value} aria-valuemin="0" aria-valuemax="100" style={{width: this.state.meter_progress}}>
      ${stocks.close}
    </div></div>


    <div class="progress">
    <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
      40% Complete (success)
    </div>
  </div>


    <button onClick={() => console.log(this.state)} >Color button</button>
    <button onClick={() => this.addColorToMeter(stocks.low, stocks.close, stocks.high)} > KFC</button>


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
