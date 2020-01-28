import { all, takeLatest } from 'redux-saga/effects';
import { getApod } from './Home';
import { HomeTypes } from '@Redux/Actions/Home';

function* rootSaga() {
  yield all([
    takeLatest(HomeTypes.GET_APOD, getApod),
  ])
}

export default rootSaga;