// // // // // // // // import React, { useEffect, useState, useMemo } from 'react';
// // // // // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // // // // import { getAllCoursesThunk } from '../../redux/Thunks/getAllCoursesThunk';
// // // // // // // // //  import { setSelectedCourse } from '../../redux/slices/coursesSlice';
// // // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // // // Material UI Components
// // // // // // // // import {
// // // // // // // //   Container,
// // // // // // // //   Grid,
// // // // // // // //   Card,
// // // // // // // //   CardMedia,
// // // // // // // //   CardContent,
// // // // // // // //   Typography,
// // // // // // // //   TextField,
// // // // // // // //   InputAdornment,
// // // // // // // //   Box,
// // // // // // // //   Chip,
// // // // // // // //   Avatar,
// // // // // // // //   Button,
// // // // // // // //   IconButton,
// // // // // // // //   CircularProgress,
// // // // // // // //   Paper,
// // // // // // // //   Tooltip,
// // // // // // // //   Zoom,
// // // // // // // //   LinearProgress
// // // // // // // // } from '@mui/material';

// // // // // // // // // Material UI Icons
// // // // // // // // import {
// // // // // // // //   Search as SearchIcon,
// // // // // // // //   LocationOn as LocationIcon,
// // // // // // // //   Schedule as ScheduleIcon,
// // // // // // // //   Person as PersonIcon,
// // // // // // // //   School as SchoolIcon,
// // // // // // // //   Visibility as VisibilityIcon,
// // // // // // // //   Edit as EditIcon,
// // // // // // // //   Delete as DeleteIcon,
// // // // // // // //   CalendarToday as CalendarIcon,
// // // // // // // //   AttachMoney as MoneyIcon,
// // // // // // // //   Group as GroupIcon,
// // // // // // // //   Star as StarIcon,
// // // // // // // //   TrendingUp as TrendingIcon
// // // // // // // // } from '@mui/icons-material';

// // // // // // // // // Styles
// // // // // // // // import './HomeGoodNice.css';
// // // // // // // // import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';

// // // // // // // // export const HomeGoodNice = () => {
// // // // // // // //   const dispatch = useDispatch();
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const courses = useSelector(state => state.courses.allCourses || []);
// // // // // // // //   const loading = useSelector(state => state.courses.loading);

// // // // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // // // //   const [isLoading, setIsLoading] = useState(true);

// // // // // // // //   // Fetch courses on component mount
// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchCourses = async () => {
// // // // // // // //       setIsLoading(true);
// // // // // // // //       try {
// // // // // // // //         await dispatch(getAllCoursesThunk());
// // // // // // // //       } finally {
// // // // // // // //         setIsLoading(false);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //     fetchCourses();
// // // // // // // //   }, [dispatch]);

// // // // // // // //   // Filter courses based on search term
// // // // // // // //   const filteredCourses = useMemo(() => {
// // // // // // // //     if (!searchTerm.trim()) return courses;

// // // // // // // //     return courses.filter(course =>
// // // // // // // //       course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // //       course.categoryOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // //       course.instructorName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // //       course.locationOfCourse?.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // // // //     );
// // // // // // // //   }, [courses, searchTerm]);

// // // // // // // //   // Calculate statistics
// // // // // // // //   const stats = useMemo(() => ({
// // // // // // // //     totalCourses: courses.length,
// // // // // // // //     totalStudents: courses.reduce((sum, course) => sum + (course.currentAmountOfStudents || 0), 0),
// // // // // // // //     availableSeats: courses.reduce((sum, course) => 
// // // // // // // //       sum + ((course.amountOfStudentsInCourse || 0) - (course.currentAmountOfStudents || 0)), 0)
// // // // // // // //   }), [courses]);

// // // // // // // //   // Handle course selection
// // // // // // // //   const handleCourseSelect = (course) => {
// // // // // // // //     dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
// // // // // // // //     navigate(`/course-details/${course.idOfCourse}`);
// // // // // // // //   };

// // // // // // // //   // Handle course edit
// // // // // // // //   const handleEditCourse = (course, event) => {
// // // // // // // //     event.stopPropagation();
// // // // // // // //     dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
// // // // // // // //     navigate(`/edit-course/${course.idOfCourse}`);
// // // // // // // //   };

// // // // // // // //   // Handle course delete
// // // // // // // //   const handleDeleteCourse = (courseId, event) => {
// // // // // // // //     event.stopPropagation();
// // // // // // // //     // Add delete logic here
// // // // // // // //     console.log('Delete course:', courseId);
// // // // // // // //   };

// // // // // // // //   // Get course image or default
// // // // // // // //   const getCourseImage = (course) => {
// // // // // // // //     return course.imageUrl || course.image || '/images/default-course.jpg';
// // // // // // // //   };

// // // // // // // //   // Get instructor initials
// // // // // // // //   const getInstructorInitials = (name) => {
// // // // // // // //     if (!name) return 'מ';
// // // // // // // //     const words = name.split(' ');
// // // // // // // //     return words.length > 1 
// // // // // // // //       ? `${words[0][0]}${words[1][0]}` 
// // // // // // // //       : name[0];
// // // // // // // //   };

// // // // // // // //   // Calculate progress percentage
// // // // // // // //   const getProgressPercentage = (current, total) => {
// // // // // // // //     if (!total) return 0;
// // // // // // // //     return Math.min((current / total) * 100, 100);
// // // // // // // //   };

// // // // // // // //   // Check if course is popular
// // // // // // // //   const isPopularCourse = (course) => {
// // // // // // // //     const enrollmentRate = (course.currentAmountOfStudents || 0) / (course.amountOfStudentsInCourse || 1);
// // // // // // // //     return enrollmentRate > 0.7;
// // // // // // // //   };

// // // // // // // //   // Loading screen
// // // // // // // //   if (isLoading) {
// // // // // // // //     return (
// // // // // // // //       <div className="loading-overlay">
// // // // // // // //         <div className="loading-content">
// // // // // // // //           <CircularProgress className="loading-spinner" size={80} />
// // // // // // // //           <Typography variant="h6" className="loading-text">
// // // // // // // //             טוען קורסים...
// // // // // // // //           </Typography>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="home-page-wrapper">
// // // // // // // //       <Container maxWidth="xl" className="home-dashboard">

// // // // // // // //         {/* Header Section */}
// // // // // // // //         <Paper className="home-header" elevation={0}>
// // // // // // // //           <Typography variant="h3" className="home-title">
// // // // // // // //             ברוכים הבאים למערכת הקורסים
// // // // // // // //           </Typography>
// // // // // // // //           <Typography variant="h6" className="home-subtitle">
// // // // // // // //             גלו את מגוון הקורסים שלנו ובחרו את המתאים ביותר עבורכם
// // // // // // // //           </Typography>
// // // // // // // //         </Paper>

// // // // // // // //         {/* Statistics Section */}
// // // // // // // //         <Box className="stats-container">
// // // // // // // //           <Grid container spacing={3}>
// // // // // // // //             <Grid item xs={12} md={4}>
// // // // // // // //               <Card className="stat-card courses-stat">
// // // // // // // //                 <CardContent>
// // // // // // // //                   <Box className="stat-content">
// // // // // // // //                     <SchoolIcon className="stat-icon" />
// // // // // // // //                     <Box>
// // // // // // // //                       <Typography variant="h4" className="stat-number">
// // // // // // // //                         {stats.totalCourses}
// // // // // // // //                       </Typography>
// // // // // // // //                       <Typography variant="body1" className="stat-label">
// // // // // // // //                         קורסים זמינים
// // // // // // // //                       </Typography>
// // // // // // // //                     </Box>
// // // // // // // //                   </Box>
// // // // // // // //                 </CardContent>
// // // // // // // //               </Card>
// // // // // // // //             </Grid>

// // // // // // // //             <Grid item xs={12} md={4}>
// // // // // // // //               <Card className="stat-card students-stat">
// // // // // // // //                 <CardContent>
// // // // // // // //                   <Box className="stat-content">
// // // // // // // //                     <GroupIcon className="stat-icon" />
// // // // // // // //                     <Box>
// // // // // // // //                       <Typography variant="h4" className="stat-number">
// // // // // // // //                         {stats.totalStudents}
// // // // // // // //                       </Typography>
// // // // // // // //                       <Typography variant="body1" className="stat-label">
// // // // // // // //                         סטודנטים רשומים
// // // // // // // //                       </Typography>
// // // // // // // //                     </Box>
// // // // // // // //                   </Box>
// // // // // // // //                 </CardContent>
// // // // // // // //               </Card>
// // // // // // // //             </Grid>

// // // // // // // //             <Grid item xs={12} md={4}>
// // // // // // // //               <Card className="stat-card seats-stat">
// // // // // // // //                 <CardContent>
// // // // // // // //                   <Box className="stat-content">
// // // // // // // //                     <TrendingIcon className="stat-icon" />
// // // // // // // //                     <Box>
// // // // // // // //                       <Typography variant="h4" className="stat-number">
// // // // // // // //                         {stats.availableSeats}
// // // // // // // //                       </Typography>
// // // // // // // //                       <Typography variant="body1" className="stat-label">
// // // // // // // //                         מקומות פנויים
// // // // // // // //                       </Typography>
// // // // // // // //                     </Box>
// // // // // // // //                   </Box>
// // // // // // // //                 </CardContent>
// // // // // // // //               </Card>
// // // // // // // //             </Grid>
// // // // // // // //           </Grid>
// // // // // // // //         </Box>

// // // // // // // //         {/* Search Section */}
// // // // // // // //         <Paper className="search-container" elevation={0}>
// // // // // // // //           <TextField
// // // // // // // //             fullWidth
// // // // // // // //             variant="outlined"
// // // // // // // //             placeholder="חפש קורס לפי שם, קטגוריה, מרצה או מיקום..."
// // // // // // // //             value={searchTerm}
// // // // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // //             className="search-field"
// // // // // // // //             InputProps={{
// // // // // // // //               startAdornment: (
// // // // // // // //                 <InputAdornment position="start">
// // // // // // // //                   <SearchIcon className="search-icon" />
// // // // // // // //                 </InputAdornment>
// // // // // // // //               ),
// // // // // // // //             }}
// // // // // // // //           />
// // // // // // // //         </Paper>

// // // // // // // //         {/* Courses Grid */}
// // // // // // // //         {filteredCourses.length > 0 ? (
// // // // // // // //           <>
// // // // // // // //             <Box className="courses-grid-container">
// // // // // // // //               <Grid container spacing={4}>
// // // // // // // //                 {filteredCourses.map((course) => (
// // // // // // // //                   <Grid item xs={12} sm={6} lg={4} key={course.idOfCourse}>
// // // // // // // //                     <div className="course-card-wrapper">
// // // // // // // //                       <Card 
// // // // // // // //                         className="course-card"
// // // // // // // //                         onClick={() => handleCourseSelect(course)}
// // // // // // // //                       >
// // // // // // // //                         {/* Course Image Background */}
// // // // // // // //                         <CardMedia
// // // // // // // //                           component="img"
// // // // // // // //                           image={getCourseImage(course)}
// // // // // // // //                           alt={course.nameOfCourse}
// // // // // // // //                           className="course-image"
// // // // // // // //                         />

