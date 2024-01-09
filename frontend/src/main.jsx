import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllDataProvider } from "./contexts/AllDataContext";
import App from "./App";
import Home from "./pages/Home/Home";
import Artist from "./pages/Artist/Artist";
import Artistlist from "./pages/Artist/Artistlist";
import Artworklist from "./pages/Artwork/Artworklist";
import Artwork from "./pages/Artwork/ArtworkDetail";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Users from "./pages/Users/Users";
import Favoris from "./pages/Favoris/Favoris";
import Information from "./pages/Information/Information";
import Login from "./pages/Login";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/artists",
        element: <Artistlist />,
        loader: () => {
          return fetch("https://akabab.github.io/superhero-api/api/all.json");
        },
      },
      {
        path: "/artists/:id",
        element: <Artist />,
      },
      {
        path: "/artworks",
        element: <Artworklist />,
      },
      {
        path: "/artworks/:id",
        element: <Artwork />,
      },
      {
        path: "/user",
        element: <Users />,
      },
      {
        path: "/favoris",
        element: <Favoris />,
      },
      {
        path: "/information",
        element: <Information />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AllDataProvider>
      <RouterProvider router={router} />
    </AllDataProvider>
  </React.StrictMode>
);
