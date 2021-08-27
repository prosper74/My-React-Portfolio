import React, { useState } from "react";
import "./contact.scss";
import { UilMessage } from "@iconscout/react-unicons";
import { data } from "./data";
import { useForm, ValidationError } from "@formspree/react";

function Contact({ themeIcon }) {
  // Initialize Formspree (A third party app for sending emails), set your formspree endpoint inside the useForm()
  const [state, handleSubmit] = useForm("xnqloeyg");

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
            <div
              className={themeIcon ? "contactContentDark" : "contactContent"}
            >
              <label htmlFor="name" className="contactLabel">
                Name
              </label>
              <input type="text" id="name" name="name" required />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div
              className={themeIcon ? "contactContentDark" : "contactContent"}
            >
              <label htmlFor="email" className="contactLabel">
                Email
              </label>
              <input type="email" id="email" name="email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className={themeIcon ? "contactContentDark" : "contactContent"}>
            <label htmlFor="project" className="contactLabel">
              Subject
            </label>
            <input type="text" id="project" name="subject" required />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>
          <div className={themeIcon ? "contactContentDark" : "contactContent"}>
            <label htmlFor="message" className="contactLabel">
              Message
            </label>
            <textarea name="message" id="message" cols="0" rows="7" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting}>
            Submit Message <UilMessage size="18" className="messageIcon" />
          </button>

          {state.succeeded && <p>Thanks for your meesage!</p>}
          {state.succeeded &&
            setTimeout(() => {
              location.reload();
            }, 1500)}
        </form>
      </div>
    </section>
  );
}

export default Contact;
