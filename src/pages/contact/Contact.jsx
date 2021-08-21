import React, { useRef, useState } from "react";
import "./contact.scss";
import { UilCalling, UilEnvelopeCheck, UilMessage } from "@iconscout/react-unicons";

function Contact() {

const handleSubmit = (e) => {
	e.preventDefault()
}

  return (
    <section className="contact section" id="contact">
      <h2 className="sectionTitle">Get in touch</h2>
      <span className="sectionSubtitle">I will be glad to hear from you</span>

      <div className="contactContainer container grid">
        <div className="contactInfo">
          <UilCalling size="40" className="phoneIcon" />

          <div>
            <h3 className="contactTitle">Call or Whatsapp</h3>
            <span className="contactDesc">+234 803 428 5512</span>
          </div>
        </div>

        <div className="contactInfo">
          <UilEnvelopeCheck size="40" className="phoneIcon" />

          <div>
            <h3 className="contactTitle">Email</h3>
            <span className="contactDesc">+234 803 428 5512</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contactForm grid">
          <div className="contactInputs grid">
            <div className="contactContent">
              <label htmlFor="name" className="contactLabel">Name</label>
							<input type="text" id="name" />
            </div>

						<div className="contactContent">
              <label htmlFor="email" className="contactLabel">Email</label>
							<input type="email" id="email" />
            </div>

						<div className="contactContent">
              <label htmlFor="project" className="contactLabel">Subject</label>
							<input type="text" id="project" />
            </div>

						<div className="contactContent">
              <label htmlFor="message" className="contactLabel">Message</label>
							<textarea name="" id="message" cols="0" rows="7"></textarea>
            </div>

						<button type="submit">Submit Message <UilMessage size="18" className="messageIcon" /></button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
