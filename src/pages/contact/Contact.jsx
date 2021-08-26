import React, { useRef, useState } from "react";
import "./contact.scss";
import { UilMessage } from "@iconscout/react-unicons";
import { data } from "./data";

function Contact({ themeIcon }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact section" id="contact">
      <h2
        className={themeIcon ? "sectionTitle sectionTitleDark" : "sectionTitle"}
      >
        Get in touch
      </h2>
      <span className="sectionSubtitle">I will be glad to hear from you</span>

      <div className="contactContainer container grid">
        <div>
          {data.map((d) => (
            <div className="contactInfo" key={d.id}>
              {d.icon}
              <div>
                <h3
                  className={
                    themeIcon ? "contactTitle sectionTitleDark" : "contactTitle"
                  }
                >
                  {d.contactTitle}
                </h3>
                <span className="contactDesc">{d.contactDesc}</span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="contactForm grid">
          <div className="contactInputs grid">
            <div className="contactContent">
              <label htmlFor="name" className="contactLabel">
                Name
              </label>
              <input type="text" id="name" />
            </div>

            <div className="contactContent">
              <label htmlFor="email" className="contactLabel">
                Email
              </label>
              <input type="email" id="email" />
            </div>            
          </div>
          <div className="contactContent">
              <label htmlFor="project" className="contactLabel">
                Subject
              </label>
              <input type="text" id="project" />
            </div>
          <div className="contactContent">
            <label htmlFor="message" className="contactLabel">
              Message
            </label>
            <textarea name="" id="message" cols="0" rows="7"></textarea>
          </div>

          <button type="submit">
            Submit Message <UilMessage size="18" className="messageIcon" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
