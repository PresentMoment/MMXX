import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./App.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Exhibitions from "./Exhibitions";

function App() {
  return (
    <div>
      <Router>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="/">MMXX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link href="/contact" as={Link} to="/contact">
                Contact
              </Nav.Link>
              <NavDropdown title="Exhibitions" id="basic-nav-dropdown">
                <NavDropdown.Item href="/exhibition1">
                  Exhibition 1
                </NavDropdown.Item>
                <NavDropdown.Item href="/exhibition2">
                  Exhibition 2
                </NavDropdown.Item>
                <NavDropdown.Item href="/exhibition3">
                  Exhibition 3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/exhibition1">
            <Exhibitions title={"Exhibition 1"} />
          </Route>
          <Route path="/exhibition2">
            <Exhibitions title={"Exhibition 2"} />
          </Route>
          <Route path="/exhibition3">
            <Exhibitions title={"Exhibition 3"} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
