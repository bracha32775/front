import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteSpeakerThunk = createAsyncThunk(
    'deleteSpeakerThunk',
    async (id) => {
        const response = await fetch(`https://localhost:7092/api/Speaker/delete/${id}`,
            {
                
                method: 'PUT',
                body: JSON.stringify(id),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
       console.log(data+"data");
       console.log("you are in delete thunk");     
        return data;
        
    }
)