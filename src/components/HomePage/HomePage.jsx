// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Container, 
//   Typography, 
//   Box, 
//   Button, 
//   Card, 
//   CardContent, 
//   Grid, 
//   Divider, 
//   Paper,
//   Tooltip,
//   Zoom,
//   IconButton,
//   Chip,
//   Avatar,
//   LinearProgress,
//   Badge,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextareaAutosize
// } from '@mui/material';

// // Icons
// import SchoolIcon from '@mui/icons-material/School';
// import ExploreIcon from '@mui/icons-material/Explore';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import GroupIcon from '@mui/icons-material/Group';
// import TouchAppIcon from '@mui/icons-material/TouchApp';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import StarIcon from '@mui/icons-material/Star';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import PersonIcon from '@mui/icons-material/Person';
// import EventNoteIcon from '@mui/icons-material/EventNote';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import WhatshotIcon from '@mui/icons-material/Whatshot';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SendIcon from '@mui/icons-material/Send';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// // Styles
// import './HomePage.css';

// // Components
// import { Routing } from '../Routing/Routing';
// import {getCoursesThunk} from '../../redux/Thunks/getCoursesThunk'; 

// export const HomePage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const featuredCourses = useSelector(state => state.courses.courses || []);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
//   const testimonialIntervalRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       await dispatch(getCoursesThunk());    
//       setIsLoading(false);
//     };
    
//     fetchData();
//   }, [dispatch]);

//   // התחלת החלפת התגובות אוטומטית
//   useEffect(() => {
//     testimonialIntervalRef.current = setInterval(() => {
//       setCurrentTestimonialIndex(prevIndex => 
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
    
//     return () => {
//       if (testimonialIntervalRef.current) {
//         clearInterval(testimonialIntervalRef.current);
//       }
//     };
//   }, []);

//   const handleExploreClick = () => {
//     navigate('/Course');    
//   };

//   const handleCourseClick = (courseId) => {
//     navigate(`/Course/${courseId}`);
//   };

//   const handleCategoryClick = (categoryId) => {
//     setActiveCategory(categoryId === activeCategory ? null : categoryId);
//   };

//   const handleNextTestimonial = () => {
//     // איפוס הטיימר בעת לחיצה ידנית
//     if (testimonialIntervalRef.current) {
//       clearInterval(testimonialIntervalRef.current);
//     }
    
//     setCurrentTestimonialIndex(prevIndex => 
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
    
//     // הפעלת הטיימר מחדש
//     testimonialIntervalRef.current = setInterval(() => {
//       setCurrentTestimonialIndex(prevIndex => 
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
//   };

//   const handlePrevTestimonial = () => {
//     // איפוס הטיימר בעת לחיצה ידנית
//     if (testimonialIntervalRef.current) {
//       clearInterval(testimonialIntervalRef.current);
//     }
    
//     setCurrentTestimonialIndex(prevIndex => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
    
//     // הפעלת הטיימר מחדש
//     testimonialIntervalRef.current = setInterval(() => {
//       setCurrentTestimonialIndex(prevIndex => 
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
//   };

//   const categories = [
//     { id: 1, name: 'ראיית חשבון', count: 12, icon: <SchoolIcon className="category-icon" />, color: '#3f51b5' },
//     { id: 2, name: 'הנדסאות תוכנה', count: 18, icon: <SchoolIcon className="category-icon" />, color: '#4caf50' },
//     { id: 3, name: 'גרפיקה ועיצוב', count: 9, icon: <SchoolIcon className="category-icon" />, color: '#ff9800' },
//     { id: 4, name: 'הוראה וחינוך', count: 15, icon: <SchoolIcon className="category-icon" />, color: '#e91e63' }
//   ];

//   const stats = [
//     { value: '1,200+', label: 'סטודנטים פעילים', icon: <GroupIcon />, color: '#3f51b5' },
//     { value: '150+', label: 'קורסים מקצועיים', icon: <SchoolIcon />, color: '#4caf50' },
//     { value: '50+', label: 'מרצים מומחים', icon: <PersonIcon />, color: '#ff9800' },
//     { value: '95%', label: 'שביעות רצון', icon: <StarIcon />, color: '#e91e63' }
//   ];

//   const testimonials = [
//     {
//       id: 1,
//       name: 'יעל כהן',
//       role: 'בוגרת קורס ראיית חשבון',
//       avatar: '/assets/images/testimonial1.jpg',
//       content: 'הקורס היה מעולה! המרצים מקצועיים והחומר הנלמד רלוונטי מאוד לשוק העבודה. מצאתי עבודה תוך חודש מסיום הקורס.',
//       rating: 5
//     },
//     {
//       id: 2,
//       name: 'דוד לוי',
//       role: 'סטודנט להנדסה תוכנה',
//       avatar: '/assets/images/testimonial2.jpg',
//       content: 'אני לומד כרגע בקורס פיתוח ווב והחוויה מדהימה. המרצים מלווים אותי באופן אישי ועוזרים בכל שאלה.',
//       rating: 4.5
//     },
//     {
//       id: 3,
//       name: 'מיכל אברהם',
//       role: 'בוגרת קורס עיצוב גרפי',
//       avatar: '/assets/images/testimonial3.jpg',
//       content: 'הקורס נתן לי את כל הכלים להתחיל קריירה בעיצוב. התרגולים המעשיים והפרויקטים היו מאתגרים ומלמדים.',
//       rating: 5
//     },
//     {
//       id: 4,
//       name: 'אבי גולדשטיין',
//       role: 'בוגר קורס ניהול רשתות',
//       avatar: '/assets/images/testimonial4.jpg',
//       content: 'ההשקעה בקורס הייתה שווה כל שקל. הידע שרכשתי עזר לי להתקדם בתפקיד ולקבל העלאה משמעותית במשכורת.',
//       rating: 5
//     },
//     {
//       id: 5,
//       name: 'שירה לוינסון',
//       role: 'סטודנטית לחשבונאות',
//       avatar: '/assets/images/testimonial5.jpg',
//       content: 'הגמישות בלימודים מאפשרת לי לשלב בין עבודה ללימודים. המרצים קשובים ותמיד זמינו לשאלות גם מחוץ לשעות הקורס.',
//       rating: 4.5
//     }
//   ];

//   return (
//     <div className="home-page-wrapper">
//       <Routing />
      
//       {/* Hero Section - עם צבעים מותאמים ל-MyAppBar */}
//       <Box className="hero-section">
//         <Container maxWidth="lg">
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Box className="hero-content">
//                 <Chip 
//                   label="המכללה המובילה בישראל" 
//                   className="hero-badge"
//                   icon={<EmojiEventsIcon />} 
//                 />
//                 <Typography variant="h2" className="hero-title">
//                   פתח את הדלת <span className="highlight">להזדמנויות</span> חדשות
//                 </Typography>
//                 <Typography variant="subtitle1" className="hero-subtitle">
//                   מגוון קורסים מקצועיים המותאמים לדרישות השוק, בהנחיית מרצים מובילים בתחומם
//                 </Typography>
//                 <Box className="hero-buttons">
//                   <Button 
//                     variant="contained" 
//                     className="explore-button"
//                     onClick={handleExploreClick}
//                     endIcon={<ExploreIcon />}
//                   >
//                     גלה קורסים
//                   </Button>
//                   <Button 
//                     variant="outlined" 
//                     className="about-button"
//                   >
//                     אודותינו
//                   </Button>
//                 </Box>
//                 <Box className="hero-features">
//                   <Box className="feature-item">
//                     <CheckCircleIcon className="feature-icon" style={{ color: '#4caf50' }} />
//                     <Typography variant="body2">לימודים מקוונים</Typography>
//                   </Box>
//                   <Box className="feature-item">
//                     <CheckCircleIcon className="feature-icon" style={{ color: '#ff9800' }} />
//                     <Typography variant="body2">תעודה מוכרת</Typography>
//                   </Box>
//                   <Box className="feature-item">
//                     <CheckCircleIcon className="feature-icon" style={{ color: '#e91e63' }} />
//                     <Typography variant="body2">ליווי אישי</Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box className="hero-image-container">
//                 <img 
//                   src="/assets/images/hero-image.png" 
//                   alt="לימודים מקצועיים" 
//                   className="hero-image" 
//                 />
//                 <Box className="floating-card">
//                   <Box className="floating-card-content">
//                     <StarIcon className="floating-icon" />
//                     <Typography variant="h6">95%</Typography>
//                     <Typography variant="body2">שביעות רצון</Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//         <div className="hero-wave"></div>
//       </Box>

//       {/* Stats Section - עם צבעים מותאמים */}
//       <Container maxWidth="lg">
//         <Paper elevation={3} className="stats-card">
//           <Grid container spacing={2}>
//             {stats.map((stat, index) => (
//               <Grid item xs={6} md={3} key={index}>
//                 <Box className="stat-item">
//                   <Box className="stat-icon-wrapper" style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)` }}>
//                     {stat.icon}
//                   </Box>
//                   <Typography variant="h4" className="stat-value" style={{ color: stat.color }}>
//                     {stat.value}
//                   </Typography>
//                   <Typography variant="body2" className="stat-label">
//                     {stat.label}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Paper>
//       </Container>

