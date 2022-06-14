import React, { useContext } from "react";
import { CoinContext } from "../context/coinContext";

import { CenterDiv, Container, FlexDiv } from "../GlobalStyles";
import Card from "./Card";
const Favorites = () => {
  const { favorite } = useContext(CoinContext);

  console.log(favorite);
  return (
    <Container>
      <CenterDiv>
        <FlexDiv>
          {favorite.map((coinName, i) => {
            return <Card key={i} coinName={coinName}></Card>;
          })}
        </FlexDiv>
      </CenterDiv>
    </Container>
  );
};

export default Favorites;
