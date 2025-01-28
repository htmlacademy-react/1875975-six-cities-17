import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewType } from '../../types/types';
import { fetchReviewsAction, postCommentAction } from '../api-actions';

type ReviewsProcess = {
  reviews: ReviewType[];
}

const initialState: ReviewsProcess = {
  reviews: [],
};

export const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
  }
});
