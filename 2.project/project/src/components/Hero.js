import React from "react";
import styled, { css } from "styled-components";
import { breakAt, BreakpointsSize } from "./Breakpoints";
import PropTypes from "prop-types";

const colorYellow = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Title = styled.h1`
  position: relative;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  /* font-size: 2.5rem; */

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    background-color: ${colorYellow};
    height: 5px;
    width: 70px;
  }
  strong {
    color: ${colorYellow};
  }
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &:before {
      content: "\\2713\\0020";
      /* simbolo de checked */
      color: ${colorYellow};
    }
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointsSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointsSize.lg)} {
    width: 1140px;
    margin: 0 auto;
    padding: 0;
  }
`;

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <Container>
      <Title>{title}</Title>
      <Content>
        {children}
        <p>Matricule-se agora</p>
      </Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  // Background Image
  image: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node,
};

// Hero.defaultProps = {
//   title: "Meu título",
// };

export default Hero;
