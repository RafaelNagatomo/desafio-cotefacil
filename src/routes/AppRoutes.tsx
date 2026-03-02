import { Navigate, RouteObject } from "react-router-dom"
import { Constants } from "@common/index"
import { AppLayout } from "@components/index"

import { CounterPage } from "@counter/index"
import { StopwatchPage } from "@stopwatch/index"
import { ClockPage } from "@clock/index"

export const AppRoutes: RouteObject = {
    path: "/app",
    element: <AppLayout />,
    children: [
        {
            path: "*",
            element: <Navigate to={Constants.app.COUNTER} replace />,
        },
        {
            path: "counter",
            element: <CounterPage />,
        },
        {
            path: "stopwatch",
            element: <StopwatchPage />,
        },
        {
            path: "clock",
            element: <ClockPage />,
        },
    ]
}
