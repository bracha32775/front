import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { joinCourseThunk } from '../../redux/Thunks/joinCourseThunk';
import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CreditCard } from '@mui/icons-material';
import { CalendarToday } from '@mui/icons-material';
import { EventNote } from '@mui/icons-material';
import { Receipt } from '@mui/icons-material';
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: '120px',
}));

const StepContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: '8px',
  backgroundColor: '#f8f9fa',
}));

const SuccessMessage = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  backgroundColor: 'rgba(76, 175, 80, 0.1)',
  borderRadius: '8px',
  border: '1px solid rgba(76, 175, 80, 0.3)',
  marginTop: theme.spacing(3),
}));

export const JoinCourse1 = ({ courseId, course }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector(state => state.students.students);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'credit',
    notes: ''
  });
  // מצבים
  const [activeStep, setActiveStep] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // שלבי ההרשמה
  const steps = ['בחירת תלמידה', 'פרטי תשלום', 'סיכום והרשמה'];

  // טעינת רשימת התלמידות
  useEffect(() => {
    const loadStudents = async () => {
      try {
        await dispatch(getStudentsThunk());
      } catch (error) {
        console.error('שגיאה בטעינת רשימת התלמידות:', error);
      }
    };

    loadStudents();
  }, [dispatch]);

  // טיפול בשינוי בחירת תלמידה
  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
    // ניקוי שגיאות
    if (errors.student) {
      setErrors(prev => ({ ...prev, student: '' }));
    }
  };

  // טיפול בשינויים בפרטי התשלום
  const handlePaymentChange = (event) => {
    const { name, value } = event.target;

    // עיבוד מיוחד למספר כרטיס אשראי - הוספת רווחים
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\s/g, '');
      if (cleaned.length <= 16) {
        const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
        setPaymentDetails(prev => ({
          ...prev,
          [name]: formatted
        }));
      }
    }
    // עיבוד מיוחד לתאריך תפוגה - הוספת לוכסן
    else if (name === 'expiryDate') {
      const cleaned = value.replace(/\//g, '');
      if (cleaned.length <= 4) {
        let formatted = cleaned;
        if (cleaned.length > 2) {
          formatted = cleaned.substring(0, 2) + '/' + cleaned.substring(2);
        }
        setPaymentDetails(prev => ({
          ...prev,
          [name]: formatted
        }));
      }
    }
    // שאר השדות
    else {
      setPaymentDetails(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // ניקוי שגיאות בעת הקלדה
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // אימות שלב בחירת תלמידה
  const validateStudentSelection = () => {
    const newErrors = {};
    if (!selectedStudent) {
      newErrors.student = 'יש לבחור תלמידה';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // אימות פרטי תשלום
  const validatePaymentDetails = () => {
    const newErrors = {};
    if (!paymentDetails.cardNumber.trim()) {
      newErrors.cardNumber = 'מספר כרטיס הוא שדה חובה';
    } else if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(paymentDetails.cardNumber)) {
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
      if (validateStudentSelection()) {
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

  // השלמת ההרשמה
  const handleSubmit = async () => {
    setLoading(true);
    try {
      // הכנת הנתונים לשליחה
      const joinData = {
        studentId: selectedStudent,
        courseId: courseId,
        // ניתן להוסיף פרטים נוספים כמו תאריך הרשמה וכו'
      };

      // שליחת הבקשה להרשמה לקורס
      await dispatch(joinCourseThunk(joinData));

      // עדכון מצב ההצלחה
      setSuccess(true);

      // אפשר להוסיף כאן ניווט לדף אחר לאחר השלמת ההרשמה
      // setTimeout(() => navigate('/courses'), 3000);
    } catch (error) {
      console.error('שגיאה בהרשמה לקורס:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'אירעה שגיאה בהרשמה לקורס. אנא נסי שנית.'
      }));
    } finally {
      setLoading(false);
    }
  };

  // מציאת פרטי התלמידה הנבחרת
  const selectedStudentDetails = students.find(s => s.idOfStudent === selectedStudent);

  // תצוגת תוכן לפי שלב
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <StepContent>
            <Typography variant="h6" gutterBottom>
              בחרי תלמידה להרשמה לקורס
            </Typography>
            <FormControl fullWidth error={!!errors.student}>
              <InputLabel id="student-select-label">תלמידה</InputLabel>
              <Select
                labelId="student-select-label"
                id="student-select"
                value={selectedStudent}
                label="תלמידה"
                onChange={handleStudentChange}
              >
                {students.map((student) => (
                  <MenuItem key={student.idOfStudent} value={student.idOfStudent}>
                    {student.nameOfStudent} - {student.idOfStudent}
                  </MenuItem>
                ))}
              </Select>
              {errors.student && (
                <Typography color="error" variant="caption">
                  {errors.student}
                </Typography>
              )}
            </FormControl>
          </StepContent>
        );

      case 1:
        return (
          // <StepContent>
          //   <Typography variant="h6" gutterBottom>
          //     פרטי תשלום
          //   </Typography>
          //   <Grid container spacing={2}>
          //     <Grid item xs={12}>
          //       <TextField
          //         fullWidth
          //         label="מספר כרטיס אשראי"
          //         name="cardNumber"
          //         value={paymentDetails.cardNumber}
          //         onChange={handlePaymentChange}
          //         error={!!errors.cardNumber}
          //         helperText={errors.cardNumber}
          //         inputProps={{ maxLength: 19 }}
          //       />
          //     </Grid>
          //     <Grid item xs={12}>
          //       <TextField
          //         fullWidth
          //         label="שם בעל הכרטיס"
          //         name="cardHolder"
          //         value={paymentDetails.cardHolder}
          //         onChange={handlePaymentChange}
          //         error={!!errors.cardHolder}
          //         helperText={errors.cardHolder}
          //       />
          //     </Grid>
          //     <Grid item xs={6}>
          //       <TextField
          //         fullWidth
          //         label="תאריך תפוגה (MM/YY)"
          //         name="expiryDate"
          //         value={paymentDetails.expiryDate}
          //         onChange={handlePaymentChange}
          //         error={!!errors.expiryDate}
          //         helperText={errors.expiryDate}
          //         inputProps={{ maxLength: 5 }}
          //       />
          //     </Grid>
          //     <Grid item xs={6}>
          //       <TextField
          //         fullWidth
          //         label="קוד אבטחה (CVV)"
          //         name="cvv"
          //         value={paymentDetails.cvv}
          //         onChange={handlePaymentChange}
          //         error={!!errors.cvv}
          //         helperText={errors.cvv}
          //         inputProps={{ maxLength: 4 }}
          //         type="password"
          //       />
          //     </Grid>
          //   </Grid>
          // </StepContent>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              פרטי תשלום
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                  <InputLabel>אמצעי תשלום</InputLabel>
                  <Select
                    value={paymentInfo.paymentMethod}
                    onChange={handlePaymentChange}
                    label="אמצעי תשלום"
                    name="paymentMethod"
                  >
                    <MenuItem value="credit">כרטיס אשראי</MenuItem>
                    <MenuItem value="cash">מזומן</MenuItem>
                    <MenuItem value="check">צ'ק</MenuItem>
                    <MenuItem value="transfer">העברה בנקאית</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {paymentInfo.paymentMethod === 'credit' && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="מספר כרטיס אשראי"
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: <CreditCard color="action" sx={{ mr: 1 }} />,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="תוקף (MM/YY)"
                      name="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={handlePaymentChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: <CalendarToday color="action" sx={{ mr: 1 }} />,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={handlePaymentChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: <Receipt color="action" sx={{ mr: 1 }} />,
                      }}
                    />
                  </Grid>
                </>
              )}

              {paymentInfo.paymentMethod !== 'credit' && (
                <Grid item xs={12}>
                  <Alert severity="info" sx={{ mt: 2 }}>
                    {paymentInfo.paymentMethod === 'cash' && 'יש להגיע למשרד עם מזומן לתשלום.'}
                    {paymentInfo.paymentMethod === 'check' && 'יש להגיע למשרד עם צ\'ק לתשלום.'}
                    {paymentInfo.paymentMethod === 'transfer' && 'פרטי חשבון להעברה בנקאית יישלחו אליך במייל.'}
                  </Alert>
                </Grid>
              )}

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="הערות לתשלום"
                  name="notes"
                  value={paymentInfo.notes}
                  onChange={handlePaymentChange}
                  variant="outlined"
                  multiline
                  rows={3}
                  InputProps={{
                    startAdornment: <EventNote color="action" sx={{ mr: 1, alignSelf: 'flex-start', mt: 1 }} />,
                  }}
                />
              </Grid>
            </Grid>
          </Box>

        );

      case 2:
        return (
          <StepContent>
            <Typography variant="h6" gutterBottom>
              סיכום ואישור הרשמה
            </Typography>

            <Box sx={{ mb: 3, p: 2, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
              <Typography variant="subtitle1" gutterBottom>
                פרטי הקורס:
              </Typography>
              <Typography>שם הקורס: {course.nameOfCourse}</Typography>
              <Typography>מחיר: ₪{course.priceOfCourse}</Typography>
              {course.dateOfCourse && (
                <Typography>
                  תאריך התחלה: {new Date(course.dateOfCourse).toLocaleDateString('he-IL')}
                </Typography>
              )}
            </Box>

            {selectedStudentDetails && (
              <Box sx={{ mb: 3, p: 2, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                <Typography variant="subtitle1" gutterBottom>
                  פרטי התלמידה:
                </Typography>
                <Typography>שם: {selectedStudentDetails.nameOfStudent}</Typography>
                <Typography>ת.ז.: {selectedStudentDetails.idOfStudent}</Typography>
                <Typography>טלפון: {selectedStudentDetails.phoneOfStudent}</Typography>
                {selectedStudentDetails.emailOfStudent && (
                  <Typography>אימייל: {selectedStudentDetails.emailOfStudent}</Typography>
                )}
              </Box>
            )}

            <Box sx={{ mb: 3, p: 2, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
              <Typography variant="subtitle1" gutterBottom>
                פרטי תשלום:
              </Typography>
              <Typography>
                מספר כרטיס:
                {paymentDetails.cardNumber.replace(/\d{4}(?=.)/g, '****')}
              </Typography>
              <Typography>שם בעל הכרטיס: {paymentDetails.cardHolder}</Typography>
              <Typography>תוקף: {paymentDetails.expiryDate}</Typography>
            </Box>

            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              לחיצה על "אישור הרשמה" תחייב את כרטיס האשראי שלך בסכום של ₪{course.priceOfCourse} ותרשום את התלמידה לקורס.
            </Typography>

            {errors.submit && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errors.submit}
              </Alert>
            )}
          </StepContent>
        );

      default:
        return 'שלב לא ידוע';
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {success ? (
          <SuccessMessage>
            <Typography variant="h6" gutterBottom color="success.main">
              ההרשמה לקורס הושלמה בהצלחה!
            </Typography>
            <Typography variant="body1" paragraph>
              התלמידה {selectedStudentDetails?.nameOfStudent} נרשמה בהצלחה לקורס {course.nameOfCourse}.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/courses')}
            >
              חזרה לרשימת הקורסים
            </Button>
          </SuccessMessage>
        ) : (
          <>
            {getStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <StyledButton
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
              >
                חזרה
              </StyledButton>

              <Box>
                {activeStep === steps.length - 1 ? (
                  <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : 'אישור הרשמה'}
                  </StyledButton>
                ) : (
                  <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    הבא
                  </StyledButton>
                )}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};