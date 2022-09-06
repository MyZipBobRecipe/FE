import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CustomButton from "../common/CustomButton";


const SignUpForm = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
//초기값
  const initialState = {
    email: "",
    password: "",
    nickname: ""
  };


  const [login, setLogin] = useState(initialState);

  // const [login, setLogin] = useState([]);

  // event handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value});
  };

  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  //   if ( login.email.trim() === "" || login.password.trim() === "" || login.nickname.trim() === "" ){
  //     return alert("모든 칸을 채워주세요!") //alert 왜 안 뜰까?
  //   };
  //   console.log(login)
  //   axios.post("http://localhost:3001/login", {...login})
  //   // axios.post("http://15.164.169.141:8080/auth/signup", {...login})
    
  //   setLogin(initialState)
  //   navigate('/api/postlist')
  // };


  const signUp_handler = async (event) => {
    // 유효성 검증 코드
    event.preventDefault();
    if ( login.email.trim() === "" || login.password.trim() === "" || login.nickname.trim() === "" ){
      return alert("모든 칸을 채워주세요!")
    };
    console.log(login)
    // const { data } = await axios.post("http://localhost:3001/login", {...login});
    const { data } = await axios.post("http://15.164.169.141:8080/auth/signup", {...login});

    if (data.ok) {
      setLogin(initialState)
      navigate('/api/postlist')
    } else {
      window.alert("무언가 잘못 되었습니다..!")
    }

  };



  return (
    <StForm>
      {/* <form onSubmit={onSubmitHandler}> */}
      <form onSubmit={signUp_handler}>
        <div>
          <div>
            <label>아이디</label> 
            <input
              type="text"
              name="email"
              value={login.email}
              onChange={onChangeHandler}
              maxLength="10"
            />
          </div>
          
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={onChangeHandler}
              maxLength="15"
            />
          </div>

          <div>
            <label>닉네임</label>
            <input
              type="text"
              name="nickname"
              value={login.nickname}
              onChange={onChangeHandler}
              maxLength="15"
            />
          </div>
         
          <br></br>
          <div>
            <div>
              <CustomButton
              title="가입하기" type="submit"
              
              />
            </div>
          </div>
        </div>
      </form>
    </StForm>
  );
};

export default SignUpForm;

const StForm = styled.div`
  margin: 50px auto;
  padding-top: 50px;
  border: 1px solid gray;
  border-radius: 15px;
  width: 400px;
  height: 300px;
  font-size: 18px;
  text-align: center;
`;