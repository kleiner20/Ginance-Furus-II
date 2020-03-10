import React from "react";
import {Card, Button} from "react-bootstrap";

function StockCard(props){
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Header as="h5">{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>{props.ticker}</Card.Title>
        <Card.Text>
          High: {props.high}
          Low: {props.low}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}

export default StockCard;