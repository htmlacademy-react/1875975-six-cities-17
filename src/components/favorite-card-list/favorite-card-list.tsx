import { useSelector } from 'react-redux';
import { getFavoriteOffers } from '../../store/favorites-process/selectors';
import { groupFavoriteOffers } from '../../utils/utils';
import Card from '../card/card';

function FavoriteCardList() {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const groupedFavoriteOffers = groupFavoriteOffers(favoriteOffers);

  return (
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
  );
}

export default FavoriteCardList;
