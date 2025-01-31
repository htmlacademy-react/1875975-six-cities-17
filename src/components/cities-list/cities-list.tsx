import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { CITIES_LIST } from '../../const';
import { changeCity } from '../../store/app-process/app-process';
import { getActiveCity } from '../../store/app-process/selectors';

function CitiesListComponent() {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getActiveCity);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES_LIST.map((city) => (
          <li key={city.name} className="locations__item">
            <div
              className={`locations__item-link tabs__item ${city.name === activeCity.name ? 'tabs__item--active' : ''}`}
              style={{cursor: 'pointer'}}
              onClick={() => {
                dispatch(changeCity(city));
              }}
            >
              <span>{city.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const CitiesList = memo(CitiesListComponent);

export default CitiesList;
