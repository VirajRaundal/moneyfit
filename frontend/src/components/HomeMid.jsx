import React from "react";
import { motion } from "framer-motion";
import "../styles/components/HomeMid.css";

const HomeMid = () => {
  return (
    <div className="landing-middle">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.25 }}
        className="landing-middle-image"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.25 }}
        className="landing-middle-text"
      >
        <p>
          We as a group of enthusiasts have worked on a product that would help
          the college students save pocket money unconsciously.
        </p>
      </motion.div>
    </div>
  );
};

export default HomeMid;
