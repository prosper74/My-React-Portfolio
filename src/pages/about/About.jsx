import React, { useState } from "react";
import "./about.scss";
import { UilAngleUp } from "@iconscout/react-unicons";
import { UisDownloadAlt } from "@iconscout/react-unicons-solid";

function About({ themeIcon }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="about section" id="about">
      <h2
        className={themeIcon ? "sectionTitle sectionTitleDark" : "sectionTitle"}
      >
        About Me
      </h2>
      <span className="sectionSubtitle">My Introduction</span>

      <div className="aboutContainer container grid">
        <div className="aboutDescription">
          <p>
            I am Prosper Atu. A WordPress Developer, Graphics Designer and
            Frontend Developer. I have good eye for design and I recieve lots of
            great recommendations and reviews.
          </p>
          <br />
          <p>
            I have over four (4) years experience as a Developer/Designer,
            building solutions for clients.
          </p>
          <br />
          <p>
            I strive to follow best practices and use industry-standard tools,
            including Git-Flow, Test Driven Development, Continous Integration
            (Github Action), Linting (ESLint), Code Formatting (Prettier),
            Package Management (NPM) and Build Tool (Webpack).
          </p>
        </div>

        <div className="aboutInfo">
          <div className="aboutInfoCount">
            <div>
              <span
                className={
                  themeIcon
                    ? "aboutInfoTitle aboutInfoTitleDark"
                    : "aboutInfoTitle"
                }
              >
                04+
              </span>
              <span className="aboutInfoName">
                Years <br />
                Experience
              </span>
            </div>
            <div>
              <span
                className={
                  themeIcon
                    ? "aboutInfoTitle aboutInfoTitleDark"
                    : "aboutInfoTitle"
                }
              >
                15+
              </span>
              <span className="aboutInfoName">
                Completed <br />
                Projects
              </span>
            </div>
            <div>
              <span
                className={
                  themeIcon
                    ? "aboutInfoTitle aboutInfoTitleDark"
                    : "aboutInfoTitle"
                }
              >
                03+
              </span>
              <span className="aboutInfoName">
                Companies <br />
                Worked
              </span>
            </div>
            <a href="assets/cv/resume.pdf" target="_blank" className="button">
              <div className="aboutButton">
                Download Resume
                <UisDownloadAlt size="20" className="downloadIcon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
