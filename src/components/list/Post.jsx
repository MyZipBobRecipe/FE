import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../lib/constants/colors";
import { useNavigate } from "react-router-dom";

const Post = ({nickname, title, likecnt, url}) => {
  const navigate = useNavigate();

  return(
    <PostContainer>
      <PostNick onClick={() => navigate(`/api/postlist:postId`)}>닉넴{nickname}</PostNick>   
      <LikectnWrap>
        <LikeSymbol >❤️</LikeSymbol>
        <LikeCtnN>100{likecnt}</LikeCtnN>
      </LikectnWrap>
      <PostTitle onClick={() => navigate(`/api/postlist:postId`)}>타이틀{title}</PostTitle>
    </PostContainer>
  )
}

export default Post;

const PostContainer = styled.div`
width: fit-content;
height: fit-content;
padding: 20px 15px;
margin: 20px 10px;
border-radius: 7px;
border: 0.5px solid gray;
border: 0.3px solid white;
box-shadow: 0px 0px 10px 4px rgba(100, 100, 100, 0.1);

@media screen and (max-width: 900px){
    padding: 20px;
    margin: 0px;
  }
@media screen and (max-width: 600px){
    padding: 20px;
    margin: 15px;
    
  }
`

const PostNick = styled.p`
  margin-bottom: 5px;
  cursor: pointer;
`

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
`

const PostTitle = styled.h3`
  margin: 15px 0px 5px 0px;
  cursor: pointer;
`