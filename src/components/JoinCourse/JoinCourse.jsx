// // // import { useDispatch, useSelector } from "react-redux";
// // // import { useState } from "react";
// // // import Fab from '@mui/material/Fab';
// // // import { getStudentsThunk } from "../../redux/Thunks/getStudentsThunk";
// // // import * as React from 'react';
// // // import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// // // import { ThumbUpOffAltOutlined } from "@mui/icons-material";
// // // // import { CheckBox, CreditCardOutlined, InfoOutlined } from "@mui/icons-material";

// // // export const JoinCourse = () => {
// // //   const [flag, setFlag] = useState(false);
// // //   const [flag2, setFlag2] = useState(false);
// // //   const dispatch = useDispatch()
// // //   const courses = useSelector(state => state.courses.courses);
// // //   const students = useSelector(state => state.students.students);
// // //   const co = useSelector(state => state.courses.selectC);
// // //   React.useEffect(() => {
// // //     dispatch(getStudentsThunk())
// // //   }, [])
// // //   const student = ''
// // //   const sId = -1
// // //   const id = co
// // //   const joinToCourse = (value) => {
// // //     student = students.map(s => s.nameOfStudent == value)
// // //     sId = student.idOfStudent
// // //     console.log(id, sId)
// // //     // dispatch(`https://localhost:7092/api/Student/JoinCourse?sId`{sId}`&id`{id})
// // //   }
// // //   return <div className="border">
// // //     <Box className="select" sx={{ minWidth: 120 }}>
// // //       <FormControl fullWidth>
// // //         <InputLabel id="demo-simple-select-label">תלמידה </InputLabel>
// // //         <Select
// // //           labelId="demo-simple-select-label"
// // //           id="demo-simple-select"
// // //           label="תלמידה "
// // //           className="tool"
// // //           defaultValue={""}
// // //         >
// // //           {students.map(student => {
// // //             return <MenuItem key={student.idOfStudent} value={student.nameOfStudent}>
// // //               {student.nameOfStudent} </MenuItem>
// // //           })}
// // //         </Select>
// // //       </FormControl>
// // //     </Box>
// // //     <br />

// // //     <div className="button" onClick={() => joinToCourse()}>
// // //       <Fab variant="outlined" >
// // //         <ThumbUpOffAltOutlined></ThumbUpOffAltOutlined>
// // //       </Fab></div>

// // //   </div>



// import React, { useState, useEffect } from 'react';
// import { 
//   Container, 
//   Paper, 
//   Typography, 
//   Stepper, 
//   Step, 
//   StepLabel, 
//   Box, 
//   Button, 
//   TextField, 
//   FormControl, 
//   InputLabel, 
//   Select, 
//   MenuItem, 
//   Grid, 
//   Card, 
//   CardContent, 
//   Avatar, 
//   Divider, 
//   Alert, 
//   Snackbar, 
//   CircularProgress
// } from '@mui/material';
// import { 
//   ArrowBack, 
//   PersonAdd, 
//   CheckCircle, 
//   Phone, 
//   Email, 
//   Home, 
//   EventNote 
// } from '@mui/icons-material';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Logo from '../Logo/Logo';
// import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
// import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
// // import logoImage from '../../assets/logo.png';

// export const JoinCourse = () => {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const course = useSelector(state => state.courses.selectedCourse);
//   const students = useSelector(state => state.students.students);

//   // State variables
//   const [activeStep, setActiveStep] = useState(0);
//   const [selectedStudent, setSelectedStudent] = useState('');
//   const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);
//   const [contactInfo, setContactInfo] = useState({
//     phone: '',
//     email: '',
//     address: '',
//     notes: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('info');

//   // Steps for the stepper
//   const steps = ['בחירת תלמיד', 'פרטי קשר', 'אישור'];

//   // Fetch course data on component mount
//   useEffect(() => {
//     dispatch(getStudentsThunk())  
//     if (courseId) {
//       dispatch(getCourseByCourseIdThunk(courseId));
//     }


//   //   React.useEffect(() => {
//   //   dispatch(getStudentsThunk())
//   //  }, [])
//    }, [dispatch, courseId]);

//   // Handle student selection
//   const handleStudentChange = (event) => {
//     const studentId = event.target.value;
//     setSelectedStudent(studentId);

//     const student = students.find(s => s.idOfStudent === studentId);
//     setSelectedStudentDetails(student);
//   };

//   // Handle contact info changes
//   const handleContactChange = (event) => {
//     const { name, value } = event.target;
//     setContactInfo(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle next step
//   const handleNext = () => {
//     if (activeStep === steps.length - 1) {
//       handleSubmit();
//     } else {
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     }
//   };

//   // Handle back step
//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   // Handle form submission
//   const handleSubmit = () => {
//     setLoading(true);

//     // Simulate API call
//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);
//       setSnackbarMessage('הרישום לקורס הושלם בהצלחה!');
//       setSnackbarSeverity('success');
//       setOpenSnackbar(true);
//     }, 1500);
//   };

//   // Handle snackbar close
//   const handleCloseSnackbar = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpenSnackbar(false);
//   };

//   // Render step content based on active step
//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
//               בחר תלמיד להרשמה
//             </Typography>

//             <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
//               <InputLabel>תלמיד</InputLabel>
//               <Select
//                 value={selectedStudent}
//                 onChange={handleStudentChange}
//                 label="תלמיד"
//               >
//                 {students && students.map((student) => (
//                   <MenuItem key={student.idOfStudent} value={student.idOfStudent}>
//                     {student.nameOfStudent}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {selectedStudent && (
//               <Card sx={{ 
//                 borderRadius: '16px', 
//                 boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//                 mt: 3,
//                 p: 2,
//                 bgcolor: 'rgba(25, 118, 210, 0.05)'
//               }}>
//                 <CardContent>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                     <Avatar 
//                       sx={{ 
//                         bgcolor: 'primary.main', 
//                         width: 60, 
//                         height: 60,
//                         mr: 2
//                       }}
//                     >
//                       {selectedStudentDetails?.nameOfStudent?.charAt(0) || 'T'}
//                     </Avatar>
//                     <Box>

//                       <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                       {selectedStudentDetails?.nameOfStudent}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       ת.ז: {selectedStudentDetails?.idNumber || 'לא זמין'}
//                     </Typography>
//                   </Box>
//                 </Box>

//                 <Divider sx={{ my: 2 }} />

//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       טלפון:
//                     </Typography>
//                     <Typography variant="body1">
//                       {selectedStudentDetails?.phone || 'לא זמין'}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       דוא"ל:
//                     </Typography>
//                     <Typography variant="body1">
//                       {selectedStudentDetails?.email || 'לא זמין'}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//           )}
//         </Box>
//       );

//     case 1:
//       return (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
//             פרטי קשר נוספים
//           </Typography>

