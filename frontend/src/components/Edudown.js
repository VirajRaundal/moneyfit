import React from 'react'
import "./Edudown.css"
import Articles from "./Articles"
function Edudown() {
  return (
    <div>
        <h2>Article</h2>

        <div className='edu-grid'>
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
        </div>
    </div>
  )
}

export default Edudown