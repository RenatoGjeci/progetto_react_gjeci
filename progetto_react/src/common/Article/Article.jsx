import React from 'react'
import './Article.css'

function Article ({image, name, price}) {
  return (
    <div className="menuItem">
    <div style={{ backgroundImage: `url(${image})` }}></div>
    <h1> {name} </h1>
    <p> $ {price} </p>
    <button className='bottone'>ACQUISTA</button>
    </div>

  );
}

export default Article