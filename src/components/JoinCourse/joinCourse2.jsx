import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsThunk } from "../../redux/Thunks/getStudentsThunk";
import { 
  Box, 
  Button, 
  Container, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Paper, 
  Select, 
  Step, 
  StepLabel, 
  Stepper, 
  Typography, 
  TextField, 
  Avatar, 
  Divider, 
  Grid, 
  Card, 
  CardContent, 
  Alert, 
  CircularProgress,
  IconButton
} from "@mui/material";
import { 
  ArrowBack, 
  Person, 
  School, 
  Payment, 
  CheckCircle, 
  Info, 
  CreditCard, 
  EventNote, 
  LocationOn, 
  AccessTime, 
  AttachMoney, 
  Receipt
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./joinCourse2.css";

export const JoinCourse2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  // פרטי תלמיד
  const [selectedStudent, setSelectedStudent] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);
  
  // פרטי תשלום
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  
  // נתונים מהסטור
  const students = useSelector(state => state.students.students);
  const courses = useSelector(state => state.courses.courses);
  const selectedCourseId = useSelector(state => state.courses.selectC);
  
  // מידע על הקורס הנבחר
  const selectedCourse = courses.find(c => c.idOfCourse === selectedCourseId) || {};
  
  // שלבי הרשמה
  const steps = ["בחירת תלמידה", "פרטי תשלום", "סיכום ואישור"];
  
  useEffect(() => {
    dispatch(getStudentsThunk());
  }, [dispatch]);
  
  // טיפול בשינוי תלמידה
  const handleStudentChange = (event) => {
    const studentName = event.target.value;
    setSelectedStudent(studentName);
    
    if (studentName) {
      const student = students.find(s => s.nameOfStudent === studentName);
      setStudentDetails(student);
    } else {
      setStudentDetails(null);
    }
  };
  
  // מעבר לשלב הבא
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  
  // חזרה לשלב הקודם
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  
  // שליחת טופס
  const handleSubmit = async () => {
    if (!selectedStudent || !selectedCourseId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const student = students.find(s => s.nameOfStudent === selectedStudent);
      if (!student) throw new Error("לא נמצא תלמיד");
      
      const sId = student.idOfStudent;
      const id = selectedCourseId;
      
      console.log(`הרשמת תלמיד ${sId} לקורס ${id}`);
      // כאן יש להוסיף את הקריאה לשרת
      // await fetch(`https://localhost:7092/api/Student/JoinCourse?sId=${sId}&id=${id}`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      // סימולציה של תשובה מהשרת
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      setActiveStep(3); // מעבר לשלב האישור
    } catch (err) {
      console.error("שגיאה בהרשמה לקורס:", err);
      setError(err.message || "אירעה שגיאה בהרשמה לקורס");
    } finally {
      setLoading(false);
    }
  };
  
  // חזרה לדף הקורסים
  const handleBackToCourses = () => {
    navigate("/Course");
  };
  
  // תיקון פונקציית הייצוא לקבלה מעוצבת היטב

  const handleExport = (format) => {
    // יצירת תוכן המסמך עם פרטי הקורס האמיתיים
    const documentTitle = `אישור הרשמה - ${selectedCourse.nameOfCourse}`;
    const documentContent = `
      אישור הרשמה לקורס
      ------------------
      שם הקורס: ${selectedCourse.nameOfCourse}
      יום ושעה: ${selectedCourse.dayOfCourse} ${selectedCourse.hourOfCourse}
      מספר מפגשים: ${selectedCourse.amountOfMeetingsInCourse}
      מחיר: ₪${selectedCourse.totalSumOfCourse} 
      
      פרטי התלמיד/ה
      -------------
      שם: ${studentDetails.firstName} ${studentDetails.lastName}
      טלפון: ${studentDetails.phone}
      אימייל: ${studentDetails.email}
      
      פרטי תשלום
      ----------
      אמצעי תשלום: ${
        paymentMethod === "credit" ? "כרטיס אשראי" : 
        paymentMethod === "cash" ? "מזומן" : 
        paymentMethod === "check" ? "צ'ק" : "העברה בנקאית"
      }
      
      תאריך הרשמה: ${new Date().toLocaleDateString('he-IL')}
    `;
    
    // ייצוא בהתאם לפורמט שנבחר
    switch (format) {
      case 'pdf':
        exportToPdf(documentTitle, documentContent);
        break;
      case 'word':
        exportToWord(documentTitle, documentContent);
        break;
      case 'excel':
        exportToExcel(selectedCourse, studentDetails, paymentMethod);
        break;
      default:
        console.error('פורמט לא נתמך');
    }
  };

  // פונקציות הייצוא המקוריות
  const exportToPdf = (title, content) => {
    // קוד ייצוא ל-PDF שעבד קודם
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // הגדרת כיוון מימין לשמאל ופונט עברית
    doc.setR2L(true);
    doc.setFont("Arial", "normal");
    
    // כותרת
    doc.setFontSize(18);
    doc.text(title, 105, 20, { align: "center" });
    
    // תוכן
    doc.setFontSize(12);
    const contentLines = content.split('\n');
    let yPos = 40;
    
    contentLines.forEach(line => {
      doc.text(line.trim(), 190, yPos, { align: "right" });
      yPos += 10;
    });
    
    // הוספת לוגו וקישוטים
    doc.setDrawColor(25, 118, 210); // צבע כחול
    doc.setLineWidth(0.5);
    doc.line(20, 30, 190, 30); // קו מפריד אחרי הכותרת
    
    // שמירת הקובץ
    doc.save(`${title}.pdf`);
  };

  const exportToWord = (title, content) => {
    // קוד ייצוא ל-Word שעבד קודם
    const preHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; direction: rtl; }
          h1 { color: #1976d2; text-align: center; }
          .section { margin-top: 20px; }
          .section-title { color: #1976d2; border-bottom: 1px solid #1976d2; padding-bottom: 5px; }
          .content { white-space: pre-line; }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <div class='content'>`;
        
    const postHtml = `</div></body></html>`;
    const formattedContent = content.replace(/\n/g, '<br>');
    
    const blob = new Blob([preHtml + formattedContent + postHtml], {
      type: 'application/msword'
    });
    
    // יצירת קישור להורדה
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.doc`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const exportToExcel = (courseData, studentData, paymentMethod) => {
    // קוד ייצוא ל-Excel שעבד קודם
    // יצירת מערך נתונים לייצוא
    const data = [
      {
        'שם הקורס': courseData.nameOfCourse,
        'יום': courseData.dayOfCourse,
        'שעה': courseData.hourOfCourse,
        'מספר מפגשים': courseData.amountOfMeetingsInCourse,
        'מחיר': courseData.priceOfCourse,
        'שם התלמיד/ה': `${studentData.firstName} ${studentData.lastName}`,
        'טלפון': studentData.phone,
        'אימייל': studentData.email,
        'אמצעי תשלום': paymentMethod === "credit" ? "כרטיס אשראי" : 
                        paymentMethod === "cash" ? "מזומן" : 
                        paymentMethod === "check" ? "צ'ק" : "העברה בנקאית",
        'תאריך הרשמה': new Date().toLocaleDateString('he-IL')
      }
    ];
    
    // המרה ל-CSV
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // כותרות העמודות
    const headers = Object.keys(data[0]);
    csvContent += headers.join(",") + "\r\n";
    
    // שורות הנתונים
    data.forEach(row => {
      const rowData = headers.map(header => {
        const cellData = row[header] || '';
        // טיפול במקרה שהתא מכיל פסיק
        return `"${cellData}"`;
      });
      csvContent += rowData.join(",") + "\r\n";
    });
    
    // יצירת קישור להורדה
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `אישור_הרשמה_${courseData.nameOfCourse}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // תצוגת תוכן לפי שלב
  const getStepContent = (step) => {
    switch (step) {
      case 0: // בחירת תלמידה
        return (
          <Box className="step-content">
            <Typography variant="h6" className="step-title">
              בחירת תלמידה לקורס
            </Typography>
            
            <FormControl fullWidth className="form-field">
              <InputLabel id="student-select-label">בחרי תלמידה</InputLabel>
              <Select
                labelId="student-select-label"
                id="student-select"
                value={selectedStudent}
                onChange={handleStudentChange}
                label="בחרי תלמידה"
              >
                <MenuItem value="">
                  <em>בחרי תלמידה</em>
                </MenuItem>
                {students.map(student => (
                  <MenuItem 
                    key={student.idOfStudent} 
                    value={student.nameOfStudent}
                  >
                    {student.nameOfStudent}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            {studentDetails && (
              <Card className="student-card">
                <CardContent>
                  <Box className="card-header">
                    <Avatar className="student-avatar">
                      {studentDetails.nameOfStudent?.charAt(0) || "S"}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" className="student-name">
                        {studentDetails.nameOfStudent}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {studentDetails.idOfStudent && `מזהה: ${studentDetails.idOfStudent}`}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider className="divider" />
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="textSecondary">
                        טלפון:
                      </Typography>
                      <Typography variant="body1">
                        {studentDetails.phoneOfStudent || "לא צוין"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="textSecondary">
                        אימייל:
                      </Typography>
                      <Typography variant="body1">
                        {studentDetails.emailOfStudent || "לא צוין"}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
            
            <Box className="price-summary">
              <Typography variant="subtitle1" className="price-title">
                מחיר הקורס
              </Typography>
              <Typography variant="h4" className="price-amount">
                ₪{selectedCourse.priceOfCourse || "---"}
              </Typography>
            </Box>
          </Box>
        );
        
      case 1: // פרטי תשלום
        return (
          <Box className="step-content">
            <Typography variant="h6" className="step-title">
              פרטי תשלום
            </Typography>
            <br />
            
            <FormControl component="fieldset" className="form-field">
              <Typography variant="subtitle1" gutterBottom>
                בחרי אמצעי תשלום:
              </Typography>
              <Box display="flex" gap={2} flexWrap="wrap">
                <Button
                  variant={paymentMethod === "credit" ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setPaymentMethod("credit")}
                  startIcon={<CreditCard />}
                >
                  כרטיס אשראי
                </Button>
                <Button
                  variant={paymentMethod === "cash" ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setPaymentMethod("cash")}
                  startIcon={<AttachMoney />}
                >
                  מזומן
                </Button>
                <Button
                  variant={paymentMethod === "check" ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setPaymentMethod("check")}
                  startIcon={<Receipt />}
                >
                  צ'ק
                </Button>
                <Button
                  variant={paymentMethod === "bank" ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setPaymentMethod("bank")}
                  startIcon={<Receipt />}
                >
                  העברה בנקאית
                </Button>
              </Box>
            </FormControl>
            
            {paymentMethod === "credit" && (
              <Box className="payment-fields">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                      <CreditCard className="field-icon" />
                      <TextField
                        fullWidth
                        label="מספר כרטיס"
                        variant="outlined"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="form-field"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                      <Person className="field-icon" />
                      <TextField
                        fullWidth
                        label="שם בעל הכרטיס"
                        variant="outlined"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="form-field"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center">
                      <EventNote className="field-icon" />
                      <TextField
                        fullWidth
                        label="תוקף (MM/YY)"
                        variant="outlined"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YY"
                        className="form-field"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center">
                      <Info className="field-icon" />
                      <TextField
                        fullWidth
                        label="CVV"
                        variant="outlined"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                        className="form-field"
                      />
                    </Box>
                  </Grid>
                </Grid>
                
                <Alert severity="info" className="payment-alert">
                  <Typography variant="body2">
                    פרטי הכרטיס מאובטחים ומוצפנים. לא נשמור את פרטי הכרטיס שלך.
                  </Typography>
                </Alert>
              </Box>
            )}
            
            {paymentMethod === "bank" && (
              <Box className="payment-fields">
                <Alert severity="info" className="payment-alert">
                  <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                    פרטי חשבון להעברה בנקאית:
                  </Typography>
                  <Typography variant="body1" paragraph>
                    בנק: לאומי (10)
                  </Typography>
                  <Typography variant="body1" paragraph>
                    סניף: 800
                  </Typography>
                  <Typography variant="body1" paragraph>
                    מספר חשבון: 12345678
                  </Typography>
                  <Typography variant="body1" paragraph>
                    על שם: מכללת הקורסים
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    * יש לשלוח אישור העברה למייל: info@courses.com
                  </Typography>
                </Alert>
              </Box>
            )}
            
            {paymentMethod === "cash" && (
              <Box className="payment-fields">
                <Alert severity="info" className="payment-alert">
                  <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                    תשלום במזומן:
                  </Typography>
                  <Typography variant="body1" paragraph>
                    יש להגיע למשרדי המכללה עם הסכום המדויק במזומן.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    כתובת: רחוב הדוגמה 123, תל אביב
                  </Typography>
                  <Typography variant="body1" paragraph>
                    שעות פעילות: א'-ה' 9:00-17:00
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    * תקבלי קבלה במקום בעת התשלום.
                  </Typography>
                </Alert>
              </Box>
            )}
            
            {paymentMethod === "check" && (
              <Box className="payment-fields">
                <Alert severity="info" className="payment-alert">
                  <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                    תשלום בצ'ק:
                  </Typography>
                  <Typography variant="body1" paragraph>
                    יש להגיע למשרדי המכללה עם צ'ק לפקודת "מכללת הקורסים".
                  </Typography>
                  <Typography variant="body1" paragraph>
                    ניתן לשלם בצ'ק אחד או לפרוס לעד 3 תשלומים.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    כתובת: רחוב הדוגמה 123, תל אביב
                  </Typography>
                  <Typography variant="body1" paragraph>
                    שעות פעילות: א'-ה' 9:00-17:00
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    * תקבלי קבלה במקום בעת התשלום.
                  </Typography>
                </Alert>
              </Box>
            )}
            
            <Box className="price-summary">
              <Typography variant="subtitle1" className="price-title">
                לתשלום
              </Typography>
              <Typography variant="h4" className="price-amount">
                ₪{selectedCourse.priceOfCourse || "---"}
              </Typography>
            </Box>
          </Box>
        );
        
      case 2: // סיכום ואישור
        return (
          <Box className="step-content">
            <Typography variant="h6" className="step-title">
              סיכום ואישור הרשמה
            </Typography>
            
            <Grid container spacing={3} className="summary-grid">
              <Grid item xs={12} md={6}>
                <Card className="summary-card">
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Person className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        פרטי תלמידה
                      </Typography>
                    </Box>
                    
                    <Divider className="divider" />
                    
                    <Box className="summary-details">
                      <Typography variant="body1">
                        <strong>שם:</strong> {selectedStudent}
                      </Typography>
                      {studentDetails && (
                        <>
                          <Typography variant="body1">
                            <strong>טלפון:</strong> {studentDetails.phoneOfStudent || "לא צוין"}
                          </Typography>
                          <Typography variant="body1">
                            <strong>אימייל:</strong> {studentDetails.emailOfStudent || "לא צוין"}
                          </Typography>
                        </>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card className="summary-card">
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <School className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        פרטי הקורס
                      </Typography>
                    </Box>
                    
                    <Divider className="divider" />
                    
                    <Box className="summary-details">
                      <Typography variant="body1" className="course-name">
                        {selectedCourse.nameOfCourse || "לא צוין"}
                      </Typography>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="textSecondary">
                            תאריך התחלה:
                          </Typography>
                          <Typography variant="body1">
                            {selectedCourse.startDateOfCourse || "לא צוין"}
                          </Typography>
                        </Grid>
                        
                        <Grid item xs={6}>
                          <Typography variant="body2" color="textSecondary">
                            יום בשבוע:
                          </Typography>
                          <Typography variant="body1">
                            {selectedCourse.dayOfCourse || "לא צוין"}
                          </Typography>
                        </Grid>
                        
                        <Grid item xs={6}>
                          <Typography variant="body2" color="textSecondary">
                            מספר מפגשים:
                          </Typography>
                          <Typography variant="body1">
                            {selectedCourse.amountOfMeetingsInCourse || "0"}
                          </Typography>
                        </Grid>
                        
                        <Grid item xs={6}>
                          <Typography variant="body2" color="textSecondary">
                            מחיר:
                          </Typography>
                          <Typography variant="body1" className="price">
                            ₪{selectedCourse.priceOfCourse || "---"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12}>
                <Card className="summary-card">
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <CreditCard className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        פרטי תשלום
                      </Typography>
                    </Box>
                    
                    <Divider className="divider" />
                    
                    <Box className="summary-details">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="textSecondary">
                            אמצעי תשלום:
                          </Typography>
                          <Typography variant="body1">
                            {paymentMethod === "credit" && "כרטיס אשראי"}
                            {paymentMethod === "bank" && "העברה בנקאית"}
                          </Typography>
                        </Grid>
                        
                        {paymentMethod === "credit" && (
                          <>
                            <Grid item xs={12} sm={6}>
                              <Typography variant="body2" color="textSecondary">
                                מספר כרטיס:
                              </Typography>
                              <Typography variant="body1">
                                xxxx-xxxx-xxxx-{cardNumber.slice(-4)}
                              </Typography>
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                              <Typography variant="body2" color="textSecondary">
                                שם בעל הכרטיס:
                              </Typography>
                              <Typography variant="body1">
                                {cardName}
                              </Typography>
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                              <Typography variant="body2" color="textSecondary">
                                תוקף:
                              </Typography>
                              <Typography variant="body1">
                                {expiryDate}
                              </Typography>
                            </Grid>
                          </>
                        )}
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12}>
                <Card className="total-card">
                  <CardContent>
                    <Box className="total-content">
                      <Typography variant="h6" className="total-label">
                        סה"כ לתשלום:
                      </Typography>
                      <Typography variant="h4" className="total-amount">
                        ₪{selectedCourse.priceOfCourse || "---"}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12}>
                <Alert severity="info" className="final-alert">
                  לחיצה על "אישור" תשלים את תהליך ההרשמה לקורס.
                </Alert>
              </Grid>
            </Grid>
          </Box>
        );
        
    //   case 3: // אישור הרשמה
    //     return (
    //       <Box className="success-content">
    //         <CheckCircle className="success-icon" />
            
    //         <Typography variant="h5" className="success-title">
    //           ההרשמה הושלמה בהצלחה!
    //         </Typography>
            
    //         <Typography variant="body1" className="success-message">
    //           נרשמת בהצלחה לקורס "{selectedCourse.nameOfCourse}".
    //           {studentDetails?.emailOfStudent && (
    //             <> אישור הרשמה נשלח לכתובת האימייל שלך: {studentDetails.emailOfStudent}</>
    //           )}
    //         </Typography>
            
    //         <Box className="course-details-summary">
    //           <Typography variant="subtitle1" className="details-title">
    //             פרטי הקורס:
    //           </Typography>
              
    //           <Grid container spacing={2} className="details-grid">
    //             <Grid item xs={6} sm={3}>
    //               <Box className="detail-item">
    //                 <AccessTime className="detail-icon" />
    //                 <Typography variant="body2" className="detail-label">
    //                   יום ושעה
    //                 </Typography>
    //                 <Typography variant="body1" className="detail-value">
    //                   {selectedCourse.dayOfCourse || "לא צוין"} {selectedCourse.hourOfCourse || ""}
    //                 </Typography>
    //               </Box>
    //             </Grid>
                
    //             <Grid item xs={6} sm={3}>
    //               <Box className="detail-item">
    //                 <EventNote className="detail-icon" />
    //                 <Typography variant="body2" className="detail-label">
    //                   מספר מפגשים
    //                 </Typography>
    //                 <Typography variant="body1" className="detail-value">
    //                   {selectedCourse.amountOfMeetingsInCourse || "0"}
    //                 </Typography>
    //               </Box>
    //             </Grid>
                
    //             <Grid item xs={6} sm={3}>
    //               <Box className="detail-item">
    //                 <LocationOn className="detail-icon" />
    //                 <Typography variant="body2" className="detail-label">
    //                   מיקום
    //                 </Typography>
    //                 <Typography variant="body1" className="detail-value">
    //                   {selectedCourse.locationOfCourse || "לא צוין"}
    //                 </Typography>
    //               </Box>
    //             </Grid>
                
    //             <Grid item xs={6} sm={3}>
    //               <Box className="detail-item">
    //                 <AttachMoney className="detail-icon" />
    //                 <Typography variant="body2" className="detail-label">
    //                   מחיר
    //                 </Typography>
    //                 <Typography variant="body1" className="detail-value">
    //                   ₪{selectedCourse.priceOfCourse || "---"}
    //                 </Typography>
    //               </Box>
    //             </Grid>
    //           </Grid>
    //         </Box>
            
    //         <Box className="success-actions">
    //           <Button
    //             variant="outlined"
    //             color="primary"
    //             onClick={handleBackToCourses}
    //             className="action-button"
    //           >
    //             חזרה לרשימת הקורסים
    //           </Button>
                           
    //           <Button
    //             variant="contained"
    //             color="primary"
    //             className="action-button"
    //           >
    //             צפייה בקבלה
    //           </Button>
    //         </Box>
            
    //         {/* נוסיף חלק חדש עם אפשרויות הייצוא */}
    //         <Box className="export-options">
    //           <Typography variant="subtitle1" className="export-title">
    //             ייצוא פרטי ההרשמה:
    //           </Typography>
              
    //           <Box className="export-buttons">
    //             <Button 
    //               variant="outlined" 
    //               startIcon={<img src="/word-icon.png" alt="Word" width="20" />}
    //               className="export-button word-button"
    //               onClick={() => handleExport('word')}
    //             >
    //               ייצוא ל-WORD
    //             </Button>
                
    //             <Button 
    //               variant="outlined" 
    //               startIcon={<img src="/excel-icon.png" alt="Excel" width="20" />}
    //               className="export-button excel-button"
    //               onClick={() => handleExport('excel')}
    //             >
    //               ייצוא ל-EXCEL
    //             </Button>
                
    //             <Button 
    //               variant="outlined" 
    //               startIcon={<img src="/pdf-icon.png" alt="PDF" width="20" />}
    //               className="export-button pdf-button"
    //               onClick={() => handleExport('pdf')}
    //             >
    //               ייצוא ל-PDF
    //             </Button>
    //           </Box>
    //         </Box>
    //       </Box>
    //     );
        // תיקון תצוגת פרטי הקורס במסך ההצלחה
case 3: // אישור הרשמה
return (
  <Box className="success-content">
    <CheckCircle className="success-icon" />
    
    <Typography variant="h5" className="success-title">
      ההרשמה הושלמה בהצלחה!
    </Typography>
    
    <Typography variant="body1" className="success-message">
      נרשמת בהצלחה לקורס "{selectedCourse.nameOfCourse}".
      {studentDetails?.emailOfStudent && (
        <> אישור הרשמה נשלח לכתובת האימייל שלך: {studentDetails.emailOfStudent}</>
      )}
    </Typography>
    
    <Box className="course-details-summary">
      <Typography variant="subtitle1" className="details-title">
        פרטי הקורס:
      </Typography>
      
      <Grid container spacing={2} className="details-grid">
        <Grid item xs={6} sm={3}>
          <Box className="detail-item">
            <AccessTime className="detail-icon" />
            <Typography variant="body2" className="detail-label">
              יום ושעה
            </Typography>
            <Typography variant="body1" className="detail-value">
              {selectedCourse.dayOfCourse || "לא צוין"} {selectedCourse.hourOfCourse || ""}
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={6} sm={3}>
          <Box className="detail-item">
            <EventNote className="detail-icon" />
            <Typography variant="body2" className="detail-label">
              מספר מפגשים
            </Typography>
            <Typography variant="body1" className="detail-value">
              {selectedCourse.amountOfMeetingsInCourse || "0"}
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={6} sm={3}>
          <Box className="detail-item">
            <LocationOn className="detail-icon" />
            <Typography variant="body2" className="detail-label">
              מיקום
            </Typography>
            <Typography variant="body1" className="detail-value">
              {selectedCourse.locationOfCourse || "לא צוין"}
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={6} sm={3}>
          <Box className="detail-item">
            <AttachMoney className="detail-icon" />
            <Typography variant="body2" className="detail-label">
              מחיר
            </Typography>
            <Typography variant="body1" className="detail-value">
              ₪{selectedCourse.priceOfCourse || "---"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
    
    <Box className="success-actions">
      <Button
        variant="outlined"
        color="primary"
        onClick={handleBackToCourses}
        className="action-button"
      >
        חזרה לרשימת הקורסים
      </Button>
                   
      <Button
        variant="contained"
        color="primary"
        className="action-button"
      >
        צפייה בקבלה
      </Button>
    </Box>
    
    {/* נוסיף חלק חדש עם אפשרויות הייצוא */}
    <Box className="export-options">
      <Typography variant="subtitle1" className="export-title">
        ייצוא פרטי ההרשמה:
      </Typography>
      
      <Box className="export-buttons">
        <Button 
          variant="outlined" 
          startIcon={<img src="/word-icon.png" alt="Word" width="20" />}
          className="export-button word-button"
          onClick={() => handleExport('word')}
        >
          ייצוא ל-WORD
        </Button>
        
        <Button 
          variant="outlined" 
          startIcon={<img src="/excel-icon.png" alt="Excel" width="20" />}
          className="export-button excel-button"
          onClick={() => handleExport('excel')}
        >
          ייצוא ל-EXCEL
        </Button>
        
        <Button 
          variant="outlined" 
          startIcon={<img src="/pdf-icon.png" alt="PDF" width="20" />}
          className="export-button pdf-button"
          onClick={() => handleExport('pdf')}
        >
          ייצוא ל-PDF
        </Button>
      </Box>
    </Box>
  </Box>
);
      default:
        return "שלב לא ידוע";
    }
  };
  
  return (
    <Container maxWidth="md" className="join-course-container">
      <Paper className="join-course-paper">
        <Box className="header">
          <IconButton 
            className="back-button" 
            onClick={() => navigate(-1)}
            aria-label="חזרה"
          >
            <ArrowBack />
          </IconButton>
          
          <Typography variant="h5" className="page-title">
            הרשמה לקורס {selectedCourse.nameOfCourse}
          </Typography>
        </Box>
        
        {activeStep < 3 && (
          <Box className="stepper-container">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        )}
        
        <Box className="content-container">
          {error && (
            <Alert severity="error" className="error-alert">
              {error}
            </Alert>
          )}
          
          {getStepContent(activeStep)}
          
          {activeStep < 3 && (
            <Box className="actions-container">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="back-action"
              >
                חזרה
              </Button>
              
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={!selectedStudent || loading}
                  className="submit-action"
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "אישור הרשמה"
                  )}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={activeStep === 0 && !selectedStudent}
                  className="next-action"
                >
                  המשך
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default JoinCourse2;
