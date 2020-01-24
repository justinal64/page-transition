import React from "react";
import { motion } from "framer-motion";
import { Variants } from "../Variants";
import { pageTransitions } from "../Transitions";

function Identity() {
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={Variants}
      transition={pageTransitions}
    >
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
      <div>Identity Page</div>
    </motion.div>
  );
}

export { Identity };
