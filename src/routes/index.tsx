import { Navigate, useRoutes } from "react-router-dom"
import { Constants } from "@common/constants"
import { AppRoutes } from "./AppRoutes"

export const MainRoutes = () => {
    return useRoutes([
        {
            path: "/",
            element: <Navigate to={Constants.app.COUNTER} replace />,
        },
        {
            path: "*",
            element: <Navigate to={Constants.app.NOT_FOUND} replace />,
        },

        AppRoutes,
    ])
}
