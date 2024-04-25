import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import MainRote from './Layout/MainRote';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import MyCart from './Pages/MyCart';
import Login from './Compment/Form/Login';
import Register from './Compment/Form/Register';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRote></MainRote>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/product',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
