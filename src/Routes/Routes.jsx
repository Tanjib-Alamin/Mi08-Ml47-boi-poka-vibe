import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from '../Pages/Roots/Root';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        path:"/",
        Component: Home
      }
    ]
  }
])
