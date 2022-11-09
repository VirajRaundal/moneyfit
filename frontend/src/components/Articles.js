import React from 'react'
import "./Articles.css";
function Articles(props) {
  return (
    <div>
        <h2 className='edu-card-title'>{props.title}</h2>
        <h3 className='edu-card-chapters'>{props.chapters}</h3>
        <p className='edu-card-info'>{props.info}</p>


    </div>
  )
}

export default Articles