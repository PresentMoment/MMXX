import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./Components/Home";
import Contact from "./Components/Contact/";
import Exhibit from "./Components/Exhibit";

function App() {
  return (
    <div>
      <Router basename="/">
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
            <Exhibit
              title={"Luigi Zuccheri 25.06 - 30.09.2020"}
              artist={"zuccheri"}
            />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
