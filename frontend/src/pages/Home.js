import React from 'react'
import HomeTop from "../components/HomeTop";
import HomeMid from "../components/HomeMid";
import "../styles/pages/Home.css";
const Home = () => {
  return (
    <div className='landing-page'>
        <div className='landing-center'>
            <div>
                <HomeTop />
                <HomeMid />
            </div>
        </div>
    </div>
  )
}

export default Home