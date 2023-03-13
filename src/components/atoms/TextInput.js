import React, { useState } from "react";
import hide from "../../assets/hide.png";

const TextInput = ({
  type = "text",
  passIcon = false,
  errors,
  onChange,
  id,
  placeholder,
  registerProps,
  className,
}) => {
  const [inputType, setInputType] = useState(type);
  const handlePassword = () => {
    if (inputType == "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <input
          type={inputType}
          placeholder={placeholder}
          style={{ height: "35px", paddingLeft: "10px", width: "100% " }}
          className={className}
          onChange={onChange}
          id={id}
          {...registerProps}
        />

        {passIcon && (
          <img
            src={hide}
            width={"10px"}
            style={{
              width: "20px",
              maxHeight: "20px",
              position: "absolute",
              right: "0px",
              top: "35%",
            }}
            onClick={handlePassword}
          ></img>
        )}
      </div>

      {errors && <div style={{ color: "red" }}>{errors.message}</div>}
    </>
  );
};

export default TextInput;
