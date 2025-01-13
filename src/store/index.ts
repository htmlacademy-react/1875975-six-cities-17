import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { loadOffers } from './action';
import offers from '../mocks/offers';

const store = configureStore({reducer});

store.dispatch(loadOffers(offers));

export default store;
