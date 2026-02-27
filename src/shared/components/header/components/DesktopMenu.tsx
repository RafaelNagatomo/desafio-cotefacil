import { useState } from "react"
import { useSelector } from "react-redux"
import { Box, Button, useTheme } from "@mui/material"

import { AccountMenu } from "./AccountMenu"

export const DesktopMenu = () => {
  const theme = useTheme();
  // const { user } = useSelector((state: RootState) => state.auth);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Box
        // display="flex" gap={theme?.spacingTokens?.gap?.["3xl"]}
      >
        <Button
          // customVariant="secondary"
          // iconLeft={<MenuIcon />}
          // onClick={() => actions.menuDrawer(true)}
          sx={{
            padding: 0,
            // color: theme?.palette?.primary?.onMuted,
            // backgroundColor: theme?.palette?.primary?.muted,

            "& svg": {
              // width: theme?.display?.iconSize?.sm,
              // height: theme?.display?.iconSize?.sm,
            },
          }}
        />

        {/* <AxenLogo variant="platform" maxWidth="8.3125rem" maxHeight="2.5rem" /> */}
      </Box>

      <Box
        display="flex"
        alignItems="center"
        // gap={theme?.spacingTokens?.gap["2xs"]}
      >
        {/* <Avatar size="medium" /> */}
        {/* <Button
          id="account-button"
          customVariant="tertiary"
          text={user?.fullName ?? ""}
          iconRight={<ArrowDropDownRoundedIcon />}
          onClick={handleMenuOpen as unknown as () => void}
        /> */}
      </Box>

      <AccountMenu anchorEl={anchorEl} onClose={handleMenuClose} />
    </Box>
  )
}