// // // // // // // //                         {/* Course Badges */}
// // // // // // // //                         <Box className="course-card-badges">
// // // // // // // //                           {isPopularCourse(course) && (
// // // // // // // //                             <Chip
// // // // // // // //                               icon={<StarIcon />}
// // // // // // // //                               label="פופולרי"
// // // // // // // //                               className="popular-badge"
// // // // // // // //                               size="small"
// // // // // // // //                             />
// // // // // // // //                           )}
// // // // // // // //                           {course.categoryOfCourse && (
// // // // // // // //                             <Chip
// // // // // // // //                               label={course.categoryOfCourse}
// // // // // // // //                               className="category-badge"
// // // // // // // //                               size="small"
// // // // // // // //                             />
// // // // // // // //                           )}
// // // // // // // //                         </Box>

// // // // // // // //                         {/* Progress Indicator */}
// // // // // // // //                         <LinearProgress
// // // // // // // //                           variant="determinate"
// // // // // // // //                           value={getProgressPercentage(
// // // // // // // //                             course.currentAmountOfStudents,
// // // // // // // //                             course.amountOfStudentsInCourse
// // // // // // // //                           )}
// // // // // // // //                           className="progress-indicator"
// // // // // // // //                         />

// // // // // // // //                         {/* Course Content */}
// // // // // // // //                         <CardContent className="course-card-content">

// // // // // // // //                           {/* Course Header */}
// // // // // // // //                           <Box className="course-card-header">
// // // // // // // //                             <Typography variant="h5" className="course-title">
// // // // // // // //                               {course.nameOfCourse}
// // // // // // // //                             </Typography>

// // // // // // // //                             <Box className="course-actions">
// // // // // // // //                               <Tooltip title="צפה בפרטים" TransitionComponent={Zoom}>
// // // // // // // //                                 <IconButton 
// // // // // // // //                                   className="action-button"
// // // // // // // //                                   onClick={(e) => {
// // // // // // // //                                     e.stopPropagation();
// // // // // // // //                                     handleCourseSelect(course);
// // // // // // // //                                   }}
// // // // // // // //                                 >
// // // // // // // //                                   <VisibilityIcon />
// // // // // // // //                                 </IconButton>
// // // // // // // //                               </Tooltip>

// // // // // // // //                               <Tooltip title="ערוך קורס" TransitionComponent={Zoom}>
// // // // // // // //                                 <IconButton 
// // // // // // // //                                   className="action-button"
// // // // // // // //                                   onClick={(e) => handleEditCourse(course, e)}
// // // // // // // //                                 >
// // // // // // // //                                   <EditIcon />
// // // // // // // //                                 </IconButton>
// // // // // // // //                               </Tooltip>

// // // // // // // //                               <Tooltip title="מחק קורס" TransitionComponent={Zoom}>
// // // // // // // //                                 <IconButton 
// // // // // // // //                                   className="action-button delete-button"
// // // // // // // //                                   onClick={(e) => handleDeleteCourse(course.idOfCourse, e)}
// // // // // // // //                                 >
// // // // // // // //                                   <DeleteIcon />
// // // // // // // //                                 </IconButton>
// // // // // // // //                               </Tooltip>
// // // // // // // //                             </Box>
// // // // // // // //                           </Box>

// // // // // // // //                           {/* Course Info */}
// // // // // // // //                           <Box className="course-info">
// // // // // // // //                             {course.locationOfCourse && (
// // // // // // // //                               <Box className="info-item">
// // // // // // // //                                 <LocationIcon className="info-icon" />
// // // // // // // //                                 <Typography variant="body2" className="location-text">
// // // // // // // //                                   {course.locationOfCourse}
// // // // // // // //                                 </Typography>
// // // // // // // //                               </Box>
// // // // // // // //                             )}

// // // // // // // //                             {course.dayOfCourse && (
// // // // // // // //                               <Box className="info-item">
// // // // // // // //                                 <CalendarIcon className="info-icon" />
// // // // // // // //                                 <Typography variant="body2">
// // // // // // // //                                   {course.dayOfCourse}
// // // // // // // //                                 </Typography>
// // // // // // // //                               </Box>
// // // // // // // //                             )}

// // // // // // // //                             {course.startDateOfCourse && (
// // // // // // // //                               <Box className="info-item">
// // // // // // // //                                 <ScheduleIcon className="info-icon" />
// // // // // // // //                                 <Typography variant="body2">
// // // // // // // //                                   {new Date(course.startDateOfCourse).toLocaleDateString('he-IL')}
// // // // // // // //                                 </Typography>
// // // // // // // //                               </Box>
// // // // // // // //                             )}
// // // // // // // //                           </Box>

// // // // // // // //                           {/* Course Description */}
// // // // // // // //                           {course.description && (
// // // // // // // //                             <Typography variant="body2" className="course-description">
// // // // // // // //                               {course.description}
// // // // // // // //                             </Typography>
// // // // // // // //                           )}

// // // // // // // //                           {/* Course Chips */}
// // // // // // // //                           <Box className="course-chips">
// // // // // // // //                             <Chip
// // // // // // // //                               icon={<GroupIcon />}
// // // // // // // //                               label={`${course.currentAmountOfStudents || 0}/${course.amountOfStudentsInCourse || 0}`}
// // // // // // // //                               className="info-chip students-chip"
// // // // // // // //                               size="small"
// // // // // // // //                             />

// // // // // // // //                             {course.numberOfMeetings && (
// // // // // // // //                               <Chip
// // // // // // // //                                 icon={<CalendarIcon />}
// // // // // // // //                                 label={`${course.numberOfMeetings} מפגשים`}
// // // // // // // //                                 className="info-chip meetings-chip"
// // // // // // // //                                 size="small"
// // // // // // // //                               />
// // // // // // // //                             )}

// // // // // // // //                             {course.priceOfCourse && (
// // // // // // // //                               <Chip
// // // // // // // //                                 icon={<MoneyIcon />}
// // // // // // // //                                 label={`₪${course.priceOfCourse}`}
// // // // // // // //                                 className="info-chip price-chip"
// // // // // // // //                                 size="small"
// // // // // // // //                               />
// // // // // // // //                             )}
// // // // // // // //                           </Box>

// // // // // // // //                           {/* Instructor Info */}
// // // // // // // //                           {course.instructorName && (
// // // // // // // //                             <Box className="instructor-info">
// // // // // // // //                               <Avatar className="instructor-avatar">
// // // // // // // //                                 {getInstructorInitials(course.instructorName)}
// // // // // // // //                               </Avatar>
// // // // // // // //                               <Typography variant="body2" className="instructor-name">
// // // // // // // //                                 {course.instructorName}
// // // // // // // //                               </Typography>
// // // // // // // //                             </Box>
// // // // // // // //                           )}

// // // // // // // //                           {/* View Details Button */}
// // // // // // // //                           <Button
// // // // // // // //                             variant="contained"
// // // // // // // //                             fullWidth
// // // // // // // //                             className="view-details-button"
// // // // // // // //                             startIcon={<VisibilityIcon />}
// // // // // // // //                             onClick={(e) => {
// // // // // // // //                               e.stopPropagation();
// // // // // // // //                               handleCourseSelect(course);
// // // // // // // //                             }}
// // // // // // // //                           >
// // // // // // // //                             צפה בפרטים
// // // // // // // //                           </Button>
// // // // // // // //                         </CardContent>
// // // // // // // //                       </Card>
// // // // // // // //                     </div>
// // // // // // // //                   </Grid>
// // // // // // // //                 ))}
// // // // // // // //               </Grid>
// // // // // // // //             </Box>

// // // // // // // //             {/* Courses Info */}
// // // // // // // //             <Paper className="courses-info" elevation={0}>
// // // // // // // //               <Typography variant="body1" className="courses-count">
// // // // // // // //                 מציג {filteredCourses.length} מתוך {courses.length} קורסים
// // // // // // // //               </Typography>
// // // // // // // //             </Paper>
// // // // // // // //           </>
// // // // // // // //         ) : (
// // // // // // // //           /* No Courses Found */
// // // // // // // //           <Box className="no-courses-container">
// // // // // // // //             <Paper className="no-courses-content" elevation={0}>
// // // // // // // //             <Box className="no-courses-icon">
// // // // // // // //                 <SchoolIcon />
// // // // // // // //               </Box>
// // // // // // // //               <Typography variant="h5" className="no-courses-title">
// // // // // // // //                 {searchTerm ? 'לא נמצאו קורסים' : 'אין קורסים זמינים'}
// // // // // // // //               </Typography>
// // // // // // // //               <Typography variant="body1" className="no-courses-text">
// // // // // // // //                 {searchTerm 
// // // // // // // //                   ? `לא נמצאו קורסים התואמים לחיפוש "${searchTerm}"`
// // // // // // // //                   : 'כרגע אין קורסים זמינים במערכת'
// // // // // // // //                 }
// // // // // // // //               </Typography>
// // // // // // // //               {searchTerm && (
// // // // // // // //                 <Button
// // // // // // // //                   variant="outlined"
// // // // // // // //                   className="clear-search-button"
// // // // // // // //                   onClick={() => setSearchTerm('')}
// // // // // // // //                 >
// // // // // // // //                   נקה חיפוש
// // // // // // // //                 </Button>
// // // // // // // //               )}
// // // // // // // //             </Paper>
// // // // // // // //           </Box>
// // // // // // // //         )}
// // // // // // // //       </Container>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default HomeGoodNice;
// // // // // // // import React, { useEffect, useState, useMemo } from 'react';
// // // // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // // // import { getAllCoursesThunk } from '../../redux/Thunks/getAllCoursesThunk';
// // // // // // // import { setSelectedCourse } from '../../redux/Slices/courseSlice';
// // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // import {
// // // // // // //   Container,
// // // // // // //   Grid,
// // // // // // //   Card,
// // // // // // //   CardMedia,
// // // // // // //   CardContent,
// // // // // // //   Typography,
// // // // // // //   TextField,
// // // // // // //   InputAdornment,
// // // // // // //   Box,
// // // // // // //   Chip,
// // // // // // //   Avatar,
// // // // // // //   Button,
// // // // // // //   IconButton,
// // // // // // //   CircularProgress,
// // // // // // //   Paper,
// // // // // // //   Tooltip,
// // // // // // //   Zoom,
// // // // // // //   LinearProgress
// // // // // // // } from '@mui/material';

// // // // // // // import {
// // // // // // //   Search as SearchIcon,
// // // // // // //   LocationOn as LocationIcon,
// // // // // // //   Schedule as ScheduleIcon,
// // // // // // //   Person as PersonIcon,
// // // // // // //   School as SchoolIcon,
// // // // // // //   Visibility as VisibilityIcon,
// // // // // // //   Edit as EditIcon,
// // // // // // //   Delete as DeleteIcon,
// // // // // // //   CalendarToday as CalendarIcon,
// // // // // // //   AttachMoney as MoneyIcon,
// // // // // // //   Group as GroupIcon,
// // // // // // //   Star as StarIcon,
// // // // // // //   TrendingUp as TrendingIcon
// // // // // // // } from '@mui/icons-material';

// // // // // // // import './HomeGoodNice.css';
// // // // // // // import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';

