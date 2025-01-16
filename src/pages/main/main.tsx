import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { sortOffers } from '../../utils/utils';

import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import Sorting from '../../components/sorting/sorting';


function MainPage() {
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city);
  const currentSorting = useAppSelector((state) => state.sorting);
  const activeOffers = offers.filter((offer) => offer.city.name === activeCity.name);
  const sortedOffers = sortOffers(activeOffers, currentSorting);

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
              <Sorting currentSorting={currentSorting}/>
              <CardList offers={sortedOffers} onCardMouseEnter={handleCardMouseEnter} onCardMouseLeave={handleCardMouseLeave}/>
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
