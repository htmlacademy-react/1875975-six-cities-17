import { createAction } from '@reduxjs/toolkit';
import { OfferType, City } from '../types/types';

export const changeCity = createAction<City>('offers/changeCity');
export const loadOffers = createAction<OfferType[]>('offers/loadOffers');
