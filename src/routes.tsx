import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { HomePage, LoginPage, ProductPage, ShopPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/products/:productId', element: <ProductPage /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
]);

export default router;
