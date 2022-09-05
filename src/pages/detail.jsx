import React from "react";
import styled from "styled-components";
import DetailContainer from "../components/detail/DetailContainer";

const Detail = () => {

  return (
    <StDiv>
      {/* detail modal page */}
      <DetailContainer/>
    </StDiv>
  )
}

export default Detail;

const StDiv = styled.div`
  width: 100vw;
  height: 100vh;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`