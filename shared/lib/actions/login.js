import { login, logout } from '../services/login';

/////////////////////////////////////////////////////////////////////////////////// LOGIN

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginSuccess = response => ({
    type: LOGIN_SUCCESS,
    response,
});

export const loginError = error => ({
    type: LOGIN_ERROR,
    error,
});

export const doLogin = () => async (dispatch) => {
    try {
      const response = await login();
      console.log(response)
      dispatch(loginSuccess(response));
    } catch (error) {
      dispatch(loginError(error));
    }
};

/////////////////////////////////////////////////////////////////////////////////// LOGOUT

export const LOG_OUT = "LOG_OUT";

export const logoutSuccess = response => ({
    type: LOG_OUT,
    response,
});


export const doLogout = () => async (dispatch) => {
    try {
      const response = await logout();
      console.log(response)
      dispatch(logoutSuccess(response));
    } catch (error) {
      dispatch(logoutSuccess(error));
    }
};

  