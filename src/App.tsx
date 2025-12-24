import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import "./index.css";

// Pages
import Home from "./pages/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
        </>,
    ),
);

function AppLayout() {
    return <RouterProvider router={router} />;
}

export default AppLayout;