//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="טלפון"
//                 name="phone"
//                 value={contactInfo.phone}
//                 onChange={handleContactChange}
//                 variant="outlined"
//                 InputProps={{
//                   startAdornment: <Phone color="action" sx={{ mr: 1 }} />,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="דוא״ל"
//                 name="email"
//                 value={contactInfo.email}
//                 onChange={handleContactChange}
//                 variant="outlined"
//                 InputProps={{
//                   startAdornment: <Email color="action" sx={{ mr: 1 }} />,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="כתובת"
//                 name="address"
//                 value={contactInfo.address}
//                 onChange={handleContactChange}
//                 variant="outlined"
//                 InputProps={{
//                   startAdornment: <Home color="action" sx={{ mr: 1 }} />,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="הערות"
//                 name="notes"
//                 value={contactInfo.notes}
//                 onChange={handleContactChange}
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 InputProps={{
//                   startAdornment: <EventNote color="action" sx={{ mr: 1, alignSelf: 'flex-start', mt: 1 }} />,
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </Box>
//       );

//     case 2:
//       return (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
//             אישור פרטי הרשמה
//           </Typography>

//           <Card sx={{ 
//             borderRadius: '16px', 
//             boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//             mb: 3
//           }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
//                 פרטי הקורס
//               </Typography>

//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     שם הקורס:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {course?.nameOfCourse || 'לא זמין'}
//                   </Typography>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     תאריך התחלה:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {course?.startDateOfCourse || 'לא זמין'}
//                   </Typography>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     יום בשבוע:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {course?.dayOfCourse || 'לא זמין'}
//                   </Typography>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     כמות מפגשים:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {course?.amountOfMettingInCourse || '0'}
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>

//           <Card sx={{ 
//             borderRadius: '16px', 
//             boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//             mb: 3
//           }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
//                 פרטי התלמיד
//               </Typography>

//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     שם התלמיד:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {selectedStudentDetails?.nameOfStudent || 'לא זמין'}
//                   </Typography>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     ת.ז:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {selectedStudentDetails?.idNumber || 'לא זמין'}
//                   </Typography>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     טלפון:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {contactInfo.phone || selectedStudentDetails?.phone || 'לא זמין'}
//                   </Typography>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2" color="text.secondary">
//                     דוא"ל:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {contactInfo.email || selectedStudentDetails?.email || 'לא זמין'}
//                   </Typography>
//                 </Grid>

//                 {contactInfo.address && (
//                   <Grid item xs={12}>
//                     <Typography variant="body2" color="text.secondary">
//                       כתובת:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {contactInfo.address}
//                     </Typography>
//                   </Grid>
//                 )}

//                 {contactInfo.notes && (
//                   <Grid item xs={12}>
//                     <Typography variant="body2" color="text.secondary">
//                       הערות:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {contactInfo.notes}
//                     </Typography>
//                   </Grid>
//                 )}
//               </Grid>
//             </CardContent>
//           </Card>

//           <Alert severity="info" sx={{ mb: 3 }}>
//             לחיצה על "אישור" תשלים את תהליך ההרשמה לקורס.
//           </Alert>
//         </Box>
//       );

//     default:
//       return 'שלב לא ידוע';
//   }
// };

// // If registration is successful, show success message
// if (success) {
//   return (
//     <Container maxWidth="md" sx={{ py: 5, direction: 'rtl' }}>
//       <Paper sx={{ 
//         p: 4, 
//         borderRadius: '16px',
//         boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//         textAlign: 'center'
//       }}>
//         <Avatar sx={{ 
//           bgcolor: 'success.main',
//           width: 80,
//           height: 80,
//           mx: 'auto',
//           mb: 3
//         }}>
//           <CheckCircle sx={{ fontSize: 50 }} />
//         </Avatar>

//         <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
//           ההרשמה הושלמה בהצלחה!
//         </Typography>

//         <Typography variant="body1" sx={{ mb: 4 }}>
//           הרישום לקורס "{course?.nameOfCourse}" בוצע בהצלחה.
//           פרטי הקורס ישלחו אליך בהקדם.
//         </Typography>

//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           onClick={() => navigate('/')}
//           sx={{
//             borderRadius: '30px',
//             py: 1.5,
//             px: 4,
//             fontWeight: 600,
//             fontSize: '1rem',
//           }}
//         >
//           חזרה לדף הבית
//         </Button>
//       </Paper>
//     </Container>
//   );
// }

// return (
//   <Container maxWidth="md" sx={{ py: 5, direction: 'rtl' }}>
//     <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
//     <Logo size={80} onClick={() => navigate('/')} />
//     </Box>

//     <Paper sx={{ 
//       p: 4, 
//       borderRadius: '16px',
//       boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
//     }}>
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//         <Button
//           onClick={() => navigate(-1)}
//           startIcon={<ArrowBack />}
//           sx={{ mr: 2 }}
//         >
//           חזרה
//         </Button>

//         <Typography variant="h5" sx={{ fontWeight: 700 }}>
//           הרשמה לקורס {course?.nameOfCourse}
//         </Typography>
//       </Box>

//       <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {getStepContent(activeStep)}

//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
//         <Button
//           disabled={activeStep === 0}
//           onClick={handleBack}
//           sx={{ mr: 1 }}
//         >
//           חזרה
//         </Button>

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleNext}
//           disabled={
//             (activeStep === 0 && !selectedStudent) ||
//             loading
//           }
//           startIcon={activeStep === steps.length - 1 ? 
//             (loading ? <CircularProgress size={20} color="inherit" /> : <CheckCircle />) : 
//             <PersonAdd />
//           }
//           sx={{
//             borderRadius: '8px',
//             fontWeight: 600,
//           }}
//         >
//           {activeStep === steps.length - 1 ? 'אישור' : 'המשך'}
//         </Button>
//       </Box>
//     </Paper>

//     <Snackbar
//       open={openSnackbar}
//       autoHideDuration={6000}
//       onClose={handleCloseSnackbar}
//       anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//     >
//       <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
//         {snackbarMessage}
//       </Alert>
//     </Snackbar>
//   </Container>
// );
// };

// export default JoinCourse;
/////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { Box, Paper, Typography } from '@mui/material';
// import ReceiptGenerator from './ReceiptGenerator';
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Container, Box, Typography, Button, Grid, Card, CardContent, Divider,
//   Avatar, Paper, Stepper, Step, StepLabel, TextField, FormControl,
//   InputLabel, Select, MenuItem, Alert, Snackbar, CircularProgress
// } from '@mui/material';
// import {
//   ArrowBack, CheckCircle, Phone, Email, Home, EventNote, 
//   PersonAdd, CreditCard, AttachMoney, CalendarToday, Receipt
// } from '@mui/icons-material';
// // import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseId';
// import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
// import Logo from '../Logo/Logo';

// export const JoinCourse = () => {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const course = useSelector(state => state.courses.selectC);
//   const students = useSelector(state => state.students.students);

//   // State variables
//   const [activeStep, setActiveStep] = useState(0);
//   const [selectedStudent, setSelectedStudent] = useState('');
//   const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     paymentMethod: 'credit',
//     notes: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('info');
//   const [student1, setStudent1] = useState(null);
//   // Steps for the stepper
//   const steps = ['בחירת תלמיד', 'פרטי תשלום', 'אישור'];

//   // Fetch course data on component mount
//   useEffect(() => {
//     dispatch(getStudentsThunk())
//     // if (courseId) {
//     //   dispatch(getCourseByCourseIdThunk(courseId));
//     // }
//   }, [dispatch, courseId]);

//   // Handle student selection
//   const handleStudentChange = (event) => {
//    setStudent1(students.find(s => s.idOfStudent === event.target.value));
//     const studentId = event.target.value;
//     setSelectedStudent(studentId);
//     setSelectedStudentDetails(selectedStudent)
//     // console.log(student1.nameOfStudent+"kk");

//     const student = students.find(s => s.idOfStudent === studentId);
//     setSelectedStudentDetails(student);
//   };

//   // Handle payment info changes
//   const handlePaymentChange = (event) => {
//     const { name, value } = event.target;
//     setPaymentInfo(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle next step
//   const handleNext = () => {
//     if (activeStep === steps.length - 1) {
//       handleSubmit();
//     } else {
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     }
//   };

