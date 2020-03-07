import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: {}
    };
  }

  componentDidMount() {
    axios.get('/api/stocks/'+this.props.match.params.id)
      .then(res => {
        this.setState({ stocks: res.data });
        console.log(this.state.stocks);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/stocks/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.stocks.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Portfolio</Link></h4>
            <dl>
              <dt>Tickers:</dt>
              <dd>{this.state.stocks.ticker}</dd>
              <dt>Name:</dt>
              <dd>{this.state.stocks.name}</dd>
              <dt>Investors Notes:</dt>
              <dd>{this.state.stocks.investors_notes}</dd>
              <dt>Description:</dt>
              <dd>{this.state.stocks.short_description}</dd>
              <dt>Earnings Date:</dt>
              <dd>{this.state.stocks.earnings_date}</dd>
              <dt>Close:</dt>
              <dd>{this.state.stocks.close}</dd>
              <dt>High:</dt>
              <dd>{this.state.stocks.high}</dd>
              <dt>Low:</dt>
              <dd>{this.state.stocks.low}</dd>
            </dl>
            <Link to={`/edit/${this.state.stocks._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.stocks._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;