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

        <span className="aboutDescription">
          <p>
            I am Prosper Atu. A smart-working Software Engineer with a flair for
            creating elegant and quality solutions in the possible least amount
            of time. I specialize in full-stack web development using
            JavaScript. I can plan and design a good Software Architecture,
            choosing the best Pattern(s).
          </p>
          <br />
          {readMore && (
            <div className="more">
              <p>
                Aside coding, I also have basic knowledge of Project Management
                (Agile, Waterfall), DevOps (Docker, Terraform, Ansible), Cloud
                Services(AWS) and End-to-End Testing (Cypress). This is to
                enable me understand the processes involved in building a
                product from just an idea to a usable application.
              </p>
              <br />
              <p>
                I strive to follow best practices and use industry-standard
                tools, including Git-Flow, Test Driven Development, Continous
                Integration (Github Action), Linting (ESLint), Code Formatting
                (Prettier), Package Management (NPM) and Build Tool (Webpack).
              </p>
            </div>
          )}
          <span className="readMore" onClick={() => setReadMore(!readMore)}>
            {readMore ? <UilAngleUp /> : "Read More..."}
          </span>
        </span>

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
                10+
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
          </div>

          <a href="assets/cv/resume.pdf" className="button">
            <div className="aboutButton">
              Download Resume
              <UisDownloadAlt size="20" className="downloadIcon" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
