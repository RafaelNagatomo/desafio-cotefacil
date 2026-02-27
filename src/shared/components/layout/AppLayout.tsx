import { Outlet } from "react-router-dom";
import { Footer } from "@components/footer";
import { MainHeader } from "@components/header";

export const AppLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  )
}
