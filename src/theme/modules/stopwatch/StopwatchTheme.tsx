import { ThemeOptions } from "@mui/material";
import { PaletteMode } from "@enum/index";
import { colorSchema, DarkPalette, LightPalette, ThemeFactory } from "@theme/index";

export const StopwatchTheme = (mode: PaletteMode): ThemeOptions => {
    const palette = mode === PaletteMode.DARK 
        ? DarkPalette(colorSchema) 
        : LightPalette(colorSchema);

    const factory = new ThemeFactory(palette);

    return factory.create();
};
