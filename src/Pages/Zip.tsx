import React from "react";
import { motion } from "framer-motion";
import { Variants } from "../Variants";
import { pageTransitions } from "../Transitions";

function Zip() {
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={Variants}
      transition={pageTransitions}
    >
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
      <div>Zip Page</div>
    </motion.div>
  );
}

export { Zip };