//   // Handle back step
//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   // Handle form submission
//   const handleSubmit = () => {
//     setLoading(true);

//     // Simulate API call
//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);
//       setSnackbarMessage('הרישום לקורס הושלם בהצלחה!');
//       setSnackbarSeverity('success');
//       setOpenSnackbar(true);
//     }, 1500);
//   };

//   // Handle snackbar close
//   const handleCloseSnackbar = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpenSnackbar(false);
//   };

//   // Render step content based on active step
//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
//               בחר תלמיד להרשמה
//             </Typography>

//             <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
//               <InputLabel>תלמיד</InputLabel>
//               <Select
//              onChange={handleStudentChange}
//                 value={selectedStudent} 

//                 label="תלמיד"
//               >
//                 {students && students.map((student) => (
//                   <MenuItem key={student.idOfStudent} value={student.idOfStudent} >
//                     {student.nameOfStudent}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {selectedStudent && (
//               <Card sx={{
//                 borderRadius: '16px',
//                 boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//                 mt: 3,
//                 p: 2,
//                 bgcolor: 'rgba(25, 118, 210, 0.05)'
//               }}>
//                 <CardContent>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                     <Avatar
//                       sx={{
//                         bgcolor: 'primary.main',
//                         width: 60,
//                         height: 60,
//                         mr: 2
//                       }}
//                     >
//                       {selectedStudentDetails?.nameOfStudent?.charAt(0) || 'T'}
//                     </Avatar>
//                     <Box>
//                       <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                         {selectedStudentDetails?.nameOfStudent}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         ת.ז: {selectedStudentDetails?.idOfStudent || 'לא זמין'}
//                       </Typography>
//                     </Box>
//                   </Box>

//                   <Divider sx={{ my: 2 }} />

//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <Typography variant="body2" color="text.secondary">
//                         טלפון:
//                       </Typography>
//                       <Typography variant="body1">
//                         {student1.phoneOfStudent || 'לא זמין'}
//                       </Typography>
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <Typography variant="body2" color="text.secondary">
//                         דוא"ל:
//                       </Typography>
//                       <Typography variant="body1">
//                         {student1.emailOfStudent || 'לא זמין'}
//                       </Typography>
//                     </Grid>
//                   </Grid>
//                 </CardContent>
//               </Card>
//             )}

//             {/* הצגת פרטי הקורס בצעד הראשון */}
//             {selectedStudent && course && (
//               <Card sx={{
//                 borderRadius: '16px',
//                 boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//                 mt: 3,
//                 p: 2,
//                 bgcolor: 'rgba(25, 118, 210, 0.05)'
//               }}>
//                 <CardContent>
//                   <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
//                     פרטי הקורס
//                   </Typography>

//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <Typography variant="body2" color="text.secondary">
//                         שם הקורס:
//                       </Typography>
//                       <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                         {course?.nameOfCourse || 'לא זמין'}
//                       </Typography>
//                     </Grid>

//                     <Grid item xs={12} sm={6}>
//                       <Typography variant="body2" color="text.secondary">
//                         תאריך התחלה:
//                       </Typography>
//                       <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                         {course?.startDateOfCourse || 'לא זמין'}
//                       </Typography>
//                     </Grid>

//                     <Grid item xs={12} sm={6}>
//                       <Typography variant="body2" color="text.secondary">
//                         יום בשבוע:
//                       </Typography>
//                       <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                         {course?.dayOfCourse || 'לא זמין'}
//                       </Typography>
//                     </Grid>

//                     <Grid item xs={12} sm={6}>
//                       <Typography variant="body2" color="text.secondary">
//                         כמות מפגשים:
//                       </Typography>
//                       <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                         {course?.amountOfMettingInCourse || '0'}
//                       </Typography>
//                     </Grid>
//                   </Grid>
//                 </CardContent>
//               </Card>
//             )}
//           </Box>
//         );

//       case 1:
//         return (
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
//               פרטי תשלום
//             </Typography>

//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
//                   <InputLabel>אמצעי תשלום</InputLabel>
//                   <Select
//                     value={paymentInfo.paymentMethod}
//                     onChange={handlePaymentChange}
//                     label="אמצעי תשלום"
//                     name="paymentMethod"
//                   >
//                     <MenuItem value="credit">כרטיס אשראי</MenuItem>
//                     <MenuItem value="cash">מזומן</MenuItem>
//                     <MenuItem value="check">צ'ק</MenuItem>
//                     <MenuItem value="transfer">העברה בנקאית</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>

//               {paymentInfo.paymentMethod === 'credit' && (
//                 <>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="מספר כרטיס אשראי"
//                       name="cardNumber"
//                       value={paymentInfo.cardNumber}
//                       onChange={handlePaymentChange}
//                       variant="outlined"
//                       InputProps={{
//                         startAdornment: <CreditCard color="action" sx={{ mr: 1 }} />,
//                       }}
//                     />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="תוקף (MM/YY)"
//                       name="expiryDate"
//                       value={paymentInfo.expiryDate}
//                       onChange={handlePaymentChange}
//                       variant="outlined"
//                       InputProps={{
//                         startAdornment: <CalendarToday color="action" sx={{ mr: 1 }} />,
//                       }}
//                     />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="CVV"
//                       name="cvv"
//                       value={paymentInfo.cvv}
//                       onChange={handlePaymentChange}
//                       variant="outlined"
//                       InputProps={{
//                         startAdornment: <Receipt color="action" sx={{ mr: 1 }} />,
//                       }}
//                     />
//                   </Grid>
//                 </>
//               )}

//               {paymentInfo.paymentMethod !== 'credit' && (
//                 <Grid item xs={12}>
//                   <Alert severity="info" sx={{ mt: 2 }}>
//                     {paymentInfo.paymentMethod === 'cash' && 'יש להגיע למשרד עם מזומן לתשלום.'}
//                     {paymentInfo.paymentMethod === 'check' && 'יש להגיע למשרד עם צ\'ק לתשלום.'}
//                     {paymentInfo.paymentMethod === 'transfer' && 'פרטי חשבון להעברה בנקאית יישלחו אליך במייל.'}
//                   </Alert>
//                 </Grid>
//               )}

//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="הערות לתשלום"
//                   name="notes"
//                   value={paymentInfo.notes}
//                   onChange={handlePaymentChange}
//                   variant="outlined"
//                   multiline
//                   rows={3}
//                   InputProps={{
//                     startAdornment: <EventNote color="action" sx={{ mr: 1, alignSelf: 'flex-start', mt: 1 }} />,
//                   }}
//                 />
//               </Grid>
//             </Grid>
//           </Box>
//         );

//       case 2:
//         return (
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
//               אישור פרטי הרשמה
//             </Typography>

//             <Card sx={{
//               borderRadius: '16px',
//               boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//               mb: 3
//             }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
//                   פרטי הקורס
//                 </Typography>

//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       שם הקורס:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {course?.nameOfCourse || 'לא זמין'}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       תאריך התחלה:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {course?.startDateOfCourse || 'לא זמין'}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       יום בשבוע:
//                     </Typography>

