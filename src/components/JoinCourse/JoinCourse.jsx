import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsThunk } from "../../redux/Thunks/getStudentsThunk";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography, Paper } from "@mui/material";
import Fab from '@mui/material/Fab';
import { ThumbUpOffAltOutlined } from "@mui/icons-material";
import "./JoinCourse.css"; // ייבוא קובץ CSS חדש

export const JoinCourse = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const students = useSelector(state => state.students.students);
  const selectedCourse = useSelector(state => state.courses.selectC);
  
  useEffect(() => {
    dispatch(getStudentsThunk());
  }, [dispatch]);

  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const joinToCourse = async () => {
    if (!selectedStudent) return;
    
    setIsSubmitting(true);
    
    try {
      const student = students.find(s => s.nameOfStudent === selectedStudent);
      if (!student) throw new Error("לא נמצא תלמיד");
      
      const sId = student.idOfStudent;
      const id = selectedCourse;
      
      console.log(`הרשמת תלמיד ${sId} לקורס ${id}`);
      // כאן יש להוסיף את הקריאה לשרת
      // await fetch(`https://localhost:7092/api/Student/JoinCourse?sId=${sId}&id=${id}`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error("שגיאה בהרשמה לקורס:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // מידע על הקורס הנבחר
  const selectedCourseDetails = courses.find(c => c.idOfCourse === selectedCourse) || {};

  return (
    <Paper className="join-course-paper" elevation={3}>
      <Box className="header">
        <Typography variant="h5" className="page-title">
          הרשמה לקורס
        </Typography>
      </Box>
      
      {selectedCourseDetails.nameOfCourse && (
        <Box className="course-info-card">
          <Typography variant="h6" className="course-title">
            {selectedCourseDetails.nameOfCourse}
          </Typography>
          <Box className="course-details">
            <span className="course-chip">
              יום {selectedCourseDetails.dayOfCourse}
            </span>
            <span className="course-chip">
              {selectedCourseDetails.currentAmountOfStudents}/{selectedCourseDetails.amountOfStudentsInCourse} משתתפים
            </span>
          </Box>
        </Box>
      )}
      
      <Box className="step-container">
        <Box className="step-content">
          <Typography variant="h6" className="step-title">
            בחירת תלמידה
          </Typography>
          
          <Box className="form-field">
            <FormControl fullWidth className="course-input">
              <InputLabel id="student-select-label">בחרי תלמידה</InputLabel>
              <Select
                labelId="student-select-label"
                id="student-select"
                value={selectedStudent}
                onChange={handleStudentChange}
                label="בחרי תלמידה"
                className="text-field"
                disabled={isSubmitting || submitSuccess}
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
          </Box>
          
          {selectedStudent && (
            <Box className="student-card">
              <Box p={2}>
                <Typography variant="subtitle1" className="student-name">
                  {selectedStudent}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  פרטי התלמידה יופיעו כאן
                </Typography>
              </Box>
            </Box>
          )}
          
          <Box mt={4} display="flex" justifyContent="center">
            <Fab 
              variant="extended"
              color="primary"
              onClick={joinToCourse}
              disabled={!selectedStudent || isSubmitting || submitSuccess}
              className={submitSuccess ? "submit-button success" : "submit-button"}
            >
              <ThumbUpOffAltOutlined sx={{ mr: 1 }} />
              {submitSuccess ? "נרשם בהצלחה" : "הרשמה לקורס"}
            </Fab>
          </Box>
          
          {submitSuccess && (
            <Box mt={2} textAlign="center">
              <Typography variant="body1" color="primary" fontWeight="bold">
                התלמידה נרשמה לקורס בהצלחה!
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Paper>
  );
};
