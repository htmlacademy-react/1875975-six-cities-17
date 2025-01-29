import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getFavoriteOffers = (state: State) => state[NameSpace.Favorites].favoriteOffers;
export const getFavoriteLoadingStatus = (state: State) => state[NameSpace.Favorites].isFavoriteLoading;
export const getFavoriteStatusById = (state: State, id: string) => state[NameSpace.Favorites].favoriteOffers.findIndex((offer) => offer.id === id) !== -1;
