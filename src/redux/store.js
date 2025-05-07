import { combineSlices } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { speakersSlice } from "./Slices/speakersSlice";
import { studentSlice } from "./Slices/studentSlice";
import { courseSlice } from "./Slices/courseSlice";


const reducer = combineSlices(speakersSlice,studentSlice,courseSlice);
export const STORE = configureStore({
    reducer: reducer
});

