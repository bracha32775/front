import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllStudentsOfCoursThunk = createAsyncThunk(
    'getAllStudentsOfCoursThunk',
    async(id)=>{
        debugger
        console.log("iiiiiiiiiid"+id);
        const response = await fetch(`https://localhost:7092/api/Course/GetAllStudentsOfCourse/${id}`
    );
    
    const data = await  response.json();
    console.log("getAllStudentsOfCoursThunk"+data);
    return data;
    }
)