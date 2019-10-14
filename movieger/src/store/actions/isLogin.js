// Action Types
export const LOGIN_TRUE = 'LOGIN_TRUE'
export const LOGIN_FALSE = 'LOGIN_FALSE'

// Action Creators
export const loginTrue = () => {
  return {
    type: LOGIN_TRUE,
  };
}

export const loginFalse = () => {
  return {
    type: LOGIN_FALSE,
  };
}