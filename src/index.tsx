import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';
import { fetchOffersAction, checkAuthAction, fetchFavoriteOffersAction } from './store/api-actions';


store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction()).then((response) => {
  if (response.meta.requestStatus === 'fulfilled') {
    store.dispatch(fetchFavoriteOffersAction());
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
