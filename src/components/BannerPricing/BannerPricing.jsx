import React from "react";
import styled from "styled-components";
import bannerPricing from "assets/banner-pricing.jpg";
const Wrapper = styled.div`
  .banner {
    position: relative;

    .movie-bg {
      width: 1440px;
      height: 350px;
      object-fit: cover;
      opacity: 0.7;
    }
    /* .overlay {
      position: absolute;
      background: black;
      top: 0;
      left: 0;
      height: 100px;
    } */
    .title {
      color: #fff;
      font-weight: 700;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40px;
    }
  }
  /* height: 700px; */
  img {
  }
`;
const BannerPricing = ({ title }) => {
  return (
    <Wrapper>
      <div className="banner">
        <img className="movie-bg" src={bannerPricing} alt="" />

        <h1 className="title">{title}</h1>
      </div>
    </Wrapper>
  );
};
export default BannerPricing;
