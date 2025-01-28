import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getOfferData = (state: State) => state[NameSpace.DetailedOffer].offer;
export const getOfferLoadingStatus = (state: State) => state[NameSpace.DetailedOffer].isOfferLoading;
export const getNearbyOffers = (state: State) => state[NameSpace.DetailedOffer].nearbyOffers;
