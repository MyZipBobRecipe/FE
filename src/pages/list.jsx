import React from "react";
import styled from "styled-components";
import { colors } from "../lib/constants/colors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";
import Post from "../components/list/Post";




const List = () => {
  const navigate = useNavigate()
  


  
  return(
    <Listcontainer>
      <Header />
      <BtnWrap>
          <TestBtn color={colors.black}
            onClick={() => navigate(`/article`)}
          >등록하기</TestBtn>
      </BtnWrap>
      <Post/>
    </Listcontainer>
  )
};

export default List;

const Listcontainer = styled.div`
  margin: 0px auto;

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


