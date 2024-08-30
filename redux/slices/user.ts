import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
const initialState: User = {
  id: 0,
  rut: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  createdAt: "",
  updatedAt: "",
  rolId: 0,
  media: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.rut = action.payload.rut;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.rolId = action.payload.rolId;
      state.media = action.payload.media;
    },
    setRut: (state, action: PayloadAction<string>) => {
      state.rut = action.payload;
    },
    setReset: (state) => {
      state = initialState;
    },
  },
});
export const { setUser, setReset, setRut } = userSlice.actions;
