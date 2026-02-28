/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme, Theme, ThemeOptions } from "@mui/material";
import { PaletteSchema } from "./interfaces";
import { colorSchema, fontSystem, radius, spacing } from "./tokens";
import { LightPalette } from "./palettes";

export class ThemeFactory {
    private readonly palette: PaletteSchema;
    private spacingOverrides: any;
    private radiusOverrides: any;

    constructor(palette?: PaletteSchema) {
        this.palette = palette ?? LightPalette(colorSchema);
    }

    public overrideSpacingTokens(overrides: any) {
        this.spacingOverrides = { ...this.spacingOverrides, ...overrides };
    }

    public overrideRadius(overrides: any) {
        this.radiusOverrides = { ...this.radiusOverrides, ...overrides };
    }

    private createBaseTheme(): Theme {
        const theme = createTheme({
            palette: {
                ...this.palette,
            },
            typography: fontSystem,
            customSpacing: spacing,
            radius,
        });

        return theme;
    }

    public create(): ThemeOptions {
        const base = this.createBaseTheme();

        return {
            ...base,

            customSpacing: {
                ...base.customSpacing,
                ...this.spacingOverrides,
            },
            radius: {
                ...base.radius,
                ...this.radiusOverrides,
            },
        } as ThemeOptions;
    }
}
