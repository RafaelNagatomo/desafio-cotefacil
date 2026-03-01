import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StopwatchState {
    seconds: number;
    isRunning: boolean;
}

const initialState: StopwatchState = {
    seconds: 0,
    isRunning: false,
};

const stopwatchSlice = createSlice({
    name: 'stopwatch',
    initialState,
    reducers: {
        setSeconds: (state, action: PayloadAction<number>) => {
            state.seconds = action.payload;
        },
        setIsRunning: (state, action: PayloadAction<boolean>) => {
            state.isRunning = action.payload;
        },
        resetStopwatch: (state) => {
            state.seconds = 0;
            state.isRunning = false;
        },
    },
});

export const { setSeconds, setIsRunning, resetStopwatch } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;
