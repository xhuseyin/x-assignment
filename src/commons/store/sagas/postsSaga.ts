import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../models/IPost";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
  filterPostsFailure,
  filterPostsSuccess
} from "../actions/postsActions";
import { postTypes } from "../actionTypes/postsTypes";
import API_URL from '../../utilities/API_URL';

const getPosts = () =>
  axios.get<IPost[]>(API_URL + "products");

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

function* filterPostsSaga(action: any): any {   
  try {      
    const response = yield call(fetch, 'https://getir-locals-api.herokuapp.com/products' + action.payload);  
    const responseJSON = yield call(r => r.json(),response);
    console.log(action.payload)
    console.log(responseJSON)
    yield put(
      filterPostsSuccess({
        posts: responseJSON
      })
    );
  } catch (e) {
    console.log('postSAGAERROR:', e);
    yield put(
      filterPostsFailure({
        error: 'error message'
      })
    );
  }
}

function* filterSaga() {
  yield all([takeLatest(postTypes.FILTER_POST_REQUEST, filterPostsSaga)]);
}

export { postsSaga, filterSaga};