// // // // // // // export const HomeGoodNice = () => {
// // // // // // //   const dispatch = useDispatch();
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const courses = useSelector(state => state.courses.allCourses || []);
// // // // // // //   const loading = useSelector(state => state.courses.loading);

// // // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // // //   const [isLoading, setIsLoading] = useState(true);

// // // // // // //   // טעינת קורסים בעת טעינת הקומפוננט
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchCourses = async () => {
// // // // // // //       setIsLoading(true);
// // // // // // //       try {
// // // // // // //         await dispatch(getAllCoursesThunk());
// // // // // // //       } finally {
// // // // // // //         setIsLoading(false);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchCourses();
// // // // // // //   }, [dispatch]);

// // // // // // //   // סינון קורסים לפי מונח החיפוש
// // // // // // //   const filteredCourses = useMemo(() => {
// // // // // // //     if (!searchTerm.trim()) return courses;

// // // // // // //     return courses.filter(course =>
// // // // // // //       course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // //       course.categoryOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // //       course.instructorName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // //       course.locationOfCourse?.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // // //     );
// // // // // // //   }, [courses, searchTerm]);

// // // // // // //   // חישוב סטטיסטיקות
// // // // // // //   const stats = useMemo(() => ({
// // // // // // //     totalCourses: courses.length,
// // // // // // //     totalStudents: courses.reduce((sum, course) => sum + (course.currentAmountOfStudents || 0), 0),
// // // // // // //     availableSeats: courses.reduce((sum, course) => 
// // // // // // //       sum + ((course.amountOfStudentsInCourse || 0) - (course.currentAmountOfStudents || 0)), 0)
// // // // // // //   }), [courses]);

// // // // // // //   // פונקציה לבחירת קורס
// // // // // // //   const handleCourseSelect = (course) => {
// // // // // // //     dispatch(setSelectedCourse(course));
// // // // // // //     dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
// // // // // // //     navigate(`/course-details/${course.idOfCourse}`);
// // // // // // //   };

// // // // // // //   // פונקציה לעריכת קורס
// // // // // // //   const handleEditCourse = (course, event) => {
// // // // // // //     event.stopPropagation();
// // // // // // //     dispatch(setSelectedCourse(course));
// // // // // // //     dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
// // // // // // //     navigate(`/edit-course/${course.idOfCourse}`);
// // // // // // //   };

// // // // // // //   // פונקציה למחיקת קורס
// // // // // // //   const handleDeleteCourse = (courseId, event) => {
// // // // // // //     event.stopPropagation();
// // // // // // //     console.log('Delete course:', courseId);
// // // // // // //   };

// // // // // // //   // פונקציה לקבלת תמונת קורס או תמונת ברירת מחדל
// // // // // // //   const getCourseImage = (course) => {
// // // // // // //     // אם יש תמונה ספציפית לקורס, השתמש בה
// // // // // // //     // if (course.imageUrl) return course.imageUrl;
// // // // // // //     if (course.image) return course.image;

// // // // // // //     // אחרת, השתמש בתמונות ברירת מחדל לפי קטגוריה
// // // // // // //     const categoryImages = {
// // // // // // //       'תכנות': 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop',
// // // // // // //       'עיצוב': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
// // // // // // //       'שיווק': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
// // // // // // //       'ניהול': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
// // // // // // //       'כלכלה': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
// // // // // // //       'מדעים': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop'
// // // // // // //     };

// // // // // // //     return categoryImages[course.categoryOfCourse] || 
// // // // // // //            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop';
// // // // // // //   };

// // // // // // //   // פונקציה לקבלת ראשי תיבות של שם המרצה
// // // // // // //   const getInstructorInitials = (name) => {
// // // // // // //     if (!name) return 'מ';
// // // // // // //     const words = name.split(' ');
// // // // // // //     return words.length > 1 
// // // // // // //       ? `${words[0][0]}${words[1][0]}` 
// // // // // // //       : name[0];
// // // // // // //   };

// // // // // // //   // פונקציה לחישוב אחוז התקדמות
// // // // // // //   const getProgressPercentage = (current, total) => {
// // // // // // //     if (!total) return 0;
// // // // // // //     return Math.min((current / total) * 100, 100);
// // // // // // //   };

// // // // // // //   // פונקציה לבדיקה אם קורס פופולרי
// // // // // // //   const isPopularCourse = (course) => {
// // // // // // //     const enrollmentRate = (course.currentAmountOfStudents || 0) / (course.amountOfStudentsInCourse || 1);
// // // // // // //     return enrollmentRate > 0.7;
// // // // // // //   };

// // // // // // //   // מסך טעינה
// // // // // // //   if (isLoading) {
// // // // // // //     return (
// // // // // // //       <div className="loading-overlay">
// // // // // // //         <div className="loading-content">
// // // // // // //           <CircularProgress className="loading-spinner" size={80} />
// // // // // // //           <Typography variant="h6" className="loading-text">
// // // // // // //             טוען קורסים...
// // // // // // //           </Typography>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="home-page-wrapper">
// // // // // // //       <Container maxWidth="xl" className="home-dashboard">

// // // // // // //         {/* כותרת ראשית */}
// // // // // // //         <Paper className="home-header" elevation={0}>
// // // // // // //           <Typography variant="h3" className="home-title">
// // // // // // //             ברוכים הבאים למערכת הקורסים
// // // // // // //           </Typography>
// // // // // // //           <Typography variant="h6" className="home-subtitle">
// // // // // // //             גלו את מגוון הקורסים שלנו ובחרו את המתאים ביותר עבורכם
// // // // // // //           </Typography>
// // // // // // //         </Paper>

// // // // // // //         {/* סקציית סטטיסטיקות */}
// // // // // // //         <Box className="stats-container">
// // // // // // //           <Grid container spacing={3}>
// // // // // // //             <Grid item xs={12} md={4}>
// // // // // // //               <Card className="stat-card courses-stat">
// // // // // // //                 <CardContent>
// // // // // // //                   <Box className="stat-content">
// // // // // // //                     <SchoolIcon className="stat-icon" />
// // // // // // //                     <Box>
// // // // // // //                       <Typography variant="h4" className="stat-number">
// // // // // // //                         {stats.totalCourses}
// // // // // // //                       </Typography>
// // // // // // //                       <Typography variant="body1" className="stat-label">
// // // // // // //                         קורסים זמינים
// // // // // // //                       </Typography>
// // // // // // //                     </Box>
// // // // // // //                   </Box>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             </Grid>

// // // // // // //             <Grid item xs={12} md={4}>
// // // // // // //               <Card className="stat-card students-stat">
// // // // // // //                 <CardContent>
// // // // // // //                   <Box className="stat-content">
// // // // // // //                     <GroupIcon className="stat-icon" />
// // // // // // //                     <Box>
// // // // // // //                       <Typography variant="h4" className="stat-number">
// // // // // // //                         {stats.totalStudents}
// // // // // // //                       </Typography>
// // // // // // //                       <Typography variant="body1" className="stat-label">
// // // // // // //                         סטודנטים רשומים
// // // // // // //                       </Typography>
// // // // // // //                     </Box>
// // // // // // //                   </Box>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             </Grid>

// // // // // // //             <Grid item xs={12} md={4}>
// // // // // // //               <Card className="stat-card seats-stat">
// // // // // // //                 <CardContent>
// // // // // // //                   <Box className="stat-content">
// // // // // // //                     <TrendingIcon className="stat-icon" />
// // // // // // //                     <Box>
// // // // // // //                       <Typography variant="h4" className="stat-number">
// // // // // // //                         {stats.availableSeats}
// // // // // // //                       </Typography>
// // // // // // //                       <Typography variant="body1" className="stat-label">
// // // // // // //                         מקומות פנויים
// // // // // // //                       </Typography>
// // // // // // //                     </Box>
// // // // // // //                   </Box>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             </Grid>
// // // // // // //           </Grid>
// // // // // // //         </Box>

// // // // // // //         {/* סקציית חיפוש */}
// // // // // // //         <Paper className="search-container" elevation={0}>
// // // // // // //           <TextField
// // // // // // //             fullWidth
// // // // // // //             variant="outlined"
// // // // // // //             placeholder="חפש קורס לפי שם, קטגוריה, מרצה או מיקום..."
// // // // // // //             value={searchTerm}
// // // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // //             className="search-field"
// // // // // // //             InputProps={{
// // // // // // //               startAdornment: (
// // // // // // //                 <InputAdornment position="start">
// // // // // // //                   <SearchIcon className="search-icon" />
// // // // // // //                 </InputAdornment>
// // // // // // //               ),
// // // // // // //             }}
// // // // // // //           />
// // // // // // //         </Paper>

// // // // // // //         {/* רשת הקורסים */}
// // // // // // //         {filteredCourses.length > 0 ? (
// // // // // // //           <>
// // // // // // //             <Box className="courses-grid-container">
// // // // // // //               <Grid container spacing={4}>
// // // // // // //                 {filteredCourses.map((course) => (
// // // // // // //                   <Grid item xs={12} sm={6} lg={4} key={course.idOfCourse}>
// // // // // // //                     <div className="course-card-wrapper">
// // // // // // //                       <Card 
// // // // // // //                         className="course-card"
// // // // // // //                         onClick={() => handleCourseSelect(course)}
// // // // // // //                       >
// // // // // // //                         {/* רקע תמונה לכרטיס הקורס */}
// // // // // // //                         <CardMedia
// // // // // // //                           component="img"
// // // // // // //                           image={getCourseImage(course)}
// // // // // // //                           alt={course.nameOfCourse}
// // // // // // //                           className="course-image"
// // // // // // //                         />

// // // // // // //                         {/* תגיות הקורס */}
// // // // // // //                         <Box className="course-card-badges">
// // // // // // //                           {isPopularCourse(course) && (
// // // // // // //                             <Chip
// // // // // // //                               icon={<StarIcon />}
// // // // // // //                               label="פופולרי"
// // // // // // //                               className="popular-badge"
// // // // // // //                               size="small"
// // // // // // //                             />
// // // // // // //                           )}
// // // // // // //                           {course.categoryOfCourse && (
// // // // // // //                             <Chip
// // // // // // //                               label={course.categoryOfCourse}
// // // // // // //                               className="category-badge"
// // // // // // //                               size="small"
// // // // // // //                             />
// // // // // // //                           )}
// // // // // // //                         </Box>

// // // // // // //                         {/* מחוון התקדמות */}
// // // // // // //                         <LinearProgress
// // // // // // //                           variant="determinate"
// // // // // // //                           value={getProgressPercentage(
// // // // // // //                             course.currentAmountOfStudents,
// // // // // // //                             course.amountOfStudentsInCourse
// // // // // // //                           )}
// // // // // // //                           className="progress-indicator"
// // // // // // //                         />

// // // // // // //                         {/* תוכן הכרטיס */}
// // // // // // //                         <CardContent className="course-card-content">

// // // // // // //                           {/* כותרת הקורס וכפתורי פעולה */}
// // // // // // //                           <Box className="course-card-header">
// // // // // // //                             <Typography variant="h5" className="course-title">
// // // // // // //                               {course.nameOfCourse}
// // // // // // //                             </Typography>

// // // // // // //                             <Box className="course-actions">
// // // // // // //                               <Tooltip title="צפה בפרטים" TransitionComponent={Zoom}>
// // // // // // //                                 <IconButton 
// // // // // // //                                   className="action-button"
// // // // // // //                                   onClick={(e) => {
// // // // // // //                                     e.stopPropagation();
// // // // // // //                                     handleCourseSelect(course);
// // // // // // //                                   }}
// // // // // // //                                 >
// // // // // // //                                   <VisibilityIcon />
// // // // // // //                                 </IconButton>
// // // // // // //                               </Tooltip>

// // // // // // //                               <Tooltip title="ערוך קורס" TransitionComponent={Zoom}>
// // // // // // //                                 <IconButton 
// // // // // // //                                   className="action-button"
// // // // // // //                                   onClick={(e) => handleEditCourse(course, e)}
// // // // // // //                                 >
// // // // // // //                                   <EditIcon />
// // // // // // //                                 </IconButton>
// // // // // // //                               </Tooltip>

// // // // // // //                               <Tooltip title="מחק קורס" TransitionComponent={Zoom}>
// // // // // // //                                 <IconButton 
// // // // // // //                                   className="action-button delete-button"
// // // // // // //                                   onClick={(e) => handleDeleteCourse(course.idOfCourse, e)}
// // // // // // //                                 >
// // // // // // //                                   <DeleteIcon />
// // // // // // //                                 </IconButton>
// // // // // // //                               </Tooltip>
// // // // // // //                             </Box>
// // // // // // //                           </Box>

// // // // // // //                           {/* מידע על הקורס */}
// // // // // // //                           <Box className="course-info">
// // // // // // //                             {course.locationOfCourse && (
// // // // // // //                               <Box className="info-item">
// // // // // // //                                 <LocationIcon className="info-icon" />
// // // // // // //                                 <Typography variant="body2" className="location-text">
// // // // // // //                                   {course.locationOfCourse}
// // // // // // //                                 </Typography>
// // // // // // //                               </Box>
// // // // // // //                             )}

// // // // // // //                             {course.dayOfCourse && (
// // // // // // //                               <Box className="info-item">
// // // // // // //                                 <CalendarIcon className="info-icon" />
// // // // // // //                                 <Typography variant="body2">
// // // // // // //                                   {course.dayOfCourse}
// // // // // // //                                 </Typography>
// // // // // // //                                 </Box>
// // // // // // //                             )}

// // // // // // //                             {course.startDateOfCourse && (
// // // // // // //                               <Box className="info-item">
// // // // // // //                                 <ScheduleIcon className="info-icon" />
// // // // // // //                                 <Typography variant="body2">
// // // // // // //                                   {new Date(course.startDateOfCourse).toLocaleDateString('he-IL')}
// // // // // // //                                 </Typography>
// // // // // // //                               </Box>
// // // // // // //                             )}
// // // // // // //                           </Box>

// // // // // // //                           {/* תיאור הקורס */}
// // // // // // //                           {course.description && (
// // // // // // //                             <Typography variant="body2" className="course-description">
// // // // // // //                               {course.description}
// // // // // // //                             </Typography>
// // // // // // //                           )}

// // // // // // //                           {/* צ'יפים עם מידע נוסף */}
// // // // // // //                           <Box className="course-chips">
// // // // // // //                             <Chip
// // // // // // //                               icon={<GroupIcon />}
// // // // // // //                               label={`${course.currentAmountOfStudents || 0}/${course.amountOfStudentsInCourse || 0}`}
// // // // // // //                               className="info-chip students-chip"
// // // // // // //                               size="small"
// // // // // // //                             />

// // // // // // //                             {course.numberOfMeetings && (
// // // // // // //                               <Chip
// // // // // // //                                 icon={<CalendarIcon />}
// // // // // // //                                 label={`${course.numberOfMeetings} מפגשים`}
// // // // // // //                                 className="info-chip meetings-chip"
// // // // // // //                                 size="small"
// // // // // // //                               />
// // // // // // //                             )}

// // // // // // //                             {course.priceOfCourse && (
// // // // // // //                               <Chip
// // // // // // //                                 icon={<MoneyIcon />}
// // // // // // //                                 label={`₪${course.priceOfCourse}`}
// // // // // // //                                 className="info-chip price-chip"
// // // // // // //                                 size="small"
// // // // // // //                               />
// // // // // // //                             )}
// // // // // // //                           </Box>

// // // // // // //                           {/* מידע על המרצה */}
// // // // // // //                           {course.instructorName && (
// // // // // // //                             <Box className="instructor-info">
// // // // // // //                               <Avatar className="instructor-avatar">
// // // // // // //                                 {getInstructorInitials(course.instructorName)}
// // // // // // //                               </Avatar>
// // // // // // //                               <Typography variant="body2" className="instructor-name">
// // // // // // //                                 {course.instructorName}
// // // // // // //                               </Typography>
// // // // // // //                             </Box>
// // // // // // //                           )}

// // // // // // //                           {/* כפתור צפייה בפרטים */}
// // // // // // //                           <Button
// // // // // // //                             variant="contained"
// // // // // // //                             fullWidth
// // // // // // //                             className="view-details-button"
// // // // // // //                             startIcon={<VisibilityIcon />}
// // // // // // //                             onClick={(e) => {
// // // // // // //                               e.stopPropagation();
// // // // // // //                               handleCourseSelect(course);
// // // // // // //                             }}
// // // // // // //                           >
// // // // // // //                             צפה בפרטים
// // // // // // //                           </Button>
// // // // // // //                         </CardContent>
// // // // // // //                       </Card>
// // // // // // //                     </div>
// // // // // // //                   </Grid>
// // // // // // //                 ))}
// // // // // // //               </Grid>
// // // // // // //             </Box>

// // // // // // //             {/* מידע על מספר הקורסים */}
// // // // // // //             <Paper className="courses-info" elevation={0}>
// // // // // // //               <Typography variant="body1" className="courses-count">
// // // // // // //                 מציג {filteredCourses.length} מתוך {courses.length} קורסים
// // // // // // //               </Typography>
// // // // // // //             </Paper>
// // // // // // //           </>
// // // // // // //         ) : (
// // // // // // //           /* מסך כשאין קורסים */
// // // // // // //           <Box className="no-courses-container">
// // // // // // //             <Paper className="no-courses-content" elevation={0}>
// // // // // // //             <Box className="no-courses-icon">
// // // // // // //                 <SchoolIcon />
// // // // // // //               </Box>
// // // // // // //               <Typography variant="h5" className="no-courses-title">
// // // // // // //                 {searchTerm ? 'לא נמצאו קורסים' : 'אין קורסים זמינים'}
// // // // // // //               </Typography>
// // // // // // //               <Typography variant="body1" className="no-courses-text">
// // // // // // //                 {searchTerm 
// // // // // // //                   ? `לא נמצאו קורסים התואמים לחיפוש "${searchTerm}"`
// // // // // // //                   : 'כרגע אין קורסים זמינים במערכת'
// // // // // // //                 }
// // // // // // //               </Typography>
// // // // // // //               {searchTerm && (
// // // // // // //                 <Button
// // // // // // //                   variant="outlined"
// // // // // // //                   className="clear-search-button"
// // // // // // //                   onClick={() => setSearchTerm('')}
// // // // // // //                 >
// // // // // // //                   נקה חיפוש
// // // // // // //                 </Button>
// // // // // // //               )}
// // // // // // //             </Paper>
// // // // // // //           </Box>
// // // // // // //         )}
// // // // // // //       </Container>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default HomeGoodNice;
// // // // import React, { useEffect, useState, useMemo } from 'react';
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import { getAllCoursesThunk } from '../../redux/Thunks/getAllCoursesThunk';
// // // // // הסרת הייבוא של setSelectedCourse שלא קיים
// // // // import { useNavigate } from 'react-router-dom';

// // // // import {
// // // //   Container,
// // // //   Grid,
// // // //   Card,
// // // //   CardMedia,
// // // //   CardContent,
// // // //   Typography,
// // // //   TextField,
// // // //   InputAdornment,
// // // //   Box,
// // // //   Chip,
// // // //   Avatar,
// // // //   Button,
// // // //   IconButton,
// // // //   CircularProgress,
// // // //   Paper,
// // // //   Tooltip,
// // // //   Zoom,
// // // //   LinearProgress
// // // // } from '@mui/material';

// // // // import {
// // // //   Search as SearchIcon,
// // // //   LocationOn as LocationIcon,
// // // //   Schedule as ScheduleIcon,
// // // //   Person as PersonIcon,
// // // //   School as SchoolIcon,
// // // //   Visibility as VisibilityIcon,
// // // //   Edit as EditIcon,
// // // //   Delete as DeleteIcon,
// // // //   CalendarToday as CalendarIcon,
// // // //   AttachMoney as MoneyIcon,
// // // //   Group as GroupIcon,
// // // //   Star as StarIcon,
// // // //   TrendingUp as TrendingIcon
// // // // } from '@mui/icons-material';

// // // // import './HomeGoodNice.css';
// // // // import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';

// // // // export const HomeGoodNice = () => {
// // // //   const dispatch = useDispatch();
// // // //   const navigate = useNavigate();

// // // //   const courses = useSelector(state => state.courses.allCourses || []);
// // // //   const loading = useSelector(state => state.courses.loading);

// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [isLoading, setIsLoading] = useState(true);

// // // //   // טעינת קורסים בעת טעינת הקומפוננט
// // // //   useEffect(() => {
// // // //     const fetchCourses = async () => {
// // // //       setIsLoading(true);
// // // //       try {
// // // //         await dispatch(getAllCoursesThunk());
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     };
// // // //     fetchCourses();
// // // //   }, [dispatch]);

