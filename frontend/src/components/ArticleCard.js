import React from "react";
import "../styles/components/ArticleCard.css";

function ArticleCard(props) {
  return (
    <div
      className="edu-card"
      style={{ borderColor: `${props.color}` }}
      onClick={() => window.open(props.link)}
    >
      <h2 className="edu-card-title">{props.title}</h2>
      <p className="edu-card-info">{props.info}</p>
    </div>
  );
}

export default ArticleCard;
