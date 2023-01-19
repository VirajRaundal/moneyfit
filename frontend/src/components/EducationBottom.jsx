import React, { useEffect, useState } from "react";
import Loader from "../lib/loader";
import "../styles/components/EducationBottom.css";
import ArticleCard from "./ArticleCard";
import { motion } from "framer-motion";

function EducationBottom() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(
      "https://gullak-backend.onrender.com/article-publish"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoad(false);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.25 }}
      >
        Article
      </motion.h2>

      {load ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.25 }}
          className="edu-grid"
        >
          {data.map((indData) => (
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
