// 
import React, { useState, useEffect } from 'react';
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
  IconButton
} from '@mui/material';

// Icons
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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(getCoursesThunk());    
      setIsLoading(false);
    };
    
    fetchData();
  }, [dispatch]);

  const handleExploreClick = () => {
    navigate('/Course');    
  };

  const handleCourseClick = (courseId) => {
    navigate(`/Course/${courseId}`);
  };

  const categories = [
    { id: 1, name: 'ראיית חשבון', count: 12, icon: <SchoolIcon className="category-icon" /> },
    { id: 2, name: 'הנדסאות תוכנה', count: 18, icon: <SchoolIcon className="category-icon" /> },
    { id: 3, name: 'גרפיקה ועיצוב', count: 9, icon: <SchoolIcon className="category-icon" /> },
    { id: 4, name: 'הוראה וחינוך', count: 15, icon: <SchoolIcon className="category-icon" /> }
  ];

  const stats = [
    { value: '1,200+', label: 'סטודנטים פעילים' },
    { value: '150+', label: 'קורסים מקצועיים' },
    { value: '50+', label: 'מרצים מומחים' },
    { value: '95%', label: 'שביעות רצון' }
  ];

  return (
    <div className="home-page-wrapper">
      <Routing />
      
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="hero-content">
                <Typography variant="h3" className="hero-title">
                  פתח את הדלת להזדמנויות חדשות
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
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="hero-image-container">
                {/* <img 
                  src="../public/door.png" 
                //   alt="לימודים מקצועיים" 
                  className="hero-image" 
                /> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg">
        <Paper elevation={3} className="stats-card">
          <Grid container spacing={2}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box className="stat-item">
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
      <Box className="categories-section">
        <Container maxWidth="lg">
          <Box className="section-header">
            <Typography variant="h4" className="section-title">
              <SchoolIcon className="section-icon" />
              קטגוריות לימוד
            </Typography>
            <Typography variant="subtitle1" className="section-subtitle">
              בחרו מתוך מגוון תחומי הלימוד המקצועיים שלנו
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {categories.map(category => (
              <Grid item xs={12} sm={6} md={3} key={category.id}>
                <Card className="category-card">
                  <CardContent>
                    <Box className="category-icon-wrapper">
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
      <Box className="featured-courses-section">
        <Container maxWidth="lg">
          <Box className="section-header">
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
                <Typography>טוען קורסים...</Typography>
              </Box>
            ) : (
              featuredCourses.slice(0, 4).map(course => (
                <Grid item xs={12} sm={6} md={3} key={course.id}>
                  <Card className="course-card">
                    <Box className="course-image-container">
                      <img 
                        src={course.image || "/assets/images/course-placeholder.jpg"} 
                        alt={course.nameOfCourse} 
                        className="course-image" 
                      />
                      <Box className="course-badge">
                        {course.currentAmountOfStudents >= course.amountOfStudentsInCourse * 0.8 ? 
                          "פופולרי" : "חדש"}
                      </Box>
                    </Box>
                    <CardContent className="course-content">
                      <Typography variant="body2" className="course-category">
                        {course.category}
                      </Typography>
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
                          <PersonIcon className="detail-icon" />
                          <Typography variant="body2">
                            {course.currentAmountOfStudents}/{course.amountOfStudentsInCourse} תלמידים
                          </Typography>
                        </Box>
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

      {/* Why Choose Us */}
      <Box className="why-choose-section">
        <Container maxWidth="lg">
          <Box className="section-header">
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
              <Box className="why-choose-image-container">
                {/* <img 
                  src="/assets/images/why-choose-us.png" 
                  alt="למה ללמוד אצלנו" 
                  className="why-choose-image" 
                /> */}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="why-choose-content">
                <Box className="feature-item">
                  <Box className="feature-icon-wrapper">
                    <GroupIcon className="feature-icon" />
                  </Box>
                  <Box className="feature-text">
                    <Typography variant="h6" className="feature-title">
                      מרצים מובילים בתחומם
                    </Typography>
                    <Typography variant="body2" className="feature-description">
                      צוות המרצים שלנו מורכב ממומחים בעלי ניסיון מעשי רב בתעשייה
                    </Typography>
                  </Box>
                </Box>

                <Box className="feature-item">
                  <Box className="feature-icon-wrapper">
                    <TouchAppIcon className="feature-icon" />
                  </Box>
                  <Box className="feature-text">
                    <Typography variant="h6" className="feature-title">
                      למידה מעשית והתנסות
                    </Typography>
                    <Typography variant="body2" className="feature-description">
                      הקורסים שלנו משלבים תיאוריה ופרקטיקה לחוויית למידה אפקטיבית
                    </Typography>
                  </Box>
                </Box>

                <Box className="feature-item">
                  <Box className="feature-icon-wrapper">
                    <TrendingUpIcon className="feature-icon" />
                  </Box>
                  <Box className="feature-text">
                    <Typography variant="h6" className="feature-title">
                      התאמה לדרישות השוק
                    </Typography>
                    <Typography variant="body2" className="feature-description">
                      תכני הלימוד מתעדכנים באופן שוטף בהתאם לדרישות המשתנות בשוק העבודה
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box className="cta-section">
        <Container maxWidth="md">
          <Paper elevation={3} className="cta-card">
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
          </Paper>
        </Container>
      </Box>
    </div>
  );
};