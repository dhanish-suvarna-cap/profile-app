import axios from "axios";
import { takeEvery, put, call, all } from "redux-saga/effects";
import { getUsersFailure, getUsersSuccess } from "./users/usersAction";
import { FETCH_USERS_REQUEST } from "./users/usersType";

const getUsers = () => {
  return axios.get("https://dummyjson.com/users").then((res) => res.data.users);
};

function* workGetUsers() {
  try {
    const users = yield call(getUsers);
    yield put(getUsersSuccess(users));
  } catch (error) {
    yield put(getUsersFailure(error.message));
  }
}

function* watchGetUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, workGetUsers);
}

export default function* rootSaga() {
  yield all([watchGetUsers()]);
}
