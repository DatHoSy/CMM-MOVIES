import BannerPricing from "components/BannerPricing";
import PackMovie from "components/PackMovie/PackMovie";

import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  @media screen and (max-width: 1439px) {
  }
  @media screen and (max-width: 1023px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 500px) {
  }
`;
const Pricing = () => {
  return (
    <Wrapper>
      <BannerPricing title={"Pricing"}></BannerPricing>
      <PackMovie />
    </Wrapper>
  );
};
export default Pricing;
