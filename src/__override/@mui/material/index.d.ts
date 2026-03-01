import { boxShadow, colorSchema, radius, spacing } from "@theme/core/tokens";
import { lightPalette as palette } from "@theme/core/palettes";

declare module "@mui/material/styles" {
    interface Theme {
        palette: typeof palette;
        colors: typeof colorSchema;
        customSpacing: typeof spacing;
        radius: typeof radius;
        boxShadow: typeof boxShadow;
    }

    interface ThemeOptions {
        palette: typeof palette;
        colors?: typeof colorSchema;
        customSpacing?: typeof spacing;
        radius?: typeof radius;
        boxShadow?: typeof boxShadow;
    }
}
