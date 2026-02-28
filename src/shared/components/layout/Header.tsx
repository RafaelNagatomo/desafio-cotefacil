import { Avatar, Box, Button, Divider, useTheme } from "@mui/material"
import { deepPurple } from "@mui/material/colors";

export const Header = () => {
  const theme = useTheme();

  return (
    <>
        <Box
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            paddingY={theme?.customSpacing?.s}
            paddingX={theme?.customSpacing?.m}
        >
            <Box>
                {/* <Logo /> */}
            </Box>

            <Box
                display="flex"
                alignItems="center"
                gap={theme?.customSpacing?.s}
            >
                <Button
                    variant="outlined"
                    onClick={() => alert("Button header")}
                >
                    Theme
                </Button>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Box>

        </Box>

        <Divider />
    </>
  )
}
