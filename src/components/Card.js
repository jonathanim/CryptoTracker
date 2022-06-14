import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 2px solid #8832ff;
  margin: 20px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 3px white;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: white;
    border: 2px solid white;
    box-shadow: 2px 1px #8832ff;
  }
`;

const StyledLink = styled(Link)`
  color: #8832ff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px black;
  text-decoration: none;
  padding: 10px;
  display: flex;
`;

const Card = ({ coinName }) => {
  const [coinInfo, setCoinInfo] = useState({});

  useEffect(() => {
    fetchData(coinName);
  }, []);

  const fetchData = async (name) => {
    let result = await fetch(`https://api.coincap.io/v2/assets/${name}`);
    let data = await result.json();
    console.log(data.data);
    setCoinInfo(data.data);
  };

  if (coinInfo) {
    return (
      <CardWrapper>
        <StyledLink to={`/ticker/${coinName}`}>
          <div>
            {coinInfo.name} / <span style={{ color: "orange" }}>Rank:</span>{" "}
            {coinInfo.rank}
          </div>
        </StyledLink>
      </CardWrapper>
    );
  }
  return <div>Loading</div>;
};

export default Card;
