import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import HeaderModal from "./HeaderModal";
import Logo from "../Images/Logo.js";
import Calendly from "../Calendly";

import { Root, NavFlex, NavLinks, BlogLink } from "./styles";

const Header = ({ siteTitle }) => (
  <header>
    <Root>
      <NavFlex>
        <Link to="/">
          <Logo />
        </Link>
        <NavLinks>
          <HeaderModal buttonLabel="LETS CHAT">
            <Calendly />
          </HeaderModal>
        </NavLinks>
      </NavFlex>
    </Root>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
