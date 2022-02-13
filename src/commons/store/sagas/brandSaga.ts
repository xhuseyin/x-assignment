import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchBrandsFailure,
  fetchBrandsSuccess
} from "../actions/brandActions";
import { brandActionTypes } from "../actionTypes/brandActionTypes";
import API_URL from '../../utilities/API_URL';

const getBrands = () =>
  axios.get<string[]>( API_URL + "brands");

function* fetchBrandsSaga(): any {
  try {
    const response = yield call(getBrands);
    yield put(
      fetchBrandsSuccess({
        brands: response.data
      })
    );
  } catch (e) {
    yield put(
      fetchBrandsFailure({
        error: 'error message'
      })
    );
  }
}

function* brandSaga() {
  yield all([takeLatest(brandActionTypes.FETCH_BRAND_REQUEST, fetchBrandsSaga)]);
}

export default brandSaga;
