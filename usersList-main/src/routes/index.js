import { createBrowserRouter } from "react-router-dom";
import Users from "../Users";
import UserDetail from "../Users/UserDetail/UserDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/userDetail/:userId",
    element: <UserDetail />,
  },
]);
