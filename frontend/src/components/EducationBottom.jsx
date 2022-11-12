import React, { useEffect, useState } from "react";
import Loader from "../lib/loader";
import "../styles/components/EducationBottom.css";
import ArticleCard from "./ArticleCard";
function EducationBottom() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://gullak-hackophilia.herokuapp.com/article-publish")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoad(false);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>Article</h2>

      {load ? (
        <Loader />
      ) : (
        <div className="edu-grid">
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
        </div>
      )}
    </div>
  );
}

export default EducationBottom;
