import { createReducer } from 'reduxsauce';
import { HomeTypes } from '@Redux/Actions/Home';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
};

export const getApod = (state:Object) => ({
  ...state,
  isLoading: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [HomeTypes.GET_APOD]: getApod,
});