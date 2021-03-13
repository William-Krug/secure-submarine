import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchStates(action) {
  console.log('*** admin.saga -> fetchStates() ***');

  try {
    let states = yield axios.get('/api/admin/states');

    yield put({
      type: 'SET_STATES',
      payload: states.data,
    });
  } catch (error) {
    alert('Wah wah');
    console.log('error:', error);
  }
}

function* fetchActivities(action) {
  console.log('*** admin.saga -> fecthActivities() ***');

  try {
    let activities = yield axios.get('/api/admin/activities');

    yield put({
      type: 'SET_ACTIVITIES',
      payload: activities.data,
    });
  } catch (error) {
    alert('Wah wah');
    console.log('error:', error);
  }
}

function* adminSaga() {
  yield takeLatest('FETCH_STATES', fetchStates);

  yield takeLatest('FETCH_ACTIVITIES', fetchActivities);
}

export default adminSaga;
