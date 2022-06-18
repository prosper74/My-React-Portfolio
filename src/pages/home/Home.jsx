import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./home.scss";

// these are icons from the iconscout library
import {
  UitGithubAlt,
  UitLinkedinAlt,
  UitTwitterAlt,
  UitArrowCircleDown,
} from "@iconscout/react-unicons-thinline";
import { UilMessage } from "@iconscout/react-unicons";

function Home({ themeIcon }) {
  const textRef = useRef();

  // This is where I initialize the text animation from iTyped.js library. We can set the strings we want to animate in the "strings array"
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 2000,
      strings: [
        "Frontend Developer",
        "Graphics Designer",
        "WordPress Developer",
        "Technical Writer",
      ],
    });
  }, []);

  return (
    <>
      <section className="home section" id="home">
        <div className="homeContainer container grid">
          <div className="homeContent grid">
            {/* The icons that displays at the left side of the home section */}
            <div className="homeSocial">
              <a
                href="https://github.com/prosper74"
                target="_blank"
                rel="noreferrer"
                className="homeSocialIcon"
              >
                <UitGithubAlt />
              </a>
              <a
                href="https://www.linkedin.com/in/prosper-atu/"
                target="_blank"
                rel="noreferrer"
                className="homeSocialIcon"
              >
                <UitLinkedinAlt />
              </a>
              <a
                href="https://twitter.com/prosperjohnson"
                target="_blank"
                rel="noreferrer"
                className="homeSocialIcon"
              >
                <UitTwitterAlt />
              </a>
            </div>

            {/* Here is where the main image is displaying. I used coreldraw to design the image blog. SVG can also be used  */}
            <div className="home__img">
              <img src="assets/blob_img.svg" alt="" className="homeBlob" />
            </div>

            {/* Name and introduction */}
            <div className="home__data">
              <h1 className={themeIcon ? "homeTitleDark" : "homeTitle"}>
                <span>Hi, I'm</span> <br /> Prosper Atu
              </h1>
              <h3
                className={
                  themeIcon ? "homeSubtitle subtitleDark" : "homeSubtitle"
                }
              >
                A <span ref={textRef}></span>
              </h3>
              <p className="description">
                I have over four (4) years experience as a WordPress Developer
                and Graphics Designer. I also have over two (2) year experience
                building the web using ReactJS, NextJS and GatsbyJS, and I have
                also done some backend development using ExpressJS and
                StrapiCMS. I also write about my experience as I learn and build.
              </p>
              <a
                href="https://prosper-blog.netlify.app/"
                alt="My Blog"
                target="_blank"
                className="button"
              >
                <div className="myButton">
                  Checkout My Blog
                  <UilMessage size="20" className="contactIcon" />
                </div>
              </a>
            </div>
          </div>

          {/* Scroll to next section icon */}
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
