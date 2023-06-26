import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Education from "../Pages/Education/Education";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import Portfolio from "../Pages/Portfolio/Portfolio";

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
                path: '/skill',
                element: <Education />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/works',
                element: <Portfolio />
            },
            {
                path: '/projects',
                element: <Projects />
            }

        ]
    },
]);
export default router;