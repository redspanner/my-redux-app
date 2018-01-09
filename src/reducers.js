// import { combineReducers } from 'redux';

const defaultState = {
  name:'',
  email:'',
  url:'',
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_STATE":
    return {
      ...state,
      ...action.value,
    }
    default:
    return state;
  }
}

// const reducers = combineReducers({
//   //reducer names
// })

export default reducers
