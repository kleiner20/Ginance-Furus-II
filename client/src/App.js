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


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      progress: 0,
      meter_color: '',
      meter_progress: '',
      meter_value: ''
}
    this.addColorToMeter = this.addColorToMeter.bind(this)
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

  addColorToMeter(low, close, high){
    let status = (close - low)/(high - low);
    console.log(status)
    if (status < 0.50) {
      let size = (status * 100).toString() + "%"
      this.setState({meter_progress: size})
      this.setState({meter_value: (status * 100)})
      this.setState({meter_color: "progress-bar progress-bar-danger"})
    }
    if (status > 0.50 && status < .75){
      let size = (status * 100).toString() + "%"
      this.setState({meter_progress: size})
      this.setState({meter_value: (status * 100)})
      this.setState({meter_color: "progress-bar progress-bar-warning"})
    }
    if (status  > 0.75){
      let size = (status * 100).toString() + "%"
      this.setState({meter_progress: size})
      this.setState({meter_value: (status * 100)})
      this.setState({meter_color: "progress-bar progress-bar-success"})
    } 
  };

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
                  {/* <th>Notes 2</th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.stocks.map(stock =>
                  <tr>
                    <td><Link to={`/show/${stock._id}`}>{stock.ticker}</Link></td>


                    <td>
                      {/* Low: ${stocks.low}<br></br>
                        Close ${stocks.close}<br></br>
                        High ${stocks.high}<br></br> */}
  {/* <div class="progress">
  <div class={this.state.meter_color} role="progressbar" aria-valuenow={this.state.meter_value} aria-valuemin="0" aria-valuemax="100" style={{width: this.state.meter_progress}}>
      ${stocks.close}
    </div></div> */}

                     <TableRow stock={stock} key={stock._id}/>


    {/* <div class="progress">
    <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
      40% Complete (success)
    </div>
  </div> */}



<div>{stock.investors_notes}</div>
    
    

                    </td>
                    <td><div><Chart stock={stock} /></div></td>
      {/* <td>{stock.investors_notes}</td> */}
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
