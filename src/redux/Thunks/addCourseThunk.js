import { createAsyncThunk } from "@reduxjs/toolkit";

export const  addCourseThunk = createAsyncThunk(
    'addCourseThunk',
    async (course) => {
        const response = await fetch('https://localhost:7092/api/Course/Add',
            {
                method: 'POST',
                body: JSON.stringify(course),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;
    }
) 