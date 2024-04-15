import React from 'react'
import './Home.css'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div className='home' style={{backgroundImage: "url(https://raketa.com/w/wp-content/themes/clear_theme/images/home-slides/big/RC_1920.jpg)" }}>
        <div className='container'>
            <h1>Horologium</h1>
            <p>I capolavori del cronometraggio</p>
            <Link to='/Shop'>
            <button>ACQUISTA UN ORLOGIO</button>
            </Link>
        </div>
    </div>
  )
}

export default Home