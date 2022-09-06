import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../lib/constants/colors";

const LikeHeart = (props) => {
  //will define props
  return (
    <LikectnWrap>
      <LikeSymbol  >❤️</LikeSymbol>
      <LikeCtnN>200{props.recommended}</LikeCtnN>
    </LikectnWrap>
  );
};

export default LikeHeart;

/*----------styled-components----------*/
const LikectnWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const heart = keyframes`
  from{
    filter: brightness(700%);
  }
  to{
    filter: brightness(100%);
  }
`;
const LikeSymbol = styled.div`

  cursor: pointer;  
  :hover {
    animation: ${heart} 0.25s linear ;
  }
`;


const LikeCtnN = styled.div`
  margin-top: 2px;
  margin-left: 6px;
  color: ${colors.black};
  font-weight: bold;
  `;
  /*----------styled-components----------*/