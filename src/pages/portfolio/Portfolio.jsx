import React, { useRef, useState } from "react";
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

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="sectionTitle">Portfolio</h2>
      <span className="sectionSubtitle">My recent projects</span>

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
            {data.map((d) => (
              <SwiperSlide>
                <div className="portfolioContent grid" key={d.id}>
                  <div>
                    <img src={d.img} alt="" className="portfolioImg" />

                    <div className="portfolioDate">
                      <h3 className="portfolioTitle">{d.title}</h3>
                      <h4 className="portfolioSubtitle">{d.subtitle}</h4>
                      <p className="portfolioDesc">{d.desc}</p>
                      <a href="#" className="portfolioButton">
                        Demo
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
