import { configureStore } from "@reduxjs/toolkit";
import { invoiceSlice } from "./features/invoice/invoiceSlice";

export const store = configureStore({
  reducer: {
    invoiceSlice: invoiceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
