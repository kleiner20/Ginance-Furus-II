import React from "react";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
import CoSymForm from "./CoSymForm";

function Jumbotron(props){
  return(
    <div>
    <Jumbotron fluid>

      <h1>Ginance Furus</h1>
      <p>
        View and monitor my investments
      </p>
  </Jumbotron>
  <CoSymForm/>
  </div>
    )
}

export default Jumbotron;