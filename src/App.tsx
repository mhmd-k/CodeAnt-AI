import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Repository from "./pages/Repository.tsx";
import Login from "./pages/login/Login.tsx";
import Error from "./components/error-element/Error.tsx";
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout/Layout.tsx";
import CodeReview from "./pages/CodeReview.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";

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

      {
        path: "ai-code-review",
        element: <CodeReview />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "privacy-ploicy",
    element: <PrivacyPolicy />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
