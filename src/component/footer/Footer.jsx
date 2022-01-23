import React from "react";
import "./footer.scss";
import { UilLinkedin, UilGithub } from "@iconscout/react-unicons";

function Footer() {
  const n = 128;
  return (
    <footer className="footer section container">
      <div> &copy; 2021. Learning in Progress </div>
      <div>
        <a href="https://github.com/prosper74" alt="github" target="_blank">
          <UilGithub size="18" className="githubIcon" />
        </a>
        <a href="https://github.com/prosper74" alt="linkedin" target="_blank">
          <UilLinkedin size="18" className="linkedinIcon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