//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {course?.dayOfCourse || 'לא זמין'}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       כמות מפגשים:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {course?.amountOfMettingInCourse || '0'}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>

//             <Card sx={{
//               borderRadius: '16px',
//               boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//               mb: 3
//             }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
//                   פרטי התלמיד
//                 </Typography>

//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       שם התלמיד:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {student1.nameOfStudent || 'לא זמין'}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       ת.ז:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {student1.idOfStudent  || 'לא זמין'}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       טלפון:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {student1.phoneOfStudent || 'לא זמין'}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       דוא"ל:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {student1.emailOfStudent || 'לא זמין'}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>

//             <Card sx={{
//               borderRadius: '16px',
//               boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//               mb: 3
//             }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
//                   פרטי תשלום
//                 </Typography>

//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       אמצעי תשלום:
//                     </Typography>
//                     <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                       {paymentInfo.paymentMethod === 'credit' && 'כרטיס אשראי'}
//                       {paymentInfo.paymentMethod === 'cash' && 'מזומן'}
//                       {paymentInfo.paymentMethod === 'check' && 'צ\'ק'}
//                       {paymentInfo.paymentMethod === 'transfer' && 'העברה בנקאית'}
//                     </Typography>
//                   </Grid>

//                   {paymentInfo.paymentMethod === 'credit' && (
//                     <>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="body2" color="text.secondary">
//                           מספר כרטיס:
//                         </Typography>
//                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                           {paymentInfo.cardNumber ? `xxxx-xxxx-xxxx-${paymentInfo.cardNumber.slice(-4)}` : 'לא הוזן'}
//                         </Typography>
//                       </Grid>

//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="body2" color="text.secondary">
//                           תוקף:
//                         </Typography>
//                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                           {paymentInfo.expiryDate || 'לא הוזן'}
//                         </Typography>
//                       </Grid>
//                     </>
//                   )}

//                   {paymentInfo.notes && (
//                     <Grid item xs={12}>
//                       <Typography variant="body2" color="text.secondary">
//                         הערות לתשלום:
//                       </Typography>
//                       <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                         {paymentInfo.notes}
//                       </Typography>
//                     </Grid>
//                   )}
//                 </Grid>
//               </CardContent>
//             </Card>

//             <Alert severity="info" sx={{ mb: 3 }}>
//               לחיצה על "אישור" תשלים את תהליך ההרשמה לקורס.
//             </Alert>
//           </Box>
//         );

//       default:
//         return 'שלב לא ידוע';
//     }
//   };

//   // If registration is successful, show success message
//   if (success) {
//     return (
//       <Container maxWidth="md" sx={{ py: 5, direction: 'rtl' }}>
//         <Paper sx={{
//           p: 4,
//           borderRadius: '16px',
//           boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//           textAlign: 'center'
//         }}>
//           <Avatar sx={{
//             bgcolor: 'success.main',
//             width: 80,
//             height: 80,
//             mx: 'auto',
//             mb: 3
//           }}>
//             <CheckCircle sx={{ fontSize: 50 }} />
//           </Avatar>

//           <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
//             ההרשמה הושלמה בהצלחה!
//           </Typography>

//           <Typography variant="body1" sx={{ mb: 4 }}>
//             הרישום לקורס "{course?.nameOfCourse}" בוצע בהצלחה.
//             פרטי הקורס ישלחו אליך בהקדם.
//           </Typography>

//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             onClick={() => navigate('/')}
//             sx={{
//               borderRadius: '30px',
//               py: 1.5,
//               px: 4,
//               fontWeight: 600,
//               fontSize: '1rem',
//             }}
//           >
//             חזרה לדף הבית
//           </Button>
//         </Paper>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="md" sx={{ py: 5, direction: 'rtl' }}>
//       <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
//         <Logo size={80} onClick={() => navigate('/')} />
//       </Box>

//       <Paper sx={{
//         p: 4,
//         borderRadius: '16px',
//         boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
//       }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//           <Button
//             onClick={() => navigate(-1)}
//             startIcon={<ArrowBack />}
//             sx={{ mr: 2 }}
//           >
//             חזרה
//           </Button>

//           <Typography variant="h5" sx={{ fontWeight: 700 }}>
//             הרשמה לקורס {course?.nameOfCourse}
//           </Typography>
//         </Box>

//         <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>

//         {getStepContent(activeStep)}

//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
//           <Button
//             disabled={activeStep === 0}
//             onClick={handleBack}
//             sx={{ mr: 1 }}
//           >
//             חזרה
//           </Button>

//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleNext}
//             disabled={
//               (activeStep === 0 && !selectedStudent) ||
//               loading
//             }
//             startIcon={activeStep === steps.length - 1 ?
//               (loading ? <CircularProgress size={20} color="inherit" /> : <CheckCircle />) :
//               <PersonAdd />
//             }
//             sx={{
//               borderRadius: '8px',
//               fontWeight: 600,
//             }}
//           >
//             {activeStep === steps.length - 1 ? 'אישור' : 'המשך'}
//           </Button>
//         </Box>
//       </Paper>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default JoinCourse;              
////////////////////////////////////AAAAAA///////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Grid,
//   Divider,
//   Stepper,
//   Step,
//   StepLabel,
//   CircularProgress,
//   Alert,
//   Chip,
//   Card,
//   CardContent,
//   CardMedia,
//   Avatar
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import SchoolIcon from '@mui/icons-material/School';
// import PaymentIcon from '@mui/icons-material/Payment';
// import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

// import ReceiptGenerator from './ReceiptGenerator';
// import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
// import { joinCourseThunk } from '../../redux/Thunks/joinCourseThunk';

// // סגנונות מותאמים
// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderRadius: '16px',
//   boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
//   overflow: 'hidden',
//   position: 'relative',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '6px',
//     background: 'linear-gradient(90deg, #3498db, #2ecc71)',
//   }
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   padding: '12px 24px',
//   fontWeight: 'bold',
//   borderRadius: '8px',
//   boxShadow: theme.shadows[3],
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-2px)',
//     boxShadow: theme.shadows[6],
//   }
// }));

// const CourseCard = styled(Card)(({ theme }) => ({
//   borderRadius: '12px',
//   overflow: 'hidden',
//   boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   transition: 'transform 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//   }
// }));

// const SuccessBox = styled(Box)(({ theme }) => ({
//   textAlign: 'center',
//   padding: theme.spacing(4),
//   backgroundColor: 'rgba(46, 204, 113, 0.1)',
//   borderRadius: '12px',
//   border: '1px solid rgba(46, 204, 113, 0.3)',
//   marginTop: theme.spacing(4),
//   marginBottom: theme.spacing(4),
// }));

// const JoinCourse = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // מצבים
//   const [activeStep, setActiveStep] = useState(0);
//   const [studentDetails, setStudentDetails] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     idNumber: ''
//   });
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: '',
//     cardHolder: '',
//     expiryDate: '',
//     cvv: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [joinSuccess, setJoinSuccess] = useState(false);
//   const course = useSelector(state => state.courses.selectC);
//   // סלקטורים מהסטור
//   // const { course, loading: courseLoading, error: courseError } = useSelector(state => state.courses);
//   // const { loading: joinLoading, error: joinError } = useSelector(state => state.studentCourses);
//   const [selectedStudent, setSelectedStudent] = useState('');
//   const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);
//   // שלבי ההרשמה
//   const steps = ['פרטי סטודנט', 'פרטי תשלום', 'סיכום והרשמה'];

