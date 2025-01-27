import { State } from '../types/state';

export const getAuthorizationStatus = (state: State) => state.authorizationStatus;
export const getUserData = (state: State) => state.userData;
export const getOfferData = (state: State) => state.offer;
export const getOfferLoadingStatus = (state: State) => state.isOfferLoading;
export const getOffers = (state: State) => state.offers;
export const getOffersLoadingStatus = (state: State) => state.isOffersLoading;
export const getNearbyOffers = (state: State) => state.nearbyOffers;
export const getReviews = (state: State) => state.reviews;
export const getActiveCity = (state: State) => state.city;
export const getCurrentSorting = (state: State) => state.sorting;
