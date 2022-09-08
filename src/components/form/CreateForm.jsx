import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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
    body: ""
  };

  const [post, setPost] = useState(initialState);
  

  // event handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value});
  };

  const token = localStorage.getItem('wtw-token');

  const post_handler = async (event) => {
    // 유효성 검증 코드
    event.preventDefault();
    if ( post.title.trim() === "" || post.body.trim() === "" ){
      console.log(post)
      return alert("모든 칸을 채워주세요!")
    };
    // console.log(post)

    try {

      // "http://localhost:3001/recipies" //json-server
      const response = await axios.post("http://15.164.169.141:8080/article/", 
      { ...post },
      {
        headers: {
          Authorization: `Bearer ${token}`, //header에 담아줌
        }  
      });
      console.log("👏 Axios Work >>> ", response)
      setPost(initialState)
      
      if (response.status === 200) {

        window.alert("레시피가 등록되었습니다!")
        console.log("newPosting: ",response.data)
        navigate('/api/postlist') //go home

      } else {
        console.log("Not Ok")
        console.error(response)
        // 데이터는 넘어가는데, 왜 ok가 안되는가?
      };

    } catch (error) {
      window.alert("무엇인가 잘못되었습니다! 😱")
      console.error(error);
      setPost(initialState)    
      

    }
    
  };

  // useEffect(() => {
  //  post_handler()
   
  // },[])

  // useEffect(() => {
  //   if(token !== null){
  //     post_handler
  //   }
  // },SubmitEvent)

  return (
    <StForm>
      <form onSubmit={post_handler}>
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
          
          {/* <div>
            <label>재료</label>
            <input
              type="text"
              name="ingredient"
              value={post.ingredient}
              onChange={onChangeHandler}
              maxLength="15"
            />
          </div> */}

          <div>
            {/* <label>레시피</label> */}
            <StTextarea
              placeholder="레시피를 입력해주세요!"
              type="text"
              name="body"
              value={post.body}
              onChange={onChangeHandler}
              // maxLength="15"
            />
          </div>
         
          <br></br>
          <div>
            <div>

                <CustomButton
                title="글 작성" type="submit"
                />

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

const StTextarea = styled.textarea`
  margin-top: 20px;
  width: 350px;
  height: 150px;
  border-radius: 4px;
  ::placeholder {
      padding-top: 15px;
      color: black;
      font-size: 18px;
      text-align: center;
  }
  
`