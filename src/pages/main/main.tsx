import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Loader from '../../components/loader/loader';
import MainContainer from '../../components/main-container/main-container';
import { getOffers, getOffersLoadingStatus } from '../../store/offers-process/selectors';
import { getActiveCity } from '../../store/app-process/selectors';
import MainContainerEmpty from '../../components/main-container-empty/main-container-empty';

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
      <main className={`page__main page__main--index ${!activeOffers.length ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          {activeOffers.length
            ? <MainContainer offers={activeOffers} activeCity={activeCity}/>
            : <MainContainerEmpty activeCity={activeCity} />};
        </div>
      </main>
    </div>
  );
}

export default MainPage;
