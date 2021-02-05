import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error));
    toast.error('Register error! Please try again');
  }
};

export const logIn = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error));
    toast.error('Invalid email or password!');
  }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));
    toast.error('Something went wrong! Please reload the page!');
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error));
    token.unset();
    toast.warn('Oops time is out. Log in again');
  }
};
