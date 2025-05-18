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
  Description, // איקון לוורד
  TableChart // איקון לאקסל
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
  
  // פונקציית ייצוא קבלה לוורד
  const exportReceiptToWord = () => {
    // יצירת תוכן HTML שיתאים למסמך וורד
    const htmlContent = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" 
            xmlns:w="urn:schemas-microsoft-com:office:word" 
            xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8">
        <title>קבלה עבור הרשמה לקורס</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            direction: rtl;
            text-align: right;
          }
          .header {
            color: #1976d2;
            font-size: 24px;
            text-align: center;
            margin-bottom: 20px;
          }
          .receipt-info {
            margin-bottom: 10px;
            text-align: left;
          }
          .section-title {
            color: #1976d2;
            font-size: 18px;
            margin-top: 20px;
            margin-bottom: 10px;
            border-bottom: 1px solid #1976d2;
            padding-bottom: 5px;
          }
          .info-row {
            margin-bottom: 5px;
          }
          .footer {
            margin-top: 50px;
            text-align: center;
            color: #666;
            font-size: 12px;
          }
          .signature {
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
          }
          .signature-line {
            width: 150px;
            border-top: 1px solid #000;
            margin-top: 5px;
          }
          .stamp {
            width: 100px;
            height: 100px;
            border: 2px dashed #666;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 20px;
          }
        </style>
      </head>
      <body>
        <div class="header">קבלה עבור הרשמה לקורס</div>
        
        <div class="receipt-info">
          <div>מספר קבלה: ${Math.floor(Math.random() * 10000)}</div>
          <div>תאריך: ${new Date().toLocaleDateString('he-IL')}</div>
        </div>
        
        <div class="section-title">פרטי הקורס</div>
        <div class="info-row">שם הקורס: ${selectedCourse?.nameOfCourse || ''}</div>
        <div class="info-row">יום ושעה: ${selectedCourse?.dayOfCourse || ''} ${selectedCourse?.hourOfCourse || ''}</div>
        <div class="info-row">מספר מפגשים: ${selectedCourse?.amountOfMeetingsInCourse || '0'}</div>
        <div class="info-row">מחיר: ₪${selectedCourse?.totalSumOfCourse || '0'}</div>
        
        <div class="section-title">פרטי התלמידה</div>
        <div class="info-row">שם: ${selectedStudentDetails?.nameOfStudent || ''}</div>
        <div class="info-row">טלפון: ${selectedStudentDetails?.phoneOfStudent || ''}</div>
        <div class="info-row">אימייל: ${selectedStudentDetails?.emailOfStudent || ''}</div>
        
        <div class="section-title">פרטי תשלום</div>
        <div class="info-row">סכום לתשלום: ₪${selectedCourse?.totalSumOfCourse || '0'}</div>
        <div class="info-row">אמצעי תשלום: ${
          paymentMethod === "credit" ? "כרטיס אשראי" : 
          paymentMethod === "cash" ? "מזומן" : 
          paymentMethod === "check" ? "צ'ק" : "העברה בנקאית"
        }</div>
        
        <div class="signature">
          <div>
            <div>חתימה:</div>
            <div class="signature-line"></div>
          </div>
          <div>
            <div>חותמת המכללה:</div>
            <div class="stamp">חותמת</div>
          </div>
        </div>
        
        <div class="footer">
          מכללת הקורסים | רחוב הדוגמה 123, תל אביב | טלפון: 03-1234567
        </div>
      </body>
      </html>
    `;
    
    // יצירת בלוב מהתוכן
    const blob = new Blob([htmlContent], { type: 'application/msword' });
    
    // יצירת קישור להורדה
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `קבלה_${selectedCourse?.nameOfCourse || 'קורס'}.doc`;
    
    // הוספת הקישור לדף והקלקה עליו
    document.body.appendChild(link);
    link.click();
    
    // הסרת הקישור מהדף
    document.body.removeChild(link);
  };
  
  // פונקציית ייצוא קבלה לאקסל
  const exportReceiptToExcel = () => {
    // יצירת תוכן CSV
    const csvContent = [
      ['קבלה עבור הרשמה לקורס'],
      [''],
      ['מספר קבלה:', Math.floor(Math.random() * 10000)],
      ['תאריך:', new Date().toLocaleDateString('he-IL')],
      [''],
      ['פרטי הקורס'],
      ['שם הקורס:', selectedCourse?.nameOfCourse || ''],
      ['יום ושעה:', `${selectedCourse?.dayOfCourse || ''} ${selectedCourse?.hourOfCourse || ''}`],
      ['מספר מפגשים:', selectedCourse?.amountOfMeetingsInCourse || '0'],
      ['מחיר:', `₪${selectedCourse?.totalSumOfCourse || '0'}`],
      [''],
      ['פרטי התלמידה'],
      ['שם:', selectedStudentDetails?.nameOfStudent || ''],
      ['טלפון:', selectedStudentDetails?.phoneOfStudent || ''],
      ['אימייל:', selectedStudentDetails?.emailOfStudent || ''],
      [''],
      ['פרטי תשלום'],
      ['סכום לתשלום:', `₪${selectedCourse?.totalSumOfCourse || '0'}`],
      ['אמצעי תשלום:', paymentMethod === "credit" ? "כרטיס אשראי" : 
                        paymentMethod === "cash" ? "מזומן" : 
                        paymentMethod === "check" ? "צ'ק" : "העברה בנקאית"],
      [''],
      ['מכללת הקורסים | רחוב הדוגמה 123, תל אביב | טלפון: 03-1234567']
    ].map(row => row.join(',')).join('\n');
    
    // יצירת בלוב מהתוכן
    const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // יצירת קישור להורדה
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `קבלה_${selectedCourse?.nameOfCourse || 'קורס'}.csv`;
    
    // הוספת הקישור לדף והקלקה עליו
    document.body.appendChild(link);
    link.click();
    
    // הסרת הקישור מהדף
    document.body.removeChild(link);
  };
  
  // פונקציה כללית לייצוא קבלה
  const exportReceipt = (format) => {
    switch (format) {
      case 'pdf':
        exportReceiptToPDF();
        break;
      case 'word':
        exportReceiptToWord();
        break;
      case 'excel':
        exportReceiptToExcel();
        break;
      default:
        exportReceiptToPDF();
    }
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
            
            <FormControl fullWidth className="form-field" error={!!errors.student}>
              <InputLabel>תלמידה</InputLabel>
              <Select
                value={selectedStudent}
                onChange={handleStudentChange}
                label="תלמידה"
              >
                {students && students.map((student) => (
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
                        ת.ז: {selectedStudentDetails.idOfStudent || 'לא זמין'}
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
                      </Box>
                      <Typography variant="body1">
                        {selectedStudentDetails.phoneOfStudent || 'לא זמין'}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Email color="primary" sx={{ mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" color="text.secondary">
                          דוא"ל:
                        </Typography>
                      </Box>
                      <Typography variant="body1">
                        {selectedStudentDetails.emailOfStudent || 'לא זמין'}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
            
            {/* תצוגת פרטי הקורס */}
            {selectedStudent && selectedCourse && (
              <Card className="course-info-card">
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <School color="primary" sx={{ mr: 1, fontSize: 24 }} />
                    <Typography variant="h6" className="card-title">
                      פרטי הקורס
                    </Typography>
                  </Box>
                  
                  <Divider className="divider" />
                  
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        שם הקורס:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {selectedCourse.nameOfCourse || 'לא זמין'}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        יום ושעה:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {selectedCourse.dayOfCourse} {selectedCourse.hourOfCourse}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        מספר מפגשים:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {selectedCourse.amountOfMeetingsInCourse || '0'}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        מחיר:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500, color: 'primary.main' }}>
                        ₪{selectedCourse.totalSumOfCourse || '0'}
                      </Typography>
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
            
            {/* תצוגה משתנה לפי אמצעי התשלום */}
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
                    label="תוקף (MM/YY)"
                    name="expiryDate"
                    value={paymentDetails.expiryDate}
                    onChange={handlePaymentChange}
                    error={!!errors.expiryDate}
                    helperText={errors.expiryDate}
                    variant="outlined"
                    className="form-field"
                    placeholder="MM/YY"
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
                    inputProps={{ maxLength: 4 }}
                  />
                </Grid>
              </Grid>
            )}
            
            {paymentMethod === 'cash' && (
              <Alert severity="info" sx={{ mt: 2 }}>
                יש להגיע למשרד עם מזומן לתשלום. סכום לתשלום: ₪{selectedCourse?.totalSumOfCourse || '0'}
              </Alert>
            )}
            
            {paymentMethod === 'check' && (
              <Alert severity="info" sx={{ mt: 2 }}>
                יש להגיע למשרד עם צ'ק לתשלום על סך ₪{selectedCourse?.totalSumOfCourse || '0'} לפקודת "מכללת הקורסים".
              </Alert>
            )}
            
            {paymentMethod === 'transfer' && (
              <Box sx={{ mt: 2 }}>
                <Alert severity="info" sx={{ mb: 2 }}>
                  פרטי חשבון להעברה בנקאית:
                </Alert>
                
                <Card sx={{ p: 2, bgcolor: 'background.paper' }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>שם החשבון:</strong> מכללת הקורסים בע"מ
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>בנק:</strong> לאומי (10)
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>סניף:</strong> 800
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>מספר חשבון:</strong> 12345678
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2, fontWeight: 'bold' }}>
                    סכום להעברה: ₪{selectedCourse?.totalSumOfCourse || '0'}
                  </Typography>
                </Card>
              </Box>
            )}
            
            <TextField
              fullWidth
              label="הערות לתשלום"
              name="notes"
              multiline
              rows={3}
              variant="outlined"
              className="form-field"
              sx={{ mt: 3 }}
              InputProps={{
                startAdornment: <EventNote color="action" sx={{ mr: 1, alignSelf: 'flex-start', mt: 1 }} />,
              }}
            />
          </Box>
        );
        
      case 2: // סיכום והרשמה
        return (
          <Box className="step-content">
            <Typography variant="h6" className="step-title">
              סיכום פרטי הרשמה
            </Typography>
            
            <Grid container spacing={3}>
              {/* פרטי הקורס */}
              <Grid item xs={12} md={6}>
                <Card className="summary-card">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <School color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6" className="card-title">
                        פרטי הקורס
                      </Typography>
                    </Box>
                    
                    <Divider className="divider" />
                    
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        שם הקורס:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                        {selectedCourse?.nameOfCourse || 'לא זמין'}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary">
                        יום ושעה:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                        {selectedCourse?.dayOfCourse} {selectedCourse?.hourOfCourse}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary">
                        מספר מפגשים:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                        {selectedCourse?.amountOfMeetingsInCourse || '0'}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary">
                        מחיר:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500, color: 'primary.main' }}>
                        ₪{selectedCourse?.totalSumOfCourse || '0'}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              {/* פרטי התלמידה */}
              <Grid item xs={12} md={6}>
                <Card className="summary-card">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ bgcolor: 'primary.main', mr: 1, width: 32, height: 32 }}>
                        {selectedStudentDetails?.nameOfStudent?.charAt(0) || 'T'}
                      </Avatar>
                      <Typography variant="h6" className="card-title">
                        פרטי התלמידה
                      </Typography>
                    </Box>
                    
                    <Divider className="divider" />
                    
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        שם:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                        {selectedStudentDetails?.nameOfStudent || 'לא זמין'}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary">
                        טלפון:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                        {selectedStudentDetails?.phoneOfStudent || 'לא זמין'}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary">
                        דוא"ל:
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {selectedStudentDetails?.emailOfStudent || 'לא זמין'}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              {/* פרטי תשלום */}
              <Grid item xs={12}>
                <Card className="summary-card">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Payment color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6" className="card-title">
                        פרטי תשלום
                      </Typography>
                    </Box>
                    
                    <Divider className="divider" />
                    
                    <Box sx={{ mt: 2 }}>
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
                          <Typography variant="body1" sx={{ fontWeight: 500, color: 'primary.main' }}>
                            ₪{selectedCourse?.totalSumOfCourse || '0'}
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
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            <Alert severity="info" sx={{ mt: 3, mb: 2 }}>
              לחיצה על "אישור הרשמה" תשלים את תהליך ההרשמה לקורס.
            </Alert>
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
                ניתן להדפיס קבלה באמצעות הכפתורים למטה.
              </Typography>
            </Box>
            
            <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
                אפשרויות ייצוא קבלה
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<Download />}
                    onClick={() => exportReceipt('pdf')}
                    sx={{ mb: 2 }}
                  >
                    הורדת קבלה (PDF)
                  </Button>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Description />}
                    onClick={() => exportReceipt('word')}
                    sx={{ mb: 2 }}
                  >
                    ייצוא לוורד
                  </Button>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<TableChart />}
                    onClick={() => exportReceipt('excel')}
                    sx={{ mb: 2 }}
                  >
                    ייצוא לאקסל
                  </Button>
                </Grid>
                
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Print />}
                    onClick={() => window.print()}
                  >
                    הדפסת קבלה
                  </Button>
                </Grid>
              </Grid>
            </Box>
            
            <Divider sx={{ my: 4 }} />
            
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
        </Box>
        
        <Box className="footer">
          <Button
            variant="outlined"
            onClick={handleBack}
          >
            חזור לשלב הקודם
          </Button>
          
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={isSubmitting}
          >
            {activeStep === steps.length - 1 ? 'אישור הרשמה' : 'המשך'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
export default JoinCourse3;