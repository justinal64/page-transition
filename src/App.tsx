import React, { useState } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Identity } from "./Pages/Identity";
import { Zip } from "./Pages/Zip";
import { Location } from "./Pages/Location";
import { AnimatePresence, motion } from "framer-motion";
import "./App.scss";
import { PageOne } from "./Components/PageOne";
import { PageTwo } from "./Components/PageTwo";
import { Variants } from "./Variants";
import { pageTransitions } from "./Transitions";

function App() {
  const [step, setStep] = useState("pageOne");

  function updateStep(step: string) {
    setStep(step);
  }

  const location = useLocation();
  return (
    <div className="App">
      <ul style={{ listStyle: "none" }}>
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

      <h1>Animation based on route change</h1>
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

      <hr />
      <h1>Animation based on mounting/unmounting a Component</h1>
      <AnimatePresence exitBeforeEnter>
        {step === "pageOne" && (
          <motion.div
            key="pageOne"
            exit="out"
            animate="in"
            initial="initial"
            variants={Variants}
            transition={pageTransitions}
          >
            <PageOne handleSetStep={updateStep} />
          </motion.div>
        )}
        {step === "pageTwo" && (
          <motion.div
            key="pageTwo"
            exit="out"
            animate="in"
            initial="initial"
            variants={Variants}
            transition={pageTransitions}
          >
            <PageTwo handleSetStep={updateStep} />
          </motion.div>
        )}
      </AnimatePresence>
      <hr />
    </div>
  );
}

export default App;
