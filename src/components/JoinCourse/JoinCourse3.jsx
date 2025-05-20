// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import {
// //     Box,
// //     Paper,
// //     Typography,
// //     Button,
// //     TextField,
// //     Grid,
// //     Divider,

// //     Stepper,
// //     Step,
// //     StepLabel,
// //     CircularProgress,
// //     Alert,
// //     Chip,
// //     Card,
// //     CardContent,
// //     Avatar,
// //     FormControl,
// //     InputLabel,
// //     Select,
// //     MenuItem,
// //     IconButton
// // } from '@mui/material';
// // import {
// //     ArrowBack,
// //     CheckCircle,
// //     School,
// //     Payment,
// //     ReceiptLong,
// //     CreditCard,
// //     EventNote,
// //     Phone,
// //     Email,
// //     Person,
// //     Download,
// //     Print,
// //     Description, // איקון לוורד
// //     TableChart // איקון לאקסל
// // } from '@mui/icons-material';
// // import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
// // import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
// // import { joinCourseThunk } from '../../redux/Thunks/joinCourseThunk';
// // import './joinCourse3.css';
// // import { jsPDF } from 'jspdf';

// // const JoinCourse3 = () => {
// //     const { id } = useParams();
// //     console.log('All id:', id);
// //     const navigate = useNavigate();
// //     const dispatch = useDispatch();
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [studentsInCourse, setStudentsInCourse] = useState([]);
// //     // מצבים
// //     const [activeStep, setActiveStep] = useState(0);
// //     const [selectedStudent, setSelectedStudent] = useState('');
// //     const [paymentMethod, setPaymentMethod] = useState('credit');
// //     const [paymentDetails, setPaymentDetails] = useState({
// //         cardNumber: '',
// //         cardHolder: '',
// //         expiryDate: '',
// //         cvv: ''
// //     });
// //     const [errors, setErrors] = useState({});
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [joinSuccess, setJoinSuccess] = useState(false);

// //     // נתונים מהסטור
// //     const selectedCourse = useSelector(state => state.courses.selectC);
// //     const students = useSelector(state => state.students.students);
// //     const selectedStudentDetails = students.find(s => s.idOfStudent === selectedStudent);

// //     // שלבי ההרשמה
// //     const steps = ['בחירת תלמידה', 'פרטי תשלום', 'סיכום והרשמה'];

// //     // טעינת פרטי הקורס ורשימת התלמידות בעת טעינת הדף
// //     // בתוך useEffect, הוסף לוג לבדיקה
// //     useEffect(() => {
// //         if (id) {
// //             dispatch(getCourseByCourseIdThunk(id));
// //         }
// //         dispatch(getStudentsThunk())
// //             .then(() => console.log("Students loaded successfully"))
// //             .catch(error => console.error("Error loading students:", error));
// //     }, [dispatch, id]);

// //     // הוסף לוג לבדיקת הנתונים שמגיעים מהסטור
// //     useEffect(() => {
// //         console.log("Students from store:", students);
// //     }, [students]);

// //     useEffect(() => {
// //         if (selectedCourse?.idOfCourse) {
// //             loadStudentsInCourse(selectedCourse.idOfCourse);
// //         }
// //     }, [selectedCourse]);
// //     const loadStudentsInCourse = async (courseId) => {
// //         try {
// //             setLoading(true);
// //             const response = await fetch(`https://localhost:7092/api/Course/GetStudentsByCourseId/${courseId}`);

// //             if (!response.ok) {
// //                 throw new Error(`שגיאה בטעינת התלמידות: ${response.status}`);
// //             }

// //             const data = await response.json();
// //             console.log('Students in course data:', data);

// //             setStudentsInCourse(data);
// //             setError(null);
// //         } catch (err) {
// //             console.error('Error loading students:', err);
// //             setError(err.message);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };
// //     // טיפול בשינוי בחירת תלמידה
// //     const handleStudentChange = (e) => {
// //         setSelectedStudent(e.target.value);
// //         // ניקוי שגיאות
// //         if (errors.student) {
// //             setErrors(prev => ({ ...prev, student: '' }));
// //         }
// //     };

// //     // טיפול בשינויים בפרטי התשלום
// //     const handlePaymentChange = (e) => {
// //         const { name, value } = e.target;
// //         setPaymentDetails(prev => ({
// //             ...prev,
// //             [name]: value
// //         }));

// //         // ניקוי שגיאות בעת הקלדה
// //         if (errors[name]) {
// //             setErrors(prev => ({
// //                 ...prev,
// //                 [name]: ''
// //             }));
// //         }
// //     };

// //     // אימות בחירת תלמידה
// //     const validateStudentSelection = () => {
// //         if (!selectedStudent) {
// //             setErrors(prev => ({ ...prev, student: 'יש לבחור תלמידה' }));
// //             return false;
// //         }
// //         return true;
// //     };

// //     // אימות פרטי תשלום
// //     const validatePaymentDetails = () => {
// //         if (paymentMethod !== 'credit') return true;

// //         const newErrors = {};
// //         if (!paymentDetails.cardNumber.trim()) {
// //             newErrors.cardNumber = 'מספר כרטיס הוא שדה חובה';
// //         } else if (!/^\d{16}$/.test(paymentDetails.cardNumber.replace(/[-\s]/g, ''))) {
// //             newErrors.cardNumber = 'מספר כרטיס לא תקין';
// //         }
// //         if (!paymentDetails.cardHolder.trim()) {
// //             newErrors.cardHolder = 'שם בעל הכרטיס הוא שדה חובה';
// //         }
// //         if (!paymentDetails.expiryDate.trim()) {
// //             newErrors.expiryDate = 'תאריך תפוגה הוא שדה חובה';
// //         } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentDetails.expiryDate)) {
// //             newErrors.expiryDate = 'פורמט תאריך תפוגה לא תקין (MM/YY)';
// //         }
// //         if (!paymentDetails.cvv.trim()) {
// //             newErrors.cvv = 'קוד אבטחה הוא שדה חובה';
// //         } else if (!/^\d{3,4}$/.test(paymentDetails.cvv)) {
// //             newErrors.cvv = 'קוד אבטחה לא תקין';
// //         }
// //         setErrors(prev => ({ ...prev, ...newErrors }));
// //         return Object.keys(newErrors).length === 0;
// //     };

// //     // מעבר לשלב הבא
// //     const handleNext = () => {
// //         if (activeStep === 0) {
// //             if (validateStudentSelection()) {
// //                 setActiveStep(prev => prev + 1);
// //             }
// //         } else if (activeStep === 1) {
// //             if (validatePaymentDetails()) {
// //                 setActiveStep(prev => prev + 1);
// //             }
// //         } else if (activeStep === 2) {
// //             handleSubmit();
// //         }
// //     };

// //     // חזרה לשלב הקודם
// //     const handleBack = () => {
// //         setActiveStep(prev => prev - 1);
// //     };

// //     // חזרה לרשימת הקורסים
// //     const handleBackToCourses = () => {
// //         navigate('/Course');
// //     };

// //     // // שליחת טופס ההרשמה
// //     // const handleSubmit = async () => {
// //     //     setIsSubmitting(true);
// //     //     try {
// //     //         console.log('Selected Student:', selectedStudent);
// //     //         console.log('id of Course:', id);
// //     //         // שליחת הנתונים לשרת
// //     //         const resultAction = await dispatch(joinCourseThunk({
// //     //             sId: selectedStudent,
// //     //             id: id,   // שימוש ב-id.value כדי להשתמש בערך של המזהה של הקורס
// //     //         }));

// //     //         // הרשמה הצליחה
// //     //         setJoinSuccess(true);
// //     //         console.log('you joined successfully');

// //     //     } catch (error) {
// //     //         console.error('Failed to join course:', error);
// //     //         setErrors(prev => ({ ...prev, submit: 'אירעה שגיאה בתהליך ההרשמה. אנא נסה שוב.' }));
// //     //     } finally {
// //     //         setIsSubmitting(false);
// //     //     }
// //     // };
// //     const handleSubmit = async () => {
// //         setIsSubmitting(true);
// //         try {
// //             console.log('Selected Student:', selectedStudent);
// //             console.log('id of Course:', id);

// //             // שליחת הנתונים לשרת
// //             const resultAction = await dispatch(joinCourseThunk({
// //                 sId: selectedStudent, // המזהה של התלמיד שנבחר
// //                 id: id // המזהה של הקורס מה-URL
// //             }));

// //             if (joinCourseThunk.fulfilled.match(resultAction)) {
// //                 // הרשמה הצליחה
// //                 setJoinSuccess(true);
// //             }
// //         } catch (error) {
// //             console.error('Failed to join course:', error);
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };
// //     // פונקציית ייצוא קבלה ל-PDF
// //     const exportReceiptToPDF = () => {
// //         // יצירת מסמך PDF
// //         const doc = new jsPDF({
// //             orientation: 'portrait',
// //             unit: 'mm',
// //             format: 'a4'
// //         });

// //         // הגדרת כיוון מימין לשמאל
// //         doc.setR2L(true);

// //         // כותרת
// //         doc.setFontSize(22);
// //         doc.setTextColor(25, 118, 210);
// //         doc.text("קבלה עבור הרשמה לקורס", 105, 20, { align: "center" });

// //         // מספר קבלה ותאריך
// //         doc.setFontSize(12);
// //         doc.setTextColor(100, 100, 100);
// //         doc.text(`מספר קבלה: ${Math.floor(Math.random() * 10000)}`, 190, 35, { align: "right" });
// //         doc.text(`תאריך: ${new Date().toLocaleDateString('he-IL')}`, 190, 42, { align: "right" });

