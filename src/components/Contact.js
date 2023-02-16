import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col gap-10 max-w-2xl mx-auto px-2 pb-20'>
      <h2 className='header-contact text-5xl font-bold font-poppins text-center w-max subpixel-antialiased mx-auto p-2 pt-36'>Contact</h2>
      <h3 className='text-2xl font-bold mb-5 text-white mt-32'>Let's get in touch!</h3>
       <div className="mt-20 mb-10 px-3 flex justify-center gap-6 ">
          <a href='mailto:dante.nkaddarian@gmail.com'>
              <button className="btn bg-slate-100 text-black">email me</button>
          </a>
         <a href="https://www.linkedin.com/in/dante-nicolas-kaddarian-39696a131/" target="_blank" rel='noreferrer'><button className="btn bg-slate-100 text-black">MESSAGE ME ON LINKEDIN</button></a> 
      </div>
      <p className='text-center text-slate-100 mb-20'>Also, you can reach me out directly by filling out the form underneath.</p>
      <ContactForm/>
    </section>
  )
}

export default Contact