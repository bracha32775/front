
// // import { useDispatch, useSelector } from "react-redux";
// // import { useState } from "react";
// // import { addStudentThunk } from "../../../redux/Thunks/addStudentThunk";
// // import * as React from 'react';
// // import './AddStudent.css'
// // import TextField from '@mui/material/TextField';
// // import Fab from '@mui/material/Fab';
// // import CloseIcon from '@mui/icons-material/Close';
// // import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
// // import { setFlagStudentSlice } from "../../../redux/Slices/studentSlice";
// // export const AddStudent = () => {
// //      const [flag, setFlag] = useState(false);
// //      const [flag2, setFlag2] = useState(false);
// //      const dispatch = useDispatch()
// //      const students = useSelector(state => state.students.students);
// //      const flagClose = useSelector(state => state.students.flagClose);
// //      const [student, setStudent] = useState({ nameOfStudent: "", phoneOfStudent: "", emailOfStudent: "", addressOfStudent: "" });
    
// //      async function doIt(student) {
// //           setFlag(false)
// //           console.log(flag);
// //           dispatch(addStudentThunk(student));
// //           flagCloseFun()
// //      } 
// //          async function flagCloseFun() {
// //           dispatch(setFlagStudentSlice(true))
// //      }

// //      async function F() {
// //           setFlag2(true)
// //      }

// //      const [open, setOpen] = React.useState(false);
// //      const handleClickOpen = () => {
// //           setOpen(true);
// //      };
// //      const handleClose = () => {
// //           setOpen(false);

// //      };
// //      return <div className="border">
// //           {!flagClose && <><div className="tool">
// //                <br></br>
// //                <TextField id="outlined-basic" label="שם" variant="outlined"
// //                     type="text" className="input" value={student.nameOfStudent} onChange={x => setStudent({ ...student, nameOfStudent: x.target.value })} />
// //           </div>
// //                <br></br>
// //                <div className="tool">
// //                     <TextField id="outlined-basic" label="טלפון" variant="outlined"
// //                          type="text" className="input"
// //                          value={student.phoneOfStudent} onChange={x => setStudent({ ...student, phoneOfStudent: x.target.value })} />
// //                </div>
// //                <br></br>
// //                <div className="tool">
// //                     <TextField id="outlined-basic" label="מייל" variant="outlined"
// //                          type="text" className="input" value={student.emailOfStudent} onChange={x => setStudent({ ...student, emailOfStudent: x.target.value })} />
// //                </div>
// //                <br></br>
// //                <div className="tool">
// //                     <TextField id="outlined-basic" label="כתובת" variant="outlined"
// //                          type="text" className="input" value={student.addressOfStudent} onChange={x => setStudent({ ...student, addressOfStudent: x.target.value })} />
// //                </div>
// //                <br></br>

// //                <div className="button">
// //                     <Fab variant="outlined" onClick={() => doIt(student)}>
// //                          < ThumbUpOffAltOutlinedIcon onClick={handleClose}></ThumbUpOffAltOutlinedIcon>
// //                     </Fab></div> </>}

// //      </div>
// // }
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { addStudentThunk } from "../../../redux/Thunks/addStudentThunk";
// import * as React from 'react';
// import './AddStudent.css';
// import { 
//   TextField, 
//   Fab, 
//   Box, 
//   Typography, 
//   Paper, 
//   Grid, 
//   Button, 
//   Container,
//   Card,
//   CardContent,
//   Divider,
//   IconButton
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import { setFlagStudentSlice } from "../../../redux/Slices/studentSlice";

// export const AddStudent = () => {
//   const [flag, setFlag] = useState(false);
//   const [flag2, setFlag2] = useState(false);
//   const dispatch = useDispatch();
//   const students = useSelector(state => state.students.students);
//   const flagClose = useSelector(state => state.students.flagClose);
//   const [student, setStudent] = useState({ 
//     nameOfStudent: "", 
//     phoneOfStudent: "", 
//     emailOfStudent: "", 
//     addressOfStudent: "" 
//   });
  
