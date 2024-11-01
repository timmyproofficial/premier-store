import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LoginPage from './pages/LoginPage';
import { HomePage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/', element: <HomePage /> }],
  },
  { path: '/login', element: <LoginPage /> },
]);

export default router;
