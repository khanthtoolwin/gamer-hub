import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import GameDetail from "../pages/GameDetail/GameDetail";
import ThemedApp from "../App";
import ReviewForm from "../Components/ReviewForm/ReviewForm";
let router = createBrowserRouter([
  {
    path: "/",
    element: <ThemedApp />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/games/:id",
        element: <GameDetail />,
      },
      {
        path: "games/:id/add-review",
        element: <ReviewForm />,
      },
    ],
  },
]);

export default router;
