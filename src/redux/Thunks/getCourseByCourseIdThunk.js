import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const getCourseByCourseIdThunk = createAsyncThunk(
  "courses/getCourseByCourseId",
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://localhost:7092/api/Course/GetCourseById/${courseId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);