//   async function doIt(student) {
//     setFlag(false);
//     console.log(flag);
//     dispatch(addStudentThunk(student));
//     flagCloseFun();
//   }
  
//   async function flagCloseFun() {
//     dispatch(setFlagStudentSlice(true));
//   }
  
//   async function F() {
//     setFlag2(true);
//   }
  
//   const [open, setOpen] = React.useState(false);
  
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
  
//   const handleClose = () => {
//     setOpen(false);
//   };
  
//   return (
//     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//       <Paper 
//         elevation={3} 
//         sx={{ 
//           p: 4, 
//           borderRadius: 2,
//           background: 'linear-gradient(to right bottom, #ffffff, #f8f9fa)',
//           position: 'relative',
//           overflow: 'hidden',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '5px',
//             background: 'linear-gradient(to right, #3f51b5, #2196f3)'
//           }
//         }}
//       >
//         {!flagClose && (
//           <>
//             <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//               <PersonAddIcon sx={{ fontSize: 28, color: 'primary.main', mr: 1 }} />
//               <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
//                 הוספת תלמיד חדש
//               </Typography>
//             </Box>
            
//             <Divider sx={{ mb: 4 }} />
            
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <TextField 
//                   id="outlined-basic" 
//                   label="שם" 
//                   variant="outlined"
//                   type="text" 
//                   fullWidth
//                   value={student.nameOfStudent} 
//                   onChange={x => setStudent({ ...student, nameOfStudent: x.target.value })}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '&:hover fieldset': {
//                         borderColor: 'primary.main',
//                       },
//                     },
//                   }}
//                 />
//               </Grid>
              
//               <Grid item xs={12}>
//                 <TextField 
//                   id="outlined-basic" 
//                   label="טלפון" 
//                   variant="outlined"
//                   type="text" 
//                   fullWidth
//                   value={student.phoneOfStudent} 
//                   onChange={x => setStudent({ ...student, phoneOfStudent: x.target.value })}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '&:hover fieldset': {
//                         borderColor: 'primary.main',
//                       },
//                     },
//                   }}
//                 />
//               </Grid>
              
//               <Grid item xs={12}>
//                 <TextField 
//                   id="outlined-basic" 
//                   label="מייל" 
//                   variant="outlined"
//                   type="text" 
//                   fullWidth
//                   value={student.emailOfStudent} 
//                   onChange={x => setStudent({ ...student, emailOfStudent: x.target.value })}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '&:hover fieldset': {
//                         borderColor: 'primary.main',
//                       },
//                     },
//                   }}
//                 />
//               </Grid>
              
//               <Grid item xs={12}>
//                 <TextField 
//                   id="outlined-basic" 
//                   label="כתובת" 
//                   variant="outlined"
//                   type="text" 
//                   fullWidth
//                   value={student.addressOfStudent} 
//                   onChange={x => setStudent({ ...student, addressOfStudent: x.target.value })}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '&:hover fieldset': {
//                         borderColor: 'primary.main',
//                       },
//                     },
//                   }}
//                 />
//               </Grid>
//             </Grid>
            
//             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 onClick={() => doIt(student)}
//                 startIcon={<ThumbUpOffAltOutlinedIcon />}
//                 sx={{
//                   borderRadius: 2,
//                   px: 4,
//                   py: 1.5,
//                   fontWeight: 'bold',
//                   boxShadow: 3,
//                   transition: 'transform 0.2s',
//                   '&:hover': {
//                     transform: 'translateY(-2px)',
//                     boxShadow: 4,
//                   }
//                 }}
//               >
//                 הוסף תלמיד
//               </Button>
//             </Box>
//           </>
//         )}
//              </Paper>
//     </Container>
//   );
// };
      
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudentThunk } from "../../../redux/Thunks/addStudentThunk";
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













