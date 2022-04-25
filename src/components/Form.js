import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../css/Form.css"

export default function Form(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
        emailjs.sendForm('gastonodetti', 'template_mn9jeap', form.current, '08FvlSelA1uwFoZD4')
      .then((result) => {
          console.log(result.text);
          
          alert("Email enviado con éxito!")
          let loadingScreen = document.getElementById
      }, (error) => {
          console.log(error.text);
          alert("Algo salió mal, por favor contáctame al email gastonodetti@gmail.com")
      });

    
  };

  return (
    <div className="popup-box">
    <span className="close-icon" onClick={props.handleClose}>x</span>
      
    <form ref={form} onSubmit={sendEmail} className="box">
      <h4>Por favor, completa el formulario y me pondré en contacto lo antes posible</h4>
      <input type="text" name="name" placeholder='Tu nombre'/>
      <input type="text" name="phone" placeholder='Tu teléfono'/>
      <input type="email" name="email" placeholder='Tu email'/>
      <textarea id="description" name="message" placeholder='Déjame aquí tu mensaje'/>
      <input id="submit" type="submit" value="Send" />
      <p className="label--contact">Si prefieres, contáctame en: </p>
      <p className="form--contact">gastonodetti@gmail.com |  + 54 9 351 7738898</p>
    </form>
    </div>
  );
};