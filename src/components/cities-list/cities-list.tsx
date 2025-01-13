import { useAppDispatch } from '../../hooks';

import { CITIES_LIST } from '../../const';
import { changeCity } from '../../store/action';

type CitiesListProps = {
  activeCityName: string;
}

function CitiesList({activeCityName}: CitiesListProps) {
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES_LIST.map((city) => (
          <li key={city.name} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${city.name === activeCityName ? 'tabs__item--active' : ''}`}
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity(city));
              }}
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
