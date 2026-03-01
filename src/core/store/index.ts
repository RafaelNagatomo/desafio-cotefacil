import { configureStore } from '@reduxjs/toolkit';
import appConfigReducer from './appConfigSlice';
import counterReducer from '@counter/store/counterSlice'
import stopwatchReducer from '@stopwatch/store/stopwatchSlice'
import clockReducer from '@clock/store/clockSlice'

export const store = configureStore({
    reducer: {
        appConfig: appConfigReducer,
        counter: counterReducer,
        stopwatch: stopwatchReducer,
        clock: clockReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
