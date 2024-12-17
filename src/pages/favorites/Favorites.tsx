import Header from '../../components/header/header';
import Card from '../../components/card/card';

import type { OfferType } from '../../types/types';

import { groupFavoriteOffers } from '../../utils/utils';

type FavoritesProps = {
  offers: OfferType[];
}

function Favorites({offers}: FavoritesProps) {

  const groupedFavoriteOffers = groupFavoriteOffers(offers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(groupedFavoriteOffers).map(([city, groupedOffers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {groupedOffers.map((offer) => <Card key={offer.id} {...offer} category="favorites" />)}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
