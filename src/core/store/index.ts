import { configureStore } from '@reduxjs/toolkit';
import appConfigReducer from './appConfigSlice';
import counterReducer from '@counter/store/counterSlice'

export const store = configureStore({
    reducer: {
        appConfig: appConfigReducer,
        counter: counterReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
