import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSpeakersThunk = createAsyncThunk(
    'getSpeakersThunk',
    async()=>{
        const response = await fetch(`https://localhost:7092/api/Speaker/GetAll`,
        {
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        }
    );
    const data = await  response.json();
    console.log("נתונים מהשרת:", data); 
    return data;
    }
)