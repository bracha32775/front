import { createSlice } from "@reduxjs/toolkit";
import { getStudentsThunk } from "../Thunks/getStudentsThunk";
import { addStudentThunk } from "../Thunks/addStudentThunk";
import { getStudentArchieveThunk } from "../Thunks/getStudentArchieveThunk";
import { joinCourseThunk } from "../Thunks/joinCourseThunk";
import { deleteStudentThunk } from "../Thunks/deleteStudentThunk";
import { getAllStudentsThunk } from "../Thunks/getAllStudentsThunk";

const INITIAL_STATE={
    students : [],
    allStudents : [],   
    open : false,
    flagClose : false,
    newStudent:{}
}
export const studentSlice = createSlice({

    name:'students',
    initialState:INITIAL_STATE,
    reducers:{
        setFlagStudentSlice:(state,action)=>{
            state.flagClose=action.payload
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(getStudentsThunk.fulfilled,(state,action)=>{
            state.students=action.payload;
        });
        builder.addCase(getAllStudentsThunk.fulfilled,(state,action)=>{
            state.allStudents=action.payload;
        });
        builder.addCase(addStudentThunk.fulfilled,(state,action)=>{
            state.students=action.payload;
        });

        builder.addCase(getStudentArchieveThunk.fulfilled,(state,action)=>{
            state.students=action.payload;
        });
        
        builder.addCase(joinCourseThunk.fulfilled,(state,action)=>{
            state.newStudent=action.payload;
        });
        // builder.addCase(deleteStudentThunk.fulfilled,(state,action)=>{
        //     state.students=action.payload;
        // });
        builder.addCase(deleteStudentThunk.fulfilled, (state, action) => {
            // עדכון רשימת התלמידות עם התוצאה מהשרת
            state.students = action.payload;
        });
        
        builder.addCase(deleteStudentThunk.rejected, (state, action) => {
            // טיפול בשגיאות
            console.error("Delete student failed:", action.error);
        });
    }
})
export const {setFlagStudentSlice} = studentSlice.actions