import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Sending...');

    // We map your React state variables to the EmailJS template variables
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    // Your actual EmailJS IDs are plugged in here
    emailjs.send(
      'service_mi2kb6p', 
      'template_9d5l5am', 
      templateParams, 
      'F454m4zofAMIDLrgH'
    )
    .then((response) => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clears the form on success
    })
    .catch((error) => {
      setStatus('Failed to send message. Please try again.');
      console.log('FAILED...', error);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        
        {/* Left Side: Text and Contact Info */}
        <div className="contact-copy">
          <h1 className="section-title"><h1>Contact</h1></h1>
          <h2>Let’s connect and build something great together.</h2>
          <p>
            Send a message, ask for a quote, or share your next idea. I’ll get back to you quickly to discuss your project and next steps.
          </p>
          <div className="contact-info card">
            <p>Email</p>
            <a href="mailto:adhithyajayawardhana2002@gmail.com">adhithyajayawardhana2002@gmail.com</a>
            <p>Location</p>
            <span>Kelaniya,Sri Lanka</span>
          </div>
        </div>

        {/* Right Side: The Form */}
        <form className="contact-form card" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>
          <button className="btn-primary" type="submit">Send Message</button>
          
          {/* Displays "Sending...", "Success!", or "Failed" */}
          {status && <p className="status-text">{status}</p>}
        </form>

      </div>
    </section>
  );
}

export default Contact;