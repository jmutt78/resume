import React from "react";

import Calendly from "../Calendly";

import Idea from "../../../assets/idea.svg";
import System from "../../../assets/innovation.svg";
import Problem from "../../../assets/workflow.svg";
import Organize from "../../../assets/man.svg";

import { Root, Container, Column, ExpContainer } from "./styles";

const Exp = () => {
  const expArray = [
    {
      company: "Entra.io",
      role: "Full Stack Developer (2019 to Present)",
      summary:
        "Successfully developed Entra.io in 5 months alongside two freelance developers.",
      bullet: [
        "Used agile processes to release the flagship MVP product in 5 months, 2 months ahead of schedule.",
        "Developed a responsive website with an easy-to-use interface, targeting an audience with limited technology experience.",
        "Developed a web-based text editor using Draft.js.",
        "Wrote unit test plans, conducting sandbox build testing and tracking issues to closure"
      ],
      stack: ["React", "Node.js", "graphQL", "Next.js", "MongoDB"]
    },
    {
      company: "DocuSite",
      role: "Web Developer (2016 to 2019)",
      summary:
        "Successfully created a project management application. Managed multiple teams using the agile method.",
      bullet: [
        "Created a wide range of deliverables, including a project management application, an MVP, and a promotional website.",

        "Prepared and executed test plans, identifying and tracking debug issues."
      ],
      stack: ["Angular", "PHP", "AWS", "Ionic", "MySQL"]
    },
    {
      company: "USIC, Carmel, IN",
      role: "General Manager (2013 to 2015)",
      summary:
        "Managed all aspects of operations and administration, while providing oversight to contracted utility projects, services, and purchases. Inspected work sites, ensuring progress and compliance with the city’s quality standards, as well as adherence to contract terms and conditions",
      bullet: [
        "Provided oversight to contracted projects, services, and purchases, inspecting work sites for progress, quality, and contractual compliance",
        "Developed a market expansion campaign, growing year-over-year revenues 100%."
      ]
    },
    {
      company: "Safe Site, Loveland, CO",
      role: "VP of Operations (2005 to 2015)",
      summary:
        "Established operational procedures, envisioned long term business objectives, and clarified performance expectations; encouraging operational efficiency, quality, and accountability. Positioned the company to gain recognition as Inc 500 and Inc 5000’s Fastest Growing Private Companies in America. Secured $3M contracts, enabling rapid business expansion during an economic downturn. Encouraged staff to work collectively and effectively to achieve goals. Designed new software to replace handwritten documents, resulting in optimal productivity and minimal cost of supplies.",
      bullet: [
        "Established operational procedures, performance criteria, and business objectives. ",
        "Encouraged a collaborative team environment, cultivating an employee-centric culture with low turnover.",
        "Implemented digital automation to replace manual hardcopy workflows."
      ]
    }
  ];

  return (
    <Root>
      <Container>
        <Column>
          <h2>Work Experience</h2>
        </Column>
        {expArray.map(({ company, role, summary, bullet, stack }) => (
          <ExpContainer key={company}>
            <h3>{company}</h3>
            <h5>{role}</h5>
            <ul>
              {bullet.map(bullet => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div>
              {stack && (
                <div>
                  <h5>Stack</h5>
                  <ul>
                    {stack.map(stack => (
                      <li key={stack}>{stack}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </ExpContainer>
        ))}
      </Container>
    </Root>
  );
};

export default Exp;
