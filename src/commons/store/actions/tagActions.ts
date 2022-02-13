import { tagActionTypes } from "../actionTypes/tagActionTypes";
import {
  FetchTagsFailure,
  FetchTagsFailurePayload,
  FetchTagsRequest,
  FetchTagsSuccess,
  FetchTagsSuccessPayload,
  
} from "../types/tagTypes";

export const fetchTagsRequest = (): FetchTagsRequest => ({
  type: tagActionTypes.FETCH_TAG_REQUEST
});

export const fetchTagsSuccess = (
  payload: FetchTagsSuccessPayload
): FetchTagsSuccess => ({
  type: tagActionTypes.FETCH_TAG_SUCCESS,
  payload
});

export const fetchTagsFailure = (
  payload: FetchTagsFailurePayload
): FetchTagsFailure => ({
  type: tagActionTypes.FETCH_TAG_FAILURE,
  payload
});
