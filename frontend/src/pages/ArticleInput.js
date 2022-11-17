import React, { useState } from "react";

const ArticleInput = () => {
  
  const [data, setData] = useState({
    heading: "",
    description: "",
    link: "",
    color: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://gullak-hackophilia.herokuapp.com/article-publish", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setData({
      heading: "",
      description: "",
      link: "",
      color: "",
    });
    window.alert("Submitted article");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          gap: 10,
        }}
      >
        <input
          type="text"
          placeholder="Heading of the article"
          onChange={handleChange}
          name="heading"
          value={data.heading}
          style={{ fontSize: "18px", padding: 5 }}
        />
        {/* <input
          type="text"
          placeholder="Description of the article"
          onChange={handleChange}
          name="description"
          value={data.description}
        /> */}
        <textarea
          name="description"
          value={data.description}
          onChange={handleChange}
          placeholder="Description"
          style={{ fontSize: "18px", padding: 5 }}
        />
        <input
          type="text"
          placeholder="Link of the article"
          onChange={handleChange}
          name="link"
          value={data.link}
          style={{ fontSize: "18px", padding: 5 }}
        />
        <input
          type="text"
          placeholder="Color of the card"
          onChange={handleChange}
          name="color"
          value={data.color}
          style={{ fontSize: "18px", padding: 5 }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ArticleInput;
