
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSpeakerThunk } from "../../../redux/Thunks/addSpeakerThunk";
import { setFlagSpeakerSlice } from "../../../redux/Slices/speakersSlice";

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
  Alert,
  Snackbar
} from "@mui/material";

// Icons
import SaveIcon from '@mui/icons-material/Save';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// CSS
import './AddSpeaker.css';

export const AddSpeaker = ({ onClose }) => {
  const dispatch = useDispatch();
  const flagClose = useSelector(state => state.students.flagClose);
  
  const [speaker, setSpeaker] = useState({
    nameOfSpeaker: "",
    phoneOfSpeaker: "",
    emailOfSpeaker: "",
    addressOfSpeaker: "",
    specializationOfSpeaker: ""
  });
  
  // מצב לשגיאות בטופס
  const [errors, setErrors] = useState({
    nameOfSpeaker: "",
    phoneOfSpeaker: "",
    emailOfSpeaker: "",
    specializationOfSpeaker: ""
  });
  
  // מצב להודעות למשתמש
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  
  // בדיקת תקינות השדות
  const validateForm = () => {
    let tempErrors = {
      nameOfSpeaker: "",
      phoneOfSpeaker: "",
      emailOfSpeaker: "",
      specializationOfSpeaker: ""
    };
    let isValid = true;
    
    // בדיקת שם המרצה
    if (!speaker.nameOfSpeaker) {
      tempErrors.nameOfSpeaker = "שם המרצה הוא שדה חובה";
      isValid = false;
    } else if (speaker.nameOfSpeaker.length < 2) {
      tempErrors.nameOfSpeaker = "שם המרצה חייב להכיל לפחות 2 תווים";
      isValid = false;
    } else if (!/^[\u0590-\u05FF\s'"-]+$/.test(speaker.nameOfSpeaker)) {
      tempErrors.nameOfSpeaker = "שם המרצה חייב להכיל אותיות בעברית בלבד";
      isValid = false;
    }
    
    // בדיקת מספר טלפון
    if (!speaker.phoneOfSpeaker) {
      tempErrors.phoneOfSpeaker = "מספר טלפון הוא שדה חובה";
      isValid = false;
    } else if (!/^0[2-9]\d{7,8}$/.test(speaker.phoneOfSpeaker)) {
      tempErrors.phoneOfSpeaker = "מספר טלפון לא תקין (לדוגמה: 0501234567)";
      isValid = false;
    }
    
    // בדיקת כתובת אימייל
    if (!speaker.emailOfSpeaker) {
      tempErrors.emailOfSpeaker = "כתובת אימייל היא שדה חובה";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(speaker.emailOfSpeaker)) {
      tempErrors.emailOfSpeaker = "כתובת אימייל לא תקינה";
      isValid = false;
    }
    
    // בדיקת התמחות
    if (!speaker.specializationOfSpeaker) {
      tempErrors.specializationOfSpeaker = "התמחות היא שדה חובה";
      isValid = false;
    } else if (speaker.specializationOfSpeaker.length < 3) {
      tempErrors.specializationOfSpeaker = "התמחות חייבת להכיל לפחות 3 תווים";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  // טיפול בשינוי ערך בשדה
  const handleChange = (field, value) => {
    setSpeaker({ ...speaker, [field]: value });
    
    // ניקוי שגיאה כאשר המשתמש מתחיל להקליד
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };
  
  // הוספת מרצה חדש
  const handleAddSpeaker = async () => {
    // בדיקת תקינות הטופס
    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: "יש לתקן את השגיאות בטופס",
        severity: "error"
      });
      return;
    }
    
    try {
      await dispatch(addSpeakerThunk(speaker));
      dispatch(setFlagSpeakerSlice(true));
      
      setSnackbar({
        open: true,
        message: "המרצה נוסף בהצלחה",
        severity: "success"
      });
      
      // איפוס הטופס
      setSpeaker({
        nameOfSpeaker: "",
        phoneOfSpeaker: "",
        emailOfSpeaker: "",
        addressOfSpeaker: "",
        specializationOfSpeaker: ""
      });
      
      // סגירת הדיאלוג לאחר הוספה מוצלחת
      setTimeout(() => {
        if (onClose) onClose();
      }, 1500);
      
    } catch (error) {
      console.error("שגיאה בהוספת מרצה:", error);
      setSnackbar({
        open: true,
        message: "אירעה שגיאה בהוספת המרצה",
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
    <Paper className="speaker-form-container">
      <Typography variant="h4" component="h1" gutterBottom align="center" className="form-title">
        הוספת מרצה חדש
      </Typography>
      
      <Divider className="form-divider" />
      
      <Grid container spacing={3}>
        {/* אייקון מרצה */}
        <Grid item xs={12} md={4}>
          <Card className="icon-card">
            <CardContent className="icon-card-content">
              <Box className="speaker-icon-container">
                <PersonAddIcon style={{ fontSize: 120, opacity: 0.7 }} />
              </Box>
              <Typography variant="h6" align="center" gutterBottom>
                פרטי המרצה
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                הוספת מרצה חדש למערכת הקורסים
              </Typography>
              
              {/* הנחיות למילוי הטופס */}
              <Box className="form-instructions" mt={3}>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  הנחיות למילוי הטופס:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • יש למלא את כל שדות החובה המסומנים בכוכבית (*)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • מספר טלפון יכיל 9-10 ספרות ויתחיל בספרה 0
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • כתובת אימייל חייבת להיות בפורמט תקין
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* פרטי המרצה */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="פרטי המרצה" />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="שם המרצה *"
                    variant="outlined"
                    fullWidth
                    value={speaker.nameOfSpeaker}
                    onChange={e => handleChange("nameOfSpeaker", e.target.value)}
                    error={Boolean(errors.nameOfSpeaker)}
                    helperText={errors.nameOfSpeaker}
                    required
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="טלפון *"
                    variant="outlined"
                    fullWidth
                    value={speaker.phoneOfSpeaker}
                    onChange={e => handleChange("phoneOfSpeaker", e.target.value)}
                    error={Boolean(errors.phoneOfSpeaker)}
                    helperText={errors.phoneOfSpeaker}
                    required
                    inputProps={{ maxLength: 10 }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="דואר אלקטרוני *"
                    variant="outlined"
                    type="email"
                    fullWidth
                    value={speaker.emailOfSpeaker}
                    onChange={e => handleChange("emailOfSpeaker", e.target.value)}
                    error={Boolean(errors.emailOfSpeaker)}
                    helperText={errors.emailOfSpeaker}
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    label="כתובת"
                    variant="outlined"
                    fullWidth
                    value={speaker.addressOfSpeaker}
                    onChange={e => handleChange("addressOfSpeaker", e.target.value)}
                    placeholder="רחוב, מספר, עיר, מיקוד"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    label="התמחות *"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    value={speaker.specializationOfSpeaker}
                    onChange={e => handleChange("specializationOfSpeaker", e.target.value)}
                    error={Boolean(errors.specializationOfSpeaker)}
                    helperText={errors.specializationOfSpeaker}
                    required
                    placeholder="תארו את תחומי ההתמחות של המרצה"
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
            onClick={handleAddSpeaker}
            className="save-button"
          >
            שמור מרצה
          </Button>
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
    </Paper>
  );
};
