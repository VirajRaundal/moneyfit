import React from "react";
import "../styles/components/HomeTop.css";
import { motion } from "framer-motion";

const HomeTop = () => {
  return (
    <motion.div className="landing-top">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.25 }}
        className="landing-top-text"
      >
        <p>
          Beware of little{" "}
          <b style={{ textTransform: "uppercase" }}>expenses</b>, a small leak
          will sink a great ship.
        </p>
        <p
          style={{
            fontSize: 24,
            fontStyle: "italic",
            textAlign: "right",
            marginTop: 20,
          }}
        >
          ~Benjamin Franklin
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.25 }}
        className="landing-top-image"
      ></motion.div>
    </motion.div>
  );
};

export default HomeTop;
