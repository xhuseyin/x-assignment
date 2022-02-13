import { postTypes } from "../actionTypes/postsTypes";
import {
  FetchPostsFailure,
  FetchPostsFailurePayload,
  FetchPostsRequest,
  FetchPostsSuccess,
  FetchPostsSuccessPayload,
  FilterPostsFailure,
  FilterPostsFailurePayload,
  FilterPostsRequest,
  FilterPostsSuccess,
  FilterPostsSuccessPayload,
  
} from "../types/types";

export const fetchPostsRequest = (): FetchPostsRequest => ({
  type: postTypes.FETCH_POST_REQUEST
});

export const fetchPostsSuccess = (
  payload: FetchPostsSuccessPayload
): FetchPostsSuccess => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload
});

export const fetchPostsFailure = (
  payload: FetchPostsFailurePayload
): FetchPostsFailure => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload
});

export const filterPostsRequest = (payload: string): FilterPostsRequest => ({
  type: postTypes.FILTER_POST_REQUEST,  
  payload
});

export const filterPostsSuccess = ( payload: FilterPostsSuccessPayload): FilterPostsSuccess => ({
  type: postTypes.FILTER_POST_SUCCESS,
  payload
});

export const filterPostsFailure = (payload: FilterPostsFailurePayload): FilterPostsFailure => ({
  type: postTypes.FILTER_POST_FAILURE,
  payload
});