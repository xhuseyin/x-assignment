import { all, fork } from "redux-saga/effects";
import postsSaga from "./postsSaga";
import brandSaga from "./brandSaga";

export function* rootSaga() {
  yield all([fork(postsSaga), fork(brandSaga)]);
}