// //         // קו מפריד
// //         doc.setDrawColor(25, 118, 210);
// //         doc.setLineWidth(0.5);
// //         doc.line(20, 45, 190, 45);

// //         // פרטי הקורס
// //         doc.setFontSize(16);
// //         doc.setTextColor(25, 118, 210);
// //         doc.text("פרטי הקורס", 190, 60, { align: "right" });

// //         doc.setFontSize(12);
// //         doc.setTextColor(0, 0, 0);
// //         doc.text(`שם הקורס: ${selectedCourse?.nameOfCourse || ''}`, 190, 70, { align: "right" });
// //         doc.text(`יום ושעה: ${selectedCourse?.dayOfCourse || ''} ${selectedCourse?.hourOfCourse || ''}`, 190, 77, { align: "right" });
// //         doc.text(`מספר מפגשים: ${selectedCourse?.amountOfMeetingsInCourse || '0'}`, 190, 84, { align: "right" });
// //         doc.text(`מחיר: ₪${selectedCourse?.totalSumOfCourse || '0'}`, 190, 91, { align: "right" });

// //         // פרטי התלמידה
// //         doc.setFontSize(16);
// //         doc.setTextColor(25, 118, 210);
// //         doc.text("פרטי התלמידה", 190, 110, { align: "right" });

// //         doc.setFontSize(12);
// //         doc.setTextColor(0, 0, 0);
// //         doc.text(`שם: ${selectedStudentDetails?.nameOfStudent || ''}`, 190, 120, { align: "right" });
// //         doc.text(`טלפון: ${selectedStudentDetails?.phoneOfStudent || ''}`, 190, 127, { align: "right" });
// //         doc.text(`אימייל: ${selectedStudentDetails?.emailOfStudent || ''}`, 190, 134, { align: "right" });

// //         // פרטי תשלום
// //         doc.setFontSize(16);
// //         doc.setTextColor(25, 118, 210);
// //         doc.text("פרטי תשלום", 190, 153, { align: "right" });

// //         doc.setFontSize(12);
// //         doc.setTextColor(0, 0, 0);
// //         doc.text(`סכום לתשלום: ₪${selectedCourse?.totalSumOfCourse || '0'}`, 190, 163, { align: "right" });
// //         doc.text(`אמצעי תשלום: ${paymentMethod === "credit" ? "כרטיס אשראי" :
// //             paymentMethod === "cash" ? "מזומן" :
// //                 paymentMethod === "check" ? "צ'ק" : "העברה בנקאית"
// //             }`, 190, 170, { align: "right" });

// //         // חתימה וחותמת
// //         doc.setFontSize(12);
// //         doc.text("חתימה:", 40, 200);
// //         doc.line(20, 207, 60, 207);

// //         doc.setFontSize(12);
// //         doc.text("חותמת המכללה:", 150, 200);
// //         doc.setDrawColor(100, 100, 100);
// //         doc.circle(130, 210, 15);
// //         // שמירת ה-PDF
// //         doc.save(`קבלה_${selectedStudentDetails?.nameOfStudent || 'תלמידה'}_${selectedCourse?.nameOfCourse || 'קורס'}.pdf`);
// //     };

// //     // תצוגת תוכן לפי שלב
// //     const getStepContent = (step) => {
// //         switch (step) {
// //             case 0:
// //                 return (
// //                     <Box className="step-content">
// //                         <Typography variant="h6" className="step-title">
// //                             בחירת תלמידה להרשמה
// //                         </Typography>

// //                         <FormControl fullWidth error={!!errors.student} className="form-field">
// //                             <InputLabel>בחר תלמידה</InputLabel>
// //                             <Select
// //                                 value={selectedStudent}
// //                                 onChange={handleStudentChange}
// //                                 label="בחר תלמידה"
// //                             >
// //                                 {students.map((student) => (
// //                                     <MenuItem key={student.idOfStudent} value={student.idOfStudent}>
// //                                         {student.nameOfStudent}
// //                                     </MenuItem>
// //                                 ))}
// //                             </Select>
// //                             {errors.student && (
// //                                 <Typography color="error" variant="caption">
// //                                     {errors.student}
// //                                 </Typography>
// //                             )}
// //                         </FormControl>

// //                         {selectedStudent && selectedStudentDetails && (
// //                             <Card className="student-card">
// //                                 <CardContent>
// //                                     <Box className="card-header">
// //                                         <Avatar className="student-avatar">
// //                                             {selectedStudentDetails.nameOfStudent.charAt(0)}
// //                                         </Avatar>
// //                                         <Box>
// //                                             <Typography variant="h6" className="student-name">
// //                                                 {selectedStudentDetails.nameOfStudent}
// //                                             </Typography>
// //                                             <Typography variant="body2" color="text.secondary">
// //                                                 ת.ז: {selectedStudentDetails.idOfStudent}
// //                                             </Typography>
// //                                         </Box>
// //                                     </Box>

// //                                     <Divider className="divider" />

// //                                     <Grid container spacing={2}>
// //                                         <Grid item xs={12} sm={6}>
// //                                             <Typography variant="body2" color="text.secondary">
// //                                                 טלפון:
// //                                             </Typography>
// //                                             <Typography variant="body1">
// //                                                 {selectedStudentDetails.phoneOfStudent || 'לא זמין'}
// //                                             </Typography>
// //                                         </Grid>
// //                                         <Grid item xs={12} sm={6}>
// //                                             <Typography variant="body2" color="text.secondary">
// //                                                 דוא"ל:
// //                                             </Typography>
// //                                             <Typography variant="body1">
// //                                                 {selectedStudentDetails.emailOfStudent || 'לא זמין'}
// //                                             </Typography>
// //                                         </Grid>
// //                                         <Grid item xs={12}>
// //                                             <Typography variant="body2" color="text.secondary">
// //                                                 כתובת:
// //                                             </Typography>
// //                                             <Typography variant="body1">
// //                                                 {selectedStudentDetails.addressOfStudent || 'לא זמין'}
// //                                             </Typography>
// //                                         </Grid>
// //                                     </Grid>
// //                                 </CardContent>
// //                             </Card>
// //                         )}

// //                         {selectedCourse && (
// //                             <Card className="student-card" sx={{ mt: 4 }}>
// //                                 <CardContent>
// //                                     <Box className="card-header">
// //                                         <Avatar className="student-avatar" sx={{ bgcolor: 'secondary.main' }}>
// //                                             <School />
// //                                         </Avatar>
// //                                         <Box>
// //                                             <Typography variant="h6" className="student-name">
// //                                                 {selectedCourse.nameOfCourse}
// //                                             </Typography>
// //                                             <Typography variant="body2" color="text.secondary">
// //                                                 קוד קורס: {selectedCourse.idOfCourse}
// //                                             </Typography>
// //                                         </Box>
// //                                     </Box>

// //                                     <Divider className="divider" />

// //                                     <Grid container spacing={2}>
// //                                         <Grid item xs={12} sm={6}>
// //                                             <Typography variant="body2" color="text.secondary">
// //                                                 יום ושעה:
// //                                             </Typography>
// //                                             <Typography variant="body1">
// //                                                 {selectedCourse.dayOfCourse} {selectedCourse.hourOfCourse}
// //                                             </Typography>
// //                                         </Grid>
// //                                         <Grid item xs={12} sm={6}>
// //                                             <Typography variant="body2" color="text.secondary">
// //                                                 מספר מפגשים:
// //                                             </Typography>
// //                                             <Typography variant="body1">
// //                                                 {selectedCourse.amountOfMeetingsInCourse || '0'}
// //                                             </Typography>
// //                                         </Grid>
// //                                         <Grid item xs={12}>
// //                                             <Typography variant="body2" color="text.secondary">
// //                                                 תיאור:
// //                                             </Typography>
// //                                             <Typography variant="body1">
// //                                                 {selectedCourse.descriptionOfCourse || 'אין תיאור זמין'}
// //                                             </Typography>
// //                                         </Grid>
// //                                     </Grid>

// //                                     <Box className="price-summary">
// //                                         <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
// //                                             סיכום מחיר
// //                                         </Typography>
// //                                         <Grid container spacing={1}>
// //                                             <Grid item xs={8}>
// //                                                 <Typography variant="body1">
// //                                                     מחיר קורס:
// //                                                 </Typography>
// //                                             </Grid>
// //                                             <Grid item xs={4}>
// //                                                 <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'left' }}>
// //                                                     ₪{selectedCourse.totalSumOfCourse || '0'}
// //                                                 </Typography>
// //                                             </Grid>
// //                                         </Grid>
// //                                     </Box>
// //                                 </CardContent>
// //                             </Card>
// //                         )}
// //                     </Box>
// //                 );

// //             case 1:
// //                 return (
// //                     <Box className="step-content">
// //                         <Typography variant="h6" className="step-title">
// //                             פרטי תשלום
// //                         </Typography>

// //                         <FormControl fullWidth className="form-field">
// //                             <InputLabel>אמצעי תשלום</InputLabel>
// //                             <Select
// //                                 value={paymentMethod}
// //                                 onChange={(e) => setPaymentMethod(e.target.value)}
// //                                 label="אמצעי תשלום"
// //                             >
// //                                 <MenuItem value="credit">כרטיס אשראי</MenuItem>
// //                                 <MenuItem value="cash">מזומן</MenuItem>
// //                                 <MenuItem value="check">צ'ק</MenuItem>
// //                                 <MenuItem value="transfer">העברה בנקאית</MenuItem>
// //                             </Select>
// //                         </FormControl>

