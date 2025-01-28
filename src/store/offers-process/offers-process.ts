import { createSlice } from '@reduxjs/toolkit';
import { OfferType } from '../../types/types';
import { NameSpace } from '../../const';
import { fetchOffersAction } from '../api-actions';

type OffersProcess = {
  offers: OfferType[];
  isOffersLoading: boolean;
}

const initialState: OffersProcess = {
  offers: [],
  isOffersLoading: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
      });
  }
});
