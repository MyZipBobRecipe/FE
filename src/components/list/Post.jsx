import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { colors } from "../../lib/constants/colors";
import { useNavigate } from "react-router-dom";

const Post = ({nickname, title, likecnt}) => {

  const navigate = useNavigate();
  const [recipies, setRecipies] = useState(null);

  // axios를 통해 get 요청을 하는 함수 예제
  // 비동기처리를 위해 async/await 사용.
  const fetchRecipies = async () => {
    const { data } = await axios.get("http://localhost:3001/recipies");
    setRecipies( data ); // 서버로부터 fetching한 데이터를 useState의 state로 set
  }

  // 생성한 함수를 컴포넌트가 mount 됐을 때 실행하기 위해 useEffect 사용.
  useEffect(() => {
    // effect구분에 생성한 함수를 넣어 실행
    fetchRecipies();
  }, [])
  
  console.log(recipies)

  return(
    <PostContainer>
      <PostNick onClick={() => navigate(`/api/postlist:postId`)}>닉넴{nickname},</PostNick>   
      <PostTitle onClick={() => navigate(`/api/postlist:postId`)}>타이틀{title},</PostTitle>
      <LikectnWrap>
        <LikeSymbol >❤️</LikeSymbol>
        <LikeCtnN>100{likecnt}</LikeCtnN>
      </LikectnWrap>
      
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