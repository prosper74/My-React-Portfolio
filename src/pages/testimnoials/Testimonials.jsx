import React, { useRef, useState } from "react";
import "./testimonials.scss";
import { data } from "./data";
import { UisStar } from "@iconscout/react-unicons-solid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Testimonials({ themeIcon }) {
  return (
    <section className="testimonials section" id="testimonials">
      <h2
        className={themeIcon ? "sectionTitle sectionTitleDark" : "sectionTitle"}
      >
        Testimonials
      </h2>
      <span className="sectionSubtitle">What my clients are saying</span>

      <div className="testimonialContainer container">
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          loop={true}
          navigation={false}
          className="mySwiper"
        >
          {data.map((d) => (
            <SwiperSlide>
              <div className="testimonialContent" key={d.id}>
                <div className="testimonialData">
                  <div className="testimonialHeader">
                    <img src={d.img} alt="" className="testImg" />
                    <div>
                      <UisStar size="15" className="starIcon" />
                      <UisStar size="15" className="starIcon" />
                      <UisStar size="15" className="starIcon" />
                      <UisStar size="15" className="starIcon" />
                      <UisStar size="15" className="starIcon" />
                    </div>
                  </div>

                  <div className="nameSection">
                    <h3 className="testimonialName">{d.name}</h3>
                    <span className="testimonialBusiness">{d.designation}</span>
                  </div>

                  <p className="testimonialDesc">{d.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Testimonial 1 */}

        {/* Testimonial 2 */}
      </div>
    </section>
  );
}

export default Testimonials;