// //                         {paymentMethod === 'credit' && (
// //                             <Grid container spacing={2}>
// //                                 <Grid item xs={12}>
// //                                     <TextField
// //                                         fullWidth
// //                                         label="מספר כרטיס אשראי"
// //                                         name="cardNumber"
// //                                         value={paymentDetails.cardNumber}
// //                                         onChange={handlePaymentChange}
// //                                         error={!!errors.cardNumber}
// //                                         helperText={errors.cardNumber}
// //                                         variant="outlined"
// //                                         className="form-field"
// //                                         InputProps={{
// //                                             startAdornment: <CreditCard color="action" sx={{ mr: 1 }} />,
// //                                         }}
// //                                     />
// //                                 </Grid>

// //                                 <Grid item xs={12}>
// //                                     <TextField
// //                                         fullWidth
// //                                         label="שם בעל הכרטיס"
// //                                         name="cardHolder"
// //                                         value={paymentDetails.cardHolder}
// //                                         onChange={handlePaymentChange}
// //                                         error={!!errors.cardHolder}
// //                                         helperText={errors.cardHolder}
// //                                         variant="outlined"
// //                                         className="form-field"
// //                                         InputProps={{
// //                                             startAdornment: <Person color="action" sx={{ mr: 1 }} />,
// //                                         }}
// //                                     />
// //                                 </Grid>

// //                                 <Grid item xs={12} sm={6}>
// //                                     <TextField
// //                                         fullWidth
// //                                         label="תאריך תפוגה (MM/YY)"
// //                                         name="expiryDate"
// //                                         value={paymentDetails.expiryDate}
// //                                         onChange={handlePaymentChange}
// //                                         error={!!errors.expiryDate}
// //                                         helperText={errors.expiryDate}
// //                                         variant="outlined"
// //                                         className="form-field"
// //                                     />
// //                                 </Grid>

// //                                 <Grid item xs={12} sm={6}>
// //                                     <TextField
// //                                         fullWidth
// //                                         label="קוד אבטחה (CVV)"
// //                                         name="cvv"
// //                                         value={paymentDetails.cvv}
// //                                         onChange={handlePaymentChange}
// //                                         error={!!errors.cvv}
// //                                         helperText={errors.cvv}
// //                                         variant="outlined"
// //                                         className="form-field"
// //                                         type="password"
// //                                     />
// //                                 </Grid>
// //                             </Grid>
// //                         )}

// //                         {paymentMethod === 'cash' && (
// //                             <Alert severity="info" sx={{ mt: 2 }}>
// //                                 יש להגיע למשרד עם מזומן לתשלום.
// //                             </Alert>
// //                         )}

// //                         {paymentMethod === 'check' && (
// //                             <Alert severity="info" sx={{ mt: 2 }}>
// //                                 יש להגיע למשרד עם צ'ק לתשלום.
// //                             </Alert>
// //                         )}

// //                         {paymentMethod === 'transfer' && (
// //                             <Alert severity="info" sx={{ mt: 2 }}>
// //                                 פרטי חשבון להעברה בנקאית:
// //                                 <br />
// //                                 בנק: לאומי
// //                                 <br />
// //                                 סניף: 123
// //                                 <br />
// //                                 מספר חשבון: 456789
// //                                 <br />
// //                                 על שם: המכללה
// //                             </Alert>
// //                         )}

// //                         <TextField
// //                             fullWidth
// //                             label="הערות לתשלום"
// //                             name="notes"
// //                             multiline
// //                             rows={3}
// //                             variant="outlined"
// //                             className="form-field"
// //                             sx={{ mt: 2 }}
// //                             InputProps={{
// //                                 startAdornment: <EventNote color="action" sx={{ mr: 1, alignSelf: 'flex-start', mt: 1 }} />,
// //                             }}
// //                         />
// //                     </Box>
// //                 );

// //             case 2:
// //                 return (
// //                     <Box className="step-content">
// //                         <Typography variant="h6" className="step-title">
// //                             אישור פרטי הרשמה
// //                         </Typography>

// //                         <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
// //                             <CardContent>
// //                                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //                                     <School color="primary" sx={{ mr: 1 }} />
// //                                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
// //                                         פרטי הקורס
// //                                     </Typography>
// //                                 </Box>
// //                                 <Divider sx={{ mb: 2 }} />

// //                                 <Grid container spacing={2}>
// //                                     <Grid item xs={12} sm={6}>
// //                                         <Typography variant="body2" color="text.secondary">
// //                                             שם הקורס:
// //                                         </Typography>
// //                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
// //                                             {selectedStudentDetails?.idOfStudent || 'לא זמין'}
// //                                         </Typography>
// //                                     </Grid>

// //                                     <Grid item xs={12} sm={6}>
// //                                         <Typography variant="body2" color="text.secondary">
// //                                             יום ושעה:
// //                                         </Typography>
// //                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
// //                                             {selectedCourse?.dayOfCourse} {selectedCourse?.hourOfCourse}
// //                                         </Typography>
// //                                     </Grid>

// //                                     <Grid item xs={12} sm={6}>
// //                                         <Typography variant="body2" color="text.secondary">
// //                                             מספר מפגשים:
// //                                         </Typography>
// //                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
// //                                             {selectedCourse?.amountOfMeetingsInCourse || '0'}
// //                                         </Typography>
// //                                     </Grid>

// //                                     <Grid item xs={12} sm={6}>
// //                                         <Typography variant="body2" color="text.secondary">
// //                                             מחיר:
// //                                         </Typography>
// //                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
// //                                             ₪{selectedCourse?.totalSumOfCourse || '0'}
// //                                         </Typography>
// //                                     </Grid>
// //                                 </Grid>
// //                             </CardContent>
// //                         </Card>

// //                         <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
// //                             <CardContent>
// //                                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //                                     <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
// //                                         {selectedStudentDetails?.nameOfStudent?.charAt(0) || 'T'}
// //                                     </Avatar>
// //                                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
// //                                         פרטי התלמידה
// //                                     </Typography>
// //                                 </Box>
// //                                 <Divider sx={{ mb: 2 }} />

// //                                 <Grid container spacing={2}>
// //                                     <Grid item xs={12} sm={6}>
// //                                         <Typography variant="body2" color="text.secondary">
// //                                             שם התלמידה:
// //                                         </Typography>
// //                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
// //                                             {selectedStudentDetails?.nameOfStudent || 'לא זמין'}
// //                                         </Typography>
// //                                     </Grid>

// //                                     <Grid item xs={12} sm={6}>
// //                                         <Typography variant="body2" color="text.secondary">
// //                                             ת.ז:
// //                                         </Typography>
// //                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
// //                                             {selectedStudentDetails?.idOfStudent || 'לא זמין'}
// //                                         </Typography>
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     Box,
//     Paper,
//     Typography,
//     Button,
//     TextField,
//     Grid,
//     Divider,

//     Stepper,
//     Step,
//     StepLabel,
//     CircularProgress,
//     Alert,
//     Chip,
//     Card,
//     CardContent,
//     Avatar,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     IconButton
// } from '@mui/material';
// import {
//     ArrowBack,
//     CheckCircle,
//     School,
//     Payment,
//     ReceiptLong,
//     CreditCard,
//     EventNote,
//     Phone,
//     Email,
//     Person,
//     Download,
//     Print,
//     Description, // איקון לוורד
//     TableChart // איקון לאקסל
// } from '@mui/icons-material';
// import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
// import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
// import { joinCourseThunk } from '../../redux/Thunks/joinCourseThunk';
// import './joinCourse3.css';
// import { jsPDF } from 'jspdf';

// const JoinCourse3 = () => {
//     const { id } = useParams();
//     console.log('All id:', id);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [studentsInCourse, setStudentsInCourse] = useState([]);
//     // מצבים
//     const [activeStep, setActiveStep] = useState(0);
//     const [selectedStudent, setSelectedStudent] = useState('');
//     const [paymentMethod, setPaymentMethod] = useState('credit');
//     const [paymentDetails, setPaymentDetails] = useState({
//         cardNumber: '',
//         cardHolder: '',
//         expiryDate: '',
//         cvv: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [joinSuccess, setJoinSuccess] = useState(false);

//     // נתונים מהסטור
//     const selectedCourse = useSelector(state => state.courses.selectC);
//     const students = useSelector(state => state.students.students);
//     const selectedStudentDetails = students.find(s => s.idOfStudent === selectedStudent);

//     // שלבי ההרשמה
//     const steps = ['בחירת תלמידה', 'פרטי תשלום', 'סיכום והרשמה'];

//     // טעינת פרטי הקורס ורשימת התלמידות בעת טעינת הדף
//     // בתוך useEffect, הוסף לוג לבדיקה
//     useEffect(() => {
//         if (id) {
//             dispatch(getCourseByCourseIdThunk(id));
//         }
//         dispatch(getStudentsThunk())
//             .then(() => console.log("Students loaded successfully"))
//             .catch(error => console.error("Error loading students:", error));
//     }, [dispatch, id]);

//     // הוסף לוג לבדיקת הנתונים שמגיעים מהסטור
//     useEffect(() => {
//         console.log("Students from store:", students);
//     }, [students]);

//     useEffect(() => {
//         if (selectedCourse?.idOfCourse) {
//           loadStudentsInCourse(selectedCourse.idOfCourse);
//         }
//       }, [selectedCourse]);
//       const loadStudentsInCourse = async (courseId) => {
//         try {
//           setLoading(true);
//           const response = await fetch(`https://localhost:7092/api/Course/GetStudentsByCourseId/${courseId}`);

//           if (!response.ok) {
//             throw new Error(`שגיאה בטעינת התלמידות: ${response.status}`);
//           }

//           const data = await response.json();
//           console.log('Students in course data:', data);

