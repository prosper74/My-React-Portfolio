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
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="home__social__icon"
              >
                <UitGithubAlt />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="home__social__icon"
              >
                <UitLinkedinAlt />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="home__social__icon"
              >
                <UitTwitterAlt />
              </a>
            </div>

            <div className="home__img">
              <img src="assets/blob_img.svg" alt="" className="home__blob" />
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
              <a href="#contact" className="button button__flex">
                <div className="myButton">
                  Contact Me
                  <UilMessage size="20" className="contactIcon" />
                </div>
              </a>
            </div>
          </div>

          <div className="home__scroll">
            <a href="#about" className="home__scrol__button button__flex">
              <UitArrowCircleDown size="40" className="home__scroll__arrow" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
