import Home from '@/home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Todolist from '../pages/todolist/Todolist';
const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/todolist',
        element: <Todolist />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
