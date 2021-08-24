import React, { useState } from "react";
import "./qualifications.scss";
import {
  UilGraduationCap,
  UilBag,
  UilCalendarAlt,
} from "@iconscout/react-unicons";

function Qualifications() {
  const [activeQua, setActiveQua] = useState(false);

  return (
    <section className="qualifications section" id="qualifications">
      <h2 className="sectionTitle">Qualifications</h2>
      <span className="sectionSubtitle">My journey so far</span>

      <div className="quaContainer container">
        <div className="quaTab">
          <div
            onClick={() => setActiveQua(false)}
            className={"quaButton " + (!activeQua && "active")}
          >
            <UilGraduationCap size="25" className="quaIcon" /> Education
          </div>

          <div
            onClick={() => setActiveQua(true)}
            className={"quaButton " + (activeQua && "active")}
          >
            <UilBag size="25" className="quaIcon" /> Work
          </div>
        </div>

        <div className="quaSections">
          {/* Qualification Content */}
          <div className={"quaContent " + (activeQua ? "quaClose" : "quaOpen")}>
            {/* First Education Qualification  */}
            <div className="quaData">
              <div>
                <h3 className="quaTitle">Computer Science</h3>
                <span className="quaSubtitle">Abia State - Polytechnic</span>
                <div className="quaCalendar">
                  <UilCalendarAlt size="15" className="calIcon" />
                  2011 - 2016
                </div>
              </div>

              <div>
                <span className="quaRounder"></span>
                <span className="quaLine"></span>
              </div>
            </div>

            {/* Second Education Qualification  */}
            <div className="quaData">
              <div></div>

              <div>
                <span className="quaRounder"></span>
                <span className="quaLine"></span>
              </div>

              <div>
                <h3 className="quaTitle">WASSCE</h3>
                <span className="quaSubtitle">Dave Christian Academy</span>
                <div className="quaCalendar">
                  <UilCalendarAlt size="15" className="calIcon" />
                  2006 - 2011
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Content */}
          <div className={"quaContent " + (activeQua ? "quaOpen" : "quaClose")}>
            {/* First work Experience  */}
            <div className="quaData">
              <div>
                <h3 className="quaTitle">Software Engineer</h3>
                <span className="quaSubtitle">Metrovatech, Nigeria</span>
                <div className="quaCalendar">
                  <UilCalendarAlt size="15" className="calIcon" />
                  2020 - 2021
                </div>
              </div>

              <div>
                <span className="quaRounder"></span>
                <span className="quaLine"></span>
              </div>
            </div>

            {/* Second Work Experience  */}
            <div className="quaData">
              <div></div>

              <div>
                <span className="quaRounder"></span>
                <span className="quaLine"></span>
              </div>

              <div>
                <h3 className="quaTitle">Web/Graphics Designer</h3>
                <span className="quaSubtitle">Codelab LLC, USA</span>
                <div className="quaCalendar">
                  <UilCalendarAlt size="15" className="calIcon" />
                  2018 - 2020
                </div>
              </div>
            </div>

            {/* Third Work Experience  */}
            <div className="quaData">
              <div>
                <h3 className="quaTitle">Web Developer / Graphics Desinger</h3>
                <span className="quaSubtitle">
                  Telace Multimedia - Freelance
                </span>
                <div className="quaCalendar">
                  <UilCalendarAlt size="15" className="calIcon" />
                  2017 - 2020
                </div>
              </div>

              <div>
                <span className="quaRounder"></span>
                <span className="quaLine"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
