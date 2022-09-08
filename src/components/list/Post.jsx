import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { colors } from "../../lib/constants/colors";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Post = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();



  const [post, setPost] = useState([]);

  // // axios를 통해 get 요청을 하는 함수 예제
  // // 비동기처리를 위해 async/await 사용.
  const fetchPost = async () => {

    // const { data } = await axios.get("http://localhost:3001/recipies");
    const { data } = await axios.get("http://15.164.169.141:8080/article/page?page=1");
    // console.log(data.content)

    setPost( data.content ); // 서버로부터 fetching한 데이터를 useState의 state로 set
  }

  // 생성한 함수를 컴포넌트가 mount 됐을 때 실행하기 위해 useEffect 사용.
  useEffect(() => {
    // effect구분에 생성한 함수를 넣어 실행
    fetchPost();
  }, [])
  

  


  return(
    <PostLayout>
      {/* <PostNick onClick={() => navigate(`/api/postlist:postId`)}>닉넴{nickname},</PostNick>    */}
      
      {post.map((item, index) => {
        return(
          <PostContainer key={item.articleId} onClick={() => navigate(`/api/postlist:${item.articleId}`)}>
            <PostNick>{item.memberNickname}</PostNick>
            <PostTitle >{item.articleTitle}</PostTitle>
            <LikectnWrap>
              <LikeSymbol  >❤️</LikeSymbol>
              {/* <LikeCtnN>{item.recommended}</LikeCtnN> */}
              <LikeCtnN>{item.createdAt}</LikeCtnN> {/* test */}
            </LikectnWrap>
          </PostContainer>
        )
      })}
      
    </PostLayout>
  )
}

export default Post;


/*----------styled-components----------*/
const PostLayout = styled.div`
  width: 95%;
  margin: auto;
  
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  
  @media screen and (max-width: 900px){
    /* width: 80%; */
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 40px;
  }

  @media screen and (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 5px;
  } 
`

const PostContainer = styled.div`
min-width: fit-content;
height: fit-content;
padding: 20px 15px;
margin: 20px 10px;
border-radius: 7px;
border: 0.5px solid gray;
border: 0.3px solid white;
box-shadow: 0px 0px 10px 4px rgba(100, 100, 100, 0.1);
/* background-color: ${colors.yellow}; */

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
/*----------styled-components----------*/