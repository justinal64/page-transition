import React from "react";
import { motion } from "framer-motion";
import { Variants } from "../Variants";
import { pageTransitions } from "../Transitions";

function Location() {
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={Variants}
      transition={pageTransitions}
    >
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
      <div>Location Page</div>
    </motion.div>
  );
}

export { Location };
