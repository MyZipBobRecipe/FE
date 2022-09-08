import React from "react";
import styled from "styled-components";

const DetailcommentList = () => {
  return(
    <StDiv>
      <div>reply list:id</div>
      <button>댓글삭제</button>
    </StDiv>
  )
}

export default DetailcommentList;

const StDiv = styled.div`
  display: flex;
  justify-content: space-between;
`