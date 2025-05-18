// // import { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from "react-redux";
// // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// // import {Routing} from '../Routing/Routing'
// // import { Button } from '@mui/material';
// // import { Home } from '../Home/Home';
// // import './Course.css'
// // import { styled } from '@mui/material/styles';
// // import Dialog from '@mui/material/Dialog';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import DialogContent from '@mui/material/DialogContent';
// // import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// // import { AddCourse } from '../Add/AddCourse/AddCourse';
// // import AddIcon from '@mui/icons-material/Add';
// // import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// // import * as React from 'react';
// // import { deleteCourseThunk } from '../../redux/Thunks/deleteCourseThunk';
// // import TableCourse from './tableCourse';
// // export const Course = () => {
// //     const dispatch = useDispatch()
// //     const courses = useSelector(state => state.courses.courses);
// //     const [flag1,setFlag1]=useState(false)
// //     const [flag2,setFlag2]=useState(false)
// //     const [flag3,setFlag3]=useState(false)
// //     async function doIt() {
// //         await dispatch(getCoursesThunk())
// //     }
// //     useEffect(() => {
// //         doIt()
// //     }, [flag1])

// //      async function chang1() {
// //        setFlag1(true)
// //        setFlag2(false)

// //      }
// //      async function chang2() {
// //         setFlag2(true)
// //         setFlag1(false)

// //       }

// //       const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// //         '& .MuiDialogContent-root': {
// //           padding: theme.spacing(3),}
// //         // },
// //         // '& .MuiDialogActions-root': {
// //         //   padding: theme.spacing(3),
// //         // },
// //       }));


// //       const [open, setOpen] = React.useState(false);
// //       const handleClickOpen = () => {
// //         setOpen(!open);
// //       };
// //       const handleClose = () => {
// //         setOpen(!open);
// //       };

// //      const deleteThisCourse=(id)=>{
// //       console.log(id+"hello:");
// //         dispatch(deleteCourseThunk(id))
// //       }

// //     return <div>
// //         <Routing></Routing>
// //        <Button onClick={chang1}>תצוגה טבלאית</Button>
// //        <Button onClick={chang2}>כל הקורסים</Button> 
// //        {flag2 && <Home/>}
// //         {flag1 &&  <><TableCourse/>
// //         {/*<p className='pTeachers'> הקורסים שלנו</p> */}
// //         {/* <table>
// //             <thead>
// //                 <tr >
// //                     <td className='cotarot'>שם</td>
// //                     <td className='cotarot'>מספר המשתתפות</td>
// //                     <td className='cotarot'> יום בשבוע</td>
// //                     <td className='cotarot'>start</td>
// //                     <td className='cotarot'>currentAmountOfStudents</td>
// //                     <td className='cotarot'>amountOfStudentsInCourse</td>
// //                     <td className='cotarot'> ❌ </td>
// //                 </tr></thead>
// //             <tbody>

// //                 {courses.map(x => {
// //                     return <tr >
// //                          <td className='tochen'>{x.nameOfCourse}</td>
// //                          <td className='tochen'>{x.amountOfStudentsInCourse}</td>
// //                           <td className='tochen'>{x.dayOfCourse}</td>
// //                           <td className='tochen'>{x.startDateOfCourse}</td>
// //                           <td className='tochen'>{x.currentAmountOfStudents}</td>
// //                           <td className='tochen'>{x.amountOfStudentsInCourse}</td>
// //                          <td onClick={()=>deleteThisCourse(x.idOfCourse)} className='tochen'>                      
// //                           <DeleteOutlinedIcon/></td>
// //                     </tr>
// //                 })}
// //             </tbody>
// //         </table> */}
// //         <React.Fragment> 
// //       <Button variant="outlined" onClick={handleClickOpen}>
// //         הוספת קורס
// //         <AddIcon ></AddIcon>
// //       </Button>
// //       <BootstrapDialog
// //         onClose={handleClose}
// //         aria-labelledby="customized-dialog-title"
// //         open={open}
// //       >
// //         <DialogTitle
// //           id="customized-dialog-title">
// //           הוספת קורס
// //         </DialogTitle>
// //         <IconButton
// //           aria-label="close"
// //           onClick={handleClose}
// //           sx={(theme) => ({
// //             position: 'absolute',
// //             right: 8,
// //             top: 8,
// //             color: theme.palette.grey[60],
// //           })}
// //         >
// //           <CloseIcon />
// //         </IconButton>
// //         <DialogContent dividers>
// //           <AddCourse />
// //         </DialogContent >
// //       </BootstrapDialog>
// //     </React.Fragment></>
// //         }

