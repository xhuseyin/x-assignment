import { IPost } from "../../models/IPost";
import { postTypes } from "../actionTypes/postsTypes";

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
}

export type FetchPostsSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostsFailurePayload;
};

export interface FilterPostsSuccessPayload {
  posts: IPost[];
}

export interface FilterPostsFailurePayload {
  error: string;
}

export interface FilterPostsRequest {
  type: typeof postTypes.FILTER_POST_REQUEST;
  payload: string;
}

export type FilterPostsSuccess = {
  type: typeof postTypes.FILTER_POST_SUCCESS;
  payload: FilterPostsSuccessPayload;
};

export type FilterPostsFailure = {
  type: typeof postTypes.FILTER_POST_FAILURE;
  payload: FilterPostsFailurePayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure
  | FilterPostsRequest
  | FilterPostsSuccess
  | FilterPostsFailure;
