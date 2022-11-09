import React from 'react'
import Edutop from "../components/Edutop.js"
import "./Edu.css"
import Edudown from "../components/Edudown.js"
function Edu() {
  return (
    <div className='edu-page'>
        <div className='edu-centre'>
            <div>
                <Edutop />
                <Edudown />
            </div>
        </div>
    </div>
  )
}

export default Edu