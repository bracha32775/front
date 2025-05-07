import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCoursesThunk = createAsyncThunk(
    'getAllCoursesThunk',
    async()=>{
        const response = await fetch(`https://localhost:7092/api/Course/GetAllCourses`,
        {
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        }
    );
    const data = await  response.json();
    return data;
    }
)