//           setStudentsInCourse(data);
//           setError(null);
//         } catch (err) {
//           console.error('Error loading students:', err);
//           setError(err.message);
//         } finally {
//           setLoading(false);
//         }
//       };
//     // טיפול בשינוי בחירת תלמידה
//     const handleStudentChange = (e) => {
//         setSelectedStudent(e.target.value);
//         // ניקוי שגיאות
//         if (errors.student) {
//             setErrors(prev => ({ ...prev, student: '' }));
//         }
//     };

//     // טיפול בשינויים בפרטי התשלום
//     const handlePaymentChange = (e) => {
//         const { name, value } = e.target;
//         setPaymentDetails(prev => ({
//             ...prev,
//             [name]: value
//         }));

//         // ניקוי שגיאות בעת הקלדה
//         if (errors[name]) {
//             setErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }));
//         }
//     };

//     // אימות בחירת תלמידה
//     const validateStudentSelection = () => {
//         if (!selectedStudent) {
//             setErrors(prev => ({ ...prev, student: 'יש לבחור תלמידה' }));
//             return false;
//         }
//         return true;
//     };

//     // אימות פרטי תשלום
//     const validatePaymentDetails = () => {
//         if (paymentMethod !== 'credit') return true;

//         const newErrors = {};
//         if (!paymentDetails.cardNumber.trim()) {
//             newErrors.cardNumber = 'מספר כרטיס הוא שדה חובה';
//         } else if (!/^\d{16}$/.test(paymentDetails.cardNumber.replace(/[-\s]/g, ''))) {
//             newErrors.cardNumber = 'מספר כרטיס לא תקין';
//         }
//         if (!paymentDetails.cardHolder.trim()) {
//             newErrors.cardHolder = 'שם בעל הכרטיס הוא שדה חובה';
//         }
//         if (!paymentDetails.expiryDate.trim()) {
//             newErrors.expiryDate = 'תאריך תפוגה הוא שדה חובה';
//         } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentDetails.expiryDate)) {
//             newErrors.expiryDate = 'פורמט תאריך תפוגה לא תקין (MM/YY)';
//         }
//         if (!paymentDetails.cvv.trim()) {
//             newErrors.cvv = 'קוד אבטחה הוא שדה חובה';
//         } else if (!/^\d{3,4}$/.test(paymentDetails.cvv)) {
//             newErrors.cvv = 'קוד אבטחה לא תקין';
//         }
//         setErrors(prev => ({ ...prev, ...newErrors }));
//         return Object.keys(newErrors).length === 0;
//     };

//     // מעבר לשלב הבא
//     const handleNext = () => {
//         if (activeStep === 0) {
//             if (validateStudentSelection()) {
//                 setActiveStep(prev => prev + 1);
//             }
//         } else if (activeStep === 1) {
//             if (validatePaymentDetails()) {
//                 setActiveStep(prev => prev + 1);
//             }
//         } else if (activeStep === 2) {
//             handleSubmit();
//         }
//     };

//     // חזרה לשלב הקודם
//     const handleBack = () => {
//         setActiveStep(prev => prev - 1);
//     };

//     // חזרה לרשימת הקורסים
//     const handleBackToCourses = () => {
//         navigate('/Course');
//     };

//     // // שליחת טופס ההרשמה
//     // const handleSubmit = async () => {
//     //     setIsSubmitting(true);
//     //     try {
//     //         console.log('Selected Student:', selectedStudent);
//     //         console.log('id of Course:', id);
//     //         // שליחת הנתונים לשרת
//     //         const resultAction = await dispatch(joinCourseThunk({
//     //             sId: selectedStudent,
//     //             id: id,   // שימוש ב-id.value כדי להשתמש בערך של המזהה של הקורס
//     //         }));

//     //         // הרשמה הצליחה
//     //         setJoinSuccess(true);
//     //         console.log('you joined successfully');

//     //     } catch (error) {
//     //         console.error('Failed to join course:', error);
//     //         setErrors(prev => ({ ...prev, submit: 'אירעה שגיאה בתהליך ההרשמה. אנא נסה שוב.' }));
//     //     } finally {
//     //         setIsSubmitting(false);
//     //     }
//     // };
//     const handleSubmit = async () => {
//         setIsSubmitting(true);
//         try {
//             console.log('Selected Student:', selectedStudent);
//             console.log('id of Course:', id);

//             // שליחת הנתונים לשרת
//             const resultAction = await dispatch(joinCourseThunk({
//                 sId: selectedStudent, // המזהה של התלמיד שנבחר
//                 id: id // המזהה של הקורס מה-URL
//             }));

//             if (joinCourseThunk.fulfilled.match(resultAction)) {
//                 // הרשמה הצליחה
//                 setJoinSuccess(true);
//             }
//         } catch (error) {
//             console.error('Failed to join course:', error);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };
//     // פונקציית ייצוא קבלה ל-PDF
//     const exportReceiptToPDF = () => {
//         // יצירת מסמך PDF
//         const doc = new jsPDF({
//             orientation: 'portrait',
//             unit: 'mm',
//             format: 'a4'
//         });

//         // הגדרת כיוון מימין לשמאל
//         doc.setR2L(true);

//         // כותרת
//         doc.setFontSize(22);
//         doc.setTextColor(25, 118, 210);
//         doc.text("קבלה עבור הרשמה לקורס", 105, 20, { align: "center" });

//         // מספר קבלה ותאריך
//         doc.setFontSize(12);
//         doc.setTextColor(100, 100, 100);
//         doc.text(`מספר קבלה: ${Math.floor(Math.random() * 10000)}`, 190, 35, { align: "right" });
//         doc.text(`תאריך: ${new Date().toLocaleDateString('he-IL')}`, 190, 42, { align: "right" });

//         // קו מפריד
//         doc.setDrawColor(25, 118, 210);
//         doc.setLineWidth(0.5);
//         doc.line(20, 45, 190, 45);

//         // פרטי הקורס
//         doc.setFontSize(16);
//         doc.setTextColor(25, 118, 210);
//         doc.text("פרטי הקורס", 190, 60, { align: "right" });

//         doc.setFontSize(12);
//         doc.setTextColor(0, 0, 0);
//         doc.text(`שם הקורס: ${selectedCourse?.nameOfCourse || ''}`, 190, 70, { align: "right" });
//         doc.text(`יום ושעה: ${selectedCourse?.dayOfCourse || ''} ${selectedCourse?.hourOfCourse || ''}`, 190, 77, { align: "right" });
//         doc.text(`מספר מפגשים: ${selectedCourse?.amountOfMeetingsInCourse || '0'}`, 190, 84, { align: "right" });
//         doc.text(`מחיר: ₪${selectedCourse?.totalSumOfCourse || '0'}`, 190, 91, { align: "right" });

//         // פרטי התלמידה
//         doc.setFontSize(16);
//         doc.setTextColor(25, 118, 210);
//         doc.text("פרטי התלמידה", 190, 110, { align: "right" });

//         doc.setFontSize(12);
//         doc.setTextColor(0, 0, 0);
//         doc.text(`שם: ${selectedStudentDetails?.nameOfStudent || ''}`, 190, 120, { align: "right" });
//         doc.text(`טלפון: ${selectedStudentDetails?.phoneOfStudent || ''}`, 190, 127, { align: "right" });
//         doc.text(`אימייל: ${selectedStudentDetails?.emailOfStudent || ''}`, 190, 134, { align: "right" });

//         // פרטי תשלום
//         doc.setFontSize(16);
//         doc.setTextColor(25, 118, 210);
//         doc.text("פרטי תשלום", 190, 153, { align: "right" });

//         doc.setFontSize(12);
//         doc.setTextColor(0, 0, 0);
//         doc.text(`סכום לתשלום: ₪${selectedCourse?.totalSumOfCourse || '0'}`, 190, 163, { align: "right" });
//         doc.text(`אמצעי תשלום: ${paymentMethod === "credit" ? "כרטיס אשראי" :
//                 paymentMethod === "cash" ? "מזומן" :
//                     paymentMethod === "check" ? "צ'ק" : "העברה בנקאית"
//             }`, 190, 170, { align: "right" });

//         // חתימה וחותמת
//         doc.setFontSize(12);
//         doc.text("חתימה:", 40, 200);
//         doc.line(20, 207, 60, 207);

//         doc.setFontSize(12);
//         doc.text("חותמת המכללה:", 150, 200);
//         doc.setDrawColor(100, 100, 100);
//         doc.circle(130, 210, 15);

//         // שמירת ה-PDF
//         doc.save(`קבלה_${selectedStudentDetails?.nameOfStudent || 'תלמידה'}_${selectedCourse?.nameOfCourse || 'קורס'}.pdf`);
//     };

//     // תצוגת תוכן לפי שלב
//     const getStepContent = (step) => {
//         switch (step) {
//             case 0:
//                 return (
//                     <Box className="step-content">
//                         <Typography variant="h6" className="step-title">
//                             בחירת תלמידה להרשמה
//                         </Typography>

//                         <FormControl fullWidth error={!!errors.student} className="form-field">
//                             <InputLabel>בחר תלמידה</InputLabel>
//                             <Select
//                                 value={selectedStudent}
//                                 onChange={handleStudentChange}
//                                 label="בחר תלמידה"
//                             >
//                                 {students.map((student) => (
//                                     <MenuItem key={student.idOfStudent} value={student.idOfStudent}>
//                                         {student.nameOfStudent}
//                                     </MenuItem>
//                                 ))}
//                             </Select>
//                             {errors.student && (
//                                 <Typography color="error" variant="caption">
//                                     {errors.student}
//                                 </Typography>
//                             )}
//                         </FormControl>

