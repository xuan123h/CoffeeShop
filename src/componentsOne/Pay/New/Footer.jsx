import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Logo = styled.h2``;
const FooterItem = styled.div``;
const ItemOne = styled.div``;
const AddOne = styled.li``;
const TitleOne = styled.li``;

const ItemTwo = styled.div``;
const AddTwo = styled.li``;
const TitleTwo = styled.li``;

const ItemThree = styled.div``;
const AddThree = styled.li``;
const TitleThree = styled.li``;

const ItemFor = styled.div``;
const AddFor = styled.li``;
const TitleFor = styled.li``;

const Img = styled.img``;

const Description = styled.p``;

function Footer(props) {
  return (
    <Container>
      <Logo> THE COFFEE HOUSE </Logo>
      <FooterItem>
        <ItemOne>
          <AddOne> + </AddOne>
          <TitleOne> Thông tin website </TitleOne>
        </ItemOne>
        <ItemTwo>
          <AddTwo> + </AddTwo>
          <TitleTwo> Điều khoản sử dụng </TitleTwo>
        </ItemTwo>
        <ItemThree>
          <AddThree> + </AddThree>
          <TitleThree> Hotline </TitleThree>
        </ItemThree>
        <ItemFor>
          <AddFor> + </AddFor>
          <TitleFor> Liên hệ </TitleFor>
        </ItemFor>
      </FooterItem>
      <Img src="https://order.thecoffeehouse.com/_nuxt/img/active.4cba64f.png" />
      <Description>
        {" "}
        Copyright @ 2022 The Coffee House. All rights reserved.{" "}
      </Description>
    </Container>
  );
}
export default Footer;
