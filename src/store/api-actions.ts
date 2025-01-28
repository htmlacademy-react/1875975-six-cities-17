import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, DetailedOffer, OfferType, PostCommentInfo, ReviewType, UserData } from '../types/types';
import { AppDispatch, State } from '../types/state';
import { ApiRoute } from '../const';

export const fetchOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(ApiRoute.Offers);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(ApiRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
  },
);

export const fetchOfferAction = createAsyncThunk<DetailedOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffer',
  async (id, {extra: api}) => {
    const {data} = await api.get<DetailedOffer>(`${ApiRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<OfferType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchNearbyOffers',
  async (id, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${ApiRoute.Offers}/${id}${ApiRoute.Nearby}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${ApiRoute.Comments}/${id}`);
    return data;
  },
);

export const postCommentAction = createAsyncThunk<ReviewType, PostCommentInfo, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/postComment',
  async ({id, comment}, {extra: api}) => {
    const {data} = await api.post<ReviewType>(`${ApiRoute.Comments}/${id}`, {rating: comment.rating, comment: comment.comment});
    return data;
  },
);
