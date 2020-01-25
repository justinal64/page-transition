import React from "react";
import { motion } from "framer-motion";
import { Variants } from "../Variants";
import { pageTransitions } from "../Transitions";

interface Props {
  handleSetStep: Function;
}

function PageOne(props: Props) {
  const { handleSetStep } = props;
  return (
    <div>
      Page One<button onClick={() => handleSetStep("pageTwo")}>Click Me</button>
    </div>
  );
}

export { PageOne };
