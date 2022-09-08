import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/signup/SignUpForm";
import Header from "../components/common/Header";

const Signup = () => {
  return (
    <>
      <Header />
      <StAddForm>
      < SignUpForm />
      </StAddForm>
    </>
    
  );
};

export default Signup;

const StAddForm = styled.div`
  padding-top: 70px;
`;