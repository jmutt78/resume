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
      company: "Entra.io (Side Project)",
      role: "Founder (2019 to Present)",
      summary:
        "Successfully developed Entra.io in 5 months alongside two freelance developers.",
      bullet: [
        "Released our MVP in 5 months.",
        "Utilize agile for each product release."
      ],
      stack: ["React", "Node.js", "graphQL", "Next.js", "MongoDB"]
    },
    {
      company: "DocuSite",
      role: "Cofounder (2016 to 2019)",
      summary:
        "Successfully created a project management application. Managed multiple teams using the agile method.",
      bullet: [
        "Released our MVP in 3 months.",
        "Created Promo Website",
        "Managed sales and marketing teams to help achieve 5% month over month growth"
      ],
      stack: ["Angular", "PHP", "AWS", "Ionic", "MySQL"]
    }
  ];

  return (
    <Root>
      <Container>
        <Column>
          <h2>Education & Credentials</h2>
        </Column>
        {expArray.map(({ company, role, summary, bullet, stack }) => (
          <ExpContainer key={company}>
            <h3>{company}</h3>
            <h5>{role}</h5>
            <p>{summary}</p>
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
