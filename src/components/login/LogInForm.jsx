import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CustomButton from "../common/CustomButton";


const LoginForm = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
//초기값
  const initialState = {
    email: "",
    password: ""
  };


  const [login, setLogin] = useState(initialState);


  // event handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value});
  };


  const logIn_handler = async (event) => {
    // 유효성 검증 코드
    event.preventDefault();
    if ( login.email.trim() === "" || login.password.trim() === "" || login.nickname.trim() === "" ){
      return alert("모든 칸을 채워주세요!")
    };
    console.log(login)

    // const { data } = await axios.post("http://localhost:3001/login", {...login});
    const { data } = await axios.post("http://15.164.169.141:8080/auth/signup", {...login});
    
    console.log("data:",data)
    if (data.ok) {
      setLogin(initialState)
      navigate('/api/postlist')
    } else {
      setLogin(initialState)
      window.alert("무언가 잘못 되었습니다..!")
      console.log("data:",data) // 데이터는 넘어가는데, 왜 alert가 뜨는가?
    }

  };


  return (
    <StForm>
      <form>
        <div>
          <div>
            <label>아이디</label> 
            <input
              type="text"
              name="loginId"
              value={login.loginId}
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
         
          <br></br>
          <div>
            <div>
              <CustomButton
              title="회원가입"
                  onClick={() => {
                    navigate("signup");
                  }}
              />
              <CustomButton
                title="로그인"/>

                <CustomButton
                title="글 작성"
                onClick={() => {
                    navigate("create");
                  }}/>

                <CustomButton
                title="다시 작성"
                onClick={(e) => {e.preventDefault();setLogin(initialState)}}/>
            
            </div>
          </div>
        </div>
      </form>
    </StForm>
  );
};

export default LoginForm;

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