import { OfferType, SortName } from '../types/types';
import { SortOption } from '../const';

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

export const sortOffers = (offers: OfferType[], sortType: SortName): OfferType[] => {
  switch (sortType) {
    case SortOption.Popular:
      return offers;

    case SortOption.PriceLow:
      return [...offers].sort((a, b) => a.price - b.price);

    case SortOption.PriceHigh:
      return [...offers].sort((a, b) => b.price - a.price);

    case SortOption.TopRated:
      return [...offers].sort((a, b) => b.rating - a.rating);

    default:
      return offers;
  }
};
