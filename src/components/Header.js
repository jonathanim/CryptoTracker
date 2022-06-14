import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  margin: 0 auto 50px auto;
  padding: 30px 20px;
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: black;
  color: #8832ff;
`;

const StyledH3 = styled.span`
  font-weight: bold;
  text-shadow: 1px 1px black;
  color: #8832ff;
  font-size: 3rem;
  padding: 0 20px;
  transition: 0.7s ease-in-out;
  border: 2px solid #8832ff;
  margin: 30px;
  &:hover {
    color: white;
    border: 2px solid white;
    border-radius: 15px;
  }
`;

const StyledLink = styled(Link)``;

const Header = () => {
  return (
    <Nav>
      <StyledLink to="/" style={{ textDecoration: "none" }}>
        <StyledH3>All</StyledH3>
      </StyledLink>

      <StyledLink to="/favorites" style={{ textDecoration: "none" }}>
        <StyledH3>favorites</StyledH3>
      </StyledLink>
    </Nav>
  );
};

export default Header;
