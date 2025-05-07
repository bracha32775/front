import { createAsyncThunk } from "@reduxjs/toolkit";

export const addSpeakerThunk = createAsyncThunk(
    'addSpeakerThunk',
    async (speaker) => {
        const response = await fetch('https://localhost:7092/api/Speaker/Add',
            {
                method: 'POST',
                body: JSON.stringify(speaker),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;
    }
)