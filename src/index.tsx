import 'bulma/css/bulma.min.css';
import './modules/shared/_main.scss';

export * from './App';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './modules/HomePage/components';
import { NotFoundPage } from './modules/NotFoundPage/NotFoundPage';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { Catalog } from './modules/CatalogPage/components/Catalog';
import { Favorites } from './modules/FavoritesPage/components';
import { Cart } from './modules/CartPage/components';
import { ItemCard } from './modules/ItemCardPage/components/ItemCard';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

createRoot(document.getElementById('root') as HTMLElement).render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />

            <Route path="phones" element={<Catalog />}>
              <Route path=":productId" element={<ItemCard />} />
            </Route>

            <Route path="tablets" element={<Catalog />}>
              <Route path=":productId" element={<ItemCard />} />
            </Route>

            <Route path="accessories" element={<Catalog />}>
              <Route path=":productId" element={<ItemCard />} />
            </Route>

            <Route path="favorites" element={<Favorites />} />

            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  </I18nextProvider>,
);
