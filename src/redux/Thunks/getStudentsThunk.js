// import { createAsyncThunk } from "@reduxjs/toolkit";

// // וודא שה-Thunk מחזיר את הנתונים בפורמט הנכון
// export const getStudentsThunk = createAsyncThunk(
//     'getStudentsThunk',
//     async () => {
//         const response = await fetch(`https://localhost:7092/api/Student/GetAll`, {
//             method: 'GET',
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         });
        
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
        
//         const data = await response.json();
//         console.log("Students data from API:", data);
//         return data;
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getStudentsThunk = createAsyncThunk(
    'getStudentsThunk',
    async () => {
        const response = await fetch(`https://localhost:7092/api/Student/GetAll`, {
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
)//     }
// );
// </Typography>