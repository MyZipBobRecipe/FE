import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import CreateForm from "../components/form/CreateForm";

const Create = () => {

  return (
    <StAddForm>
      <Header/>
      <CreateForm />
    </StAddForm>
  )
}

export default Create;

const StAddForm = styled.div`
  padding-top: 140px;
`;