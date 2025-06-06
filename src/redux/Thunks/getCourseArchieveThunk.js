import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCourseArchieveThunk = createAsyncThunk(
    'getCourseArchieveThunk',
    async()=>{
        const response = await fetch(`https://localhost:7092/api/Course/GetAllArchieve`,
        {
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        }
    );
    const data = await  response.json();
    console.log("getCourseArchieveThunk");
   return data;
    }
)