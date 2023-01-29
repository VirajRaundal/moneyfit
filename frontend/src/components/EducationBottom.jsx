import React, { useContext } from "react";
import Loader from "../lib/loader";
import "../styles/components/EducationBottom.css";
import ArticleCard from "./ArticleCard";
import { motion } from "framer-motion";
import { ApiData } from "../App";

function EducationBottom() {

  const { articleData, articleLoad } = useContext(ApiData);

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.25 }}
      >
        Article
      </motion.h2>

      {articleLoad ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.25 }}
          className="edu-grid"
        >
          {articleData.map((indData) => (
            <>
              <ArticleCard
                title={indData.heading}
                info={indData.description}
                link={indData.link}
                color={indData.color}
              />
            </>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default EducationBottom;
