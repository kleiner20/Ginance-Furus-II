import React from "react";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
function Heading(props){
  return(
    <Navbar bg="dark" expand="lg" class="navbar">
      <Navbar.Brand href="#home">Ginance Furu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Add Stock</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Heading;