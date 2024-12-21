import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Repository from "./pages/Repository.tsx";
import Login from "./pages/login/Login.tsx";
import Error from "./components/error-element/Error.tsx";
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout/Layout.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "repositories",
        element: <Repository />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
