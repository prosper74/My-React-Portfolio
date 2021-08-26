import React, { useState } from "react";
import "./services.scss";
import {
  UilLayersAlt,
  UilAngleRight,
  UilTimes,
  UilCheckCircle,
  UilBracketsCurly,
  UilFileCheck,
  UilHeartRate,
} from "@iconscout/react-unicons";

function Services({ themeIcon }) {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);
  const [modalFour, setModalFour] = useState(false);

  const handleModal = () => {
    modalOne === true && setModalOne(false);
    modalTwo === true && setModalTwo(false);
    modalThree === true && setModalThree(false);
    modalFour === true && setModalFour(false);
  };

  return (
    <section className="services section" id="services" onClick={handleModal}>
      <h2
        className={themeIcon ? "sectionTitle sectionTitleDark" : "sectionTitle"}
      >
        Services
      </h2>
      <span className="sectionSubtitle">What I can do for you</span>

      <div className="servicesContainer container grid">
        {/* Service 1 */}
        <div className="servicesContent">
          <div>
            <UilLayersAlt size="30" className="ServicesIcon" />
            <h3 className="ServicesTitle">
              Web App <br />
              <span>Project Planning</span>
            </h3>
          </div>

          <span className="viewMoreBtn" onClick={() => setModalOne(true)}>
            View More
            <UilAngleRight size="18" className="viewMoreIcon" />
          </span>

          <div
            className={modalOne ? "servicesModal activeModal" : "servicesModal"}
          >
            {/* Service 1 modal */}
            <div className="servicesModalContent">
              <h4 className="modalTitle">
                Web App <br />
                <span>Project Planning</span>
              </h4>
              <UilTimes
                size="18"
                className="modalCLoseIcon"
                onClick={() => setModalOne(false)}
              />

              <ul className="modalServices grid">
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I
                  gather the software requiremnts and analysis
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I
                  plan the project
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I
                  create the Architectural Pattern/Design
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="servicesContent">
          <div>
            <UilBracketsCurly size="30" className="ServicesIcon" />
            <h3 className="ServicesTitle">
              Software Development <br />
              <span>Frontend and Backend</span>
            </h3>
          </div>

          <span className="viewMoreBtn" onClick={() => setModalTwo(true)}>
            View More
            <UilAngleRight size="18" className="viewMoreIcon" />
          </span>

          <div
            className={modalTwo ? "servicesModal activeModal" : "servicesModal"}
          >
            <div className="servicesModalContent">
              <h4 className="modalTitle">
                Software Development/Deployment <br />
                <span>Frontend and Backend</span>
              </h4>
              <UilTimes
                size="18"
                className="modalCLoseIcon"
                onClick={() => setModalTwo(false)}
              />

              <ul className="modalServices grid">
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I
                  design frontend app using React js or Next js, with typescript
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I
                  Develope the backend using Node js/Express js
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I
                  create database models and routes (MongoDB, MySQL or
                  PostgresSQL)
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I
                  create GraphQL and Rest APIs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="servicesContent">
          <div>
            <UilFileCheck size="30" className="ServicesIcon" />
            <h3 className="ServicesTitle">
              Software Testing <br />
              <span>Frontend and Backend</span>
            </h3>
          </div>

          <span className="viewMoreBtn" onClick={() => setModalThree(true)}>
            View More
            <UilAngleRight size="18" className="viewMoreIcon" />
          </span>

          <div
            className={
              modalThree ? "servicesModal activeModal" : "servicesModal"
            }
          >
            <div className="servicesModalContent">
              <h4 className="modalTitle">
                Software Testing <br />
                <span>Frontend and Backend</span>
              </h4>
              <UilTimes
                size="18"
                className="modalCLoseIcon"
                onClick={() => setModalThree(false)}
              />

              <ul className="modalServices grid">
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I can
                  run unix, Jest, E2E and cypress tests
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I
                  create API documentation using Swagger
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I use
                  eslint and pretier to create clean and maintainable codes
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="servicesContent">
          <div>
            <UilHeartRate size="30" className="ServicesIcon" />
            <h3 className="ServicesTitle">
              Software Maintenance <br />
              <span>Version Control</span>
            </h3>
          </div>

          <span className="viewMoreBtn" onClick={() => setModalFour(true)}>
            View More
            <UilAngleRight size="18" className="viewMoreIcon" />
          </span>

          <div
            className={
              modalFour ? "servicesModal activeModal" : "servicesModal"
            }
          >
            <div className="servicesModalContent">
              <h4 className="modalTitle">
                Software Maintenance <br />
                <span>Version Control</span>
              </h4>
              <UilTimes
                size="18"
                className="modalCLoseIcon"
                onClick={() => setModalFour(false)}
              />

              <ul className="modalServices grid">
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I can
                  run unix, Jest, E2E and cypress tests
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />I
                  create API documentation using Swagger
                </li>
                <li className="modalService">
                  <UilCheckCircle size="22" className="modalServiceIcon" />I use
                  eslint and pretier to create clean and maintainable codes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
