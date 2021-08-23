import React from "react";
import "./footer.scss";
import { UilLinkedin, UilGithub } from "@iconscout/react-unicons";

function Footer() {
  const n = 128;
  return (
    <footer className="footer section container">
      <div> &copy; 2021. Learning in Progress </div>
      <div>
        <UilGithub size="18" className="githubIcon" />{" "}
        <UilLinkedin size="18" className="linkedinIcon" />{" "}
      </div>
    </footer>
  );
}

export default Footer;
