import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllDataProvider } from "./contexts/AllDataContext";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
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
import LoginSignup from "./pages/LoginSignup";

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
        path: "/login",
        element: <LoginSignup />,
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
        path: "/user/:id",
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
    <AuthProvider>
      <AllDataProvider>
        <RouterProvider router={router} />
      </AllDataProvider>
    </AuthProvider>
    <UserProvider>
      <AllDataProvider>
        <RouterProvider router={router} />
      </AllDataProvider>
    </UserProvider>
  </React.StrictMode>
);
