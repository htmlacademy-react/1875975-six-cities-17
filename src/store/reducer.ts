import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSort } from './action';

import { City, OfferType, SortName } from '../types/types';
import { CITIES_LIST } from '../const';
import { SortOption } from '../const';

type State = {
  city: City;
  offers: OfferType[];
  sorting: SortName;
}

const initialState: State = {
  city: CITIES_LIST[0],
  offers: [],
  sorting: SortOption.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload;
    });
});
