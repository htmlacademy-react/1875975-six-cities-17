import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Loader from '../../components/loader/loader';
import MainContainer from '../../components/main-container/main-container';
import { getActiveCity, getOffers, getOffersLoadingStatus } from '../../store/selectors';

function MainPage() {
  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getActiveCity);
  const activeOffers = offers.filter((offer) => offer.city.name === activeCity.name);
  const isOffersLoading = useAppSelector(getOffersLoadingStatus);

  if (isOffersLoading) {
    return <Loader />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList activeCityName={activeCity.name} />
        </div>
        <div className="cities">
          <MainContainer offers={activeOffers} activeCity={activeCity}/>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
