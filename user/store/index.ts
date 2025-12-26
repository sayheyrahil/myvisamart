import { configureStore } from "@reduxjs/toolkit";
import countryDetailReducer from "./countryDetailSlice";

const store = configureStore({
  reducer: {
    countryDetail: countryDetailReducer,
    // Add other reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
