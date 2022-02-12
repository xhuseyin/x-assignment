import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchBrandsFailure,
  fetchBrandsSuccess
} from "../actions/brandActions";
import { postTypes } from "../actionTypes/postsTypes";

const getBrands = () =>
  axios.get<string[]>("https://getir-locals-api.herokuapp.com/brands");

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
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchBrandsSaga)]);
}

export default brandSaga;