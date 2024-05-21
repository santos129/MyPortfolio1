
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { toast } from 'react-toastify';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k20i5gv', 'template_dvma9dz', form.current, 'en7gjO6F4S2cTtli7')
      .then((result) => {
          console.log(result.text);
          toast.success("Messege Sent Successfully")
      }, (error) => {
          console.log(error.text);
          toast.error("Messege send failed")
      });
  };
  

  return (
   
      
      <div className="container">
      <div className="row">
        <h6>
          <span class="abc">Get in touch</span>
      <a href="https://www.linkedin.com/in/santosh-nepali-71aa2119b/" target="_blank" rel="noopener noreferrer">
      <BsLinkedin color="blue" size={30} className="ms-2" />
    </a>
    <a href="https://github.com/santos129" target="_blank" rel="noopener noreferrer">
    <div className="icongit">
      <BsGithub color="blue" size={30} className="ms-2" />
      </div>
    </a>
    <a href="https://www.facebook.com/profile.php?id=100027870444195" target="_blank" rel="noopener noreferrer">
      <BsFacebook color="blue" size={30} className="ms-2" />
    </a>
    </h6>
                    </div>
    <div className="contactform" id="contact">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="messege" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
  
  );
};
export default Contact;
