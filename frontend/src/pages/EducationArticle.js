import React, { useState } from 'react'

const EducationArticle = () => {

  const [data, setData] = useState({
    heading: "",
    description: "",
    link: "",
    color: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/article-publish", {
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
      color: ""
    });
    window.alert("Submitted article")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Heading of the article"
          onChange={handleChange}
          name="heading"
          value={data.heading}
        />
        <input
          type="text"
          placeholder="Description of the article"
          onChange={handleChange}
          name="description"
          value={data.description}
        />
        <input
          type="text"
          placeholder="Link of the article"
          onChange={handleChange}
          name="link"
          value={data.link}
        />
        <input
          type="text"
          placeholder="Color of the card"
          onChange={handleChange}
          name="color"
          value={data.color}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EducationArticle