import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { HomePage, LoginPage, ShopPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shop', element: <ShopPage /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
]);

export default router;
