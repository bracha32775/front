// import { createAsyncThunk } from "@reduxjs/toolkit";

// // export const deleteStudentThunk = createAsyncThunk(
// //     'deleteStudentThunk',
// //     async (id) => {
// //         const response = await fetch(`https://localhost:7092/api/Student/delete/${id}`,
// //             {
// //                 mode: 'no-cors',
// //                 method: 'PUT',
// //                 body: JSON.stringify(id),
// //                 headers: {
// //                     'Content-type': 'application/json'
// //                 }
// //             }
// //         );
// //         const data = await response.json();
// //        console.log(data+"data");
// //        console.log("you are in delete thunk");     
// //         return data;
        
// //     }
// // )
// export const deleteStudentThunk = createAsyncThunk(
//     'deleteStudentThunk',
//     async (id) => {
//         const response = await fetch(`https://localhost:7092/api/Student/delete/${id}`,
//             {
//                 // הסרת mode: 'no-cors',
//                 method: 'PUT',
//                 body: JSON.stringify(id),
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             }
//         );
//         const data = await response.json();
//         console.log(data+"data");
//         console.log("you are in delete thunk");     
//         return data;
//     }
// )
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteStudentThunk = createAsyncThunk(
    'deleteStudentThunk',
    async (id) => {
        try {
            const response = await fetch(`https://localhost:7092/api/Student/delete/${id}`,
                {
                    // הסרת mode: 'no-cors' - זה מונע קבלת תשובה תקינה
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            );
            
            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log("Delete response:", data);
            return data;
        } catch (error) {
            console.error("Error in deleteStudentThunk:", error);
            throw error;
        }
    }
)