import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { OfferType } from '../../types/types';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import Offer from '../../pages/offer/оffer';
import Favorites from '../../pages/favorites/favorites';

type AppProps = {
  offers: OfferType[];
}

function App({offers}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage offers={offers} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<Offer />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <Favorites offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.NotFound} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
