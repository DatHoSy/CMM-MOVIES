import { Button } from "components/Button";
import Input from "components/Input";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import BgPayment from "../../assets/payment2.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
const Wrapper = styled.div`
  background-color: #191919;
  margin: 100px 150px;
  color: #ffffff;
  font-size: 16px;
  display: flex;

  .left {
    flex: 50%;
    padding: 45px;
    .hidden {
      display: none !important;
    }
    h3 {
      margin: 0 0 30px 0;
    }
    form {
      color: white;
    }
    .input_group {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
    }
    .expire-day {
      width: 440px;
      display: flex;
      justify-content: space-between;
    }
    .pricing-total {
      display: flex;
      width: 440px;
      justify-content: space-between;
      /* margin-right: 20%; */
      margin-top: 20px;
    }
    label {
      display: flex;
      align-items: center;
    }
    input[type="radio"] {
      display: none;
    }

    .custom-radio {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid black;
      height: 16px;
      width: 16px;
    }
    input[type="radio"] + .custom-radio {
      background-color: #ffffff;
    }
    input[type="radio"]:checked + .custom-radio {
      background-color: red;
    }
  }
  .paypal {
    margin-top: 10px;
    width: 430px;
    display: flex;
  }
`;
const RightContent = styled.div`
  flex: 50%;
  margin-left: -140px;
  background: url(${BgPayment});
  background-position: center;
  background-size: cover;
  position: relative;

  .pack {
    z-index: 100;
    display: flex;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 100px;
    background-color: #fff;
    position: absolute;
    top: 35%;
    border-radius: 20px;
    .square {
      width: 80px;
      height: 80px;
      background-color: #61bbaf;
      border-radius: 20px;
      margin-left: 10px;
      margin-right: 20px;
    }
    .content-pack {
      height: 60px;
      h3 {
        margin: 0;
      }
      display: flex;
      flex-direction: column;
      color: #000;
      /* align-items: center; */
      justify-content: space-between;
    }
  }
  .policy {
    width: 100%;
    height: 300px;
    background-color: #000;
    position: absolute;
    bottom: 0;
    opacity: 0.4;

    /* padding: 5% 15%; */
  }
  .policy-content {
    padding: 15% 12%;
    position: absolute;
    bottom: 0;
    ul li {
      margin-top: 10px;
    }
    li::marker {
      color: red;
    }
  }
`;
const PaymentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const selectedPackage = JSON.parse(localStorage.getItem("selectedPackage"));
    setSelectedOption(selectedPackage.id);
  }, []);

  useEffect(() => {
    const selectedPackage = JSON.parse(localStorage.getItem("selectedPackage"));
    const price = selectedPackage.price;
    setTotal(price);
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const packageStr = localStorage.getItem("selectedPackage");
  const packageObj = JSON.parse(packageStr);
  const indDate = packageObj.duration;

  const buy = async () => {
    const token = localStorage.getItem("userToken");
    const obj = {};
    obj.idPackage = packageObj.id;
    obj.token = token;
    const isBuy = await dispatch.user.buyPackage(obj);
    if (isBuy) {
      alert("Buy Success!");
      navigate("/");
    } else {
      alert("Buy Fail!");
    }
  };

  const date = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
  const endDate = new Date();
  endDate.setDate(date.getDate() + indDate);
  const formattedDateEnd = new Intl.DateTimeFormat("en-GB", options).format(
    endDate
  );

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: packageObj.price,
          },
        },
      ],
    });
  };
  const onApprove = async (data, actions) => {
    const token = localStorage.getItem("userToken");
    const obj = {};
    obj.idPackage = packageObj.id;
    obj.token = token;
    const isBuy = await dispatch.user.buyPackage(obj);
    // if (isBuy) {
    //     alert('Buy Success!');
    //     toast.success("successfully payment");
    //     navigate("/");
    // } else {
    //     alert('Buy Fail!');
    // }
    //
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert("Buy Success!");
    });
  };
  const [{ isPending, isResolved, error }] = usePayPalScriptReducer();
  return (
    <Wrapper>
      <div className="left">
        <h3>Payment Details</h3>
        <form>
          <div className="input_group">
            <label className="input_group_label " htmlFor="username">
              Username
            </label>
            <div className="">
              <Input
                width={430}
                height={50}
                borderRadius={8}
                type="text"
                id="username"
                name="username"
                value="marvelous@email.com"
                textColor={"#000"}
                bgColor={"#fff"}
                disabled
              />
            </div>
          </div>
          <div className="input_group">
            <label className="input_group_label " htmlFor="email">
              Email address
            </label>
            <div className="">
              <Input
                width={430}
                height={50}
                borderRadius={8}
                type="text"
                id="email"
                name="email"
                value="marvelous@email.com"
                textColor={"#000"}
                bgColor={"#fff"}
                disabled
              />
            </div>
          </div>
          <div className="expire-day">
            <div className="input_group">
              <label className="input_group_label " htmlFor="date_buy">
                Date Buy
              </label>
              <div className="">
                <Input
                  width={200}
                  height={50}
                  borderRadius={8}
                  type="text"
                  id="date_buy"
                  name="date_buy"
                  value={formattedDate}
                  textColor={"#000"}
                  bgColor={"#fff"}
                  disabled
                />
              </div>
            </div>
            <div className="input_group">
              <label className="input_group_label " htmlFor="date_expire">
                Date Expire
              </label>
              <div className="">
                <Input
                  width={200}
                  height={50}
                  borderRadius={8}
                  type="text"
                  id="date_expire"
                  name="date_expire"
                  value={formattedDateEnd}
                  textColor={"#000"}
                  bgColor={"#fff"}
                  disabled
                />
              </div>
            </div>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="2"
                checked={selectedOption === 2}
                onChange={handleOptionChange}
                disabled={selectedOption !== 2}
              />
              <span
                className={`custom-radio ${selectedOption !== 2 && "hidden"}`}
              ></span>
              <span className={selectedOption !== 2 && "hidden"}>
                {" "}
                Premium-$10 / 1 Month with a 5-day free trial
              </span>
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="3"
                checked={selectedOption === 3}
                onChange={handleOptionChange}
                disabled={selectedOption !== 3}
              />
              <span
                className={`custom-radio ${selectedOption !== 3 && "hidden"}`}
              ></span>
              <span className={selectedOption !== 3 && "hidden"}>
                {" "}
                Premium-$100 / 1 Year with a 5-day free trial
              </span>
            </label>
          </div>

          <div className="pricing-total">
            <span>Total:</span>
            <span>{total}$</span>
          </div>
          <div className="btn-form">
            {/* <Button
                            style={{ marginTop: "20px" }}
                            height={"50px"}
                            title={"Make Payment"}
                            text_color={"#fff"}
                            width={"440px"}
                            bg_color={"red"}
                            border_custom={"1px solid red"}
                            fontSize={"16px"}
                            onClick={() => buy()}
                            radius={"20px"}
                        /> */}
            {/* {isPending && <div>Loading PayPal script...</div>}
                    {isResolved && <div>PayPal script loaded!</div>}
                    {error && <div>Failed to load PayPal script: {error.message}</div>} */}
            <PayPalButtons
              className="paypal"
              createOrder={createOrder}
              onApprove={onApprove}
            />
          </div>
        </form>
      </div>
      <RightContent>
        <div className="pack">
          <div className="square"></div>
          <div className="content-pack">
            <h3>Package for One Month</h3>
            <span>100$/month</span>
          </div>
        </div>
        <div className="policy"></div>
        <div className="policy-content">
          <ul>
            <li>Ad Free Entertainment </li>
            <li>New Movies</li>
            <li>Streamit Special</li>
            <li>Video Quality</li>
            <li>Hollywood Movies</li>
          </ul>
        </div>
      </RightContent>
    </Wrapper>
  );
};
export default PaymentForm;
