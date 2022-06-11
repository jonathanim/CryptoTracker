import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #2c2c2c;
    color: white;
}


table {
    width: 80vw;
  margin: auto 50px;
}


.li-hover:hover {
  color: white;
  background-color: "#8832ff"
}
.td-coins {
  text-align: center;
  padding: 1.5rem;
  border: 2px solid black;
  color: "#8832ff"

}

th.th-coins {
  font-size: 1.6rem;
  font-weight: bold;
  padding: 20px 12px;
  
}

.hoverTable {
  width: 100%;
  border-collapse: collapse;
  color: #8832ff;
  font-weight: bold;
  
}
.hoverTable td {
  padding: 7px;
  border: #000000 1px solid;
}

.hoverTable tr {
  background: white;
}

.hoverTable tr:hover {
  background-color: #8832ff;
  color:white;
}

.symbol-text {
  font-weight: bold;
  cursor: pointer;
}

`;

export default GlobalStyles;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;
