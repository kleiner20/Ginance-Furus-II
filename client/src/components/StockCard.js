import React from "react";
import {Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

class StockCard extends React.Component{

    state= {

    }

    componentDidMount(){
        let status = (this.props.close - this.props.low)/(this.props.high -this.props.low);
        console.log(status)
        if (status < 0.50) {
          let meter_color = " progress-bar-danger"
          let size = (status * 100).toString() + "%"
          this.setState({
              meter_progress: size,
              meter_value: (status * 100),
              meter_color: meter_color
        })
          
        }
        if (status > 0.50 && status < .75){
          let meter_color =  "progress-bar-warning"
          let size = (status * 100).toString() + "%"
          this.setState({
            meter_progress: size,
            meter_value: (status * 100),
            meter_color: meter_color
      })
        }
        if (status  > 0.75){
          let meter_color = "progress-bar-success"
          let size = (status * 100).toString() + "%"
          this.setState({
            meter_progress: size,
            meter_value: (status * 100),
            meter_color: meter_color
      })
        }
        // else{
        //   // we're adding more numbers
        //   let newEquation = equation + newLogic
        //   this.setState({equation: newEquation})
        // }
      
      };
    render(){
  return(
    <Card style={{ minWidth: '150px', margin: "10px" }}>
      <Card.Header as="h5">{this.props.name}</Card.Header>
      <Card.Body>
        <Card.Title>{this.props.ticker}</Card.Title>
        <Card.Text>
          High: {this.props.high}
          Low: {this.props.low}
          <div class="progress">
    <div class={this.state.meter_color} role="progressbar" aria-valuenow={this.state.meter_value} aria-valuemin="0" aria-valuemax="100" style={{width: this.state.meter_progress}}>
      ${this.props.close}
    </div>
    </div>
        </Card.Text>
        <Link to={"/show/" + this.props.id}>More Info</Link>
      </Card.Body>
    </Card>
    )
}
}

export default StockCard;

// function StockCard(this.props){
//     return(
//       <Card style={{ width: '18rem' }}>
//         <Card.Header as="h5">{this.props.name}</Card.Header>
//         <Card.Body>
//           <Card.Title>{this.props.ticker}</Card.Title>
//           <Card.Text>
//             High: {this.props.high}
//             Low: {this.props.low}
//           </Card.Text>
//           <Link to={"/show/" + this.props.id}>More Info</Link>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//       )
//   }
  