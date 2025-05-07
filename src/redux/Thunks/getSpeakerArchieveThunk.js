import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSpeakerArchieveThunk = createAsyncThunk(
    'getSpeakerArchieveThunk',
    async()=>{
        const response = await fetch(`https://localhost:7092/api/Speaker/GetAllArchieve`,
        {
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        }
    );
    const data = await  response.json();
    console.log("getSpeakerArchieveThunk");
   return data;
    }
)