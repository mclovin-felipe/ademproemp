import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IFSTEP1 } from "@/types/course/steps";
import { CursosProps } from "@/types/cursos";

const initialState: Partial<CursosProps> = {
  title: "",
  description: "",
  price: 0,
  media: "",
  startDate: "",
  endDate: "",
  classesNumber: 0,
  categoryId: 0,
  rutProfesor: "",
  createdAt: "",
  updatedAt: "",
  id: 0,
  days: [],
  startTime: "",
  endTime: "",
};
export const courseCreateSlice = createSlice({
  name: "courseCreate",
  initialState,
  reducers: {
    setStep1: (state, action: PayloadAction<IFSTEP1>) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.price = action.payload.price;
      state.media = action.payload.media;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.classesNumber = action.payload.classesNumber;
      state.startTime = action.payload.startTime;
      state.endTime = action.payload.endTime;
    },
  },
});

export const { setStep1 } = courseCreateSlice.actions;
export const selectCourseCreate = (state: RootState) => state.courseCreate;
export default courseCreateSlice.reducer;
