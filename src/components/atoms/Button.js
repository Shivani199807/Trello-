import React, { useState } from "react";

const Button = ({
  children,
  // endIcon,
  // startIcon,
  bgColor = "blue",
  textColor = "#ffffff",
  subButton,
  width = "100%",
  subWidth = "133px",
  customStyle,
  className = "",
  onClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <button
        type="button"
        style={{
          color: textColor,
          backgroundColor: bgColor,
          width: width,
          padding: "15px",

          className: className,
          ...customStyle,
        }}
        onMouseEnter={() => setIsExpanded(subButton ? true : false)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