//   // טעינת פרטי הקורס בעת טעינת הדף
//   useEffect(() => {
//     if (id) {
//       dispatch(getCourseByCourseIdThunk(id));
//     }
//   }, [dispatch, id]);

//   // טיפול בשינויים בפרטי הסטודנט
//   const handleStudentChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedStudentDetails(selectedStudent)
//     setStudentDetails(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // ניקוי שגיאות בעת הקלדה
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   // טיפול בשינויים בפרטי התשלום
//   const handlePaymentChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentDetails(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // ניקוי שגיאות בעת הקלדה
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   // אימות פרטי סטודנט
//   const validateStudentDetails = () => {
//     const newErrors = {};

//     if (!studentDetails.firstName.trim()) {
//       newErrors.firstName = 'שם פרטי הוא שדה חובה';
//     }

//     if (!studentDetails.lastName.trim()) {
//       newErrors.lastName = 'שם משפחה הוא שדה חובה';
//     }

//     if (!studentDetails.email.trim()) {
//       newErrors.email = 'אימייל הוא שדה חובה';
//     } else if (!/\S+@\S+\.\S+/.test(studentDetails.email)) {
//       newErrors.email = 'כתובת אימייל לא תקינה';
//     }

//     if (!studentDetails.phone.trim()) {
//       newErrors.phone = 'מספר טלפון הוא שדה חובה';
//     } else if (!/^0\d{8,9}$/.test(studentDetails.phone.replace(/[-\s]/g, ''))) {
//       newErrors.phone = 'מספר טלפון לא תקין';
//     }

//     if (!studentDetails.idNumber.trim()) {
//       newErrors.idNumber = 'מספר תעודת זהות הוא שדה חובה';
//     } else if (!/^\d{9}$/.test(studentDetails.idNumber.replace(/[-\s]/g, ''))) {
//       newErrors.idNumber = 'מספר תעודת זהות לא תקין';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // אימות פרטי תשלום
//   const validatePaymentDetails = () => {
//     const newErrors = {};

//     if (!paymentDetails.cardNumber.trim()) {
//       newErrors.cardNumber = 'מספר כרטיס הוא שדה חובה';
//     } else if (!/^\d{16}$/.test(paymentDetails.cardNumber.replace(/[-\s]/g, ''))) {
//       newErrors.cardNumber = 'מספר כרטיס לא תקין';
//     }

//     if (!paymentDetails.cardHolder.trim()) {
//       newErrors.cardHolder = 'שם בעל הכרטיס הוא שדה חובה';
//     }

//     if (!paymentDetails.expiryDate.trim()) {
//       newErrors.expiryDate = 'תאריך תפוגה הוא שדה חובה';
//     } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentDetails.expiryDate)) {
//       newErrors.expiryDate = 'פורמט תאריך תפוגה לא תקין (MM/YY)';
//     }

//     if (!paymentDetails.cvv.trim()) {
//       newErrors.cvv = 'קוד אבטחה הוא שדה חובה';
//     } else if (!/^\d{3,4}$/.test(paymentDetails.cvv)) {
//       newErrors.cvv = 'קוד אבטחה לא תקין';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // מעבר לשלב הבא
//   const handleNext = () => {
//     if (activeStep === 0) {
//       if (validateStudentDetails()) {
//         setActiveStep(prev => prev + 1);
//       }
//     } else if (activeStep === 1) {
//       if (validatePaymentDetails()) {
//         setActiveStep(prev => prev + 1);
//       }
//     }
//   };

//   // חזרה לשלב הקודם
//   const handleBack = () => {
//     setActiveStep(prev => prev - 1);
//   };

//   // שליחת טופס ההרשמה
//   const handleSubmit = async () => {
//     setIsSubmitting(true);

//     try {
//       // יצירת אובייקט הנתונים לשליחה
//       const joinData = {
//         studentId: parseInt(studentDetails.idNumber),
//         courseId: parseInt(id),
//         firstName: studentDetails.firstName,
//         lastName: studentDetails.lastName,
//         email: studentDetails.email,
//         phone: studentDetails.phone,
//         // נתוני תשלום לא נשלחים לשרת במקרה אמיתי (רק לצורך הדגמה)
//         paymentMethod: 'Credit Card'
//       };

//       // שליחת הנתונים לשרת
//       const resultAction = await dispatch(joinCourseThunk({ sId: joinData.studentId, id: joinData.courseId }));

//       if (joinCourseThunk.fulfilled.match(resultAction)) {
//         // הרשמה הצליחה
//         setJoinSuccess(true);
//       }
//     } catch (error) {
//       console.error('Failed to join course:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // הכנת נתוני סטודנט לקבלה
//   const prepareStudentDataForReceipt = () => {
//     return {
//       id: studentDetails.idNumber,
//       firstName: studentDetails.firstName,
//       lastName: studentDetails.lastName,
//       email: studentDetails.email,
//       phone: studentDetails.phone
//     };
//   };

//   // תצוגת תוכן לפי שלב
//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="שם פרטי"
//                 name="firstName"
//                 value={studentDetails.firstName}
//                 onChange={handleStudentChange}
//                 error={!!errors.firstName}
//                 helperText={errors.firstName}
//                 variant="outlined"
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="שם משפחה"
//                 name="lastName"
//                 value={studentDetails.lastName}
//                 onChange={handleStudentChange}
//                 error={!!errors.lastName}
//                 helperText={errors.lastName}
//                 variant="outlined"
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="כתובת אימייל"
//                 name="email"
//                 type="email"
//                 value={studentDetails.email}
//                 onChange={handleStudentChange}
//                 error={!!errors.email}
//                 helperText={errors.email}
//                 variant="outlined"
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="מספר טלפון"
//                 name="phone"
//                 value={studentDetails.phone}
//                 onChange={handleStudentChange}
//                 error={!!errors.phone}
//                 helperText={errors.phone}
//                 variant="outlined"
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="מספר תעודת זהות"
//                 name="idNumber"
//                 value={studentDetails.idNumber}
//                 onChange={handleStudentChange}
//                 error={!!errors.idNumber}
//                 helperText={errors.idNumber}
//                 variant="outlined"
//                 required
//               />
//             </Grid>
//           </Grid>
//         );
//       case 1:
//         return (
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="מספר כרטיס אשראי"
//                 name="cardNumber"
//                 value={paymentDetails.cardNumber}
//                 onChange={handlePaymentChange}
//                 error={!!errors.cardNumber}
//                 helperText={errors.cardNumber}
//                 variant="outlined"
//                 required
//                 inputProps={{ maxLength: 19 }}
//                 placeholder="1234 5678 9012 3456"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="שם בעל הכרטיס"
//                 name="cardHolder"
//                 value={paymentDetails.cardHolder}
//                 onChange={handlePaymentChange}
//                 error={!!errors.cardHolder}
//                 helperText={errors.cardHolder}
//                 variant="outlined"
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="תאריך תפוגה (MM/YY)"
//                 name="expiryDate"
//                 value={paymentDetails.expiryDate}
//                 onChange={handlePaymentChange}
//                 error={!!errors.expiryDate}
//                 helperText={errors.expiryDate}
//                 variant="outlined"
//                 required
//                 inputProps={{ maxLength: 5 }}
//                 placeholder="MM/YY"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="קוד אבטחה (CVV ) "
//                 name="cvv"
//                 value={paymentDetails.cvv}
//                 onChange={handlePaymentChange}
//                 error={!!errors.cvv}
//                 helperText={errors.cvv}
//                 variant="outlined"
//                 required
//                 inputProps={{ maxLength: 4 }}
//                 type="password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Alert severity="info" sx={{ mt: 2 }}>
//                 הערה: זהו טופס לצורך הדגמה בלבד. אין לספק פרטי כרטיס אשראי אמיתיים.
//               </Alert>
//             </Grid>
//           </Grid>
//         );
//       case 2:
//         return (
//           <Grid container spacing={4}>
//             <Grid item xs={12}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
//                 סיכום הרשמה
//               </Typography>
//               <Divider sx={{ mb: 3 }} />
//             </Grid>

