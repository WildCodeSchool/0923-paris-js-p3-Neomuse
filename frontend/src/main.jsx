import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { AllDataProvider } from "./contexts/AllDataContext";
import useUser, { UserProvider } from "./contexts/UserContext";
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
import PageAdmin from "./pages/Admin/PageAdmin";

function PrivateRoute({ children }) {
  const { user } = useUser();
  const redirect = useNavigate();
  useEffect(() => {
    if (!user) redirect("./login");
  }, [user]);
  return children;
}
function PublicRoute({ children }) {
  const { user } = useUser();
  const redirect = useNavigate();
  useEffect(() => {
    if (user) redirect(-2);
  }, [user]);
  return children;
}
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
        element: (
          <PublicRoute>
            <LoginSignup />
          </PublicRoute>
        ),
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
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
        loader: () => {
          return fetch("https://dummyjson.com/products");
        },
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
        path: "/favoris",
        element: (
          <PrivateRoute>
            <Favoris />
          </PrivateRoute>
        ),
      },
      {
        path: "/information",
        element: (
          <PrivateRoute>
            <Information />
          </PrivateRoute>
        ),
      },
      {
        path: "/Admin",
        element: <PageAdmin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <AllDataProvider>
        <RouterProvider router={router} />
      </AllDataProvider>
    </UserProvider>
  </React.StrictMode>
);
