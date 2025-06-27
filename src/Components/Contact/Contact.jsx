import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../public/theme_pattern.svg'
import mail_icon from '../../public/mail_icon.svg'
import location_icon from '../../public/location_icon.svg'
import call_icon from "../../public/call_icon.svg";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d884a21-823b-47ab-9511-3082e540bac9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
return (
  <div className="contact" id='contact'>
    <div className="contact-title">
      <h1>Get in Touch</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="contact-section">
      <div className="contact-left">
        <h1>Lets talk</h1>
        <p>
          I'm currently available to take on new projects, so feel free to hire
          me
        </p>
        <div className="contact-details">
          <div className="contact-detail">
<img src={mail_icon} alt="" /><p>matthewsheldon34@gmail.com</p>
          </div>
          <div className="contact-detail">
<img src={call_icon} alt="" /><p>+256744174130</p>
          </div>
          <div className="contact-detail">
<img src={location_icon} alt="" /> <p>Kampala,Uganda</p>
          </div>
        </div>
      </div>
      <form action="" className='contact-right' onSubmit={onSubmit}>
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your email' name='email' />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
        <button className='contact-submit' type='submit'>Submit now</button>
        <span className="contact-result">{result}</span>
      </form>
    </div>
  </div>
);
}

export default Contact