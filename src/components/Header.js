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
  background-color: white;
  border: 2px solid black;
`;

const Header = () => {
  return (
    <Nav>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          padding: "20px 20px",
          fontWeight: "bold",
          color: "black",
        }}
      >
        All
      </Link>
      <Link
        to="/favorites"
        style={{
          textDecoration: "none",
          padding: "20px 20px",
          fontWeight: "bold",
          color: "black",
        }}
      >
        Favorites
      </Link>
    </Nav>
  );
};

export default Header;
