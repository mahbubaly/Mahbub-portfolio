import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ViewAllProjects from "../Pages/Projects/ViewAllProjects";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/ViewAllProjects",
                element: <ViewAllProjects />
            }



        ]
    },
]);
export default router;