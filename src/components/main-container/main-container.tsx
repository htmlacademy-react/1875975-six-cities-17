import { useCallback, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getCurrentSorting } from '../../store/app-process/selectors';
import { City, OfferType } from '../../types/types';
import { sortOffers } from '../../utils/utils';
import CardList from '../card-list/card-list';
import Sorting from '../sorting/sorting';
import Map from '../map/map';

type MainContainerProps = {
  offers: OfferType[];
  activeCity: City;
}

function MainContainer({offers, activeCity}: MainContainerProps) {
  const currentSorting = useAppSelector(getCurrentSorting);
  const sortedOffers = sortOffers(offers, currentSorting);

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardMouseEnter = useCallback((id: string | null) => {
    setActiveCardId(id);
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    setActiveCardId(null);
  }, []);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
        <Sorting currentSorting={currentSorting}/>
        <CardList offers={sortedOffers} onCardMouseEnter={handleCardMouseEnter} onCardMouseLeave={handleCardMouseLeave}/>
      </section>
      <div className="cities__right-section">
        <Map city={activeCity} offers={offers} activeCardId={activeCardId} mapPlace='cities'/>
      </div>
    </div>
  );
}

export default MainContainer;
