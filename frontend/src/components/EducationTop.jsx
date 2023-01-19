import React from "react";
import "../styles/components/EducationTop.css";
import eduTop from "../assets/EducationImage.jpg";
import {motion} from "framer-motion"

function EducationTop() {
  return (
    <div className="edu-head">
      <div className="edu-para">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.25 }}
        >
          Free and open stock market and financial education
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.25 }}
        >
          An extensive and in-depth collection of stock market and financial
          lessons. It is openly accessible to everyone.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.25 }}
        className="edu-img"
      >
        <img src={eduTop} alt="eduphoto" />
      </motion.div>
    </div>
  );
}

export default EducationTop;
