import styled from "styled-components";
import React from "react";
const Container = styled.div`
  width: 1760px;
  height: 60px;
  background-color: #e57905;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  padding-top: 40px;
  padding-right: 0px;
  position: relative;
`;
const Title = styled.h3`
  position: absolute;
  top: 2px;
  margin-left: 230px;
  color: #fff;
  font-size: 18px;
  font-family: "Inter", sans-serif;
  font-style: italic;
`;
function Logo(props) {
  return (
    <Container>
      <Title> THE COFFEE SHOP HOUSE </Title>
    </Container>
  );
}
export default Logo;
