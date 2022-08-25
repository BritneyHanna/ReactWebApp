import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form method="POST" name="contactform" className="contactForm">
        <input type="hidden" name="form-name" value="contactForm" />
        <label>Your Name</label>
        <input type="text" name="name"></input>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Details</label>
        <textarea name="message" rows="6" placeholder="Type a short message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
