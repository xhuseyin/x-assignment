import { brandActionTypes } from "../actionTypes/brandActionTypes";
import {
  FetchBrandsFailure,
  FetchBrandsFailurePayload,
  FetchBrandsRequest,
  FetchBrandsSuccess,
  FetchBrandsSuccessPayload
} from "../types/brandTypes";

export const fetchBrandsRequest = (): FetchBrandsRequest => ({
  type: brandActionTypes.FETCH_BRAND_REQUEST
});

export const fetchBrandsSuccess = (
  payload: FetchBrandsSuccessPayload
): FetchBrandsSuccess => ({
  type: brandActionTypes.FETCH_BRAND_SUCCESS,
  payload
});

export const fetchBrandsFailure = (
  payload: FetchBrandsFailurePayload
): FetchBrandsFailure => ({
  type: brandActionTypes.FETCH_BRAND_FAILURE,
  payload
});
