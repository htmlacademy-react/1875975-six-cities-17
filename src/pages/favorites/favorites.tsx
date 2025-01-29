import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';

import { useSelector } from 'react-redux';
import { getFavoriteLoadingStatus, getFavoriteOffers } from '../../store/favorites-process/selectors';
import FavoritesContainer from '../../components/favorites-container/favorites-container';
import FavoritesContainerEmpty from '../../components/favorites-container-empty/favorites-container-empty';

function Favorites() {

  const favoriteOffers = useSelector(getFavoriteOffers);
  const isFavoritesLoading = useSelector(getFavoriteLoadingStatus);

  if (isFavoritesLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        {favoriteOffers.length
          ? <FavoritesContainer />
          : <FavoritesContainerEmpty />};
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Index}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
