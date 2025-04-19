import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from '../Pages/Roots/Root';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        path: "/",
        loader:()=>fetch('/BooksData.json'),
        Component: Home,
       
      },
      {
        path: "/about",
        Component:About,
      },
      {
        path: '/readlist',
        loader:()=>fetch('/BooksData.json'),
        Component:ReadList
      },
      {
        path: "/bookdetails/:id",
         loader:()=>fetch('/BooksData.json'),
        Component:BookDetails
      }
    ]
  }
])
