import React from "react";
import { motion } from "framer-motion";
import { Variants } from "../Variants";
import { pageTransitions } from "../Transitions";

interface Props {
  handleSetStep: Function;
}

function PageTwo(props: Props) {
  const { handleSetStep } = props;
  return (
    <motion.div
      key={1}
      exit="out"
      animate="in"
      initial="initial"
      variants={Variants}
      transition={pageTransitions}
    >
      Page Two<button onClick={() => handleSetStep("pageOne")}>Click Me</button>
    </motion.div>
  );
}

export { PageTwo };
