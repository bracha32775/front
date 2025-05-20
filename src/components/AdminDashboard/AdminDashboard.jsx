import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Button,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  Tabs,
  Tab,
  Badge,
  Tooltip,
  CircularProgress,
  LinearProgress
} from '@mui/material';

// Charts
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Styles
import './AdminDashboard.css';

// Components
import { Routing } from '../Routing/Routing';

export const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  
  // Mock data - replace with actual data from Redux store
  const courses = useSelector(state => state.courses.allCourses || []);
  const students = useSelector(state => state.students?.students || []);
  const speakers = useSelector(state => state.speakers?.speakers || []);
  
  // Calculate statistics
  const totalStudents = students.length;
  const totalCourses = courses.length;
  const totalSpeakers = speakers.length;
  const activeStudents = students.filter(student => student.isActive).length;
  const activeCourses = courses.filter(course => 
    new Date(course.startDateOfCourse) <= new Date() && 
    new Date(course.endDateOfCourse) >= new Date()
  ).length;
  
  // Calculate total revenue (mock data)
  const totalRevenue = courses.reduce((sum, course) => 
    sum + (course.currentAmountOfStudents * (course.price || 1000)), 0);
  
  // Calculate course completion rate
  const completionRate = courses.length > 0 
    ? (courses.filter(course => new Date(course.endDateOfCourse) < new Date()).length / courses.length) * 100 
    : 0;
  
  // Calculate student retention rate (mock data)
  const retentionRate = 85;
  
  // Calculate course occupancy rate
  const occupancyRate = courses.length > 0 
    
        ? (courses.reduce((sum, course) => 
            sum + (course.currentAmountOfStudents / (course.amountOfStudentsInCourse || 1)), 0) / courses.length) * 100 
        : 0;
      
      // Monthly revenue data (mock data)
      const revenueData = [
        { name: 'ינואר', הכנסות: 40000 },
        { name: 'פברואר', הכנסות: 35000 },
        { name: 'מרץ', הכנסות: 45000 },
        { name: 'אפריל', הכנסות: 50000 },
        { name: 'מאי', הכנסות: 55000 },
        { name: 'יוני', הכנסות: 60000 },
        { name: 'יולי', הכנסות: 65000 },
        { name: 'אוגוסט', הכנסות: 70000 },
        { name: 'ספטמבר', הכנסות: 75000 },
        { name: 'אוקטובר', הכנסות: 80000 },
        { name: 'נובמבר', הכנסות: 85000 },
        { name: 'דצמבר', הכנסות: 90000 },
      ];
      
      // Student enrollment data (mock data)
      const enrollmentData = [
        { name: 'ינואר', סטודנטים: 20 },
        { name: 'פברואר', סטודנטים: 25 },
        { name: 'מרץ', סטודנטים: 30 },
        { name: 'אפריל', סטודנטים: 35 },
        { name: 'מאי', סטודנטים: 40 },
        { name: 'יוני', סטודנטים: 45 },
        { name: 'יולי', סטודנטים: 50 },
        { name: 'אוגוסט', סטודנטים: 55 },
        { name: 'ספטמבר', סטודנטים: 60 },
        { name: 'אוקטובר', סטודנטים: 65 },
        { name: 'נובמבר', סטודנטים: 70 },
        { name: 'דצמבר', סטודנטים: 75 },
      ];
      
      // Course category distribution (derived from actual courses)
      const getCategoryData = () => {
        const categories = {};
        courses.forEach(course => {
          const category = course.category || 'אחר';
          categories[category] = (categories[category] || 0) + 1;
        });
        
        return Object.keys(categories).map(key => ({
          name: key,
          value: categories[key]
        }));
      };
      
      const categoryData = getCategoryData();
      
      // Pie chart colors
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];
      
      // Recent activities (mock data)
      const recentActivities = [
        { 
          id: 1, 
          type: 'enrollment', 
          user: 'ישראל ישראלי', 
          course: 'פיתוח אפליקציות מתקדם', 
          time: '10:30 AM', 
          date: 'היום' 
        },
        { 
          id: 2, 
          type: 'completion', 
          user: 'חיים כהן', 
          course: 'עיצוב גרפי למתחילים', 
          time: '2:15 PM', 
          date: 'אתמול' 
        },
        { 
          id: 3, 
          type: 'newCourse', 
          course: 'ניהול פרויקטים', 
          instructor: 'דוד לוי', 
          time: '9:00 AM', 
          date: 'אתמול' 
        },
        { 
          id: 4, 
          type: 'payment', 
          user: 'רחל גולן', 
          amount: 1200, 
          course: 'שיווק דיגיטלי', 
          time: '4:45 PM', 
          date: '12/10/2023' 
        },
        { 
          id: 5, 
          type: 'feedback', 
          user: 'יעל אברהם', 
          course: 'פיתוח אתרים', 
          rating: 5, 
          time: '11:20 AM', 
          date: '11/10/2023' 
        },
      ];
      
      // Upcoming courses (derived from actual courses)
      const getUpcomingCourses = () => {
        const today = new Date();
        return courses
          .filter(course => new Date(course.startDateOfCourse) > today)
          .sort((a, b) => new Date(a.startDateOfCourse) - new Date(b.startDateOfCourse))
          .slice(0, 5);
      };
      
      const upcomingCourses = getUpcomingCourses();
      
      // Top performing courses (derived from actual courses)
      const getTopCourses = () => {
        return [...courses]
          .sort((a, b) => 
            (b.currentAmountOfStudents / (b.amountOfStudentsInCourse || 1)) - 
            (a.currentAmountOfStudents / (a.amountOfStudentsInCourse || 1))
          )
          .slice(0, 5);
      };
      
      const topCourses = getTopCourses();
      
      // Notifications (mock data)
      const notifications = [
        { 
          id: 1, 
          type: 'warning', 
          message: 'הקורס "פיתוח אפליקציות" כמעט מלא (90%)', 
          time: '10:30 AM' 
        },
        { 
          id: 2, 
          type: 'info', 
          message: '3 תלמידים חדשים נרשמו היום', 
          time: '9:15 AM' 
        },
        { 
          id: 3, 
          type: 'success', 
          message: 'התשלום החודשי התקבל בהצלחה', 
          time: '8:00 AM' 
        },
        { 
          id: 4, 
          type: 'error', 
          message: 'בעיה בעיבוד תשלום של תלמיד', 
          time: 'אתמול' 
        },
      ];
      
      useEffect(() => {
        // Simulate data loading
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        
        return () => clearTimeout(timer);
      }, []);
      
      const handleRefresh = () => {
        setRefreshing(true);
        
        // Simulate data refresh
        setTimeout(() => {
          setRefreshing(false);
        }, 1000);
      };
      
      const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
      };
      
      const formatCurrency = (amount) => {
        return new Intl.NumberFormat('he-IL', { 
          style: 'currency', 
          currency: 'ILS',
          maximumFractionDigits: 0
        }).format(amount);
      };
      
      const getActivityIcon = (type) => {
        switch(type) {
          case 'enrollment':
            return <PersonIcon className="activity-icon enrollment" />;
          case 'completion':
            return <CheckCircleIcon className="activity-icon completion" />;
          case 'newCourse':
            return <SchoolIcon className="activity-icon new-course" />;
          case 'payment':
            return <TrendingUpIcon className="activity-icon payment" />;
          case 'feedback':
            return <AssignmentIcon className="activity-icon feedback" />;
          default:
            return <EventIcon className="activity-icon" />;
        }
      };
      
      const getNotificationIcon = (type) => {
        switch(type) {
          case 'warning':
            return <WarningIcon className="notification-icon warning" />;
          case 'success':
            return <CheckCircleIcon className="notification-icon success" />;
          case 'error':
            return <WarningIcon className="notification-icon error" />;
          case 'info':
          default:
            return <NotificationsIcon className="notification-icon info" />;
        }
      };
      
      const getActivityText = (activity) => {
        switch(activity.type) {
          case 'enrollment':
            return `${activity.user} נרשם לקורס "${activity.course}"`;
          case 'completion':
            return `${activity.user} סיים את הקורס "${activity.course}"`;
          case 'newCourse':
            return `קורס חדש נוסף: "${activity.course}" בהנחיית ${activity.instructor}`;
          case 'payment':
            return `${activity.user} שילם ${formatCurrency(activity.amount)} עבור הקורס "${activity.course}"`;
          case 'feedback':
            return `${activity.user} דירג את הקורס "${activity.course}" (${activity.rating}/5)`;
          default:
            return 'פעילות לא מוגדרת';
        }
      };
      
      return (
        <div className="admin-dashboard-wrapper">
          <Routing />
          
          <Container maxWidth="xl" className="dashboard-container">
            <Box className="dashboard-header">
              <Box className="dashboard-title-section">
                <DashboardIcon className="dashboard-icon" />
                <Typography variant="h4" className="dashboard-title">
                  דשבורד ניהול
                </Typography>
              </Box>
              
              <Box className="dashboard-actions">
                <Tooltip title="רענן נתונים" arrow>
                  <IconButton 
                    className="refresh-button" 
                    onClick={handleRefresh}
                    disabled={refreshing}
                  >
                    {refreshing ? <CircularProgress size={24} /> : <RefreshIcon />}
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="הגדרות דשבורד" arrow>
                  <IconButton className="settings-button">
                    <SettingsIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            
            {isLoading ? (
              <Box className="dashboard-loading">
                <CircularProgress size={60} thickness={4} />
                <Typography variant="h6" className="loading-text">
                  טוען נתונים...
                </Typography>
              </Box>
            ) : (
              <>
                {/* Key Metrics */}
                <Grid container spacing={3} className="metrics-container">
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className="metric-card students">
                      <CardContent>
                        <Box className="metric-header">
                          <Typography variant="subtitle2" className="metric-title">
                            סטודנטים
                          </Typography>
                          <Avatar className="metric-icon students">
                            <PeopleIcon />
                          </Avatar>
                        </Box>
                        <Typography variant="h4" className="metric-value">
                          {totalStudents}
                        </Typography>
                        <Box className="metric-footer">
                          <Typography variant="body2" className="metric-label">
                            {activeStudents} פעילים
                          </Typography>
                          <Box className="metric-change positive">
                            <ArrowUpwardIcon fontSize="small" />
                            <Typography variant="caption">12%</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className="metric-card courses">
                      <CardContent>
                        <Box className="metric-header">
                          <Typography variant="subtitle2" className="metric-title">
                            קורסים
                          </Typography>
                          <Avatar className="metric-icon courses">
                            <SchoolIcon />
                          </Avatar>
                        </Box>
                        <Typography variant="h4" className="metric-value">
                          {totalCourses}
                        </Typography>
                        <Box className="metric-footer">
                          <Typography variant="body2" className="metric-label">
                            {activeCourses} פעילים
                          </Typography>
                          <Box className="metric-change positive">
                            <ArrowUpwardIcon fontSize="small" />
                            <Typography variant="caption">8%</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className="metric-card revenue">
                      <CardContent>
                        <Box className="metric-header">
                          <Typography variant="subtitle2" className="metric-title">
                            הכנסות
                          </Typography>
                          <Avatar className="metric-icon revenue">
                            <TrendingUpIcon />
                          </Avatar>
                        </Box>
                        <Typography variant="h4" className="metric-value">
                          {formatCurrency(totalRevenue)}
                        </Typography>
                        <Box className="metric-footer">
                          <Typography variant="body2" className="metric-label">
                            החודש
                          </Typography>
                          <Box className="metric-change positive">
                            <ArrowUpwardIcon fontSize="small" />
                            <Typography variant="caption">15%</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className="metric-card completion">
                      <CardContent>
                        <Box className="metric-header">
                          <Typography variant="subtitle2" className="metric-title">
                            השלמת קורסים
                          </Typography>
                          <Avatar className="metric-icon completion">
                            <CheckCircleIcon />
                          </Avatar>
                        </Box>
                        <Typography variant="h4" className="metric-value">
                          {completionRate.toFixed(1)}%
                        </Typography>
                        <Box className="metric-footer">
                          <Typography variant="body2" className="metric-label">
                            שיעור השלמה
                          </Typography>
                          <Box className="metric-change positive">
                            <ArrowUpwardIcon fontSize="small" />
                            <Typography variant="caption">5%</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card className="metric-card retention">
                  <CardContent>
                    <Box className="metric-header">
                      <Typography variant="subtitle2" className="metric-title">
                        שימור תלמידים
                      </Typography>
                      <Avatar className="metric-icon retention">
                        <PeopleIcon />
                      </Avatar>
                    </Box>
                    <Typography variant="h4" className="metric-value">
                      {retentionRate}%
                    </Typography>
                    <Box className="metric-footer">
                      <Typography variant="body2" className="metric-label">
                        שיעור שימור
                      </Typography>
                      <Box className="metric-change negative">
                        <ArrowDownwardIcon fontSize="small" />
                        <Typography variant="caption">2%</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card className="metric-card occupancy">
                  <CardContent>
                    <Box className="metric-header">
                      <Typography variant="subtitle2" className="metric-title">
                        תפוסת קורסים
                      </Typography>
                      <Avatar className="metric-icon occupancy">
                        <EventIcon />
                      </Avatar>
                    </Box>
                    <Typography variant="h4" className="metric-value">
                      {occupancyRate.toFixed(1)}%
                    </Typography>
                    <Box className="metric-footer">
                      <Typography variant="body2" className="metric-label">
                        ממוצע תפוסה
                      </Typography>
                      <Box className="metric-change positive">
                        <ArrowUpwardIcon fontSize="small" />
                        <Typography variant="caption">7%</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            {/* Charts Section */}
            <Grid container spacing={3} className="charts-container">
              <Grid item xs={12} md={8}>
                <Paper className="chart-paper">
                  <Box className="chart-header">
                    <Typography variant="h6" className="chart-title">
                      הכנסות חודשיות
                    </Typography>
                    <Box className="chart-actions">
                      <Button size="small" className="chart-period-button active">
                        שנה
                      </Button>
                      <Button size="small" className="chart-period-button">
                        6 חודשים
                      </Button>
                      <Button size="small" className="chart-period-button">
                        3 חודשים
                      </Button>
                    </Box>
                  </Box>
                  <Divider className="chart-divider" />
                  <Box className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={revenueData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip formatter={(value) => formatCurrency(value)} />
                        <Bar dataKey="הכנסות" fill="#3f51b5" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Paper className="chart-paper">
                  <Box className="chart-header">
                    <Typography variant="h6" className="chart-title">
                      התפלגות קורסים לפי קטגוריה
                    </Typography>
                  </Box>
                  <Divider className="chart-divider" />
                  <Box className="chart-container pie-chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip formatter={(value, name, props) => [value, props.payload.name]} />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Paper className="chart-paper">
                  <Box className="chart-header">
                    <Typography variant="h6" className="chart-title">
                      רישום תלמידים
                    </Typography>
                    <Box className="chart-actions">
                      <Button size="small" className="chart-period-button active">
                        שנה
                      </Button>
                      <Button size="small" className="chart-period-button">
                        6 חודשים
                      </Button>
                      <Button size="small" className="chart-period-button">
                        3 חודשים
                      </Button>
                    </Box>
                  </Box>
                  <Divider className="chart-divider" />
                  <Box className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart
                        data={enrollmentData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <Line 
                          type="monotone" 
                          dataKey="סטודנטים" 
                          stroke="#4caf50" 
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            
            {/* Activity and Info Section */}
            <Grid container spacing={3} className="activity-container">
              <Grid item xs={12} md={6}>
                <Paper className="activity-paper">
                  <Box className="activity-header">
                    <Typography variant="h6" className="activity-title">
                      פעילות אחרונה
                    </Typography>
                    <IconButton size="small" className="activity-more">
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                  <Divider />
                  <List className="activity-list">
                    {recentActivities.map((activity) => (
                      <React.Fragment key={activity.id}>
                        <ListItem className="activity-item">
                          <ListItemAvatar>
                            <Avatar className={`activity-avatar ${activity.type}`}>
                              {getActivityIcon(activity.type)}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={getActivityText(activity)}
                            secondary={
                              <Box className="activity-time">
                                <AccessTimeIcon fontSize="small" className="time-icon" />
                                <Typography variant="caption">
                                  {activity.time}, {activity.date}
                                </Typography>
                              </Box>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </React.Fragment>
                    ))}
                  </List>
                  <Box className="activity-footer">
                    <Button 
                      variant="text" 
                      color="primary" 
                      className="view-all-button"
                    >
                      צפה בכל הפעילויות
                    </Button>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box className="info-container">
                  <Paper className="notifications-paper">
                    <Box className="notifications-header">
                      <Typography variant="h6" className="notifications-title">
                        התראות
                      </Typography>
                      <Badge badgeContent={notifications.length} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </Box>
                    <Divider />
                    <List className="notifications-list">
                      {notifications.map((notification) => (
                        <React.Fragment key={notification.id}>
                          <ListItem className="notification-item">
                            <ListItemIcon className="notification-icon-wrapper">
                              {getNotificationIcon(notification.type)}
                            </ListItemIcon>
                            <ListItemText
                              primary={notification.message}
                              secondary={notification.time}
                            />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                        </React.Fragment>
                      ))}
                    </List>
                    <Box className="notifications-footer">
                      <Button 
                        variant="text" 
                        color="primary" 
                        className="view-all-button"
                      >
                        צפה בכל ההתראות
                      </Button>
                    </Box>
                  </Paper>
                  
                  <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    className="info-tabs"
                    variant="fullWidth"
                  >
                    <Tab label="קורסים מובילים" />
                    <Tab label="קורסים קרובים" />
                  </Tabs>
                  
                  <Paper className="courses-paper">
                    {activeTab === 0 && (
                      <List className="courses-list">
                        {topCourses.map((course) => {
                          const occupancy = (course.currentAmountOfStudents / (course.amountOfStudentsInCourse || 1)) * 100;
                          return (
                            <React.Fragment key={course.id}>
                              <ListItem className="course-item">
                                <ListItemText
                                  primary={course.nameOfCourse}
                                  secondary={
                                    <Box className="course-meta">
                                      <Typography variant="caption" className="course-instructor">
                                        {course.speakerName || 'מרצה לא ידוע'}
                                      </Typography>
                                      <Typography variant="caption" className="course-students">
                                        {course.currentAmountOfStudents} / {course.amountOfStudentsInCourse} תלמידים
                                      </Typography>
                                    </Box>
                                  }
                                />
                                <Box className="course-occupancy">
                                  <Typography variant="caption" className="occupancy-percent">
                                    {occupancy.toFixed(0)}%
                                  </Typography>
                                  <LinearProgress 
                                    variant="determinate" 
                                    value={occupancy} 
                                    className={`occupancy-progress ${
                                      occupancy > 85 ? 'high' : occupancy > 50 ? 'medium' : 'low'
                                    }`}
                                  />
                                </Box>
                              </ListItem>
                              <Divider component="li" />
                            </React.Fragment>
                          );
                        })}
                      </List>
                    )}
                    
                    {activeTab === 1 && (
                      <List className="courses-list">
                        {upcomingCourses.map((course) => (
                          <React.Fragment key={course.id}>
                            <ListItem className="course-item">
                              <ListItemText
                                primary={course.nameOfCourse}
                                secondary={
                                  <Box className="course-meta">
                                    <Typography variant="caption" className="course-instructor">
                                      {course.speakerName || 'מרצה לא ידוע'}
                                    </Typography>
                                    <Box className="course-date">
                                      <CalendarTodayIcon fontSize="small" className="date-icon" />
                                      <Typography variant="caption">
                                        {new Date(course.startDateOfCourse).toLocaleDateString('he-IL')}
                                      </Typography>
                                    </Box>
                                  </Box>
                                }
                              />
                              <Box className="course-status">
                                <Typography variant="caption" className="status-text">
                                  {course.currentAmountOfStudents} / {course.amountOfStudentsInCourse}
                                </Typography>
                                <Button 
                                  variant="outlined" 
                                  size="small" 
                                  className="view-course-button"
                                >
                                  פרטים
                                </Button>
                              </Box>
                            </ListItem>
                            <Divider component="li" />
                          </React.Fragment>
                        ))}
                      </List>
                    )}
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </div>
  );
};

    