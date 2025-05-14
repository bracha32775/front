  // import React, { useState } from "react";
  // import { useDispatch, useSelector } from "react-redux";
  // import { addStudentThunk } from "../../../redux/Thunks/addStudentThunk";
  // import { setFlagStudentSlice } from "../../../redux/Slices/studentSlice";

  // // Material UI Components
  // import {
  //   Box,
  //   Button,
  //   Card,
  //   CardContent,
  //   CardHeader,
  //   Divider,
  //   Grid,
  //   InputAdornment,
  //   Paper,
  //   TextField,
  //   Typography,
  //   Snackbar,
  //   Alert,
  //   IconButton,
  //   Dialog,
  //   DialogTitle,
  //   DialogContent,
  //   DialogActions
  // } from "@mui/material";

  // // Icons
  // import SaveIcon from '@mui/icons-material/Save';
  // import EmailIcon from '@mui/icons-material/Email';
  // import PhoneIcon from '@mui/icons-material/Phone';
  // import HomeIcon from '@mui/icons-material/Home';
  // import PersonIcon from '@mui/icons-material/Person';
  // import CloseIcon from '@mui/icons-material/Close';

  // // CSS
  // import './AddStudent.css';

  // export const AddStudent = ({ onClose }) => {
  //   const dispatch = useDispatch();
  //   const flagClose = useSelector(state => state.students.flagClose);
  
  //   const [student, setStudent] = useState({
  //     nameOfStudent: "",
  //     phoneOfStudent: "",
  //     emailOfStudent: "",
  //     addressOfStudent: ""
  //   });

  //   // מצב לשגיאות ולידציה
  //   const [errors, setErrors] = useState({
  //     nameOfStudent: "",
  //     phoneOfStudent: "",
  //     emailOfStudent: "",
  //     addressOfStudent: ""
  //   });

  //   // מצב להודעות
  //   const [snackbar, setSnackbar] = useState({
  //     open: false,
  //     message: "",
  //     severity: "success"
  //   });
    
  //   // מצב לדיאלוג אישור
  //   const [confirmDialog, setConfirmDialog] = useState({
  //     open: false,
  //     title: "",
  //     message: ""
  //   });

  //   // פונקציה לבדיקת תקינות השדות
  //   const validateFields = () => {
  //     let tempErrors = {
  //       nameOfStudent: "",
  //       phoneOfStudent: "",
  //       emailOfStudent: "",
  //       addressOfStudent: ""
  //     };
  //     let isValid = true;

  //     // בדיקת שם
  //     if (!student.nameOfStudent) {
  //       tempErrors.nameOfStudent = "שם הוא שדה חובה";
  //       isValid = false;
  //     } else if (student.nameOfStudent.length < 2) {
  //       tempErrors.nameOfStudent = "שם חייב להכיל לפחות 2 תווים";
  //       isValid = false;
  //     }

  //     // בדיקת טלפון
  //     if (!student.phoneOfStudent) {
  //       tempErrors.phoneOfStudent = "מספר טלפון הוא שדה חובה";
  //       isValid = false;
  //     } else if (!/^0\d{8,9}$/.test(student.phoneOfStudent)) {
  //       tempErrors.phoneOfStudent = "מספר טלפון לא תקין (צריך להתחיל ב-0 ולהכיל 9-10 ספרות)";
  //       isValid = false;
  //     }

  //     // בדיקת אימייל
  //     if (!student.emailOfStudent) {
  //       tempErrors.emailOfStudent = "כתובת אימייל היא שדה חובה";
  //       isValid = false;
  //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(student.emailOfStudent)) {
  //       tempErrors.emailOfStudent = "כתובת אימייל לא תקינה";
  //       isValid = false;
  //     }

  //     // בדיקת כתובת (לא חובה אבל אם הוזנה צריכה להיות תקינה)
  //     if (student.addressOfStudent && student.addressOfStudent.length < 3) {
  //       tempErrors.addressOfStudent = "כתובת חייבת להכיל לפחות 3 תווים";
  //       isValid = false;
  //     }

  //     setErrors(tempErrors);
  //     return isValid;
  //   };

  //   // פונקציה לפתיחת דיאלוג אישור
  //   const openConfirmDialog = () => {
  //     if (validateFields()) {
  //       setConfirmDialog({
  //         open: true,
  //         title: "אישור הוספת תלמיד",
  //         message: `האם אתה בטוח שברצונך להוסיף את התלמיד ${student.nameOfStudent}?`
  //       });
  //     } else {
  //       setSnackbar({
  //         open: true,
  //         message: "אנא תקן את השגיאות בטופס",
  //         severity: "error"
  //       });
  //     }
  //   };

  //   // פונקציה לטיפול בשמירת התלמיד
  //   async function handleAddStudent() {
  //     try {
  //       await dispatch(addStudentThunk(student));
  //       setSnackbar({
  //         open: true,
  //         message: "התלמיד נוסף בהצלחה!",
  //         severity: "success"
  //       });
        
  //       // איפוס הטופס
  //       setStudent({
  //         nameOfStudent: "",
  //         phoneOfStudent: "",
  //         emailOfStudent: "",
  //         addressOfStudent: ""
  //       });
        
  //       // סגירת הטופס לאחר הוספה מוצלחת
  //       setTimeout(() => {
  //         if (onClose) onClose();
  //         else dispatch(setFlagStudentSlice(true));
  //       }, 1500);
  //     } catch (error) {
  //       setSnackbar({
  //         open: true,
  //         message: "אירעה שגיאה בהוספת התלמיד",
  //         severity: "error"
  //       });
  //     }
  //   }

  //   // סגירת הודעת Snackbar
  //   const handleCloseSnackbar = (event, reason) => {
  //     if (reason === 'clickaway') {
  //       return;
  //     }
  //     setSnackbar({ ...snackbar, open: false });
  //   };

  //   if (flagClose) {
  //     return null;
  //   }

  //   return (
  //     <Paper className="course-form-container">
  //       <Box sx={{
  //         display: 'flex',
  //         justifyContent: 'space-between',
  //         alignItems: 'center',
  //         mb: 2
  //       }}>
  //         <Typography variant="h5" component="h1" className="form-title">
  //           הוספת תלמיד חדש
  //         </Typography>
        
  //         <IconButton 
  //           onClick={onClose || (() => dispatch(setFlagStudentSlice(true)))}
  //           className="close-button"
  //           aria-label="סגור"
  //         >
  //           <CloseIcon />
  //         </IconButton>
  //       </Box>
      
  //       <Divider className="form-divider" />
      
  //       <Grid container spacing={3}>
  //         {/* פרטי התלמיד */}
  //         <Grid item xs={12}>
  //           <Card sx={{
  //             borderRadius: '16px',
  //             overflow: 'hidden',
  //             boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
  //             height: '100%',
  //             transition: 'all 0.3s ease',
  //             '&:hover': {
  //               transform: 'translateY(-5px)',
  //               boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
  //             }
  //           }}>
  //             <CardHeader 
  //               title="פרטי התלמיד" 
  //               sx={{
  //                 bgcolor: 'primary.main',
  //                 color: 'white',
  //                 fontWeight: 700,
  //               }}
  //             />
  //             <Divider />
  //             <CardContent sx={{ p: 3 }}>
  //               <Grid container spacing={2}>
  //                 <Grid item xs={12}>
  //                   <TextField
  //                     label="שם התלמיד"
  //                     variant="outlined"
  //                     fullWidth
  //                     value={student.nameOfStudent}
  //                     onChange={e => setStudent({ ...student, nameOfStudent: e.target.value })}
  //                     required
  //                     error={!!errors.nameOfStudent}
  //                     helperText={errors.nameOfStudent}
  //                     InputProps={{
  //                       startAdornment: (
  //                         <InputAdornment position="start">
  //                           <PersonIcon color={errors.nameOfStudent ? "error" : "primary"} />
  //                         </InputAdornment>
  //                       ),
  //                     }}
  //                     sx={{ mb: 2 }}
  //                   />
  //                 </Grid>
                
  //                 <Grid item xs={12} sm={6}>
  //                   <TextField
  //                     label="טלפון"
  //                     variant="outlined"
  //                     type="tel"
  //                     fullWidth
  //                     value={student.phoneOfStudent}
  //                     onChange={e => setStudent({ ...student, phoneOfStudent: e.target.value })}
  //                     required
  //                     error={!!errors.phoneOfStudent}
  //                     helperText={errors.phoneOfStudent}
  //                     InputProps={{
  //                       startAdornment: (
  //                         <InputAdornment position="start">
  //                           <PhoneIcon color={errors.phoneOfStudent ? "error" : "primary"} />
  //                         </InputAdornment>
  //                       ),
  //                     }}
  //                     sx={{ mb: 2 }}
  //                   />
  //                 </Grid>
                
  //                 <Grid item xs={12} sm={6}>
  //                   <TextField
  //                     label="דואר אלקטרוני"
  //                     variant="outlined"
  //                     type="email"
  //                     fullWidth
  //                     value={student.emailOfStudent}
  //                     onChange={e => setStudent({ ...student, emailOfStudent: e.target.value })}
  //                     required
  //                     error={!!errors.emailOfStudent}
  //                     helperText={errors.emailOfStudent}
  //                     InputProps={{
  //                       startAdornment: (
  //                         <InputAdornment position="start">
  //                           <EmailIcon color={errors.emailOfStudent ? "error" : "primary"} />
  //                         </InputAdornment>
  //                       ),
  //                     }}
  //                     sx={{ mb: 2 }}
  //                   />
  //                 </Grid>
                
  //                 <Grid item xs={12}>
  //                   <TextField
  //                     label="כתובת"
  //                     variant="outlined"
  //                     fullWidth
  //                     value={student.addressOfStudent}
  //                     onChange={e => setStudent({ ...student, addressOfStudent: e.target.value })}
  //                     error={!!errors.addressOfStudent}
  //                     helperText={errors.addressOfStudent}
  //                     InputProps={{
  //                       startAdornment: (
  //                         <InputAdornment position="start">
  //                           <HomeIcon color={errors.addressOfStudent ? "error" : "primary"} />
  //                         </InputAdornment>
  //                       ),
  //                     }}
  //                     sx={{ mb: 2 }}
  //                   />
  //                 </Grid>
  //               </Grid>
  //             </CardContent>
  //           </Card>
  //         </Grid>
        
  //         {/* כפתור שמירה */}
  //         <Grid item xs={12} className="save-button-container">
  //           <Button
  //             variant="contained"
  //             size="large"
  //             startIcon={<SaveIcon />}
  //             onClick={openConfirmDialog}
  //             className="save-button"
  //             sx={{
  //               fontWeight: 600,
  //               boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
  //             }}
  //           >
  //             שמור תלמיד
  //           </Button>
  //         </Grid>
  //       </Grid>

  //       {/* דיאלוג אישור */}
  //       <Dialog
  //         open={confirmDialog.open}
  //         onClose={() => setConfirmDialog({...confirmDialog, open: false})}
  //         sx={{ direction: 'rtl' }}
  //       >
  //         <DialogTitle sx={{
  //           bgcolor: 'primary.main',
  //           color: 'white',
  //           fontWeight: 700,
  //           display: 'flex',
  //           justifyContent: 'space-between',
  //           alignItems: 'center'
  //         }}>
  //           {confirmDialog.title}
  //           <IconButton 
  //             onClick={() => setConfirmDialog({...confirmDialog, open: false})} 
  //             sx={{ color: 'white' }}
  //             className="rotating-close-icon"
  //           >
  //             <CloseIcon />
  //           </IconButton>
  //         </DialogTitle>
  //         <DialogContent sx={{ p: 3, mt: 2 }}>
  //           <Typography variant="body1">
  //             {confirmDialog.message}
  //           </Typography>
  //         </DialogContent>
  //         <DialogActions sx={{ p: 2, bgcolor: 'background.paper' }}>
  //           <Button
  //             onClick={() => setConfirmDialog({...confirmDialog, open: false})}
  //             color="inherit"
  //             variant="outlined"
  //             startIcon={<CloseIcon />}
  //           >
  //             ביטול
  //           </Button>
  //           <Button
  //             onClick={() => {
  //               setConfirmDialog({...confirmDialog, open: false});
  //               handleAddStudent();
  //             }}
  //             color="primary"
  //             variant="contained"
  //             startIcon={<SaveIcon />}
  //             sx={{
  //               fontWeight: 600,
  //               boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
  //             }}
  //           >
  //             אישור
  //           </Button>
  //         </DialogActions>
  //       </Dialog>

  //       {/* הודעות Snackbar */}
  //       <Snackbar 
  //         open={snackbar.open} 
  //         autoHideDuration={6000} 
  //         onClose={handleCloseSnackbar}
  //         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  //       >
  //         <Alert 
  //           onClose={handleCloseSnackbar} 
  //           severity={snackbar.severity} 
  //           variant="filled"
  //           sx={{ width: '100%' }}
  //         >
  //           {snackbar.message}
  //         </Alert>
  //       </Snackbar>
  //     </Paper>
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
    InputAdornment,
    Paper,
    TextField,
    Typography,
    Snackbar,
    Alert,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
  } from "@mui/material";
  
  // Icons
  import SaveIcon from '@mui/icons-material/Save';
  import EmailIcon from '@mui/icons-material/Email';
  import PhoneIcon from '@mui/icons-material/Phone';
  import HomeIcon from '@mui/icons-material/Home';
  import PersonIcon from '@mui/icons-material/Person';
  import CloseIcon from '@mui/icons-material/Close';
  
  // CSS
  import './AddStudent.css';
  
  export const AddStudent = ({ onClose }) => {
    const dispatch = useDispatch();
    const flagClose = useSelector(state => state.students.flagClose);
    
    const [student, setStudent] = useState({
      nameOfStudent: "",
      phoneOfStudent: "",
      emailOfStudent: "",
      addressOfStudent: ""
    });
  
    // מצב לשגיאות ולידציה
    const [errors, setErrors] = useState({
      nameOfStudent: "",
      phoneOfStudent: "",
      emailOfStudent: "",
      addressOfStudent: ""
    });
  
    // מצב להודעות
    const [snackbar, setSnackbar] = useState({
      open: false,
      message: "",
      severity: "success"
    });
    
    // מצב לדיאלוג אישור
    const [confirmDialog, setConfirmDialog] = useState({
      open: false,
      title: "",
      message: ""
    });
  
    // פונקציה לבדיקת תקינות השדות
    const validateFields = () => {
      let tempErrors = {
        nameOfStudent: "",
        phoneOfStudent: "",
        emailOfStudent: "",
        addressOfStudent: ""
      };
      let isValid = true;
  
      // בדיקת שם
      if (!student.nameOfStudent) {
        tempErrors.nameOfStudent = "שם הוא שדה חובה";
        isValid = false;
      } else if (student.nameOfStudent.length < 2) {
        tempErrors.nameOfStudent = "שם חייב להכיל לפחות 2 תווים";
        isValid = false;
      }
  
      // בדיקת טלפון
      if (!student.phoneOfStudent) {
        tempErrors.phoneOfStudent = "מספר טלפון הוא שדה חובה";
        isValid = false;
      } else if (!/^0\d{8,9}$/.test(student.phoneOfStudent)) {
        tempErrors.phoneOfStudent = "מספר טלפון לא תקין (צריך להתחיל ב-0 ולהכיל 9-10 ספרות)";
        isValid = false;
      }
  
      // בדיקת אימייל
      if (!student.emailOfStudent) {
        tempErrors.emailOfStudent = "כתובת אימייל היא שדה חובה";
        isValid = false;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(student.emailOfStudent)) {
        tempErrors.emailOfStudent = "כתובת אימייל לא תקינה";
        isValid = false;
      }
  
      // בדיקת כתובת (לא חובה אבל אם הוזנה צריכה להיות תקינה)
      if (student.addressOfStudent && student.addressOfStudent.length < 3) {
        tempErrors.addressOfStudent = "כתובת חייבת להכיל לפחות 3 תווים";
        isValid = false;
      }
  
      setErrors(tempErrors);
      return isValid;
    };
  
    // פונקציה לפתיחת דיאלוג אישור
    const openConfirmDialog = () => {
      if (validateFields()) {
        setConfirmDialog({
          open: true,
          title: "אישור הוספת תלמיד",
          message: `האם אתה בטוח שברצונך להוסיף את התלמיד ${student.nameOfStudent}?`
        });
      } else {
        setSnackbar({
          open: true,
          message: "אנא תקן את השגיאות בטופס",
          severity: "error"
        });
      }
    };
  
    // פונקציה לטיפול בשמירת התלמיד
    async function handleAddStudent() {
      try {
        await dispatch(addStudentThunk(student));
        setSnackbar({
          open: true,
          message: "התלמיד נוסף בהצלחה!",
          severity: "success"
        });
        
        // איפוס הטופס
        setStudent({
          nameOfStudent: "",
          phoneOfStudent: "",
          emailOfStudent: "",
          addressOfStudent: ""
        });
        
        // סגירת הטופס לאחר הוספה מוצלחת
        setTimeout(() => {
          if (onClose) onClose();
          else dispatch(setFlagStudentSlice(true));
        }, 1500);
      } catch (error) {
        setSnackbar({
          open: true,
          message: "אירעה שגיאה בהוספת התלמיד",
          severity: "error"
        });
      }
    }
  
    // סגירת הודעת Snackbar
    const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbar({ ...snackbar, open: false });
    };
  
    if (flagClose) {
      return null;
    }
  
    return (
      <Paper className="course-form-container">
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2
        }}>
          <Typography variant="h5" component="h1" className="form-title">
            הוספת תלמיד חדש
          </Typography>
          
          <IconButton 
            onClick={onClose || (() => dispatch(setFlagStudentSlice(true)))}
            className="close-button"
            aria-label="סגור"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider className="form-divider" />
        
        <Grid container spacing={3}>
          {/* פרטי התלמיד */}
          <Grid item xs={12}>
            <Card sx={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              height: '100%',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
              }
            }}>
              <CardHeader 
                title="פרטי התלמיד" 
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  fontWeight: 700,
                }}
              />
              <Divider />
              <CardContent sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="שם התלמיד"
                      variant="outlined"
                      fullWidth
                      value={student.nameOfStudent}
                      onChange={e => setStudent({ ...student, nameOfStudent: e.target.value })}
                      required
                      error={!!errors.nameOfStudent}
                      helperText={errors.nameOfStudent}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color={errors.nameOfStudent ? "error" : "primary"} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="טלפון"
                      variant="outlined"
                      type="tel"
                      fullWidth
                      value={student.phoneOfStudent}
                      onChange={e => setStudent({ ...student, phoneOfStudent: e.target.value })}
                      required
                      error={!!errors.phoneOfStudent}
                      helperText={errors.phoneOfStudent}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon color={errors.phoneOfStudent ? "error" : "primary"} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="דואר אלקטרוני"
                      variant="outlined"
                      type="email"
                      fullWidth
                      value={student.emailOfStudent}
                      onChange={e => setStudent({ ...student, emailOfStudent: e.target.value })}
                      required
                      error={!!errors.emailOfStudent}
                      helperText={errors.emailOfStudent}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color={errors.emailOfStudent ? "error" : "primary"} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      label="כתובת"
                      variant="outlined"
                      fullWidth
                      value={student.addressOfStudent}
                      onChange={e => setStudent({ ...student, addressOfStudent: e.target.value })}
                      error={!!errors.addressOfStudent}
                      helperText={errors.addressOfStudent}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HomeIcon color={errors.addressOfStudent ? "error" : "primary"} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          
          {/* כפתור שמירה */}
          <Grid item xs={12} className="save-button-container">
            <Button
              variant="contained"
              size="large"
              startIcon={<SaveIcon />}
              onClick={openConfirmDialog}
              className="save-button"
              sx={{
                fontWeight: 600,
                boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
              }}
            >
              שמור תלמיד
            </Button>
          </Grid>
        </Grid>
  
        {/* דיאלוג אישור */}
        <Dialog
          open={confirmDialog.open}
          onClose={() => setConfirmDialog({...confirmDialog, open: false})}
          sx={{ direction: 'rtl' }}
        >
          <DialogTitle sx={{
            bgcolor: 'primary.main',
            color: 'white',
            fontWeight: 700,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            {confirmDialog.title}
            <IconButton 
              onClick={() => setConfirmDialog({...confirmDialog, open: false})} 
              sx={{ color: 'white' }}
              className="rotating-close-icon"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ p: 3, mt: 2 }}>
            <Typography variant="body1">
              {confirmDialog.message}
            </Typography>
          </DialogContent>
          <DialogActions sx={{ p: 2, bgcolor: 'background.paper' }}>
            <Button
              onClick={() => setConfirmDialog({...confirmDialog, open: false})}
              color="inherit"
              variant="outlined"
              startIcon={<CloseIcon />}
            >
              ביטול
            </Button>
            <Button
              onClick={() => {
                setConfirmDialog({...confirmDialog, open: false});
                handleAddStudent();
              }}
              color="primary"
              variant="contained"
              startIcon={<SaveIcon />}
              sx={{
                fontWeight: 600,
                boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
              }}
            >
              אישור
            </Button>
          </DialogActions>
        </Dialog>
  
        {/* הודעות Snackbar */}
        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity} 
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>
    );
  };
  