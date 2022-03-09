import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Top = styled.div``;
const Icons = styled.img``;
const Title = styled.h3``;

const Bottom = styled.div``;
const BottomOne = styled.div``;
const ImgOne = styled.img``;
const TitleOne = styled.h4``;
const BottomTwo = styled.div``;
const ImgTwo = styled.img``;
const TitleTwo = styled.h4``;
const BottomThree = styled.div``;
const ImgThree = styled.img``;
const TitleThree = styled.h4``;
const BottomFor = styled.div``;
const ImgFor = styled.img``;
const TitleFor = styled.h4``;
const BottomFive = styled.div``;
const ImgFive = styled.img``;
const TitleFive = styled.h4``;

function ProductHome(props) {
  return (
    <Container>
      <Top>
        <Icons src="https://pic.trangvangvietnam.com/395740244/6v.png" />
        <Title> Sản phẩm từ Nhà </Title>
      </Top>
      <Bottom>
        <BottomOne>
          <ImgOne src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/ca-phe.png" />
          <TitleOne> Cà phê </TitleOne>
        </BottomOne>
        <BottomTwo>
          <ImgTwo src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/tra-trai-cay-tra-sua.png" />
          <TitleTwo> Trà Trái Cây - Trà Sữa </TitleTwo>
        </BottomTwo>
        <BottomThree>
          <ImgThree src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/da-xa.png" />
          <TitleThree> Đá Xay Choco - Matcha </TitleThree>
        </BottomThree>
        <BottomFor>
          <ImgFor src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/ca-phe-goi-ca-phe-uong-lien.png" />
          <TitleFor> Thưởng thức tại nhà </TitleFor>
        </BottomFor>
        <BottomFive>
          <ImgFive src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/banh-snack.png" />
          <TitleFive> Bánh - Snack </TitleFive>
        </BottomFive>
      </Bottom>
    </Container>
  );
}
export default ProductHome;
