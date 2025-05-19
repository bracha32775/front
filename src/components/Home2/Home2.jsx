import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // הוספת האייקון החסר
import SupportAgentIcon from '@mui/icons-material/SupportAgent'; // הוספת האייקון החסר

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
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  Fade,
  Grow,
  Chip
} from '@mui/material';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ClassIcon from '@mui/icons-material/Class';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import SpeedIcon from '@mui/icons-material/Speed';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BookmarkIcon from '@mui/icons-material/Bookmark';

// Components
import { Routing } from '../Routing/Routing';
import {getCoursesThunk} from '../../redux/Thunks/getCoursesThunk'; 

// Styles
import './Home2.css';

export const Home2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector(state => state.courses.courses || []);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // מידע על משימות לביצוע
  const [tasks, setTasks] = useState([
    { id: 1, title: 'אישור רישום סטודנטים חדשים', dueDate: '2023-06-15', priority: 'high', completed: false },
    { id: 2, title: 'עדכון פרטי מרצה בקורס "ניהול פרויקטים"', dueDate: '2023-06-18', priority: 'medium', completed: false },
    { id: 3, title: 'הפקת דוחות נוכחות חודשיים', dueDate: '2023-06-20', priority: 'medium', completed: true },
    { id: 4, title: 'תזכורת למרצים להגשת סילבוסים', dueDate: '2023-06-22', priority: 'low', completed: false },
  ]);
  
  // מידע על התראות
  const [notifications, setNotifications] = useState([
    { id: 1, title: '5 סטודנטים חדשים נרשמו לקורס "ניהול זמן"', time: '10:30', read: false },
    { id: 2, title: 'המרצה דוד כהן ביטל את השיעור ביום שלישי', time: '09:15', read: false },
    { id: 3, title: 'יש לאשר את לוח הזמנים לסמסטר הבא', time: 'אתמול', read: true },
    { id: 4, title: 'תזכורת: פגישת צוות בשעה 14:00', time: 'אתמול', read: true },
  ]);
  
  // מידע על אירועים קרובים
  const [upcomingEvents, setUpcomingEvents] = useState([
    { id: 1, title: 'פתיחת קורס "ניהול משא ומתן"', date: '15 ביוני, 2023', time: '09:00', location: 'כיתה 305' },
    { id: 2, title: 'סיום קורס "מיומנויות מחשב"', date: '18 ביוני, 2023', time: '16:30', location: 'מעבדת מחשבים' },
    { id: 3, title: 'פגישת צוות שבועית', date: '20 ביוני, 2023', time: '14:00', location: 'חדר ישיבות ראשי' },
  ]);
  
  // מידע על קישורים מהירים
  const quickLinks = [
    { id: 1, title: 'ניהול קורסים', icon: <ClassIcon />, path: '/Course', color: '#3f51b5' },
    { id: 2, title: 'ניהול סטודנטים', icon: <PeopleIcon />, path: '/Student', color: '#4caf50' },
    { id: 3, title: 'ניהול מרצים', icon: <SchoolIcon />, path: '/Speaker', color: '#ff9800' },
    { id: 4, title: 'דוחות וסטטיסטיקות', icon: <BarChartIcon />, path: '/B', color: '#e91e63' },
  ];
  
  // מידע על פעולות מהירות
  const quickActions = [
    { id: 1, title: 'הוספת קורס חדש', icon: <AddCircleOutlineIcon />, action: () => navigate('/Course'), color: '#3f51b5' },
    { id: 2, title: 'רישום סטודנט', icon: <PersonAddIcon />, action: () => navigate('/Student'), color: '#4caf50' },
    { id: 3, title: 'הוספת מרצה', icon: <GroupAddIcon />, action: () => navigate('/Speaker'), color: '#ff9800' },
    { id: 4, title: 'יצירת דוח', icon: <DescriptionIcon />, action: () => navigate('/B'), color: '#e91e63' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(getCoursesThunk());    
      setIsLoading(false);
    };
    
    fetchData();
    
    // עדכון התאריך הנוכחי כל דקה
    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    
    return () => {
      clearInterval(dateInterval);
    };
  }, [dispatch]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleTaskToggle = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleNotificationRead = (notificationId) => {
    setNotifications(notifications.map(notification => 
      notification.id === notificationId ? { ...notification, read: true } : notification
    ));
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#f44336';
      case 'medium': return '#ff9800';
      case 'low': return '#4caf50';
      default: return '#757575';
    }
  };

  const getUnreadNotificationsCount = () => {
    return notifications.filter(notification => !notification.read).length;
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('he-IL', options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="admin-home-page">
     
      
      {/* Header Section */}
      <Box className="admin-header">
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box className="welcome-section">
                <Typography variant="h4" className="welcome-title">
                  שלום, מנהל/ת ההשתלמויות
                </Typography>
                <Typography variant="subtitle1" className="welcome-subtitle">
                  {formatDate(currentDate)} | {formatTime(currentDate)}
                </Typography>
                <Box className="header-stats">
                  <Box className="stat-item">
                    <Typography variant="h5">{courses.length}</Typography>
                    <Typography variant="body2">קורסים פעילים</Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box className="stat-item">
                    <Typography variant="h5">
                      {courses.reduce((sum, course) => sum + course.currentAmountOfStudents, 0)}
                    </Typography>
                    <Typography variant="body2">סטודנטים</Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box className="stat-item">
                    <Typography variant="h5">{tasks.filter(task => !task.completed).length}</Typography>
                    <Typography variant="body2">משימות לביצוע</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className="header-actions">
                <Button 
                  variant="contained" 
                  color="primary" 
                  className="action-button"
                  startIcon={<AddCircleOutlineIcon />}
                  component={Link}
                  to="/Course"
                >
                  הוספת קורס חדש
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  className="action-button"
                  startIcon={<SearchIcon />}
                >
                  חיפוש מתקדם
                </Button>
                <IconButton className="notification-button">
                  <Badge badgeContent={getUnreadNotificationsCount()} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Main Content */}
      <Container maxWidth="xl" className="admin-content">
        <Grid container spacing={3}>
          {/* Navigation Tabs */}
          <Grid item xs={12}>
            <Paper className="nav-tabs-container">
              <Box className="nav-tabs">
                <Button 
                  className={`nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
                  onClick={() => handleTabChange('dashboard')}
                  startIcon={<DashboardIcon />}
                >
                  לוח בקרה
                </Button>
                <Button 
                  className={`nav-tab ${activeTab === 'courses' ? 'active' : ''}`}
                  onClick={() => handleTabChange('courses')}
                  startIcon={<ClassIcon />}
                >
                  קורסים
                </Button>
                <Button 
                  className={`nav-tab ${activeTab === 'students' ? 'active' : ''}`}
                  onClick={() => handleTabChange('students')}
                  startIcon={<PeopleIcon />}
                >
                  סטודנטים
                </Button>
                <Button 
                  className={`nav-tab ${activeTab === 'speakers' ? 'active' : ''}`}
                  onClick={() => handleTabChange('speakers')}
                  startIcon={<SchoolIcon />}
                >
                  מרצים
                </Button>
                <Button 
                  className={`nav-tab ${activeTab === 'reports' ? 'active' : ''}`}
                  onClick={() => handleTabChange('reports')}
                  startIcon={<BarChartIcon />}
                >
                  דוחות
                </Button>
              </Box>
            </Paper>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {quickLinks.map(link => (
                <Grid item xs={6} sm={3} key={link.id}>
                  <Paper 
                    className="quick-link-card" 
                    component={Link} 
                    to={link.path}
                    style={{ borderTop: `4px solid ${link.color}` }}
                  >
                    <Box className="quick-link-icon" style={{ color: link.color }}>
                      {link.icon}
                    </Box>
                    <Typography variant="h6" className="quick-link-title">
                      {link.title}
                    </Typography>
                    <ArrowForwardIcon className="quick-link-arrow" />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* Main Dashboard Content */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
                           {/* Active Courses */}
                           <Grid item xs={12}>
                <Paper className="dashboard-card">
                  <Box className="card-header">
                    <Box className="card-title-section">
                      <ClassIcon className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        קורסים פעילים
                      </Typography>
                    </Box>
                    <Button 
                      variant="text" 
                      color="primary" 
                      className="view-all-button"
                      component={Link}
                      to="/Course"
                      endIcon={<ArrowForwardIcon />}
                    >
                      צפה בכל הקורסים
                    </Button>
                  </Box>
                  
                  <Divider />
                  
                  {isLoading ? (
                    <Box className="loading-container">
                      <LinearProgress color="primary" className="loading-progress" />
                    </Box>
                  ) : (
                    <Box className="courses-list">
                      {courses.slice(0, 4).map((course, index) => (
                        <Box key={course.id || index} className="course-list-item">
                          <Box className="course-info">
                            <Box className="course-icon-wrapper">
                              <MenuBookIcon className="course-list-icon" />
                            </Box>
                            <Box className="course-details">
                              <Typography variant="subtitle1" className="course-name">
                                {course.nameOfCourse}
                              </Typography>
                              <Box className="course-meta">
                                <Box className="meta-item">
                                  <CalendarTodayIcon className="meta-icon" />
                                  <Typography variant="body2">
                                    {course.dayOfCourse || "יום ב'"} | {course.startDateOfCourse || "15.01.2023"}
                                  </Typography>
                                </Box>
                                <Box className="meta-item">
                                  <PeopleIcon className="meta-icon" />
                                  <Typography variant="body2">
                                    {course.currentAmountOfStudents}/{course.amountOfStudentsInCourse} סטודנטים
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          
                          <Box className="course-actions">
                            <Chip 
                              label={course.currentAmountOfStudents >= course.amountOfStudentsInCourse * 0.8 ? "כמעט מלא" : "פעיל"} 
                              color={course.currentAmountOfStudents >= course.amountOfStudentsInCourse * 0.8 ? "warning" : "success"} 
                              size="small" 
                              className="status-chip"
                            />
                            <Tooltip title="צפה בפרטי הקורס" arrow>
                              <IconButton 
                                size="small" 
                                className="view-button"
                                component={Link}
                                to={`/ShowCourse/${course.id}`}
                              >
                                <ArrowForwardIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Paper>
              </Grid>
              
              {/* Tasks */}
              <Grid item xs={12} sm={6}>
                <Paper className="dashboard-card">
                  <Box className="card-header">
                    <Box className="card-title-section">
                      <AssignmentIcon className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        משימות לביצוע
                      </Typography>
                    </Box>
                    <Chip 
                      label={`${tasks.filter(task => !task.completed).length} פעילות`} 
                      color="primary" 
                      size="small" 
                      className="count-chip"
                    />
                  </Box>
                  
                  <Divider />
                  
                  <List className="tasks-list">
                    {tasks.map(task => (
                      <ListItem 
                        key={task.id} 
                        className={`task-item ${task.completed ? 'completed' : ''}`}
                        secondaryAction={
                          <Tooltip title={task.completed ? "סמן כלא הושלם" : "סמן כהושלם"} arrow>
                            <IconButton 
                              edge="end" 
                              onClick={() => handleTaskToggle(task.id)}
                              className="task-toggle"
                            >
                              <CheckCircleIcon className={task.completed ? 'completed-icon' : 'pending-icon'} />
                            </IconButton>
                          </Tooltip>
                        }
                      >
                        <ListItemIcon>
                          <Box 
                            className="priority-indicator" 
                            style={{ backgroundColor: getPriorityColor(task.priority) }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={task.title}
                          secondary={`תאריך יעד: ${task.dueDate}`}
                          className="task-text"
                        />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Box className="card-footer">
                    <Button 
                      variant="text" 
                      color="primary" 
                      className="add-button"
                      startIcon={<AddCircleOutlineIcon />}
                    >
                      הוסף משימה חדשה
                    </Button>
                  </Box>
                </Paper>
              </Grid>
              
              {/* Upcoming Events */}
              <Grid item xs={12} sm={6}>
                <Paper className="dashboard-card">
                  <Box className="card-header">
                    <Box className="card-title-section">
                      <EventNoteIcon className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        אירועים קרובים
                      </Typography>
                    </Box>
                    <Button 
                      variant="text" 
                      color="primary" 
                      className="view-all-button"
                      endIcon={<DateRangeIcon />}
                      onClick={() => navigate('/Calendar')} 
                    >
                      לוח שנה
                    </Button>
                  </Box>
                  
                  <Divider />
                  
                  <List className="events-list">
                    {upcomingEvents.map(event => (
                      <ListItem key={event.id} className="event-item">
                        <Box className="event-date-box">
                          <Typography variant="h6" className="event-day">
                            {event.date.split(' ')[0]}
                          </Typography>
                          <Typography variant="body2" className="event-month">
                            {event.date.split(' ')[1].replace(',', '')}
                          </Typography>
                        </Box>
                        <ListItemText
                          primary={event.title}
                          secondary={
                            <React.Fragment>
                              <Box className="event-details">
                                <Box className="event-detail">
                                  <AccessTimeIcon className="detail-icon" />
                                  <Typography variant="body2">{event.time}</Typography>
                                </Box>
                                <Box className="event-detail">
                                  <LocationOnIcon className="detail-icon" />
                                  <Typography variant="body2">{event.location}</Typography>
                                </Box>
                              </Box>
                            </React.Fragment>
                          }
                          className="event-text"
                        />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Box className="card-footer">
                    <Button 
                      variant="text" 
                      color="primary" 
                      className="add-button"
                      startIcon={<AddCircleOutlineIcon />}
                    >
                      הוסף אירוע חדש
                    </Button>
                  </Box>
                </Paper>
              </Grid>
              
              {/* Quick Actions */}
              <Grid item xs={12}>
                <Paper className="dashboard-card quick-actions-card">
                  <Box className="card-header">
                    <Box className="card-title-section">
                      <PlayArrowIcon className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        פעולות מהירות
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider />
                  
                  <Box className="quick-actions-grid">
                    {quickActions.map(action => (
                      <Box 
                        key={action.id} 
                        className="quick-action-item"
                        onClick={action.action}
                      >
                        <Box className="action-icon-wrapper" style={{ backgroundColor: `${action.color}20`, color: action.color }}>
                          {action.icon}
                        </Box>
                        <Typography variant="body1" className="action-title">
                          {action.title}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          
          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              {/* System Status */}
              <Grid item xs={12}>
                <Paper className="dashboard-card system-status-card">
                  <Box className="card-header">
                    <Box className="card-title-section">
                      <SpeedIcon className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        סטטוס מערכת
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider />
                  
                  <Box className="system-status-content">
                    <Box className="status-item">
                      <Typography variant="body1">עומס מערכת</Typography>
                      <Box className="status-progress-container">
                        <LinearProgress 
                          variant="determinate" 
                          value={35} 
                          className="status-progress"
                          color="success"
                        />
                        <Typography variant="body2" className="status-value">35%</Typography>
                      </Box>
                    </Box>
                    
                    <Box className="status-item">
                      <Typography variant="body1">ניצול שרתים</Typography>
                      <Box className="status-progress-container">
                        <LinearProgress 
                          variant="determinate" 
                          value={62} 
                          className="status-progress"
                          color="primary"
                        />
                        <Typography variant="body2" className="status-value">62%</Typography>
                      </Box>
                    </Box>
                    
                    <Box className="status-item">
                      <Typography variant="body1">אחסון נתונים</Typography>
                      <Box className="status-progress-container">
                        <LinearProgress 
                          variant="determinate" 
                          value={78} 
                          className="status-progress"
                          color="warning"
                        />
                        <Typography variant="body2" className="status-value">78%</Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box className="system-status-footer">
                    <Chip 
                      icon={<CheckCircleIcon />} 
                      label="כל המערכות פעילות" 
                      color="success" 
                      variant="outlined"
                      className="system-status-chip"
                    />
                    <Typography variant="caption" className="last-update">
                      עדכון אחרון: {formatTime(currentDate)}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              
              {/* Notifications */}
              <Grid item xs={12}>
                <Paper className="dashboard-card">
                  <Box className="card-header">
                    <Box className="card-title-section">
                      <NotificationsIcon className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        התראות
                      </Typography>
                    </Box>
                    <Badge badgeContent={getUnreadNotificationsCount()} color="error">
                      <Button 
                        variant="text" 
                        color="primary" 
                        className="view-all-button"
                      >
                        סמן הכל כנקרא
                      </Button>
                    </Badge>
                  </Box>
                  
                  <Divider />
                  
                  <List className="notifications-list">
                    {notifications.map(notification => (
                      <ListItem 
                        key={notification.id} 
                        className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                        onClick={() => handleNotificationRead(notification.id)}
                      >
                        <Box className="notification-content">
                          <Typography variant="body1" className="notification-title">
                            {notification.title}
                          </Typography>
                          <Typography variant="caption" className="notification-time">
                            {notification.time}
                          </Typography>
                        </Box>
                        {!notification.read && (
                          <Box className="unread-indicator" />
                        )}
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
              
              {/* Recent Activity */}
              <Grid item xs={12}>
                <Paper className="dashboard-card">
                  <Box className="card-header">
                    <Box className="card-title-section">
                      <TrendingUpIcon className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        פעילות אחרונה
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider />
                  
                  <List className="activity-list">
                    <ListItem className="activity-item">
                      <ListItemIcon className="activity-icon-wrapper">
                        <PersonAddIcon className="activity-icon" />
                      </ListItemIcon>
                      <ListItemText
                        primary="נרשמו 3 סטודנטים חדשים לקורס 'ניהול פרויקטים'"
                        secondary="לפני שעתיים"
                        className="activity-text"
                      />
                    </ListItem>
                    
                    <ListItem className="activity-item">
                      <ListItemIcon className="activity-icon-wrapper">
                        <ClassIcon className="activity-icon" />
                      </ListItemIcon>
                      <ListItemText
                        primary="נוסף קורס חדש: 'מיומנויות תקשורת'"
                        secondary="לפני 3 שעות"
                        className="activity-text"
                      />
                    </ListItem>
                    
                    <ListItem className="activity-item">
                      <ListItemIcon className="activity-icon-wrapper">
                        <DescriptionIcon className="activity-icon" />
                        </ListItemIcon>
                      <ListItemText
                        primary="הופק דוח נוכחות חודשי"
                        secondary="לפני 5 שעות"
                        className="activity-text"
                      />
                    </ListItem>
                    
                    <ListItem className="activity-item">
                      <ListItemIcon className="activity-icon-wrapper">
                        <SchoolIcon className="activity-icon" />
                      </ListItemIcon>
                      <ListItemText
                        primary="המרצה יעל לוי עדכנה את פרטי הקורס שלה"
                        secondary="אתמול, 15:30"
                        className="activity-text"
                      />
                    </ListItem>
                  </List>
                  
                  <Box className="card-footer">
                    <Button 
                      variant="text" 
                      color="primary" 
                      className="view-all-button"
                      endIcon={<ArrowForwardIcon />}
                    >
                      צפה בכל הפעילויות
                    </Button>
                  </Box>
                </Paper>
              </Grid>
              
              {/* Help & Resources */}
              <Grid item xs={12}>
                <Paper className="dashboard-card help-card">
                  <Box className="card-header">
                    <Box className="card-title-section">
                      <HelpOutlineIcon className="card-icon" />
                      <Typography variant="h6" className="card-title">
                        עזרה ומשאבים
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider />
                  
                  <Box className="help-resources">
                    <Button 
                      variant="outlined" 
                      className="help-button"
                      startIcon={<DescriptionIcon />}
                    >
                      מדריך למשתמש
                    </Button>
                    
                    <Button 
                      variant="outlined" 
                      className="help-button"
                      startIcon={<FolderOpenIcon />}
                    >
                      טפסים ומסמכים
                    </Button>
                    
                    <Button 
                      variant="outlined" 
                      className="help-button"
                      startIcon={<SettingsIcon />}
                    >
                      הגדרות מערכת
                    </Button>
                    
                    <Button 
                      variant="contained" 
                      color="primary" 
                      className="help-button contact-button"
                      startIcon={<SupportAgentIcon />}
                    >
                      צור קשר עם תמיכה
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
      {/* Footer */}
      <Box className="admin-footer">
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" className="copyright-text">
                © 2023 מערכת ניהול השתלמויות. כל הזכויות שמורות.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="footer-links">
                <Button variant="text" size="small" className="footer-link">
                  תנאי שימוש
                </Button>
                <Button variant="text" size="small" className="footer-link">
                  מדיניות פרטיות
                </Button>
                <Button variant="text" size="small" className="footer-link">
                  עזרה
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

