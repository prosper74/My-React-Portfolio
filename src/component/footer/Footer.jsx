import React from "react";
import "./footer.scss";
import { UilLinkedin, UilGithub } from "@iconscout/react-unicons";

function Footer() {
  const n = 128;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <p>
            &copy; {new Date().getFullYear()}.{" "}
            <span>Learning in Progress.</span>
          </p>
          <div>
            <a href="https://github.com/prosper74" alt="github" target="_blank">
              <UilGithub size="30" className="githubIcon" />
            </a>
            <a
              href="https://github.com/prosper74"
              alt="linkedin"
              target="_blank"
            >
              <UilLinkedin size="30" className="linkedinIcon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
