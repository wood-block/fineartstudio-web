import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Author, Contact, Home, Works } from "./views";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "author",
        element: <Author />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
