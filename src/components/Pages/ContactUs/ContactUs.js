import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="container">
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you.Please fill out the form below or react out
          to us using the contact details provided
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="name">Message:</label>
            <textarea
              type="text"
              rows="5"
              required
              id="message"
              name="message"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
