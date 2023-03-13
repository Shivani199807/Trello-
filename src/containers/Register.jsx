import TextInput from "../components/atoms/TextInput";

import React from "react";
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
} from "../styles/login.styles";
const { EMAIL, PASSWORD, NAME } = validations;
const Register = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password, name }) => {
    localStorage.setItem(
      "UserDetails",
      JSON.stringify({ email, password, name })
    );
    navigate("/");
  };

  return (
    <MainLogin>
      <LoginDivision>
        <LoginLeftSide className="img">
          <TrelloImage src={bg} />
        </LoginLeftSide>
        <LoginRightSide>
          <LoginHeading>
            <div>Register</div>
          </LoginHeading>

          <div className="form">
            <TextMargins>
              <TextInput
                type="text"
                registerProps={register("name", NAME)}
                errors={errors.name}
                id={"name"}
                placeholder={"User Name"}
              />
            </TextMargins>
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
              <Button onClick={handleSubmit(submitHandler)}>Register</Button>
            </div>
          </div>
        </LoginRightSide>
      </LoginDivision>
    </MainLogin>
  );
};

export default Register;
