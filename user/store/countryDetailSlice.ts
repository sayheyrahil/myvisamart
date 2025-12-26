import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountryDetailState {
  countryDetail: any;
}

const initialState: CountryDetailState = {
  countryDetail: {},
};

const countryDetailSlice = createSlice({
  name: "countryDetail",
  initialState,
  reducers: {
    setCountryDetail(state, action: PayloadAction<any>) {
       state.countryDetail = action.payload;
    },
    
    clearCountryDetail(state) {
      state.countryDetail = {};
    },
  },
});

export const { setCountryDetail, clearCountryDetail } = countryDetailSlice.actions;
export default countryDetailSlice.reducer;
