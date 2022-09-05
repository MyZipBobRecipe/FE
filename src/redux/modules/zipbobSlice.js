import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  member: [
    {
      id: 1,
      nickname: "",
      password: "",
      email: "",
      exPassword: "",
      newPassWord: "",      
    },
  ],
  article: [
    {
      id: 1, 
      title: "",
      body: "",
      rcommended: "",
    }
  ]
};

// Reducer | Action Creater | Action Value
export const zipbobSlice = createSlice({
  name: "zipbob", // 이 모듈의 이름
  initialState, // 이 모듈의 초기상태 값
  reducers: { // 이 모듈의 Reducer 로직
    addMember: (state, action) => {
      state.member = state.member + action.payload //작동하는 함수인지 확인 필요!
    },

    addArticle: (state, action) => {
      state.article = state.article + action.payload //작동하는 함시인지 확인 필요!
    },

  },
});

export const { addArticle, addMember } = zipbobSlice.actions
export default zipbobSlice.reducer
