import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomeLayout, Home } from "./pages";
import { Skills, About, Products, Contacts } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// path: "/",
// element: <Auth />,
// errorElement: <Error />,
// children: [
// {
//   index: true,
//   element: <Welcome />,
// },
// {
//   path: "login",
//   element: <Login />,
// },
// {
//   path: "register",
//   element: <Register />,
// },
// {
//   path: "forgot-password",
//   element: <ForgotPassword />,
// },
// {
//   path: "reset-password",
//   element: <ResetPassword />,
// },
