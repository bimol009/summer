// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ImgarSweper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import SectionTitle from "../../../../Components/SectionTile/SectionTitle";

const ImgarSweper = () => {
  return (
    <div>
           <SectionTitle
       
        heading={"Dance Category"}
      ></SectionTitle>
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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/nQvYdfd/Blue-Watercolor-Minimalist-Quote-Instagram-Post.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/F8PGdzs/Blue-Watercolor-Minimalist-Quote-Instagram-Post-8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/WDgshvT/Blue-Watercolor-Minimalist-Quote-Instagram-Post-9.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/qRS3hsZ/Blue-Watercolor-Minimalist-Quote-Instagram-Post-7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/t80Vnbm/Blue-Watercolor-Minimalist-Quote-Instagram-Post-2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/59785wC/Blue-Watercolor-Minimalist-Quote-Instagram-Post-3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/4s03wD2/Blue-Watercolor-Minimalist-Quote-Instagram-Post-4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/t8FNkn1/Blue-Watercolor-Minimalist-Quote-Instagram-Post-5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/20rpK28/Blue-Watercolor-Minimalist-Quote-Instagram-Post-6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/phRL7Pv/Blue-Watercolor-Minimalist-Quote-Instagram-Post-1.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImgarSweper;
