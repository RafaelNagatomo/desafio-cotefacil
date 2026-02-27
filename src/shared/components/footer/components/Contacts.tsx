import { Box, Stack, Typography, useTheme } from "@mui/material"

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem = (prop: ContactItemProps) => {
  const { icon, text } = prop;
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      // gap={theme?.spacingTokens?.gap?.m}
    >
      {icon}
      <Typography
        // color={theme?.palette?.primary?.onDefault}
        variant="body1"
        data-bold
      >
        {text}
      </Typography>
    </Box>
  );
};

export const Contacts = () => {
  const theme = useTheme();

  return (
    <Stack
      flexDirection={{ md: "row" }}
      gap={{
        // xs: theme?.spacingTokens?.gap?.xl,
        // md: theme?.spacingTokens?.gap?.["3xl"],
      }}
    >
      {/* <ContactItem
        text="(19) 99999-9999"
        icon={<WhatsappIconButton />}
      />
      <ContactItem
        text="contato@axen.com"
        icon={<MailIconButton />}
      /> */}
    </Stack>
  )
}
