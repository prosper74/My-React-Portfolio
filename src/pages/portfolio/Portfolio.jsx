import React from "react";
import "./portfolio.scss";
import { data } from "./data";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

function Portfolio({ themeIcon }) {
  return (
    <section className="portfolio section" id="portfolio">
      <h2
        className={themeIcon ? "sectionTitle sectionTitleDark" : "sectionTitle"}
      >
        Portfolio
      </h2>
      <span className="sectionSubtitle">My recent projects</span>

      {/* This is where I display the slide. The portfolioContainer class is in the portfolio.scss file, while the container class is from the global style  */}
      <div className="portfolioContainer container">
        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {/* This is where each slide is rendered using the map funcion. Its data source if from the data.js file in the portfolio directory  */}
            {data.map((d) => (
              <SwiperSlide key={d.id}>
                <div className="portfolioContent grid">
                  <div>
                    {/* portfolio image mockup */}
                    <img src={d.img} alt="" className="portfolioImg" />

                    <div className="portfolioDate">
                      {/* Project title and description. Having conditional rendering based on dark or light theme. It checks if the themeIcon state is true or false  */}
                      <h3
                        className={
                          themeIcon
                            ? "portfolioTitle portfolioTitleDark"
                            : "portfolioTitle"
                        }
                      >
                        {d.title}
                      </h3>
                      <h4
                        className={
                          themeIcon
                            ? "portfolioSubtitle portfolioTitleDark"
                            : "portfolioSubtitle"
                        }
                      >
                        {d.subtitle}
                      </h4>

                      {/* This is the project description  */}
                      <p className="portfolioDesc">{d.desc}</p>

                      {/* This is the link to view the project. It opens in a new tab  */}
                      <a
                        href={d.link}
                        target="_blank"
                        className="portfolioButton"
                      >
                        View
                        <UilExternalLinkAlt size="18" className="btnIcon" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
