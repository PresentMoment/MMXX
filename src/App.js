import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./Home";
import Contact from "./Contact";
import Exhibitions from "./Exhibitions";

function App() {
  return (
    <div>
      <Router basename="MMXX">
        <div className="navigation">
          <Link href="/" to="/">
            MMXX
          </Link>
          <span className="navSpacer" />
          <Link href="/contact" to="/contact">
            Contact
          </Link>
        </div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/zuccheri">
            <Exhibitions title={"Luigi Zuccheri 25.06 - 30.09.2020"} />
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
