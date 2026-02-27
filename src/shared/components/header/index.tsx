import { Divider, Toolbar } from "@mui/material"
import { DesktopMenu } from "./components/DesktopMenu"
import { MobileMenu } from "./components/MobileMenu"

export const MainHeader = () => {
  return (
    <>
      <Toolbar>
        <DesktopMenu />
        {/* <MobileMenu /> */}
      </Toolbar>

      <Divider />
    </>
  )
}
