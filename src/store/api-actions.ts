import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType } from '../types/types';
import { AppDispatch, State } from '../types/state';
import { ApiRoute } from '../const';
import { loadOffers } from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(ApiRoute.Offers);
    dispatch(loadOffers(data));
  },
);
