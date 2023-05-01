import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Admin,
    Introduction,
    LogIn,
    SelectStore,
    Seller,
    SignUp,
} from "./pages";
import { Spinner } from "@chakra-ui/react";

const routes = [
    { path: "/", element: <Introduction /> },
    { path: "/admin", element: <Admin /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/login", element: <LogIn /> },
    { path: "/seller", element: <Seller /> },
    { path: "/select-store", element: <SelectStore /> },
];

const router = createBrowserRouter(routes);

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
