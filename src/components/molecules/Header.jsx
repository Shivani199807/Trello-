import React from "react";

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderIconsContainer,
} from "../../styles/Header.styles";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <div>Sprint Planning</div>

        <HeaderIconsContainer onClick={login}>LogOut</HeaderIconsContainer>
      </HeaderLogoContainer>
    </HeaderContainer>
  );
};

export default Navbar;