// // // //   // סינון קורסים לפי מונח החיפוש
// // // //   const filteredCourses = useMemo(() => {
// // // //     if (!searchTerm.trim()) return courses;

// // // //     return courses.filter(course =>
// // // //       course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //       course.categoryOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //       course.instructorName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //       course.locationOfCourse?.toLowerCase().includes(searchTerm.toLowerCase())
// // // //     );
// // // //   }, [courses, searchTerm]);

// // // //   // חישוב סטטיסטיקות
// // // //   const stats = useMemo(() => ({
// // // //     totalCourses: courses.length,
// // // //     totalStudents: courses.reduce((sum, course) => sum + (course.currentAmountOfStudents || 0), 0),
// // // //     availableSeats: courses.reduce((sum, course) => 
// // // //       sum + ((course.amountOfStudentsInCourse || 0) - (course.currentAmountOfStudents || 0)), 0)
// // // //   }), [courses]);

// // // //   // פונקציה לבחירת קורס - ללא setSelectedCourse
// // // //   const handleCourseSelect = async (course) => {
// // // //     try {
// // // //       // קודם נקרא לפונקציה לקבלת פרטי הקורס
// // // //       await dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
// // // //       // ואז ננווט לעמוד הפרטים
// // // //       navigate(`/ShowCourse/${course.idOfCourse}`);
// // // //     } catch (error) {
// // // //       console.error('Error selecting course:', error);
// // // //     }
// // // //   };

