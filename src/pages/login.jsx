import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import LoginForm from "../components/login/LogInForm";

const Login = () => {
  return (
    <>
    <Header />
    <StAddForm>
      <LoginForm />
    </StAddForm>
    </>
    
  );
};

export default Login;

const StAddForm = styled.div`
  margin-top: 120px;
`;