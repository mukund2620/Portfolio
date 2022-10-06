import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import { useRef as UseRef } from "react";
import emailjs from '@emailjs/browser'

const contact = () => {
  
  const form = UseRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_ljikat7', 'template_a6aceld', form.current, 'r-t12Wlb9GC_2eC5S')
   
    e.target.reset()
  };

  return (
    <section id="contact">

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
        <div className="container contact__container">

          <div className="contact__options">
            <article className='contact__option'>
              <HiOutlineMail className='contact__option_icon'/>
              <h4>Email</h4>
              <h5 className='text-light'>mukundrajirkal@gmail.com</h5>
              <a href="mailto:mukundrajirkal@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <FaFacebookMessenger className='contact__option_icon'/>
              <h4>Messanger</h4>
              <h5 className='text-light'>Mukundraj Irkal</h5>
              <a href="https://m.me/profile.php?id=100014268489981" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <ImWhatsapp className='contact__option_icon'/>
              <h4>WhatsApp</h4>
              <h5 className='text-light'>+91 861-876-6009</h5>
              <a href="https://api.whatsapp.com/send?phone=8618766009" target="_blank">Send a message</a>
            </article>


          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name"  placeholder='Your Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message"  rows="10" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>

        </div>

    </section>
  )
}

export default contact
