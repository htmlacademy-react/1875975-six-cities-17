import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './action';

import { City, OfferType } from '../types/types';
import { CITIES_LIST } from '../const';

type State = {
  city: City;
  offers: OfferType[];
}

const initialState: State = {
  city: CITIES_LIST[0],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});
