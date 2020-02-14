import styled from "styled-components";

export const Root = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`;

export const Container = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`;

export const Column = styled.div`
  display: block;
  text-align: center;
  justify-content: center;

  h2 {
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.125;
    font-size: 2rem !important;
  }

  h3 {
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.25rem !important;
    display: inline-flex;
    margin-bottom: 1.5rem;
    @media (max-width: 800px) {
      display: block;
    }
  }
`;

export const ExpContainer = styled.div`
  display: block;
  max-width: 900px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border-bottom: 1px solid #1c0947;
  h3 {
    margin: 15px 0px 10px 0px;
  }

  h5 {
    margin: 0px 0px 10px 0px;
  }
  p {
    margin: 0px 0px 10px 0px;
  }
  li {
    margin: 0px 0px 0px 0px;
  }
  ul {
    margin-bottom: 10px;
  }
`;
