import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CustomButton from "../common/CustomButton";


const CreateForm = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
//초기값
  const initialState = {
    title: "",
    ingredient:"",
    description: ""
  };


  const [post, setPost] = useState(initialState);


  // event handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value});
  };



  return (
    <StForm>
      <form>
        <div>
          <div>
            <label>레시피 이름</label> 
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={onChangeHandler}
              maxLength="10"
            />
          </div>
          
          <div>
            <label>재료</label>
            <input
              type="text"
              name="ingredient"
              value={post.ingredient}
              onChange={onChangeHandler}
              maxLength="15"
            />
          </div>

          <div>
            <label>레시피</label>
            <input
              type="text"
              name="description"
              value={post.description}
              onChange={onChangeHandler}
              maxLength="15"
            />
          </div>
         
          <br></br>
          <div>
            <div>

                <CustomButton
                title="글 작성"
                onClick={() => {
                    navigate("/");
                  }}/>

                <CustomButton
                title="다시 작성"
                onClick={(e) => {e.preventDefault();setPost(initialState)}}/>
            
            </div>
          </div>
        </div>
      </form>
    </StForm>
  );
};

export default CreateForm;

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