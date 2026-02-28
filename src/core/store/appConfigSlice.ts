import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppConfigState {
    currentMode: 'counter' | 'stopwatch';
}

const initialState: AppConfigState = {
    currentMode: 'counter',
};

const appConfigSlice = createSlice({
    name: 'appConfig',
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<'counter' | 'stopwatch'>) => {
            state.currentMode = action.payload;
        },
        toggleMode: (state) => {
            state.currentMode = state.currentMode === 'counter' ? 'stopwatch' : 'counter';
        },
    },
});

export const { setMode, toggleMode } = appConfigSlice.actions;
export default appConfigSlice.reducer;
