import { Box, useTheme } from "@mui/material"

export const MobileMenu = () => {
  const theme = useTheme();

  return (
    <Box
      display={{ xs: "flex", md: "none" }}
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      {/* <AxenLogo variant="platform" maxWidth="6.25rem" maxHeight="1.875rem" />
      <Button
        customVariant="secondary"
        iconLeft={<MenuIcon />}
        onClick={() => actions.menuDrawer(true)}
        sx={{
          padding: 0,
          color: theme?.palette?.primary?.onMuted,
          backgroundColor: theme?.palette?.primary?.muted,

          "& svg": {
            width: theme?.display?.iconSize?.sm,
            height: theme?.display?.iconSize?.sm,
          },
        }}
      /> */}
    </Box>
  )
}