// // // //   // פונקציה לעריכת קורס - ללא setSelectedCourse
// // // //   const handleEditCourse = async (course, event) => {
// // // //     event.stopPropagation();
// // // //     try {
// // // //       // קודם נקרא לפונקציה לקבלת פרטי הקורס
// // // //       await dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
// // // //       // ואז ננווט לעמוד העריכה
// // // //       navigate(`/edit-course/${course.idOfCourse}`);
// // // //     } catch (error) {
// // // //       console.error('Error editing course:', error);
// // // //     }
// // // //   };

// // // //   // פונקציה למחיקת קורס
// // // //   const handleDeleteCourse = (courseId, event) => {
// // // //     event.stopPropagation();
// // // //     // כאן תוכל להוסיף לוגיקת מחיקה
// // // //     console.log('Delete course:', courseId);
// // // //     // אם יש לך thunk למחיקה, תוכל להשתמש בו כך:
// // // //     // dispatch(deleteCourseThunk(courseId));
// // // //   };

// // // //   // פונקציה לקבלת תמונת קורס או תמונת ברירת מחדל
// // // //   const getCourseImage = (course) => {
// // // //     // אם יש תמונה ספציפית לקורס, השתמש בה
// // // //     if (course.image) return course.image;

// // // //   };

// // // //   // פונקציה לקבלת ראשי תיבות של שם המרצה
// // // //   const getInstructorInitials = (name) => {
// // // //     if (!name) return 'מ';
// // // //     const words = name.split(' ');
// // // //     return words.length > 1 
// // // //       ? `${words[0][0]}${words[1][0]}` 
// // // //       : name[0];
// // // //   };

// // // //   // פונקציה לחישוב אחוז התקדמות
// // // //   const getProgressPercentage = (current, total) => {
// // // //     if (!total) return 0;
// // // //     return Math.min((current / total) * 100, 100);
// // // //   };

// // // //   // פונקציה לבדיקה אם קורס פופולרי
// // // //   const isPopularCourse = (course) => {
// // // //     const enrollmentRate = (course.currentAmountOfStudents || 0) / (course.amountOfStudentsInCourse || 1);
// // // //     return enrollmentRate > 0.7;
// // // //   };

// // // //   // מסך טעינה
// // // //   if (isLoading) {
// // // //     return (
// // // //       <div className="loading-overlay">
// // // //         <div className="loading-content">
// // // //           <CircularProgress className="loading-spinner" size={80} />
// // // //           <Typography variant="h6" className="loading-text">
// // // //             טוען קורסים...
// // // //           </Typography>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="home-page-wrapper">
// // // //       <Container maxWidth="xl" className="home-dashboard">

// // // //         {/* כותרת ראשית */}
// // // //         <Paper className="home-header" elevation={0}>
// // // //           <Typography variant="h3" className="home-title">
// // // //             ברוכים הבאים למערכת הקורסים
// // // //           </Typography>
// // // //           <Typography variant="h6" className="home-subtitle">
// // // //             גלו את מגוון הקורסים שלנו ובחרו את המתאים ביותר עבורכם
// // // //           </Typography>
// // // //         </Paper>

// // // //         {/* סקציית סטטיסטיקות */}
// // // //         <Box className="stats-container">
// // // //           <Grid container spacing={3}>
// // // //             <Grid item xs={12} md={4}>
// // // //               <Card className="stat-card courses-stat">
// // // //                 <CardContent>
// // // //                   <Box className="stat-content">
// // // //                     <SchoolIcon className="stat-icon" />
// // // //                     <Box>
// // // //                       <Typography variant="h4" className="stat-number">
// // // //                         {stats.totalCourses}
// // // //                       </Typography>
// // // //                       <Typography variant="body1" className="stat-label">
// // // //                         קורסים זמינים
// // // //                       </Typography>
// // // //                     </Box>
// // // //                   </Box>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </Grid>

// // // //             <Grid item xs={12} md={4}>
// // // //               <Card className="stat-card students-stat">
// // // //                 <CardContent>
// // // //                   <Box className="stat-content">
// // // //                     <GroupIcon className="stat-icon" />
// // // //                     <Box>
// // // //                       <Typography variant="h4" className="stat-number">
// // // //                         {stats.totalStudents}
// // // //                       </Typography>
// // // //                       <Typography variant="body1" className="stat-label">
// // // //                         סטודנטים רשומים
// // // //                       </Typography>
// // // //                     </Box>
// // // //                   </Box>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </Grid>

// // // //             <Grid item xs={12} md={4}>
// // // //               <Card className="stat-card seats-stat">
// // // //                 <CardContent>
// // // //                   <Box className="stat-content">
// // // //                     <TrendingIcon className="stat-icon" />
// // // //                     <Box>
// // // //                       <Typography variant="h4" className="stat-number">
// // // //                         {stats.availableSeats}
// // // //                       </Typography>
// // // //                       <Typography variant="body1" className="stat-label">
// // // //                         מקומות פנויים
// // // //                       </Typography>
// // // //                     </Box>
// // // //                   </Box>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </Grid>
// // // //           </Grid>
// // // //         </Box>

// // // //         {/* סקציית חיפוש */}
// // // //         <Paper className="search-container" elevation={0}>
// // // //           <TextField
// // // //             fullWidth
// // // //             variant="outlined"
// // // //             placeholder="חפש קורס לפי שם, קטגוריה, מרצה או מיקום..."
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="search-field"
// // // //             InputProps={{
// // // //               startAdornment: (
// // // //                 <InputAdornment position="start">
// // // //                   <SearchIcon className="search-icon" />
// // // //                 </InputAdornment>
// // // //               ),
// // // //             }}
// // // //           />
// // // //         </Paper>

// // // //         {/* רשת הקורסים */}
// // // //         {filteredCourses.length > 0 ? (
// // // //           <>
// // // //             <Box className="courses-grid-container">
// // // //               <Grid container spacing={4}>
// // // //                 {filteredCourses.map((course) => (
// // // //                   <Grid item xs={12} sm={6} lg={4} key={course.idOfCourse}>
// // // //                     <div className="course-card-wrapper">
// // // //                       <Card 
// // // //                         className="course-card"
// // // //                         onClick={() => handleCourseSelect(course)}
// // // //                       >
// // // //                         {/* רקע תמונה לכרטיס הקורס */}
// // // //                         <CardMedia
// // // //                           component="img"
// // // //                           image={`https://localhost:7092${course.image}`}
// // // //                           alt={course.nameOfCourse}
// // // //                           className="course-image"
// // // //                         />

// // // //                         {/* תגיות הקורס */}
// // // //                         <Box className="course-card-badges">
// // // //                           {isPopularCourse(course) && (
// // // //                             <Chip
// // // //                               icon={<StarIcon />}
// // // //                               label="פופולרי"
// // // //                               className="popular-badge"
// // // //                               size="small"
// // // //                             />
// // // //                           )}
// // // //                           {course.categoryOfCourse && (
// // // //                             <Chip
// // // //                               label={course.categoryOfCourse}
// // // //                               className="category-badge"
// // // //                               size="small"
// // // //                             />
// // // //                           )}
// // // //                         </Box>

// // // //                         {/* מחוון התקדמות */}
// // // //                         <LinearProgress
// // // //                           variant="determinate"
// // // //                           value={getProgressPercentage(
// // // //                             course.currentAmountOfStudents,
// // // //                             course.amountOfStudentsInCourse
// // // //                           )}
// // // //                           className="progress-indicator"
// // // //                         />

// // // //                         {/* תוכן הכרטיס */}
// // // //                         <CardContent className="course-card-content">

// // // //                           {/* כותרת הקורס וכפתורי פעולה */}
// // // //                           <Box className="course-card-header">
// // // //                             <Typography variant="h5" className="course-title">
// // // //                               {course.nameOfCourse}
// // // //                             </Typography>

// // // //                             <Box className="course-actions">
// // // //                               <Tooltip title="צפה בפרטים" TransitionComponent={Zoom}>
// // // //                                 <IconButton 
// // // //                                   className="action-button"
// // // //                                   onClick={(e) => {
// // // //                                     e.stopPropagation();
// // // //                                     handleCourseSelect(course);
// // // //                                   }}
// // // //                                 >
// // // //                                   <VisibilityIcon />
// // // //                                 </IconButton>
// // // //                               </Tooltip>

// // // //                               <Tooltip title="ערוך קורס" TransitionComponent={Zoom}>
// // // //                                 <IconButton 
// // // //                                   className="action-button"
// // // //                                   onClick={(e) => handleEditCourse(course, e)}
// // // //                                 >
// // // //                                   <EditIcon />
// // // //                                 </IconButton>
// // // //                               </Tooltip>

// // // //                               <Tooltip title="מחק קורס" TransitionComponent={Zoom}>
// // // //                                 <IconButton 
// // // //                                   className="action-button delete-button"
// // // //                                   onClick={(e) => handleDeleteCourse(course.idOfCourse, e)}
// // // //                                 >
// // // //                                   <DeleteIcon />
// // // //                                 </IconButton>
// // // //                               </Tooltip>
// // // //                             </Box>
// // // //                           </Box>

// // // //                           {/* מידע על הקורס */}
// // // //                           <Box className="course-info">
// // // //                             {course.locationOfCourse && (
// // // //                               <Box className="info-item">
// // // //                                 <LocationIcon className="info-icon" />
// // // //                                 <Typography variant="body2" className="location-text">
// // // //                                   {course.locationOfCourse}
// // // //                                 </Typography>
// // // //                               </Box>
// // // //                             )}

// // // //                             {course.dayOfCourse && (
// // // //                               <Box className="info-item">
// // // //                                 <CalendarIcon className="info-icon" />
// // // //                                 <Typography variant="body2">
// // // //                                   {course.dayOfCourse}
// // // //                                 </Typography>
// // // //                               </Box>
// // // //                             )}

// // // //                             {course.startDateOfCourse && (
// // // //                               <Box className="info-item">
// // // //                                 <ScheduleIcon className="info-icon" />
// // // //                                 <Typography variant="body2">
// // // //                                   {new Date(course.startDateOfCourse).toLocaleDateString('he-IL')}
// // // //                                 </Typography>
// // // //                               </Box>
// // // //                             )}
// // // //                           </Box>

// // // //                           {/* תיאור הקורס */}
// // // //                           {course.description && (
// // // //                             <Typography variant="body2" className="course-description">
// // // //                               {course.description}
// // // //                             </Typography>
// // // //                           )}

// // // //                           {/* צ'יפים עם מידע נוסף */}
// // // //                           <Box className="course-chips">
// // // //                             <Chip
// // // //                               icon={<GroupIcon />}
// // // //                               label={`${course.currentAmountOfStudents || 0}/${course.amountOfStudentsInCourse || 0}`}
// // // //                               className="info-chip students-chip"
// // // //                               size="small"
// // // //                             />

// // // //                             {course.numberOfMeetings && (
// // // //                               <Chip
// // // //                                 icon={<CalendarIcon />}
// // // //                                 label={`${course.numberOfMeetings} מפגשים`}
// // // //                                 className="info-chip meetings-chip"
// // // //                                 size="small"
// // // //                               />
// // // //                             )}