//             {/* פרטי הקורס */}
//             <Grid item xs={12} md={6}>
//               <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
//                 <CardContent>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                     <SchoolIcon color="primary" sx={{ mr: 1 }} />
//                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                       פרטי הקורס
//                     </Typography>
//                   </Box>
//                   <Divider sx={{ mb: 2 }} />

//                   <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
//                     {course?.nameOfCourse}
//                   </Typography>

//                   <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                     {course?.descriptionOfCourse}
//                   </Typography>

//                   <Chip
//                     label={`מחיר: ₪${course?.priceOfCourse}`}
//                     color="primary"
//                     sx={{ fontWeight: 'bold' }}
//                   />
//                 </CardContent>
//               </Card>
//             </Grid>

//             {/* פרטי הסטודנט */}
//             <Grid item xs={12} md={6}>
//               <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
//                 <CardContent>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                     <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
//                       {studentDetails.firstName.charAt(0)}
//                     </Avatar>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                       פרטי הסטודנט
//                     </Typography>
//                   </Box>
//                   <Divider sx={{ mb: 2 }} />
//                   <Typography variant="body2" color="text.secondary">
//                     שם התלמיד:
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                     {selectedStudentDetails?.nameOfStudent || 'לא זמין'}
//                   </Typography>
//                   {/* <Typography variant="body2" sx={{ mb: 1 }}>
//                     <strong>שם מלא:</strong> {studentDetails.firstName} {studentDetails.lastName}
//                   </Typography>
                  
//                   <Typography variant="body2" sx={{ mb: 1 }}>
//                     <strong>אימייל:</strong> {studentDetails.email}
//                   </Typography>
                  
//                   <Typography variant="body2" sx={{ mb: 1 }}>
//                     <strong>טלפון:</strong> {studentDetails.phone}
//                   </Typography>
                  
//                   <Typography variant="body2">
//                     <strong>ת.ז:</strong> {studentDetails.idNumber}
//                   </Typography> */}
//                 </CardContent>
//               </Card>
//             </Grid>

//             {/* פרטי תשלום */}
//             <Grid item xs={12}>
//               <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
//                 <CardContent>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                     <PaymentIcon color="primary" sx={{ mr: 1 }} />
//                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                       פרטי תשלום
//                     </Typography>
//                   </Box>
//                   <Divider sx={{ mb: 2 }} />

//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <Typography variant="body2" sx={{ mb: 1 }}>
//                         <strong>מספר כרטיס:</strong> **** **** **** {paymentDetails.cardNumber.slice(-4)}
//                       </Typography>

//                       <Typography variant="body2">
//                         <strong>שם בעל הכרטיס:</strong> {paymentDetails.cardHolder}
//                       </Typography>
//                     </Grid>

//                     <Grid item xs={12} sm={6}>
//                       <Typography variant="body2" sx={{ mb: 1 }}>
//                         <strong>תאריך תפוגה:</strong> {paymentDetails.expiryDate}
//                       </Typography>

//                       <Typography variant="body2">
//                         <strong>סכום לתשלום:</strong> ₪{course?.priceOfCourse}
//                       </Typography>
//                     </Grid>
//                   </Grid>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         );
//       default:
//         return 'שלב לא ידוע';
//     }
//   };

//   // אם הקורס בטעינה
//   // if (courseLoading) {
//   //   return (
//   //     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
//   //       <CircularProgress />
//   //     </Box>
//   //   );
//   // }

//   // אם יש שגיאה בטעינת הקורס
//   // if (courseError) {
//   //   return (
//   //     <Box sx={{ p: 3 }}>
//   //       <Alert severity="error">
//   //         שגיאה בטעינת פרטי הקורס. אנא נסה שוב מאוחר יותר.
//   //       </Alert>
//   //       <Button 
//   //         variant="outlined" 
//   //         onClick={() => navigate('/courses')} 
//   //         sx={{ mt: 2 }}
//   //       >
//   //         חזרה לרשימת הקורסים
//   //       </Button>
//   //     </Box>
//   //   );
//   // }

//   // אם הקורס לא נמצא
//   if (!course) {
//     return (
//       <Box sx={{ p: 3 }}>
//         <Alert severity="warning">
//           הקורס המבוקש לא נמצא.
//         </Alert>
//         <Button
//           variant="outlined"
//           onClick={() => navigate('/courses')}
//           sx={{ mt: 2 }}
//         >
//           חזרה לרשימת הקורסים
//         </Button>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ maxWidth: '1000px', mx: 'auto', p: { xs: 2, md: 4 } }}>
//       <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
//         הרשמה לקורס
//       </Typography>

//       {/* כרטיס הקורס */}
//       {!joinSuccess && (
//         <CourseCard sx={{ mb: 4 }}>
//           {course.imageOfCourse && (
//             <CardMedia
//               component="img"
//               height="200"
//               image={course.imageOfCourse}
//               alt={course.nameOfCourse}
//             />
//           )}
//           <CardContent>
//             <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
//               {course.nameOfCourse}
//             </Typography>

//             <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//               {course.descriptionOfCourse}
//             </Typography>

//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <Chip
//                 label={`מחיר: ₪${course.priceOfCourse}`}
//                 color="primary"
//                 sx={{ fontWeight: 'bold' }}
//               />

//               {course.categoryOfCourse && (
//                 <Chip
//                   label={course.categoryOfCourse}
//                   variant="outlined"
//                   size="small"
//                 />
//               )}
//             </Box>
//           </CardContent>
//         </CourseCard>
//       )}

//       {/* תהליך ההרשמה */}
//       {!joinSuccess ? (
//         <StyledPaper>
//           <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>

//           <Box sx={{ mb: 4 }}>
//             {getStepContent(activeStep)}
//           </Box>

//           {/* {joinError && (
//             <Alert severity="error" sx={{ mb: 3 }}>
//               אירעה שגיאה בתהליך ההרשמה. אנא נסה שוב מאוחר יותר.
//             </Alert>
//           )} */}

//           <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
//             <Button
//               variant="outlined"
//               onClick={activeStep === 0 ? () => navigate('/courses') : handleBack}
//               sx={{ mr: 1 }}
//               disabled={isSubmitting}
//             >
//               {activeStep === 0 ? 'ביטול' : 'חזרה'}
//             </Button>

