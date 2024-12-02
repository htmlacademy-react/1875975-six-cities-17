import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../private-route/PrivateRoute';
import MainPage from '../../pages/main/MainPage';
import Login from '../../pages/login/Login';
import NotFound from '../../pages/not-found/NotFound';
import { AppRoute, AuthorizationStatus } from '../../const';
import Offer from '../../pages/offer/Offer';
import Favorites from '../../pages/favorites/Favorites';

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
