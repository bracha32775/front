
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAllStudentsThunk = createAsyncThunk(
    'getAllStudentsThunk',
    async () => {
        const response = await fetch(`https://localhost:7092/api/Student/GetAllStudents`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        
        const data = await response.json()
        console.log("Students data from API:", data)
        return data
    }
)