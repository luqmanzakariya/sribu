import {SHOW_LOADING, HIDE_LOADING} from '../actions'

const initialState = {
  isLoading: false
}

function loadingReducers (state = initialState, action){
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, isLoading: true };
    case HIDE_LOADING:
      return { ...state, isLoading: false}
    default:
      return state;
  }
}

export default loadingReducers;