import React from "react";
import BannerPricing from "components/BannerPricing";
import styled from "styled-components";
import PaymentForm from "components/PaymentForm";
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
const Payment = () => {
  return (
    <Wrapper>
      <BannerPricing title={"Payment"}></BannerPricing>
      <PaymentForm />
    </Wrapper>
  );
};
export default Payment;
