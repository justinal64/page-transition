import React from "react";
import "./App.scss";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Identity } from "./Pages/Identity";
import { Zip } from "./Pages/Zip";
import { Location } from "./Pages/Location";
import { AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const App: React.FC = () => {
  const location = useLocation();
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Identity</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
        <li>
          <Link to="/zip">Zip</Link>
        </li>
      </ul>

      <hr />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Identity />
          </Route>
          <Route path="/location">
            <Location />
          </Route>
          <Route path="/zip">
            <Zip />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
