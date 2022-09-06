import React from "react";
import styled from "styled-components";
import { colors } from "../../lib/constants/colors";
import LikeHeart from "../list/LikeHeart";

import Detailcomment from "./DetailComment";


const DetailContainer = () => {


  return(
    <ModalContainer>
      <ModalContentsWrap>
        <DetailCentent>
          <div>memberNikcname</div>
          <h2>title</h2>
          <LikeHeart/>         
          <BodyContainer>
            descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc
          </BodyContainer>
        </DetailCentent>
        <Detailcomment/>  
      </ModalContentsWrap>     
    </ModalContainer>
  )
}

export default DetailContainer;

const ModalContainer = styled.div`
  width: 50vw;
  height: 60vh;
  padding: 30px 5px 0px 5px;

  background-color: ${colors.warmgray};
  border: none;
  border-radius: 8px;

  font-size: 1.2rem;
`

const ModalContentsWrap = styled.div`
  margin: 50px;
  display: flex;
  justify-content: space-between;
`
const DetailCentent = styled.div`
  /* width: 100%; */
  flex-direction: row;
`

const BodyContainer = styled.p`
  /* width: 500px; */
  /* height: 200px; */
  
  
 
 
  
`