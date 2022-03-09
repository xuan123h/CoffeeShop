import React from "react";
import styled from "styled-components";
import { FaSortDown } from "react-icons/fa";

const Container = styled.div`
  position: absolute;
  margin-left: 200px;
  margin-top: 16px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 250px;
`;
const TopOne = styled.div`
  display: flex;
  align-items: center;
`;
const IconOne = styled.img``;
const TitleOne = styled.li``;

const TopTwo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;
const IconTwo = styled.img``;
const TitleTwo = styled.li``;

const TopThree = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;
const IconThree = styled.img``;
const TitleThree = styled.li``;

const Bottom = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.h2`
  font-family: "Josefin Sans", sans-serif;
`;
const Page = styled.li`
  margin-left: 32px;
`;
const PageThree = styled.div`
  display: flex;
  align-items: center;
`;
const PageThreeTitle = styled.li``;
const PageThreeIcon = styled.li``;

const PageFor = styled.div`
  display: flex;
  align-items: center;
`;
const PageForTitle = styled.li``;
const PageForIcon = styled.li``;

function Header(props) {
  return (
    <Container>
      <Top>
        <TopOne>
          <IconOne src="https://file.hstatic.net/1000075078/file/vector_706a88566eab4f009bed6eea93cd890b.png" />
          <TitleOne> 146 Cửa hàng khắp cả nước </TitleOne>
        </TopOne>
        <TopTwo>
          <IconTwo src="https://file.hstatic.net/1000075078/file/group_8de276faa50c486b9d485826c506803b.png" />
          <TitleTwo> Đặt hàng : 1800.6963 </TitleTwo>
        </TopTwo>
        <TopThree>
          <IconThree src="https://file.hstatic.net/1000075078/file/vector_c337310f409d440f890b370ff9cefe44.png" />
          <TitleThree> Freeship từ 50.000vnd </TitleThree>
        </TopThree>
      </Top>
      <Bottom>
        <Logo> THE COFFEE SHOP HOUSE </Logo>
        <Page> Cà phê </Page>
        <Page> Trà </Page>
        <PageThree>
          <PageThreeTitle> Menu </PageThreeTitle>
          <PageThreeIcon>
            {" "}
            <FaSortDown />{" "}
          </PageThreeIcon>
        </PageThree>
        <PageFor>
          <PageForTitle> Chuyện Cà phê và Trà </PageForTitle>
          <PageForIcon>
            {" "}
            <FaSortDown />{" "}
          </PageForIcon>
        </PageFor>
        <Page> Cửa hàng </Page>
        <Page> Tuyển dụng </Page>
        <Page> Ưu đãi thành viên </Page>
      </Bottom>
    </Container>
  );
}
export default Header;
