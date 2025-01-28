import { memo } from 'react';
import Card from '../card/card';
import type { OfferType } from '../../types/types';

type CardListProps = {
  offers: OfferType[];
  onCardMouseEnter: (id: string) => void;
  onCardMouseLeave: () => void;
};

function CardListComponent({ offers, onCardMouseEnter, onCardMouseLeave }: CardListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
          onMouseEnter={() => onCardMouseEnter(offer.id)}
          onMouseLeave={onCardMouseLeave}
        />
      ))}
    </div>
  );
}

const CardList = memo(CardListComponent);

export default CardList;