// // // //                             {course.priceOfCourse && (
// // // //                               <Chip
// // // //                                 icon={<MoneyIcon />}
// // // //                                 label={`₪${course.priceOfCourse}`}
// // // //                                 className="info-chip price-chip"
// // // //                                 size="small"
// // // //                               />
// // // //                             )}
// // // //                           </Box>

// // // //                           {/* מידע על המרצה */}
// // // //                           {course.instructorName && (
// // // //                             <Box className="instructor-info">
// // // //                               <Avatar className="instructor-avatar">
// // // //                                 {getInstructorInitials(course.instructorName)}
// // // //                               </Avatar>
// // // //                               <Typography variant="body2" className="instructor-name">
// // // //                                 {course.instructorName}
// // // //                               </Typography>
// // // //                             </Box>
// // // //                           )}

// // // //                           {/* כפתור צפייה בפרטים */}
// // // //                           <Button
// // // //                             variant="contained"
// // // //                             fullWidth
// // // //                             className="view-details-button"
// // // //                             startIcon={<VisibilityIcon />}
// // // //                             onClick={(e) => {
// // // //                               e.stopPropagation();
// // // //                               handleCourseSelect(course);
// // // //                             }}
// // // //                           >
// // // //                             צפה בפרטים
// // // //                           </Button>
// // // //                         </CardContent>
// // // //                       </Card>
// // // //                     </div>
// // // //                   </Grid>
// // // //                 ))}
// // // //               </Grid>
// // // //             </Box>

// // // //             {/* מידע על מספר הקורסים */}
// // // //             <Paper className="courses-info" elevation={0}>
// // // //               <Typography variant="body1" className="courses-count">
// // // //                 מציג {filteredCourses.length} מתוך {courses.length} קורסים
// // // //               </Typography>
// // // //             </Paper>
// // // //           </>
// // // //         ) : (
// // // //           /* מסך כשאין קורסים */
// // // //           <Box className="no-courses-container">
// // // //             <Paper className="no-courses-content" elevation={0}>
// // // //               <Box className="no-courses-icon">
// // // //                 <SchoolIcon />
// // // //               </Box>
// // // //               <Typography variant="h5" className="no-courses-title">
// // // //                 {searchTerm ? 'לא נמצאו קורסים' : 'אין קורסים זמינים'}
// // // //               </Typography>
// // // //               <Typography variant="body1" className="no-courses-text">
// // // //                 {searchTerm 
// // // //                   ? `לא נמצאו קורסים התואמים לחיפוש "${searchTerm}"`
// // // //                   : 'כרגע אין קורסים זמינים במערכת'
// // // //                 }
// // // //               </Typography>
// // // //               {searchTerm && (
// // // //                 <Button
// // // //                   variant="outlined"
// // // //                   className="clear-search-button"
// // // //                   onClick={() => setSearchTerm('')}
// // // //                 >
// // // //                   נקה חיפוש
// // // //                 </Button>
// // // //               )}
// // // //             </Paper>
// // // //           </Box>
// // // //         )}
// // // //       </Container>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomeGoodNice;
// // // import React, { useEffect, useState, useMemo } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { getAllCoursesThunk } from '../../redux/Thunks/getAllCoursesThunk';
// // // import { useNavigate } from 'react-router-dom';

// // // import {
// // //   Container,
// // //   Grid,
// // //   Card,
// // //   CardMedia,
// // //   CardContent,
// // //   Typography,
// // //   TextField,
// // //   InputAdornment,
// // //   Box,
// // //   Chip,
// // //   CircularProgress,
// // //   Paper
// // // } from '@mui/material';

// // // import {
// // //   Search as SearchIcon,
// // //   LocationOn as LocationIcon,
// // //   CalendarToday as CalendarIcon,
// // //   Group as GroupIcon,
// // //   AttachMoney as MoneyIcon
// // // } from '@mui/icons-material';

// // // import './HomeGoodNice4.css';
// // // import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';

// // // export const HomeGoodNice = () => {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();

// // //   const courses = useSelector(state => state.courses.allCourses || []);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [isLoading, setIsLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchCourses = async () => {
// // //       setIsLoading(true);
// // //       try {
// // //         await dispatch(getAllCoursesThunk());
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };
// // //     fetchCourses();
// // //   }, [dispatch]);

// // //   const filteredCourses = useMemo(() => {
// // //     if (!searchTerm.trim()) return courses;

// // //     return courses.filter(course =>
// // //       course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //       course.categoryOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //       course.instructorName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //       course.locationOfCourse?.toLowerCase().includes(searchTerm.toLowerCase())
// // //     );
// // //   }, [courses, searchTerm]);

// // //   const handleCourseSelect = async (course) => {
// // //     try {
// // //       await dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
// // //       navigate(`/ShowCourse/${course.idOfCourse}`);
// // //     } catch (error) {
// // //       console.error('Error selecting course:', error);
// // //     }
// // //   };

// // //   if (isLoading) {
// // //     return (
// // //       <div className="loading-overlay">
// // //         <CircularProgress className="loading-spinner" size={60} />
// // //         <Typography variant="h6" className="loading-text">
// // //           טוען קורסים...
// // //         </Typography>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="home-page-wrapper">
// // //       <Container maxWidth="xl" className="home-dashboard">

// // //         {/* Search Section */}
// // //         <Paper className="search-container" elevation={0}>
// // //           <TextField
// // //             fullWidth
// // //             variant="outlined"
// // //             placeholder="חפש קורס..."
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             className="search-field"
// // //             InputProps={{
// // //               startAdornment: (
// // //                 <InputAdornment position="start">
// // //                   <SearchIcon className="search-icon" />
// // //                 </InputAdornment>
// // //               ),
// // //             }}
// // //           />
// // //         </Paper>

// // //         {/* Courses Grid */}
// // //         {filteredCourses.length > 0 ? (
// // //           <Box className="courses-grid-container">
// // //             <Grid container spacing={3}>
// // //               {filteredCourses.map((course) => (
// // //                 <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse}>
// // //                   <Card 
// // //                     className="course-card"
// // //                     onClick={() => handleCourseSelect(course)}
// // //                   >
// // //                     {/* Course Content - Top */}
// // //                     <CardContent className="course-content">

// // //                       {/* Course Title */}
// // //                       <Typography variant="h6" className="course-title">
// // //                         {course.nameOfCourse}
// // //                       </Typography>

// // //                       {/* Course Category */}
// // //                       {course.categoryOfCourse && (
// // //                         <Chip
// // //                           label={course.categoryOfCourse}
// // //                           className="category-chip"
// // //                           size="small"
// // //                         />
// // //                       )}

// // //                       {/* Course Info */}
// // //                       <Box className="course-info">
// // //                         {course.locationOfCourse && (
// // //                           <Box className="info-item">
// // //                             <LocationIcon className="info-icon" />
// // //                             <Typography variant="body2">
// // //                               {course.locationOfCourse}
// // //                             </Typography>
// // //                           </Box>
// // //                         )}

// // //                         {course.dayOfCourse && (
// // //                           <Box className="info-item">
// // //                             <CalendarIcon className="info-icon" />
// // //                             <Typography variant="body2">
// // //                               {course.dayOfCourse}
// // //                             </Typography>
// // //                           </Box>
// // //                         )}
// // //                       </Box>

// // //                       {/* Course Stats */}
// // //                       <Box className="course-stats">
// // //                         <Chip
// // //                           icon={<GroupIcon />}
// // //                           label={`${course.currentAmountOfStudents || 0}/${course.amountOfStudentsInCourse || 0}`}
// // //                           className="stat-chip"
// // //                           size="small"
// // //                         />

// // //                         {course.priceOfCourse && (
// // //                           <Chip
// // //                             icon={<MoneyIcon />}
// // //                             label={`₪${course.priceOfCourse}`}
// // //                             className="price-chip"
// // //                             size="small"
// // //                           />
// // //                         )}
// // //                       </Box>
// // //                     </CardContent>

// // //                     {/* Course Image - Bottom */}
// // //                     <CardMedia
// // //                       component="img"
// // //                       image={`https://localhost:7092${course.image}`}
// // //                       alt={course.nameOfCourse}
// // //                       className="course-image"
// // //                     />
// // //                   </Card>
// // //                 </Grid>
// // //               ))}
// // //             </Grid>
// // //           </Box>
// // //         ) : (
// // //           <Box className="no-courses-container">
// // //             <Typography variant="h6" className="no-courses-text">
// // //               {searchTerm ? 'לא נמצאו קורסים' : 'אין קורסים זמינים'}
// // //             </Typography>
// // //           </Box>
// // //         )}
// // //       </Container>
// // //     </div>
// // //   );
// // // };

// // // export default HomeGoodNice;

// // import React, { useEffect, useState, useMemo } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getAllCoursesThunk } from '../../redux/Thunks/getAllCoursesThunk';
// // import { useNavigate } from 'react-router-dom';

// // import {
// //   Container,
// //   Grid,
// //   Card,
// //   CardMedia,
// //   CardContent,
// //   Typography,
// //   TextField,
// //   InputAdornment,
// //   Box,
// //   Chip,
// //   CircularProgress,
// //   Paper,
// //   LinearProgress
// // } from '@mui/material';

// // import {
// //   Search as SearchIcon,
// //   CalendarToday as CalendarIcon,
// //   Group as GroupIcon,
// //   AttachMoney as MoneyIcon,
// //   Schedule as ScheduleIcon,
// //   DateRange as DateRangeIcon,
// //   Person as PersonIcon,
// //   TrendingUp as TrendingIcon,
// //   EventAvailable as EventAvailableIcon
// // } from '@mui/icons-material';

// // import './HomeGoodNice7.css';
// // import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';

// // export const HomeGoodNice = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const courses = useSelector(state => state.courses.allCourses || []);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       setIsLoading(true);
// //       try {
// //         await dispatch(getAllCoursesThunk());
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
// //     fetchCourses();
// //   }, [dispatch]);

// //   const filteredCourses = useMemo(() => {
// //     if (!searchTerm.trim()) return courses;

// //     return courses.filter(course =>
// //       course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       course.dayOfCourse?.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
// //   }, [courses, searchTerm]);

// //   const handleCourseSelect = async (course) => {
// //     try {
// //       await dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
// //       navigate(`/ShowCourse/${course.idOfCourse}`);
// //     } catch (error) {
// //       console.error('Error selecting course:', error);
// //     }
// //   };

// //   // Format date function
// //   const formatDate = (dateString) => {
// //     if (!dateString) return '';
// //     try {
// //       return new Date(dateString).toLocaleDateString('he-IL');
// //     } catch {
// //       return dateString;
// //     }
// //   };

// //   // Calculate enrollment percentage
// //   const getEnrollmentPercentage = (current, total) => {
// //     if (!total || total === 0) return 0;
// //     return Math.min((current / total) * 100, 100);
// //   };

// //   // Get available spots
// //   const getAvailableSpots = (current, total) => {
// //     return Math.max((total || 0) - (current || 0), 0);
// //   };

// //   if (isLoading) {
// //     return (
// //       <div className="loading-overlay">
// //         <CircularProgress className="loading-spinner" size={60} />
// //         <Typography variant="h6" className="loading-text">
// //           טוען קורסים...
// //         </Typography>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="home-page-wrapper">
// //       <Container maxWidth="xl" className="home-dashboard">

