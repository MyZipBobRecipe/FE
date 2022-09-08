import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { colors } from "../../lib/constants/colors";
import LikeHeart from "../list/LikeHeart";

import Detailcomment from "./DetailComment";


const DetailContainer = ({item}) => {

  const [detail, setDetail] = useState([]);

  const getDetail = async () => {

    // const { data } = await axios.get("http://localhost:3001/recipies");
    const response = await axios.get(`http://15.164.169.141:8080/article/long?id=${item.articleId}`,{
    headers: {
      Authorization: `Bearer ${response.accessToken}`, //header에 담아줌
    }  
    });
    
    console.log("👏 Axios Work >>> ", response)
    setDetail( response.data ); // 서버로부터 get
    console.log(detail)
  
  
  
  
  }

  useEffect(() => {
    getDetail();
  }, [])


  return(
    <ModalContainer>
      <ModalContentsWrap>


        <DetailCentent>
          <div>{detail.memberNikcname}</div>
          <h2>{detail.title}</h2>
          <LikeHeart/>         
          <BodyContainer>
            {detail.body}
            descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc
          </BodyContainer>
        </DetailCentent>
        <Detailcomment/>  


      </ModalContentsWrap>     
    </ModalContainer>
  )
}

export default DetailContainer;

const ModalContainer = styled.div`
  width: 50vw;
  height: 60vh;
  padding: 30px 5px 0px 5px;

  background-color: ${colors.warmgray};
  border: none;
  border-radius: 8px;

  font-size: 1.2rem;

  
`

const ModalContentsWrap = styled.div`
  margin: 50px;
  display: flex;
  justify-content: space-between;
`
const DetailCentent = styled.div`
  /* width: 100%; */
  flex-direction: row;
`

const BodyContainer = styled.p`
  /* width: 500px; */
  /* height: 200px; */
  
  
 
 
  
`