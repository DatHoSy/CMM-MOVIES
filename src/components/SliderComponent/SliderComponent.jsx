import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import epidode2 from "assets/episode2.svg";
import epidode3 from "assets/episode3.svg";
import epidode4 from "assets/episode4.svg";

const Wrapper = styled.div`
  margin: 20px -20px;

  padding: 0;
  box-sizing: border-box;
  list-style-type: none;

  --primary: #6a59ff;
  --white: #ffffff;
  --bg: #f5f5f5;

  font-size: 62.5%;
  scroll-behavior: smooth;
  overflow: hidden;

  @media (min-width: 1440px) {
    zoom: 0.9;
  }

  @media (min-width: 2560px) {
    zoom: 1.5;
  }

  @media (min-width: 3860px) {
    zoom: 2;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: #797979;
    transition: all 0.5s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #222224;
  }

  ::-webkit-scrollbar-track {
    background: #f9f9f9;
  }

  font-size: 1.6rem;
  /* background: var(--bg); */

  .container {
    max-width: 100vw;
    /* padding: 4rem 1rem; */
    margin: 0 auto;
    overflow: hidden !important;
  }

  .heading {
    padding: 1rem 0;
    font-size: 3.5rem;
    text-align: center;
  }

  .swiper_container {
    max-width: 100vw;
    height: 23rem;
    /* padding: 2rem 0; */
    /* background-color: red; */
    overflow-x: hidden !important;
    position: relative;
  }

  .swiper-slide {
    width: 37rem;
    height: 42rem;
    position: relative;
  }
  /* 
  @media (max-width: 500px) {
    .swiper_container {
      height: 47rem;
    }
    .swiper-slide {
      width: 28rem !important;
      height: 36rem !important;
    }
    .swiper-slide img {
      width: 28rem !important;
      height: 36rem !important;
    }
  } */

  .swiper-slide img {
    width: 100%;
    height: 20rem;
    border-radius: 2rem;
    object-fit: cover;
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    display: none;
  }

  .slider-controler {
    position: relative;
    bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider-controler .swiper-button-next {
    left: 58% !important;
    transform: translateX(-58%) !important;
  }

  @media (max-width: 990px) {
    .slider-controler .swiper-button-next {
      left: 70% !important;
      transform: translateX(-70%) !important;
    }
  }

  @media (max-width: 450px) {
    .slider-controler .swiper-button-next {
      left: 80% !important;
      transform: translateX(-80%) !important;
    }
  }

  @media (max-width: 990px) {
    .slider-controler .swiper-button-prev {
      left: 30% !important;
      transform: translateX(-30%) !important;
    }
  }

  @media (max-width: 450px) {
    .slider-controler .swiper-button-prev {
      left: 20% !important;
      transform: translateX(-20%) !important;
    }
  }

  .slider-controler .slider-arrow {
    background: var(--white);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    left: 42%;
    transform: translateX(-42%);
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .slider-controler .slider-arrow ion-icon {
    font-size: 2rem;
    color: #222224;
  }

  .slider-controler .slider-arrow::after {
    content: "";
  }
  .swiper-button-next, .swiper-button-prev {
    display: none;
  }
  .swiper-pagination {
    position: relative;
    width: 15rem !important;
    bottom: 1rem;
  }

  .swiper-pagination .swiper-pagination-bullet {
    background: #fff;
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background: var(--primary);
  }
`;

const SliderComponent = () => {
  return (
    <Wrapper>
      <div className="container">
        {/* <h1 className="heading">Flower Gallery</h1> */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={epidode2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={epidode3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={epidode4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={epidode3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={epidode2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={epidode4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={epidode3} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default SliderComponent;
