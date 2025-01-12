import { CITIES_LIST } from '../../const';

type CitiesListProps = {
  activeCityName: string;
}

function CitiesList({activeCityName}: CitiesListProps) {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES_LIST.map((city) => (
          <li key={city.name} className="locations__item">
            <a className={`locations__item-link tabs__item ${city.name === activeCityName ? 'tabs__item--active' : ''}`} href="#">
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
