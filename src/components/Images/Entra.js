import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Entra = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "msu.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      style={{
        height: "auto",
        width: "130px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "10px"
      }}
      objectFit="contain"
      alt="MSU logo"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

export default Entra;
