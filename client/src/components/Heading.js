import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
function Heading(props){
  return(
    <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
  )
}

export default Heading;