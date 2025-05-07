import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSpeakerByIdThunk = createAsyncThunk(
    'getSpeakerByIdThunk',
    async(id)=>{
        debugger
        const response = await fetch(`https://localhost:7092/api/Course/GetById/${id}`
    );
    
    const data = await  response.json();
    console.log(data);
    return data;
    }
)