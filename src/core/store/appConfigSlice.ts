import { Brand, PaletteMode } from '@enum/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppConfigState {
    brand: Brand;
    currentMode: PaletteMode;
}

const initialState: AppConfigState = {
    brand: Brand.COUNTER,
    currentMode: PaletteMode.LIGHT,
};

const appConfigSlice = createSlice({
    name: 'appConfig',
    initialState,
    reducers: {
        setBrand: (state, action: PayloadAction<Brand>) => {
            state.brand = action.payload;
        },
        setThemeMode: (state, action: PayloadAction<PaletteMode>) => {
            state.currentMode = action.payload;
        },
        toggleThemeMode: (state) => {
            state.currentMode = state.currentMode === PaletteMode.LIGHT ? PaletteMode.DARK : PaletteMode.LIGHT;
        },
    },
});

export const { setBrand, setThemeMode, toggleThemeMode } = appConfigSlice.actions;
export default appConfigSlice.reducer;
