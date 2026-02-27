import { Box, Stack, Typography, useTheme } from "@mui/material"

export const Content = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={{ md: "center" }}
      width={{ md: "41.825rem" }}
      // gap={theme?.spacingTokens?.gap["xl"]}
    >
      {/* <AxenLogo variant="platformNegative" maxWidth="12rem" maxHeight="3.125rem" /> */}

      <Stack
        // gap={theme?.spacingTokens?.gap?.m}
      >
        <Typography
          variant='body2'
          // color={theme?.palette?.primary?.onDefault}
        >
          {("Ecossistema de ativos digitais criado para ajudar empresas a acelerar produtos digitais, ganhar consistência e mensurar valor real.")}
        </Typography>
        <Typography
          variant='body2'
          // color={theme?.palette?.primary?.onDefault}
        >
          {("Copyright © 2025 StopwatchCounter. Todos os direitos reservados.")}
        </Typography>
      </Stack>
    </Box>
  )
}
