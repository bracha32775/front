import { createAsyncThunk } from "@reduxjs/toolkit";

export const getByStudentNameThunk = createAsyncThunk(
    'getByStudentNameThunk',
    async(name)=>{
        // debugger
        console.log(name+"name"+" "+"getByStudentNameThunk");
        const response = await fetch(`https://localhost:7092/api/Student/GetByName/${name}`
    );
    
    const data = await  response.json();
    console.log(data+"data");
    return data;
    }
)