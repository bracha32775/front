import { createAsyncThunk } from "@reduxjs/toolkit";

export const getStudentsThunk = createAsyncThunk(
    'getStudentsThunk',
    async()=>{
        const response = await fetch(`https://localhost:7092/api/Student/GetAll`,
        {
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        }
    );
    const data = await  response.json();
    // console.log(data+"ddddddddddddddddddddddddddd");
   return data;
    }
)