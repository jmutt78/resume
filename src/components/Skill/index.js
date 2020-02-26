import React from "react";

import WebCoding from "../../../assets/web-coding.svg";
import Concept from "../../../assets/concept.svg";

import { Root, Column, BoxLeft, BoxRight, BoxContainer } from "./styles";

export default () => (
  <Root>
    <Column>
      <BoxContainer>
        <BoxLeft>
          <WebCoding
            style={{ height: "80px", width: "auto", marginBottom: "20px" }}
          />
          <h3>Full-Stack Developer</h3>

          <p className="p-title">Stack:</p>
          <ul>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>React</li>
            <li>Node.js</li>
            <li>graphQl</li>
            <li>Gatsby</li>
            <li>Next.js</li>
          </ul>
        </BoxLeft>
        <BoxRight>
          <Concept
            style={{ height: "80px", width: "auto", marginBottom: "20px" }}
          />
          <h3>Business</h3>

          <p className="p-title">Expertise:</p>
          <ul>
            <li>Leadership</li>
            <li>Operations</li>
            <li>Flexable</li>
            <li>Process Improvement</li>
            <li>Project Management </li>
            <li>Product Management</li>
            <li>Meeting Deadlines</li>
          </ul>
        </BoxRight>
      </BoxContainer>
    </Column>
  </Root>
);

//
// <p className="p-title">Industries:</p>
// <p>Tech, Retail, Construction</p>
//
// <p className="p-title">Languages:</p>
// <p>React, Javascript, HTML/CSS, React Native</p>
