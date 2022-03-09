import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 300px;
  width: 1770px;
  height: 752px;
`;
const Bg = styled.img`
  width: 1730px;
  height: 852px;
  position: relative;
`;
const Dao = styled.img`
  position: absolute;
  left: 0px;
  margin-top: 10px;
  width: 400px;
  margin-left: 1300px;
`;
const Title = styled.h2`
  position: absolute;
  top: 1350px;
  margin-left: 750px;
  font-size: 28px;
  color: #ffffff;
  font-family: "Montserrat Alternates", sans-serif;
`;
const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  position: absolute;
  left: 300px;
  top: 1600px;
`;
const TetOne = styled.img`
  width: 374px;
  height: 486px;
  border-radius: 10px;
`;
const TetTwo = styled.img`
  width: 374px;
  height: 486px;
  border-radius: 10px;
  margin-left: 18px;
`;
const TetThree = styled.img`
  width: 374px;
  height: 486px;
  border-radius: 10px;
  margin-left: 18px;
`;
function Tea(props) {
  return (
    <Container>
      <Bg src="https://i.vdoc.vn/data/image/2018/12/19/hinh-nen-tet-5.jpg" />
      <Dao src="https://pkmacbook.com/wp-content/uploads/2021/06/hinh-anh-canh-hoa-dao_102507124.png" />
      <Title>
        {" "}
        CHO "kHỞI ĐẦU SUNG" <br /> UỐNG TRÀ TẾT MỚI{" "}
      </Title>
      <Wrapper>
        <TetOne src="https://file.hstatic.net/1000075078/file/card_1_2x_399c07bdd9e34c5b883ac98ecc12d046.png" />
        <TetTwo src="https://file.hstatic.net/1000075078/file/card_2_2x_9820ca27cb674eefb5242d54e949a73b.png" />
        <TetThree src="https://file.hstatic.net/1000075078/file/card_3_2x_65a92d5320144d24b4b5350e2d6c7a14.png" />
      </Wrapper>
    </Container>
  );
}
export default Tea;
