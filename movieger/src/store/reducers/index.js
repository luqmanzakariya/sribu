import {combineReducers} from 'redux'
import movieReducers from './movieReducer'
import loadingReducers from './loadingReducers'
import loginReducers from './loginReducers'

const appReducer = combineReducers ({
  movies: movieReducers,
  loading: loadingReducers,
  isLogin: loginReducers
})

export default appReducer