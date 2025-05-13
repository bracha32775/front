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
  InputAdornment,
  Alert,
  Snackbar,
  styled
} from "@mui/material";

// Icons
import SaveIcon from '@mui/icons-material/Save';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  background: '#ffffff',
  overflow: 'visible',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '6px',
    background: 'linear-gradient(90deg, #3f51b5, #2196f3, #00bcd4)',
  }
}));

const StyledCard = styled(Card)({
  height: '100%',
  borderRadius: 12,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  flexDirection: 'column'
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  overflow: 'hidden'
});

const StyledCardHeader = styled(CardHeader)({
  background: '#f5f7fa',
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  padding: '12px 16px'
});

const StyledButton = styled(Button)({
  borderRadius: 30,
  padding: '10px 24px',
  fontWeight: 600,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  background: 'linear-gradient(135deg, #1976d2, #2196f3)',
  '&:hover': {
    background: 'linear-gradient(135deg, #1565c0, #1976d2)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  }
});

const IconContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 80,
  height: 80,
  borderRadius: '50%',
  backgroundColor: '#f0f4f8',
  marginBottom: 16,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
});

const FormTitle = styled(Typography)({
  fontWeight: 700,
  background: 'linear-gradient(90deg, #3f51b5, #2196f3)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: 8,
});

