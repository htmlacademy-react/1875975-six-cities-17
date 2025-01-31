import { City, CommonOfferType, DetailedOffer, OfferType, ReviewType, SortName } from '../types/types';
import { MAX_PERCENT_WIDTH, SortOption, STARS_COUNT } from '../const';

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

export const getRandomCity = (cities: City[]) => cities[Math.floor(Math.random() * cities.length)];

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

export const sortReviews = (reviews: ReviewType[]) => [...reviews].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

export const getCommonTypeOffers = (offer: DetailedOffer, nearbyOffers: OfferType[]): CommonOfferType[] => {
  const commonOffer = {
    id: offer.id,
    location: offer.location,
  };
  const commonNearbyOffers = nearbyOffers.map((nearbyOffer) => ({
    id: nearbyOffer.id,
    location: nearbyOffer.location,
  }));
  return [commonOffer, ...commonNearbyOffers];
};

export const getFormattedDate = (date: string) => {
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(dateObj);
};

export const getShortDate = (date: string) => date.split('T')[0];

export const getStarsRatingWidth = (rating: number) => `${Math.round(rating) * MAX_PERCENT_WIDTH / STARS_COUNT}%`;

export const capitalizeWord = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
export const pluralizeWord = (word: string, count: number) => count === 1 ? word : `${word}s`;
