// Action Types
import axios from 'axios'
import {loadingTrue, loadingFalse} from './loading'
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'
export const RECEIVE_DETAIL = 'RECEIVE_DETAIL'

// Action Creators
export const getPopularMovie = (number) => {
  return dispatch => {
    let page = number || 1
    dispatch(loadingTrue())
    axios({
      url: `https://api.themoviedb.org/3/movie/popular?api_key=28540aa21a6ba6b0686abb4c8a82f1b5&page=${page}`,
      method: `get`,
    })
      .then(({data})=>{
        const dataMovie = data.results
        dispatch(receiveMovie(dataMovie))
        dispatch(loadingFalse())
      })
      .catch((err)=>{
        console.log(err)
        dispatch(loadingFalse())
      })
  }
}

export const searchMovieTitle = (search) => {
  return dispatch => {
    dispatch(loadingTrue())
    if (search.length >0){
      axios({
        url: `https://api.themoviedb.org/3/search/movie?api_key=28540aa21a6ba6b0686abb4c8a82f1b5&language=en-US&query=${search}`,
        method: `get`,
      })
        .then(({data})=>{
          const dataMovie = data.results
          dispatch(receiveMovie(dataMovie))
          dispatch(loadingFalse())
        })
        .catch((err)=>{
          console.log(err)
          dispatch(loadingFalse())
        })
    }
    else {
      dispatch(getPopularMovie())
    }
  }
}

export const getMovieDetails = (params) => {
  return dispatch => {
    dispatch(loadingTrue())
    axios({
      url: `https://api.themoviedb.org/3/movie/${params}?api_key=28540aa21a6ba6b0686abb4c8a82f1b5`,
      method: `get`,
    })
      .then(({data})=>{
        const movieDetails = data
        dispatch(receiveDetail(movieDetails))
        dispatch(loadingFalse())
        
      })
      .catch((err)=>{
        dispatch(loadingFalse())
        console.log(err)
      })
  }
}

export const receiveMovie = (movies) => {
  return {
    type: RECEIVE_MOVIE,
    movies
  };
};

export const receiveDetail = (details) => {
  return {
    type: RECEIVE_DETAIL,
    details
  }
}