//                         {selectedStudent && selectedStudentDetails && (
//                             <Card className="student-card">
//                                 <CardContent>
//                                     <Box className="card-header">
//                                         <Avatar className="student-avatar">
//                                             {selectedStudentDetails.nameOfStudent.charAt(0)}
//                                         </Avatar>
//                                         <Box>
//                                             <Typography variant="h6" className="student-name">
//                                                 {selectedStudentDetails.nameOfStudent}
//                                             </Typography>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 ת.ז: {selectedStudentDetails.idOfStudent}
//                                             </Typography>
//                                         </Box>
//                                     </Box>

//                                     <Divider className="divider" />

//                                     <Grid container spacing={2}>
//                                         <Grid item xs={12} sm={6}>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 טלפון:
//                                             </Typography>
//                                             <Typography variant="body1">
//                                                 {selectedStudentDetails.phoneOfStudent || 'לא זמין'}
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12} sm={6}>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 דוא"ל:
//                                             </Typography>
//                                             <Typography variant="body1">
//                                                 {selectedStudentDetails.emailOfStudent || 'לא זמין'}
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12}>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 כתובת:
//                                             </Typography>
//                                             <Typography variant="body1">
//                                                 {selectedStudentDetails.addressOfStudent || 'לא זמין'}
//                                             </Typography>
//                                         </Grid>
//                                     </Grid>
//                                 </CardContent>
//                             </Card>
//                         )}

//                         {selectedCourse && (
//                             <Card className="student-card" sx={{ mt: 4 }}>
//                                 <CardContent>
//                                     <Box className="card-header">
//                                         <Avatar className="student-avatar" sx={{ bgcolor: 'secondary.main' }}>
//                                             <School />
//                                         </Avatar>
//                                         <Box>
//                                             <Typography variant="h6" className="student-name">
//                                                 {selectedCourse.nameOfCourse}
//                                             </Typography>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 קוד קורס: {selectedCourse.idOfCourse}
//                                             </Typography>
//                                         </Box>
//                                     </Box>

//                                     <Divider className="divider" />

//                                     <Grid container spacing={2}>
//                                         <Grid item xs={12} sm={6}>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 יום ושעה:
//                                             </Typography>
//                                             <Typography variant="body1">
//                                                 {selectedCourse.dayOfCourse} {selectedCourse.hourOfCourse}
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12} sm={6}>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 מספר מפגשים:
//                                             </Typography>
//                                             <Typography variant="body1">
//                                                 {selectedCourse.amountOfMeetingsInCourse || '0'}
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12}>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 תיאור:
//                                             </Typography>
//                                             <Typography variant="body1">
//                                                 {selectedCourse.descriptionOfCourse || 'אין תיאור זמין'}
//                                             </Typography>
//                                         </Grid>
//                                     </Grid>

//                                     <Box className="price-summary">
//                                         <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
//                                             סיכום מחיר
//                                         </Typography>
//                                         <Grid container spacing={1}>
//                                             <Grid item xs={8}>
//                                                 <Typography variant="body1">
//                                                     מחיר קורס:
//                                                 </Typography>
//                                             </Grid>
//                                             <Grid item xs={4}>
//                                                 <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'left' }}>
//                                                     ₪{selectedCourse.totalSumOfCourse || '0'}
//                                                 </Typography>
//                                             </Grid>
//                                         </Grid>
//                                     </Box>
//                                 </CardContent>
//                             </Card>
//                         )}
//                     </Box>
//                 );

//             case 1:
//                 return (
//                     <Box className="step-content">
//                         <Typography variant="h6" className="step-title">
//                             פרטי תשלום
//                         </Typography>

//                         <FormControl fullWidth className="form-field">
//                             <InputLabel>אמצעי תשלום</InputLabel>
//                             <Select
//                                 value={paymentMethod}
//                                 onChange={(e) => setPaymentMethod(e.target.value)}
//                                 label="אמצעי תשלום"
//                             >
//                                 <MenuItem value="credit">כרטיס אשראי</MenuItem>
//                                 <MenuItem value="cash">מזומן</MenuItem>
//                                 <MenuItem value="check">צ'ק</MenuItem>
//                                 <MenuItem value="transfer">העברה בנקאית</MenuItem>
//                             </Select>
//                         </FormControl>

//                         {paymentMethod === 'credit' && (
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         fullWidth
//                                         label="מספר כרטיס אשראי"
//                                         name="cardNumber"
//                                         value={paymentDetails.cardNumber}
//                                         onChange={handlePaymentChange}
//                                         error={!!errors.cardNumber}
//                                         helperText={errors.cardNumber}
//                                         variant="outlined"
//                                         className="form-field"
//                                         InputProps={{
//                                             startAdornment: <CreditCard color="action" sx={{ mr: 1 }} />,
//                                         }}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <TextField
//                                         fullWidth
//                                         label="שם בעל הכרטיס"
//                                         name="cardHolder"
//                                         value={paymentDetails.cardHolder}
//                                         onChange={handlePaymentChange}
//                                         error={!!errors.cardHolder}
//                                         helperText={errors.cardHolder}
//                                         variant="outlined"
//                                         className="form-field"
//                                         InputProps={{
//                                             startAdornment: <Person color="action" sx={{ mr: 1 }} />,
//                                         }}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         fullWidth
//                                         label="תאריך תפוגה (MM/YY)"
//                                         name="expiryDate"
//                                         value={paymentDetails.expiryDate}
//                                         onChange={handlePaymentChange}
//                                         error={!!errors.expiryDate}
//                                         helperText={errors.expiryDate}
//                                         variant="outlined"
//                                         className="form-field"
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         fullWidth
//                                         label="קוד אבטחה (CVV)"
//                                         name="cvv"
//                                         value={paymentDetails.cvv}
//                                         onChange={handlePaymentChange}
//                                         error={!!errors.cvv}
//                                         helperText={errors.cvv}
//                                         variant="outlined"
//                                         className="form-field"
//                                         type="password"
//                                     />
//                                 </Grid>
//                             </Grid>
//                         )}

//                         {paymentMethod === 'cash' && (
//                             <Alert severity="info" sx={{ mt: 2 }}>
//                                 יש להגיע למשרד עם מזומן לתשלום.
//                             </Alert>
//                         )}

//                         {paymentMethod === 'check' && (
//                             <Alert severity="info" sx={{ mt: 2 }}>
//                                 יש להגיע למשרד עם צ'ק לתשלום.
//                             </Alert>
//                         )}

//                         {paymentMethod === 'transfer' && (
//                             <Alert severity="info" sx={{ mt: 2 }}>
//                                 פרטי חשבון להעברה בנקאית:
//                                 <br />
//                                 בנק: לאומי
//                                 <br />
//                                 סניף: 123
//                                 <br />
//                                 מספר חשבון: 456789
//                                 <br />
//                                 על שם: המכללה
//                             </Alert>
//                         )}

//                         <TextField
//                             fullWidth
//                             label="הערות לתשלום"
//                             name="notes"
//                             multiline
//                             rows={3}
//                             variant="outlined"
//                             className="form-field"
//                             sx={{ mt: 2 }}
//                             InputProps={{
//                                 startAdornment: <EventNote color="action" sx={{ mr: 1, alignSelf: 'flex-start', mt: 1 }} />,
//                             }}
//                         />
//                     </Box>
//                 );

//             case 2:
//                 return (
//                     <Box className="step-content">
//                         <Typography variant="h6" className="step-title">
//                             אישור פרטי הרשמה
//                         </Typography>

//                         <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
//                             <CardContent>
//                                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                                     <School color="primary" sx={{ mr: 1 }} />
//                                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                         פרטי הקורס
//                                     </Typography>
//                                 </Box>
//                                 <Divider sx={{ mb: 2 }} />

//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="body2" color="text.secondary">
//                                             שם הקורס:
//                                         </Typography>
//                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                             {selectedCourse?.nameOfCourse || 'לא זמין'}
//                                         </Typography>
//                                     </Grid>

//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="body2" color="text.secondary">
//                                             יום ושעה:
//                                         </Typography>
//                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                             {selectedCourse?.dayOfCourse} {selectedCourse?.hourOfCourse}
//                                         </Typography>
//                                     </Grid>

//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="body2" color="text.secondary">
//                                             מספר מפגשים:
//                                         </Typography>
//                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                             {selectedCourse?.amountOfMeetingsInCourse || '0'}
//                                         </Typography>
//                                     </Grid>

//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="body2" color="text.secondary">
//                                             מחיר:
//                                         </Typography>
//                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                             ₪{selectedCourse?.totalSumOfCourse || '0'}
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>
//                             </CardContent>
//                         </Card>

//                         <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
//                             <CardContent>
//                                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                                     <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
//                                         {selectedStudentDetails?.nameOfStudent?.charAt(0) || 'T'}
//                                     </Avatar>
//                                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                         פרטי התלמידה
//                                     </Typography>
//                                 </Box>
//                                 <Divider sx={{ mb: 2 }} />

//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="body2" color="text.secondary">
//                                             שם התלמידה:
//                                         </Typography>
//                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                             {selectedStudentDetails?.nameOfStudent || 'לא זמין'}
//                                         </Typography>
//                                     </Grid>

//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="body2" color="text.secondary">
//                                             ת.ז:
//                                         </Typography>
//                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                             {selectedStudentDetails?.idOfStudent || 'לא זמין'}
//                                         </Typography>
//                                     </Grid>

//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="body2" color="text.secondary">
//                                             טלפון:
//                                         </Typography>
//                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                             {selectedStudentDetails?.phoneOfStudent || 'לא זמין'}
//                                         </Typography>
//                                     </Grid>