//       {/* Categories Section - עם צבעים מותאמים */}
//       <Box className="categories-section">
//         <Container maxWidth="lg">
//           <Box className="section-header">
//             <Typography variant="h4" className="section-title">
//               <SchoolIcon className="section-icon" />
//               קטגוריות לימוד
//             </Typography>
//             <Typography variant="subtitle1" className="section-subtitle">
//               בחרו מתוך מגוון תחומי הלימוד המקצועיים שלנו
//             </Typography>
//           </Box>

//           <Grid container spacing={3}>
//             {categories.map(category => (
//               <Grid item xs={12} sm={6} md={3} key={category.id}>
//                 <Card 
//                   className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
//                   onClick={() => handleCategoryClick(category.id)}
//                   style={{ 
//                     borderTop: `5px solid ${category.color}`,
//                     borderColor: activeCategory === category.id ? category.color : 'transparent'
//                   }}
//                 >
//                   <CardContent>
//                     <Box 
//                       className="category-icon-wrapper" 
//                       style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)` }}
//                     >
//                       {category.icon}
//                     </Box>
//                     <Typography variant="h6" className="category-title">
//                       {category.name}
//                     </Typography>
//                     <Typography variant="body2" className="category-count">
//                       {category.count} קורסים
//                     </Typography>
//                     <Button 
//                       variant="text" 
//                       className="category-button"
//                       endIcon={<ArrowForwardIcon />}
//                       style={{ color: category.color }}
//                     >
//                       לכל הקורסים
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Featured Courses - עם تصميم משופר */}
//       <Box className="featured-courses-section">
//         <Container maxWidth="lg">
//           <Box className="section-header">
//             <Box className="title-with-badge">
//               <Chip 
//                 label="הכי פופולריים" 
//                 className="title-badge"
//                 icon={<WhatshotIcon />} 
//               />
//             </Box>
//             <Typography variant="h4" className="section-title">
//               <EmojiEventsIcon className="section-icon" />
//               קורסים מובילים
//             </Typography>
//             <Typography variant="subtitle1" className="section-subtitle">
//               הקורסים הפופולריים ביותר בקרב הסטודנטים שלנו
//             </Typography>
//           </Box>

//           <Grid container spacing={3}>
//             {isLoading ? (
//               <Box className="loading-container">
//                 <LinearProgress className="loading-progress" color="primary" />
//                 <Typography>טוען קורסים...</Typography>
//               </Box>
//             ) : (
//               featuredCourses.slice(0, 4).map(course => (
//                 <Grid item xs={12} sm={6} md={3} key={course.id}>
//                   <Card className="course-card">
//                     <Box className="course-image-container">
//                       <img 
//                         src={course.image || "/assets/images/course-placeholder.jpg"} 
//                         alt={course.nameOfCourse} 
//                         className="course-image" 
//                       />
//                       <Box className="course-overlay">
//                         <IconButton className="play-button">
//                           <PlayCircleOutlineIcon />
//                         </IconButton>
//                       </Box>
//                       <Box className={`course-badge ${course.currentAmountOfStudents >= course.amountOfStudentsInCourse * 0.8 ? 'popular' : 'new'}`}>
//                         {course.currentAmountOfStudents >= course.amountOfStudentsInCourse * 0.8 ? (
//                           <>
//                             <WhatshotIcon />
//                             פופולרי
//                           </>
//                         ) : (
//                           <>
//                             <LocalOfferIcon />
//                             חדש
//                           </>
//                         )}
//                       </Box>
//                     </Box>
//                     <CardContent className="course-content">
//                       <Box className="course-header">
//                         <Chip 
//                           label={course.category || "כללי"} 
//                           size="small" 
//                           className="course-category-chip" 
//                         />
//                         <Box className="course-price">
//                           <LocalOfferIcon fontSize="small" />
//                           {course.price || "חינם"}
//                         </Box>
//                       </Box>
//                       <Typography variant="h6" className="course-title">
//                         {course.nameOfCourse}
//                       </Typography>
//                       <Box className="course-details">
//                         <Box className="course-detail">
//                           <EventNoteIcon className="detail-icon" />
//                           <Typography variant="body2">
//                             {course.amountOfMettingInCourse} מפגשים
//                           </Typography>
//                         </Box>
//                         <Box className="course-detail">
//                           <AccessTimeIcon className="detail-icon" />
//                           <Typography variant="body2">
//                             {course.duration || "3 שעות"} למפגש
//                           </Typography>
//                         </Box>
//                       </Box>
//                       <Box className="course-progress">
//                         <Box className="progress-header">
//                           <Typography variant="body2" className="progress-text">
//                             <PersonIcon fontSize="small" style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
//                             {course.currentAmountOfStudents}/{course.amountOfStudentsInCourse} תלמידים
//                           </Typography>
//                           <Typography variant="body2" className="progress-percentage">
//                             {Math.round((course.currentAmountOfStudents / course.amountOfStudentsInCourse) * 100)}%
//                           </Typography>
//                         </Box>
//                         <LinearProgress 
//                           variant="determinate" 
//                           value={(course.currentAmountOfStudents / course.amountOfStudentsInCourse) * 100}
//                           className="course-progress-bar"
//                           color={course.currentAmountOfStudents >= course.amountOfStudentsInCourse * 0.8 ? "secondary" : "primary"}
//                         />
//                       </Box>
//                       <Divider className="course-divider" />
//                       <Box className="course-footer">
//                         <Button 
//                           variant="contained" 
//                           className="course-button"
//                           onClick={() => handleCourseClick(course.id)}
//                           endIcon={<TouchAppIcon />}
//                         >
//                           פרטים נוספים
//                         </Button>
//                         <Tooltip title="שמור לצפייה מאוחרת" placement="top" TransitionComponent={Zoom} arrow>
//                           <IconButton className="bookmark-button">
//                             <BookmarkIcon />
//                           </IconButton>
//                         </Tooltip>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))
//             )}
//           </Grid>

//           <Box className="view-all-container">
//             <Button 
//               variant="outlined" 
//               className="view-all-button"
//               onClick={handleExploreClick}
//               endIcon={<ArrowForwardIcon />}
//             >
//               לכל הקורסים
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       {/* Testimonials Section - עם תגובות מתחלפות */}
//       <Box className="testimonials-section">
//         <Container maxWidth="lg">
//           <Box className="section-header">
//             <Typography variant="h4" className="section-title">
//               <StarIcon className="section-icon" />
//               מה אומרים עלינו
//             </Typography>
//             <Typography variant="subtitle1" className="section-subtitle">
//               חוויות אמיתיות של בוגרים וסטודנטים שלנו
//             </Typography>
//           </Box>

//           <Box className="testimonial-slider-container">
//             <IconButton 
//               className="testimonial-nav-button prev"
//               onClick={handlePrevTestimonial}
//             >
//               <KeyboardArrowRightIcon />
//             </IconButton>
            
//             <Box className="testimonial-slider">
//               <Card className="testimonial-card active">
//                 <CardContent>
//                   <Box className="testimonial-quote-icon">
//                     <FormatQuoteIcon />
//                   </Box>
//                   <Box className="testimonial-rating">
//                     {[...Array(5)].map((_, i) => (
//                       <StarIcon 
//                         key={i} 
//                         className={
//                           i < Math.floor(testimonials[currentTestimonialIndex].rating) 
//                             ? "star-filled" 
//                             : i < testimonials[currentTestimonialIndex].rating 
//                               ? "star-half" 
//                               : "star-empty"
//                         } 
//                       />
//                     ))}
//                   </Box>
//                   <Typography variant="body1" className="testimonial-content">
//                     "{testimonials[currentTestimonialIndex].content}"
//                   </Typography>
//                   <Box className="testimonial-author">
//                     <Avatar 
//                       src={testimonials[currentTestimonialIndex].avatar} 
//                       alt={testimonials[currentTestimonialIndex].name}
//                       className="testimonial-avatar"
//                     />
//                     <Box>
//                       <Typography variant="h6" className="testimonial-name">
//                         {testimonials[currentTestimonialIndex].name}
//                       </Typography>
//                       <Typography variant="body2" className="testimonial-role">
//                         {testimonials[currentTestimonialIndex].role}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Box>
            
//             <IconButton 
//               className="testimonial-nav-button next"
//               onClick={handleNextTestimonial}
//             >
//               <KeyboardArrowLeftIcon />
//             </IconButton>
//           </Box>
          
//           <Box className="testimonial-indicators">
//             {testimonials.map((_, index) => (
//               <Box 
//                 key={index} 
//                 className={`testimonial-indicator ${index === currentTestimonialIndex ? 'active' : ''}`}
//                 onClick={() => {
//                   if (testimonialIntervalRef.current) {
//                     clearInterval(testimonialIntervalRef.current);
//                   }
//                   setCurrentTestimonialIndex(index);
//                   testimonialIntervalRef.current = setInterval(() => {
//                     setCurrentTestimonialIndex(prevIndex => 
//                       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//                     );
//                   }, 5000);
//                 }}
//               />
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* Why Choose Us - עם צבעים מותאמים */}
//       <Box className="why-choose-section">
//         <Container maxWidth="lg">
//           <Box className="section-header">
//             <Typography variant="h4" className="section-title">
//               <StarIcon className="section-icon" />
//               למה ללמוד אצלנו?
//             </Typography>
//             <Typography variant="subtitle1" className="section-subtitle">
//               הסיבות שהופכות אותנו למובילים בתחום ההכשרה המקצועית
//             </Typography>
//           </Box>