// //         {/* Search Section */}
// //         <Paper className="search-container" elevation={0}>
// //           <TextField
// //             fullWidth
// //             variant="outlined"
// //             placeholder="חפש קורס לפי שם או יום..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="search-field"
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="start">
// //                   <SearchIcon className="search-icon" />
// //                 </InputAdornment>
// //               ),
// //             }}
// //           />
// //         </Paper>

// //         {/* Courses Grid */}
// //         {filteredCourses.length > 0 ? (
// //           <Box className="courses-grid-container">
// //             <Grid container spacing={3}>
// //               {filteredCourses.map((course) => (
// //                 <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse}>
// //                   <Card 
// //                     className="course-card"
// //                     onClick={() => handleCourseSelect(course)}
// //                   >
// //                     {/* Course Image - Top & Dominant */}
// //                     <CardMedia
// //                       component="img"
// //                       image={`https://localhost:7092${course.image}`}
// //                       alt={course.nameOfCourse}
// //                       className="course-image"
// //                     />

// //                     {/* Enrollment Progress Bar */}
// //                     <LinearProgress
// //                       variant="determinate"
// //                       value={getEnrollmentPercentage(course.currentAmountOfStudents, course.amountOfStudentsInCourse)}
// //                       className="enrollment-progress"
// //                     />

// //                     {/* Course Content - Bottom */}
// //                     <CardContent className="course-content">

// //                       {/* Course Title */}
// //                       <Typography variant="h6" className="course-title">
// //                         {course.nameOfCourse}
// //                       </Typography>

// //                       {/* Main Course Info Grid */}
// //                       <Box className="course-info-grid">

// //                         {/* Students Info */}
// //                         <Box className="info-item students-info">
// //                           <GroupIcon className="info-icon" />
// //                           <Box className="info-text">
// //                             <Typography variant="body2" className="info-label">
// //                               נרשמו
// //                             </Typography>
// //                             <Typography variant="body1" className="info-value">
// //                               {course.currentAmountOfStudents || 0}/{course.amountOfStudentsInCourse || 0}
// //                             </Typography>
// //                           </Box>
// //                         </Box>

// //                         {/* Available Spots */}
// //                         <Box className="info-item spots-info">
// //                           <TrendingIcon className="info-icon" />
// //                           <Box className="info-text">
// //                             <Typography variant="body2" className="info-label">
// //                               מקומות פנויים
// //                             </Typography>
// //                             <Typography variant="body1" className="info-value">
// //                               {getAvailableSpots(course.currentAmountOfStudents, course.amountOfStudentsInCourse)}
// //                             </Typography>
// //                           </Box>
// //                         </Box>

// //                         {/* Day of Course */}
// //                         {course.dayOfCourse && (
// //                           <Box className="info-item day-info">
// //                             <CalendarIcon className="info-icon" />
// //                             <Box className="info-text">
// //                               <Typography variant="body2" className="info-label">
// //                                 יום
// //                               </Typography>
// //                               <Typography variant="body1" className="info-value">
// //                                 {course.dayOfCourse}
// //                               </Typography>
// //                             </Box>
// //                           </Box>
// //                         )}

// //                         {/* Start Date */}
// //                         {course.startDateOfCourse && (
// //                           <Box className="info-item date-info">
// //                             <DateRangeIcon className="info-icon" />
// //                             <Box className="info-text">
// //                               <Typography variant="body2" className="info-label">
// //                                 תאריך התחלה
// //                               </Typography>
// //                               <Typography variant="body1" className="info-value">
// //                                 {formatDate(course.startDateOfCourse)}
// //                               </Typography>
// //                             </Box>
// //                           </Box>
// //                         )}

// //                         {/* Number of Meetings */}
// //                         {course.amountOfMeetingsInCourse && (
// //                           <Box className="info-item meetings-info">
// //                             <EventAvailableIcon className="info-icon" />
// //                             <Box className="info-text">
// //                               <Typography variant="body2" className="info-label">
// //                                 מפגשים
// //                               </Typography>
// //                               <Typography variant="body1" className="info-value">
// //                                 {course.amountOfMeetingsInCourse}
// //                               </Typography>
// //                             </Box>
// //                           </Box>
// //                         )}

// //                         {/* Speaker ID */}
// //                         {course.idOfSpeaker && (
// //                           <Box className="info-item speaker-info">
// //                             <PersonIcon className="info-icon" />
// //                             <Box className="info-text">
// //                               <Typography variant="body2" className="info-label">
// //                                 מרצה
// //                               </Typography>
// //                               <Typography variant="body1" className="info-value">
// //                                 #{course.idOfSpeaker}
// //                               </Typography>
// //                             </Box>
// //                           </Box>
// //                         )}
// //                       </Box>

// //                       {/* Price Chip */}
// //                       {course.totalSumOfCourse && (
// //                         <Box className="price-section">
// //                           <Chip
// //                             icon={<MoneyIcon />}
// //                             label={`₪${course.totalSumOfCourse}`}
// //                             className="price-chip"
// //                             size="medium"
// //                           />
// //                         </Box>
// //                       )}
// //                     </CardContent>
// //                   </Card>
// //                 </Grid>
// //               ))}
// //             </Grid>
// //           </Box>
// //         ) : (
// //           <Box className="no-courses-container">
// //             <Typography variant="h6" className="no-courses-text">
// //               {searchTerm ? 'לא נמצאו קורסים' : 'אין קורסים זמינים'}
// //             </Typography>
// //           </Box>
// //         )}
// //       </Container>
// //     </div>
// //   );
// // };

// // export default HomeGoodNice;



// import React, { useEffect, useState, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCoursesThunk } from '../../redux/Thunks/getAllCoursesThunk';
// import { useNavigate } from 'react-router-dom';

// // Material UI Components
// import {
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   TextField,
//   InputAdornment,
//   Box,
//   Chip,
//   CircularProgress,
//   Paper,
//   LinearProgress
// } from '@mui/material';

// // Material UI Icons
// import {
//   Search as SearchIcon,
//   LocationOn as LocationIcon,
//   Schedule as ScheduleIcon,
//   Person as PersonIcon,
//   School as SchoolIcon,
//   CalendarToday as CalendarIcon,
//   AttachMoney as MoneyIcon,
//   Group as GroupIcon,
//   EventNote as EventNoteIcon
// } from '@mui/icons-material';

// // Styles
// import './HomeGoodNice8.css';
// import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';

// export const HomeGoodNice = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const courses = useSelector(state => state.courses.allCourses || []);
//   const loading = useSelector(state => state.courses.loading);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch courses on component mount
//   useEffect(() => {
//     const fetchCourses = async () => {
//       setIsLoading(true);
//       try {
//         await dispatch(getAllCoursesThunk());
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchCourses();
//   }, [dispatch]);

//   // Filter courses based on search term
//   const filteredCourses = useMemo(() => {
//     if (!searchTerm.trim()) return courses;

//     return courses.filter(course =>
//       course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.categoryOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.instructorName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.locationOfCourse?.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [courses, searchTerm]);

//   // Handle course selection
//   const handleCourseSelect = (course) => {
//     dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
//     navigate(`/course-details/${course.idOfCourse}`);
//   };

//   // Get course image or default
//   const getCourseImage = (course) => {
//     return course.imageUrl || course.image || '/images/default-course.jpg';
//   };

//   // Calculate progress percentage
//   const getProgressPercentage = (current, total) => {
//     if (!total) return 0;
//     return Math.min((current / total) * 100, 100);
//   };

//   // Format price display
//   const formatPrice = (price) => {
//     if (!price || price === 0) return 'חינם';
//     return `₪${price}`;
//   };

//   // Check if course is free
//   const isFreeOrZeroPrice = (price) => {
//     return !price || price === 0;
//   };

//   // Loading screen
//   if (isLoading) {
//     return (
//       <div className="loading-overlay">
//         <CircularProgress className="loading-spinner" size={80} />
//         <Typography variant="h6" className="loading-text">
//           טוען קורסים...
//         </Typography>
//       </div>
//     );
//   }

//   return (
//     <div className="home-page-wrapper">
//       <Container maxWidth="xl" className="home-dashboard">

//         {/* Search Section */}
//         <Paper className="search-container" elevation={0}>
//           <TextField
//             fullWidth
//             variant="outlined"
//             placeholder="חפש קורס לפי שם, קטגוריה, מרצה או מיקום..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-field"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon className="search-icon" />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Paper>

//         {/* Courses Grid */}
//         {filteredCourses.length > 0 ? (
//           <div className="courses-grid-container">
//             <Grid container spacing={3}>
//               {filteredCourses.map((course) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={course.idOfCourse}>
//                   <Card 
//                     className="course-card"
//                     onClick={() => handleCourseSelect(course)}
//                   >
//                     {/* Course Image */}
//                     <CardMedia
//                       component="img"
//                       image={`https://localhost:7092${course.image}`}
//                       alt={course.nameOfCourse}
//                       className="course-image"
//                     />

//                     {/* Progress Bar */}
//                     <LinearProgress
//                       variant="determinate"
//                       value={getProgressPercentage(
//                         course.currentAmountOfStudents,
//                         course.amountOfStudentsInCourse
//                       )}
//                       className="enrollment-progress"
//                     />

//                     {/* Course Content */}
//                     <CardContent className="course-content">

//                       {/* Course Title */}
//                       <Typography variant="h6" className="course-title">
//                         {course.nameOfCourse}
//                       </Typography>

//                       {/* Course Info Grid */}
//                       <div className="course-info-grid">

//                         {/* Students Info */}
//                         <div className="info-item students-info">
//                           <GroupIcon className="info-icon" />
//                           <div className="info-text">
//                             <Typography variant="caption" className="info-label">
//                               רשומים
//                             </Typography>
//                             <Typography variant="body2" className="info-value">
//                               {course.currentAmountOfStudents || 0}
//                             </Typography>
//                           </div>
//                         </div>

//                         {/* Available Spots */}
//                         <div className="info-item spots-info">
//                           <PersonIcon className="info-icon" />
//                           <div className="info-text">
//                             <Typography variant="caption" className="info-label">
//                               מקומות
//                             </Typography>
//                             <Typography variant="body2" className="info-value">
//                               {course.amountOfStudentsInCourse || 0}
//                             </Typography>
//                           </div>
//                         </div>

//                         {/* Day of Course */}
//                         {course.dayOfCourse && (
//                           <div className="info-item day-info">
//                             <CalendarIcon className="info-icon" />
//                             <div className="info-text">
//                               <Typography variant="caption" className="info-label">
//                                 יום
//                               </Typography>
//                               <Typography variant="body2" className="info-value">
//                                 {course.dayOfCourse}
//                               </Typography>
//                             </div>
//                           </div>
//                         )}

//                         {/* Start Date */}
//                         {course.startDateOfCourse && (
//                           <div className="info-item date-info">
//                             <ScheduleIcon className="info-icon" />
//                             <div className="info-text">
//                               <Typography variant="caption" className="info-label">
//                                 תאריך
//                               </Typography>
//                               <Typography variant="body2" className="info-value">
//                                 {new Date(course.startDateOfCourse).toLocaleDateString('he-IL')}
//                               </Typography>
//                             </div>
//                           </div>
//                         )}

