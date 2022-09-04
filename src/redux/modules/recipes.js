// Action Value 상수
const WANT_ACTION = 'WANT_ACTION'

// Action Creator
export const wantAction = (payload) => {
  return {
    type: WANT_ACTION,
    payload: payload,
  };
}

// default state
const initialState = {
  recipes: [
    {
    nickname: "testNickname",
    title: "testTitle",
    likecnt: parseInt(0),
    url: "testUrl",
    },
  ]
};
    
//reducer === 변화를 일으키는 함수
const recipes = (state = initialState, action) => {

  switch (action.type) {
    case WANT_ACTION:
      return {
        recipes: [...state.recipes, action.payload]
      };

      default:
        return state;
  };
};

export default recipes;