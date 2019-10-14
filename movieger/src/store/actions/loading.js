// Action Types
export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

// Action Creators
export const loadingTrue = () => {
  return {
    type: SHOW_LOADING,
  };
}

export const loadingFalse = () => {
  return {
    type: HIDE_LOADING,
  };
}