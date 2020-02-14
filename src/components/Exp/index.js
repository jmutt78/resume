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
    },
    {
      company: "USIC, Carmel, IN",
      role: "General Manager (2013 to 2015)",
      summary:
        "Managed all aspects of operations and administration, while providing oversight to contracted utility projects, services, and purchases. Inspected work sites, ensuring progress and compliance with the city’s quality standards, as well as adherence to contract terms and conditions",
      bullet: [
        "Developed a campaign focused on expanding within 3 new markets in 6 months.",
        "Propelled revenues 100% year over year (YoY)."
      ]
    },
    {
      company: "Safe Site, Loveland, CO",
      role: "VP of Operations (2005 to 2015)",
      summary:
        "Established operational procedures, envisioned long term business objectives, and clarified performance expectations; encouraging operational efficiency, quality, and accountability. Positioned the company to gain recognition as Inc 500 and Inc 5000’s Fastest Growing Private Companies in America. Secured $3M contracts, enabling rapid business expansion during an economic downturn. Encouraged staff to work collectively and effectively to achieve goals. Designed new software to replace handwritten documents, resulting in optimal productivity and minimal cost of supplies.",
      bullet: [
        "Facilitated growth of the diversified division by $2.5M dollars between 2010 to 2013.",
        "Cultivated an employee centric culture with low turnover rates."
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
