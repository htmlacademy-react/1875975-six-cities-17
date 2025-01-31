import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteOffers } from '../../store/favorites-process/selectors';
import { groupFavoriteOffers } from '../../utils/utils';
import Card from '../card/card';
import { AppRoute, CITIES_LIST } from '../../const';
import { changeCity } from '../../store/app-process/app-process';

function FavoriteCardList() {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const groupedFavoriteOffers = groupFavoriteOffers(favoriteOffers);
  const dispatch = useDispatch();
  const handleCityClick = (cityName: string) => {
    const activeCity = CITIES_LIST.find((elem) => elem.name === cityName);
    if (activeCity) {
      dispatch(changeCity(activeCity));
    }
  };

  return (
    <ul className="favorites__list">
      {Object.entries(groupedFavoriteOffers).map(([city, groupedOffers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" onClick={() => handleCityClick(city)} to={AppRoute.Index}>
                <span>{city}</span>
              </Link>
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
