import {
  BrowserRouter as Router,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "@/pages/index";
import ErrorPage from "@/pages/error";
import ContactPage from "@/pages/contact-page";

const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact-page",
    element: <ContactPage />,
  },
]);
export default pageRoutes;
