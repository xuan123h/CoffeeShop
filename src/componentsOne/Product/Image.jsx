import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Img = styled.img`
  width: 1200px;
  height: 400px;
  margin-left: 400px;
  margin-top: 100px;
`;
function Image(props) {
  return (
    <Container>
      <Img src="https://file.hstatic.net/1000075078/file/1920x768-menu-cafe-19k-tch_082c86bc9450424eb2bc1d94e79f2ead_master.jpg" />
    </Container>
  );
}
export default Image;
