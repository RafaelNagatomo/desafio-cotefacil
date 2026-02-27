import { Stack, useTheme } from "@mui/material"

import { Content } from "./components/Content"
import { Contacts } from "./components/Contacts"

export const Footer = () => {
  const theme = useTheme();

  return (
    // <MainContainer
    //   padding={{ xs: "3rem 1.5rem", md: "3.375rem 9.375rem" }}
    //   bgColor={theme?.palette?.surface?.inverse}
    // >
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ md: "center" }}
        // gap={{ xs: theme?.spacingTokens?.gap?.["3xl"], md: "auto" }}
      >
        <Content />
        <Contacts />
      </Stack>
    // </MainContainer>
  )
}
