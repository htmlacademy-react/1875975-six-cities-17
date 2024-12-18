export const STARS_COUNT = 5;
export const MAX_PERCENT_WIDTH = 100;

export const enum AppRoute {
  Index = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*'
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATING_VALUE:{ [key: number]: string } = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};
