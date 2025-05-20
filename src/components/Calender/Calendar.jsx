// import React, { useState, useEffect } from 'react';

// import { 
//   Container, 
//   Typography, 
//   Box, 
//   Grid, 
//   Paper, 
//   Button,
//   IconButton,
//   Card,
//   CardContent,
//   Divider,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Tooltip
// } from '@mui/material';

// // Icons
// import AddIcon from '@mui/icons-material/Add';
// import EventIcon from '@mui/icons-material/Event';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import TodayIcon from '@mui/icons-material/Today';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import GroupIcon from '@mui/icons-material/Group';
// import SchoolIcon from '@mui/icons-material/School';
// import HomeIcon from '@mui/icons-material/Home';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// // Components
// import { Routing } from '../Routing/Routing';

// // CSS
// import './Calendar.css';

// export const Calendar = () => {
//   // State
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [events, setEvents] = useState([]);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [eventForm, setEventForm] = useState({
//     id: null,
//     title: '',
//     description: '',
//     date: new Date(),
//     startTime: '09:00',
//     endTime: '10:00',
//     type: 'class',
//     location: ''
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   // Load mock events
//   useEffect(() => {
//     const mockEvents = [
//       {
//         id: 1,
//         title: 'שיעור פיתוח אפליקציות',
//         description: 'שיעור מספר 5 - עבודה עם API',
//         date: new Date(),
//         startTime: '10:00',
//         endTime: '13:00',
//         type: 'class',
//         location: 'כיתה 305'
//       },
//       {
//         id: 2,
//         title: 'פגישת צוות',
//         description: 'דיון על התקדמות הפרויקט',
//         date: new Date(),
//         startTime: '14:30',
//         endTime: '15:30',
//         type: 'meeting',
//         location: 'חדר ישיבות'
//       }
//     ];
    
//     setEvents(mockEvents);
//   }, []);

//   // Calendar functions
//   const getDaysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };
  
//   const getFirstDayOfMonth = (year, month) => {
//     return new Date(year, month, 1).getDay();
//   };
  
//   const getPreviousMonth = () => {
//     const date = new Date(currentDate);
//     date.setMonth(date.getMonth() - 1);
//     setCurrentDate(date);
//   };
  
//   const getNextMonth = () => {
//     const date = new Date(currentDate);
//     date.setMonth(date.getMonth() + 1);
//     setCurrentDate(date);
//   };

//   // Event handlers
//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };
  
//   const handleOpenDialog = (event = null) => {
//     if (event) {
//       setEventForm({
//         ...event,
//         date: new Date(event.date)
//       });
//       setIsEditing(true);
//     } else {
//       setEventForm({
//         id: Date.now(),
//         title: '',
//         description: '',
//         date: selectedDate,
//         startTime: '09:00',
//         endTime: '10:00',
//         type: 'class',
//         location: ''
//       });
//       setIsEditing(false);
//     }
//     setDialogOpen(true);
//   };
  
//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//   };
  
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setEventForm(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  
//   const handleSaveEvent = () => {
//     if (isEditing) {
//       // Update existing event
//       setEvents(prev => 
//         prev.map(event => 
//           event.id === eventForm.id ? eventForm : event
//         )
//       );
//     } else {
//       // Add new event
//       setEvents(prev => [...prev, eventForm]);
//     }
//     handleCloseDialog();
//   };
  
//   const handleDeleteEvent = (id) => {
//     setEvents(prev => prev.filter(event => event.id !== id));
//   };

//   // Helper functions
//   const getEventsForSelectedDate = () => {
//     return events.filter(event => 
//       event.date.getDate() === selectedDate.getDate() &&
//       event.date.getMonth() === selectedDate.getMonth() &&
//       event.date.getFullYear() === selectedDate.getFullYear()
//     ).sort((a, b) => a.startTime.localeCompare(b.startTime));
//   };
  
//   const getEventTypeIcon = (type) => {
//     switch(type) {
//       case 'class':
//         return <SchoolIcon className="event-icon class" />;
//       case 'meeting':
//         return <GroupIcon className="event-icon meeting" />;
//       case 'exam':
//         return <EventIcon className="event-icon exam" />;
//       default:
//         return <EventIcon className="event-icon" />;
//     }
//   };
  
//   const getEventTypeColor = (type) => {
//     switch(type) {
//       case 'class':
//         return 'event-class';
//       case 'meeting':
//         return 'event-meeting';
//       case 'exam':
//         return 'event-exam';
//       default:
//         return '';
//     }
//   };


//   // Render calendar - עכשיו בתצוגה רוחבית
//   const renderCalendar = () => {
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();
//     const daysInMonth = getDaysInMonth(year, month);
//     const firstDay = getFirstDayOfMonth(year, month);
    
//     const monthNames = [
//       'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
//       'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
//     ];
    
//     const dayNames = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'];
    

//     // יצירת מערך של שבועות
//     const weeks = [];
//     let days = [];

//     // הוספת כותרות ימים
//     const dayHeaders = dayNames.map(day => (
//       <div key={`header-${day}`} className="calendar-day-header">
//         {day}
//       </div>
//     ));
    

//     // הוספת תאים ריקים לפני היום הראשון של החודש
//     for (let i = 0; i < firstDay; i++) {
//       days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
//     }
    

//     // הוספת ימי החודש
//     for (let day = 1; day <= daysInMonth; day++) {
//       const date = new Date(year, month, day);
//       const isToday = 
//         date.getDate() === new Date().getDate() &&
//         date.getMonth() === new Date().getMonth() &&
//         date.getFullYear() === new Date().getFullYear();
      
//       const isSelected = 
//         date.getDate() === selectedDate.getDate() &&
//         date.getMonth() === selectedDate.getMonth() &&
//         date.getFullYear() === selectedDate.getFullYear();
      

//       // בדיקה אם יש אירועים ביום זה
//       const hasEvents = events.some(event => 
//         event.date.getDate() === day &&
//         event.date.getMonth() === month &&
//         event.date.getFullYear() === year
//       );
      
//       days.push(
//         <div 
//           key={`day-${day}`} 
//           className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${hasEvents ? 'has-events' : ''}`}
//           onClick={() => handleDateClick(date)}
//         >


//           <div className="day-number">{day}</div>
//           {hasEvents && (
//             <div className="event-indicators">
//               {events
//                 .filter(event => 
//                   event.date.getDate() === day &&
//                   event.date.getMonth() === month &&
//                   event.date.getFullYear() === year
//                 )
//                 .slice(0, 2)
//                 .map((event, index) => (
//                   <div 
//                     key={`indicator-${event.id}`} 
//                     className={`event-dot ${getEventTypeColor(event.type)}`}
//                     title={event.title}
//                   ></div>
//                 ))
//               }
//               {events.filter(event => 
//                 event.date.getDate() === day &&
//                 event.date.getMonth() === month &&
//                 event.date.getFullYear() === year
//               ).length > 2 && (
//                 <div className="event-dot more">+</div>
//               )}
//             </div>
//           )}
//         </div>
//       );
      
//       // אם הגענו לסוף השבוע או לסוף החודש, נוסיף את השבוע למערך השבועות
//       if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
//         weeks.push([...days]);
//         days = [];
//       }
//     }
    
//     return (

//       <div className="horizontal-calendar">
//         <div className="calendar-header">
//           <IconButton onClick={getPreviousMonth} className="month-nav-button">
//             <ArrowForwardIcon />
//           </IconButton>
//           <Typography variant="h6" className="current-month">
//             {monthNames[month]} {year}
//           </Typography>
//           <IconButton onClick={getNextMonth} className="month-nav-button">
//             <ArrowBackIcon />
//           </IconButton>
//         </div>


        
//         <div className="calendar-body">
//           <div className="calendar-days-header">
//             {dayHeaders}
//           </div>
          
//           <div className="calendar-weeks">
//             {weeks.map((week, weekIndex) => (
//               <div key={`week-${weekIndex}`} className="calendar-week">
//                 {week}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Format date for display
//   const formatDate = (date) => {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString('he-IL', options);
//   };

//   return (
//     <div className="calendar-page-wrapper">

//       <Routing />
      
//       <Container maxWidth="lg" className="calendar-container">
//         <Box className="calendar-header">
//           <Box className="calendar-title-section">
//             <EventIcon className="calendar-icon" />
//             <Typography variant="h4" className="calendar-title">
//               לוח שנה
//             </Typography>
//           </Box>
          
//           <Button 
//             variant="contained" 
//             color="primary" 
//             className="add-event-button"
//             startIcon={<AddIcon />}
//             onClick={() => handleOpenDialog()}
//           >
//             אירוע חדש
//           </Button>
//         </Box>
        
//         {/* שינוי סדר הרכיבים - לוח השנה למעלה ואירועים למטה */}
//         <Grid container spacing={3} className="calendar-content">

//           <Grid item xs={12}>
//             <Paper className="calendar-paper">
//               {renderCalendar()}
//             </Paper>
//           </Grid>
          
//           <Grid item xs={12} md={8}>
//             <Paper className="events-paper">
//               <Box className="events-header">
//                 <Box className="selected-date-info">
//                   <TodayIcon className="date-icon" />
//                   <Typography variant="h6" className="selected-date">
//                     {formatDate(selectedDate)}
//                   </Typography>
//                 </Box>
//               </Box>
              
//               <Divider className="events-divider" />
              
//               <Box className="events-list">
//                 {getEventsForSelectedDate().length > 0 ? (
//                   getEventsForSelectedDate().map(event => (
//                     <Card key={event.id} className={`event-card ${getEventTypeColor(event.type)}`}>
//                       <CardContent className="event-content">
//                         <Box className="event-header">
//                           <Box className="event-title-section">
//                             {getEventTypeIcon(event.type)}
//                             <Typography variant="h6" className="event-title">
//                               {event.title}
//                             </Typography>
//                           </Box>
//                           <Box className="event-actions">
//                             <Tooltip title="ערוך אירוע" arrow>
//                               <IconButton 
//                                 size="small" 
//                                 className="edit-button"
//                                 onClick={() => handleOpenDialog(event)}
//                               >
//                                 <EditIcon />
//                               </IconButton>
//                             </Tooltip>
//                             <Tooltip title="מחק אירוע" arrow>
//                               <IconButton 
//                                 size="small" 
//                                 className="delete-button"
//                                 onClick={() => handleDeleteEvent(event.id)}
//                               >
//                                 <DeleteIcon />
//                               </IconButton>
//                             </Tooltip>
//                           </Box>
//                         </Box>
                        
//                         <Typography variant="body2" className="event-description">
//                           {event.description}
//                         </Typography>
                        
//                         <Box className="event-details">
//                           <Box className="event-detail">
//                             <AccessTimeIcon className="detail-icon" />
//                             <Typography variant="body2">
//                               {event.startTime} - {event.endTime}
//                             </Typography>
//                           </Box>
                          
//                           {event.location && (
//                             <Box className="event-detail">
//                               <HomeIcon className="detail-icon" />
//                               <Typography variant="body2">
//                                 {event.location}
//                               </Typography>
//                             </Box>
//                           )}
//                         </Box>
//                       </CardContent>
//                     </Card>
//                   ))
//                 ) : (
//                   <Box className="no-events">
//                     <Typography variant="body1" className="no-events-text">
//                       אין אירועים מתוכננים ליום זה
//                     </Typography>
//                     <Button 
//                       variant="outlined" 
//                       color="primary"
//                       startIcon={<AddIcon />}
//                       onClick={() => handleOpenDialog()}
//                       className="add-first-event"
//                     >
//                       הוסף אירוע ראשון
//                     </Button>
//                   </Box>
//                 )}
//               </Box>
//             </Paper>
//           </Grid>
          
//           <Grid item xs={12} md={4}>
//             <Paper className="upcoming-paper">
//               <Box className="upcoming-header">
//                 <Typography variant="h6" className="upcoming-title">
//                   אירועים קרובים
//                 </Typography>
//               </Box>
              
//               <Divider className="upcoming-divider" />
              
//               <Box className="upcoming-events">
//                 {events.filter(event => {
//                   const today = new Date();
//                   return (
//                     event.date >= today || (
//                       event.date.getDate() === today.getDate() &&
//                       event.date.getMonth() === today.getMonth() &&
//                       event.date.getFullYear() === today.getFullYear()
//                     )
//                   )
//                 }).slice(0, 3).map(event => (
//                   <Box key={event.id} className="upcoming-event">
//                     <Box className="upcoming-event-date">
//                       <Typography variant="body2" className="event-day">
//                         {event.date.getDate()}
//                       </Typography>
//                       <Typography variant="caption" className="event-month">
//                         {['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יוני', 'יולי', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'][event.date.getMonth()]}
//                       </Typography>
//                     </Box>
//                     <Box className="upcoming-event-details">
//                       <Typography variant="subtitle2" className="upcoming-event-title">
//                         {event.title}
//                       </Typography>
//                       <Typography variant="caption" className="upcoming-event-time">
//                         {event.startTime} - {event.endTime}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 ))}
                
//                 {events.filter(event => {
//                   const today = new Date();
//                   return (
//                     event.date >= today || (
//                       event.date.getDate() === today.getDate() &&
//                       event.date.getMonth() === today.getMonth() &&
//                       event.date.getFullYear() === today.getFullYear()
//                     )
//                   )
//                 }).length === 0 && (
//                   <Typography variant="body2" className="no-upcoming">
//                     אין אירועים קרובים
//                   </Typography>
//                 )}
//               </Box>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
      
//       {/* Dialog for adding/editing events */}
//       <Dialog 
//         open={dialogOpen} 
//         onClose={handleCloseDialog}
//         className="event-dialog"
//         fullWidth
//         maxWidth="sm"
//       >
//         <DialogTitle className="dialog-title">
//           {isEditing ? 'עריכת אירוע' : 'הוספת אירוע חדש'}
//         </DialogTitle>
//         <DialogContent className="dialog-content">
//           <TextField
//             autoFocus
//             margin="dense"
//             id="title"
//             name="title"
//             label="כותרת האירוע"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={eventForm.title}
//             onChange={handleFormChange}
//             required
//             sx={{ mb: 2, mt: 1 }}
//           />
          
//           <TextField
//             margin="dense"
//             id="description"
//             name="description"
//             label="תיאור"
//             type="text"
//             fullWidth
//             variant="outlined"
//             multiline
//             rows={3}
//             value={eventForm.description}
//             onChange={handleFormChange}
//             sx={{ mb: 2 }}
//           />
          
//           <Grid container spacing={2} sx={{ mb: 2 }}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 id="date"
//                 name="date"
//                 label="תאריך"
//                 type="date"
//                 fullWidth
//                 variant="outlined"
//                 value={eventForm.date.toISOString().split('T')[0]}
//                 onChange={(e) => {
//                   const newDate = new Date(e.target.value);
//                   setEventForm(prev => ({
//                     ...prev,
//                     date: newDate
//                   }));
//                 }}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth variant="outlined">
//                 <InputLabel id="type-label">סוג אירוע</InputLabel>
//                 <Select
//                   labelId="type-label"
//                   id="type"
//                   name="type"
//                   value={eventForm.type}
//                   onChange={handleFormChange}
//                   label="סוג אירוע"
//                 >
//                   <MenuItem value="class">שיעור</MenuItem>
//                   <MenuItem value="meeting">פגישה</MenuItem>
//                   <MenuItem value="exam">מבחן</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
          
//           <Grid container spacing={2} sx={{ mb: 2 }}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 id="startTime"
//                 name="startTime"
//                 label="שעת התחלה"
//                 type="time"
//                 fullWidth
//                 variant="outlined"
//                 value={eventForm.startTime}
//                 onChange={handleFormChange}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 id="endTime"
//                 name="endTime"
//                 label="שעת סיום"
//                 type="time"
//                 fullWidth
//                 variant="outlined"
//                 value={eventForm.endTime}
//                 onChange={handleFormChange}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </Grid>
//           </Grid>
          
//           <TextField
//             margin="dense"
//             id="location"
//             name="location"
//             label="מיקום"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={eventForm.location}
//             onChange={handleFormChange}
//           />
//         </DialogContent>
//         <DialogActions sx={{ p: 3 }}>
//           <Button onClick={handleCloseDialog} color="inherit">
//             ביטול
//           </Button>
//           <Button 
//             onClick={handleSaveEvent} 
//             color="primary" 
//             variant="contained"
//             disabled={!eventForm.title}
//           >
//             {isEditing ? 'עדכן' : 'הוסף'} אירוע
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Button,
  IconButton,
  Card,
  CardContent,
  Divider,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip
} from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';
import EventIcon from '@mui/icons-material/Event';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TodayIcon from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';

// Components
import { Routing } from '../Routing/Routing';

// CSS
import './Calendar.css';

export const Calendar = () => {
  // State
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [eventForm, setEventForm] = useState({
    id: null,
    title: '',
    description: '',
    date: new Date(),
    startTime: '09:00',
    endTime: '10:00',
    type: 'class',
    location: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  
  // Get courses from Redux store
  const courses = useSelector(state => state.courses.allCourses || []);

  // Load events from courses and mock events
  useEffect(() => {
    // Convert courses to events
    const courseEvents = generateEventsFromCourses(courses);
    
    // Add some mock events
    const mockEvents = [
      {
        id: 'mock-1',
        title: 'שיעור פיתוח אפליקציות',
        description: 'שיעור מספר 5 - עבודה עם API',
        date: new Date(),
        startTime: '10:00',
        endTime: '13:00',
        type: 'class',
        location: 'כיתה 305'
      },
      {
        id: 'mock-2',
        title: 'פגישת צוות',
        description: 'דיון על התקדמות הפרויקט',
        date: new Date(),
        startTime: '14:30',
        endTime: '15:30',
        type: 'meeting',
        location: 'חדר ישיבות'
      }
    ];
    
    // Combine course events and mock events
    setEvents([...courseEvents, ...mockEvents]);
  }, [courses]);

  // Generate recurring events from courses
  const generateEventsFromCourses = (courses) => {
    const events = [];
    const today = new Date();
    
    // Hebrew day names mapping
    const hebrewDays = {
      'ראשון': 0,
      'שני': 1,
      'שלישי': 2,
      'רביעי': 3,
      'חמישי': 4,
      'שישי': 5,
      'שבת': 6
    };
    
    courses.forEach(course => {
      // Check if course has started and still has meetings left
      if (!course.startDateOfCourse) return; // Skip if no start date
      
      const startDate = new Date(course.startDateOfCourse);
      if (startDate > today) return; // Skip if course hasn't started yet
      
      // Calculate how many meetings have occurred
      const dayOfWeek = hebrewDays[course.dayOfCourse];
      if (dayOfWeek === undefined) return; // Skip if day is invalid
      
      // Calculate weeks since start date
      const weeksSinceStart = Math.floor((today - startDate) / (7 * 24 * 60 * 60 * 1000));
      
      // Check if we still have meetings left
      if (weeksSinceStart >= course.amountOfMettingInCourse) return; // Skip if all meetings completed
      
      // Generate events for the next 4 weeks
      for (let i = 0; i < 4; i++) {
        const meetingNumber = weeksSinceStart + i + 1;
        if (meetingNumber > course.amountOfMettingInCourse) break; // Stop if exceeding total meetings
        
        // Calculate the date for this meeting
        const eventDate = new Date(startDate);
        eventDate.setDate(eventDate.getDate() + (i * 7));
        
        // Adjust to the correct day of week if needed
        const currentDayOfWeek = eventDate.getDay();
        if (currentDayOfWeek !== dayOfWeek) {
          const daysToAdd = (dayOfWeek - currentDayOfWeek + 7) % 7;
          eventDate.setDate(eventDate.getDate() + daysToAdd);
        }
        
        // Skip dates in the past except for today
        if (eventDate < today && eventDate.toDateString() !== today.toDateString()) continue;
        
        events.push({
          id: `course-${course.idOfCourse}-meeting-${meetingNumber}`,
          title: course.nameOfCourse,
          description: `מפגש ${meetingNumber} מתוך ${course.amountOfMettingInCourse}`,
          date: new Date(eventDate),
          startTime: course.startTimeOfCourse || '09:00',
          endTime: course.endTimeOfCourse || '12:00',
          type: 'class',
          location: course.location || 'לא צוין מיקום',
          courseId: course.idOfCourse,
          meetingNumber: meetingNumber,
          totalMeetings: course.amountOfMettingInCourse,
          participants: course.currentAmountOfStudents || 0,
          maxParticipants: course.amountOfStudentsInCourse || 0
        });
      }
    });
    
    return events;
  };

  // Calendar functions
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  const getPreviousMonth = () => {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() - 1);
    setCurrentDate(date);
  };
  
  const getNextMonth = () => {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() + 1);
    setCurrentDate(date);
  };

  // Event handlers
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  
  const handleOpenDialog = (event = null) => {
    if (event) {
      setEventForm({
        ...event,
        date: new Date(event.date)
      });
      setIsEditing(true);
    } else {
      setEventForm({
        id: Date.now(),
        title: '',
        description: '',
        date: selectedDate,
        startTime: '09:00',
        endTime: '10:00',
        type: 'class',
        location: ''
      });
      setIsEditing(false);
    }
    setDialogOpen(true);
  };
  
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEventForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSaveEvent = () => {
    if (isEditing) {
      // Update existing event
      setEvents(prev => 
        prev.map(event => 
          event.id === eventForm.id ? eventForm : event
        )
      );
    } else {
      // Add new event
      setEvents(prev => [...prev, eventForm]);
    }
    handleCloseDialog();
  };
  
  const handleDeleteEvent = (id) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  // Helper functions
  const getEventsForSelectedDate = () => {
    return events.filter(event => 
      event.date.getDate() === selectedDate.getDate() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear()
    ).sort((a, b) => a.startTime.localeCompare(b.startTime));
  };
  
  const getEventTypeIcon = (type) => {
    switch(type) {
      case 'class':
        return <SchoolIcon className="event-icon class" />;
      case 'meeting':
        return <GroupIcon className="event-icon meeting" />;
      case 'exam':
        return <EventIcon className="event-icon exam" />;
      default:
        return <EventIcon className="event-icon" />;
    }
  };
  
  const getEventTypeColor = (type) => {
    switch(type) {
      case 'class':
        return 'event-class';
      case 'meeting':
        return 'event-meeting';
      case 'exam':
        return 'event-exam';
      default:
        return '';
    }
  };

  // Get active courses (started but not finished)
  const getActiveCourses = () => {
    const today = new Date();
    
    return courses.filter(course => {
      // Check if course has started
      if (!course.startDateOfCourse) return false;
      const startDate = new Date(course.startDateOfCourse);
      if (startDate > today) return false;
      
      // Check if course still has meetings left
      const weeksSinceStart = Math.floor((today - startDate) / (7 * 24 * 60 * 60 * 1000));
      return weeksSinceStart < course.amountOfMettingInCourse;
    });
  };

  // Render calendar - עכשיו בתצוגה רוחבית
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const monthNames = [
      'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
      'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
    ];
    
    const dayNames = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'];
    
    // יצירת מערך של שבועות
    const weeks = [];
    let days = [];
    
    // הוספת כותרות ימים
    const dayHeaders = dayNames.map(day => (
      <div key={`header-${day}`} className="calendar-day-header">
        {day}
      </div>
    ));
    
    // הוספת תאים ריקים לפני היום הראשון של החודש
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // הוספת ימי החודש
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = 
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear();
      
      const isSelected = 
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
      
      // בדיקה אם יש אירועים ביום זה
      const hasEvents = events.some(event => 
        event.date.getDate() === day &&
        event.date.getMonth() === month &&
        event.date.getFullYear() === year
      );
      
      days.push(
        <div 
          key={`day-${day}`} 
          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${hasEvents ? 'has-events' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          <div className="day-number">{day}</div>
          {hasEvents && (
            <div className="event-indicators">
              {events
                .filter(event => 
                  event.date.getDate() === day &&
                  event.date.getMonth() === month &&
                  event.date.getFullYear() === year
                )
                .slice(0, 2)
                .map((event, index) => (
                  <div 
                    key={`indicator-${event.id}`} 
                    className={`event-dot ${getEventTypeColor(event.type)}`}
                    title={event.title}
                  ></div>
                ))
              }
              {events.filter(event => 
                event.date.getDate() === day &&
                event.date.getMonth() === month &&
                event.date.getFullYear() === year
              ).length > 2 && (
                <div className="event-dot more">+</div>
              )}
            </div>
          )}
        </div>
      );
      
      // אם הגענו לסוף השבוע או לסוף החודש, נוסיף את השבוע למערך השבועות
      if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
        weeks.push([...days]);
        days = [];
      }
    }
    
    return (
      <div className="horizontal-calendar">
        <div className="calendar-header">
          <IconButton onClick={getPreviousMonth} className="month-nav-button">
            <ArrowForwardIcon />
          </IconButton>
          <Typography variant="h6" className="current-month">
            {monthNames[month]} {year}
          </Typography>
          <IconButton onClick={getNextMonth} className="month-nav-button">
            <ArrowBackIcon />
          </IconButton>
        </div>
        
        <div className="calendar-body">
          <div className="calendar-days-header">
            {dayHeaders}
          </div>
          
          <div className="calendar-weeks">
            {weeks.map((week, weekIndex) => (
              <div key={`week-${weekIndex}`} className="calendar-week">
                {week}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Format date for display
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('he-IL', options);
  };

  // Get upcoming active courses
  const getUpcomingCourseEvents = () => {
    const today = new Date();
    
    return events
      .filter(event => 
        // Filter only course events (those with courseId)
        event.courseId && 
        // Filter only future events or today's events
        (event.date > today || 
          (event.date.getDate() === today.getDate() &&
           event.date.getMonth() === today.getMonth() &&
           event.date.getFullYear() === today.getFullYear())
        )
      )
      .sort((a, b) => a.date - b.date)
      .slice(0, 5); // Get only the next 5 events
  };

  // Get active courses that have started but not finished
  const getActiveCoursesList = () => {
    const today = new Date();
    
    return courses.filter(course => {
      // Skip if no start date
      if (!course.startDateOfCourse) return false;
      
      const startDate = new Date(course.startDateOfCourse);
      
      // Skip if course hasn't started yet
      if (startDate > today) return false;
      
      // Calculate weeks since start
      const weeksSinceStart = Math.floor((today - startDate) / (7 * 24 * 60 * 60 * 1000));
      
      // Include only if we still have meetings left
      return weeksSinceStart < course.amountOfMettingInCourse;
    });
  };

  // Calculate progress percentage for a course
  const calculateCourseProgress = (course) => {
    if (!course.startDateOfCourse || !course.amountOfMettingInCourse) return 0;
    
    const startDate = new Date(course.startDateOfCourse);
    const today = new Date();
    
    // If course hasn't started yet
    if (startDate > today) return 0;
    
    // Calculate weeks since start
    const weeksSinceStart = Math.floor((today - startDate) / (7 * 24 * 60 * 60 * 1000));
    
    // Calculate progress percentage
    const progress = Math.min(100, Math.round((weeksSinceStart / course.amountOfMettingInCourse) * 100));
    
    return progress;
  };

  return (
    <div className="calendar-page-wrapper">
      <Routing />
      
      <Container maxWidth="lg" className="calendar-container">
        <Box className="calendar-header">
          <Box className="calendar-title-section">
            <EventIcon className="calendar-icon" />
            <Typography variant="h4" className="calendar-title">
              לוח שנה
            </Typography>
          </Box>
          
          <Button 
            variant="contained" 
            color="primary" 
            className="add-event-button"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
          >
            אירוע חדש
          </Button>
        </Box>
        
        {/* שינוי סדר הרכיבים - לוח השנה למעלה ואירועים למטה */}
        <Grid container spacing={3} className="calendar-content">
          <Grid item xs={12}>
            <Paper className="calendar-paper">
              {renderCalendar()}
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Paper className="events-paper">
              <Box className="events-header">
                <Box className="selected-date-info">
                  <TodayIcon className="date-icon" />
                  <Typography variant="h6" className="selected-date">
                    {formatDate(selectedDate)}
                  </Typography>
                </Box>
              </Box>
              
              <Divider className="events-divider" />
              
              <Box className="events-list">
                {getEventsForSelectedDate().length > 0 ? (
                  getEventsForSelectedDate().map(event => (
                    <Card key={event.id} className={`event-card ${getEventTypeColor(event.type)}`}>
                      <CardContent className="event-content">
                        <Box className="event-header">
                          <Box className="event-title-section">
                            {getEventTypeIcon(event.type)}
                            <Typography variant="h6" className="event-title">
                              {event.title}
                            </Typography>
                          </Box>
                          <Box className="event-actions">
                            <Tooltip title="ערוך אירוע" arrow>
                              <IconButton 
                                size="small" 
                                className="edit-button"
                                onClick={() => handleOpenDialog(event)}
                              >
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="מחק אירוע" arrow>
                              <IconButton 
                                size="small" 
                                className="delete-button"
                                onClick={() => handleDeleteEvent(event.id)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </Box>
                        
                        <Typography variant="body2" className="event-description">
                          {event.description}
                        </Typography>
                        
                        <Box className="event-details">
                          <Box className="event-detail">
                            <AccessTimeIcon className="detail-icon" />
                            <Typography variant="body2">
                              {event.startTime} - {event.endTime}
                            </Typography>
                          </Box>
                          
                          {event.location && (
                            <Box className="event-detail">
                              <LocationOnIcon className="detail-icon" />
                              <Typography variant="body2">
                                {event.location}
                              </Typography>
                            </Box>
                          )}
                          
                          {event.participants && (
                            <Box className="event-detail">
                              <PeopleIcon className="detail-icon" />
                              <Typography variant="body2">
                                {event.participants}/{event.maxParticipants} משתתפים
                              </Typography>
                            </Box>
                          )}
                          
                          {event.meetingNumber && (
                            <Box className="event-detail meeting-number">
                              <SchoolIcon className="detail-icon" />
                              <Typography variant="body2">
                                מפגש {event.meetingNumber} מתוך {event.totalMeetings}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Box className="no-events">
                    <Typography variant="body1" className="no-events-text">
                      אין אירועים מתוכננים ליום זה
                    </Typography>
                    <Button 
                      variant="outlined" 
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={() => handleOpenDialog()}
                      className="add-first-event"
                    >
                      הוסף אירוע ראשון
                    </Button>
                  </Box>
                )}
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper className="upcoming-paper">
              <Box className="upcoming-header">
                <Typography variant="h6" className="upcoming-title">
                  קורסים פעילים
                </Typography>
              </Box>
              
              <Divider className="upcoming-divider" />
              
              <Box className="active-courses">
                {getActiveCoursesList().length > 0 ? (
                  getActiveCoursesList().map(course => {
                    const progress = calculateCourseProgress(course);
                    
                    return (
                      <Box key={course.id} className="active-course-item">
                        <Box className="course-header">
                          <SchoolIcon className="course-icon" />
                          <Typography variant="subtitle1" className="course-title">
                            {course.nameOfCourse}
                          </Typography>
                        </Box>
                        
                        <Box className="course-progress-container">
                          <Box className="course-progress-bar">
                            <Box 
                              className="course-progress-fill" 
                              style={{ width: `${progress}%` }}
                            ></Box>
                          </Box>
                          <Typography variant="caption" className="course-progress-text">
                            {progress}% הושלם
                          </Typography>
                        </Box>
                        
                        <Box className="course-details">
                          <Box className="course-detail">
                            <PeopleIcon className="detail-icon" />
                            <Typography variant="body2">
                              {course.currentAmountOfStudents}/{course.amountOfStudentsInCourse} תלמידים
                            </Typography>
                          </Box>
                          
                          <Box className="course-detail">
                            <EventIcon className="detail-icon" />
                            <Typography variant="body2">
                              {course.dayOfCourse || "לא צוין יום"}
                            </Typography>
                          </Box>
                          
                          <Box className="course-detail">
                            <AccessTimeIcon className="detail-icon" />
                            <Typography variant="body2">
                              {course.startTimeOfCourse || "לא צוין"} - {course.endTimeOfCourse || "לא צוין"}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })
                ) : (
                  <Typography variant="body2" className="no-active-courses">
                    אין קורסים פעילים כרגע
                  </Typography>
                )}
              </Box>
              
              <Box className="upcoming-header" sx={{ mt: 3 }}>
                <Typography variant="h6" className="upcoming-title">
                  מפגשים קרובים
                </Typography>
              </Box>
              
              <Divider className="upcoming-divider" />
              
              <Box className="upcoming-events">
                {getUpcomingCourseEvents().length > 0 ? (
                  getUpcomingCourseEvents().map(event => (
                    <Box key={event.id} className="upcoming-event">
                      <Box className="upcoming-event-date">
                        <Typography variant="body2" className="event-day">
                          {event.date.getDate()}
                        </Typography>
                        <Typography variant="caption" className="event-month">
                          {['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יוני', 'יולי', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'][event.date.getMonth()]}
                        </Typography>
                      </Box>
                      <Box className="upcoming-event-details">
                        <Typography variant="subtitle2" className="upcoming-event-title">
                          {event.title}
                        </Typography>
                        <Typography variant="caption" className="upcoming-event-time">
                          {event.startTime} - {event.endTime}
                        </Typography>
                        {event.meetingNumber && (
                          <Typography variant="caption" className="upcoming-event-meeting">
                            מפגש {event.meetingNumber}/{event.totalMeetings}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2" className="no-upcoming">
                    אין מפגשים קרובים
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      {/* Dialog for adding/editing events */}
      <Dialog 
        open={dialogOpen} 
        onClose={handleCloseDialog}
        className="event-dialog"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle className="dialog-title">
          {isEditing ? 'עריכת אירוע' : 'הוספת אירוע חדש'}
        </DialogTitle>
        <DialogContent className="dialog-content">
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="כותרת האירוע"
            type="text"
            fullWidth
            variant="outlined"
            value={eventForm.title}
            onChange={handleFormChange}
            required
            sx={{ mb: 2, mt: 1 }}
          />
          
          <TextField
            margin="dense"
            id="description"
            name="description"
            label="תיאור"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
            value={eventForm.description}
            onChange={handleFormChange}
            sx={{ mb: 2 }}
          />
          
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                name="date"
                label="תאריך"
                type="date"
                fullWidth
                variant="outlined"
                value={eventForm.date.toISOString().split('T')[0]}
                onChange={(e) => {
                  const newDate = new Date(e.target.value);
                  setEventForm(prev => ({
                    ...prev,
                    date: newDate
                  }));
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="type-label">סוג אירוע</InputLabel>
                <Select
                  labelId="type-label"
                  id="type"
                  name="type"
                  value={eventForm.type}
                  onChange={handleFormChange}
                  label="סוג אירוע"
                >
                  <MenuItem value="class">שיעור</MenuItem>
                  <MenuItem value="meeting">פגישה</MenuItem>
                  <MenuItem value="exam">מבחן</MenuItem>
                </Select>
              </FormControl>
              </Grid>
          </Grid>
          
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="startTime"
                name="startTime"
                label="שעת התחלה"
                type="time"
                fullWidth
                variant="outlined"
                value={eventForm.startTime}
                onChange={handleFormChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="endTime"
                name="endTime"
                label="שעת סיום"
                type="time"
                fullWidth
                variant="outlined"
                value={eventForm.endTime}
                onChange={handleFormChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          
          <TextField
            margin="dense"
            id="location"
            name="location"
            label="מיקום"
            type="text"
            fullWidth
            variant="outlined"
            value={eventForm.location}
            onChange={handleFormChange}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleCloseDialog} color="inherit">
            ביטול
          </Button>
          <Button 
            onClick={handleSaveEvent} 
            color="primary" 
            variant="contained"
            disabled={!eventForm.title}
          >
            {isEditing ? 'עדכן' : 'הוסף'} אירוע
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
