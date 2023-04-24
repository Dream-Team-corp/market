import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Admin, LogIn, SelectStore, Seller, SignUp } from "./pages";
import { Spinner } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/seller",
    element: <Seller />,
  },
  {
    path: "/select-store",
    element: <SelectStore />,
  },
]);
function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      }
    />
  );
}

export default App;
