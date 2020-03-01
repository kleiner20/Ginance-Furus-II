import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
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
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Ginance Furu Portfolio
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
                    <td>Low: ${stocks.low}
                        Close ${stocks.close}
                        High ${stocks.high}
                    </td>
                    <td>{stocks.investors_notes}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
