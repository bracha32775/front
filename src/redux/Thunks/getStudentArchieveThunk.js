import { createAsyncThunk } from "@reduxjs/toolkit";

export const getStudentArchieveThunk = createAsyncThunk(
    'getStudentArchieveThunk',
    async()=>{
        const response = await fetch(`https://localhost:7092/api/Student/GetAllArchieve`,
        {
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        }
    );
    const data = await  response.json();
    console.log("getStudentArchieveThunk");
   return data;
    }
)