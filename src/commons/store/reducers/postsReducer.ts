import { postTypes } from "../actionTypes/postsTypes";
import { PostsActions, PostsState } from "../types/types";

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null
};

export default (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null
      };
    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error
      };
      case postTypes.FILTER_POST_REQUEST:
        return {
          ...state,
          query: action.payload,
          pending: true
        };
      case postTypes.FILTER_POST_SUCCESS:
        return {
          ...state,
          pending: false,
          posts: action.payload.posts,
          error: null
        };
      case postTypes.FILTER_POST_FAILURE:
        return {
          ...state,
          pending: false,
          posts: [],
          error: action.payload.error
        };      
    default:
      return {
        ...state
      };
  }
};
