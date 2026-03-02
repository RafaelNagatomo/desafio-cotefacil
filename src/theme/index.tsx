import { ThemeProvider as MuiThemeProvider, CssBaseline, } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { CounterTheme } from "./modules/counter";
import { PaletteMode } from "./core/interfaces";

export enum Brand {
    COUNTER = "COUNTER",
    STOPWATCH = "STOPWATCH",
}

interface ThemeProviderProps {
    brand: Brand;
    mode: PaletteMode;
    children: React.ReactNode;
}

export const BrandThemes = (brand: Brand, mode: PaletteMode): ThemeOptions => {
    switch (brand) {
        case Brand.COUNTER:
            return CounterTheme(mode);

        case Brand.STOPWATCH:
            return CounterTheme(mode);

        default:
            return CounterTheme(mode);
    }
};

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { brand, mode, children } = props;

    return (
        <MuiThemeProvider theme={createTheme(BrandThemes(brand, mode))} >
            <CssBaseline />
            { children }
        </MuiThemeProvider>
    );
};
