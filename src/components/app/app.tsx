import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute } from '../../const';
import Offer from '../../pages/offer/оffer';
import Favorites from '../../pages/favorites/favorites';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<Offer />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <Favorites offers={[]} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.NotFound} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
