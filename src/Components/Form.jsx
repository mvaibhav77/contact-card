import Header from "./Header"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_NO, process.env.REACT_APP_EMAIL_TEMPLATE_NO, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="about card mt-4 p-1 pt-0" id='enquiry'>
      <div className="card-body">
        <Header text={'ENQUIRY FORM'} />
        <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
            <label htmlFor="user_name" className="form-label">Full Name</label>
            <input type="text" className="form-control" name="user_name" required />
          </div>
          <div className="row">
            <div className="mb-3 col">
              <label htmlFor="user_email" className="form-label">Email address</label>
              <input type="email" className="form-control" name="user_email" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3 col">
              <label htmlFor="user_phone" className="form-label">Phone</label>
              <input type="tel" pattern="[0-9]{10}" className="form-control" name="user_phone" required/>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" aria-label="With textarea" name="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Form