import { tagActionTypes } from "../actionTypes/tagActionTypes";

export interface TagsState {
  pending: boolean;
  tags: string[];
  error: string | null;
}

export interface FetchTagsSuccessPayload {
  tags: string[];
}

export interface FetchTagsFailurePayload {
  error: string;
}

export interface FetchTagsRequest {
  type: typeof tagActionTypes.FETCH_TAG_REQUEST;
}

export type FetchTagsSuccess = {
  type: typeof tagActionTypes.FETCH_TAG_SUCCESS;
  payload: FetchTagsSuccessPayload;
};

export type FetchTagsFailure = {
  type: typeof tagActionTypes.FETCH_TAG_FAILURE;
  payload: FetchTagsFailurePayload;
};

export type TagActions =
  | FetchTagsRequest
  | FetchTagsSuccess
  | FetchTagsFailure;
