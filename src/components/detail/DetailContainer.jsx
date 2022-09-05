import React from "react";
import styled from "styled-components";
import { colors } from "../../lib/constants/colors";

import Detailcomment from "./DetailComment";


const DetailContainer = () => {
  // {
  //   nickname:
  //   comment:
  //   }

  

  return(
    <ModalContainer>
      <div>
        <div>memberNikcname</div>
        <h2>title</h2>
        <div>
          <div>❤️</div>
          <div>99</div>
        </div>
        <div>desc</div>
      </div>
      
      <Detailcomment/>
      
    </ModalContainer>
  )
}

export default DetailContainer;

const ModalContainer = styled.div`
  width: 60vw;
  height: 40vh;
  
  padding: 50px 20px 0px 20px;

  background-color: white;
  border: 1px solid ${colors.warmgray};
  border-radius: 8px;

  display: flex;
  justify-content: space-between;


`

// const ModalContents = styled.div`
//   di
// `