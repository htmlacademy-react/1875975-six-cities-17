import Card from '../card/card';
import type { OfferType } from '../../types/types';

type CardListProps = {
  offers: OfferType[];
};

function CardList({ offers }: CardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
        />
      ))}
    </div>
  );
}

export default CardList;
