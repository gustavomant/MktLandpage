import Home from "../pages/Home";
import AppLayout from "./AppLayout";
import Congratulations from "../pages/Congratulations";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/obrigado', element: <Congratulations />
            },
        ]
    }
]);

export default router;