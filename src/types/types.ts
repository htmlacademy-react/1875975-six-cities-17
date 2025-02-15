import { SortOption } from '../const';

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
  }

export type City = {
  name: CityName;
  location: Location;
}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  }

export type DetailedOffer = Omit<OfferType, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type CommonOfferType = Pick<OfferType, 'id' | 'location'>;

export type SortName = `${SortOption}`;

export type UserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type AuthData = {
  email: string;
  password: string;
}

export type Comment = {
  rating: number;
  comment: string;
}

export type PostCommentInfo = {
  id: string;
  comment: Comment;
}

export type ReviewType = Comment & {
  id: string;
  date: string;
  user: Pick<UserData, 'name' | 'avatarUrl' | 'isPro'>;
}
