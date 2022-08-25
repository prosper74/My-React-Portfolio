import React, { useState } from "react";
import "./skills.scss";
import {
  UilBracketsCurly,
  UilServerNetworkAlt,
  UilBag,
  UilDatabase,
} from "@iconscout/react-unicons";
import { UisAngleDown } from "@iconscout/react-unicons-solid";
import { otherSkils } from "./data";

function Skills({ themeIcon }) {
  // the states of the toggle buttons
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  const [toggleFour, setToggleFour] = useState(false);

  return (
    <section className="skills section" id="skills">
      <h2
        className={themeIcon ? "sectionTitle sectionTitleDark" : "sectionTitle"}
      >
        Skills
      </h2>
      <span className="sectionSubtitle">My Technical Level</span>

      <div className="skillsContainer container grid">
        {/* Skill 1 */}
        <div
          className={
            "skillsContent " + (toggle ? " skillsClose" : "skillsOpen")
          }
        >
          <div className="skillsHeader" onClick={() => setToggle(!toggle)}>
            {/* skills 1 icon  */}
            <UilBracketsCurly size="30" className="skillsIcon" />
            <div>
              <h1
                className={
                  themeIcon ? "skillsTitle skillsTitleDark" : "skillsTitle"
                }
              >
                Frontend Development
              </h1>
              <span className="skillsSubtitle">2+ Year(s) experience</span>
            </div>
            <UisAngleDown className="skillsArrow" />
          </div>

          <div className="skillsListGrid">
            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  HTML/CSS/JavaScript
                </h3>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  SCSS, Material-UI, TailwindCSS
                </h3>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  ReactJS, GatsbyJS, NextJS
                </h3>
                {/* <div className="skillBar">
                  <span className="skillPerc skillReact"></span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Skill 2 */}
        <div
          className={
            "skillsContent " + (toggleTwo ? "skillsOpen" : "skillsClose")
          }
        >
          <div
            className="skillsHeader"
            onClick={() => setToggleTwo(!toggleTwo)}
          >
            <UilServerNetworkAlt size="30" className="skillsIcon" />
            <div>
              <h1
                className={
                  themeIcon ? "skillsTitle skillsTitleDark" : "skillsTitle"
                }
              >
                Backend Development
              </h1>
              <span className="skillsSubtitle">2+ Year(s) experience</span>
            </div>
            <UisAngleDown className="skillsArrow" />
          </div>

          <div className="skillsListGrid">
            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  NodeJs/ExpressJS
                </h3>
              </div>
              {/* <div className="skillBar">
                <span className="skillPerc skillNode"></span>
              </div> */}
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  StrapiCMS, Headless WordPress
                </h3>
              </div>
              {/* <div className="skillBar">
                <span className="skillPerc skillFirebase"></span>
              </div> */}
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  Firebase, MongoDB, PostgreSQL, MySQL
                </h3>
              </div>
              {/* <div className="skillBar">
                <span className="skillPerc skillFirebase"></span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Skill 3 */}
        <div
          className={
            "skillsContent " + (toggleThree ? "skillsOpen" : "skillsClose")
          }
        >
          <div
            className="skillsHeader"
            onClick={() => setToggleThree(!toggleThree)}
          >
            <UilDatabase size="30" className="skillsIcon" />
            <div>
              <h1
                className={
                  themeIcon ? "skillsTitle skillsTitleDark" : "skillsTitle"
                }
              >
                Web Design - WordPress
              </h1>
              <span className="skillsSubtitle">4+ Years experience</span>
            </div>
            <UisAngleDown className="skillsArrow" />
          </div>

          <div className="skillsListGrid">
            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  Elementor
                </h3>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  WP Bakery
                </h3>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  Woocommerce, e.t.c
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Skill 4 */}
        <div
          className={
            "skillsContent " + (toggleFour ? "skillsOpen" : "skillsClose")
          }
        >
          <div
            className="skillsHeader"
            onClick={() => setToggleFour(!toggleFour)}
          >
            <UilDatabase size="30" className="skillsIcon" />
            <div>
              <h1
                className={
                  themeIcon ? "skillsTitle skillsTitleDark" : "skillsTitle"
                }
              >
                Graphics Design
              </h1>
              <span className="skillsSubtitle">4+ Years experience</span>
            </div>
            <UisAngleDown className="skillsArrow" />
          </div>

          <div className="skillsListGrid">
            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  Adobe Photoshop
                </h3>
              </div>
              {/* <div className="skillBar">
                <span className="skillPerc skillMongo"></span>
              </div> */}
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  Adobe Illustrator
                </h3>
              </div>
              {/* <div className="skillBar">
                <span className="skillPerc skillPostgres"></span>
              </div> */}
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3
                  className={
                    themeIcon ? "skillName skillNameDark" : "skillName"
                  }
                >
                  Corel Draw
                </h3>
              </div>
              {/* <div className="skillBar">
                <span className="skillPerc skillMysql"></span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
