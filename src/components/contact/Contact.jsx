import React, {useRef} from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import './contact.css'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r4dh3op', 'template_wffgl1t', form.current, 'PomDdr2COtUTJHbPQ')

    e.target.reset()
  };





  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="container__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>justinjohn070400@gmail.com</h5>
          <a href="mailto:justinjohn070400@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
          <h4>Facebook Messenger</h4>
          <h5>Justin John</h5>
          <a href="https://m.me/ultraj7400/" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* End of Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name Please' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export {Contact}