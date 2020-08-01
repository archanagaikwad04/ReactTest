import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchUsers() {
  const json = yield fetch('https://api.github.com/users')
        .then(response => response.json(), );    
  yield put({ type: "USER_RECEIVED", json: json.articles, });
}
function* actionWatcher() {
     yield takeLatest('GET_USER', fetchUsers)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}