//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Box className="why-choose-image-container">
//                 <img 
//                   src="/assets/images/why-choose-us.png" 
//                   alt="למה ללמוד אצלנו" 
//                   className="why-choose-image" 
//                 />
//                 <Box className="image-badge top">
//                   <CheckCircleIcon />
//                   <Typography variant="body2">לימוד מעשי</Typography>
//                 </Box>
//                 <Box className="image-badge bottom">
//                   <StarIcon />
//                   <Typography variant="body2">מרצים מובילים</Typography>
//                 </Box>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box className="why-choose-content">
//                 <Box className="feature-item">
//                   <Box className="feature-icon-wrapper" style={{ background: 'linear-gradient(135deg, #3f51b5, #283593)' }}>
//                     <GroupIcon className="feature-icon" />
//                   </Box>
//                   <Box className="feature-text">
//                     <Typography variant="h6" className="feature-title">
//                       מרצים מובילים בתחומם
//                     </Typography>
//                     <Typography variant="body2" className="feature-description">
//                       צוות המרצים שלנו מורכב ממומחים בעלי ניסיון מעשי רב בתעשייה, המביאים ידע עדכני ורלוונטי לכיתה
//                     </Typography>
//                   </Box>
//                 </Box>

//                 <Box className="feature-item">
//                   <Box className="feature-icon-wrapper" style={{ background: 'linear-gradient(135deg, #4caf50, #388e3c)' }}>
//                     <TouchAppIcon className="feature-icon" />
//                   </Box>
//                   <Box className="feature-text">
//                     <Typography variant="h6" className="feature-title">
//                       למידה מעשית והתנסות
//                     </Typography>
//                     <Typography variant="body2" className="feature-description">
//                       הקורסים שלנו משלבים תיאוריה ופרקטיקה לחוויית למידה אפקטיבית, עם דגש על פרויקטים מעשיים ותרגול
//                     </Typography>
//                   </Box>
//                 </Box>

//                 <Box className="feature-item">
//                   <Box className="feature-icon-wrapper" style={{ background: 'linear-gradient(135deg, #ff9800, #f57c00)' }}>
//                     <TrendingUpIcon className="feature-icon" />
//                   </Box>
//                   <Box className="feature-text">
//                     <Typography variant="h6" className="feature-title">
//                       התאמה לדרישות השוק
//                     </Typography>
//                     <Typography variant="body2" className="feature-description">
//                       תכני הלימוד מתעדכנים באופן שוטף בהתאם לדרישות המשתנות בשוק העבודה, כדי להבטיח רלוונטיות מקסימלית
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Call to Action - עם צבעים מותאמים */}
//       <Box className="cta-section">
//         <Container maxWidth="md">
//           <Paper elevation={6} className="cta-card">
//             <Box className="cta-content">
//               <Typography variant="h3" className="cta-title">
//                 מוכנים להתחיל את המסע המקצועי שלכם?
//               </Typography>
//               <Typography variant="subtitle1" className="cta-subtitle">
//                 הצטרפו לאלפי בוגרים מרוצים שכבר שדרגו את הקריירה שלהם
//               </Typography>
//               <Box className="cta-buttons">
//                 <Button 
//                   variant="contained" 
//                   size="large"
//                   className="cta-button"
//                   onClick={handleExploreClick}
//                 >
//                   גלה קורסים
//                 </Button>
//                 <Button 
//                   variant="outlined" 
//                   size="large"
//                   className="cta-button-secondary"
//                 >
//                   צור קשר
//                 </Button>
//               </Box>
//             </Box>
//             <Box className="cta-decoration">
//               <div className="decoration-circle circle-1"></div>
//               <div className="decoration-circle circle-2"></div>
//               <div className="decoration-circle circle-3"></div>
//             </Box>
//           </Paper>
//         </Container>
//       </Box>

//       {/* Contact Section - חדש */}
//       <Box className="contact-section">
//         <Container maxWidth="lg">
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Box className="contact-info">
//                 <Typography variant="h4" className="contact-title">
//                   צור קשר
//                 </Typography>
//                 <Typography variant="body1" className="contact-subtitle">
//                   אנחנו כאן לענות על כל שאלה. מלאו את הטופס או צרו קשר באחת מהדרכים הבאות:
//                 </Typography>
                
//                 <Box className="contact-methods">
//                   <Box className="contact-method">
//                     <Box className="contact-icon-wrapper">
//                       <PhoneIcon className="contact-icon" />
//                     </Box>
//                     <Box className="contact-text">
//                       <Typography variant="h6">טלפון</Typography>
//                       <Typography variant="body1">03-1234567</Typography>
//                     </Box>
//                   </Box>
                  
//                   <Box className="contact-method">
//                     <Box className="contact-icon-wrapper">
//                       <EmailIcon className="contact-icon" />
//                     </Box>
//                     <Box className="contact-text">
//                       <Typography variant="h6">דוא"ל</Typography>
//                       <Typography variant="body1">info@example.com</Typography>
//                     </Box>
//                   </Box>
                  
//                   <Box className="contact-method">
//                     <Box className="contact-icon-wrapper">
//                       <LocationOnIcon className="contact-icon" />
//                     </Box>
//                     <Box className="contact-text">
//                       <Typography variant="h6">כתובת</Typography>
//                       <Typography variant="body1">רחוב הלימודים 123, תל אביב</Typography>
//                     </Box>
//                   </Box>
//                 </Box>
                
//                 <Box className="contact-hours">
//                   <Typography variant="h6">שעות פעילות</Typography>
//                   <Typography variant="body1">ימים א'-ה': 9:00-18:00</Typography>
//                   <Typography variant="body1">יום ו': 9:00-13:00</Typography>
//                 </Box>
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} md={6}>
//               <Box className="contact-form-container">
//                 <Paper elevation={3} className="contact-form-paper">
//                   <Typography variant="h5" className="form-title">
//                     שלחו לנו הודעה
//                   </Typography>
                  
//                   <form className="contact-form">
//                     <Grid container spacing={2}>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="שם מלא"
//                           variant="outlined"
//                           required
//                           className="form-field"
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="טלפון"
//                           variant="outlined"
//                           required
//                           className="form-field"
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           label="דוא״ל"
//                           variant="outlined"
//                           required
//                           type="email"
//                           className="form-field"
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <FormControl fullWidth variant="outlined" className="form-field">
//                           <InputLabel>נושא הפנייה</InputLabel>
//                           <Select
//                             label="נושא הפנייה"
//                             defaultValue=""
//                           >
//                             <MenuItem value="">
//                               <em>בחר נושא</em>
//                             </MenuItem>
//                             <MenuItem value="מידע על קורסים">מידע על קורסים</MenuItem>
//                             <MenuItem value="רישום לקורס">רישום לקורס</MenuItem>
//                             <MenuItem value="שאלה כללית">שאלה כללית</MenuItem>
//                             <MenuItem value="אחר">אחר</MenuItem>
//                           </Select>
//                         </FormControl>
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           label="תוכן ההודעה"
//                           variant="outlined"
//                           required
//                           multiline
//                           rows={4}
//                           className="form-field"
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <Button
//                           type="submit"
//                           variant="contained"
//                           fullWidth
//                           className="submit-button"
//                           endIcon={<SendIcon />}
//                         >
//                           שלח הודעה
//                         </Button>
//                       </Grid>
//                     </Grid>
//                   </form>
//                 </Paper>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Partners Section */}
//       <Box className="partners-section">
//         <Container maxWidth="lg">
//           <Typography variant="h6" className="partners-title">
//             שותפים ומעסיקים מובילים
//           </Typography>
//           <Box className="partners-logos">
//             <Box className="partner-logo">
//               <img src="/assets/images/partner1.png" alt="Partner 1" />
//             </Box>
//             <Box className="partner-logo">
//               <img src="/assets/images/partner2.png" alt="Partner 2" />
//             </Box>
//             <Box className="partner-logo">
//               <img src="/assets/images/partner3.png" alt="Partner 3" />
//             </Box>
//             <Box className="partner-logo">
//               <img src="/assets/images/partner4.png" alt="Partner 4" />
//             </Box>
//             <Box className="partner-logo">
//               <img src="/assets/images/partner5.png" alt="Partner 5" />
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       {/* Footer - חדש */}
//       <Box className="footer">
//         <Container maxWidth="lg">
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Box className="footer-about">
//                 <Typography variant="h6" className="footer-title">
//                   אודות המכללה
//                 </Typography>
//                 <Typography variant="body2" className="footer-text">
//                   המכללה שלנו מובילה בתחום ההכשרה המקצועית כבר למעלה מ-15 שנה. אנו מציעים מגוון רחב של קורסים מקצועיים המותאמים לדרישות שוק העבודה העדכניות.
//                 </Typography>
//                 <Box className="footer-social">
//                   <IconButton className="social-button facebook">
//                     <i className="fab fa-facebook-f"></i>
//                   </IconButton>
//                   <IconButton className="social-button instagram">
//                     <i className="fab fa-instagram"></i>
//                   </IconButton>
//                   <IconButton className="social-button linkedin">
//                     <i className="fab fa-linkedin-in"></i>
//                   </IconButton>
//                   <IconButton className="social-button youtube">
//                     <i className="fab fa-youtube"></i>
//                   </IconButton>
//                 </Box>
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} sm={6} md={2}>
//               <Box className="footer-links">
//                 <Typography variant="h6" className="footer-title">
//                   קישורים מהירים
//                 </Typography>
//                 <ul className="footer-menu">
//                   <li><a href="#">דף הבית</a></li>
//                   <li><a href="#">קורסים</a></li>
//                   <li><a href="#">אודות</a></li>
//                   <li><a href="#">צור קשר</a></li>
//                   <li><a href="#">שאלות נפוצות</a></li>
//                 </ul>
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} sm={6} md={2}>
//               <Box className="footer-links">
//                 <Typography variant="h6" className="footer-title">
//                   קטגוריות
//                 </Typography>
//                 <ul className="footer-menu">
//                   <li><a href="#">ראיית חשבון</a></li>
//                   <li><a href="#">הנדסאות תוכנה</a></li>
//                   <li><a href="#">גרפיקה ועיצוב</a></li>
//                   <li><a href="#">הוראה וחינוך</a></li>
//                   <li><a href="#">כל הקטגוריות</a></li>
//                 </ul>
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} md={4}>
//               <Box className="footer-newsletter">
// //                 <Typography variant="h6" className="footer-title">
// //                   הירשמו לניוזלטר
// //                 </Typography>
// //                 <Typography variant="body2" className="footer-text">
// //                   קבלו עדכונים על קורסים חדשים ומבצעים ישירות לתיבת הדואר
// //                 </Typography>
// //                 <Box className="newsletter-form">
// //                   <TextField
// //                     fullWidth
// //                     variant="outlined"
// //                     placeholder="הזינו את כתובת המייל שלכם"
// //                     className="newsletter-input"
// //                   />
// //                   <Button
// //                     variant="contained"
// //                     className="newsletter-button"
// //                   >
// //                     הרשמה
// //                   </Button>
// //                 </Box>
// //               </Box>
// //             </Grid>
// //           </Grid>
          
