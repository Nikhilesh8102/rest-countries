import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryDetail from '../components/CountryDetail';
import Home from '../components/Home';
import Error from '../components/Error';
import Contact from '../components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [{
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/:country',
      element: <CountryDetail />,
    }

    ],
  },
])
const root = createRoot(document.querySelector('#root'));


root.render(<RouterProvider router={router} />);