import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Artist from "./pages/Artist/Artist";
import Artistlist from "./pages/Artist/Artistlist";
import Artworklist from "./pages/Artwork/Artworklist";
import Artwork from "./pages/Artwork/ArtworkDetail";
import Contact from "./pages/Contact/Contact";
import Users from "./pages/Users/Users";
import About from "./pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/artists",
        element: <Artistlist />,
      },
      {
        path: "/artists/:id",
        element: <Artist />,
        // loader: DetailLoader,
      },
      {
        path: "/artworks",
        element: <Artworklist />,
        loader: () => {
          return fetch("https://dummyjson.com/products");
        },
      },
      {
        path: "/artworks/:id",
        element: <Artwork />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
