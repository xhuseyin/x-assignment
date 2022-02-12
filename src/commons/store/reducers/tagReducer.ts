import { tagActionTypes } from "../actionTypes/tagActionTypes";
import { TagActions, TagsState } from "../types/tagTypes";

const initialState: TagsState = {
  pending: false,
  tags: [],
  error: null
};

export default (state = initialState, action: TagActions) => {
  switch (action.type) {
    case tagActionTypes.FETCH_TAG_REQUEST:
      return {
        ...state,
        pending: true
      };
    case tagActionTypes.FETCH_TAG_SUCCESS:
      return {
        ...state,
        pending: false,
        tags: action.payload.tags,
        error: null
      };
    case tagActionTypes.FETCH_TAG_FAILURE:
      return {
        ...state,
        pending: false,
        tags: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
