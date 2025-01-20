import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
// import { loadOffers } from './action';
import { createAPI } from '../services/api';
// import offers from '../mocks/offers';

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

// store.dispatch(loadOffers(offers));

export default store;
