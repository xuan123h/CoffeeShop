import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 200px;
  margin-left: 140px;
`;
const Title = styled.li``;
function Navbar(props) {
  return (
    <Container>
      <Title> Tất cả </Title>
      <br />
      <Title> Cà phê </Title>
      <br />
      <Title> Trà trái cây </Title>
      <br />
      <Title> Trà sữa Macchiato </Title>
      <br />
      <Title> Món khác </Title>
      <br />
      <Title> Bánh & Snack </Title>
      <br />
      <Title> Tại nhà </Title>
    </Container>
  );
}
export default Navbar;
