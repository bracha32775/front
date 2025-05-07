import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesThunk = createAsyncThunk(
    'getCoursesThunk',
    async()=>{
        const response = await fetch(`https://localhost:7092/api/Course/GetAll`,
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