import { createAction } from '@reduxjs/toolkit';
import { OfferType, City, SortName, UserData } from '../types/types';
import { AuthorizationStatus } from '../const';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setUserData = createAction<UserData>('user/setUserData');
export const changeCity = createAction<City>('offers/changeCity');
export const loadOffers = createAction<OfferType[]>('offers/loadOffers');
export const changeSort = createAction<SortName>('offers/changeSort');
export const isOffersLoading = createAction<boolean>('offers/loading');
