// import { createSlice } from "@reduxjs/toolkit";
// import { getCoursesThunk } from "../Thunks/getCoursesThunk";
// import { getCourseByCourseNameThunk } from "../Thunks/getCourseByCourseName";
// import { deleteCourseThunk } from "../Thunks/deleteCourseThunk";
// import { getStudentArchieveThunk } from "../Thunks/getStudentArchieveThunk";
// import { getCourseArchieveThunk } from "../Thunks/getCourseArchieveThunk";
// import { getAllCoursesThunk } from "../Thunks/getAllCoursesThunk";


// const INITIAL_STATE={
//     courses : [],
//     selectC : {},
//     flagClose : false,
//     allCourses:[],  
// }
// export const courseSlice = createSlice({
//     name:'courses',
//     initialState:INITIAL_STATE,
//     reducers:{
//         setFlagCourseSlice:(state,action)=>{
//             state.flagClose=action.payload
//         }
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(getCoursesThunk.fulfilled,(state,action)=>{
//             state.courses=action.payload;
//         });
//         builder.addCase(getCourseByCourseNameThunk.fulfilled,(state,action)=>{
//             state.selectC=action.payload;
//             console.log(state.selectC+" state.selectC:");
//         });   
//         builder.addCase(deleteCourseThunk.fulfilled,(state,action)=>{
//             state.courses=action.payload;
//         });
//         builder.addCase(getCourseArchieveThunk.fulfilled,(state,action)=>{
//             state.courses=action.payload;
//         });
//         builder.addCase(getAllCoursesThunk.fulfilled,(state,action)=>{
//             state.allCourses=action.payload;
//         });      
//     }
// })
// export const {setFlagCourseSlice} = courseSlice.actions
import { createSlice } from "@reduxjs/toolkit";
import { getCoursesThunk } from "../Thunks/getCoursesThunk";
import { getCourseByCourseNameThunk } from "../Thunks/getCourseByCourseName";
import { deleteCourseThunk } from "../Thunks/deleteCourseThunk";
import { getStudentArchieveThunk } from "../Thunks/getStudentArchieveThunk";
import { getCourseArchieveThunk } from "../Thunks/getCourseArchieveThunk";
import { getAllCoursesThunk } from "../Thunks/getAllCoursesThunk";
import { updateCourseThunk } from "../Thunks/updateCourseThunk";
import { getAllStudentsOfCoursThunk } from "../Thunks/getAllStudentsOfCoursThunk";

const INITIAL_STATE={
    courses : [],
    selectC : {},
    flagClose : false,
    allCourses:[],
    students:[],
}

export const courseSlice = createSlice({
    name:'courses',
    initialState:INITIAL_STATE,
    reducers:{
        setFlagCourseSlice:(state,action)=>{
            state.flagClose=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getCoursesThunk.fulfilled,(state,action)=>{
            state.courses=action.payload;
        });
        builder.addCase(getCourseByCourseNameThunk.fulfilled,(state,action)=>{
            state.selectC=action.payload;
            console.log(state.selectC+" state.selectC:");
        });
        builder.addCase(deleteCourseThunk.fulfilled,(state,action)=>{
            state.courses=action.payload;
        });
        builder.addCase(getCourseArchieveThunk.fulfilled,(state,action)=>{
            state.courses=action.payload;
        });
        builder.addCase(getAllCoursesThunk.fulfilled,(state,action)=>{
            state.allCourses=action.payload;
        });
        builder.addCase(getAllStudentsOfCoursThunk.fulfilled,(state,action)=>{
            state.students=action.payload;
        });
        // הוספת טיפול בעדכון קורס
        builder.addCase(updateCourseThunk.fulfilled,(state,action)=>{
            // עדכון הקורס ברשימת הקורסים
            const updatedCourse = action.payload;
            
            // עדכון ברשימת הקורסים הרגילה
            const courseIndex = state.courses.findIndex(
                course => course.idOfCourse === updatedCourse.idOfCourse
            );
            if (courseIndex !== -1) {
                state.courses[courseIndex] = updatedCourse;
            }
            
            // עדכון ברשימת כל הקורסים
            const allCourseIndex = state.allCourses.findIndex(
                course => course.idOfCourse === updatedCourse.idOfCourse
            );
            if (allCourseIndex !== -1) {
                state.allCourses[allCourseIndex] = updatedCourse;
            }
            
            // אם הקורס המעודכן הוא הקורס הנבחר, עדכן גם אותו
            if (state.selectC.idOfCourse === updatedCourse.idOfCourse) {
                state.selectC = updatedCourse;
            }
        });
    }
})

export const {setFlagCourseSlice} = courseSlice.actions




