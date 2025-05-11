import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllSpeakersThunk = createAsyncThunk(
    'getAllSpeakersThunk',
    async()=>{
        const response = await fetch(`https://localhost:7092/api/Speaker/GetAllSpeakers`,
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