import React,{useState, useRef, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


const ContactForm = () => {
  
   const nameRef = useRef();

   const [input, setInput] = useState({
    from_name:"",
    from_email:"",
    message:"",
   });

   //cuando se monta el componente ya aparece listo el cursor sobre el primer input de name para empezar a escribir. 
   useEffect(()=>{
    nameRef.current.select()
   },[])

  const handleValue = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setInput({
      ...input, [property]:value
    })
  } 

  const clickCleanHandler = () => {
    setInput({
      name:"",
      email:"",
      message:"",
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_wi35ken","template_25i093g",e.target,"orQH8RSYIHTN8myvp")
    .then(
      (result) => {
          swal({
          title: "Message Sent",
          text: "I will write you back as soon as possible. Thank you.",
          icon: "success",
          });
          console.log(result.text);
          clickCleanHandler()
      },
      (error) => {
        swal({
          title: "Ups, something went wrong.",
          text: "Please, write me to work.dantekaddarian@gmail.com",
          icon: "error",
          });
        console.log(error.text);
      }
    );
    
  }


  return (
    <form onSubmit={handleSendMessage} className='bg-slate-100 max-w-[616px] flex flex-col gap-10 p-16 rounded-lg'>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span>Name :</span>
          <input type="text" placeholder="your name" name='from_name' className="input input-bordered" value={input.name} onChange={handleValue} ref={nameRef} required />
        </label>
      </div>
     <div className="form-control">
        <label className="input-group input-group-vertical">
          <span>Email :</span>
          <input type="email" placeholder="info@site.com" name="from_email" className="input input-bordered" value={input.email} onChange={handleValue} required/>
        </label>
      </div>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span>Message :</span>
          <textarea type="textarea" placeholder="Hi Dante..." name="message" className="input input-bordered" value={input.message} onChange={handleValue} required/>
        </label>
      </div>
      <button type='submit' className="btn">Send Message</button>
    </form>
  )
}

export default ContactForm