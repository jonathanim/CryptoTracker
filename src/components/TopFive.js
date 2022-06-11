import React from "react";
import { CenterDiv, Container } from "../GlobalStyles";
import styled from "styled-components";
import { useContext } from "react";
import { CoinContext } from "../context/coinContext";
import { Link } from "react-router-dom";

const SmallWrapper = styled.div`
  height: 200px;
  width: 80vw;
  text-align: center;
  border: 2px solid white;
`;

const TopFive = () => {
  const { topFive } = useContext(CoinContext);
  return (
    <Container>
      <CenterDiv>
        <SmallWrapper>
          <h1>Top Five</h1>
          <ul style={{ listStyleType: "none" }}>
            {topFive.map((item, i) => {
              return (
                <Link
                  to={`/ticker/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "#8832ff",
                  }}
                >
                  <li className="li-hover" key={item.id}>
                    {item.id.toUpperCase()}
                  </li>
                </Link>
              );
            })}
          </ul>
        </SmallWrapper>
      </CenterDiv>
    </Container>
  );
};

export default TopFive;
