import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBySpeakerNameThunk = createAsyncThunk(
    'getBySpeakerNameThunk',
    async(name)=>{
        // debugger
        const response = await fetch(`https://localhost:7092/api/Speaker/GetByName/${name}`
    );
    
    const data = await  response.json();
    console.log(data+"data");
    return data;
    }
)