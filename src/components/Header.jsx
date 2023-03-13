import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderInputWrapper,
  HeaderIconsContainer,
} from "../styles/Header.styles";
import logo from "../assets/trello-logo.png";
import SearchInput from "./SearchInput";

import { setSearch } from "../actions/searchActions";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <div>Sprint Planning</div>
        <HeaderInputWrapper>
          <SearchInput
            placeholder="Search cards..."
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </HeaderInputWrapper>

        <HeaderIconsContainer onClick={login}>LogOut</HeaderIconsContainer>
      </HeaderLogoContainer>
    </HeaderContainer>
  );
};

Navbar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  setSearch: bindActionCreators(setSearch, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
