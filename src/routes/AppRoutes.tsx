import { Navigate, RouteObject } from "react-router-dom"
import { Constants } from "@common/constants"

export const AppRoutes: RouteObject = {
  path: "/app",
  // element: <AppLayout />,
  children: [
    {
      path: "*",
      element: <Navigate to={Constants.app.COUNTER} replace />,
    },
    {
      path: "counter",
      // element: <DashboardPage />,
    },
    // {
    //   path: "stopwatch",
    //   element: <DashboardPage />,
    // },
  ]
}
