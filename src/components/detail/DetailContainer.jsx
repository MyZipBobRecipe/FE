import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { colors } from "../../lib/constants/colors";
import LikeHeart from "../list/LikeHeart";
import { useParams, useNavigate } from "react-router-dom";

import Detailcomment from "./DetailComment";
import CustomButton from "../common/CustomButton";



const DetailContainer = () => {



  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  // const longId = JSON.parse(id);
  const token = localStorage.getItem('wtw-token');

  // console.log("param id:", id);

  // console.log(typeof id)


  
  const getDetail = async () => {

    // const { data } = await axios.get("http://localhost:3001/recipies");
    const response = await axios.get(`http://15.164.169.141:8080/article/one?id=${id}`,{
    headers: {
      Authorization: `Bearer ${token}`, //header에 담아줌
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
            descdescdescde
          </BodyContainer>
          <BtnContainer>
          <CustomButton
                title="뒤로가기"
                onClick={() => {navigate('/api/postlist')}}/>
          </BtnContainer>
          
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

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 30px;
`