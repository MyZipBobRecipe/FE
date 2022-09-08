import React, { forwardRef } from "react";
import styled from "styled-components";
import DetailContainer from "../components/detail/DetailContainer";


const Detail = forwardRef((props, ref) => {
  return (
    <Background>
      <Content>
          <DetailContainer ref={ref}>
            {props.children}
          </DetailContainer>
      </Content>
    </Background>
  );
})

export default Detail;

//modal
const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const Content = styled.div`
  height: 120%;
  width: 100%;
  margin-top: 5%;
  position: relative;
  /* overflow: scroll; */
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const ModalBtn = styled.button`
// color: gray;
// `