import { useState } from 'react';
import { useAppSelector } from '../../hooks';

import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';


function MainPage() {
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city);
  const activeOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string | null) => {
    setActiveCardId(id);
  };

  const handleCardMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList activeCityName={activeCity.name} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeOffers.length} places to stay in {activeCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardList offers={activeOffers} onCardMouseEnter={handleCardMouseEnter} onCardMouseLeave={handleCardMouseLeave}/>
            </section>
            <div className="cities__right-section">
              <Map city={activeCity} offers={activeOffers} activeCardId={activeCardId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
