import styled from "styled-components";
const Container = styled.div``;
const Img = styled.img`
  width: 1760px;
  height: 500px;
`;

function ImageOne(props) {
  return (
    <Container>
      <Img src="https://file.hstatic.net/1000075078/file/1_bannertong_1fab4fd2f0974751b840fc9e4b1e586c.jpg" />
    </Container>
  );
}
export default ImageOne;
