import React, { useState } from "react";
import "./skills.scss";
import {
  UilBracketsCurly,
  UilServerNetworkAlt,
  UilBag,
  UilDatabase,
} from "@iconscout/react-unicons";
import { UisAngleDown } from "@iconscout/react-unicons-solid";
import {otherSkils} from "./data";

function Skills() {
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  const [toggleFour, setToggleFour] = useState(false);

  return (
    <section className="skills section" id="skills">
      <h2 className="sectionTitle">Skills</h2>
      <span className="sectionSubtitle">My Technical Level</span>

      <div className="skillsContainer container grid">
        {/* Skill 1 */}
        <div
          className={
            "skillsContent " + (toggle ? " skillsClose" : "skillsOpen")
          }
        >
          <div className="skillsHeader" onClick={() => setToggle(!toggle)}>
            <UilBracketsCurly size="30" className="skillsIcon" />
            <div>
              <h1 className="skillsTitle">Frontend Developer</h1>
              <span className="skillsSubtitle">2+ years experience</span>
            </div>
            <UisAngleDown className="skillsArrow" />
          </div>

          <div className="skillsListGrid">
            <div className="skillsData">
              <div className="skillsTitle">
                <h3 className="skillName">HTML/CSS</h3>
                <div className="skillBar">
                  <span className="skillPerc skillHtml"></span>
                </div>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3 className="skillName">Javascript</h3>
                <div className="skillBar">
                  <span className="skillPerc skillJavascript"></span>
                </div>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3 className="skillName">React JS</h3>
                <div className="skillBar">
                  <span className="skillPerc skillReact"></span>
                </div>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3 className="skillName">Next JS</h3>
                <div className="skillBar">
                  <span className="skillPerc skillReact"></span>
                </div>
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
              <h1 className="skillsTitle">Backend Developer</h1>
              <span className="skillsSubtitle">1+ year experience</span>
            </div>
            <UisAngleDown className="skillsArrow" />
          </div>

          <div className="skillsListGrid">
            <div className="skillsData">
              <div className="skillsTitle">
                <h3 className="skillName">Node Js/Express JS</h3>
              </div>
              <div className="skillBar">
                <span className="skillPerc skillNode"></span>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3 className="skillName">Firebase</h3>
              </div>
              <div className="skillBar">
                <span className="skillPerc skillFirebase"></span>
              </div>
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
              <h1 className="skillsTitle">Database</h1>
              <span className="skillsSubtitle">1+ year experience</span>
            </div>
            <UisAngleDown className="skillsArrow" />
          </div>

          <div className="skillsListGrid">
            <div className="skillsData">
              <div className="skillsTitle">
                <h3 className="skillName">MongoDB</h3>
              </div>
              <div className="skillBar">
                <span className="skillPerc skillMongo"></span>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3 className="skillName">MySQL</h3>
              </div>
              <div className="skillBar">
                <span className="skillPerc skillMysql"></span>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitle">
                <h3 className="skillName">PostgresSQL</h3>
              </div>
              <div className="skillBar">
                <span className="skillPerc skillPostgres"></span>
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
            <UilBag size="30" className="skillsIcon" />
            <div>
              <h1 className="skillsTitle">Others</h1>
            </div>
            <UisAngleDown size="30" className="skillsArrow" />
          </div>

          <div className="skillsData">
            <div className="skillsList ">
              {otherSkils.map((d, i) => (
                <span key={i}>{d.name}</span>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
