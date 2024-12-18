import { OfferType } from '../types/types';

export const groupFavoriteOffers = (offers: OfferType[]): { [key: string]: OfferType[] } => {
  const favorites = offers.filter((offer) => offer.isFavorite);
  return favorites.reduce<{ [key: string]: OfferType[] }>((acc, curr) => {
    const city = curr.city.name;
    if (!(city in acc)) {
      acc[city] = [];
    }
    acc[city].push(curr);
    return acc;
  }, {});
};
