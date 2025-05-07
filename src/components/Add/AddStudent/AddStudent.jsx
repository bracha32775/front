
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addStudentThunk } from "../../../redux/Thunks/addStudentThunk";
import * as React from 'react';
import './AddStudent.css'
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import { setFlagStudentSlice } from "../../../redux/Slices/studentSlice";
export const AddStudent = () => {
     const [flag, setFlag] = useState(false);
     const [flag2, setFlag2] = useState(false);
     const dispatch = useDispatch()
     const students = useSelector(state => state.students.students);
     const flagClose = useSelector(state => state.students.flagClose);
     const [student, setStudent] = useState({ nameOfStudent: "", phoneOfStudent: "", emailOfStudent: "", addressOfStudent: "" });
    
     async function doIt(student) {
          setFlag(false)
          console.log(flag);
          dispatch(addStudentThunk(student));
          flagCloseFun()
     } 
         async function flagCloseFun() {
          dispatch(setFlagStudentSlice(true))
     }

     async function F() {
          setFlag2(true)
     }

     const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
          setOpen(true);
     };
     const handleClose = () => {
          setOpen(false);

     };
     return <div className="border">
          {!flagClose && <><div className="tool">
               <br></br>
               <TextField id="outlined-basic" label="שם" variant="outlined"
                    type="text" className="input" value={student.nameOfStudent} onChange={x => setStudent({ ...student, nameOfStudent: x.target.value })} />
          </div>
               <br></br>
               <div className="tool">
                    <TextField id="outlined-basic" label="טלפון" variant="outlined"
                         type="text" className="input"
                         value={student.phoneOfStudent} onChange={x => setStudent({ ...student, phoneOfStudent: x.target.value })} />
               </div>
               <br></br>
               <div className="tool">
                    <TextField id="outlined-basic" label="מייל" variant="outlined"
                         type="text" className="input" value={student.emailOfStudent} onChange={x => setStudent({ ...student, emailOfStudent: x.target.value })} />
               </div>
               <br></br>
               <div className="tool">
                    <TextField id="outlined-basic" label="כתובת" variant="outlined"
                         type="text" className="input" value={student.addressOfStudent} onChange={x => setStudent({ ...student, addressOfStudent: x.target.value })} />
               </div>
               <br></br>

               <div className="button">
                    <Fab variant="outlined" onClick={() => doIt(student)}>
                         < ThumbUpOffAltOutlinedIcon onClick={handleClose}></ThumbUpOffAltOutlinedIcon>
                    </Fab></div> </>}

     </div>
}













