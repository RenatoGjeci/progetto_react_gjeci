import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact">
      <div
        className="contactImage"
        style={{ backgroundImage: `url(https://i.pinimg.com/originals/55/fd/07/55fd070326ecbc4ff3da4d86ee7bc218.jpg)` }}> 
      </div>
      <div className="contactText">
        <form id="contact-form" method="POST">
          <label htmlFor="name">Nome e Cognome</label>
          <input name="name" placeholder="" type="text" />
          <label htmlFor="email">Indirizzo Email</label>
          <input name="email" placeholder="" type="email" />
          <label htmlFor="telefono">Telefono</label>
          <input name="telefono" placeholder="" type="text" />
          <label htmlFor="messaggio">Messaggio</label>
          <textarea
            rows="6"
            placeholder=""
            name="messaggio"
            required
          ></textarea>
          <button type="submit"> Invia messaggio</button>
        </form>
      </div>
    </div>
  )
}

export default Contact