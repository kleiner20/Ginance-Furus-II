import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// import Heading from './components/Heading.js';
// import axios from 'axios';
// import Chart from './components/Chart.js';
import API from "../utils/API.js";


class TableRow extends Component {


  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      meter_color: '',
      meter_progress: '',
      meter_value: ''
}
    this.addColorToMeter = this.addColorToMeter.bind(this)
  }

  componentDidMount() {
      this.addColorToMeter(this.props.stock.low, this.props.stock.close, this.props.stock.high);

  }

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
      const { stock } = this.props;
    //   console.log(stock, "table row props")
    return (

<div>


{/* <button onClick={() => console.log(stock, "table row props")} >Color button</button> */}

  <div class="progress">
  <div class={this.state.meter_color} role="progressbar" aria-valuenow={this.state.meter_value} aria-valuemin="0" aria-valuemax="100" style={{width: this.state.meter_progress}}>
      ${stock.close}
    </div></div>

    </div>


    )}
}
export default TableRow;
