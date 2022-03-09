import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Left = styled.div``;
const LeftOne = styled.img``;
const LeftTwo = styled.div``;
const LeftTwoH2 = styled.h2``;
const LeftTwoP = styled.p``;

const Right = styled.div``;
const RightOne = styled.img``;
const RightTwo = styled.img``;

const Logo = styled.h2``;
const Navbar = styled.div``;
const NavbarItem = styled.li``;

function Header(props) {
  return (
    <Container>
      <Logo> THE COFFEE HOUSE </Logo>
      <Left>
        <LeftOne src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" />
        <LeftTwo>
          <LeftTwoH2> Giao hàng </LeftTwoH2>
          <LeftTwoP> Tại : Nhập địa chỉ giao hàng </LeftTwoP>
        </LeftTwo>
      </Left>
      <Navbar>
        <NavbarItem> Đặt hàng </NavbarItem>
        <NavbarItem> Tin tức </NavbarItem>
        <NavbarItem> Cửa hàng </NavbarItem>
        <NavbarItem> Khuyến mãi </NavbarItem>
        <NavbarItem> Tuyển dụng </NavbarItem>
      </Navbar>
      <Right>
        <RightOne src="https://order.thecoffeehouse.com/_nuxt/img/Login.70dc3d8.png" />
        <RightTwo src="https://order.thecoffeehouse.com/_nuxt/img/Carticon.373916c.png" />
      </Right>
    </Container>
  );
}
export default Header;
