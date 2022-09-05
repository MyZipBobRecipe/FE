import React from "react";
import styled from "styled-components";
import DetailcommentList from "./DetailCommentList";

const Detailcomment = () => {
  return(
    <div>
      <StDiv>
        <StInput />
        <button>댓글생성</button>
        
      </StDiv>
      
      <DetailcommentList/>
      <DetailcommentList/>
      <DetailcommentList/>
    </div>
  )
}

export default Detailcomment;

const StDiv = styled.div`
  margin-bottom: 10px;
`

const StInput = styled.input`
  margin-right: 10px;
`