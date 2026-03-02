import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ClockState {
    currentTime: string;
}

const initialState: ClockState = {
    currentTime: '--:--:--',
};

const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        setTime: (state, action: PayloadAction<string>) => {
            state.currentTime = action.payload;
        },
    },
});

export const { setTime } = clockSlice.actions;
export default clockSlice.reducer;
