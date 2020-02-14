import React from "react";

import ContactModal from "./ContactModal";
import Calendly from "../Calendly";

import DocuSite from "../Images/DocuSite";
import Entra from "../Images/Entra";

import {
  Root,
  StartupContainer,
  StartupColumn,
  Container,
  Column
} from "./styles";

const Startup = () => {
  const startups = [
    {
      image: <Entra />,
      title: "Bachelor of Science in Business Management ",
      body: `Metropolitan State University, Denver, Colorado `
    },
    {
      image: <DocuSite />,
      title: "Full Stack Development",
      body: `Thinkful Bootcamp`
    }
  ];
  return (
    <Root>
      <h2>Education & Trainning</h2>
      <StartupContainer style={{ width: "80%", paddingTop: "30px" }}>
        {startups.map(({ image, title, body, url, simple }) => (
          <StartupColumn key={title}>
            {image}
            <p style={{ textDecoration: "underline" }}>{title}</p>
            <p style={{ fontStyle: "italic" }}>{body}</p>
          </StartupColumn>
        ))}
      </StartupContainer>
      <Container>
        <Column>
          <h2>Interested in working together? </h2>
          <ContactModal buttonLabel=" LETS CHAT">
            <Calendly />
          </ContactModal>
        </Column>
      </Container>
    </Root>
  );
};

export default Startup;
