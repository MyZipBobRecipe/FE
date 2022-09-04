import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CustomButton from "../common/CustomButton";


const SignUpForm = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
//초기값
  const initialState = {
    loginId: "",
    password:"",
    nickname:""
  };


  const [login, setLogin] = useState(initialState);


  // event handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value});
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
              title="가입하기"
                  onClick={() => {
                    navigate("/");
                  }}
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