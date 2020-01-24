import React from "react";
import "./App.scss";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Identity } from "./Pages/Identity";
import { Zip } from "./Pages/Zip";
import { Location } from "./Pages/Location";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const App: React.FC = () => {
  const location = useLocation();
  return (
    <div className="App">
      <motion.div initial="hidden" animate="visible" variants={variants}>
        Test
      </motion.div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Identity />
          </Route>
          <Route path="/about">
            <Location />
          </Route>
          <Route path="/dashboard">
            <Zip />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
