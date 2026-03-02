import { ThemeProvider as MuiThemeProvider, CssBaseline, } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { CounterTheme } from "./modules/counter";

export enum Brand {
    COUNTER = "COUNTER",
    STOPWATCH = "STOPWATCH",
}

interface ThemeProviderProps {
    brand: Brand;
    children: React.ReactNode;
}

export const BrandThemes = (brand: Brand): ThemeOptions => {
    switch (brand) {
        case Brand.COUNTER:
            return CounterTheme();

        case Brand.STOPWATCH:
            return CounterTheme();

        default:
            return CounterTheme();
    }
};

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { brand, children } = props;

    return (
        <MuiThemeProvider theme={BrandThemes(brand)} >
            <CssBaseline />
            { children }
        </MuiThemeProvider>
    );
};
