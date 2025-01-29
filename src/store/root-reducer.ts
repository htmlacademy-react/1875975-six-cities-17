import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {appProcess} from './app-process/app-process';
import {userProcess} from './user-process/user-process';
import {offersProcess} from './offers-process/offers-process';
import {offerProcess} from './offer-process/offer-process';
import {reviewsProcess} from './reviews-process/reviews-process';
import { favoritesProcess } from './favorites-process/favorites-process';


export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.DetailedOffer]: offerProcess.reducer,
  [NameSpace.Reviews]: reviewsProcess.reducer,
  [NameSpace.Favorites]: favoritesProcess.reducer,
});