//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="body2" color="text.secondary">
//                                             דוא"ל:
//                                         </Typography>
//                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                             {selectedStudentDetails?.emailOfStudent || 'לא זמין'}
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>
//                             </CardContent>
//                         </Card>

//                         <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
//                             <CardContent>
//                                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                                     <Payment color="primary" sx={{ mr: 1 }} />
//                                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                         פרטי תשלום
//                                     </Typography>
//                                 </Box>
//                                 <Divider sx={{ mb: 2 }} />

//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="body2" color="text.secondary">
//                                             אמצעי תשלום:
//                                         </Typography>
//                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                             {paymentMethod === 'credit' && 'כרטיס אשראי'}
//                                             {paymentMethod === 'cash' && 'מזומן'}
//                                             {paymentMethod === 'check' && "צ'ק"}
//                                             {paymentMethod === 'transfer' && 'העברה בנקאית'}
//                                         </Typography>
//                                     </Grid>

//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="body2" color="text.secondary">
//                                             סכום לתשלום:
//                                         </Typography>
//                                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                             ₪{selectedCourse?.totalSumOfCourse || '0'}
//                                         </Typography>
//                                     </Grid>

//                                     {paymentMethod === 'credit' && (
//                                         <>
//                                             <Grid item xs={12} sm={6}>
//                                                 <Typography variant="body2" color="text.secondary">
//                                                     מספר כרטיס:
//                                                 </Typography>
//                                                 <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                                     {paymentDetails.cardNumber ? `xxxx-xxxx-xxxx-${paymentDetails.cardNumber.slice(-4)}` : 'לא הוזן'}
//                                                 </Typography>
//                                             </Grid>

//                                             <Grid item xs={12} sm={6}>
//                                                 <Typography variant="body2" color="text.secondary">
//                                                     שם בעל הכרטיס:
//                                                 </Typography>
//                                                 <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                                                     {paymentDetails.cardHolder || 'לא הוזן'}
//                                                 </Typography>
//                                             </Grid>
//                                         </>
//                                     )}
//                                 </Grid>
//                             </CardContent>
//                         </Card>

//                         <Box className="export-options">
//                             <Typography variant="h6" className="export-title">
//                                 אפשרויות ייצוא קבלה
//                             </Typography>
//                             <Box className="export-buttons">
//                                 <Button
//                                     variant="outlined"
//                                     startIcon={<Description />}
//                                     className="export-button word-button"
//                                     onClick={() => alert('ייצוא לוורד יתווסף בהמשך')}
//                                 >
//                                     ייצוא לוורד
//                                 </Button>
//                                 <Button
//                                     variant="outlined"
//                                     startIcon={<TableChart />}
//                                     className="export-button excel-button"
//                                     onClick={() => alert('ייצוא לאקסל יתווסף בהמשך')}
//                                 >
//                                     ייצוא לאקסל
//                                 </Button>
//                                 <Button
//                                     variant="outlined"
//                                     startIcon={<Download />}
//                                     className="export-button pdf-button"
//                                     onClick={exportReceiptToPDF}
//                                 >
//                                     ייצוא ל-PDF
//                                 </Button>
//                                 <Button
//                                     variant="outlined"
//                                     startIcon={<Print />}
//                                     className="export-button"
//                                     onClick={() => window.print()}
//                                 >
//                                     הדפסה
//                                 </Button>
//                             </Box>
//                         </Box>

//                         <Alert severity="info" sx={{ mt: 3 }}>
//                             לחיצה על "אישור" תשלים את תהליך ההרשמה לקורס.
//                         </Alert>
//                     </Box>
//                 );

//             default:
//                 return 'שלב לא ידוע';
//         }
//     };

//     // אם הרשמה הצליחה
//     if (joinSuccess) {
//         return (
//             <Box className="join-course-container">
//                 <Paper className="join-course-paper">
//                     <Box sx={{
//                         textAlign: 'center',
//                         padding: 4,
//                         backgroundColor: 'rgba(46, 204, 113, 0.1)',
//                         borderRadius: '12px',
//                         border: '1px solid rgba(46, 204, 113, 0.3)',
//                         margin: '20px auto',
//                         maxWidth: '600px'
//                     }}>
//                         <CheckCircle color="success" sx={{ fontSize: 64, mb: 2 }} />

//                         <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'success.main' }}>
//                             ההרשמה הושלמה בהצלחה!
//                         </Typography>

//                         <Typography variant="body1" paragraph>
//                             ברכות! נרשמת בהצלחה לקורס "{selectedCourse?.nameOfCourse}".
//                         </Typography>

//                         <Typography variant="body1" paragraph>
//                             אישור הרשמה נשלח לכתובת האימייל של התלמידה.
//                         </Typography>

//                         <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
//                             <Button
//                                 variant="outlined"
//                                 color="primary"
//                                 onClick={handleBackToCourses}
//                                 sx={{ borderRadius: '8px', fontWeight: 600 }}
//                             >
//                                 חזרה לרשימת הקורסים
//                             </Button>

//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 onClick={exportReceiptToPDF}
//                                 startIcon={<Download />}
//                                 sx={{ borderRadius: '8px', fontWeight: 600 }}
//                             >
//                                 הורדת קבלה
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Paper>
//             </Box>
//         );
//     }

//     return (
//         <Box className="join-course-container">
//             <Paper className="join-course-paper">
//                 <Box className="header">
//                     <Button
//                         className="back-button"
//                         startIcon={<ArrowBack />}
//                         onClick={handleBackToCourses}
//                     >
//                         חזרה
//                     </Button>
//                     <Typography variant="h5" className="page-title">
//                         הרשמה לקורס {selectedCourse?.nameOfCourse}
//                     </Typography>
//                 </Box>

//                 <Box className="stepper-container">
//                     <Stepper activeStep={activeStep} alternativeLabel>
//                         {steps.map((label) => (
//                             <Step key={label}>
//                                 <StepLabel>{label}</StepLabel>
//                             </Step>
//                         ))}
//                     </Stepper>
//                 </Box>

//                 <Box className="content-container">
//                     {loading && (
//                         <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
//                             <CircularProgress />
//                         </Box>
//                     )}

//                     {error && (
//                         <Alert severity="error" sx={{ mb: 3 }}>
//                             {error}
//                         </Alert>
//                     )}

//                     {!loading && !error && getStepContent(activeStep)}

//                     {errors.submit && (
//                         <Alert severity="error" sx={{ mt: 3 }}>
//                             {errors.submit}
//                         </Alert>
//                     )}

//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
//                         <Button
//                             variant="outlined"
//                             onClick={activeStep === 0 ? handleBackToCourses : handleBack}
//                             sx={{ borderRadius: '8px' }}
//                             disabled={isSubmitting}
//                         >
//                             {activeStep === 0 ? 'ביטול' : 'חזרה'}
//                         </Button>

//                         <Button
//                             variant="contained"
//                             color={activeStep === steps.length - 1 ? "success" : "primary"}
//                             onClick={handleNext}
//                             disabled={isSubmitting}
//                             startIcon={activeStep === steps.length - 1 ? <ReceiptLong /> : null}
//                             sx={{ borderRadius: '8px', fontWeight: 600 }}
//                         >
//                             {isSubmitting ? (
//                                 <CircularProgress size={24} color="inherit" />
//                             ) : activeStep === steps.length - 1 ? (
//                                 'אישור והרשמה'
//                             ) : (
//                                 'המשך'
//                             )}
//                         </Button>
//                     </Box>
//                 </Box>
//             </Paper>
//         </Box>
//     );
// };

// export default JoinCourse3;
/////////////////////////////////////////////////////////////////////////////////
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
    Avatar,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton
} from '@mui/material';
import {
    ArrowBack,
    CheckCircle,
    School,
    Payment,
    ReceiptLong,
    CreditCard,
    EventNote,
    Phone,
    Email,
    Person,
    Download,
    Print,
    Description,
    TableChart
} from '@mui/icons-material';
import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
import { joinCourseThunk } from '../../redux/Thunks/joinCourseThunk';
import './joinCourse3.css';
import { jsPDF } from 'jspdf';

