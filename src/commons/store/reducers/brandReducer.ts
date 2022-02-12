import { brandActionTypes } from "../actionTypes/brandActionTypes";
import { BrandActions, BrandsState } from "../types/brandTypes";

const initialState: BrandsState = {
  pending: false,
  brands: [],
  error: null
};

export default (state = initialState, action: BrandActions) => {
  switch (action.type) {
    case brandActionTypes.FETCH_BRAND_REQUEST:
      return {
        ...state,
        pending: true
      };
    case brandActionTypes.FETCH_BRAND_SUCCESS:
      return {
        ...state,
        pending: false,
        brands: action.payload.brands,
        error: null
      };
    case brandActionTypes.FETCH_BRAND_FAILURE:
      return {
        ...state,
        pending: false,
        brands: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
