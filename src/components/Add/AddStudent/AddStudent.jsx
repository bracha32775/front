
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

// Material UI Components
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  Paper,
  Avatar,
  Alert
} from "@mui/material";

// Icons
import SaveIcon from '@mui/icons-material/Save';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { styled } from '@mui/material/styles';

// CSS
import './AddStudent.css';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  background: 'linear-gradient(to right bottom, #ffffff, #f8f9fa)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '5px',
    background: 'linear-gradient(to right, #3f51b5, #2196f3)'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '10px 24px',
  fontWeight: 'bold',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  }
}));

export const AddStudent = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students);
  const flagClose = useSelector(state => state.students.flagClose);
  
  // מצב התלמיד
  const [student, setStudent] = useState({
    nameOfStudent: "",
    phoneOfStudent: "",
    emailOfStudent: "",
    addressOfStudent: ""
  });
  
  // מצב שגיאות הטופס
  const [errors, setErrors] = useState({
    nameOfStudent: "",
    phoneOfStudent: "",
    emailOfStudent: "",
    addressOfStudent: ""
  });
  
  // מצב הטופס
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  // בדיקת תקינות הטופס
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    // בדיקת שם
    if (!student.nameOfStudent.trim()) {
      tempErrors.nameOfStudent = "שם התלמיד הוא שדה חובה";
      isValid = false;
    } else if (student.nameOfStudent.length < 2) {
      tempErrors.nameOfStudent = "שם התלמיד חייב להכיל לפחות 2 תווים";
      isValid = false;
    } else {
      tempErrors.nameOfStudent = "";
    }
    
    // בדיקת טלפון
    const phoneRegex = /^0\d{8,9}$/;
    if (!student.phoneOfStudent.trim()) {
      tempErrors.phoneOfStudent = "מספר טלפון הוא שדה חובה";
      isValid = false;
    } else if (!phoneRegex.test(student.phoneOfStudent)) {
      tempErrors.phoneOfStudent = "מספר טלפון לא תקין (צריך להתחיל ב-0 ולהכיל 9-10 ספרות)";
      isValid = false;
    } else {
      tempErrors.phoneOfStudent = "";
    }
    
    // בדיקת אימייל
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!student.emailOfStudent.trim()) {
      tempErrors.emailOfStudent = "כתובת אימייל היא שדה חובה";
      isValid = false;
    } else if (!emailRegex.test(student.emailOfStudent)) {
      tempErrors.emailOfStudent = "כתובת אימייל לא תקינה";
      isValid = false;
    } else {
      tempErrors.emailOfStudent = "";
    }
    
    // בדיקת כתובת
    if (!student.addressOfStudent.trim()) {
      tempErrors.addressOfStudent = "כתובת היא שדה חובה";
      isValid = false;
    } else if (student.addressOfStudent.length < 5) {
      tempErrors.addressOfStudent = "כתובת חייבת להכיל לפחות 5 תווים";
      isValid = false;
    } else {
      tempErrors.addressOfStudent = "";
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  // הוספת תלמיד
  const handleAddStudent = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await dispatch(addStudentThunk(student));
        setSubmitSuccess(true);
        setSubmitError("");
        
        // איפוס הטופס לאחר הוספה מוצלחת
        setStudent({
          nameOfStudent: "",
          phoneOfStudent: "",
          emailOfStudent: "",
          addressOfStudent: ""
        });
        
        // סגירת הטופס לאחר זמן קצר
        setTimeout(() => {
          dispatch(setFlagStudentSlice(true));
        }, 2000);
      } catch (error) {
        setSubmitError("אירעה שגיאה בהוספת התלמיד. אנא נסה שוב.");
        setSubmitSuccess(false);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  // טיפול בשינויים בשדות הטופס
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
    
    // בדיקת תקינות בזמן אמת
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };
  
  if (flagClose) {
    return null;
  }
  
  return (
    <StyledPaper>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
          <PersonAddIcon />
        </Avatar>
        <Typography variant="h5" component="h1" fontWeight="bold">
          הוספת תלמיד חדש
        </Typography>
      </Box>
      
      <Divider sx={{ mb: 4 }} />
      
      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          התלמיד נוסף בהצלחה!
        </Alert>
      )}
      
      {submitError && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {submitError}
        </Alert>
      )}
      
      <Card sx={{ mb: 4, borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardHeader 
          title="פרטי התלמיד" 
          sx={{ 
            bgcolor: 'primary.light', 
            color: 'primary.contrastText',
            '& .MuiCardHeader-title': {
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }
          }} 
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="nameOfStudent"
                label="שם התלמיד"
                variant="outlined"
                fullWidth
                value={student.nameOfStudent}
                onChange={handleInputChange}
                error={!!errors.nameOfStudent}
                helperText={errors.nameOfStudent}
                required
                InputProps={{
                  sx: {
                    borderRadius: '8px',
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                name="phoneOfStudent"
                label="מספר טלפון"
                variant="outlined"
                fullWidth
                value={student.phoneOfStudent}
                onChange={handleInputChange}
                error={!!errors.phoneOfStudent}
                helperText={errors.phoneOfStudent}
                required
                InputProps={{
                  sx: {
                    borderRadius: '8px',
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                name="emailOfStudent"
                label="כתובת אימייל"
                variant="outlined"
                fullWidth
                value={student.emailOfStudent}
                onChange={handleInputChange}
                error={!!errors.emailOfStudent}
                helperText={errors.emailOfStudent}
                required
                InputProps={{
                  sx: {
                    borderRadius: '8px',
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                name="addressOfStudent"
                label="כתובת מגורים"
                variant="outlined"
                fullWidth
                value={student.addressOfStudent}
                onChange={handleInputChange}
                error={!!errors.addressOfStudent}
                helperText={errors.addressOfStudent}
                required
                InputProps={{
                  sx: {
                    borderRadius: '8px',
                  }
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledButton
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          onClick={handleAddStudent}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'מוסיף תלמיד...' : 'הוסף תלמיד'}
        </StyledButton>
      </Box>
    </StyledPaper>
  );
};












