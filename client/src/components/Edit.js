import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.stocks
    state[e.target.name] = e.target.value;
    this.setState({stocks:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { ticker, name, close, short_description, earnings_date, high, low } = this.state.stocks;

    axios.put('/api/stocks/'+this.props.match.params.id, { ticker, name, close, short_description, earnings_date, high, low })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-name">
              EDIT stocks
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.stocks._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Portfolio</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="ticker">ticker:</label>
                <input type="text" class="form-control" name="ticker" value={this.state.stocks.ticker} onChange={this.onChange} placeholder="ticker" />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.stocks.name} onChange={this.onChange} placeholder="name" />
              </div>
              <div class="form-group">
                <label for="close">close:</label>
                <input type="text" class="form-control" name="close" value={this.state.stocks.close} onChange={this.onChange} placeholder="close" />
              </div>
              <div class="form-group">
                <label for="investors_notes">Investors Notes:</label>
                <input type="text" class="form-control" name="investors_notes" value={this.state.stocks.investors_notes} onChange={this.onChange} placeholder="investors_notes" />
              </div>
              <div class="form-group">
                <label for="short_description">Description:</label>
                <input type="text" class="form-control" name="short_description" value={this.state.stocks.short_description} onChange={this.onChange} placeholder="short_description" />
              </div>
              <div class="form-group">
                <label for="published_date">Earnings Date:</label>
                <input type="number" class="form-control" name="earnings_date" value={this.state.stocks.earnings_date} onChange={this.onChange} placeholder="Published Year" />
              </div>
              <div class="form-group">
                <label for="high">high:</label>
                <input type="text" class="form-control" name="high" value={this.state.stocks.high} onChange={this.onChange} placeholder="high" />
              </div>
              <div class="form-group">
                <label for="low">low:</label>
                <input type="text" class="form-control" name="low" value={this.state.stocks.low} onChange={this.onChange} placeholder="low" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;