import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import brandReducer from "./brandReducer";
import tagReducer from "./tagReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  brands: brandReducer,
  tags: tagReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
