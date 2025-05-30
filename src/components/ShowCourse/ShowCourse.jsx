
import React, { use, useEffect, useState } from 'react';
import {
  Box, Typography, Button, Grid,
  Card,
  CardContent,
  Divider,
  Avatar,
  IconButton,
  Container,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tooltip,
  CircularProgress
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupIcon from '@mui/icons-material/Group';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BlockIcon from '@mui/icons-material/Block';
import { updateCourseThunk } from '../../redux/Thunks/updateCourseThunk';
import { useDispatch } from 'react-redux';
import WarningIcon from '@mui/icons-material/Warning';
import { useSelector } from 'react-redux';
import { deleteCourseThunk } from '../../redux/Thunks/deleteCourseThunk';
import { CloudUploadOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
import { getAllStudentsOfCoursThunk } from '../../redux/Thunks/getAllStudentsOfCoursThunk';
import { Routing } from '../Routing/Routing';
export const ShowCourse = (props) => {
  const { selectedCourse, onBack, onCourseUpdate } = props;
  const nav = useNavigate();
  const [localCourse, setLocalCourse] = useState(props.selectedCourse || {});
  // const [localCourse, setLocalCourse] = useState(props.selectedCourse || {});
  const dispatch = useDispatch();
  // State for dialogs
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [studentsDialogOpen, setStudentsDialogOpen] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [previewUrl, setPreviewUrl] = useState({ ...localCourse.image });
  const [editedCourse, setEditedCourse] = useState({ ...localCourse });
  useEffect(() => {
    console.log("localCourse:", localCourse);
    console.log("amountOfMeetingsInCourse:", localCourse.amountOfMeetingsInCourse);
  }, [localCourse]);
  useEffect(() => {
    setEditedCourse({ ...localCourse });
  }, [localCourse]);
  useEffect(() => {
    if (localCourse) {
      setCourseStatus(localCourse.status);
    }
  }, [localCourse]);
  useEffect(() => {
    if (props.selectedCourse) {
      setLocalCourse(props.selectedCourse);
      setEditedCourse(props.selectedCourse);
    }
  }, [props.selectedCourse]);
  useEffect(() => {
    console.log("ShowCourse received selectedCourse:", selectedCourse);
    if (selectedCourse && Object.keys(selectedCourse).length > 0) {
      setLocalCourse(selectedCourse);
      setEditedCourse(selectedCourse);
      setCourseStatus(selectedCourse.status);
    }
  }, [selectedCourse]);
  // useEffect(() => {
  //   if (localCourse) {
  //     setLocalCourse(localCourse);
  //     setEditedCourse(localCourse);
  //   }
  // }, [localCourse]);
  const courses = useSelector(state => state.courses.courses);
  const myStudents = useSelector(state => state.courses.students);
  const [isUpdating, setIsUpdating] = useState(false);
  const [courseStatus, setCourseStatus] = useState(localCourse.status);

  const moveToJoinCourse = () => {
    console.log("localCourse.idOfCourse" + localCourse.idOfCourse + "wowowow");
    // העברת מזהה הקורס כפרמטר לדף הרישום
    nav(`/joinCourse/${localCourse.idOfCourse}`);


  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      // 
      // יצירת URL לתצוגה מקדימה של התמונה
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  //  const [localCourse, setLocalCourse] = useState(localCourse);
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://localhost:7092/api/Img/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    const data = await response.json();
    return data.filePath;
  };
  const handleGoBack = () => {
    if (props.onBack) {
      props.onBack();
    } else {
      nav(-1);
    }
  };

  // Handle edit dialog
  const handleEditOpen = () => {
    setEditedCourse({ ...localCourse });
    setEditDialogOpen(true);
  };

  const handleEditClose = () => {
    setEditDialogOpen(false);
  };

  // const handleEditSave = async () => {
  //   dispatch(updateCourseThunk(editedCourse));
  //   console.log("Saving edited course:", editedCourse);
  //   // props.onUpdateCourse(editedCourse);
  //   setEditDialogOpen(false);
  // };
  // const handleEditSave = async () => {
  //   setIsUpdating(true);

  //   try {
  //     // שליחת העדכון לשרת
  //     const result = await dispatch(updateCourseThunk(editedCourse)).unwrap();

  //     // עדכון מקומי של הקורס
  //     setLocalCourse(editedCourse);

  //     console.log("הקורס עודכן בהצלחה:", result);

  //     // סגירת חלון העריכה
  //     setEditDialogOpen(false);

  //     // רענון רשימת הקורסים (אופציונלי)
  //     dispatch(getCoursesThunk());
  //   } catch (error) {
  //     console.error("שגיאה בעדכון הקורס:", error);

  //     // הצגת הודעת שגיאה למשתמש
  //     alert("אירעה שגיאה בעדכון הקורס. אנא נסה שוב.");
  //   } finally {
  //     setIsUpdating(false);
  //   }
  // };

  // const handleEditSave = async () => {
  //   setIsUpdating(true);

  //   try {
  //     // שליחת העדכון לשרת
  //     const result = await dispatch(updateCourseThunk(editedCourse)).unwrap();

  //     // עדכון מקומי של הקורס
  //     setLocalCourse(editedCourse);

  //     console.log("הקורס עודכן בהצלחה:", result);

  //     // סגירת חלון העריכה
  //     setEditDialogOpen(false);

  //     // רענון רשימת הקורסים (אופציונלי)
  //     dispatch(getCoursesThunk());
  //   } catch (error) {
  //     console.error("שגיאה בעדכון הקורס:", error);

  //     // הצגת הודעת שגיאה למשתמש
  //     alert("אירעה שגיאה בעדכון הקורס. אנא נסה שוב.");
  //   } finally {
  //     setIsUpdating(false);
  //   }
  // };
  // // const handleInputChange = (e) => {
  // //   const { name, value } = e.target;
  // //   setEditedCourse(prev => ({
  // //     ...prev,
  // //     [name]: value
  // //   }));
  // // };
  const handleEditSave = async () => {
    setIsUpdating(true);

    try {
      // שליחת העדכון לשרת
      await dispatch(updateCourseThunk(editedCourse)).unwrap();

      // עדכון מקומי של הקורס
      setLocalCourse(editedCourse);

      // סגירת חלון העריכה
      setEditDialogOpen(false);

      // עדכון הקומפוננטה האב
      if (onCourseUpdate) {
        onCourseUpdate();
      }
    } catch (error) {
      console.error("שגיאה בעדכון הקורס:", error);
      alert("אירעה שגיאה בעדכון הקורס. אנא נסה שוב.");
    } finally {
      setIsUpdating(false);
    }
  };

  // const handleEditSave = async () => {
  //   setIsUpdating(true);

  //   try {
  //     // שליחת העדכון לשרת
  //     const result = await dispatch(updateCourseThunk(editedCourse)).unwrap();

  //     // עדכון מקומי של הקורס
  //     setLocalCourse(editedCourse);

  //     console.log("הקורס עודכן בהצלחה:", result);

  //     // סגירת חלון העריכה
  //     setEditDialogOpen(false);

  //     // עדכון הקומפוננטה האב
  //     if (onCourseUpdate) {
  //       onCourseUpdate();
  //     }

  //     // רענון רשימת הקורסים (אופציונלי)
  //     dispatch(getCoursesThunk());
  //   } catch (error) {
  //     console.error("שגיאה בעדכון הקורס:", error);

  //     // הצגת הודעת שגיאה למשתמש
  //     alert("אירעה שגיאה בעדכון הקורס. אנא נסה שוב.");
  //   } finally {
  //     setIsUpdating(false);
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCourse(prev => ({
      ...prev,
      [name]: value
    }));
  };
  // Handle delete dialog
  const handleDeleteOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleDeleteConfirm = () => {
    // Here you would typically call an API to delete the course
    // console.log("Deleting course:", localCourse.idOfCourse);
    // props.onDeleteCourse(localCourse.idOfCourse);
    dispatch(deleteCourseThunk(localCourse.idOfCourse))
    setDeleteDialogOpen(false);
    handleGoBack();
  };

  // Handle students dialog
  const handleStudentsOpen = () => {
    console.log("handleStudentsOpen" + localCourse.idOfCourse);
    setStudentsDialogOpen(true);
    showStudents();
  };

  const handleStudentsClose = () => {
    setStudentsDialogOpen(false);
  };

  const showStudents = () => {
    dispatch(getAllStudentsOfCoursThunk(localCourse.idOfCourse))
  };
  // const handleToggleStatus = async () => {
  //   // מניעת לחיצות כפולות בזמן העדכון
  //   if (isUpdating) return;

  //   setIsUpdating(true);

  //   // עדכון מקומי מיידי של הסטטוס בממשק
  //   const newStatus = !courseStatus;
  //   setCourseStatus(newStatus);

  //   try {
  //     // יצירת אובייקט עדכון עם הסטטוס החדש
  //     const updatedCourse = {
  //       ...localCourse,
  //       status: newStatus
  //     };

  //     // שליחת העדכון לשרת
  //     const result = await dispatch(updateCourseThunk(updatedCourse)).unwrap();

  //     console.log("סטטוס הקורס עודכן בהצלחה:", result);

  //     // רענון רשימת הקורסים (אופציונלי)
  //     dispatch(getCoursesThunk());
  //   } catch (error) {
  //     console.error("שגיאה בעדכון סטטוס הקורס:", error);

  //     // החזרת הסטטוס המקומי למצב הקודם במקרה של שגיאה
  //     setCourseStatus(!newStatus);

  //     // הצגת הודעת שגיאה למשתמש
  //     alert("אירעה שגיאה בעדכון סטטוס הקורס. אנא נסה שוב.");
  //   } finally {
  //     setIsUpdating(false);
  //   }
  // };
  ////////////////////////////////

  // const handleToggleStatus = async () => {
  //   // מניעת לחיצות כפולות בזמן העדכון
  //   if (isUpdating) return;

  //   setIsUpdating(true);

  //   // עדכון מקומי מיידי של הסטטוס בממשק
  //   const newStatus = !courseStatus;
  //   setCourseStatus(newStatus);

  //   try {
  //     // יצירת אובייקט עדכון עם הסטטוס החדש
  //     const updatedCourse = {
  //       ...selectedCourse,
  //       status: newStatus
  //     };

  //     // שליחת העדכון לשרת
  //     const result = await dispatch(updateCourseThunk(updatedCourse)).unwrap();

  //     // עדכון הקורס המקומי
  //     setLocalCourse(prev => ({...prev, status: newStatus}));

  //     console.log("סטטוס הקורס עודכן בהצלחה:", result);

  //     // עדכון הקומפוננטה האב
  //     if (onCourseUpdate) {
  //       onCourseUpdate();
  //     }

  //     // רענון רשימת הקורסים (אופציונלי)
  //     dispatch(getCoursesThunk());
  //   } catch (error) {
  //     console.error("שגיאה בעדכון סטטוס הקורס:", error);

  //     // החזרת הסטטוס המקומי למצב הקודם במקרה של שגיאה
  //     setCourseStatus(!newStatus);

  //     // הצגת הודעת שגיאה למשתמש
  //     alert("אירעה שגיאה בעדכון סטטוס הקורס. אנא נסה שוב.");
  //   } finally {
  //     setIsUpdating(false);
  //   }
  // };
  /////////////////////////////////////
  // const handleToggleStatus = async () => {
  //   // מניעת לחיצות כפולות בזמן העדכון
  //   if (isUpdating) return;

  //   setIsUpdating(true);

  //   // עדכון מקומי מיידי של הסטטוס בממשק
  //   const newStatus = !courseStatus;
  //   setCourseStatus(newStatus);

  //   try {
  //     // יצירת אובייקט עדכון עם הסטטוס החדש
  //     const updatedCourse = {
  //       ...localCourse,
  //       status: newStatus
  //     };

  //     // שליחת העדכון לשרת
  //     const result = await dispatch(updateCourseThunk(updatedCourse)).unwrap();

  //     // עדכון הקורס המקומי
  //     setLocalCourse(prev => ({ ...prev, status: newStatus }));

  //     console.log("סטטוס הקורס עודכן בהצלחה:", result);

  //     // עדכון הקומפוננטה האב
  //     if (onCourseUpdate) {
  //       onCourseUpdate();
  //     }

  //     // רענון רשימת הקורסים (אופציונלי)
  //     dispatch(getCoursesThunk());
  //   } catch (error) {
  //     console.error("שגיאה בעדכון סטטוס הקורס:", error);

  //     // החזרת הסטטוס המקומי למצב הקודם במקרה של שגיאה
  //     setCourseStatus(!newStatus);

  //     // הצגת הודעת שגיאה למשתמש
  //     alert("אירעה שגיאה בעדכון סטטוס הקורס. אנא נסה שוב.");
  //   } finally {
  //     setIsUpdating(false);
  //   }
  // };
  const handleToggleStatus = async () => {
    if (isUpdating) return;

    setIsUpdating(true);
    const newStatus = !courseStatus;
    setCourseStatus(newStatus);

    try {
      const updatedCourse = {
        ...localCourse,
        status: newStatus
      };

      await dispatch(updateCourseThunk(updatedCourse)).unwrap();

      // עדכון הקורס המקומי
      setLocalCourse(prev => ({ ...prev, status: newStatus }));

      // עדכון הקומפוננטה האב
      if (onCourseUpdate) {
        onCourseUpdate();
      }
    } catch (error) {
      console.error("שגיאה בעדכון סטטוס הקורס:", error);
      setCourseStatus(!newStatus);
      alert("אירעה שגיאה בעדכון סטטוס הקורס. אנא נסה שוב.");
    } finally {
      setIsUpdating(false);
    }
  };

  // Get course image URL
  const courseImageUrl = localCourse.image
    ? `https://localhost:7092${localCourse.image}`
    : '';
  //////////////////////////////////////
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (
    <Container maxWidth="lg" sx={{
      direction: 'rtl',
      py: 4,
      animation: 'fadeIn 0.5s ease-in-out',
      '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      }
    }}>
      <Routing/>
      {/* Admin Actions Bar */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
        p: 2,
        borderRadius: '10px',
        bgcolor: 'background.paper',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleGoBack} sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            ניהול קורס: {localCourse.nameOfCourse || "קורס"}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="עריכת קורס">
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleEditOpen}
              sx={{
                borderRadius: '8px',
                fontWeight: 600
              }}
            >
              עריכה
            </Button>
          </Tooltip>

          <Tooltip title="ניהול תלמידים">
            <Button
              variant="outlined"
              color="warning"
              startIcon={<GroupIcon />}
              onClick={handleStudentsOpen}
              sx={{
                borderRadius: '8px',
                fontWeight: 600
              }}
            >
              תלמידים
            </Button>
          </Tooltip>
          <Tooltip title={courseStatus ? "מחק קורס" : "הפעל קורס"}>
            <Button
              variant="outlined"
              color={courseStatus ? "error" : "success"}
              startIcon={courseStatus ? <DeleteIcon /> : <VisibilityIcon />}
              onClick={handleToggleStatus}
              disabled={isUpdating}
              sx={{
                borderRadius: '8px',
                fontWeight: 600,
                position: 'relative',
              }}
            >
              {isUpdating ? "מעדכן..." : (courseStatus ? "מחק" : "הפעל")}
            </Button>
          </Tooltip>
          {/* <Tooltip title="מחיקת קורס">
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteOpen}
              sx={{
                borderRadius: '8px',
                fontWeight: 600
              }}
            >
              מחיקה
            </Button>
          </Tooltip> */}
        </Box>
      </Box>
      {/* 
{/* Hero Section */}
      <Box sx={{
        position: 'relative',
        height: '40vh',
        minHeight: '300px',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        mb: 4
      }}>
        Background Image
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${courseImageUrl})`,
        }} />
        {!localCourse.status && (
          <Box sx={{
            position: 'absolute',
            top: '20px',
            left: '0',
            right: '0',
            zIndex: 3,
            textAlign: 'center',
          }}>
            <Chip
              icon={<WarningIcon />}
              label="קורס לא פעיל"
              color="error"
              sx={{
                fontWeight: 700,
                fontSize: '1rem',
                py: 1,
                px: 2,
                boxShadow: '0 4px 12px rgba(211, 47, 47, 0.4)',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { boxShadow: '0 0 0 0 rgba(211, 47, 47, 0.7)' },
                  '70%': { boxShadow: '0 0 0 10px rgba(211, 47, 47, 0)' },
                  '100%': { boxShadow: '0 0 0 0 rgba(211, 47, 47, 0)' }
                }
              }}
            />
          </Box>
        )}

        {/* Hero Content */}
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          p: { xs: 3, md: 5 },
          color: 'common.white',
          zIndex: 2
        }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            {localCourse.nameOfCourse || props.nameOfCourse || "קורס"}
          </Typography>
          <Chip
            label={courseStatus ? "פעיל" : "לא פעיל"}
            color={courseStatus ? "success" : "error"}
            sx={{
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 1
            }}
          />
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Course Details */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 3,
              position: 'relative',
              pb: 1,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '50px',
                height: '3px',
                bgcolor: 'primary.main',
                borderRadius: '2px',
              }
            }}
          >
            פרטי הקורס
          </Typography>

          <Card sx={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            height: '100%',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
            }
          }}>
            <CardContent sx={{ p: 3 }}>
              {/* Date */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                p: 1.5,
                borderRadius: '10px',
                bgcolor: 'rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.06)',
                }
              }}>
                <Box sx={{
                  mr: 2,
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <CalendarTodayIcon />
                </Box>
                <Typography sx={{
                  fontWeight: 600,
                  mr: 2,
                  color: 'text.secondary',
                  minWidth: '140px',
                }}>
                  תאריך התחלה:
                </Typography>
                <Typography sx={{
                  fontWeight: 500,
                  color: 'text.primary',
                }}>
                  {localCourse.startDateOfCourse || props.startDateOfCourse || "בקרוב"}
                </Typography>
              </Box>

              {/* Day of Week */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                p: 1.5,
                borderRadius: '10px',
                bgcolor: 'rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.06)',
                }
              }}>
                <Box sx={{
                  mr: 2,
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <EventIcon />
                </Box>
                <Typography sx={{
                  fontWeight: 600,
                  mr: 2,
                  color: 'text.secondary',
                  minWidth: '140px',
                }}>
                  יום בשבוע:
                </Typography>
                <Typography sx={{
                  fontWeight: 500,
                  color: 'text.primary',
                }}>
                  {localCourse.dayOfCourse || props.dayOfCourse || "ייקבע בהמשך"}
                </Typography>
              </Box>

              {/* Number of Meetings */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                p: 1.5,
                borderRadius: '10px',
                bgcolor: 'rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.06)',
                }
              }}>
                <Box sx={{
                  mr: 2,
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <DateRangeIcon />
                </Box>


                <Typography sx={{
                  fontWeight: 600,
                  mr: 2,
                  color: 'text.secondary',
                  minWidth: '140px',
                }}>
                  כמות מפגשים:
                </Typography>
                <Typography sx={{
                  fontWeight: 500,
                  color: 'text.primary',
                }}>
                  {localCourse.amountOfMeetingsInCourse || props.amountOfMeetingsInCourse || "0"}
                </Typography>
              </Box>

              {/* Total Students */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                p: 1.5,
                borderRadius: '10px',
                bgcolor: 'rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.06)',
                }
              }}>
                <Box sx={{
                  mr: 2,
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <PeopleIcon />
                </Box>
                <Typography sx={{
                  fontWeight: 600,
                  mr: 2,
                  color: 'text.secondary',
                  minWidth: '140px',
                }}>
                  כמות התלמידות:
                </Typography>
                <Typography sx={{
                  fontWeight: 500,
                  color: 'text.primary',
                }}>
                  {localCourse.amountOfStudentsInCourse || props.amountOfStudentsInCourse || "0"}
                </Typography>
              </Box>

              {/* Current Students */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                p: 1.5,
                borderRadius: '10px',
                bgcolor: 'rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.06)',
                }
              }}>
                <Box sx={{
                  mr: 2,
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <PersonAddIcon />
                </Box>
                <Typography sx={{
                  fontWeight: 600,
                  mr: 2,
                  color: 'text.secondary',
                  minWidth: '140px',
                }}>
                  כמות תלמידות נוכחית:
                </Typography>
                <Typography sx={{
                  fontWeight: 500,
                  color: 'text.primary',
                }}>
                  {localCourse.currentAmountOfStudents || props.currentAmountOfStudents || "0"}
                </Typography>
              </Box>

              {/* Course ID */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                p: 1.5,
                borderRadius: '10px',
                bgcolor: 'rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.06)',
                }
              }}>
                <Box sx={{
                  mr: 2,
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <SchoolIcon />
                </Box>
                <Typography sx={{
                  fontWeight: 600,
                  mr: 2,
                  color: 'text.secondary',
                  minWidth: '140px',
                }}>
                  מזהה קורס:
                </Typography>
                <Typography sx={{
                  fontWeight: 500,
                  color: 'text.primary',
                }}>
                  {localCourse.idOfCourse || props.idOfCourse || "0"}
                </Typography>
              </Box>

              <Box sx={{
                textAlign: 'center',
                mt: 4,
                p: 3,
                borderRadius: '16px',
                background: localCourse.status
                  ? 'linear-gradient(135deg, rgba(63,81,181,0.05) 0%, rgba(25,118,210,0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(211,47,47,0.05) 0%, rgba(211,47,47,0.1) 100%)',
                border: localCourse.status
                  ? '1px dashed rgba(25,118,210,0.3)'
                  : '1px dashed rgba(211,47,47,0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Typography variant="h6" sx={{
                  mb: 2,
                  fontWeight: 700,
                  background: localCourse.status
                    ? 'linear-gradient(45deg, #1976d2, #3f51b5)'
                    : 'linear-gradient(45deg, #d32f2f, #f44336)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {localCourse.status
                    ? 'מעוניינים להירשם לקורס?'
                    : 'קורס זה אינו פעיל כרגע'}
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                  {localCourse.status
                    ? `הצטרפו אלינו ללימודים מרתקים בקורס ${localCourse.nameOfCourse}`
                    : 'לא ניתן להירשם לקורס זה כרגע. אנא בדקו שוב מאוחר יותר או צרו קשר עם המנהל.'}
                </Typography>

                {/* כפתור הרשמה - משתנה בהתאם לסטטוס הקורס */}
                {localCourse.status ? (
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={moveToJoinCourse}
                    startIcon={<SchoolIcon />}
                    endIcon={<TouchAppOutlinedIcon />}
                    sx={{
                      borderRadius: '30px',
                      py: 1.5,
                      px: 4,
                      fontWeight: 700,
                      fontSize: '1rem',
                      background: 'linear-gradient(45deg, #1976d2, #3f51b5)',
                      boxShadow: '0 4px 20px rgba(25, 118, 210, 0.4)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-3px) scale(1.05)',
                        boxShadow: '0 6px 25px rgba(25, 118, 210, 0.5)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: 'all 0.6s ease',
                      },
                      '&:hover::before': {
                        left: '100%',
                      }
                    }}
                  >
                    הרשמה לקורס
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="error"
                    size="large"
                    disabled
                    startIcon={<BlockIcon />}
                    sx={{
                      borderRadius: '30px',
                      py: 1.5,
                      px: 4,
                      fontWeight: 700,
                      fontSize: '1rem',
                    }}
                  >
                    הרשמה אינה זמינה
                  </Button>
                )}
                {/* {courseStatus ? (
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={moveToJoinCourse}
                    startIcon={<SchoolIcon />}
                    endIcon={<TouchAppOutlinedIcon />}
                    sx={{
                      borderRadius: '30px',
                      py: 1.5,
                      px: 4,
                      fontWeight: 700,
                      fontSize: '1rem',
                      background: 'linear-gradient(45deg, #1976d2, #3f51b5)',
                      boxShadow: '0 4px 20px rgba(25, 118, 210, 0.4)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-3px) scale(1.05)',
                        boxShadow: '0 6px 25px rgba(25, 118, 210, 0.5)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: 'all 0.6s ease',
                      },
                      '&:hover::before': {
                        left: '100%',
                      }
                    }}
                  >
                    הרשמה לקורס
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="error"
                    size="large"
                    disabled
                    startIcon={<BlockIcon />}
                    sx={{
                      borderRadius: '30px',
                      py: 1.5,
                      px: 4,
                      fontWeight: 700,
                      fontSize: '1rem',
                    }}
                  >
                    הרשמה אינה זמינה
                  </Button>
                )} */}

                {/* מחוון מקומות פנויים - מוצג רק עבור קורסים פעילים */}
                {courseStatus && (
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 2
                  }}>
                    <Chip
                      icon={<PeopleIcon sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }} />}
                      label={`${localCourse.amountOfStudentsInCourse && localCourse.currentAmountOfStudents
                        ? localCourse.amountOfStudentsInCourse - localCourse.currentAmountOfStudents
                        : 0} מקומות פנויים`}
                      size="small"
                      color={
                        localCourse.amountOfStudentsInCourse && localCourse.currentAmountOfStudents &&
                          (localCourse.amountOfStudentsInCourse - localCourse.currentAmountOfStudents) > 5
                          ? "success"
                          : (localCourse.amountOfStudentsInCourse - localCourse.currentAmountOfStudents) > 0
                            ? "warning"
                            : "error"
                      }
                      sx={{
                        fontWeight: 600,
                        borderRadius: '20px',
                        animation: localCourse.amountOfStudentsInCourse && localCourse.currentAmountOfStudents &&
                          (localCourse.amountOfStudentsInCourse - localCourse.currentAmountOfStudents) <= 3
                          ? 'pulse 2s infinite' : 'none',
                        '@keyframes pulse': {
                          '0%': { boxShadow: '0 0 0 0 rgba(239, 83, 80, 0.7)' },
                          '70%': { boxShadow: '0 0 0 10px rgba(239, 83, 80, 0)' },
                          '100%': { boxShadow: '0 0 0 0 rgba(239, 83, 80, 0)' }
                        }
                      }}
                    />
                  </Box>
                )}
              </Box>




            </CardContent>
          </Card>
        </Grid>


        {/* Additional Information */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 3,
              position: 'relative',
              pb: 1,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '50px',
                height: '3px',
                bgcolor: 'primary.main',
                borderRadius: '2px',
              }
            }}
          >
            סטטיסטיקות ומידע
          </Typography>

          <Card sx={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            bgcolor: 'primary.light',
            color: 'white',
            mb: 3
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    bgcolor: 'primary.dark',
                    mx: 'auto',
                    mb: 2,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  סטטוס הקורס
                </Typography>
                <Chip
                  label={courseStatus ? "פעיל" : "לא פעיל"}
                  color={courseStatus ? "success" : "error"}
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    px: 1,
                    bgcolor: courseStatus ? 'rgba(46, 125, 50, 0.9)' : 'rgba(211, 47, 47, 0.9)',
                    color: 'white'
                  }}
                />
              </Box>

              <Divider sx={{
                my: 2,
                borderColor: 'rgba(255,255,255,0.2)',
                width: '80%',
                mx: 'auto'
              }} />

              <Typography sx={{
                textAlign: 'center',
                fontSize: '0.95rem',
                fontWeight: 500,
                lineHeight: 1.6
              }}>
                אחוז תפוסה: {localCourse.currentAmountOfStudents && localCourse.amountOfStudentsInCourse ?
                  Math.round((localCourse.currentAmountOfStudents / localCourse.amountOfStudentsInCourse) * 100) : 0}%
              </Typography>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card sx={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            mb: 3
          }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                פעולות מהירות
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<GroupIcon />}
                  onClick={handleStudentsOpen}
                  fullWidth
                  sx={{
                    borderRadius: '8px',
                    py: 1,
                    fontWeight: 600
                  }}
                >
                  ניהול תלמידים
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<EditIcon />}
                  onClick={handleEditOpen}
                  fullWidth
                  sx={{
                    borderRadius: '8px',
                    py: 1,
                    fontWeight: 600
                  }}
                >
                  עריכת פרטי קורס
                </Button>
                <Button
                  variant="outlined"
                  color={courseStatus ? "warning" : "success"}
                  startIcon={courseStatus ? <BlockIcon /> : <VisibilityIcon />}
                  onClick={handleToggleStatus}
                  disabled={isUpdating}
                  fullWidth
                  sx={{
                    borderRadius: '8px',
                    py: 1,
                    fontWeight: 600,
                  }}
                >
                  {isUpdating ? "מעדכן..." : (courseStatus ? "השבת קורס" : "הפעל קורס")}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {!courseStatus && (
        <Box sx={{
          position: 'absolute',
          top: '20px',
          left: '0',
          right: '0',
          zIndex: 3,
          textAlign: 'center',
        }}>
          <Chip
            icon={<WarningIcon />}
            label="קורס לא פעיל"
            color="error"
            sx={{
              fontWeight: 700,
              fontSize: '1rem',
              py: 1,
              px: 2,
              boxShadow: '0 4px 12px rgba(211, 47, 47, 0.4)',
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': { boxShadow: '0 0 0 0 rgba(211, 47, 47, 0.7)' },
                '70%': { boxShadow: '0 0 0 10px rgba(211, 47, 47, 0)' },
                '100%': { boxShadow: '0 0 0 0 rgba(211, 47, 47, 0)' }
              }
            }}
          />
        </Box>
      )}
      {/* Edit Dialog
      <Dialog
        open={editDialogOpen}
        onClose={handleEditClose}
        fullWidth
        maxWidth="md"
        sx={{ direction: 'rtl' }}
      >
        <DialogTitle sx={{
          bgcolor: 'primary.main',
          color: 'white',
          fontWeight: 700,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          עריכת קורס
          <IconButton onClick={handleEditClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <br></br>
        <DialogContent sx={{ p: 3, mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="שם הקורס"
                name="nameOfCourse"
                value={editedCourse.nameOfCourse || ''}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className="image-card">
                <CardContent className="image-card-content">
                  <Typography variant="h6" gutterBottom>
                    תמונת הקורס
                  </Typography>

                  {previewUrl ? (
                    <Box className="image-preview-container">
                      <img
                        src={previewUrl}
                        alt="תצוגה מקדימה"
                        className="image-preview"
                      />
                    </Box>
                  ) : (
                    <Box className="no-image-container">
                      <Typography variant="body2" color="text.secondary">
                        אין תמונה
                      </Typography>
                    </Box>
                  )}

                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadOutlined />}
                    className="upload-button"
                    fullWidth
                  >
                    בחר תמונה
                    <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                  </Button>

                  <Typography variant="caption" display="block" className="file-name">

                  </Typography>
                </CardContent>
              </Card>
            </Grid>



            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="day-select-label">יום בשבוע</InputLabel>
                <Select
                  labelId="day-select-label"
                  value={editedCourse.dayOfCourse || ''}
                  onChange={handleInputChange}
                  label="יום בשבוע"
                  name="dayOfCourse"
                >
                  <MenuItem value="ראשון">ראשון</MenuItem>
                  <MenuItem value="שני">שני</MenuItem>
                  <MenuItem value="שלישי">שלישי</MenuItem>
                  <MenuItem value="רביעי">רביעי</MenuItem>
                  <MenuItem value="חמישי">חמישי</MenuItem>
                  <MenuItem value="שישי">שישי</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="תאריך התחלה"
                name="startDateOfCourse"
                value={editedCourse.startDateOfCourse || ''}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="כמות מפגשים"
                name="amountOfMeetingsInCourse"
                type="number"
                value={editedCourse.amountOfMeetingsInCourse || ''}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="כמות תלמידות מקסימלית"
                name="amountOfStudentsInCourse"
                type="number"
                value={editedCourse.amountOfStudentsInCourse || ''}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>

          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 2, bgcolor: 'background.paper' }}>
          <Button
            onClick={handleEditClose}
            color="inherit"
            variant="outlined"
            startIcon={<CloseIcon />}
          >
            ביטול
          </Button>
          <Button
            onClick={handleEditSave}
            color="primary"
            variant="contained"
            startIcon={<SaveIcon />}
            sx={{
              fontWeight: 600,
              boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
            }}
          >
            שמירת שינויים
          </Button>
        </DialogActions>
      </Dialog> */}
      {/* Edit Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={handleEditClose}
        fullWidth
        maxWidth="md"
        sx={{ direction: 'rtl' }}
      >
        <DialogTitle sx={{
          bgcolor: 'primary.main',
          color: 'white',
          fontWeight: 700,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          עריכת קורס
          <IconButton onClick={handleEditClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <br></br>
        <DialogContent sx={{ p: 3, mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="שם הקורס"
                name="nameOfCourse"
                value={editedCourse.nameOfCourse || ''}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className="image-card">
                <CardContent className="image-card-content">
                  <Typography variant="h6" gutterBottom>
                    תמונת הקורס
                  </Typography>

                  {previewUrl ? (
                    <Box className="image-preview-container">
                      <img
                        src={previewUrl}
                        alt="תצוגה מקדימה"
                        className="image-preview"
                      />
                    </Box>
                  ) : (
                    <Box className="no-image-container">
                      <Typography variant="body2" color="text.secondary">
                        אין תמונה
                      </Typography>
                    </Box>
                  )}

                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadOutlined />}
                    className="upload-button"
                    fullWidth
                  >
                    בחר תמונה
                    <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                  </Button>

                  <Typography variant="caption" display="block" className="file-name">

                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="day-select-label">יום בשבוע</InputLabel>
                <Select
                  labelId="day-select-label"
                  value={editedCourse.dayOfCourse || ''}
                  onChange={handleInputChange}
                  label="יום בשבוע"
                  name="dayOfCourse"
                >
                  <MenuItem value="ראשון">ראשון</MenuItem>
                  <MenuItem value="שני">שני</MenuItem>
                  <MenuItem value="שלישי">שלישי</MenuItem>
                  <MenuItem value="רביעי">רביעי</MenuItem>
                  <MenuItem value="חמישי">חמישי</MenuItem>
                  <MenuItem value="שישי">שישי</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="תאריך התחלה"
                name="startDateOfCourse"
                value={editedCourse.startDateOfCourse || ''}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="כמות מפגשים"
                name="amountOfMeetingsInCourse"
                type="number"
                value={editedCourse.amountOfMeetingsInCourse || ''}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="כמות תלמידות מקסימלית"
                name="amountOfStudentsInCourse"
                type="number"
                value={editedCourse.amountOfStudentsInCourse || ''}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        {/* <DialogActions sx={{ p: 2, bgcolor: 'background.paper' }}>
          <Button
            onClick={handleEditClose}
            color="inherit"
            variant="outlined"
            startIcon={<CloseIcon />}
            disabled={isUpdating}
          >
            ביטול
          </Button>
          <Button
            onClick={handleEditSave}
            color="primary"
            variant="contained"
            startIcon={isUpdating ? null : <SaveIcon />}
            disabled={isUpdating}
            sx={{
              fontWeight: 600,
              boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
            }}
          >
            {isUpdating ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>שומר שינויים...</span>
                <CircularProgress size={20} color="inherit" />
              </Box>
            ) : (
              "שמירת שינויים"
            )}
          </Button>
        </DialogActions> */}
        {/* <DialogActions sx={{ p: 2, bgcolor: 'background.paper' }}>
  <Button
    onClick={handleEditClose}
    color="inherit"
    variant="outlined"
    startIcon={<CloseIcon />}
    disabled={isUpdating}
  >
    ביטול
  </Button>
  <Button
    onClick={handleEditSave}
    color="primary"
    variant="contained"
    startIcon={isUpdating ? null : <SaveIcon />}
    disabled={isUpdating}
    sx={{
      fontWeight: 600,
      boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
    }}
  >
    {isUpdating ? (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>שומר שינויים...</span>
        <CircularProgress size={20} color="inherit" />
      </Box>
    ) : (
      "שמירת שינויים"
    )}
  </Button>
</DialogActions> */}
        <DialogActions sx={{ p: 2, bgcolor: 'background.paper' }}>
          <Button
            onClick={handleEditClose}
            color="inherit"
            variant="outlined"
            startIcon={<CloseIcon />}
            disabled={isUpdating}
          >
            ביטול
          </Button>
          <Button
            onClick={handleEditSave}
            color="primary"
            variant="contained"
            startIcon={isUpdating ? null : <SaveIcon />}
            disabled={isUpdating}
            sx={{
              fontWeight: 600,
              boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
            }}
          >
            {isUpdating ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>שומר שינויים...</span>
                <CircularProgress size={20} color="inherit" />
              </Box>
            ) : (
              "שמירת שינויים"
            )}
          </Button>
        </DialogActions>
      </Dialog>
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteClose}
        sx={{ direction: 'rtl' }}
      >
        <DialogTitle sx={{
          bgcolor: 'error.main',
          color: 'white',
          fontWeight: 700
        }}>
          מחיקת קורס
        </DialogTitle>
        <DialogContent sx={{ p: 3, mt: 2 }}>
          <Typography variant="body1">
            האם אתה בטוח שברצונך למחוק את הקורס "{localCourse.nameOfCourse}"?
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, color: 'error.main', fontWeight: 500 }}>
            פעולה זו אינה ניתנת לביטול ותמחק את כל הנתונים הקשורים לקורס זה.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2, bgcolor: 'background.paper' }}>
          <Button
            onClick={handleDeleteClose}
            color="inherit"
            variant="outlined"
          >
            ביטול
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            color="error"
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            מחק קורס
          </Button>
        </DialogActions>
      </Dialog>

      {/* Students Management Dialog */}
      <Dialog
        open={studentsDialogOpen}
        onClose={handleStudentsClose}
        fullWidth
        maxWidth="md"
        sx={{ direction: 'rtl' }}
      >
        <DialogTitle sx={{
          bgcolor: 'primary.main',
          color: 'white',
          fontWeight: 700,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          ניהול תלמידים בקורס: {localCourse.nameOfCourse}
          <IconButton onClick={handleStudentsClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3, mt: 2 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              סטטיסטיקות
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Card sx={{
                  p: 2,
                  textAlign: 'center',
                  bgcolor: 'primary.light',
                  color: 'white',
                  borderRadius: '10px'
                }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {localCourse.currentAmountOfStudents || 0}
                  </Typography>
                  <Typography variant="body2">
                    תלמידים רשומים
                  </Typography>
                  {/* {localCourse.Students.map((student) => (
                    <Typography key={student.id} variant="body2" sx={{ fontWeight: 500 }}>
                      {student.nameOfStudent} */}
                  {/* </Typography>
                  ))} */}
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{
                  p: 2,
                  textAlign: 'center',
                  bgcolor: 'success.light',
                  color: 'white',
                  borderRadius: '10px'
                }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {localCourse.amountOfStudentsInCourse || 0}
                  </Typography>
                  <Typography variant="body2">
                    מקומות בקורס
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{
                  p: 2,
                  textAlign: 'center',
                  bgcolor: 'info.light',
                  color: 'white',
                  borderRadius: '10px'
                }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {localCourse.amountOfStudentsInCourse && localCourse.currentAmountOfStudents
                      ? localCourse.amountOfStudentsInCourse - localCourse.currentAmountOfStudents
                      : 0}
                  </Typography>
                  <Typography variant="body2">
                    מקומות פנויים
                  </Typography>
                </Card>
              </Grid>

            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            רשימת תלמידים
            <div>
              {myStudents.map(
                (student) => (
                  <div key={student.id}>
                    {student.nameOfStudent}
                  </div>
                )
              )}

            </div>
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            { }
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              onClick={moveToJoinCourse}
              variant="outlined"
              color="primary"
              startIcon={<PersonAddIcon />}
              sx={{
                borderRadius: '8px',
                py: 1,
                px: 3,
                fontWeight: 600
              }}
            >
              הוספת תלמיד חדש
            </Button>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2, bgcolor: 'background.paper' }}>
          <Button
            onClick={handleStudentsClose}
            color="primary"
            variant="contained"
            sx={{
              fontWeight: 600,
              boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
            }}
          >
            סגור
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};