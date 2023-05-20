import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Categorey from './Pages/Home/Categorey/Categorey.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import News from './Pages/Home/News/News.jsx';
import NewLayout from './NewLayout/NewLayout.jsx';
import Register from './Pages/LoginRegister/Register.jsx';
import Login from './Pages/LoginRegister/Login.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Categorey></Categorey>,
        loader: () => fetch('https://the-dragon-news-server-tariquzzamantapon.vercel.app/news')
      },
      {
        path: "/categorey/:id",
        element: <Categorey></Categorey>,
        loader: ({ params }) => fetch(`https://the-dragon-news-server-tariquzzamantapon.vercel.app/categories/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/news",
    element: <NewLayout></NewLayout>,
    children: [
      {
        path: "/news/:id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-dragon-news-server-tariquzzamantapon.vercel.app/news/${params.id}`)
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
