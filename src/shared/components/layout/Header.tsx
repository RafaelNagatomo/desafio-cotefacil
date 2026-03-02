import { Avatar, Box, Divider, useTheme } from "@mui/material"
import { BrushLineIcon, SelectIcon } from "@components/index";
import { PaletteMode } from "@enum/index";
import { ApplicationController, useAppSelector, useController } from "@core/index";

export const Header = () => {
    const theme = useTheme();
    const controller = useController(ApplicationController);
    const { currentMode } = useAppSelector(state => state.appConfig);

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
                <SelectIcon 
                    tooltip="Escolha um tema"
                    value={currentMode}
                    items={controller.getThemeOptions()}
                    onChange={(value) => controller.changeThemeMode(value as PaletteMode)}
                    iconButton={<BrushLineIcon size={22} />}
                />

                <Avatar sx={{ bgcolor: theme?.palette?.primary?.main }}>OP</Avatar>
            </Box>

        </Box>

        <Divider />
    </>
  )
}
