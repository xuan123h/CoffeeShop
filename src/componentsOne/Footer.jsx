import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1766px;
  height: 292px;
  background-color: #000000;
  margin-top: 400px;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperOne = styled.div``;
const TopOne = styled.h3`
  color: #ffffff;
  margin-left: 300px;
`;
const One = styled.li`
  color: #ffffff;
  margin-left: 300px;
  margin-top: 15px;
`;

const WrapperTwo = styled.div``;
const TopTwo = styled.h3`
  color: #ffffff;
  margin-left: 200px;
  position: absolute;
  top: 0px;
`;
const Two = styled.li`
  color: #ffffff;
  margin-left: 180px;
  margin-top: 20px;
`;

const WrapperThree = styled.div``;
const ThreeOne = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  position: absolute;
  margin-left: 180px;
  top: 20px;
`;
const IconOne = styled.img``;
const TitleOne = styled.li``;
const ThreeTwo = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  position: absolute;
  margin-left: 180px;
  top: 90px;
`;
const IconTwo = styled.img``;
const TitleTwo = styled.li``;
const Three = styled.li`
  color: #ffffff;
  margin-left: 160px;
  margin-top: 120px;
`;

const WrapperFor = styled.div`
  color: #ffffff;
  position: absolute;
  margin-left: 1300px;
  top: 20px;
`;
const Logo = styled.div`
  margin-top: 20px;
  font-size: 28px;
  font-family: "Inter", sans-serif;
`;
const IconFor = styled.img`
  margin-left: 10px;
`;

const ImgBonus = styled.img`
  position: absolute;
  margin-left: 1500px;
  margin-top: 130px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  border: 13px solid gray;
`;

function Footer(props) {
  return (
    <Container>
      <Wrapper>
        <WrapperOne>
          <TopOne> Giới thiệu </TopOne>
          <One> Về Chúng Tôi </One>
          <One> Sản phẩm </One>
          <One> Khuyến mãi </One>
          <One> Chuyện cà phê </One>
          <One> Cửa Hàng </One>
          <One> Tuyển dụng </One>
        </WrapperOne>
        <WrapperTwo>
          <TopTwo> Điều khoản </TopTwo>
          <Two> Điều khoản sử dụng </Two>
          <Two> Quy tắc bảo mật </Two>
        </WrapperTwo>
        <WrapperThree>
          <ThreeOne>
            <IconOne src="https://file.hstatic.net/1000075078/file/phone_0a42df1c753c4fa0910108daa73fe2ef.png" />
            <TitleOne> Đặt hàng: 1800 6936 </TitleOne>
          </ThreeOne>
          <ThreeTwo>
            <IconTwo src="https://file.hstatic.net/1000075078/file/map-pin-2-line_575ccb91b6f94a308d1bd507d4ae72a7.png" />
            <TitleTwo> Liên hệ </TitleTwo>
          </ThreeTwo>
          <Three>
            {" "}
            Tầng 3-4 Hub Building <br /> 195/10E Điện Biên Phủ,P.15 , <br />{" "}
            Q.Bình Thạnh, TP.Hồ Chí Minh{" "}
          </Three>
        </WrapperThree>
        <WrapperFor>
          <IconFor src="https://file.hstatic.net/1000075078/file/test_fd4e30831d14438f9d0f1fcf255dfadb.svg" />
          <IconFor src="https://file.hstatic.net/1000075078/file/test_db37bb3840ac45f3a0a3cf7aa8a57d9e.svg" />
          <Logo> The Coffee Shop House </Logo>
        </WrapperFor>
        <ImgBonus src="https://file.hstatic.net/1000075078/file/customer-service-line_2x_e5acb85c9abd40a2a95f2bf1f7253f05.png" />
      </Wrapper>
    </Container>
  );
}
export default Footer;
