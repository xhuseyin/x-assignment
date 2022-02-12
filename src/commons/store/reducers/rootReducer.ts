import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import brandReducer from "./brandReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  brands: brandReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
