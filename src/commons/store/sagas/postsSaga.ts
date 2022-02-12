import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../models/IPost";
import {
  fetchPostsFailure,
  fetchPostsSuccess
} from "../actions/postsActions";
import { postTypes } from "../actionTypes/postsTypes";

const getPosts = () =>
  axios.get<IPost[]>("https://getir-locals-api.herokuapp.com/products");

function* fetchPostsSaga(): any {
  try {
    const response = yield call(getPosts);
    yield put(
      fetchPostsSuccess({
        posts: response.data
      })
    );
  } catch (e) {
    yield put(
      fetchPostsFailure({
        error: 'error message'
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