export const AddStudent = ({ onClose }) => {
  const dispatch = useDispatch();
  const flagClose = useSelector(state => state.students.flagClose);
  
  // מצב הטופס
  const [student, setStudent] = useState({
    nameOfStudent: "",
    phoneOfStudent: "",
    emailOfStudent: "",
    addressOfStudent: ""
  });
  
  // מצב שגיאות
  const [errors, setErrors] = useState({
    nameOfStudent: "",
    phoneOfStudent: "",
    emailOfStudent: "",
    addressOfStudent: ""
  });
  
  // מצב להודעות למשתמש
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  
  // בדיקת תקינות השדות
  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "nameOfStudent":
        if (!value.trim()) {
          error = "שם התלמידה הוא שדה חובה";
        } else if (value.trim().length < 2) {
          error = "שם התלמידה חייב להכיל לפחות 2 תווים";
        } else if (!/^[\u0590-\u05FF\s'"-]+$/.test(value.trim())) {
          error = "שם התלמידה חייב להכיל אותיות בעברית בלבד";
        }
        break;
        
      case "phoneOfStudent":
        if (!value.trim()) {
          error = "מספר טלפון הוא שדה חובה";
        } else if (!/^0[2-9]\d{7,8}$/.test(value.trim())) {
          error = "מספר טלפון לא תקין (לדוגמה: 0501234567)";
        }
        break;
        
      case "emailOfStudent":
        if (!value.trim()) {
          error = "כתובת אימייל היא שדה חובה";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim())) {
          error = "כתובת אימייל לא תקינה";
        }
        break;
        
      case "addressOfStudent":
        if (!value.trim()) {
          error = "כתובת היא שדה חובה";
        } else if (value.trim().length < 5) {
          error = "כתובת חייבת להכיל לפחות 5 תווים";
        }
        break;
        
      default:
        break;
    }
    
    return error;
  };
  
  // בדיקת תקינות כל הטופס
  const validateForm = () => {
    const newErrors = {
      nameOfStudent: validateField("nameOfStudent", student.nameOfStudent),
      phoneOfStudent: validateField("phoneOfStudent", student.phoneOfStudent),
      emailOfStudent: validateField("emailOfStudent", student.emailOfStudent),
      addressOfStudent: validateField("addressOfStudent", student.addressOfStudent)
    };
    
    setErrors(newErrors);
    
    // הטופס תקין אם אין שגיאות
    return !Object.values(newErrors).some(error => error !== "");
  };
  
  // טיפול בשינוי ערך בשדה
  const handleChange = (field, value) => {
    setStudent({ ...student, [field]: value });
    
    // ניקוי שגיאה כאשר המשתמש מתחיל להקליד
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };
  
  // הוספת תלמידה חדשה
  const handleAddStudent = async () => {
    // בדיקת תקינות הטופס
    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: "יש לתקן את השגיאות בטופס לפני השמירה",
        severity: "error"
      });
      return;
    }
    
    try {
      await dispatch(addStudentThunk(student));
      dispatch(setFlagStudentSlice(true));
      
      setSnackbar({
        open: true,
        message: "התלמידה נוספה בהצלחה",
        severity: "success"
      });
      
      // איפוס הטופס
      setStudent({
        nameOfStudent: "",
        phoneOfStudent: "",
        emailOfStudent: "",
        addressOfStudent: ""
      });
      
      // סגירת הדיאלוג לאחר הוספה מוצלחת
      setTimeout(() => {
        if (onClose) onClose();
      }, 1500);
      
    } catch (error) {
      console.error("שגיאה בהוספת תלמידה:", error);
      setSnackbar({
        open: true,
        message: "אירעה שגיאה בהוספת התלמידה",
        severity: "error"
      });
    }
  };
  
  // סגירת הודעת Snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  
  if (flagClose) {
    return null;
  }
  
  return (
    <StyledPaper>
      <FormTitle variant="h5" component="h1" align="center">
        הוספת תלמידה חדשה
      </FormTitle>
      
      <Divider sx={{ mb: 2, background: 'linear-gradient(90deg, rgba(63, 81, 181, 0.2), rgba(33, 150, 243, 0.5), rgba(0, 188, 212, 0.2))' }} />
      
      <Grid container spacing={2}>
        {/* אייקון תלמידה */}
        <Grid item xs={12} md={4}>
          <StyledCard>
            <StyledCardHeader title="פרטי התלמידה" />
            <StyledCardContent>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <IconContainer>
                  <PersonAddIcon style={{ fontSize: 40, color: '#1976d2' }} />
                </IconContainer>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
                  הוספת תלמידה חדשה למערכת
                </Typography>
                
                {/* הנחיות מקוצרות */}
                <Box sx={{ 
                  p: 1.5, 
                  bgcolor: 'rgba(33, 150, 243, 0.05)', 
                  borderRadius: 2,
                  border: '1px solid rgba(33, 150, 243, 0.1)',
                  fontSize: '0.85rem'
                }}>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    הנחיות למילוי הטופס:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    • שם - בעברית בלבד, לפחות 2 תווים
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    • טלפון - מספר ישראלי תקין (לדוגמה: 0501234567)
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    • אימייל - כתובת דוא"ל תקינה
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    • כתובת - לפחות 5 תווים
                  </Typography>
                </Box>
              </Box>
            </StyledCardContent>
          </StyledCard>
        </Grid>
        
        {/* פרטי התלמידה */}
        <Grid item xs={12} md={8}>
          <StyledCard>
            <StyledCardHeader title="הזנת פרטים" />
            <StyledCardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="שם התלמידה *"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={student.nameOfStudent}
                    onChange={e => handleChange("nameOfStudent", e.target.value)}
                    error={Boolean(errors.nameOfStudent)}
                    helperText={errors.nameOfStudent}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonAddIcon color={errors.nameOfStudent ? "error" : "action"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="טלפון *"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={student.phoneOfStudent}
                    onChange={e => handleChange("phoneOfStudent", e.target.value)}
                    error={Boolean(errors.phoneOfStudent)}
                    helperText={errors.phoneOfStudent}
                    inputProps={{ maxLength: 10 }}
                    InputProps={{
                         startAdornment: (
                           <InputAdornment position="start">
                             <PhoneIcon color={errors.phoneOfStudent ? "error" : "action"} />
                           </InputAdornment>
                         ),
                       }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="דואר אלקטרוני *"
                      variant="outlined"
                      type="email"
                      fullWidth
                      size="small"
                      value={student.emailOfStudent}
                      onChange={e => handleChange("emailOfStudent", e.target.value)}
                      error={Boolean(errors.emailOfStudent)}
                      helperText={errors.emailOfStudent}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color={errors.emailOfStudent ? "error" : "action"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      label="כתובת *"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={student.addressOfStudent}
                      onChange={e => handleChange("addressOfStudent", e.target.value)}
                      error={Boolean(errors.addressOfStudent)}
                      helperText={errors.addressOfStudent}
                      placeholder="רחוב, מספר, עיר, מיקוד"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HomeIcon color={errors.addressOfStudent ? "error" : "action"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sx={{ mt: 2, textAlign: 'center' }}>
                    <StyledButton
                      variant="contained"
                      size="medium"
                      startIcon={<SaveIcon />}
                      onClick={handleAddStudent}
                    >
                      שמור תלמידה
                    </StyledButton>
                  </Grid>
                </Grid>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        </Grid>
        
        {/* הודעות למשתמש */}
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
      </StyledPaper>
    );
  };
  