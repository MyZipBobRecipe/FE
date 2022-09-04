import React from "react";
import styled from "styled-components";
import { colors } from "../lib/constants/colors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";
import Post from "../components/list/Post";


const List = () => {
  const navigate = useNavigate()
  // const recipeContents = useSelector((module) => module.recipe.recipe) 
  
  return(
    <div>
      <Header />
      <BtnWrap>
          <TestBtn color={colors.black}
            onClick={() => navigate(`/api/postlist/create`)}
          >등록하기</TestBtn>
      </BtnWrap>
      <PostContainer>
        <Post /><Post /><Post /><Post />
        <Post />
      </PostContainer>
    </div>
  )
};

export default List;

const PostContainer = styled.div`
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

const BtnWrap = styled.div`
  
  height: 120px;
  /* padding: 10px; */
  margin: 4vh auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TestBtn = styled.button`
  width: 15%;
  height: 40%;
  border: none;
  border-radius: 6px;
  background-color: ${props => props.color};

  color: white;
  font-size: 1rem;
  font-weight: 900;

  &:hover{
        font-weight: 900;
        background-color: ${colors.red};
        color: white;
        cursor: pointer;
    }

  
`