// //           <Divider className="footer-divider" />
          
// //           <Box className="footer-bottom">
// //             <Typography variant="body2" className="copyright">
// //               © {new Date().getFullYear()} כל הזכויות שמורות למכללה. פותח ע"י צוות הפיתוח שלנו.
// //             </Typography>
// //             <Box className="footer-bottom-links">
// //               <a href="#">תנאי שימוש</a>
// //               <a href="#">מדיניות פרטיות</a>
// //               <a href="#">נגישות</a>
// //             </Box>
// //           </Box>
// //         </Container>
// //       </Box>
// //     </div>
// //   );
// // };
// // יבוא הקומפוננטות החדשות
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Grid, 
  Divider, 
  Paper,
  Tooltip,
  Zoom,
  IconButton,
  Chip,
  Avatar,
  LinearProgress,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

// Icons - יבוא אייקונים נוספים
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Styles
import './HomePage.css';

// Components
import { Routing } from '../Routing/Routing';
import {getCoursesThunk} from '../../redux/Thunks/getCoursesThunk'; 

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const featuredCourses = useSelector(state => state.courses.courses|| []);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = {
    hero: useRef(null),
    categories: useRef(null),
    courses: useRef(null),
    testimonials: useRef(null),
    features: useRef(null),
    contact: useRef(null)
  };

  // טעינת הקורסים
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(getCoursesThunk());    
      setIsLoading(false);
    };
    
    fetchData();
  }, [dispatch]);

  // אפקט לבדיקת נראות אלמנטים בעת גלילה
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // הוספת כל האלמנטים לצפייה
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleExploreClick = () => {
    navigate('/Course');    
  };

  const handleCourseClick = (courseId) => {
    navigate(`/Course/${courseId}`);
  };

  const handleTestimonialChange = (direction) => {
    if (direction === 'next') {
      setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    } else {
      setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  const categories = [
    { id: 1, name: 'ראיית חשבון', count: 12, icon: <SchoolIcon className="category-icon" />, color: '#3f51b5' },
    { id: 2, name: 'הנדסאות תוכנה', count: 18, icon: <SchoolIcon className="category-icon" />, color: '#f44336' },
    { id: 3, name: 'גרפיקה ועיצוב', count: 9, icon: <SchoolIcon className="category-icon" />, color: '#4caf50' },
    { id: 4, name: 'הוראה וחינוך', count: 15, icon: <SchoolIcon className="category-icon" />, color: '#ff9800' }
  ];

  const stats = [
    { value: '1,200+', label: 'סטודנטים פעילים', icon: <PersonIcon />, color: '#3f51b5' },
    { value: '150+', label: 'קורסים מקצועיים', icon: <SchoolIcon />, color: '#f44336' },
    { value: '50+', label: 'מרצים מומחים', icon: <GroupIcon />, color: '#4caf50' },
    { value: '95%', label: 'שביעות רצון', icon: <StarIcon />, color: '#ff9800' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'יעל כהן',
      role: 'בוגרת קורס ראיית חשבון',
      avatar: '/assets/images/testimonial1.jpg',
      rating: 5,
      content: 'הקורס היה מעולה! המרצים מקצועיים ומעבירים את החומר בצורה ברורה ומעניינת. הידע שרכשתי עזר לי למצוא עבודה תוך חודש מסיום הקורס.'
    },
    {
      id: 2,
      name: 'דוד לוי',
      role: 'בוגר קורס הנדסאות תוכנה',
      avatar: '/assets/images/testimonial2.jpg',
      rating: 4.5,
      content: 'הקורס נתן לי את כל הכלים הדרושים להשתלב בתעשיית ההייטק. התרגולים המעשיים והפרויקטים היו מאתגרים ותרמו רבות להתפתחות המקצועית שלי.'
    },
    {
      id: 3,
      name: 'מיכל אברהם',
      role: 'בוגרת קורס גרפיקה ועיצוב',
      avatar: '/assets/images/testimonial3.jpg',
      rating: 5,
      content: 'למדתי המון כלים וטכניקות חדשות שמשמשות אותי בעבודה היומיומית. הצוות המקצועי והיחס האישי הפכו את חווית הלמידה למהנה במיוחד.'
    }
  ];

  const features = [
    {
      icon: <GroupIcon className="feature-icon" />,
      title: 'מרצים מובילים בתחומם',
      description: 'צוות המרצים שלנו מורכב ממומחים בעלי ניסיון מעשי רב בתעשייה',
      color: '#3f51b5'
    },
    {
      icon: <TouchAppIcon className="feature-icon" />,
      title: 'למידה מעשית והתנסות',
      description: 'הקורסים שלנו משלבים תיאוריה ופרקטיקה לחוויית למידה אפקטיבית',
      color: '#f44336'
    },
    {
      icon: <TrendingUpIcon className="feature-icon" />,
      title: 'התאמה לדרישות השוק',
      description: 'תכני הלימוד מתעדכנים באופן שוטף בהתאם לדרישות המשתנות בשוק העבודה',
      color: '#4caf50'
    }
  ];

  // פונקציה להצגת כוכבי דירוג
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`star-${i}`} className="star-filled" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarIcon key="star-half" className="star-half" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarIcon key={`star-empty-${i}`} className="star-empty" />);
    }
    
    return stars;
  };

  return (
    <div className="home-page-wrapper">
      <Routing />
      
      {/* Hero Section */}
      <Box className="hero-section" id="hero-section" ref={sectionRefs.hero}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className={`hero-content ${isVisible['hero-section'] ? 'animate__animated animate__fadeIn' : ''}`}>
                <Chip 
                  label="המכללה המובילה להכשרה מקצועית" 
                  className="hero-badge"
                  icon={<CheckCircleIcon />}
                />
                <Typography variant="h3" className="hero-title">
                  פתח את הדלת ל<span className="highlight">הזדמנויות חדשות</span>
                </Typography>
                <Typography variant="subtitle1" className="hero-subtitle">
                  מגוון קורסים מקצועיים המותאמים לדרישות השוק, בהנחיית מרצים מובילים בתחומם
                </Typography>
                <Box className="hero-buttons">
                  <Button 
                    variant="contained" 
                    color="primary" 
                    className="explore-button"
                    onClick={handleExploreClick}
                    endIcon={<ExploreIcon />}
                  >
                    גלה קורסים
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    className="about-button"
                  >
                    אודותינו
                  </Button>
                </Box>
                <Box className="hero-features">
                  <Box className="feature-item">
                    <CheckCircleIcon className="feature-icon" />
                    <Typography variant="body2">לימודים מקוונים</Typography>
                  </Box>
                  <Box className="feature-item">
                    <CheckCircleIcon className="feature-icon" />
                    <Typography variant="body2">תעודה מוכרת</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={`hero-image-container ${isVisible['hero-section'] ? 'animate__animated animate__fadeInRight' : ''}`}>
                <img 
                  src="/assets/images/hero-image.jpg" 
                  alt="לימודים מקצועיים" 
                  className="hero-image" 
                />
                <Box className="floating-card">
                  <Box className="floating-card-content">
                    <WhatshotIcon className="floating-icon" />
                    <Typography variant="body2" fontWeight="bold">
                      95% השמה בתעשייה
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <div className="hero-wave"></div>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg">
        <Paper elevation={3} className={`stats-card ${isVisible['hero-section'] ? 'animate__animated animate__fadeInUp' : ''}`}>
          <Grid container spacing={2}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box className="stat-item">
                  <Box className="stat-icon-wrapper" style={{ backgroundColor: stat.color }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" className="stat-value">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" className="stat-label">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* Categories Section */}
      <Box className="categories-section" id="categories-section" ref={sectionRefs.categories}>
        <Container maxWidth="lg">
          <Box className="section-header">
            <Box className="title-with-badge">
              <Chip label="תחומי לימוד" className="title-badge" />
            </Box>
            <Typography variant="h4" className="section-title">
              <SchoolIcon className="section-icon" />
              קטגוריות לימוד
            </Typography>
            <Typography variant="subtitle1" className="section-subtitle">
              בחרו מתוך מגוון תחומי הלימוד המקצועיים שלנו
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {categories.map((category, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={category.id}
                className={isVisible['categories-section'] ? 'animate__animated animate__fadeInUp animate__delay-' + index : ''}
              >
                <Card className="category-card">
                  <CardContent>
                    <Box 
                      className="category-icon-wrapper" 
                      style={{ backgroundColor: category.color }}
                    >
                      {category.icon}
                    </Box>
                    <Typography variant="h6" className="category-title">
                      {category.name}
                    </Typography>
                    <Typography variant="body2" className="category-count">
                      {category.count} קורסים
                    </Typography>
                    <Button 
                      variant="text" 
                      color="primary" 
                      className="category-button"
                      endIcon={<ArrowForwardIcon />}
                    >
                      לכל הקורסים
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Courses */}
      <Box className="featured-courses-section" id="courses-section" ref={sectionRefs.courses}>
        <Container maxWidth="lg">
          <Box className="section-header">
            <Box className="title-with-badge">
              <Chip label="הכי פופולריים" className="title-badge" />
            </Box>
            <Typography variant="h4" className="section-title">
              <EmojiEventsIcon className="section-icon" />
              קורסים מובילים
            </Typography>
            <Typography variant="subtitle1" className="section-subtitle">
              הקורסים הפופולריים ביותר בקרב הסטודנטים שלנו
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {isLoading ? (
              <Box className="loading-container">
                <LinearProgress className="loading-progress" color="primary" />
                <Typography>טוען קורסים...</Typography>
              </Box>
            ) : (
              featuredCourses.slice(0, 4).map((course, index) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  md={3} 
                  key={course.id}
                  className={isVisible['courses-section'] ? 'animate__animated animate__fadeInUp animate__delay-' + index : ''}
                >
                  <Card className="course-card">
                    <Box className="course-image-container">
                      <img 
                        src={course.image || "/assets/images/course-placeholder.jpg"} 
                        alt={course.nameOfCourse} 
                        className="course-image" 
                      />
                      <Box className="course-overlay">
                        <IconButton className="play-button">
                          <PlayCircleOutlineIcon />
                        </IconButton>
                      </Box>
                      <Box 
                        className={`course-badge ${course.currentAmountOfStudents >= course.amountOfStudentsInCourse * 0.8 ? 'popular' : 'new'}`}
                      >
                        {course.currentAmountOfStudents >= course.amountOfStudentsInCourse * 0.8 ? (
                          <>
                            <WhatshotIcon />
                            פופולרי
                          </>
                        ) : (
                          <>
                            <LocalOfferIcon />
                            חדש
                          </>
                        )}
                      </Box>
                    </Box>
                    <CardContent className="course-content">
                      <Box className="course-header">
                        <Chip 
                          label={course.category || "קורס מקצועי"} 
                          className="course-category-chip" 
                          size="small"
                        />
                        <Box className="course-price">
                          <LocalOfferIcon />
                          {course.price || "₪3,500"}
                        </Box>
                      </Box>
                      <Typography variant="h6" className="course-title">
                        {course.nameOfCourse}
                      </Typography>
                      <Box className="course-details">
                        <Box className="course-detail">
                          <EventNoteIcon className="detail-icon" />
                          <Typography variant="body2">
                            {course.amountOfMettingInCourse} מפגשים
                          </Typography>
                        </Box>
                        <Box className="course-detail">
                          <AccessTimeIcon className="detail-icon" />
                          <Typography variant="body2">
                            {course.duration || "3 חודשים"}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="course-progress">
                        <Box className="progress-header">
                          <Typography variant="body2" className="progress-text">
                            מקומות פנויים
                          </Typography>
                          <Typography variant="body2" className="progress-percentage">
                            {course.currentAmountOfStudents}/{course.amountOfStudentsInCourse}
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={(course.currentAmountOfStudents / course.amountOfStudentsInCourse) * 100} 
                          className="course-progress-bar"
                          color={course.currentAmountOfStudents >= course.amountOfStudentsInCourse * 0.8 ? "error" : "primary"}
                        />
                      </Box>
                      <Divider className="course-divider" />
                      <Box className="course-footer">
                        <Button 
                          variant="contained" 
                          color="primary" 
                          className="course-button"
                          onClick={() => handleCourseClick(course.id)}
                          endIcon={<TouchAppIcon />}
                        >
                          פרטים נוספים
                        </Button>
                        <Tooltip title="שמור לצפייה מאוחרת" placement="top" TransitionComponent={Zoom} arrow>
                          <IconButton className="bookmark-button">
                            <BookmarkIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>

          <Box className="view-all-container">
            <Button 
              variant="outlined" 
              color="primary" 
              className="view-all-button"
              onClick={handleExploreClick}
              endIcon={<ArrowForwardIcon />}
            >
              לכל הקורסים
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box className="testimonials-section" id="testimonials-section" ref={sectionRefs.testimonials}>
        <Container maxWidth="lg">
          <Box className="section-header">
            <Box className="title-with-badge">
              <Chip label="חוויות סטודנטים" className="title-badge" />
            </Box>
            <Typography variant="h4" className="section-title">
              <StarIcon className="section-icon" />
              מה אומרים עלינו
            </Typography>
            <Typography variant="subtitle1" className="section-subtitle">
              סטודנטים ובוגרים משתפים את החוויה שלהם
            </Typography>
          </Box>

          <Box className={`testimonial-slider-container ${isVisible['testimonials-section'] ? 'animate__animated animate__fadeIn' : ''}`}>
            <IconButton 
              className="testimonial-nav-button"
              onClick={() => handleTestimonialChange('prev')}
            >
              <NavigateBeforeIcon />
            </IconButton>
            
            <Box className="testimonial-slider">
              <Card className="testimonial-card">
                <CardContent>
                  <FormatQuoteIcon className="testimonial-quote-icon" />
                  <Box className="testimonial-rating">
                    {renderRatingStars(testimonials[activeTestimonial].rating)}
                  </Box>
                  <Typography variant="body1" className="testimonial-content">
                    {testimonials[activeTestimonial].content}
                  </Typography>
                  <Box className="testimonial-author">
                    <Avatar 
                      src={testimonials[activeTestimonial].avatar} 
                      alt={testimonials[activeTestimonial].name}
                      className="testimonial-avatar"
                    />
                    <Box>
                      <Typography variant="h6" className="testimonial-name">
                        {testimonials[activeTestimonial].name}
                      </Typography>
                      <Typography variant="body2" className="testimonial-role">
                        {testimonials[activeTestimonial].role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            
            <IconButton 
              className="testimonial-nav-button"
              onClick={() => handleTestimonialChange('next')}
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>
          
          <Box className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <Box 
                key={index}
                className={`testimonial-indicator ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box className="why-choose-section" id="features-section" ref={sectionRefs.features}>
        <Container maxWidth="lg">
          <Box className="section-header">
            <Box className="title-with-badge">
              <Chip label="היתרונות שלנו" className="title-badge" />
            </Box>
            <Typography variant="h4" className="section-title">
              <StarIcon className="section-icon" />
              למה ללמוד אצלנו?
            </Typography>
            <Typography variant="subtitle1" className="section-subtitle">
              הסיבות שהופכות אותנו למובילים בתחום ההכשרה המקצועית
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box className={`why-choose-image-container ${isVisible['features-section'] ? 'animate__animated animate__fadeInLeft' : ''}`}>
                <Box className="image-badge top">
                  <CheckCircleIcon />
                  מרצים מובילים
                </Box>
                <Box className="image-badge bottom">
                  <CheckCircleIcon />
                  תעודה מוכרת
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={`why-choose-content ${isVisible['features-section'] ? 'animate__animated animate__fadeInRight' : ''}`}>
                {features.map((feature, index) => (
                  <Box 
                    className="feature-item" 
                    key={index}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Box 
                      className="feature-icon-wrapper"
                      style={{ backgroundColor: feature.color }}
                    >
                      {feature.icon}
                    </Box>
                    <Box className="feature-text">
                      <Typography variant="h6" className="feature-title">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" className="feature-description">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box className="cta-section">
        <Container maxWidth="md">
          <Paper elevation={3} className={`cta-card ${isVisible['features-section'] ? 'animate__animated animate__fadeInUp' : ''}`}>
            <Box className="cta-decoration">
              <Box className="decoration-circle circle-1"></Box>
              <Box className="decoration-circle circle-2"></Box>
              <Box className="decoration-circle circle-3"></Box>
            </Box>
            <Box className="cta-content">
              <Typography variant="h4" className="cta-title">
                מוכנים להתחיל את המסע המקצועי שלכם?
              </Typography>
              <Typography variant="subtitle1" className="cta-subtitle">
                הצטרפו לאלפי בוגרים מרוצים שכבר שדרגו את הקריירה שלהם
              </Typography>
              <Box className="cta-buttons">
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  className="cta-button"
                  onClick={handleExploreClick}
                >
                  גלה קורסים
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                  className="cta-button-secondary"
                >
                  צור קשר
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box className="contact-section" id="contact-section" ref={sectionRefs.contact}>
        <Container maxWidth="lg">
          <Box className="section-header">
            <Box className="title-with-badge">
              <Chip label="דברו איתנו" className="title-badge" />
            </Box>
            <Typography variant="h4" className="section-title">
              <PhoneIcon className="section-icon" />
              צרו קשר
            </Typography>
            <Typography variant="subtitle1" className="section-subtitle">
              נשמח לענות על כל שאלה ולסייע בבחירת המסלול המתאים עבורכם
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box className={`contact-info ${isVisible['contact-section'] ? 'animate__animated animate__fadeInLeft' : ''}`}>
                <Typography variant="h5" className="contact-title">
                  פרטי התקשרות
                </Typography>
                <Typography variant="body1" className="contact-subtitle">
                  צוות השירות שלנו זמין לענות על כל שאלה ולסייע בכל נושא
                </Typography>
                
                <Box className="contact-methods">
                  <Box className="contact-method">
                    <Box className="contact-icon-wrapper">
                      <PhoneIcon className="contact-icon" />
                    </Box>
                    <Box className="contact-text">
                      <Typography variant="h6">טלפון</Typography>
                      <Typography variant="body1">03-1234567</Typography>
                    </Box>
                  </Box>
                  
                  <Box className="contact-method">
                    <Box className="contact-icon-wrapper">
                      <EmailIcon className="contact-icon" />
                    </Box>
                    <Box className="contact-text">
                      <Typography variant="h6">דוא"ל</Typography>
                      <Typography variant="body1">info@example.com</Typography>
                    </Box>
                  </Box>
                  
                  <Box className="contact-method">
                    <Box className="contact-icon-wrapper">
                      <LocationOnIcon className="contact-icon" />
                    </Box>
                    <Box className="contact-text">
                      <Typography variant="h6">כתובת</Typography>
                      <Typography variant="body1">רחוב הלימודים 123, תל אביב</Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box className="contact-hours">
                  <Typography variant="h6">שעות פעילות</Typography>
                  <Typography variant="body2">ימים א'-ה': 09:00-18:00</Typography>
                  <Typography variant="body2">יום ו': 09:00-13:00</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={`contact-form-container ${isVisible['contact-section'] ? 'animate__animated animate__fadeInRight' : ''}`}>
                <Paper className="contact-form-paper" elevation={3}>
                  <Typography variant="h5" className="form-title">
                    שלחו לנו הודעה
                  </Typography>
                  
                  <form className="contact-form">
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="שם מלא"
                          variant="outlined"
                          fullWidth
                          className="form-field"
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="טלפון"
                          variant="outlined"
                          fullWidth
                          className="form-field"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          // label="דוא\"ל"
                          label="דוא\ל"  
                          variant="outlined"
                          fullWidth
                          className="form-field"
                          required
                          type="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl variant="outlined" fullWidth className="form-field">
                          <InputLabel>נושא הפנייה</InputLabel>
                          <Select
                            label="נושא הפנייה"
                            defaultValue=""
                          >
                            <MenuItem value="">בחר נושא</MenuItem>
                            <MenuItem value="מידע על קורסים">מידע על קורסים</MenuItem>
                            <MenuItem value="ייעוץ לימודי">ייעוץ לימודי</MenuItem>
                            <MenuItem value="תמיכה טכנית">תמיכה טכנית</MenuItem>
                            <MenuItem value="אחר">אחר</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="תוכן ההודעה"
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={4}
                          className="form-field"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          className="submit-button"
                          endIcon={<SendIcon />}
                        >
                          שליחה
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Partners Section */}
      <Box className="partners-section">
        <Container maxWidth="lg">
          <Typography variant="h6" className="partners-title">
            בשיתוף פעולה עם החברות המובילות במשק
          </Typography>
          
          <Box className="partners-logos">
            <Box className="partner-logo">
              <img src="./pic/unnamed.png" alt="Partner 1" /> 
            </Box>
            <Box className="partner-logo">
              <img src="/assets/images/partner2.png" alt="Partner 2" />
            </Box>
            <Box className="partner-logo">
              <img src="/assets/images/partner3.png" alt="Partner 3" />
            </Box>
            <Box className="partner-logo">
              <img src="/assets/images/partner4.png" alt="Partner 4" />
            </Box>
            <Box className="partner-logo">
              <img src="/assets/images/partner5.png" alt="Partner 5" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box className="footer">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="footer-title">
                אודות המכללה
              </Typography>
              <Typography variant="body2" className="footer-text">
                המכללה המקצועית שלנו מציעה מגוון רחב של קורסים והכשרות מקצועיות ברמה הגבוהה ביותר. אנו מחויבים לספק חווית לימודים איכותית ומעשירה לכל הסטודנטים שלנו.
              </Typography>
              <Box className="footer-social">
                <IconButton className="social-button facebook">
                  <i className="fab fa-facebook-f"></i>
                </IconButton>
                <IconButton className="social-button instagram">
                  <i className="fab fa-instagram"></i>
                </IconButton>
                <IconButton className="social-button linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </IconButton>
                <IconButton className="social-button youtube">
                  <i className="fab fa-youtube"></i>
                </IconButton>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" className="footer-title">
                קישורים מהירים
              </Typography>
              <ul className="footer-menu">
                <li><a href="#">דף הבית</a></li>
                <li><a href="#">אודות</a></li>
                <li><a href="#">קורסים</a></li>
                <li><a href="#">לוח זמנים</a></li>
                <li><a href="#">צור קשר</a></li>
              </ul>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" className="footer-title">
                תחומי לימוד
              </Typography>
              <ul className="footer-menu">
                <li><a href="#">ראיית חשבון</a></li>
                <li><a href="#">הנדסאות תוכנה</a></li>
                <li><a href="#">גרפיקה ועיצוב</a></li>
                <li><a href="#">הוראה וחינוך</a></li>
                <li><a href="#">כל הקורסים</a></li>
              </ul>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="footer-title">
                הירשמו לניוזלטר
              </Typography>
              <Typography variant="body2" className="footer-text">
                הישארו מעודכנים בקורסים חדשים, אירועים ומבצעים מיוחדים
              </Typography>
              <Box className="newsletter-form">
                <TextField
                  variant="outlined"
                  placeholder="הזינו את כתובת המייל שלכם"
                  fullWidth
                  className="newsletter-input"
                />
                <Button
                  variant="contained"
                  className="newsletter-button"
                  endIcon={<SendIcon />}
                >
                  הרשמה
                </Button>
              </Box>
            </Grid>
          </Grid>
          
          <Divider className="footer-divider" />
          
          <Box className="footer-bottom">
            <Typography variant="body2" className="copyright">
              © {new Date().getFullYear()} כל הזכויות שמורות למכללה המקצועית
            </Typography>
            <Box className="footer-bottom-links">
              <a href="#">תנאי שימוש</a>
              <a href="#">מדיניות פרטיות</a>
              <a href="#">מפת האתר</a>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};
// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';
// import { 
//   Container, 
//   Typography, 
//   Box, 
//   Button, 
//   Card, 
//   CardContent, 
//   Grid, 
//   Divider, 
//   Paper,
//   Tooltip,
//   Zoom,
//   IconButton,
//   Chip,
//   Avatar,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   LinearProgress
// } from '@mui/material';

// // Icons
// import SchoolIcon from '@mui/icons-material/School';
// import ExploreIcon from '@mui/icons-material/Explore';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import GroupIcon from '@mui/icons-material/Group';
// import TouchAppIcon from '@mui/icons-material/TouchApp';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import StarIcon from '@mui/icons-material/Star';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import PersonIcon from '@mui/icons-material/Person';
// import EventNoteIcon from '@mui/icons-material/EventNote';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import WhatshotIcon from '@mui/icons-material/Whatshot';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SendIcon from '@mui/icons-material/Send';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// // Styles
// import './HomePage.css';

// // Components
// import { Routing } from '../Routing/Routing';
// import {getCoursesThunk} from '../../redux/Thunks/getCoursesThunk'; 

// export const HomePage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const featuredCourses = useSelector(state => state.courses.courses|| []);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [isVisible, setIsVisible] = useState({});
//   const [showScrollTop, setShowScrollTop] = useState(false);
  
//   // יצירת רפרנסים לסקשנים
//   const sectionRefs = {
//     hero: useRef(null),
//     categories: useRef(null),
//     courses: useRef(null),
//     testimonials: useRef(null),
//     features: useRef(null),
//     contact: useRef(null)
//   };
  
//   // מידע על עדויות
//   const testimonials = [
//     {
//       name: "יעל כהן",
//       role: "בוגרת קורס ראיית חשבון",
//       avatar: "/assets/images/testimonial1.jpg",
//       content: "הקורס היה מעולה! המרצים מקצועיים ומעבירים את החומר בצורה ברורה ומעניינת. הצלחתי למצוא עבודה תוך חודש מסיום הקורס.",
//       rating: 5
//     },
//     {
//       name: "דוד לוי",
//       role: "סטודנט בקורס הנדסאות תוכנה",
//       avatar: "/assets/images/testimonial2.jpg",
//       content: "אני לומד כרגע בקורס הנדסאות תוכנה וכבר אחרי חודשיים אני מרגיש שרכשתי ידע רב. הלימודים מעשיים מאוד ומותאמים לדרישות השוק.",
//       rating: 4.5
//     },
//     {
//       name: "מיכל אברהם",
//       role: "בוגרת קורס גרפיקה ועיצוב",
//       avatar: "/assets/images/testimonial3.jpg",
//       content: "הקורס נתן לי את כל הכלים להתחיל קריירה בעיצוב גרפי. המרצים מקצועיים והתרגולים המעשיים עזרו לי לבנות תיק עבודות מרשים.",
//       rating: 5
//     }
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       await dispatch(getCoursesThunk());    
//       setIsLoading(false);
//     };
    
//     fetchData();
    
//     // הגדרת החלפה אוטומטית של תגובות הסטודנטים
//     const testimonialInterval = setInterval(() => {
//       setActiveTestimonial(prev => (prev + 1) % testimonials.length);
//     }, 5000); // החלפה כל 5 שניות
    
//     // ניקוי הטיימר בעת עזיבת הקומפוננטה
//     return () => clearInterval(testimonialInterval);
//   }, [dispatch, testimonials.length]);

//   const handleExploreClick = () => {
//     navigate('/Course');    
//   };

//   const handleCourseClick = (courseId) => {
//     navigate(`/Course/${courseId}`);
//   };

//   const handleTestimonialChange = (index) => {
//     setActiveTestimonial(index);
//   };

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // מעקב אחר גלילה כדי להציג/להסתיר כפתור חזרה למעלה
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowScrollTop(true);
//       } else {
//         setShowScrollTop(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const categories = [
//     { id: 1, name: 'ראיית חשבון', count: 12, icon: <SchoolIcon className="category-icon" /> },
//     { id: 2, name: 'הנדסאות תוכנה', count: 18, icon: <SchoolIcon className="category-icon" /> },
//     { id: 3, name: 'גרפיקה ועיצוב', count: 9, icon: <SchoolIcon className="category-icon" /> },
//     { id: 4, name: 'הוראה וחינוך', count: 15, icon: <SchoolIcon className="category-icon" /> }
//   ];

//   const stats = [
//     { value: '1,200+', label: 'סטודנטים פעילים' },
//     { value: '150+', label: 'קורסים מקצועיים' },
//     { value: '50+', label: 'מרצים מומחים' },
//     { value: '95%', label: 'שביעות רצון' }
//   ];

//   return (
//     <div className="home-page-wrapper">
//       <Routing />
      
//       {/* Hero Section */}
//       <Box className="hero-section" ref={sectionRefs.hero}>
//         <Container maxWidth="lg">
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Box className="hero-content">
//                 <Typography variant="h3" className="hero-title">
//                   פתח את הדלת להזדמנויות חדשות
//                 </Typography>
//                 <Typography variant="subtitle1" className="hero-subtitle">
//                   מגוון קורסים מקצועיים המותאמים לדרישות השוק, בהנחיית מרצים מובילים בתחומם
//                 </Typography>
//                 <Box className="hero-buttons">
//                   <Button 
//                     variant="contained" 
//                     color="primary" 
//                     className="explore-button"
//                     onClick={handleExploreClick}
//                     endIcon={<ExploreIcon />}
//                   >
//                     גלה קורסים
//                   </Button>
//                   <Button 
//                     variant="outlined" 
//                     color="primary" 
//                     className="about-button"
//                     component={Link}
//                     to="/Speaker"
//                   >
//                     אודותינו
//                   </Button>
//                 </Box>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box className="hero-image-container">
//                 {/* <img 
//                   src="../public/door.png" 
//                   alt="לימודים מקצועיים" 
//                   className="hero-image" 
//                 /> */}
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Stats Section */}
//       <Container maxWidth="lg">
//         <Paper elevation={3} className="stats-card">
//           <Grid container spacing={2}>
//             {stats.map((stat, index) => (
//               <Grid item xs={6} md={3} key={index}>
//                 <Box className="stat-item">
//                   <Typography variant="h4" className="stat-value">
//                     {stat.value}
//                   </Typography>
//                   <Typography variant="body2" className="stat-label">
//                     {stat.label}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Paper>
//       </Container>

//       {/* Categories Section */}
//       <Box className="categories-section" ref={sectionRefs.categories}>
//         <Container maxWidth="lg">
//           <Box className="section-header">
//             <Typography variant="h4" className="section-title">
//               <SchoolIcon className="section-icon" />
//               קטגוריות לימוד
//             </Typography>
//             <Typography variant="subtitle1" className="section-subtitle">
//               בחרו מתוך מגוון תחומי הלימוד המקצועיים שלנו
//             </Typography>
//           </Box>

//           <Grid container spacing={3}>
//             {categories.map(category => (
//               <Grid item xs={12} sm={6} md={3} key={category.id}>
//                 <Card className="category-card">
//                   <CardContent>
//                     <Box className="category-icon-wrapper">
//                       {category.icon}
//                     </Box>
//                     <Typography variant="h6" className="category-title">
//                       {category.name}
//                     </Typography>
//                     <Typography variant="body2" className="category-count">
//                       {category.count} קורסים
//                     </Typography>
//                     <Button 
//                       variant="text" 
//                       color="primary" 
//                       className="category-button"
//                       endIcon={<ArrowForwardIcon />}
//                       component={Link}
//                       to="/Course"
//                     >
//                       לכל הקורסים
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Featured Courses */}
//       <Box className="featured-courses-section" ref={sectionRefs.courses}>
//         <Container maxWidth="lg">
//           <Box className="section-header">
//             <Typography variant="h4" className="section-title">
//               <EmojiEventsIcon className="section-icon" />
//               קורסים מובילים
//             </Typography>
//             <Typography variant="subtitle1" className="section-subtitle">
//               הקורסים הפופולריים ביותר בקרב הסטודנטים שלנו
//             </Typography>
//           </Box>

//           <Grid container spacing={3}>
//             {isLoading ? (
//               <Box className="loading-container">
//                 <Typography>טוען קורסים...</Typography>
//               </Box>
//             ) : (
//               featuredCourses.slice(0, 4).map(course => (
//                 <Grid item xs={12} sm={6} md={3} key={course.id}>
//                   <Card className="course-card">
//                     <Box className="course-image-container">
//                       <img 
//                         src={course.image || "/assets/images/course-placeholder.jpg"} 
//                         alt={course.nameOfCourse} 
//                         className="course-image" 
//                       />
//                       <Box className="course-badge">
//                         {course.currentAmountOfStudents >= course.amountOfStudentsInCourse * 0.8 ? 
//                           "פופולרי" : "חדש"}
//                       </Box>
//                     </Box>
//                     <CardContent className="course-content">
//                       <Typography variant="body2" className="course-category">
//                         {course.category}
//                       </Typography>
//                       <Typography variant="h6" className="course-title">
//                         {course.nameOfCourse}
//                       </Typography>
//                       <Box className="course-details">
//                         <Box className="course-detail">
//                           <EventNoteIcon className="detail-icon" />
//                           <Typography variant="body2">
//                             {course.amountOfMettingInCourse} מפגשים
//                           </Typography>
//                         </Box>
//                         <Box className="course-detail">
//                           <PersonIcon className="detail-icon" />
//                           <Typography variant="body2">
//                             {course.currentAmountOfStudents}/{course.amountOfStudentsInCourse} תלמידים
//                           </Typography>
//                         </Box>
//                       </Box>
//                       <Divider className="course-divider" />
//                       <Box className="course-footer">
//                         <Button 
//                           variant="contained" 
//                           color="primary" 
//                           className="course-button"
//                           onClick={() => handleCourseClick(course.id)}
//                           endIcon={<TouchAppIcon />}
//                           component={Link}
//                           to={`/ShowCourse/${course.id}`}
//                         >
//                           פרטים נוספים
//                         </Button>
//                         <Tooltip title="שמור לצפייה מאוחרת" placement="top" TransitionComponent={Zoom} arrow>
//                         <IconButton className="bookmark-button">
//                             <BookmarkIcon />
//                           </IconButton>
//                         </Tooltip>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))
//             )}
//           </Grid>

//           <Box className="view-all-container">
//             <Button 
//               variant="outlined" 
//               color="primary" 
//               className="view-all-button"
//               component={Link}
//               to="/Course"
//               endIcon={<ArrowForwardIcon />}
//             >
//               לכל הקורסים
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       {/* Testimonials Section */}
//       <Box className="testimonials-section" ref={sectionRefs.testimonials}>
//         <Container maxWidth="lg">
//           <Box className="section-header">
//             <Typography variant="h4" className="section-title">
//               <StarIcon className="section-icon" />
//               מה אומרים הסטודנטים שלנו
//             </Typography>
//             <Typography variant="subtitle1" className="section-subtitle">
//               חוויות אמיתיות מבוגרים וסטודנטים שלמדו אצלנו
//             </Typography>
//           </Box>

//           <Box className="testimonial-slider-container">
//             <IconButton 
//               className="testimonial-nav-button"
//               onClick={() => handleTestimonialChange((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
//             >
//               <NavigateBeforeIcon />
//             </IconButton>
            
//             <Box className="testimonial-slider">
//               <Card className="testimonial-card">
//                 <CardContent>
//                   <FormatQuoteIcon className="testimonial-quote-icon" />
                  
//                   <Box className="testimonial-rating">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <StarIcon 
//                         key={star}
//                         className={
//                           star <= testimonials[activeTestimonial].rating 
//                             ? "star-filled" 
//                             : star - 0.5 <= testimonials[activeTestimonial].rating 
//                               ? "star-half" 
//                               : "star-empty"
//                         }
//                       />
//                     ))}
//                   </Box>
                  
//                   <Typography variant="body1" className="testimonial-content">
//                     {testimonials[activeTestimonial].content}
//                   </Typography>
                  
//                   <Box className="testimonial-author">
//                     <Avatar 
//                       src={testimonials[activeTestimonial].avatar} 
//                       alt={testimonials[activeTestimonial].name}
//                       className="testimonial-avatar"
//                     />
//                     <Box>
//                       <Typography variant="h6" className="testimonial-name">
//                         {testimonials[activeTestimonial].name}
//                       </Typography>
//                       <Typography variant="body2" className="testimonial-role">
//                         {testimonials[activeTestimonial].role}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Box>
            
//             <IconButton 
//               className="testimonial-nav-button"
//               onClick={() => handleTestimonialChange((activeTestimonial + 1) % testimonials.length)}
//             >
//               <NavigateNextIcon />
//             </IconButton>
//           </Box>
          
//           <Box className="testimonial-indicators">
//             {testimonials.map((_, index) => (
//               <Box 
//                 key={index}
//                 className={`testimonial-indicator ${index === activeTestimonial ? 'active' : ''}`}
//                 onClick={() => handleTestimonialChange(index)}
//               />
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* Why Choose Us */}
//       <Box className="why-choose-section" ref={sectionRefs.features}>
//         <Container maxWidth="lg">
//           <Box className="section-header">
//             <Typography variant="h4" className="section-title">
//               <StarIcon className="section-icon" />
//               למה ללמוד אצלנו?
//             </Typography>
//             <Typography variant="subtitle1" className="section-subtitle">
//               הסיבות שהופכות אותנו למובילים בתחום ההכשרה המקצועית
//             </Typography>
//           </Box>

//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Box className="why-choose-image-container">
//                 {/* <img 
//                   src="/assets/images/why-choose-us.png" 
//                   alt="למה ללמוד אצלנו" 
//                   className="why-choose-image" 
//                 /> */}
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box className="why-choose-content">
//                 <Box className="feature-item">
//                   <Box className="feature-icon-wrapper">
//                     <GroupIcon className="feature-icon" />
//                   </Box>
//                   <Box className="feature-text">
//                     <Typography variant="h6" className="feature-title">
//                       מרצים מובילים בתחומם
//                     </Typography>
//                     <Typography variant="body2" className="feature-description">
//                       צוות המרצים שלנו מורכב ממומחים בעלי ניסיון מעשי רב בתעשייה
//                     </Typography>
//                   </Box>
//                 </Box>

//                 <Box className="feature-item">
//                   <Box className="feature-icon-wrapper">
//                     <TouchAppIcon className="feature-icon" />
//                   </Box>
//                   <Box className="feature-text">
//                     <Typography variant="h6" className="feature-title">
//                       למידה מעשית והתנסות
//                     </Typography>
//                     <Typography variant="body2" className="feature-description">
//                       הקורסים שלנו משלבים תיאוריה ופרקטיקה לחוויית למידה אפקטיבית
//                     </Typography>
//                   </Box>
//                 </Box>

//                 <Box className="feature-item">
//                   <Box className="feature-icon-wrapper">
//                     <TrendingUpIcon className="feature-icon" />
//                   </Box>
//                   <Box className="feature-text">
//                     <Typography variant="h6" className="feature-title">
//                       התאמה לדרישות השוק
//                     </Typography>
//                     <Typography variant="body2" className="feature-description">
//                       תכני הלימוד מתעדכנים באופן שוטף בהתאם לדרישות המשתנות בשוק העבודה
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Call to Action */}
//       <Box className="cta-section">
//         <Container maxWidth="md">
//           <Paper elevation={3} className="cta-card">
//             <Box className="cta-decoration">
//               <Box className="decoration-circle circle-1" />
//               <Box className="decoration-circle circle-2" />
//               <Box className="decoration-circle circle-3" />
//             </Box>
            
//             <Box className="cta-content">
//               <Typography variant="h4" className="cta-title">
//                 מוכנים להתחיל את המסע המקצועי שלכם?
//               </Typography>
//               <Typography variant="subtitle1" className="cta-subtitle">
//                 הצטרפו לאלפי בוגרים מרוצים שכבר שדרגו את הקריירה שלהם
//               </Typography>
//               <Box className="cta-buttons">
//                 <Button 
//                   variant="contained" 
//                   className="cta-button"
//                   component={Link}
//                   to="/Course"
//                 >
//                   גלה קורסים
//                 </Button>
//                 <Button 
//                   variant="outlined" 
//                   className="cta-button-secondary"
//                   component={Link}
//                   to="/Student"
//                 >
//                   הרשמה לקורס
//                 </Button>
//               </Box>
//             </Box>
//           </Paper>
//         </Container>
//       </Box>

//       {/* Contact Section */}
//       <Box className="contact-section" ref={sectionRefs.contact}>
//         <Container maxWidth="lg">
//           <Box className="section-header">
//             <Typography variant="h4" className="section-title">
//               <PhoneIcon className="section-icon" />
//               צור קשר
//             </Typography>
//             <Typography variant="subtitle1" className="section-subtitle">
//               יש לכם שאלות? אנחנו כאן לעזור
//             </Typography>
//           </Box>
          
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={5}>
//               <Box className="contact-info">
//                 <Typography variant="h5" className="contact-title">
//                   נשמח לשמוע מכם
//                 </Typography>
//                 <Typography variant="body1" className="contact-subtitle">
//                   צוות השירות שלנו זמין לענות על כל שאלה ולסייע בכל נושא. אל תהססו לפנות אלינו.
//                 </Typography>
                
//                 <Box className="contact-methods">
//                   <Box className="contact-method">
//                     <Box className="contact-icon-wrapper">
//                       <PhoneIcon className="contact-icon" />
//                     </Box>
//                     <Box className="contact-text">
//                       <Typography variant="h6">טלפון</Typography>
//                       <Typography variant="body2">03-1234567</Typography>
//                     </Box>
//                   </Box>
                  
//                   <Box className="contact-method">
//                     <Box className="contact-icon-wrapper">
//                       <EmailIcon className="contact-icon" />
//                     </Box>
//                     <Box className="contact-text">
//                       <Typography variant="h6">דוא"ל</Typography>
//                       <Typography variant="body2">info@example.com</Typography>
//                     </Box>
//                   </Box>
                  
//                   <Box className="contact-method">
//                     <Box className="contact-icon-wrapper">
//                       <LocationOnIcon className="contact-icon" />
//                     </Box>
//                     <Box className="contact-text">
//                       <Typography variant="h6">כתובת</Typography>
//                       <Typography variant="body2">רחוב הלימודים 123, תל אביב</Typography>
//                     </Box>
//                   </Box>
//                 </Box>
                
//                 <Box className="contact-hours">
//                   <Typography variant="h6">שעות פעילות</Typography>
//                   <Typography variant="body2">ימים א'-ה': 9:00-17:00</Typography>
//                   <Typography variant="body2">יום ו': 9:00-13:00</Typography>
//                 </Box>
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} md={7}>
//               <Paper elevation={3} className="contact-form-paper">
//                 <Typography variant="h5" className="form-title">
//                   שלחו לנו הודעה
//                 </Typography>
                
//                 <Box component="form" className="contact-form">
//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         fullWidth
//                         label="שם מלא"
//                         variant="outlined"
//                         className="form-field"
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         fullWidth
//                         label='דוא"ל'                        variant="outlined"
//                         className="form-field"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="נושא"
//                         variant="outlined"
//                         className="form-field"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="הודעה"
//                         variant="outlined"
//                         multiline
//                         rows={4}
//                         className="form-field"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Button
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                         className="submit-button"
//                         endIcon={<SendIcon />}
//                       >
//                         שלח הודעה
//                       </Button>
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//         <Box 
//           className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
//           onClick={handleScrollToTop}
//         >
//           <KeyboardArrowUpIcon />
//         </Box>
//       )}
//     </div>
//   );
// };
