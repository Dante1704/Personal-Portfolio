import React from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm("service_wi35ken","template_25i093g",e.target,"orQH8RSYIHTN8myvp")
    .then((result) => {
          alert("Message successfully sent");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form onSubmit={handleSendMessage} className='bg-slate-100 max-w-[616px] flex flex-col gap-10 p-16 rounded-lg'>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span>Name :</span>
          <input type="text" placeholder="your name" name='from_name' className="input input-bordered" required />
        </label>
      </div>
     <div className="form-control">
        <label className="input-group input-group-vertical">
          <span>Email :</span>
          <input type="email" placeholder="info@site.com" name="from_email" className="input input-bordered" required/>
        </label>
      </div>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span>Message :</span>
          <textarea type="textarea" placeholder="Hi Dante..." name="message" className="input input-bordered" required/>
        </label>
      </div>
      <button type='submit' className="btn">Send Message</button>
    </form>
  )
}

export default ContactForm