import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Repository from "./pages/Repository.tsx";
import Login from "./pages/login/Login.tsx";
import Error from "./components/error-element/Error.tsx";
import Layout from "./components/Layout/Layout.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import EmptyPage from "./pages/EmptyPage.tsx";
import { Box } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Repository /> },
      { path: "ai-code-review", element: <EmptyPage /> },
      { path: "cloud-security", element: <EmptyPage /> },
      { path: "how-to-use", element: <EmptyPage /> },
      { path: "settings", element: <EmptyPage /> },
      { path: "support", element: <EmptyPage /> },
    ],
  },
  { path: "login", element: <Login />, errorElement: <Error /> },
  {
    path: "privacy-ploicy",
    element: <PrivacyPolicy />,
    errorElement: <Error />,
  },
]);

const cssVars = {
  "--primary-color": "#1570ef",
  "--bg-color": "#ffffff",
  "--secondary-bg-color": "#fafafa",
  "--text-color": "#181d27",
  "--secondary-text-color": "#414651",
  "--border-color": "#e9eaeb",
};

function App() {
  return (
    <Box css={cssVars}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
