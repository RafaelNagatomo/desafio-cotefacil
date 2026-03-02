import { ThemeOptions } from "@mui/material";
import { PaletteMode } from "@enum/index";
import { DarkPalette, LightPalette, stopwatchColorSchema, ThemeFactory } from "@theme/index";

export const StopwatchTheme = (mode: PaletteMode): ThemeOptions => {
    const palette = mode === PaletteMode.DARK 
        ? DarkPalette(stopwatchColorSchema) 
        : LightPalette(stopwatchColorSchema);

    const factory = new ThemeFactory(palette);

    return factory.create();
};
