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
    if ( login.email.trim() === "" || login.password.trim() === "" ){
      
      return alert("모든 칸을 채워주세요!")
    };
    // console.log(login)

    try {

      // const { data } = await axios.post("http://localhost:3001/login", {...login});
      const response = await axios.post("http://15.164.169.141:8080/auth/login", 
      { ...login }, 
      // { withCredentials: true } 
      );

      console.log("👏 Axios Work >>> ", response)
      setLogin(initialState)
            
      
      if (response.status === 200) {

        window.alert("나의 집밥 레시피에 오신 것을 환영합니다 🎉")
        localStorage.setItem('wtw-token', response.data.accessToken)
        localStorage.setItem('nickname', response.data.nickname)
        console.log("memberLogIn: ",response.data)

        navigate('/api/postlist') //go home

      } else {
        console.log("Not Ok")
        console.error(response)
        // 데이터는 넘어가는데, 왜 ok가 안되는가?
      };

    } catch {
      window.alert("회원 정보가 없습니다 🧐")
      setLogin(initialState)    
      console.log("IntoCatch")
      

    }
    
  };


  return (
    <StForm>
      <form onSubmit={logIn_handler}>
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
         
          <br></br>
          <div>
            <div>
              <CustomButton
              title="회원가입"
                  onClick={() => {
                    navigate("/auth/signup");
                  }}
              />
              <CustomButton
                title="로그인" type="submit"
                
                />

                <CustomButton
                title="글 작성" 
                onClick={() => {
                    navigate("create");
                  }}
                  />

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