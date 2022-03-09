import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1770px;
  height: 430px;
`;
const Title = styled.h2`
  width: 1170px;
  height: 39px;
  font-size: 28px;
  color: #000000;
  font-family: "Inter", sans-serif;
  text-align: center;
  position: absolute;
  margin-left: 300px;
  margin-top: 70px;
`;
const Desc = styled.p`
  width: 1170px;
  height: 24px;
  color: #00000099;
  font-weight: bold;
  text-align: center;
  position: absolute;
  margin-top: 135px;
  margin-left: 297px;
`;
const Img = styled.img`
  width: 1170px;
  height: 234px;
  position: absolute;
  margin-top: 260px;
  left: 350px;
`;
const Tet = styled.img`
  position: absolute;
  margin-left: 700px;
`;
const Bonus = styled.img`
  position: absolute;
  left: 40px;
  margin-top: 140px;
`;
function Information(props) {
  return (
    <Container>
      <Title> Một Khởi Đầu Sung như một sự động viên chính mình </Title>
      <Desc>
        {" "}
        Sum vầy giữa gia đình, nguyện cầu Sung Túc và Sung Sức cho năm mới sắp
        sang.{" "}
      </Desc>
      <Img src="https://file.hstatic.net/1000075078/file/2_bannerlto_ver2_e9698590bc3e498cb42cef5ac0afc47f.jpg" />
      <Tet src="http://1.bp.blogspot.com/-ebkWiiPCS9k/VMO6wELmbQI/AAAAAAAAWys/UGamkI2WtA0/s1600/cau-doi-tet-2015-4.png" />
      <Bonus src="https://file.hstatic.net/1000204695/file/ong_tho_a01ced162be44053aab701acbbf99a9f_grande.png" />
    </Container>
  );
}
export default Information;
