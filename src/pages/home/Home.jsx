import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./home.scss";
import {
  UitGithubAlt,
  UitLinkedinAlt,
  UitTwitterAlt,
  UitArrowCircleDown,
} from "@iconscout/react-unicons-thinline";

import { UilMessage } from "@iconscout/react-unicons";

function Home({ themeIcon }) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 2000,
      strings: [
        "Software Engineer",
        "Freelance Developer",
        "Freelance Designer",
        "Content Creator",
      ],
    });
  }, []);

  return (
    <>
      <section className="home section" id="home">
        <div className="homeContainer container grid">
          <div className="homeContent grid">
            <div className="homeSocial">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="homeSocialIcon"
              >
                <UitGithubAlt />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="homeSocialIcon"
              >
                <UitLinkedinAlt />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="homeSocialIcon"
              >
                <UitTwitterAlt />
              </a>
            </div>

            <div className="home__img">
              <img src="assets/blob_img.svg" alt="" className="homeBlob" />
            </div>

            <div className="home__data">
              <h1 className={themeIcon ? "homeTitleDark" : "homeTitle"}>
                Hi, I'm Prosper Atu
              </h1>
              <h3 className={themeIcon ? "homeSubtitle subtitleDark" : "homeSubtitle" }>
                A <span ref={textRef}></span>
              </h3>
              <p className="description">
                I have high level experience in frontend/backend development and
                content creation
              </p>
              <a href="#contact" className="button">
                <div className="myButton">
                  Contact Me
                  <UilMessage size="20" className="contactIcon" />
                </div>
              </a>
            </div>
          </div>

          <div className="homeScroll">
            <a href="#about">
              <UitArrowCircleDown size="40" className="homeScrollArrow" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
