import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "../../../assets/Logo.svg";
import HeaderModal from "./HeaderModal";

import Calendly from "../Calendly";

import { Root, NavFlex, NavLinks, BlogLink } from "./styles";

const Header = ({ siteTitle }) => (
  <header>
    <Root>
      <NavFlex>
        <Link to="/">
          <Logo style={{ height: "80px", width: "auto" }} />
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
