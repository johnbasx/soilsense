import {
  BrowserRouter as Router,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/index";
import ErrorPage from "../pages/error";

const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
export default pageRoutes;
