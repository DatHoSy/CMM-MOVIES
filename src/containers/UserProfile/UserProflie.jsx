import React, { useState } from "react";
import {
  Input,
  Button,
  Modal,
  Select,
  Dropdown,
  Collapse,
  Menu,
  Form,
} from "antd";
import styled from "styled-components";
import avatar from "assets/avatar.svg";
import line from "assets/Line4.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const StyleUserProfile = styled.div`
  width: 100%;
  background-color: white;
  font-family: "Blinker";
  background-color: #220000;
  padding: 60px;

  .usersetting {
    font-size: 40px;
    padding-left: 50px;
    padding-top: 30px;
    color: white;
  }
  .avatar {
    width: 40%;
    height: 400px;
    background-color: #440000;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
  }
  .details {
    flex: 1;
    min-height: 700px;
    background-color: #440000;
    border-radius: 15px;
    padding: 15px;
  }
  .user {
    display: flex;

    padding: 50px;
    display: flex;
    gap: 35px;
  }
  .edit-btn {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    text-decoration: underline;
    font-size: 16px;
  }
  .avatarimg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
  }
  .personal {
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-between;
  }
  .personal h3 {
    font-size: 24px;
    padding-left: 10px;
    color: white;
  }
  .name {
    padding: 30px;
    display: flex;
    justify-content: center;
  }
  .more {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .change-inform {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    h1 {
      font-size: 24px;
      margin: 0;
      padding-bottom: 8px;
    }
    p {
      font-size: 20px;
      margin: 0;
    }
  }
  .img {
    width: 80%;
  }
  h1 {
    color: white;
  }
  h3 {
    color: red;
  }
  h2 {
    color: white;
  }
  h4 {
    color: white;
    padding-left: 15px;
    padding-right: 15px;
  }
  p {
    color: #ccc;
    font-size: 40px;
  }
  h5 {
    color: white;
    font-size: 30px;
    margin: 0px;
  }
  button {
    margin-top: 40px;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 50px;
    color: white;
    background-color: red;
    font-family: "Blinker";
    font-size: 18px;
    border: none;
  }
`;
const dataUser = {
  id: 1,
  email: "user1@example.com",
  username: "user1",
  gender: true,
  birthday: "1989-12-31T17:00:00.000+00:00",
  status: 0,
};
const { Option } = Select;
const { Panel } = Collapse;
const UserProfile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState(false);
  const [birthday, setBirthday] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  let ordersData = useSelector((state) => state.order.orders);

  useEffect(() => {
    const tokenJSON = localStorage.getItem("userToken");
    const obj = {};
    obj.idPackage = 3;
    obj.token = tokenJSON;
    dispatch.user.checkUserPackage(tokenJSON);
    dispatch.user.getUser(tokenJSON);
    dispatch.order.getAll(tokenJSON);
  }, []);
  const findUserOrder = () => {
    const matchingOrder = ordersData.find(
      (order) => order.user.id === dataUser.id
    );
    return matchingOrder;
  };

  const matchingOrder = findUserOrder();

  const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);
  const [resetPasswordValues, setResetPasswordValues] = useState({
    email: dataUser.email,
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const toggleResetPasswordVisible = () => {
    setIsResetPasswordVisible(!isResetPasswordVisible);
  };

  // Function to handle resetting the password
  const handleResetPassword = (values) => {
    console.log(resetPasswordValues);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    const formData = {
      id: 1,
      username: name,
      email: email,
      gender: gender,
      birthday: birthday,
    };
    console.log(formData);
    // Perform any action you want with the updated data (email and name) here
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showEditModal = (type) => {
    // setIsModalVisible(true);
    setIsModalVisible(true);
    // Update the state based on the type (email or name)

    setEmail(dataUser.email);

    setName(dataUser.username);
    setBirthday(dataUser.birthday.slice(0, 10));
    setGender(dataUser.gender);
  };
  return (
    <StyleUserProfile>
      <div className="usersetting">
        <strong>User Setting</strong>
      </div>
      <div className="user">
        <div className="avatar">
          <div className="avatarimg">
            <img src={avatar}></img>
          </div>
          <div className="name">
            <h5>John Wick</h5>
          </div>
          <div className="more">
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </h4>
          </div>
        </div>
        <div className="details">
          <div className="personal ">
            <h3>Personal Details</h3>
            <p onClick={showEditModal} className="edit-btn">
              Edit
            </p>
          </div>
          <img src={line}></img>

          <div className="change-inform">
            <div>
              <h1>Email:</h1>
              <p id="email"> {dataUser.email}</p>
            </div>
          </div>

          <div className="change-inform">
            <div>
              <h1>Username:</h1>
              <p>{dataUser.username}</p>
            </div>
          </div>
          <div className="change-inform">
            <div>
              <h1>Genre:</h1>
              <p>{dataUser.gender === true ? "Male" : "Female"}</p>
            </div>
          </div>
          <div className="change-inform">
            <div>
              <h1>Birthday:</h1>
              <p> {dataUser.birthday.slice(0, 10)}</p>
            </div>
          </div>
          <div className="change-inform ">
            <h1>Billing Details:</h1>
          </div>
          {matchingOrder ? (
            <>
              <p>Yes</p>
              {/* Display the details of the matching order here */}
              <div>
                <h1>Order ID: {matchingOrder.id}</h1>
                <h2>Order Date: {matchingOrder.pack.name}</h2>
                {/* Add more details you want to display */}
              </div>
            </>
          ) : (
            <p>No</p>
          )}
          <img src={line}></img>
          <Button onClick={toggleResetPasswordVisible}>Reset Password</Button>
          <Collapse activeKey={isResetPasswordVisible ? "1" : ""}>
            <Panel header="Reset Password" key="1">
              <Form onFinish={handleResetPassword}>
                <div className="input-group">
                  <Form.Item
                    name="oldPassword"
                    label="Old Password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your old password",
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      onChange={(e) =>
                        setResetPasswordValues({
                          ...resetPasswordValues,
                          oldPassword: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
                <div className="input-group">
                  <Form.Item
                    name="newPassword"
                    label="New Password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your new password",
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      onChange={(e) =>
                        setResetPasswordValues({
                          ...resetPasswordValues,
                          newPassword: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
                <div className="input-group">
                  <Form.Item
                    name="confirmNewPassword"
                    label="Confirm New Password"
                    dependencies={["newPassword"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your new password",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue("newPassword") === value
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("The two passwords do not match")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input
                      type="password"
                      onChange={(e) =>
                        setResetPasswordValues({
                          ...resetPasswordValues,
                          confirmNewPassword: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Reset Password
                  </Button>
                </Form.Item>
              </Form>
            </Panel>
          </Collapse>
        </div>
        <Modal
          title="Edit Information"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="modal-content">
            <div>
              <h1>Email: </h1>

              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <h1>Name: </h1>

              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <h1>Gender: </h1>
              <Select
                value={gender === true ? "Male" : "Female"}
                onChange={
                  (value) => setGender(value === true ? "Male" : "Female") // Convert "Male" and "Female" to boolean
                }
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </div>
            <div>
              <h1>Birthday: </h1>

              <Input
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
          </div>
        </Modal>
      </div>
    </StyleUserProfile>
  );
};
export default UserProfile;
