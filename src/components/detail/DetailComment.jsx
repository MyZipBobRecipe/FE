import React from "react";
import styled from "styled-components";
import DetailcommentList from "./DetailCommentList";

const Detailcomment = () => {

  const onChangeHandler = () => {

  };

  return(
    <ReplyWrap>
      <StDiv>
        <StInput />
        <button>댓글생성</button>
        
      </StDiv>
      
      <DetailcommentList/>
      <DetailcommentList/>
      <DetailcommentList/>
    </ReplyWrap>
  )
}

export default Detailcomment;

const ReplyWrap = styled.div`
  /* overflow: scroll; */
  width: 200px;
`

const StDiv = styled.div`
  width: max-content;
  margin-bottom: 10px;
`

const StInput = styled.input`
  margin-right: 10px;
`