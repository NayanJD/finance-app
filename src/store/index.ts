import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import statReducer from "./stats";
// ...

export const store = configureStore({
  reducer: {
    user: userReducer,
    stats: statReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
