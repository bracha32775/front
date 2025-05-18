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
  Print
} from '@mui/icons-material';
import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
import { joinCourseThunk } from '../../redux/Thunks/joinCourseThunk';
import './joinCourse3.css';
import { jsPDF } from 'jspdf';

const JoinCourse3 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
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
    if (id) {
      dispatch(getCourseByCourseIdThunk(id));
    }
    dispatch(getStudentsThunk());
  }, [dispatch, id]);
  
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
    navigate('/courses');
  };
  
  // שליחת טופס ההרשמה
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // שליחת הנתונים לשרת
      const resultAction = await dispatch(joinCourseThunk({ 
        sId: selectedStudent, 
        id: parseInt(id) 
      }));
      
      // הרשמה הצליחה
      setJoinSuccess(true);
      
    } catch (error) {
      console.error('Failed to join course:', error);
      setErrors(prev => ({ ...prev, submit: 'אירעה שגיאה בתהליך ההרשמה. אנא נסה שוב.' }));
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // פונקציית ייצוא קבלה ל-PDF
  const exportReceipt = () => {
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
    doc.text(`מספר מפגשים: ${selectedCourse?.amountOfMettingInCourse || '0'}`, 190, 84, { align: "right" });
    doc.text(`מחיר: ₪${selectedCourse?.priceOfCourse || '0'}`, 190, 91, { align: "right" });
    
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
    doc.text(`סכום לתשלום: ₪${selectedCourse?.priceOfCourse || '0'}`, 190, 163, { align: "right" });
    doc.text(`אמצעי תשלום: ${
      paymentMethod === "credit" ? "כרטיס אשראי" : 
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
    
    // פרטי המכללה בתחתית הדף
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("מכללת הקורסים | רחוב הדוגמה 123, תל אביב | טלפון: 03-1234567", 105, 280, { align: "center" });
    
    // שמירת הקובץ
    doc.save(`קבלה_${selectedCourse?.nameOfCourse || 'קורס'}.pdf`);
  };
  
  // תצוגת תוכן לפי שלב
  const getStepContent = (step) => {
    switch (step) {
      case 0: // בחירת תלמידה
        return (
          <Box className="step-content">
            <Typography variant="h6" className="step-title">
              בחירת תלמידה
            </Typography>
            
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
                <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                  {errors.student}
                </Typography>
              )}
            </FormControl>
            
            {selectedStudent && selectedStudentDetails && (
              <Card className="student-card">
                <CardContent>
                  <Box className="card-header">
                    <Avatar className="student-avatar">
                      {selectedStudentDetails.nameOfStudent?.charAt(0) || 'T'}
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
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Phone color="primary" sx={{ mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" color="text.secondary">
                          טלפון:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {selectedStudentDetails.phoneOfStudent}
                        </Typography>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Email color="primary" sx={{ mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" color="text.secondary">
                          אימייל:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {selectedStudentDetails.emailOfStudent}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Box>
        );
        
      case 1: // פרטי תשלום
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
              <>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CreditCard color="primary" sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" color="text.secondary">
                        מספר כרטיס:
                      </Typography>
                      <TextField
                        name="cardNumber"
                        value={paymentDetails.cardNumber}
                        onChange={handlePaymentChange}
                        placeholder="**** **** **** ****"
                        sx={{ width: '100%' }}
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Person color="primary" sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" color="text.secondary">
                        שם בעל הכרטיס:
                      </Typography>
                      <TextField
                        name="cardHolder"
                        value={paymentDetails.cardHolder}
                        onChange={handlePaymentChange}
                        placeholder="שם"
                        sx={{ width: '100%' }}
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <EventNote color="primary" sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" color="text.secondary">
                        תאריך תפוגה:
                      </Typography>
                      <TextField
                        name="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={handlePaymentChange}
                        placeholder="MM/YY"
                        sx={{ width: '100%' }}
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Lock color="primary" sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" color="text.secondary">
                        קוד אבטחה:
                      </Typography>
                      <TextField
                        name="cvv"
                        value={paymentDetails.cvv}
                        onChange={handlePaymentChange}
                        placeholder="***"
                        sx={{ width: '100%' }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
        );
        
      case 2: // סיכום והרשמה
        return (
          <Box className="step-content">
            <Typography variant="h6" className="step-title">
              סיכום והרשמה
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  שם הקורס:
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {selectedCourse?.nameOfCourse || ''}
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  שם התלמידה:
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {selectedStudentDetails?.nameOfStudent || ''}
                </Typography>
              </Grid>
              
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
                <Typography variant="body1" sx={{ fontWeight: 500, color: 'primary.main' }}>
                  ₪{selectedCourse?.priceOfCourse || '0'}
                </Typography>
              </Grid>
              
              {paymentMethod === 'credit' && (
                <>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      מספר כרטיס:
                    </Typography>
                    <Typography variant="body1">
                      **** **** **** {paymentDetails.cardNumber.slice(-4) || '****'}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      שם בעל הכרטיס:
                    </Typography>
                    <Typography variant="body1">
                      {paymentDetails.cardHolder || 'לא הוזן'}
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        );
        
      default:
        return 'שלב לא ידוע';
    }
  };
  
  // אם ההרשמה הושלמה בהצלחה
  if (joinSuccess) {
    return (
      <Box className="join-course-container">
        <Paper className="join-course-paper">
          <Box className="header success-header">
            <Typography variant="h5" className="page-title">
              ההרשמה הושלמה בהצלחה
            </Typography>
          </Box>
          
          <Box className="content-container">
            <Box className="success-message">
              <CheckCircle color="success" sx={{ fontSize: 64, mb: 2 }} />
              
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                ברכות! נרשמת בהצלחה לקורס
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 3, color: 'primary.main' }}>
                {selectedCourse?.nameOfCourse}
              </Typography>
              
              <Typography variant="body1" paragraph>
                פרטי ההרשמה נשלחו לכתובת האימייל שלך.
              </Typography>
              
              <Typography variant="body1" paragraph>
                ניתן להדפיס קבלה באמצעות הכפתור למטה.
              </Typography>
            </Box>
            
            <Box className="receipt-actions">
              <Button
                variant="contained"
                color="primary"
                startIcon={<Download />}
                onClick={exportReceipt}
                sx={{ mb: 2, width: '100%' }}
              >
                הורדת קבלה (PDF)
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<Print />}
                onClick={exportReceipt}
                sx={{ mb: 3, width: '100%' }}
              >
                הדפסת קבלה
              </Button>
            </Box>
            
            <Divider sx={{ my: 3 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button
                variant="outlined"
                onClick={() => navigate('/courses')}
              >
                חזרה לרשימת הקורסים
              </Button>
              
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/student/dashboard')}
              >
                מעבר לאזור האישי
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
          <IconButton 
            className="back-button" 
            onClick={() => navigate(-1)}
            color="inherit"
          >
            <ArrowBack />
          </IconButton>
          
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
          {getStepContent(activeStep)}
          
          {errors.submit && (
            <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
              {errors.submit}
            </Alert>
          )}
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              variant="outlined"
              onClick={activeStep === 0 ? handleBackToCourses : handleBack}
              disabled={isSubmitting}
            >
              {activeStep === 0 ? 'ביטול' : 'חזרה'}
            </Button>
            
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={isSubmitting || (activeStep === 0 && !selectedStudent)}
              endIcon={activeStep === steps.length - 1 ? <ReceiptLong /> : null}
            >
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : activeStep === steps.length - 1 ? (
                'אישור הרשמה'
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