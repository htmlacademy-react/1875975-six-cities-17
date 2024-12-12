import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import Offer from '../../pages/offer/оffer';
import Favorites from '../../pages/favorites/favorites';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage offersCount={offersCount} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<Offer />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.NotFound} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
