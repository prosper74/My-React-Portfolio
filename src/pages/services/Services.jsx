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
        <div className={themeIcon ? "servicesContentDark" : "servicesContent"}>
          <div>
            {/* service icon */}
            <UilLayersAlt size="30" className="ServicesIcon" />

            {/* service title  */}
            <h3
              className={
                themeIcon ? "ServicesTitle ServicesTitleDark" : "ServicesTitle"
              }
            >
              WordPress Website <br />
              <span>Design, Hosting, SEO, Security</span>
            </h3>
          </div>

          {/* this controls the open and closing of the modal...using useState hook */}
          <span className="viewMoreBtn" onClick={() => setModalOne(true)}>
            View More
            <UilAngleRight size="18" className="viewMoreIcon" />
          </span>

          <div
            className={modalOne ? "servicesModal activeModal" : "servicesModal"}
          >
            {/* Service 1 modal */}

            {/* this controls the class based on dark or light theme  */}
            <div
              className={
                themeIcon ? "servicesModalContentDark" : "servicesModalContent"
              }
            >
              <h4
                className={
                  themeIcon ? "modalTitle modalTitleDark" : "modalTitle"
                }
              >
                {/* modal title  */}
                Web Design <br />
                <span>Project Planning and Implementation</span>
              </h4>

              {/* close modal icon. you can also click anywhere on the page to close the modal */}
              <UilTimes
                size="18"
                className="modalCLoseIcon"
                onClick={() => setModalOne(false)}
              />

              {/* the service list inside the modal  */}
              <ul className="modalServices grid">
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Gather the project requirements and analyse them
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Plan the data and sketch a design
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Choose a theme or setup Elementor Builder if custom
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Design, Send for review, modify and closeout project
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className={themeIcon ? "servicesContentDark" : "servicesContent"}>
          <div>
            <UilBracketsCurly size="30" className="ServicesIcon" />
            <h3
              className={
                themeIcon ? "ServicesTitle ServicesTitleDark" : "ServicesTitle"
              }
            >
              Web Development <br />
              <span>UI Design, Frontend and Backend</span>
            </h3>
          </div>

          <span className="viewMoreBtn" onClick={() => setModalTwo(true)}>
            View More
            <UilAngleRight size="18" className="viewMoreIcon" />
          </span>

          <div
            className={modalTwo ? "servicesModal activeModal" : "servicesModal"}
          >
            <div
              className={
                themeIcon ? "servicesModalContentDark" : "servicesModalContent"
              }
            >
              <h4
                className={
                  themeIcon ? "modalTitle modalTitleDark" : "modalTitle"
                }
              >
                Software Development/Deployment <br />
                <span>Frontend and Backend</span>
              </h4>
              <UilTimes
                size="18"
                className="modalCLoseIcon"
                onClick={() => setModalTwo(false)}
              />

              {/* the service list inside the modal  */}
              <ul className="modalServices grid">
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Gather project requirements and plan them
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Create mockups if not provided and send for review
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Develop the backend (API) using NodeJS/ExpressJS or StrapiCMS
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Build the User Interface using ReactJS/NextJS/GatsbyJS based
                  on project requirements
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Send for review and deploy when aproved
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className={themeIcon ? "servicesContentDark" : "servicesContent"}>
          <div>
            <UilFileCheck size="30" className="ServicesIcon" />
            <h3
              className={
                themeIcon ? "ServicesTitle ServicesTitleDark" : "ServicesTitle"
              }
            >
              Graphics Design <br />
              <span>Flyer, Logo, Brochure, Magazine, e.t.c</span>
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
            <div
              className={
                themeIcon ? "servicesModalContentDark" : "servicesModalContent"
              }
            >
              <h4
                className={
                  themeIcon ? "modalTitle modalTitleDark" : "modalTitle"
                }
              >
                Graphics Design <br />
                <span>Branding</span>
              </h4>
              <UilTimes
                size="18"
                className="modalCLoseIcon"
                onClick={() => setModalThree(false)}
              />

              {/* the service list inside the modal  */}
              <ul className="modalServices grid">
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Business Branding
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Design Flyer, banner, logo, Brochure, Magazine, Card, Book
                  Cover
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className={themeIcon ? "servicesContentDark" : "servicesContent"}>
          <div>
            <UilHeartRate size="30" className="ServicesIcon" />
            <h3
              className={
                themeIcon ? "ServicesTitle ServicesTitleDark" : "ServicesTitle"
              }
            >
              Web Maintenance <br />
              <span>Update, SEO, Security, Design, Accessibility</span>
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
            <div
              className={
                themeIcon ? "servicesModalContentDark" : "servicesModalContent"
              }
            >
              <h4
                className={
                  themeIcon ? "modalTitle modalTitleDark" : "modalTitle"
                }
              >
                Software Maintenance <br />
                <span>Keep up to date</span>
              </h4>
              <UilTimes
                size="18"
                className="modalCLoseIcon"
                onClick={() => setModalFour(false)}
              />
              {/* the service list inside the modal  */}
              <ul className="modalServices grid">
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Ensure all tools are upto date and does not pose any security
                  risk
                </li>
                <li className="modalService">
                  <UilCheckCircle size="18" className="modalServiceIcon" />
                  Ensure site can be accessed by all users
                </li>
                <li className="modalService">
                  <UilCheckCircle size="22" className="modalServiceIcon" />
                  Ensure site ranks high on search engines
                </li>
                <li className="modalService">
                  <UilCheckCircle size="22" className="modalServiceIcon" />
                  Modify design when necessary to keep it appealing
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
