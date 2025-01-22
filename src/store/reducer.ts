import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSort } from './action';
import { fetchOffersAction } from './api-actions';

import { City, OfferType, SortName } from '../types/types';
import { AuthorizationStatus, CITIES_LIST } from '../const';
import { SortOption } from '../const';

type State = {
  city: City;
  offers: OfferType[];
  sorting: SortName;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: State = {
  city: CITIES_LIST[0],
  offers: [],
  sorting: SortOption.Popular,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload;
    });
});
