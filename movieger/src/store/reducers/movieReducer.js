import { RECEIVE_MOVIE, RECEIVE_DETAIL } from '../actions/index'

const initialState = {
  movies: [],
  details: {}
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MOVIE:
      return { ...state, movies: action.movies };
    case RECEIVE_DETAIL:
      return { ...state, details: action.details}
    default:
      return state;
  }
}

export default movieReducer;