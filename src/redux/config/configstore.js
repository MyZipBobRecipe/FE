import { createStore } from "redux";
import { combineReducers } from "redux";
import recipes from '../modules/recipes';

const rootReducer = combineReducers({
  recipes: recipes,
});
const store = createStore( rootReducer );

export default store;