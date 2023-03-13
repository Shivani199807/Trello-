import TextInput from "../components/atoms/TextInput";

import React, { useState } from "react";
import bg from "../assets/TrelloMainImage.png";
import validations from "../validations/CommonValidation";
import { useForm } from "react-hook-form";

import Button from "../components/atoms/Button";
import { useNavigate } from "react-router";
import {
  MainLogin,
  LoginDivision,
  LoginRightSide,
  LoginHeading,
  TrelloImage,
  LoginLeftSide,
  TextMargins,
  DontHaveAccount,
  Registers,
} from "../styles/login.styles";
const { EMAIL, PASSWORD } = validations;
const Login = () => {
  const navigate = useNavigate();
  const userDetails = localStorage.getItem("UserDetails");
  const [buttonColor, setButtonColor] = useState("blue");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    const user = JSON.parse(userDetails);
    console.log(user.email);
    if (user.email !== email && user.password !== password) {
      setButtonColor("red");
    } else {
      navigate("/board");
    }
  };
  const registering = () => {
    navigate("/register");
  };
  return (
    <MainLogin>
      <LoginDivision>
        <LoginLeftSide className="img">
          <TrelloImage src={bg} />
        </LoginLeftSide>
        <LoginRightSide>
          <LoginHeading>
            <div>Login</div>
          </LoginHeading>

          <div className="form">
            <TextMargins>
              <TextInput
                type="text"
                registerProps={register("email", EMAIL)}
                errors={errors.email}
                id={"email"}
                placeholder={"Email ID"}
              />
            </TextMargins>

            <TextMargins>
              <TextInput
                type="password"
                registerProps={register("password", PASSWORD)}
                errors={errors.password}
                passIcon={true}
                id={"password"}
                placeholder={"Password"}
              />
            </TextMargins>

            <div>
              <Button onClick={handleSubmit(submitHandler)}>Login</Button>
              {buttonColor == "red" ? (
                <div style={{ color: "red" }}>
                  User account doesn't exists. Please register
                </div>
              ) : null}
            </div>
          </div>
          <DontHaveAccount>
            Dont have account?
            <Registers>
              {" "}
              <span onClick={registering}>Register</span>
            </Registers>
          </DontHaveAccount>
        </LoginRightSide>
      </LoginDivision>
    </MainLogin>
  );
};

export default Login;
