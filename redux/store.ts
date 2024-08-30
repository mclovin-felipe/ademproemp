import { configureStore } from "@reduxjs/toolkit";
import { buySlice } from "./slices/buy";
import { userSlice } from "./slices/user";
import { courseCreateSlice } from "./slices/courseCreate";
export const store = configureStore({
  reducer: {
    buy: buySlice.reducer,
    user: userSlice.reducer,
    courseCreate: courseCreateSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Compare this snippet from app/dashboard/cursos/crear/components/paso1.tsx:
export type AppStore = typeof store;
