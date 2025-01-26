import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSort, requireAuthorization, setUserData } from './action';
import { fetchNearbyOffersAction, fetchOfferAction, fetchOffersAction, fetchReviewsAction, loginAction, logoutAction, postCommentAction } from './api-actions';

import { City, DetailedOffer, OfferType, ReviewType, SortName, UserData } from '../types/types';
import { AuthorizationStatus, CITIES_LIST } from '../const';
import { SortOption } from '../const';

type State = {
  city: City;
  offers: OfferType[];
  sorting: SortName;
  isOffersLoading: boolean;
  offer: DetailedOffer | null;
  isOfferLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  nearbyOffers: OfferType[];
  reviews: ReviewType[];
}

const initialState: State = {
  city: CITIES_LIST[0],
  offers: [],
  sorting: SortOption.Popular,
  isOffersLoading: false,
  offer: null,
  isOfferLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  nearbyOffers: [],
  reviews: [],
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
    .addCase(fetchOfferAction.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOfferAction.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.isOfferLoading = false;
    })
    .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(postCommentAction.fulfilled, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loginAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});
