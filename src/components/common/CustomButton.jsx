import React from "react";
import styled from "styled-components";
import { colors } from "../../lib/constants/colors";

const CustomButton = ({ title, onClick, type }) => {
  return (
    <StButton onClick={onClick} title={title} type={type}>
      {title}
    </StButton>
  );
};

const StButton = styled.button`
  width: 100px;
  height: 30px;
  color:  ${colors.black};
  background-color: ${colors.warmgray};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 5px;
`;

export default CustomButton;