// //     </div>
// // }
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// import { Routing } from '../Routing/Routing';
// import { Home } from '../Home/Home';
// import { deleteCourseThunk } from '../../redux/Thunks/deleteCourseThunk';
// import TableCourse from './tableCourse';
// import { AddCourse } from '../Add/AddCourse/AddCourse';

// // Material UI
// import { 
//   Button, 
//   Dialog, 
//   DialogTitle, 
//   DialogContent, 
//   IconButton, 
//   Box,
//   Paper,
//   Typography,
//   Tooltip,
//   Zoom,
//   Divider,
//   Container,
//   Card,
//   CardContent
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import AddIcon from '@mui/icons-material/Add';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import GridViewIcon from '@mui/icons-material/GridView';
// import SchoolIcon from '@mui/icons-material/School';
// import TouchAppIcon from '@mui/icons-material/TouchApp';

// // Styles
// import './Course.css';

// export const Course = () => {
//   const dispatch = useDispatch();
//   const courses = useSelector(state => state.courses.courses);
//   const [activeView, setActiveView] = useState(null);
//   const [dialogOpen, setDialogOpen] = useState(false);

//   const fetchCourses = async () => {
//     await dispatch(getCoursesThunk());
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const handleViewChange = (newView) => {
//     setActiveView(newView);
//   };

//   const toggleDialog = () => {
//     setDialogOpen(!dialogOpen);
//   };

//   const handleDeleteCourse = (id) => {
//     dispatch(deleteCourseThunk(id));
//   };

//   return (
//     <div className="course-page-wrapper">
//       <Routing />

//       <Container maxWidth="lg" className="course-dashboard">
//         <Card className="course-header-card">
//           <CardContent>
//             <Box className="course-title-section">
//               <SchoolIcon className="course-icon" />
//               <Typography variant="h4" className="course-title">
//                 ניהול קורסים
//               </Typography>
//             </Box>

//             <Typography variant="body1" className="course-subtitle">
//               ברוכים הבאים למערכת ניהול הקורסים. כאן תוכלו לצפות, להוסיף ולנהל את כל הקורסים במערכת.
//             </Typography>

//             <Divider className="course-divider" />

//             <Box className="course-stats">
//               <Box className="stat-item">
//                 <Typography variant="h5">{courses.length}</Typography>
//                 <Typography variant="body2">קורסים פעילים</Typography>
//               </Box>

//               <Box className="stat-item">
//                 <Typography variant="h5">
//                   {courses.reduce((sum, course) => sum + course.currentAmountOfStudents, 0)}
//                 </Typography>
//                 <Typography variant="body2">סטודנטים רשומים</Typography>
//               </Box>

//               <Box className="stat-item">
//                 <Typography variant="h5">
//                   {courses.reduce((sum, course) => sum + (course.amountOfStudentsInCourse - course.currentAmountOfStudents), 0)}
//                 </Typography>
//                 <Typography variant="body2">מקומות פנויים</Typography>
//               </Box>
//             </Box>
//           </CardContent>
//         </Card>

//         <Box className="course-actions-container">
//           <Box className="view-toggle-wrapper">
//             <Tooltip title="תצוגה טבלאית" placement="top" TransitionComponent={Zoom} arrow>
//               <Button 
//                 className={`view-toggle-button ${activeView === 'table' ? 'active' : ''}`}
//                 onClick={() => handleViewChange('table')}
//                 variant={activeView === 'table' ? "contained" : "outlined"}
//               >
//                 <ViewListIcon className="button-icon" />
//                 <span className="button-text">תצוגה טבלאית</span>
//               </Button>
//             </Tooltip>

//             <Tooltip title="תצוגת רשת" placement="top" TransitionComponent={Zoom} arrow>
//               <Button 
//                 className={`view-toggle-button ${activeView === 'grid' ? 'active' : ''}`}
//                 onClick={() => handleViewChange('grid')}
//                 variant={activeView === 'grid' ? "contained" : "outlined"}
//               >
//                 <GridViewIcon className="button-icon" />
//                 <span className="button-text">תצוגת רשת</span>
//               </Button>
//             </Tooltip>
//           </Box>

//           <Tooltip title="הוסף קורס חדש" placement="left" TransitionComponent={Zoom} arrow>
//             <Button 
//               className="add-course-button"
//               onClick={toggleDialog}
//               variant="contained"
//               color="primary"
//             >
//               <AddIcon className="add-icon" />
//               <span>הוספת קורס</span>
//             </Button>
//           </Tooltip>
//         </Box>

//         {activeView ? (
//           <Paper className="content-container" elevation={3}>
//             {activeView === 'grid' && <Home />}
//             {activeView === 'table' && <TableCourse onDeleteCourse={handleDeleteCourse} />}
//           </Paper>
//         ) : (
//           <Paper className="welcome-container" elevation={3}>
//             <div className="welcome-content">
//               <TouchAppIcon className="welcome-icon" />
//               <Typography variant="h5" className="welcome-title">
//                 בחרו תצוגה להצגת הקורסים
//               </Typography>
//               <Typography variant="body1" className="welcome-text">
//                 לחצו על אחד מכפתורי התצוגה למעלה כדי להציג את הקורסים בפורמט המועדף עליכם
//               </Typography>
//               <div className="welcome-buttons">
//                 <Button 
//                   className="welcome-button table-button"
//                   onClick={() => handleViewChange('table')}
//                   variant="outlined"
//                 >
//                   <ViewListIcon className="welcome-button-icon" />
//                   תצוגה טבלאית
//                 </Button>
//                 <Button 
//                   className="welcome-button grid-button"
//                   onClick={() => handleViewChange('grid')}
//                   variant="outlined"
//                 >
//                   <GridViewIcon className="welcome-button-icon" />
//                   תצוגת רשת
//                 </Button>
//               </div>
//             </div>
//           </Paper>
//         )}
//       </Container>

//       <Dialog
//         open={dialogOpen}
//         onClose={toggleDialog}
//         maxWidth="md"
//         fullWidth
//         className="course-dialog"
//       >
//         <DialogTitle className="dialog-title">
//           <AddIcon className="dialog-title-icon" />
//           הוספת קורס חדש
//         </DialogTitle>

//         <IconButton
//           aria-label="close"
//           onClick={toggleDialog}
//           className="dialog-close-button"
//         >
//           <CloseIcon />
//         </IconButton>

//         <DialogContent dividers className="dialog-content">
//           <AddCourse onSuccess={toggleDialog} />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
import { Routing } from '../Routing/Routing';
import { Home } from '../Home/Home';
import { deleteCourseThunk } from '../../redux/Thunks/deleteCourseThunk';
import TableCourse from './tableCourse';
import { AddCourse } from '../Add/AddCourse/AddCourse';

// Material UI
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Paper,
  Typography,
  Tooltip,
  Zoom,
  Divider,
  Container,
  Card,
  CardContent
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import SchoolIcon from '@mui/icons-material/School';
import TouchAppIcon from '@mui/icons-material/TouchApp';

// Styles
import './Course.css';
import { getAllCoursesThunk } from '../../redux/Thunks/getAllCoursesThunk';

export const Course = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.allCourses);
  const [activeView, setActiveView] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  // מערך של תצוגות זמינות
  const availableViews = ['table', 'grid'];
  // const [localCourse, setLocalCourse] = useState(selectedCourse);
  // const fetchCourses = async () => {
  //   await dispatch(getAllCoursesThunk());
  // };
  const selectedCourse = useSelector(state => state.courses.selectedCourse);
  const fetchCourses = async () => {
    setIsUpdating(true);
    try {
      await dispatch(getAllCoursesThunk());
    } finally {
      setIsUpdating(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  useEffect(() => {
    if (lastUpdated) {
      fetchCourses();
    }
  }, [lastUpdated]);
  const handleViewChange = (newView) => {
    setActiveView(newView);
  };

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };

  // const handleDeleteCourse = (id) => {
  //   dispatch(deleteCourseThunk(id));
  // };
  const handleDeleteCourse = async (id) => {
    setIsUpdating(true);
    try {
      await dispatch(deleteCourseThunk(id));
      // סימון שהיה עדכון
      setLastUpdated(new Date().getTime());
    } finally {
      setIsUpdating(false);
    }
  };
  const handleCourseUpdate = () => {
    // סימון שהיה עדכון
    setLastUpdated(new Date().getTime());
  };
  // בדיקה אם יש רק תצוגה אחת זמינה
  const hasSingleView = availableViews.length === 1;

  return (
    <div className="course-page-wrapper">
      <Routing />

      <Container maxWidth="lg" className="course-dashboard">
        <Card className="course-header-card">
          <CardContent>
            <Box className="course-title-section">
              <SchoolIcon className="course-icon" />
              <Typography variant="h4" className="course-title">
                ניהול קורסים
              </Typography>
            </Box>

            <Typography variant="body1" className="course-subtitle">
              ברוכים הבאים למערכת ניהול הקורסים. כאן תוכלו לצפות, להוסיף ולנהל את כל הקורסים במערכת.
            </Typography>

            <Divider className="course-divider" />

            <Box className="course-stats">
              <Box className="stat-item">
                <Typography variant="h5">{courses.length}</Typography>
                <Typography variant="body2">קורסים פעילים</Typography>
              </Box>

              <Box className="stat-item">
                <Typography variant="h5">
                  {courses.reduce((sum, course) => sum + course.currentAmountOfStudents, 0)}
                </Typography>
                <Typography variant="body2">סטודנטים רשומים</Typography>
              </Box>

              <Box className="stat-item">
                <Typography variant="h5">
                  {courses.reduce((sum, course) => sum + (course.amountOfStudentsInCourse - course.currentAmountOfStudents), 0)}
                </Typography>
                <Typography variant="body2">מקומות פנויים</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Box className="course-actions-container">
          {/* כפתורי החלפת תצוגה - יוצגו רק אם יש יותר מתצוגה אחת */}
          {availableViews.length > 1 && (
            <Box className="view-toggle-wrapper">
              {availableViews.includes('table') && (
                <Tooltip title="תצוגה טבלאית" placement="top" TransitionComponent={Zoom} arrow>
                  <Button
                    className={`view-toggle-button ${activeView === 'table' ? 'active' : ''}`}
                    onClick={() => handleViewChange('table')}
                    variant={activeView === 'table' ? "contained" : "outlined"}
                  >
                    <ViewListIcon className="button-icon" />
                    <span className="button-text">תצוגה טבלאית</span>
                  </Button>
                </Tooltip>
              )}

              {availableViews.includes('grid') && (
                <Tooltip title="תצוגת רשת" placement="top" TransitionComponent={Zoom} arrow>
                  <Button
                    className={`view-toggle-button ${activeView === 'grid' ? 'active' : ''}`}
                    onClick={() => handleViewChange('grid')}
                    variant={activeView === 'grid' ? "contained" : "outlined"}
                  >
                    <GridViewIcon className="button-icon" />
                    <span className="button-text">תצוגת רשת</span>
                  </Button>
                </Tooltip>
              )}
            </Box>
          )}

          {/* כפתור הוספת קורס - עכשיו עם גודל קבוע */}
          <Tooltip title="הוסף קורס חדש" placement="left" TransitionComponent={Zoom} arrow>
            <Button
              className="add-course"
              //  className="add-course-button"
              onClick={toggleDialog}
              variant="contained"
              color="primary"
            >
              <AddIcon className="add-icon" />
              <span>הוספת קורס</span>
            </Button>
          </Tooltip>
        </Box>

        {activeView ? (
          <Paper className="content-container" elevation={3}>
            {activeView === 'grid' && <Home />}
            {activeView === 'table' && <TableCourse onDeleteCourse={handleDeleteCourse} />}
          </Paper>
        ) : (
          // מסך הברוכים הבאים - יוצג רק אם יש יותר מתצוגה אחת ולא נבחרה תצוגה
          availableViews.length > 1 ? (
            <Paper className="welcome-container" elevation={3}>
              <div className="welcome-content">
                <TouchAppIcon className="welcome-icon" />
                <Typography variant="h5" className="welcome-title">
                  בחרו תצוגה להצגת הקורסים
                </Typography>
                <Typography variant="body1" className="welcome-text">
                  לחצו על אחד מכפתורי התצוגה למעלה כדי להציג את הקורסים בפורמט המועדף עליכם
                </Typography>
                <div className="welcome-buttons">
                  {availableViews.includes('table') && (
                    <Button
                      className="welcome-button table-button"
                      onClick={() => handleViewChange('table')}
                      variant="outlined"
                    >
                      <ViewListIcon className="welcome-button-icon" />
                      תצוגה טבלאית
                    </Button>
                  )}
                  {availableViews.includes('grid') && (
                    <Button
                      className="welcome-button grid-button"
                      onClick={() => handleViewChange('grid')}
                      variant="outlined"
                    >
                      <GridViewIcon className="welcome-button-icon" />
                      תצוגת רשת
                    </Button>
                  )}
                </div>
              </div>
            </Paper>
          ) : (
            // אם יש רק תצוגה אחת, נציג אותה אוטומטית
            <Paper className="content-container" elevation={3}>
              {availableViews[0] === 'grid' && <Home />}
              {availableViews[0] === 'table' && <TableCourse onDeleteCourse={handleDeleteCourse} />}
            </Paper>
          )
        )}
      </Container>

      <Dialog
        open={dialogOpen}
        onClose={toggleDialog}
        maxWidth="md"
        fullWidth
        className="course-dialog"
      >
        <DialogTitle className="dialog-title">
          <AddIcon className="dialog-title-icon" />
          הוספת קורס חדש
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={toggleDialog}
          className="dialog-close-button"
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers className="dialog-content">
          <AddCourse onSuccess={toggleDialog} />
        </DialogContent>
      </Dialog>
    </div>
  );
};