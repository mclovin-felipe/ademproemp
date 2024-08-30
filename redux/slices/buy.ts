import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface BuyState {
  id: number;
  title: string;
  price: number;
}
const initialState: BuyState = {
  id: 0,
  title: "",
  price: 0,
};

export const buySlice = createSlice({
  name: "buy",
  initialState,
  reducers: {
    setBuy: (state, action: PayloadAction<BuyState>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.price = action.payload.price;
    },
    setReset: (state) => {
      state.id = 0;
      state.title = "";
      state.price = 0;
    },
  },
});
export const { setBuy, setReset } = buySlice.actions;
export const selectBuy = (state: RootState) => state.buy;
export default buySlice.reducer;
