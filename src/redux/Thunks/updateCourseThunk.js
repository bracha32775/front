// // import { createAsyncThunk } from "@reduxjs/toolkit";

// import { createAsyncThunk } from "@reduxjs/toolkit";

// // export const updateCourseThunk = createAsyncThunk(
// //     'updateCourseThunk',
// //     async (id) => {
// //         const response = await fetch(`https://localhost:7092/api/Course/Update/${id}`,
// //             {
// //                 method: 'PUT',
// //                 body: JSON.stringify(id),
// //                 headers: {
// //                     'Content-type': 'application/json'
// //                 }
// //             }
// //         );
// //         const data = await response.json();
// //        console.log(data+"data");
// //        console.log("you are in update thunk");     
// //         return data;
        
// //     }
// // )
// // import { createAsyncThunk } from "@reduxjs/toolkit";
// // import axios from "axios";

// export const updateCourseThunk = createAsyncThunk(
//   "courses/updateCourse",
//   async (course, { rejectWithValue }) => {
//     try {

//       const response = await fetch(`https://localhost:7092/api/Course/UpdateCourse/${course.idOfCourse}`, course);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateCourseThunk = createAsyncThunk(
  "courses/updateCourse",
  async (course) => {
    try {
      const response = await fetch(`https://localhost:7092/api/Course/Update/${course.idOfCourse}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
      });

      if (!response.ok) {
        throw new Error(`שגיאת שרת: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error joining course:', error);
      
    }
  }
);













