import React from "react";
import styled from "styled-components";
import Header from "../../Product/Header";
import Footer from "../../Footer";
import ProductDetailsBonus from "../../../featuresOne/ProductDetailsBonus";
import Link from "react-router-dom";

const Container = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  margin-left: 200px;
  margin-top: 180px;
`;
const Lefttop = styled.img`
  width: 500px;
  height: 500px;
`;
const Right = styled.div`
  margin-left: 820px;
  position: absolute;
  top: 185px;
`;
const Rightname = styled.h3`
  font-size: 25px;
  font-family: "Mochiy Pop P One", sans-serif;
  letter-spacing: 4px;
`;
const Rightprice = styled.p`
  color: gray;
  font-size: 22px;
  margin-top: 40px;
`;
const Rightbutton = styled.button`
  width: 350px;
  height: 40px;
  color: white;
  background-color: green;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
  }
`;
const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  margin-left: 25px;
`;
const RightOne = styled.li`
  width: 150px;
  height: 30px;
  background-color: gray;
  padding-top: 5px;
  color: black;
`;
const RightTwo = styled.li`
  width: 150px;
  height: 30px;
  background-color: gray;
  padding-top: 5px;
  color: black;
`;

const BottomOne = styled.div`
  margin-top: 50px;
  position: absolute;
  margin-left: 110px;
  font-size: 24px;
`;
const TitleOne = styled.p`
  font-family: "Poppins", sans-serif;
`;
const WrapperOne = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
`;
const One = styled.div``;
const Imgone = styled.img`
  width: 170px;
`;
const Descone = styled.li`
  width: 150px;
  font-family: "PT Sans", sans-serif;
`;
const Two = styled.div``;
const Imgtwo = styled.img`
  width: 170px;
`;
const Desctwo = styled.li`
  width: 150px;
  font-family: "PT Sans", sans-serif;
`;
const Three = styled.div``;
const Imgthree = styled.img`
  width: 170px;
`;
const Descthree = styled.li`
  width: 150px;
  font-family: "PT Sans", sans-serif;
`;

const BottomTwo = styled.div`
  position: absolute;
  margin-top: 450px;
  display: flex;
  align-items: center;
`;
const BottomLeft = styled.div`
  margin-top: 10px;
`;
const TitleLeft = styled.li`
  font-size: 24px;
`;
const DescLeft = styled.p`
  width: 500px;
  margin-left: 220px;
  font-size: 20px;
  font-family: "PT Sans", sans-serif;
`;
const BottomRight = styled.div`
  margin-left: 200px;
`;
const TitleRight = styled.li`
  font-size: 24px;
`;
const DescRight = styled.p`
  font-size: 20px;
  font-family: "PT Sans", sans-serif;
`;

const BottomThree = styled.div`
  margin-top: 700px;
`;
const Titlethree = styled.h4`
  font-size: 25px;
`;
const Productthree = styled.li``;

function Bonus(props) {
  return (
    <Container>
      <Header />
      <Top>
        <Left>
          <Lefttop src="https://product.hstatic.net/1000075078/product/bac-xiu-nong_fa679e04523c4f138354e852745b223e_master.jpg" />
        </Left>
        <Right>
          <Rightname> B???c S???u N??ng </Rightname>
          <Rightprice> 24.500 ?? </Rightprice>
          <Rightbutton> ?????t giao t???n n??i</Rightbutton>
          <WrapperRight>
            <RightOne> Mua t???i c???a h??ng </RightOne>
            <RightTwo> Mua mang ??i </RightTwo>
          </WrapperRight>
        </Right>
      </Top>
      <BottomOne>
        <TitleOne> Hay ???????c mua k??m </TitleOne>
        <WrapperOne>
          <One>
            <Imgone src="https://product.hstatic.net/1000075078/product/banhmique_683851_400x400_51f39f17da7046ff8ef76aa17c29225a_large.jpg" />
            <Descone> B??nh M?? Que Pate Cay </Descone>
          </One>
          <Two>
            <Imgtwo src="https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg" />
            <Desctwo> Croissant Tr???ng Mu???i </Desctwo>
          </Two>
          <Three>
            <Imgthree src="https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg" />
            <Descthree> Ch?? B??ng Ph?? Mai </Descthree>
          </Three>
        </WrapperOne>
      </BottomOne>
      <BottomTwo>
        <BottomLeft>
          <TitleLeft>Th??ng Tin </TitleLeft>
          <DescLeft>
            {" "}
            B???c s???u ch??nh l?? "Ly s???a tr???ng k??m m???t ch??t c?? ph??". Th???c u???ng n??y
            r???t ph?? h???p nh???ng ai v???a mu???n tr???i nghi???m ch??t v??? ?????ng c???a c?? ph??
            v???a mu???n th?????ng th???c v??? ng???t b??o ng???y t??? s???a.{" "}
          </DescLeft>
        </BottomLeft>
        <BottomRight>
          <TitleRight> C??u Chuy???n </TitleRight>
          <DescRight>
            B???c s???u ??? N??t v??n h??a ?????y t??? h??o c???a ng?????i S??i G??n
          </DescRight>
        </BottomRight>
      </BottomTwo>
      <BottomThree>
        <Titlethree> S???n ph???m li??n quan </Titlethree>
        <Productthree>
          {" "}
          <ProductDetailsBonus />{" "}
        </Productthree>
      </BottomThree>
      <Footer />
    </Container>
  );
}
export default Bonus;
// font-family: 'Poppins', sans-serif;
// font-family: 'PT Sans', sans-serif;
