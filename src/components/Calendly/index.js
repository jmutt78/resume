import React from "react";
import styled from "styled-components";

import Mail from "../../../assets/mail.svg";
import Github from "../../../assets/github.svg";
import ProductHunt from "../../../assets/product-hunt.svg";
import Linkin from "../../../assets/linkedin.svg";
import Twitter from "../../../assets/twitter.svg";
import Logo from "../Images/Logo.js";

import {
  Container,
  ImageContainer,
  SocialContainer
} from "../Footer/styles.js";

export const Root = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const socialIcon = [
  {
    image: <Mail />,
    url: "mailto:justinmcintosh7897@gmail.com",
    alt: "email icon"
  },
  {
    image: <Github />,
    url: "https://github.com/jmutt78",
    alt: "github icon"
  },
  {
    image: <ProductHunt />,
    url: "https://www.producthunt.com/@justinmcintoshs",
    alt: "product hunt icon"
  },
  {
    image: <Linkin />,
    url: "https://www.linkedin.com/in/justin-mcintosh-45897833/",
    alt: "Linkedin icon"
  },
  {
    image: <Twitter />,
    url: "https://twitter.com/JustinMcIntoshs",
    alt: "twitter icon"
  }
];
class Calendly extends React.Component {
  render() {
    return (
      <Root>
        <Container>
          <h2>Justin McIntosh</h2>
          <h2>970-371-3508</h2>
          <SocialContainer>
            {socialIcon.map(({ image, url, alt }) => (
              <div key={url}>
                <a href={url} alt={alt}>
                  {image}
                </a>
              </div>
            ))}
          </SocialContainer>
        </Container>
      </Root>
    );
  }
}

export default Calendly;