const JoinCourse3 = () => {
    const { id } = useParams();
    console.log('Course ID from params:', id);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [studentsInCourse, setStudentsInCourse] = useState([]);
    // מצבים
    const [activeStep, setActiveStep] = useState(0);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [joinSuccess, setJoinSuccess] = useState(false);

    // נתונים מהסטור
    const selectedCourse = useSelector(state => state.courses.selectC);
    const students = useSelector(state => state.students.students);
    const selectedStudentDetails = students.find(s => s.idOfStudent === selectedStudent);

    // שלבי ההרשמה
    const steps = ['בחירת תלמידה', 'פרטי תשלום', 'סיכום והרשמה'];

    // טעינת פרטי הקורס ורשימת התלמידות בעת טעינת הדף
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                // טעינת פרטי הקורס
                if (id) {
                    await dispatch(getCourseByCourseIdThunk(id));
                    console.log("Course data loaded for ID:", id);
                }

                // טעינת רשימת התלמידות
                const studentsResult = await dispatch(getStudentsThunk());
                console.log("Students loaded:", studentsResult.payload);

                setError(null);
            } catch (err) {
                console.error("Error loading data:", err);
                setError("אירעה שגיאה בטעינת הנתונים. אנא נסה שוב.");
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [dispatch, id]);

    // טעינת התלמידות שכבר רשומות לקורס
    useEffect(() => {
        if (selectedCourse?.idOfCourse) {
            loadStudentsInCourse(selectedCourse.idOfCourse);
        }
    }, [selectedCourse]);

    const loadStudentsInCourse = async (courseId) => {
        try {
            setLoading(true);
            const response = await fetch(`https://localhost:7092/api/Course/GetStudentsByCourseId/${courseId}`);

            if (!response.ok) {
                throw new Error(`שגיאה בטעינת התלמידות: ${response.status}`);
            }

            const data = await response.json();
            console.log('Students in course data:', data);

            setStudentsInCourse(data);
            setError(null);
        } catch (err) {
            console.error('Error loading students in course:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // טיפול בשינוי בחירת תלמידה
    const handleStudentChange = (e) => {
        setSelectedStudent(e.target.value);
        // ניקוי שגיאות
        if (errors.student) {
            setErrors(prev => ({ ...prev, student: '' }));
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

    // אימות בחירת תלמידה
    const validateStudentSelection = () => {
        if (!selectedStudent) {
            setErrors(prev => ({ ...prev, student: 'יש לבחור תלמידה' }));
            return false;
        }
        return true;
    };

    // אימות פרטי תשלום
    const validatePaymentDetails = () => {
        if (paymentMethod !== 'credit') return true;

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
        setErrors(prev => ({ ...prev, ...newErrors }));
        return Object.keys(newErrors).length === 0;
    };

    // מעבר לשלב הבא
    const handleNext = () => {
        if (activeStep === 0) {
            if (validateStudentSelection()) {
                setActiveStep(prev => prev + 1);
            }
        } else if (activeStep === 1) {
            if (validatePaymentDetails()) {
                setActiveStep(prev => prev + 1);
            }
        } else if (activeStep === 2) {
            handleSubmit();
        }
    };

    // חזרה לשלב הקודם
    const handleBack = () => {
        setActiveStep(prev => prev - 1);
    };

    // חזרה לרשימת הקורסים
    const handleBackToCourses = () => {
        navigate('/Course');
    };

    // שליחת טופס ההרשמה
    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            console.log('Submitting registration - Student ID:', selectedStudent, 'Course ID:', id);

            // שליחת הנתונים לשרת
            const resultAction = await dispatch(joinCourseThunk({
                sId: selectedStudent,
                id: id
            }));

            console.log('Join course result:', resultAction);

            if (joinCourseThunk.fulfilled.match(resultAction)) {
                // הרשמה הצליחה
                setJoinSuccess(true);
                console.log('Registration successful!');
            } else {
                throw new Error('Failed to join course');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setErrors(prev => ({
                ...prev,
                submit: 'אירעה שגיאה בתהליך ההרשמה. אנא נסה שוב.'
            }));
        } finally {
            setIsSubmitting(false);
        }
    };

    // פונקציית ייצוא קבלה ל-PDF
    const exportReceiptToPDF = () => {
        // יצירת מסמך PDF
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // הגדרת כיוון מימין לשמאל
        doc.setR2L(true);

        // כותרת
        doc.setFontSize(22);
        doc.setTextColor(25, 118, 210);
        doc.text("קבלה עבור הרשמה לקורס", 105, 20, { align: "center" });

        // מספר קבלה ותאריך
        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        doc.text(`מספר קבלה: ${Math.floor(Math.random() * 10000)}`, 190, 35, { align: "right" });
        doc.text(`תאריך: ${new Date().toLocaleDateString('he-IL')}`, 190, 42, { align: "right" });

        // קו מפריד
        doc.setDrawColor(25, 118, 210);
        doc.setLineWidth(0.5);
        doc.line(20, 45, 190, 45);

        // פרטי הקורס
        doc.setFontSize(16);
        doc.setTextColor(25, 118, 210);
        doc.text("פרטי הקורס", 190, 60, { align: "right" });

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`שם הקורס: ${selectedCourse?.nameOfCourse || ''}`, 190, 70, { align: "right" });
        doc.text(`יום ושעה: ${selectedCourse?.dayOfCourse || ''} ${selectedCourse?.hourOfCourse || ''}`, 190, 77, { align: "right" });
        doc.text(`מספר מפגשים: ${selectedCourse?.amountOfMeetingsInCourse || '0'}`, 190, 84, { align: "right" });
        doc.text(`מחיר: ₪${selectedCourse?.totalSumOfCourse || '0'}`, 190, 91, { align: "right" });

        // פרטי התלמידה
        doc.setFontSize(16);
        doc.setTextColor(25, 118, 210);
        doc.text("פרטי התלמידה", 190, 110, { align: "right" });

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`שם: ${selectedStudentDetails?.nameOfStudent || ''}`, 190, 120, { align: "right" });
        doc.text(`טלפון: ${selectedStudentDetails?.phoneOfStudent || ''}`, 190, 127, { align: "right" });
        doc.text(`אימייל: ${selectedStudentDetails?.emailOfStudent || ''}`, 190, 134, { align: "right" });

        // פרטי תשלום
        doc.setFontSize(16);
        doc.setTextColor(25, 118, 210);
        doc.text("פרטי תשלום", 190, 153, { align: "right" });

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`סכום לתשלום: ₪${selectedCourse?.totalSumOfCourse || '0'}`, 190, 163, { align: "right" });
        doc.text(`אמצעי תשלום: ${paymentMethod === "credit" ? "כרטיס אשראי" :
            paymentMethod === "cash" ? "מזומן" :
                paymentMethod === "check" ? "צ'ק" : "העברה בנקאית"
            }`, 190, 170, { align: "right" });

        // חתימה וחותמת
        doc.setFontSize(12);
        doc.text("חתימה:", 40, 200);
        doc.line(20, 207, 60, 207);

        doc.setFontSize(12);
        doc.text("חותמת המכללה:", 150, 200);
        doc.setDrawColor(100, 100, 100);
        doc.circle(130, 210, 15);

        // שמירת ה-PDF
        doc.save(`קבלה_${selectedStudentDetails?.nameOfStudent || 'תלמידה'}_${selectedCourse?.nameOfCourse || 'קורס'}.pdf`);
    };

    // תצוגת תוכן לפי שלב
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Box className="step-content">
                        <Typography variant="h6" className="step-title">
                            בחירת תלמידה להרשמה
                        </Typography>

                        {/* בדיקה אם יש תלמידות להצגה */}
                        {students && students.length > 0 ? (
                            <FormControl fullWidth error={!!errors.student} className="form-field">
                                <InputLabel>בחר תלמידה</InputLabel>
                                <Select
                                    value={selectedStudent}
                                    onChange={handleStudentChange}
                                    label="בחר תלמידה"
                                >
                                    {students.map((student) => (
                                        <MenuItem key={student.idOfStudent} value={student.idOfStudent}>
                                            {student.nameOfStudent}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {errors.student && (
                                    <Typography color="error" variant="caption">
                                        {errors.student}
                                    </Typography>
                                )}
                            </FormControl>
                        ) : (
                            <Alert severity="info" sx={{ mb: 2 }}>
                                אין תלמידות זמינות להצגה. אנא נסה שוב מאוחר יותר.
                            </Alert>
                        )}

                        {selectedStudent && selectedStudentDetails && (
                            <Card className="student-card">
                                <CardContent>
                                    <Box className="card-header">
                                        <Avatar className="student-avatar">
                                            {selectedStudentDetails.nameOfStudent.charAt(0)}
                                        </Avatar>
                                        <Box>
                                            <Typography variant="h6" className="student-name">
                                                {selectedStudentDetails.nameOfStudent}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                ת.ז: {selectedStudentDetails.idOfStudent}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Divider className="divider" />

                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="body2" color="text.secondary">
                                                טלפון:
                                            </Typography>
                                            <Typography variant="body1">
                                                {selectedStudentDetails.phoneOfStudent || 'לא זמין'}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="body2" color="text.secondary">
                                                דוא"ל:
                                            </Typography>
                                            <Typography variant="body1">
                                                {selectedStudentDetails.emailOfStudent || 'לא זמין'}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2" color="text.secondary">
                                                כתובת:
                                            </Typography>
                                            <Typography variant="body1">
                                                {selectedStudentDetails.addressOfStudent || 'לא זמין'}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        )}

                        {selectedCourse && (
                            <Card className="student-card" sx={{ mt: 4 }}>
                                <CardContent>
                                    <Box className="card-header">
                                        <Avatar className="student-avatar" sx={{ bgcolor: 'secondary.main' }}>
                                            <School />
                                        </Avatar>
                                        <Box>
                                            <Typography variant="h6" className="student-name">
                                                {selectedCourse.nameOfCourse}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                קוד קורס: {selectedCourse.idOfCourse}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Divider className="divider" />

                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="body2" color="text.secondary">
                                                יום ושעה:
                                            </Typography>
                                            <Typography variant="body1">
                                                {selectedCourse.dayOfCourse} {selectedCourse.hourOfCourse}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="body2" color="text.secondary">
                                                מספר מפגשים:
                                            </Typography>
                                            <Typography variant="body1">
                                                {selectedCourse.amountOfMeetingsInCourse || '0'}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2" color="text.secondary">
                                                תיאור:
                                            </Typography>
                                            <Typography variant="body1">
                                                {selectedCourse.descriptionOfCourse || 'אין תיאור זמין'}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Box className="price-summary">
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                            סיכום מחיר
                                        </Typography>
                                        <Grid container spacing={1}>
                                            <Grid item xs={8}>
                                                <Typography variant="body1">
                                                    מחיר קורס:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'left' }}>
                                                    ₪{selectedCourse.totalSumOfCourse || '0'}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Card>
                        )}
                    </Box>
                );

            case 1:
                return (
                    <Box className="step-content">
                        <Typography variant="h6" className="step-title">
                            פרטי תשלום
                        </Typography>

                        <FormControl fullWidth className="form-field">
                            <InputLabel>אמצעי תשלום</InputLabel>
                            <Select
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                label="אמצעי תשלום"
                            >
                                <MenuItem value="credit">כרטיס אשראי</MenuItem>
                                <MenuItem value="cash">מזומן</MenuItem>
                                <MenuItem value="check">צ'ק</MenuItem>
                                <MenuItem value="transfer">העברה בנקאית</MenuItem>
                            </Select>
                        </FormControl>

                        {paymentMethod === 'credit' && (
                            <Grid container spacing={2}>
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
                                        className="form-field"
                                        InputProps={{
                                            startAdornment: <CreditCard color="action" sx={{ mr: 1 }} />,
                                        }}
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
                                        className="form-field"
                                        InputProps={{
                                            startAdornment: <Person color="action" sx={{ mr: 1 }} />,
                                        }}
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
                                        className="form-field"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="קוד אבטחה (CVV)"
                                        name="cvv"
                                        value={paymentDetails.cvv}
                                        onChange={handlePaymentChange}
                                        error={!!errors.cvv}
                                        helperText={errors.cvv}
                                        variant="outlined"
                                        className="form-field"
                                        type="password"
                                    />
                                </Grid>
                            </Grid>
                        )}

                        {paymentMethod === 'cash' && (
                            <Alert severity="info" sx={{ mt: 2 }}>
                                יש להגיע למשרד עם מזומן לתשלום.
                            </Alert>
                        )}

                        {paymentMethod === 'check' && (
                            <Alert severity="info" sx={{ mt: 2 }}>
                                יש להגיע למשרד עם צ'ק לתשלום.
                            </Alert>
                        )}

                        {paymentMethod === 'transfer' && (
                            <Alert severity="info" sx={{ mt: 2 }}>
                                פרטי חשבון להעברה בנקאית:
                                <br />
                                בנק: לאומי
                                <br />
                                סניף: 123
                                <br />
                                מספר חשבון: 456789
                                <br />
                                על שם: המכללה
                            </Alert>
                        )}

                        <TextField
                            fullWidth
                            label="הערות לתשלום"
                            name="notes"
                            multiline
                            rows={3}
                            variant="outlined"
                            className="form-field"
                            sx={{ mt: 2 }}
                            InputProps={{
                                startAdornment: <EventNote color="action" sx={{ mr: 1, alignSelf: 'flex-start', mt: 1 }} />,
                            }}
                        />
                    </Box>
                );

            case 2:
                return (
                    <Box className="step-content">
                        <Typography variant="h6" className="step-title">
                            אישור פרטי הרשמה
                        </Typography>

                        <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <School color="primary" sx={{ mr: 1 }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        פרטי הקורס
                                    </Typography>
                                </Box>
                                <Divider sx={{ mb: 2 }} />

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body2" color="text.secondary">
                                            שם הקורס:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedCourse?.nameOfCourse || 'לא זמין'}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body2" color="text.secondary">
                                            יום ושעה:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedCourse?.dayOfCourse} {selectedCourse?.hourOfCourse}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body2" color="text.secondary">
                                            מספר מפגשים:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedCourse?.amountOfMeetingsInCourse || '0'}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body2" color="text.secondary">
                                            מחיר:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            ₪{selectedCourse?.totalSumOfCourse || '0'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>

                        <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
                                        {selectedStudentDetails?.nameOfStudent?.charAt(0) || 'T'}
                                    </Avatar>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        פרטי התלמידה
                                    </Typography>
                                </Box>
                                <Divider sx={{ mb: 2 }} />

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body2" color="text.secondary">
                                            שם התלמידה:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedStudentDetails?.nameOfStudent || 'לא זמין'}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body2" color="text.secondary">
                                            ת.ז:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedStudentDetails?.idOfStudent || 'לא זמין'}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body2" color="text.secondary">
                                            טלפון:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedStudentDetails?.phoneOfStudent || 'לא זמין'}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body2" color="text.secondary">
                                            דוא"ל:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedStudentDetails?.emailOfStudent || 'לא זמין'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>

                        <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Payment color="primary" sx={{ mr: 1 }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        פרטי תשלום
                                    </Typography>
                                </Box>
                                <Divider sx={{ mb: 2 }} />

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body2" color="text.secondary">
                                            אמצעי תשלום:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {paymentMethod === 'credit' && 'כרטיס אשראי'}
                                            {paymentMethod === 'cash' && 'מזומן'}
                                            {paymentMethod === 'check' && "צ'ק"}
                                            {paymentMethod === 'transfer' && 'העברה בנקאית'}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body2" color="text.secondary">
                                            סכום לתשלום:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            ₪{selectedCourse?.totalSumOfCourse || '0'}
                                        </Typography>
                                    </Grid>

                                    {paymentMethod === 'credit' && (
                                        <>
                                            <Grid item xs={12} sm={6}>
                                                <Typography variant="body2" color="text.secondary">
                                                    מספר כרטיס:
                                                </Typography>
                                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                    {paymentDetails.cardNumber ? `xxxx-xxxx-xxxx-${paymentDetails.cardNumber.slice(-4)}` : 'לא הוזן'}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <Typography variant="body2" color="text.secondary">
                                                    שם בעל הכרטיס:
                                                </Typography>
                                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                    {paymentDetails.cardHolder || 'לא הוזן'}
                                                </Typography>
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                            </CardContent>
                        </Card>

                        <Box className="export-options">
                            <Typography variant="h6" className="export-title">
                                אפשרויות ייצוא קבלה
                            </Typography>
                            <Box className="export-buttons">
                                <Button
                                    variant="outlined"
                                    startIcon={<Description />}
                                    className="export-button word-button"
                                    onClick={() => alert('ייצוא לוורד יתווסף בהמשך')}
                                >
                                    ייצוא לוורד
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<TableChart />}
                                    className="export-button excel-button"
                                    onClick={() => alert('ייצוא לאקסל יתווסף בהמשך')}
                                >
                                    ייצוא לאקסל
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<Download />}
                                    className="export-button pdf-button"
                                    onClick={exportReceiptToPDF}
                                >
                                    ייצוא ל-PDF
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<Print />}
                                    className="export-button"
                                    onClick={() => window.print()}
                                >
                                    הדפסה
                                </Button>
                            </Box>
                        </Box>

                        <Alert severity="info" sx={{ mt: 3 }}>
                            לחיצה על "אישור" תשלים את תהליך ההרשמה לקורס.
                        </Alert>
                    </Box>
                );

            default:
                return 'שלב לא ידוע';
        }
    };

    // אם הרשמה הצליחה
    if (joinSuccess) {
        return (
            <Box className="join-course-container">
                <Paper className="join-course-paper">
                    <Box sx={{
                        textAlign: 'center',
                        padding: 4,
                        backgroundColor: 'rgba(46, 204, 113, 0.1)',
                        borderRadius: '12px',
                        border: '1px solid rgba(46, 204, 113, 0.3)',
                        margin: '20px auto',
                        maxWidth: '600px'
                    }}>
                        <CheckCircle color="success" sx={{ fontSize: 64, mb: 2 }} />

                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'success.main' }}>
                            ההרשמה הושלמה בהצלחה!
                        </Typography>

                        <Typography variant="body1" paragraph>
                            ברכות! נרשמת בהצלחה לקורס "{selectedCourse?.nameOfCourse}".
                        </Typography>

                        <Typography variant="body1" paragraph>
                            אישור הרשמה נשלח לכתובת האימייל של התלמידה.
                        </Typography>

                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleBackToCourses}
                                sx={{ borderRadius: '8px', fontWeight: 600 }}
                            >
                                חזרה לרשימת הקורסים
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={exportReceiptToPDF}
                                startIcon={<Download />}
                                sx={{ borderRadius: '8px', fontWeight: 600 }}
                            >
                                הורדת קבלה
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        );
    }

    return (
        <Box className="join-course-container">
            <Paper className="join-course-paper">
                <Box className="header">
                    <Button
                        className="back-button"
                        startIcon={<ArrowBack />}
                        onClick={handleBackToCourses}
                    >
                        חזרה
                    </Button>
                    <Typography variant="h5" className="page-title">
                        הרשמה לקורס {selectedCourse?.nameOfCourse}
                    </Typography>
                </Box>

                <Box className="stepper-container">
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                <Box className="content-container">
                    {loading && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                            <CircularProgress />
                        </Box>
                    )}

                    {error && (
                        <Alert severity="error" sx={{ mb: 3 }}>
                            {error}
                        </Alert>
                    )}

                    {!loading && !error && getStepContent(activeStep)}

                    {errors.submit && (
                        <Alert severity="error" sx={{ mt: 3 }}>
                            {errors.submit}
                        </Alert>
                    )}

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                        <Button
                            variant="outlined"
                            onClick={activeStep === 0 ? handleBackToCourses : handleBack}
                            sx={{ borderRadius: '8px' }}
                            disabled={isSubmitting}
                        >
                            {activeStep === 0 ? 'ביטול' : 'חזרה'}
                        </Button>

                        <Button
                            variant="contained"
                            color={activeStep === steps.length - 1 ? "success" : "primary"}
                            onClick={handleNext}
                            disabled={isSubmitting}
                            startIcon={activeStep === steps.length - 1 ? <ReceiptLong /> : null}
                            sx={{ borderRadius: '8px', fontWeight: 600 }}
                        >
                            {isSubmitting ? (
                                <CircularProgress size={24} color="inherit" />
                            ) : activeStep === steps.length - 1 ? (
                                'אישור והרשמה'
                            ) : (
                                'המשך'
                            )}
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default JoinCourse3;