//                         {/* Number of Meetings */}
//                         {course.numberOfMeetings && (
//                           <div className="info-item meetings-info">
//                             <EventNoteIcon className="info-icon" />
//                             <div className="info-text">
//                               <Typography variant="caption" className="info-label">
//                                 מפגשים
//                               </Typography>
//                               <Typography variant="body2" className="info-value">
//                                 {course.numberOfMeetings}
//                               </Typography>
//                             </div>
//                           </div>
//                         )}

//                         {/* Instructor */}
//                         {course.instructorName && (
//                           <div className="info-item speaker-info">
//                             <SchoolIcon className="info-icon" />
//                             <div className="info-text">
//                               <Typography variant="caption" className="info-label">
//                                 מרצה
//                               </Typography>
//                               <Typography variant="body2" className="info-value">
//                                 {course.instructorName}
//                               </Typography>
//                             </div>
//                           </div>
//                         )}

//                       </div>

//                       {/* Price Section */}
//                       <div className="price-section">
//                         <Chip
//                           icon={<MoneyIcon />}
//                           label={formatPrice(course.priceOfCourse)}
//                           className={`price-chip ${
//                             isFreeOrZeroPrice(course.priceOfCourse) 
//                               ? course.priceOfCourse === 0 
//                                 ? 'zero-price' 
//                                 : 'free-course'
//                               : ''
//                           }`}
//                         />
//                       </div>

//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </div>
//         ) : (
//           /* No Courses Found */
//           <div className="no-courses-container">
//             <Typography variant="h5" className="no-courses-text">
//               {searchTerm ? 'לא נמצאו קורסים' : 'אין קורסים זמינים'}
//             </Typography>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default HomeGoodNice;
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesThunk } from '../../redux/Thunks/getAllCoursesThunk';
import { useNavigate } from 'react-router-dom';
// import  setSelectedCourse from '../../redux/slices/coursesSlice';
// Material UI Components
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Chip,
  CircularProgress,
  Paper,
  LinearProgress
} from '@mui/material';

// Material UI Icons
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  CalendarToday as CalendarIcon,
  AttachMoney as MoneyIcon,
  Group as GroupIcon,
  EventNote as EventNoteIcon,
  AccessTime as TimeIcon,
  DateRange as DateRangeIcon
} from '@mui/icons-material';
import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';
import { setSelectedCourse } from '../../redux/Slices/courseSlice';
// Styles

import './HomeGoodNice.css';


export const HomeGoodNice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const courses = useSelector(state => state.courses.allCourses || []);
  const loading = useSelector(state => state.courses.loading);

  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        await dispatch(getAllCoursesThunk());
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourses();
  }, [dispatch]);

  // Filter courses based on search term
  const filteredCourses = useMemo(() => {
    if (!searchTerm.trim()) return courses;

    return courses.filter(course =>
      course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.categoryOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructorName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.locationOfCourse?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [courses, searchTerm]);

  // Handle course selection
  // const handleCourseSelect = (course) => {
  //   dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
  //   navigate(`/ShowCourse/${course}`);
  // };
  const handleCourseSelect = async (course) => {
    try {
      // שמור את הקורס ב-Redux לפני הניווט
      dispatch(setSelectedCourse(course));
      // טען את פרטי הקורס המלאים
      await dispatch(getCourseByCourseNameThunk(course.nameOfCourse));
      // נווט לעמוד ShowCourse עם ID הקורס
      navigate(`/Course/${course.idOfCourse}`);
    } catch (error) {
      console.error('Error selecting course:', error);
      // גם אם יש שגיאה, שמור את הקורס ונווט
      dispatch(setSelectedCourse(course));
      navigate(`/Course/${course.idOfCourse}`);
    }
  };
  // Get course image or default
  const getCourseImage = (course) => {
    return `https://localhost:7092${course.image}`;
  };

  // Calculate progress percentage
  const getProgressPercentage = (current, total) => {
    if (!total) return 0;
    return Math.min((current / total) * 100, 100);
  };

  // Format price display - show real price or free
  const formatPrice = (course) => {
    const price = course.totalSumOfCourse;
    if (!price || price === 0) return price;
    return `₪${price.toLocaleString()}`;
  };

  // Check if course is free
  const isFreeOrZeroPrice = (course) => {
    const price = course.priceOfCourse || course.totalSumOfCourse;
    return !price || price === 0;
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('he-IL');
    } catch {
      return dateString;
    }
  };

  // Format time
  const formatTime = (timeString) => {
    if (!timeString) return '';
    try {
      return new Date(`1970-01-01T${timeString}`).toLocaleTimeString('he-IL', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return timeString;
    }
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="loading-overlay">
        <CircularProgress className="loading-spinner" size={80} />
        <Typography variant="h6" className="loading-text">
          טוען קורסים...
        </Typography>
      </div>
    );
  }

  return (
    <div className="home-page-wrapper">
      <Container maxWidth="xl" className="home-dashboard">

        {/* Search Section */}
        <Paper className="search-container" elevation={0}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="חפש קורס לפי שם, קטגוריה, מרצה או מיקום..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="search-icon" />
                </InputAdornment>
              ),
            }}
          />
        </Paper>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="courses-grid-container">
            <Grid container spacing={3}>
              {filteredCourses.map((course) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={course.idOfCourse}>
                  <Card
                    className="course-card"
                    onClick={() => handleCourseSelect(course)}
                  >
                    {/* Course Image */}
                    <CardMedia
                      component="img"
                      image={`https://localhost:7092${course.image}`}
                      alt={course.nameOfCourse}
                      className="course-image"
                    />

                    {/* Progress Bar */}
                    <LinearProgress
                      variant="determinate"
                      value={getProgressPercentage(
                        course.currentAmountOfStudents,
                        course.amountOfStudentsInCourse
                      )}
                      className="enrollment-progress"
                    />

                    {/* Course Content */}
                    <CardContent className="course-content">

                      {/* Course Title */}
                      <Typography variant="h6" className="course-title">
                        {course.nameOfCourse}
                      </Typography>

                      {/* Course Info Grid - All Details */}
                      <div className="course-info-grid">

                        {/* Students Info */}
                        <div className="info-item students-info">
                          <GroupIcon className="info-icon" />
                          <div className="info-text">
                            <Typography variant="caption" className="info-label">
                              רשומים
                            </Typography>
                            <Typography variant="body2" className="info-value">
                              {course.currentAmountOfStudents || 0}/{course.amountOfStudentsInCourse || 0}
                            </Typography>
                          </div>
                        </div>

                        {/* Day of Course */}
                        {course.dayOfCourse && (
                          <div className="info-item day-info">
                            <CalendarIcon className="info-icon" />
                            <div className="info-text">
                              <Typography variant="caption" className="info-label">
                                יום
                              </Typography>
                              <Typography variant="body2" className="info-value">
                                {course.dayOfCourse}
                              </Typography>
                            </div>
                          </div>
                        )}

                        {/* Start Date */}
                        {course.startDateOfCourse && (
                          <div className="info-item date-info">
                            <DateRangeIcon className="info-icon" />
                            <div className="info-text">
                              <Typography variant="caption" className="info-label">
                                תאריך התחלה
                              </Typography>
                              <Typography variant="body2" className="info-value">
                                {formatDate(course.startDateOfCourse)}
                              </Typography>
                            </div>
                          </div>
                        )}

                        {/* End Date */}
                        {course.endDateOfCourse && (
                          <div className="info-item date-info">
                            <DateRangeIcon className="info-icon" />
                            <div className="info-text">
                              <Typography variant="caption" className="info-label">
                                תאריך סיום
                              </Typography>
                              <Typography variant="body2" className="info-value">
                                {formatDate(course.endDateOfCourse)}
                              </Typography>
                            </div>
                          </div>
                        )}

                        {/* Start Time */}
                        {course.startTimeOfCourse && (
                          <div className="info-item time-info">
                            <TimeIcon className="info-icon" />
                            <div className="info-text">
                              <Typography variant="caption" className="info-label">
                                שעת התחלה
                              </Typography>
                              <Typography variant="body2" className="info-value">
                                {formatTime(course.startTimeOfCourse)}
                              </Typography>
                            </div>
                          </div>
                        )}

                        {/* End Time */}
                        {course.endTimeOfCourse && (
                          <div className="info-item time-info">
                            <TimeIcon className="info-icon" />
                            <div className="info-text">
                              <Typography variant="caption" className="info-label">
                                שעת סיום
                              </Typography>
                              <Typography variant="body2" className="info-value">
                                {formatTime(course.endTimeOfCourse)}
                              </Typography>
                            </div>
                          </div>
                        )}

                        {/* Number of Meetings */}
                        {course.amountOfMeetingsInCourse && (
                          <div className="info-item meetings-info">
                            <EventNoteIcon className="info-icon" />
                            <div className="info-text">
                              <Typography variant="caption" className="info-label">
                                מפגשים
                              </Typography>
                              <Typography variant="body2" className="info-value">
                                {course.amountOfMeetingsInCourse}
                              </Typography>
                            </div>
                          </div>
                        )}

                        {/* Location */}
                        {course.locationOfCourse && (
                          <div className="info-item location-info">
                            <LocationIcon className="info-icon" />
                            <div className="info-text">
                              <Typography variant="caption" className="info-label">
                                מיקום
                              </Typography>
                              <Typography variant="body2" className="info-value">
                                {course.locationOfCourse}
                              </Typography>
                            </div>
                          </div>
                        )}

                        {/* Instructor */}
                        {course.instructorName && (
                          <div className="info-item speaker-info">
                            <SchoolIcon className="info-icon" />
                            <div className="info-text">
                              <Typography variant="caption" className="info-label">
                                מרצה
                              </Typography>
                              <Typography variant="body2" className="info-value">
                                {course.instructorName}
                              </Typography>
                            </div>
                          </div>
                        )}

                        {/* Speaker ID */}
                        {course.idOfSpeaker && (
                          <div className="info-item speaker-info">
                            <PersonIcon className="info-icon" />
                            <div className="info-text">
                              <Typography variant="caption" className="info-label">
                                מזהה מרצה
                              </Typography>
                              <Typography variant="body2" className="info-value">
                                #{course.idOfSpeaker}
                              </Typography>
                            </div>
                          </div>
                        )}

                        {/* Category */}
                        {course.categoryOfCourse && (
                          <div className="info-item category-info">
                            <SchoolIcon className="info-icon" />
                            <div className="info-text">
                              <Typography variant="caption" className="info-label">
                                קטגוריה
                              </Typography>
                              <Typography variant="body2" className="info-value">
                                {course.categoryOfCourse}
                              </Typography>
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Price Section */}
                      <div className="price-section">
                        <Chip
                          icon={<MoneyIcon />}
                          label={formatPrice(course)}
                          className={`price-chip ${isFreeOrZeroPrice(course)
                              ? 'free-course'
                              : 'paid-course'
                            }`}
                        />
                      </div>

                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          /* No Courses Found */
          <div className="no-courses-container">
            <Typography variant="h5" className="no-courses-text">
              {searchTerm ? 'לא נמצאו קורסים' : 'אין קורסים זמינים'}
            </Typography>
          </div>
        )}
      </Container>
    </div>
  );
};

export default HomeGoodNice;
