import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCourseByCourseNameThunk = createAsyncThunk(
    'getCourseByCourseNameThunk',
    async(name)=>{
        debugger
        const response = await fetch(`https://localhost:7092/api/Course/GetByName/${name}`
    );
    
    const data = await  response.json();
    console.log(data+" getCourseByCourseNameThunk");
    return data;
    }
)