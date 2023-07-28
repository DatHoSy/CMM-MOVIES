import React from "react";
import { styled, useTheme } from "styled-components";
import CheckIcon from "assets/checkmark.png";
import CancelIcon from "assets/cancelmark.svg";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
  background-color: #191919;
  margin: 100px 150px;
  .container {
    padding: 80px;
    color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .pack {
  }
  .none-bg {
    background-color: #191919 !important;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto; /* Adjusted column configuration */
  grid-auto-rows: 0.3fr; /* Adjusted row configuration */
  grid-gap: 24px;
`;

const GridHead = styled.div`
  position: relative;
  background-color: #1b9aa5;
  opacity: 0.9;
  border-radius: 20px;
  padding: 20px;
  height: 120px; /* Updated height value */

  .tag {
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    height: 60px;
    width: 100px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
  }
  .pack-price {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .price-item {
      font-size: 30px;
      font-weight: bold;
    }
    .time-pack {
      font-size: 26px;
      font-weight: 500;
      margin-top: 20px;
    }
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 20px;

  img {
    height: 40px;
    width: 40px;
  }
  .big-icon {
    height: 55px !important;
    width: 55px !important;
    margin-top: 5px;
  }

  font-size: 16px;
  font-weight: 500;
`;
const PackMovie = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const handlePurchase = (data) => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      const isLogin = confirm("Are you go to login?");
      if (isLogin) {
        navigate("/login");
      }
      return;
    }
    setSelectedPackage(data.id);
    const dataToString = JSON.stringify(data);
    localStorage.setItem("selectedPackage", dataToString); // Store the selected package ID in localStorage
    navigate("/payment");
  };
  const dataPack = [
    {
      id: 1,
      duration: 9999,
      name: "Free",
      price: 0,
    },
    {
      id: 2,
      duration: 30,
      name: "Month",
      price: 10,
    },
    {
      id: 3,
      duration: 365,
      name: "Year",
      price: 100,
    },
  ];

  return (
    <Wrapper>
      <div className="container">
        <GridContainer>
          <GridHead className="none-bg"></GridHead>
          {dataPack.map((e) => (
            <GridHead id={e.id} className="pack">
              <div className="tag">
                <span>{e.name}</span>
              </div>

              <div className="pack-price">
                <span className="price-item">${e.price}</span>
                <span className="time-pack">/ {e.duration} days</span>
              </div>
            </GridHead>
          ))}

          <GridItem className="title-pack-item">
            Ad Free Entertainment{" "}
          </GridItem>
          <GridItem>
            <img src={CancelIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>
          <GridItem>
            <img src={CancelIcon} alt="" />
          </GridItem>

          <GridItem className="title-pack-item">Hollywood Movies </GridItem>
          <GridItem>
            <img src={CancelIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>

          <GridItem className="title-pack-item">New Movies </GridItem>
          <GridItem>
            <img src={CancelIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>

          <GridItem className="title-pack-item">Streamit Special </GridItem>
          <GridItem>
            <img src={CancelIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>

          <GridItem className="title-pack-item"></GridItem>
          <GridItem>
            {/* <Button
              height={"50px"}
              title={"Purchase"}
              text_color={"#fff"}
              width={"100px"}
              bg_color={selectedPackage === 1 ? "black" : "red"}
              border_custom={"1px solid red"}
              fontSize={"16px"}
              onClick={() => handlePurchase(1)}
              disabled={selectedPackage === 1}
            /> */}
          </GridItem>
          <GridItem>
            <Button
              height={"50px"}
              title={"Purchase"}
              text_color={"#fff"}
              width={"100px"}
              bg_color={"red"}
              border_custom={"1px solid red"}
              fontSize={"16px"}
              onClick={() => handlePurchase(dataPack[1])}
            />
          </GridItem>
          <GridItem>
            <Button
              height={"50px"}
              title={"Purchase"}
              text_color={"#fff"}
              width={"100px"}
              bg_color={"red"}
              border_custom={"1px solid red"}
              fontSize={"16px"}
              onClick={() => handlePurchase(dataPack[2])}
            />
          </GridItem>
        </GridContainer>
      </div>
    </Wrapper>
  );
};
export default PackMovie;
