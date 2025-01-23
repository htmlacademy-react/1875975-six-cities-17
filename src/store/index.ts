import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { checkAuthAction, fetchOffersAction } from './api-actions';
import { createAPI } from '../services/api';

export const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

export default store;
