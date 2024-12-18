import { useState } from 'react';
import Card from '../card/card';
import type { OfferType } from '../../types/types';

type CardListProps = {
  offers: OfferType[];
};

function CardList({ offers }: CardListProps) {

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string | null) => {
    setActiveCardId(id);
  };

  const handleCardMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default CardList;
