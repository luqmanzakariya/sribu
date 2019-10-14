import {LOGIN_TRUE, LOGIN_FALSE} from '../actions'

const initialState = {
  isLogin: false
}

function loginReducers (state=initialState, action){
  switch(action.type){
    case LOGIN_TRUE:
      return { ...state, isLogin: true}
    case LOGIN_FALSE:
      return { ...state, isLogin: false}
    default:
      return state
  }
}

export default loginReducers