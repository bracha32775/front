import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Routing } from '../Routing/Routing';
import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';

import { 
  Box, 
  Typography, 
  Paper, 
  Container,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import JoinCourse from './JoinCourse';
import { JoinCourse1 } from './JoinCourse1';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
}));

const CourseRegistration = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  // קבלת נתוני הקורס מהסטור
  const course = useSelector(state => state.courses.selectC);
  
  useEffect(() => {
    const fetchCourseData = async () => {
      if (courseId) {
        setLoading(true);
        try {
          await dispatch(getCourseByCourseIdThunk(courseId));
        } catch (error) {
          console.error('שגיאה בטעינת פרטי הקורס:', error);
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchCourseData();
  }, [dispatch, courseId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!course) {
    return (
      <Container>
        <Routing />
        <StyledPaper>
          <Typography variant="h5" align="center" color="error">
            הקורס המבוקש לא נמצא
          </Typography>
        </StyledPaper>
      </Container>
    );
  }

  return (
    <Container>
      <Routing />
      <StyledPaper>
        <Typography variant="h4" align="center" gutterBottom>
          הרשמה לקורס: {course.nameOfCourse}
        </Typography>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            פרטי הקורס:
          </Typography>
          <Typography>מחיר: ₪{course.priceOfCourse}</Typography>
          <Typography>תיאור: {course.descriptionOfCourse}</Typography>
          {course.dateOfCourse && (
            <Typography>תאריך התחלה: {new Date(course.dateOfCourse).toLocaleDateString('he-IL')}</Typography>
          )}
        </Box>
        
        <Box sx={{ mt: 4 }}>
          <JoinCourse1 courseId={courseId} course={course} />
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default CourseRegistration;