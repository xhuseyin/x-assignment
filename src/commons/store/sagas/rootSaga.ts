import { all, fork } from "redux-saga/effects";
import postsSaga from "./postsSaga";
import brandSaga from "./brandSaga";
import tagSaga from "./tagSaga";

export function* rootSaga() {
  yield all([fork(postsSaga), fork(brandSaga), fork(tagSaga)]);
}