//             <StyledButton
//               variant="contained"
//               color={activeStep === steps.length - 1 ? "success" : "primary"}
//               onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//               disabled={isSubmitting}
//               startIcon={activeStep === steps.length - 1 ? <ReceiptLongIcon /> : null}
//             >
//               {isSubmitting ? (
//                 <CircularProgress size={24} color="inherit" />
//               ) : activeStep === steps.length - 1 ? (
//                 'סיום והרשמה'
//               ) : (
//                 'המשך'
//               )}
//             </StyledButton>
//           </Box>
//         </StyledPaper>
//       ) : (
//         // תצוגת הצלחה
//         <StyledPaper>
//           <SuccessBox>
//             <CheckCircleIcon color="success" sx={{ fontSize: 64, mb: 2 }} />

//             <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'success.main' }}>
//               ההרשמה הושלמה בהצלחה!
//             </Typography>

//             <Typography variant="body1" paragraph>
//               ברכות! נרשמת בהצלחה לקורס "{course.nameOfCourse}".
//             </Typography>

//             <Typography variant="body1" paragraph>
//               אישור הרשמה נשלח לכתובת האימייל שלך: {studentDetails.email}
//             </Typography>
//           </SuccessBox>

//           {/* קומפוננטת הדפסת קבלה */}
//           <Box sx={{ mb: 4 }}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
//               קבלה עבור הרכישה
//             </Typography>

//             <ReceiptGenerator
//               courseData={course}
//               studentData={prepareStudentDataForReceipt()}
//             />
//           </Box>

//           <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
//             <StyledButton
//               variant="outlined"
//               color="primary"
//               onClick={() => navigate('/Course')}
//             >
//               חזרה לרשימת הקורסים
//             </StyledButton>

//             <StyledButton
//               variant="contained"
//               color="primary"
//               onClick={() => navigate('/student/dashboard')}
//             >
//               מעבר לאזור האישי
//             </StyledButton>
//           </Box>
//         </StyledPaper>
//       )}
//     </Box>
//   );
// };

// export default JoinCourse;
///////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Grid,
  Divider,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Alert,
  Chip,
  Card,
  CardContent,
  CardMedia,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ReceiptGenerator from './ReceiptGenerator';
import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
import { joinCourseThunk } from '../../redux/Thunks/joinCourseThunk';

// סגנונות מותאמים
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '6px',
    background: 'linear-gradient(90deg, #3498db, #2ecc71)',
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  fontWeight: 'bold',
  borderRadius: '8px',
  boxShadow: theme.shadows[3],
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[6],
  }
}));

const CourseCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const SuccessBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  backgroundColor: 'rgba(46, 204, 113, 0.1)',
  borderRadius: '12px',
  border: '1px solid rgba(46, 204, 113, 0.3)',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const JoinCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // מצבים
  const [activeStep, setActiveStep] = useState(0);
  const [studentDetails, setStudentDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idNumber: ''
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);
  const course = useSelector(state => state.courses.selectC);
  
  // סלקטורים מהסטור
  // const { course, loading: courseLoading, error: courseError } = useSelector(state => state.courses);
  // const { loading: joinLoading, error: joinError } = useSelector(state => state.studentCourses);
  
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);
  
  // שלבי ההרשמה
  const steps = ['פרטי סטודנט', 'פרטי תשלום', 'סיכום והרשמה'];
  
  // טעינת פרטי הקורס בעת טעינת הדף
  useEffect(() => {
    if (id) {
      dispatch(getCourseByCourseIdThunk(id));
    }
  }, [dispatch, id]);
  
  // טיפול בשינויים בפרטי הסטודנט
  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setSelectedStudentDetails(selectedStudent)
    setStudentDetails(prev => ({
      ...prev,
      [name]: value
    }));
    // ניקוי שגיאות בעת הקלדה
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // טיפול בשינויים בפרטי התשלום
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
    // ניקוי שגיאות בעת הקלדה
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // אימות פרטי סטודנט
  const validateStudentDetails = () => {
    const newErrors = {};
    if (!studentDetails.firstName.trim()) {
      newErrors.firstName = 'שם פרטי הוא שדה חובה';
    }
    if (!studentDetails.lastName.trim()) {
      newErrors.lastName = 'שם משפחה הוא שדה חובה';
    }
    if (!studentDetails.email.trim()) {
      newErrors.email = 'אימייל הוא שדה חובה';
    } else if (!/\S+@\S+\.\S+/.test(studentDetails.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }
    if (!studentDetails.phone.trim()) {
      newErrors.phone = 'מספר טלפון הוא שדה חובה';
    } else if (!/^0\d{8,9}$/.test(studentDetails.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }
    if (!studentDetails.idNumber.trim()) {
      newErrors.idNumber = 'מספר תעודת זהות הוא שדה חובה';
    } else if (!/^\d{9}$/.test(studentDetails.idNumber.replace(/[-\s]/g, ''))) {
      newErrors.idNumber = 'מספר תעודת זהות לא תקין';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // אימות פרטי תשלום
  const validatePaymentDetails = () => {
    const newErrors = {};
    if (!paymentDetails.cardNumber.trim()) {
      newErrors.cardNumber = 'מספר כרטיס הוא שדה חובה';
    } else if (!/^\d{16}$/.test(paymentDetails.cardNumber.replace(/[-\s]/g, ''))) {
      newErrors.cardNumber = 'מספר כרטיס לא תקין';
    }
    if (!paymentDetails.cardHolder.trim()) {
      newErrors.cardHolder = 'שם בעל הכרטיס הוא שדה חובה';
    }
    if (!paymentDetails.expiryDate.trim()) {
      newErrors.expiryDate = 'תאריך תפוגה הוא שדה חובה';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentDetails.expiryDate)) {
      newErrors.expiryDate = 'פורמט תאריך תפוגה לא תקין (MM/YY)';
    }
    if (!paymentDetails.cvv.trim()) {
      newErrors.cvv = 'קוד אבטחה הוא שדה חובה';
    } else if (!/^\d{3,4}$/.test(paymentDetails.cvv)) {
      newErrors.cvv = 'קוד אבטחה לא תקין';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // מעבר לשלב הבא
  const handleNext = () => {
    if (activeStep === 0) {
      if (validateStudentDetails()) {
        setActiveStep(prev => prev + 1);
      }
    } else if (activeStep === 1) {
      if (validatePaymentDetails()) {
        setActiveStep(prev => prev + 1);
      }
    }
  };
  
  // חזרה לשלב הקודם
  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };
  
  // שליחת טופס ההרשמה
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // יצירת אובייקט הנתונים לשליחה
      const joinData = {
        studentId: parseInt(studentDetails.idNumber),
        courseId: parseInt(id),
        firstName: studentDetails.firstName,
        lastName: studentDetails.lastName,
        email: studentDetails.email,
        phone: studentDetails.phone,
        // נתוני תשלום לא נשלחים לשרת במקרה אמיתי (רק לצורך הדגמה)
        paymentMethod: 'Credit Card'
      };
      
      // שליחת הנתונים לשרת
      const resultAction = await dispatch(joinCourseThunk({ sId: joinData.studentId, id: joinData.courseId }));
      if (joinCourseThunk.fulfilled.match(resultAction)) {
        // הרשמה הצליחה
        setJoinSuccess(true);
      }
    } catch (error) {
      console.error('Failed to join course:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // הכנת נתוני סטודנט לקבלה
  const prepareStudentDataForReceipt = () => {
    return {
      id: studentDetails.idNumber,
      firstName: studentDetails.firstName,
      lastName: studentDetails.lastName,
      email: studentDetails.email,
      phone: studentDetails.phone
    };
  };
  
  // תצוגת תוכן לפי שלב
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="שם פרטי"
                name="firstName"
                value={studentDetails.firstName}
                onChange={handleStudentChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="שם משפחה"
                name="lastName"
                value={studentDetails.lastName}
                onChange={handleStudentChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="כתובת אימייל"
                name="email"
                type="email"
                value={studentDetails.email}
                onChange={handleStudentChange}
                error={!!errors.email}
                helperText={errors.email}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="מספר טלפון"
                name="phone"
                value={studentDetails.phone}
                onChange={handleStudentChange}
                error={!!errors.phone}
                helperText={errors.phone}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="מספר תעודת זהות"
                name="idNumber"
                value={studentDetails.idNumber}
                onChange={handleStudentChange}
                error={!!errors.idNumber}
                helperText={errors.idNumber}
                variant="outlined"
                required
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="מספר כרטיס אשראי"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentChange}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber}
                variant="outlined"
                required
                inputProps={{ maxLength: 19 }}
                placeholder="1234 5678 9012 3456"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="שם בעל הכרטיס"
                name="cardHolder"
                value={paymentDetails.cardHolder}
                onChange={handlePaymentChange}
                error={!!errors.cardHolder}
                helperText={errors.cardHolder}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="תאריך תפוגה (MM/YY)"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handlePaymentChange}
                error={!!errors.expiryDate}
                helperText={errors.expiryDate}
                variant="outlined"
                required
                inputProps={{ maxLength: 5 }}
                placeholder="MM/YY"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="קוד אבטחה (CVV ) "
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentChange}
                error={!!errors.cvv}
                helperText={errors.cvv}
                variant="outlined"
                required
                inputProps={{ maxLength: 4 }}
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Alert severity="info" sx={{ mt: 2 }}>
                הערה: זהו טופס לצורך הדגמה בלבד. אין לספק פרטי כרטיס אשראי אמיתיים.
              </Alert>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                סיכום הרשמה
              </Typography>
              <Divider sx={{ mb: 3 }} />
            </Grid>
            {/* פרטי הקורס */}
            <Grid item xs={12} md={6}>
              <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      פרטי הקורס
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
                    {course?.nameOfCourse}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {course?.descriptionOfCourse}
                  </Typography>
                  <Chip
                    label={`מחיר: ₪${course?.priceOfCourse}`}
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* פרטי הסטודנט */}
            <Grid item xs={12} md={6}>
              <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
                      {studentDetails.firstName.charAt(0)}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      פרטי הסטודנט
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>שם מלא:</strong> {studentDetails.firstName} {studentDetails.lastName}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>אימייל:</strong> {studentDetails.email}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>טלפון:</strong> {studentDetails.phone}
                  </Typography>
                  
                  <Typography variant="body2">
                    <strong>ת.ז:</strong> {studentDetails.idNumber}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* פרטי תשלום */}
            <Grid item xs={12}>
              <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PaymentIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      פרטי תשלום
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>מספר כרטיס:</strong> **** **** **** {paymentDetails.cardNumber.slice(-4)}
                      </Typography>
                      <Typography variant="body2">
                        <strong>שם בעל הכרטיס:</strong> {paymentDetails.cardHolder}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>תאריך תפוגה:</strong> {paymentDetails.expiryDate}
                      </Typography>
                      <Typography variant="body2">
                        <strong>סכום לתשלום:</strong> ₪{course?.priceOfCourse}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );
      default:
        return 'שלב לא ידוע';
    }
  };

  // אם הקורס בטעינה
  // if (courseLoading) {
  //   return (
  //     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  // אם יש שגיאה בטעינת הקורס
  // if (courseError) {
  //   return (
  //     <Box sx={{ p: 3 }}>
  //       <Alert severity="error">
  //         שגיאה בטעינת פרטי הקורס. אנא נסה שוב מאוחר יותר.
  //       </Alert>
  //       <Button  
  //         variant="outlined"  
  //         onClick={() => navigate('/courses')}  
  //         sx={{ mt: 2 }}
  //       >
  //         חזרה לרשימת הקורסים
  //       </Button>
  //     </Box>
  //   );
  // }

  // אם הקורס לא נמצא
  if (!course) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="warning">
          הקורס המבוקש לא נמצא.
        </Alert>
        <Button
          variant="outlined"
          onClick={() => navigate('/courses')}
          sx={{ mt: 2 }}
        >
          חזרה לרשימת הקורסים
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: '1000px', mx: 'auto', p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        הרשמה לקורס
      </Typography>
      {/* כרטיס הקורס */}
      {!joinSuccess && (
        <CourseCard sx={{ mb: 4 }}>
          {course.imageOfCourse && (
            <CardMedia
              component="img"
              height="200"
              image={course.imageOfCourse}
              alt={course.nameOfCourse}
            />
          )}
          <CardContent>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
              {course.nameOfCourse}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {course.descriptionOfCourse}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Chip
                label={`מחיר: ₪${course.priceOfCourse}`}
                color="primary"
                sx={{ fontWeight: 'bold' }}
              />
              {course.categoryOfCourse && (
                <Chip
                  label={course.categoryOfCourse}
                  variant="outlined"
                  size="small"
                />
              )}
            </Box>
          </CardContent>
        </CourseCard>
      )}
      {/* תהליך ההרשמה */}
      {!joinSuccess ? (
        <StyledPaper>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mb: 4 }}>
            {getStepContent(activeStep)}
          </Box>
          {/* {joinError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              אירעה שגיאה בתהליך ההרשמה. אנא נסה שוב מאוחר יותר.
            </Alert>
          )} */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
            <Button
              variant="outlined"
              onClick={activeStep === 0 ? () => navigate('/courses') : handleBack}
              sx={{ mr: 1 }}
              disabled={isSubmitting}
            >
              {activeStep === 0 ? 'ביטול' : 'חזרה'}
            </Button>
            <StyledButton
              variant="contained"
              color={activeStep === steps.length - 1 ? "success" : "primary"}
              onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
              disabled={isSubmitting}
              startIcon={activeStep === steps.length - 1 ? <ReceiptLongIcon /> : null}
            >
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : activeStep === steps.length - 1 ? (
                'סיום והרשמה'
              ) : (
                'המשך'
              )}
            </StyledButton>
          </Box>
        </StyledPaper>
      ) : (
        // תצוגת הצלחה
        <StyledPaper>
          <SuccessBox>
            <CheckCircleIcon color="success" sx={{ fontSize: 64, mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'success.main' }}>
              ההרשמה הושלמה בהצלחה!
            </Typography>
            <Typography variant="body1" paragraph>
              ברכות! נרשמת בהצלחה לקורס "{course.nameOfCourse}".
            </Typography>
            <Typography variant="body1" paragraph>
              אישור הרשמה נשלח לכתובת האימייל שלך: {studentDetails.email}
            </Typography>
          </SuccessBox>
          {/* קומפוננטת הדפסת קבלה */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
              קבלה עבור הרכישה
            </Typography>
            <ReceiptGenerator
              courseData={course}
              studentData={prepareStudentDataForReceipt()}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <StyledButton
              variant="outlined"
              color="primary"
              onClick={() => navigate('/Course')}
            >
              חזרה לרשימת הקורסים
            </StyledButton>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={() => navigate('/student/dashboard')}
            >
              מעבר לאזור האישי
            </StyledButton>
          </Box>
        </StyledPaper>
      )}
    </Box>
  );
};

export default JoinCourse;











































