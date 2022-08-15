import { combineReducers } from "redux";

const userListReducers = (state = {}, action) => {
  if (action.type === 'GET_DATA') {
    return action.payload;
  }

  return state;
}

export default combineReducers({
  userList: userListReducers,
});