import React from "react";
import "./footer.scss";
import { UilLinkedin, UilGithub } from "@iconscout/react-unicons";

function Footer() {
  return (
    <section className="footer section container">
      <div> &copy; 2021. How time flies </div>
      <div>
        <UilGithub size="18" className="githubIcon" />{" "}
        <UilLinkedin size="18" className="linkedinIcon" />{" "}
      </div>
    </section>
  );
}

export default Footer;
