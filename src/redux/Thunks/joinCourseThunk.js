import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { API_BASE_URL } from '../../config/apiConfig';

/**
 * Thunk לרישום סטודנט לקורס
 * מקבל את פרטי הסטודנט והקורס ושולח בקשת POST לשרת
 */
export const joinCourseThunk = createAsyncThunk(
  'studentCourses/joinCourse',
  async (sId,id) => {
    try {
      // שליחת בקשת POST לשרת עם נתוני ההרשמה
      const response = await axios.post(
        `https://localhost:7092/api/Student/JoinCourse/${sId}/${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      // החזרת הנתונים מהשרת
      return response.data;
    } catch (error) {
      // לוגינג של השגיאה
      console.error('Error joining course:', error);
      
      // החזרת הודעת שגיאה מהשרת (אם קיימת) או הודעה כללית
      return (
        error.response?.data?.message || 
        'אירעה שגיאה בתהליך ההרשמה לקורס. אנא נסה שוב מאוחר יותר.'
      );
    }
  }
);









