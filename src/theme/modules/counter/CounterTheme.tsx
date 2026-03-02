import { ThemeOptions } from "@mui/material";
import { PaletteMode } from "@enum/index";
import { counterColorSchema, DarkPalette, LightPalette, ThemeFactory } from "@theme/index";

export const CounterTheme = (mode: PaletteMode): ThemeOptions => {
    const palette = mode === PaletteMode.DARK 
        ? DarkPalette(counterColorSchema) 
        : LightPalette(counterColorSchema);

    const factory = new ThemeFactory(palette);

    return factory.create();
};
