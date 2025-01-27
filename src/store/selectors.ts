import { State } from '../types/state';

export const getAuthorizationStatus = (state: State) => state.authorizationStatus;
export const getUserData = (state: State) => state.userData;
export const getOfferData = (state: State) => state.offer;
export const getOfferLoadingStatus = (state: State) => state.isOfferLoading;
export const getNearbyOffers = (state: State) => state.nearbyOffers;
export const getReviews = (state: State) => state.reviews;
