import { combineReducers } from 'redux';

const states = (state = [], action) => {
  switch (action.type) {
    case 'SET_STATES':
      return action.payload;
    default:
      return state;
  }
};

const activities = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVITIES':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  states,
  activities,
});
