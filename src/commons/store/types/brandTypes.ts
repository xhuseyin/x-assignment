import { brandActionTypes } from "../actionTypes/brandActionTypes";

export interface BrandsState {
  pending: boolean;
  brands: string[];
  error: string | null;
}

export interface FetchBrandsSuccessPayload {
  brands: string[];
}

export interface FetchBrandsFailurePayload {
  error: string;
}

export interface FetchBrandsRequest {
  type: typeof brandActionTypes.FETCH_BRAND_REQUEST;
}

export type FetchBrandsSuccess = {
  type: typeof brandActionTypes.FETCH_BRAND_SUCCESS;
  payload: FetchBrandsSuccessPayload;
};

export type FetchBrandsFailure = {
  type: typeof brandActionTypes.FETCH_BRAND_FAILURE;
  payload: FetchBrandsFailurePayload;
};

export type BrandActions =
  | FetchBrandsRequest
  | FetchBrandsSuccess
  | FetchBrandsFailure;
