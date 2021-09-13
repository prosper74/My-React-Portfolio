import React, { useState } from "react";
import "./contact.scss";
import { UilMessage } from "@iconscout/react-unicons";
import { data } from "./data";
import emailjs from "emailjs-com";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

function Contact({ themeIcon }) {
  // The content of the button element
  const buttonContent = (
    <React.Fragment>
      Submit Message <UilMessage size="18" className="messageIcon" />
    </React.Fragment>
  );

  // This state handles the form submit status
  const [loading, setLoading] = useState(false);

  // This state handles the material UI <Snackbar> Component. Display success or failure of the submitted form
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroungColor: "",
  });

  // Emailjs function. To send the form to my email
  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    // Set your emailjs service id, template id and app id here
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setAlert({
            open: true,
            message: "Message sent successfully",
            backgroungColor: "#4BB543",
          });
        },
        (error) => {
          console.log(error.text);
          setAlert({
            open: true,
            message: "Something Went Wrong",
            backgroungColor: "#FF0000",
          });
        }
      );
    e.target.reset();
  }

  return (
    <section className="contact section" id="contact">
      <h2
        className={themeIcon ? "sectionTitle sectionTitleDark" : "sectionTitle"}
      >
        Get in touch
      </h2>
      <span className="sectionSubtitle">I will be glad to hear from you</span>

      {/* Display the Snackbar component if the form is successful or if there was an error  */}
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroungColor } }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={6000}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      {/* loops through all the conact details in data.js file and display them here  */}
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

        {/* Contact form. The sendEmail function is from Emailjs. */}
        <form onSubmit={sendEmail} className="contactForm grid">
          <div className="contactInputs grid">
            <div
              className={themeIcon ? "contactContentDark" : "contactContent"}
            >
              <label htmlFor="name" className="contactLabel">
                Name
              </label>
              <input type="text" id="name" name="name" required />
            </div>

            <div
              className={themeIcon ? "contactContentDark" : "contactContent"}
            >
              <label htmlFor="email" className="contactLabel">
                Email
              </label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className={themeIcon ? "contactContentDark" : "contactContent"}>
            <label htmlFor="project" className="contactLabel">
              Subject
            </label>
            <input type="text" id="project" name="subject" required />
          </div>

          <div className={themeIcon ? "contactContentDark" : "contactContent"}>
            <label htmlFor="message" className="contactLabel">
              Message
            </label>
            <textarea name="message" id="message" cols="0" rows="7" required />
          </div>

          <button type="submit">
            {loading ? (
              <CircularProgress color="#fff" size={25} />
            ) : (
              buttonContent
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
