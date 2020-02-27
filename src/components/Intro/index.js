import React from "react";

import Profile from "../Images/Profile.js";
import Purple from "../../../assets/Purple.svg";

import {
  Root,
  Container,
  Column,
  ImageContainer,
  SVGContainer
} from "./styles";

export default () => (
  <SVGContainer>
    <Root>
      <Container>
        <ImageContainer>
          <Profile />
        </ImageContainer>
        <Column>
          <h1>Full Stack Developer</h1>

          <h2>
            I build beautiful functional websites and products for businesses
            because I love them.
          </h2>
        </Column>
      </Container>
    </Root>
    <Purple />
  </SVGContainer>
);
