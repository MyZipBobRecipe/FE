import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import logo from '../../assets/logo.svg';
import { colors } from "../../lib/constants/colors";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [nick, setNick] = useState('식객 아무개');
  const token = localStorage.getItem('wtw-token');
  const nickname = localStorage.getItem('nickname');


  

  const getNick = async () => {
    
    const response = await axios.get("http://15.164.169.141:8080/member/me", {
    headers: {
      Authorization: `Bearer ${token}`, //header에 담아줌
    }  
    });
    
    console.log("👏 Axios Work >>> ", response)
    
    console.log(nick)
  }

  useEffect(() => {
    if(token !== null){
      getNick();
      setNick(nickname);
    }
    
  },[])

  console.log(nick)

  return (
    <HeaderWrap color={colors.warmgray}>
      
      <HeaderLogo src={logo} alt="logo" onClick={() => navigate(`/api/postlist`)}/>

      <HeaderTitle color={colors.green} onClick={() => navigate(`/api/postlist`)}>나의 집밥 레시피</HeaderTitle>
      <UserWrap>
        <StUser>Welcome🙌 {nick}님</StUser>
        <UserNav onClick={() => {navigate(`/auth/signup`)}}>회원가입</UserNav>
        <UserNav onClick={() => {navigate(`/auth/login`)}}>로그인</UserNav>
      </UserWrap>
    </HeaderWrap>
  )
}

export default Header;

const HeaderWrap = styled.div`
  height: 12vh;
  width: 100%;
  min-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.color};
  @media screen and (max-width: 600px){
    display: inline-table;
    align-items: center;
    justify-content: center;
  } 
`

const HeaderLogo = styled.img`     
  height: 100%;
  margin-left: 0.7vw;
  cursor: pointer;

  @media screen and (max-width: 600px){
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  `

  const HeaderTitle = styled.h1`
  font-family: 'Dongle', sans-serif;
  font-size: 10vh; 
  color: ${props => props.color};
  cursor: default;
  
  @media screen and (max-width: 615px){
   font-size : 10vw;
   display: flex;
   align-items: center;
   justify-content: center;
  }

  @media screen and (min-height: 800px){
   font-size : 10vw;
  }
`

const UserWrap = styled.div`
  margin-right: 0.8vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px){
    margin-bottom: 20px;
  }
`

const StUser = styled.div`
  min-width: fit-content;
  margin-left: 6px;
  font-size: 0.9rem;
  cursor: default;
`
const UserNav = styled(StUser)`
  cursor: pointer;
`