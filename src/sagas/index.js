import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6d616eb89d9a495eb8788521f113b44a')
        .then(response => response.json(), );    
        console.log(json);
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}
function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}