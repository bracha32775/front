import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteCourseThunk = createAsyncThunk(
    'deleteCourseThunk',
    async (id) => {
        const response = await fetch(`https://localhost:7092/api/Course/delete/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(id),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
       console.log(data+"delete");
        return data.response;
        
    }
)