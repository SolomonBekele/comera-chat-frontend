import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage"; 
import SigninPage from "./pages/SigninPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
]);

export default router;
