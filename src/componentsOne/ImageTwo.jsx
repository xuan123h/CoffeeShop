import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 1770px;
  height: 580px;
  margin-top: 200px;
`;
const ImgOne = styled.img`
  width: 1170px;
  height: 234px;
`;
const ImgTwo = styled.img`
  width: 1170px;
  height: 234px;
  margin-top: 40px;
`;
const BanhTrung = styled.img`
  position: absolute;
  width: 300px;
  left: 16px;
  top: 2120px;
`;
const LiXi = styled.img`
  position: absolute;
  width: 220px;
  left: 16px;
  top: 2780px;
`;
const DuaHau = styled.img`
  position: absolute;
  width: 300px;
  right: 0px;
  top: 2680px;
`;
function ImageTwo(props) {
  return (
    <Container>
      <ImgOne src="https://file.hstatic.net/1000075078/file/3_banner_kc_eacbe53748ce426eb2941b09dc1d844a.jpg" />
      <ImgTwo src="https://file.hstatic.net/1000075078/file/4_bannercpg_55d3d37e42994ec7a5b10b80cf7a4e62.jpg" />
      <BanhTrung src="https://4.bp.blogspot.com/-ZwWyNO8CvBI/XC9nitVGUbI/AAAAAAAACy4/2LCuHz81lsg3mFCAROmQ6P_mXj3365unwCLcBGAs/s1600/BANH%2BCHUNG.png" />
      <LiXi src="https://jola.vn/cdn/720/Product/ayQZ11X61/gj0000y060001-bao-li-xi-loi-vang-24k-pnj-than-tai.png" />
      <DuaHau src="http://fujimart.vn/image/cache/catalog/rau%20cu%20qua/dua%20hau%20khac%20chu-600x315.png" />
    </Container>
  );
}
export default ImageTwo;
