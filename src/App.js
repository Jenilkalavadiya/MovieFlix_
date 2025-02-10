import React from "react";
import "../src/App.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Contact, { contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import Error from "./pages/Error";
import getMoviesData from "./api/GetApiData";
import getMovieDetails from "./api/GetMovieDetails";
import MovieDetails from "./components/ui/MovieDetails";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: getMoviesData,
        },
        {
          path: "/movies/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
        // {
        //   path: "*",
        //   element: <Error />,
        // },
      ],
    },
  ]);

  // const router = createBrowserRouter([
  //   { path: "/", element: <Home /> },
  //   { path: "/about", element: <About /> },
  //   { path: "/movies", element: <Movies /> },
  //   { path: "/contact", element: <Contact /> },
  // ]);
  return <RouterProvider router={router} />;
};

export default App;
