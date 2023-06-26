import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div class="contact-section">
      <div class="container">
        <h2>Contactez-nous</h2>
        <p>N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous :</p>

        <form id="contact-form">
          <div class="form-group">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message :</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contact
