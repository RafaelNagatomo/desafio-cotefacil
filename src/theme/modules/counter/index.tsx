import { ThemeOptions } from "@mui/material";
import { ThemeFactory } from "@theme/core";
import { DarkPalette, LightPalette } from "@theme/core/palettes";
import { colorSchema } from "@theme/core/tokens";

export const CounterTheme = (mode: 'light' | 'dark'): ThemeOptions => {
    const palette = mode === 'dark' 
        ? DarkPalette(colorSchema) 
        : LightPalette(colorSchema);

    const factory = new ThemeFactory(palette);

    return factory.create();
};
