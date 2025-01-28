import { createSlice } from '@reduxjs/toolkit';
import { DetailedOffer, OfferType } from '../../types/types';
import { NameSpace } from '../../const';
import { fetchOfferAction, fetchNearbyOffersAction } from '../api-actions';

type OfferProcess = {
  offer: DetailedOffer | null;
  isOfferLoading: boolean;
  nearbyOffers: OfferType[];
}

const initialState: OfferProcess = {
  offer: null,
  isOfferLoading: false,
  nearbyOffers: []
};

export const offerProcess = createSlice({
  name: NameSpace.DetailedOffer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
      });
  }
});
