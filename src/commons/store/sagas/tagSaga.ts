import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchTagsFailure,
  fetchTagsSuccess
} from "../actions/tagActions";
import { tagActionTypes } from "../actionTypes/tagActionTypes";
import API_URL from '../../utilities/API_URL';

const getTags = () =>
  axios.get<string[]>(API_URL + "tags");

function* fetchTagsSaga(): any {
  try {
    const response = yield call(getTags);
    yield put(
      fetchTagsSuccess({
        tags: response.data
      })
    );
  } catch (e) {
    yield put(
      fetchTagsFailure({
        error: 'error message'
      })
    );
  }
}

function* tagSaga() {
  yield all([takeLatest(tagActionTypes.FETCH_TAG_REQUEST, fetchTagsSaga)]);
}

export default tagSaga;
