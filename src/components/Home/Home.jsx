// // import * as React from 'react';
// // import { styled } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import ButtonBase from '@mui/material/ButtonBase';
// // import Typography from '@mui/material/Typography';
// // import { ShowCourse } from '../ShowCourse/ShowCourse';
// // import { useSelector } from 'react-redux';
// // import CardCourse from '../ShowCourse/cardCourse';
// // import { useDispatch } from 'react-redux';
// // import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';

// // // const images
// // //  = [
// // //   {
// // //     url: 'ראיית.jpg',
// // //     title: 'ראיית חשבון',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'תכנות.png',
// // //     title: 'הנדסאות תוכנה',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'גרפו.png',
// // //     title: ' גרפולוגיה',
// // //     width: '25%',
// // //   },

// // //   {
// // //     url: 'גרפו.png',
// // //     title: ' כירולוגיה',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'בימוי.jpg',
// // //     title: 'בימוי והפקה',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'קתדרה.jpg',
// // //     title: 'קתדרה ',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'גננות.jpg',
// // //     title: 'גננות ',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'הנהלח.jpg',
// // //     title: ' הנהלת חשבונות',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'מזכירות.jpg',
// // //     title: 'מזכירות וניהול משרד ',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'גינון.jpg',
// // //     title: 'גינון טיפולי ',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'ספורט.jpg',
// // //     title: 'ספורט טיפולי ',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'אדריכלות.jpg',
// // //     title: 'אדריכלות',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'גרפיק.jpg',
// // //     title: 'גרפיקה ',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'הסטוריה.png',
// // //     title: 'הוראת היסטוריה',
// // //     width: '25%',
// // //   },

// // //   {
// // //     url: 'מתמט.png',
// // //     title: 'הוראת מתמטיקה ',
// // //     width: '25%',
// // //   },

// // //   {
// // //     url: 'תרפי.jpg',
// // //     title: 'תרפיה באומנות',
// // //     width: '25%',
// // //   },

// // //   {
// // //     url: 'ראיית.jpg',
// // //     title: 'א',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'תכנות.png',
// // //     title: 'ב',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'גרפו.png',
// // //     title: 'ג',
// // //     width: '25%',
// // //   },
// // //   {
// // //     url: 'ספורט.jpg',
// // //     title: 'ד',
// // //     width: '25%',
// // //   }
// // // ];

// // const ImageButton = styled(ButtonBase)(({ theme }) => ({
// //   position: 'relative',
// //   height: 200,
// //   [theme.breakpoints.down('sm')]: {
// //     width: '100% !important', // Overrides inline-style
// //     height: 100,
// //   },
// //   '&:hover, &.Mui-focusVisible': {
// //     zIndex: 1,
// //     '& .MuiImageBackdrop-root': {
// //       opacity: 0.15,
// //     },
// //     '& .MuiImageMarked-root': {
// //       opacity: 0,
// //     },
// //     '& .MuiTypography-root': {
// //       border: '4px solid currentColor',
// //     },
// //   },
// // }));

// // const ImageSrc = styled('span')({
// //   position: 'absolute',
// //   left: 0,
// //   right: 0,
// //   top: 0,
// //   bottom: 0,
// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center 40%',
// // });

// // const Image = styled('span')(({ theme }) => ({
// //   position: 'absolute',
// //   left: 0,
// //   right: 0,
// //   top: 0,
// //   bottom: 0,
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   color: theme.palette.common.white,
// // }));

// // const ImageBackdrop = styled('span')(({ theme }) => ({
// //   position: 'absolute',
// //   left: 0,
// //   right: 0,
// //   top: 0,
// //   bottom: 0,
// //   backgroundColor: theme.palette.common.black,
// //   opacity: 0.4,
// //   transition: theme.transitions.create('opacity'),
// // }));

// // const ImageMarked = styled('span')(({ theme }) => ({
// //   height: 3,
// //   width: 18,
// //   backgroundColor: theme.palette.common.white,
// //   position: 'absolute',
// //   bottom: -2,
// //   left: 'calc(50% - 9px)',
// //   transition: theme.transitions.create('opacity'),
// // }));

// // export function Home() {
// //   const [selectedId, setSelectedId] = React.useState()
// //   const [selectedCourse, setSelectedCourse] = React.useState()
// //   const [flag, setFlag] = React.useState(true)
// //   const [flagStatus, setFlagStatus] = React.useState(false)
// //   const courses = useSelector(state => state.courses.courses);
// //   const course = useSelector(state => state.courses.selectC);
// //   const dispatch = useDispatch()


// //   async function setSelectedFunc(name) {
// //     try {
// //       const tempCourse = await dispatch(getCourseByCourseNameThunk(name))
// //       setSelectedId(tempCourse.payload.idOfCourse)
// //       setSelectedCourse(tempCourse.payload)
// //     }
// //     catch (error) {
// //       console.error("שגיאה  בהצגת קורס:", error);
// //     }

// //   }
// //   // console.log(tempCourse.payload.idOfCourse+"   selected id")
// //   //console.log(tempCourse.payload.nameOfCourse+"   name")
// //   // setSelectedName(name)

// //   //מה הולך כאן
// //   function navToShowCourse() {
// //     debugger
// //     if (courses.find(c => c.idOfCourse === selectedId
// //       //   // && c.Status === false
// //     ) != null) {
// //       //if(course.idOfCourse==0){
// //       // console.log(selectedId);
// //       // setFlagStatus(true) 
// //       setFlag(false)
// //     }
// //     else {
// //       alert("לא ניתן להרשם כרגע לקורס")
// //     }
// //   }

// //   React.useEffect(() => {
// //     if (selectedId != undefined)
// //       navToShowCourse()
// //   }, [selectedId])
// //   return (<>



// //     {/* <div>
// //             {courses.map(course => (
// //                 <div key={course.idOfCourse}>
// //                     <h3>{course.nameOfCourse}</h3>
// //                     {course.image && `https://localhost:7092${course.image}`}                  
// //                     {course.image && <img src={`https://localhost:7092${course.image}`} alt={course.nameOfCourse} />} 
// //                 </div>
// //             ))}
// //         </div>
// //      */}


// //     {/* {flag && <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
// //       {images.map((image, index) => (
// //         // <ImageButton onClick={() => navToShowCourse(setSelectedId(image.title))}
// //         // <ImageButton onClick={() =>{setSelectedId(index)}}
// //         <ImageButton onClick={() => setSelectedFunc(image.title)}
// //           focusRipple
// //           key={image.title}
// //           style={{
// //             width: image.width,
// //           }}
// //         >
// //           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
// //           <ImageBackdrop className="MuiImageBackdrop-root" />
// //           <Image>
// //             <Typography
// //               component="span"
// //               variant="subtitle1"
// //               color="inherit"
// //               sx={(theme) => ({
// //                 position: 'relative',
// //                 p: 4,
// //                 pt: 2,
// //                 pb: `calc(${theme.spacing(1)} + 6px)`,
// //               })}
// //             >
// //               {image.title}
// //               <ImageMarked className="MuiImageMarked-root" />
// //             </Typography >
// //           </Image>
// //         </ImageButton>
// //       ))} </Box>} */}




// //     {flag && <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
// //       {courses.map(course => (
// //         // <ImageButton onClick={() => navToShowCourse(setSelectedId(image.title))}
// //         // <ImageButton onClick={() =>{setSelectedId(index)}}
// //         <ImageButton onClick={() => setSelectedFunc(course.nameOfCourse)}
// //           focusRipple
// //           key={course.nameOfCourse}
// //         // style={{
// //         //   width: "25px",
// //         // }}
// //         >
// //           {/* <ImageSrc style={{ backgroundImage: `url(${image.url})` }} /> */}
// //           <img src={`https://localhost:7092${course.image}`} alt={course.nameOfCourse}

// //           />
// //           {/* src={`https://localhost:7092${course.image}`} */}
// //           <ImageBackdrop className="MuiImageBackdrop-root" />
// //           <Image>
// //             <Typography
// //               component="span"
// //               variant="subtitle1"
// //               color="inherit"
// //               sx={(theme) => ({
// //                 position: 'relative',
// //                 p: 4,
// //                 pt: 2,
// //                 pb: `calc(${theme.spacing(1)} + 6px)`,
// //                 width:'25%',
// //                 height:'25%'


// //               })}
// //             >
// //               {course.nameOfCourse}
// //               <ImageMarked className="MuiImageMarked-root" />
// //             </Typography >
// //           </Image>
// //         </ImageButton>
// //       ))} </Box>}










// //     {flag == false && <ShowCourse selectedCourse={selectedCourse}></ShowCourse>}
// //     {/* {flag == false && <CardCourse selectedId={selectedId}></CardCourse>} */}
// //   </>

// //   );
// // }
// // 
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { ShowCourse } from '../ShowCourse/ShowCourse';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';
// import { Grid, Chip, Tooltip, useMediaQuery, useTheme, Container, CircularProgress } from '@mui/material';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import PersonIcon from '@mui/icons-material/Person';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import SearchIcon from '@mui/icons-material/Search';
// import InputAdornment from '@mui/material/InputAdornment';
// import TextField from '@mui/material/TextField';
// import Fade from '@mui/material/Fade';
// import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// import { getSpeakerByIdThunk } from '../../redux/Thunks/getSpeakerByIdThunk';

// // Styled Components
// const CourseCard = styled('div')(({ theme }) => ({
//   borderRadius: '16px',
//   overflow: 'hidden',
//   position: 'relative',
//   height: '320px',
//   cursor: 'pointer',
//   boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-10px)',
//     boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
//   }
// }));

// const CourseImage = styled('div')({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   zIndex: 1,
// });

// const CourseOverlay = styled('div')(({ theme }) => ({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
//   zIndex: 2,
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(3),
//   transition: 'all 0.3s ease',
// }));

// const CourseTitle = styled(Typography)(({ theme }) => ({
//   color: theme.palette.common.white,
//   fontWeight: 700,
//   marginBottom: theme.spacing(1),
//   textShadow: '0 2px 4px rgba(0,0,0,0.5)',
// }));

// const CourseInfo = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   gap: theme.spacing(2),
//   marginTop: theme.spacing(1),
//   flexWrap: 'wrap',
// }));

// const CourseChip = styled(Chip)(({ theme }) => ({
//   background: 'rgba(255,255,255,0.2)',
//   backdropFilter: 'blur(5px)',
//   color: theme.palette.common.white,
//   fontWeight: 500,
//   '& .MuiChip-icon': {
//     color: theme.palette.common.white,
//   }
// }));

// const CategoryBadge = styled(Chip)(({ theme }) => ({
//   position: 'absolute',
//   top: theme.spacing(2),
//   right: theme.spacing(2),
//   zIndex: 3,
//   background: theme.palette.primary.main,
//   color: theme.palette.common.white,
//   fontWeight: 600,
// }));

// const CoursesHeader = styled(Typography)(({ theme }) => ({
//   textAlign: 'center',
//   margin: theme.spacing(5, 0),
//   fontWeight: 800,
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     bottom: '-10px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '80px',
//     height: '4px',
//     background: theme.palette.primary.main,
//     borderRadius: '2px',
//   }
// }));

// const SearchBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   marginBottom: theme.spacing(5),
//   width: '100%',
//   maxWidth: '600px',
//   margin: '0 auto',
//   marginBottom: theme.spacing(5),
// }));

// const NoCoursesMessage = styled(Box)(({ theme }) => ({
//   textAlign: 'center',
//   padding: theme.spacing(5),
//   color: theme.palette.text.secondary,
// }));

// export function Home() {
//   const [selectedId, setSelectedId] = React.useState();
//   const [selectedCourse, setSelectedCourse] = React.useState();
//   const [flag, setFlag] = React.useState(true);
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const [loading, setLoading] = React.useState(false);
//   const [lastUpdated, setLastUpdated] = React.useState(null);
//   const courses = useSelector(state => state.courses.allCourses);
//   const dispatch = useDispatch();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   // Filter courses based on search term
//   const filteredCourses = React.useMemo(() => {
//     return courses.filter(course =>
//       course.nameOfCourse.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [courses, searchTerm]);
//   // ======================================
//   // 
//   async function setSelectedFunc(name) {
//     try {
//       setLoading(true);
//       const tempCourse = await dispatch(getCourseByCourseNameThunk(name));
//       setSelectedId(tempCourse.payload.idOfCourse);
//       setSelectedCourse(tempCourse.payload);
//       // הערה: הסרנו את הבדיקה של סטטוס הקורס כדי לאפשר צפייה בכל הקורסים
//       navToShowCourse();
//     }
//     catch (error) {
//       console.error("שגיאה בהצגת קורס:", error);
//     }
//     finally {
//       setLoading(false);
//     }
//   }

//   // פונקציה זו מעבירה את המשתמש לתצוגת הקורס
//   function navToShowCourse() {
//     // בודקים רק אם הקורס קיים, ללא קשר לסטטוס שלו
//     if (courses.find(c => c.idOfCourse === selectedId) != null) {
//       setFlag(false);
//     }
//   }
//   // else {
//   //   alert("לא ניתן להציג את הקורס כרגע");
//   // }
//   // }
//   // ======================================
//   // async function setSelectedFunc(name) {
//   //   try {
//   //     setLoading(true);
//   //     const tempCourse = await dispatch(getCourseByCourseNameThunk(name));
//   //     setSelectedId(tempCourse.payload.idOfCourse);
//   //     setSelectedCourse(tempCourse.payload);
//   //   }
//   //   catch (error) {
//   //     console.error("שגיאה בהצגת קורס:", error);
//   //   }
//   //   finally {
//   //     setLoading(false);
//   //   }
//   // }

//   // function navToShowCourse() {
//   //   if (courses.find(c => c.idOfCourse === selectedId) != null) {
//   //     setFlag(false);
//   //   }
//   //   else {
//   //     alert("לא ניתן להרשם כרגע לקורס");
//   //   }
//   // }

//   React.useEffect(() => {
//     dispatch(getCoursesThunk());
//     if (selectedId != undefined)
//       navToShowCourse();
//   }, [selectedId, selectedCourse]);

//   // React.useEffect(() => {
//   //   getCourseSpeakerName(selectedCourse.idOfSpeaker);
//   // }, [selectedCourse]);

//   // const getCourseSpeakerName = async (id) => {
//   //   const name = await dispatch(getSpeakerByIdThunk(id));
//   //   console.log("name.action.payload.nameOfSpeaker" + "  " + name.action.payload.nameOfSpeaker)
//   //   return name.action.payload.nameOfSpeaker;

//   // };
//   React.useEffect(() => {
//     if (lastUpdated && selectedCourse) {
//       // רענון הקורס הנבחר
//       dispatch(getCourseByCourseNameThunk(selectedCourse.nameOfCourse))
//         .then(response => {
//           setSelectedCourse(response.payload);
//         })
//         .catch(error => {
//           console.error("שגיאה בטעינת הקורס המעודכן:", error);
//         });
//     }
//   }, [lastUpdated, dispatch]);



//   // Mock data for demonstration - replace with actual data from your courses
//   const getCourseCategory = (course) => {
//     // This is a placeholder - implement your own category logic
//     const categories = ['אקדמי', 'מקצועי', 'העשרה', 'אמנות', 'טכנולוגיה'];
//     return categories[Math.floor(Math.random() * categories.length)];
//   };

//   const getCourseDuration = (course) => {
//     //This is a placeholder - implement your own duration logic
//     return `${Math.floor(Math.random() * 12) + 1} חודשים`;
//   };

//   const getCourseInstructor = (course) => {
//     // This is a placeholder - implement your own instructor logic
//     const instructors = ['ד"ר כהן', 'פרופ\' לוי', 'מר ישראלי', 'גב\' אברהם'];
//     return instructors[Math.floor(Math.random() * instructors.length)];
//   };

//   const getStartDate = (course) => {
//     // This is a placeholder - implement your own date logic
//     const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני'];
//     return `${months[Math.floor(Math.random() * months.length)]} 2023`;
//   };

//   return (
//     <>
//       {loading && (
//         <Box sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(255,255,255,0.7)',
//           zIndex: 9999
//         }}>
//           <CircularProgress size={60} />
//         </Box>
//       )}

//       {/* {flag == false && (
//   <ShowCourse 
//     selectedCourse={selectedCourse} 
//     onBack={() => setFlag(true)}
//     onCourseUpdate={() => {
//       // רענון הקורס הנבחר
//       dispatch(getCourseByCourseNameThunk(selectedCourse.nameOfCourse))
//         .then(response => {
//           setSelectedCourse(response.payload);
//           // רענון כל הקורסים
//           dispatch(getCoursesThunk());
//         });
//     }}
//   />
// )} */}
//       {/* {flag == false && (
//       <ShowCourse
//         selectedCourse={selectedCourse}
//         onBack={() => setFlag(true)}
//         onCourseUpdate={() => setLastUpdated(new Date().getTime())}
//       />
//     )} */}
//       {flag ? (
//         <Container maxWidth="xl" sx={{ padding: 3, direction: 'rtl' }}>
//           <Fade in={true} timeout={800}>
//             <Box>
//               <CoursesHeader variant="h3">
//                 קורסים והשתלמויות
//               </CoursesHeader>

//               <SearchBox>
//                 <TextField
//                   fullWidth
//                   placeholder="חיפוש קורסים..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   variant="outlined"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <SearchIcon />
//                       </InputAdornment>
//                     ),
//                     sx: {
//                       borderRadius: '30px',
//                       '& fieldset': {
//                         borderRadius: '30px',
//                       },
//                     }
//                   }}
//                 />
//               </SearchBox>
//               <br></br>
//               {filteredCourses.length > 0 ? (
//                 <Grid container spacing={3}>
//                   {filteredCourses.map((course, index) => (
//                     <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse || index}>
//                       <Fade in={true} timeout={(index + 1) * 200}>
//                         <CourseCard
//                           onClick={() => setSelectedFunc(course.nameOfCourse)}
//                         >
//                           <CourseImage style={{
//                             backgroundImage: `url(https://localhost:7092${course.image})`
//                           }} />
//                           <CourseOverlay>
//                             <CategoryBadge label={getCourseCategory(course)} />
//                             <CourseTitle variant="h5">
//                               {course.nameOfCourse}
//                             </CourseTitle>
//                             <CourseInfo>
//                               <Tooltip title="משך הקורס">
//                                 <CourseChip
//                                   icon={<AccessTimeIcon />}
//                                   label={course.amountOfMeetingsInCourse+" "+"מפגשים"}
//                                   size="small"
//                                 />
//                               </Tooltip>
//                               <Tooltip title="מרצה">
//                                 <CourseChip
//                                   icon={<PersonIcon />}
//                                   // label={() => getCourseSpeakerName(course.idOfSpeaker)}
//                                   label={getCourseInstructor(course)}
//                                   size="small"
//                                 />
//                               </Tooltip>
//                               <Tooltip title="תאריך פתיחה">
//                                 <CourseChip
//                                   icon={<CalendarTodayIcon />}
//                                   label={course.startDateOfCourse}
//                                   size="small"
//                                 />
//                               </Tooltip>
//                             </CourseInfo>
//                           </CourseOverlay>
//                         </CourseCard>
//                       </Fade>
//                     </Grid>
//                   ))}
//                 </Grid>
//               ) : (
//                 <NoCoursesMessage>
//                   <Typography variant="h6">לא נמצאו קורסים התואמים לחיפוש</Typography>
//                   <Typography variant="body1" sx={{ mt: 1 }}>נסה לחפש מונחים אחרים או לנקות את החיפוש</Typography>
//                 </NoCoursesMessage>
//               )}
//             </Box>
//           </Fade>
//         </Container>
//       ) : (
//         <Fade in={true} timeout={500}>
//           <Box>
//             <ShowCourse selectedCourse={selectedCourse} onBack={() => setFlag(true)} />
//           </Box>
//         </Fade>
//       )}
//       {/* {flag == false && (
//       <ShowCourse
//         selectedCourse={selectedCourse}
//         onBack={() => setFlag(true)}
//         onCourseUpdate={() => setLastUpdated(new Date().getTime())}
//       />
//     )} */}

//     </>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseNameThunk';
import { ShowCourse } from '../ShowCourse/ShowCourse';
import { Routing } from '../Routing/Routing';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Divider,
  Chip,
  CircularProgress,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  CardMedia,
  InputLabel,
  Fade
} from '@mui/material';
import {
  Event as EventIcon,
  AccessTime as AccessTimeIcon,
  LocationOn as LocationOnIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Sort as SortIcon,
  PersonPinCircle,
  CalendarViewMonth
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
import { Tooltip } from 'bootstrap';
const CourseCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  overflow: 'hidden',
  position: 'relative',
  height: '320px',
  cursor: 'pointer',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
  }
}));

const CourseImage = styled(CardMedia)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,
  height: '50%'
});

const CourseOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
}));
const CourseTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
}));

const CourseInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
  flexWrap: 'wrap',
}));

const CourseChip = styled(Chip)(({ theme }) => ({
  background: 'rgba(255,255,255,0.2)',
  backdropFilter: 'blur(5px)',
  color: theme.palette.common.white,
  fontWeight: 500,
  '& .MuiChip-icon': {
    color: theme.palette.common.white,
  }
}));
const getCourseInstructor = (course) => {
  // זוהי פונקציית דוגמה - יש להחליף בלוגיקה אמיתית לפי הצורך
  if (course.speakerName) return course.speakerName;
  const instructors = ['ד"ר כהן', 'פרופ\' לוי', 'מר ישראלי', 'גב\' אברהם'];
  return instructors[Math.floor(Math.random() * instructors.length)];
};
const CategoryBadge = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 3,
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 600,
}));

const CoursesHeader = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(5, 0),
  fontWeight: 800,
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: theme.palette.primary.main,
    borderRadius: '2px',
  }
}));

export function Home() {
  const [selectedId, setSelectedId] = React.useState();
  const [selectedCourse, setSelectedCourse] = React.useState();
  const [flag, setFlag] = React.useState(true);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('nameOfCourse');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterDay, setFilterDay] = useState('');

  const courses = useSelector(state => state.courses.allCourses);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        await dispatch(getCoursesThunk());
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [dispatch]);

  async function setSelectedFunc(id) {
    try {
      setLoading(true);
      const tempCourse = await dispatch(getCourseByCourseIdThunk(id));
      setSelectedId(tempCourse.payload.idOfCourse);
      setSelectedCourse(tempCourse.payload);
      setFlag(false);
    }
    catch (error) {
      console.error("Error fetching course details:", error);
    }
    finally {
      setLoading(false);
    }
  }

  const handleBack = () => {
    setFlag(true);
  };

  const handleCourseUpdate = (updatedCourse) => {
    setSelectedCourse(updatedCourse);
  };
  const getCourseCategory = (course) => {
    // זוהי פונקציית דוגמה - יש להחליף בלוגיקה אמיתית לפי הצורך
    const categories = ['אקדמי', 'מקצועי', 'העשרה', 'אמנות', 'טכנולוגיה'];
    return categories[Math.floor(Math.random() * categories.length)];
  };
  // Filter and sort courses
  const filteredAndSortedCourses = React.useMemo(() => {
    if (!courses) return [];

    return [...courses]
      .filter(course => {
        const matchesSearch = course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.descriptionOfCourse?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDay = !filterDay || course.dayOfCourse === filterDay;

        return matchesSearch && matchesDay;
      })
      .sort((a, b) => {
        let comparison = 0;

        if (sortBy === 'nameOfCourse') {
          comparison = a.nameOfCourse?.localeCompare(b.nameOfCourse);
        } else if (sortBy === 'startDateOfCourse') {
          comparison = new Date(a.startDateOfCourse) - new Date(b.startDateOfCourse);
        } else if (sortBy === 'totalSumOfCourse') {
          comparison = a.totalSumOfCourse - b.totalSumOfCourse;
        }

        return sortOrder === 'asc' ? comparison : -comparison;
      });
  }, [courses, searchTerm, filterDay, sortBy, sortOrder]);

  return (
    <>
      {loading && (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255,255,255,0.7)',
          zIndex: 9999
        }}>
          <CircularProgress size={60} />
        </Box>
      )}

      {flag ? (
        <Container maxWidth="xl" sx={{ padding: 3, direction: 'rtl' }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
              הקורסים שלנו
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
              <TextField
                placeholder="חיפוש קורסים..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ flexGrow: 1, minWidth: '200px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl sx={{ minWidth: '150px' }}>
                <InputLabel>סינון לפי יום</InputLabel>
                <Select
                  value={filterDay}
                  onChange={(e) => setFilterDay(e.target.value)}
                  label="סינון לפי יום"
                  startAdornment={
                    <InputAdornment position="start">
                      <FilterListIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="">הכל</MenuItem>
                  <MenuItem value="ראשון">ראשון</MenuItem>
                  <MenuItem value="שני">שני</MenuItem>
                  <MenuItem value="שלישי">שלישי</MenuItem>
                  <MenuItem value="רביעי">רביעי</MenuItem>
                  <MenuItem value="חמישי">חמישי</MenuItem>
                  <MenuItem value="שישי">שישי</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: '150px' }}>
                <InputLabel>מיון לפי</InputLabel>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  label="מיון לפי"
                  startAdornment={
                    <InputAdornment position="start">
                      <SortIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="nameOfCourse">שם</MenuItem>
                  <MenuItem value="startDateOfCourse">תאריך התחלה</MenuItem>
                  <MenuItem value="totalSumOfCourse">מחיר</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: '150px' }}>
                <InputLabel>סדר מיון</InputLabel>
                <Select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  label="סדר מיון"
                >
                  <MenuItem value="asc">עולה</MenuItem>
                  <MenuItem value="desc">יורד</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Grid container spacing={3}>
            {filteredAndSortedCourses.length > 0 ? (
              filteredAndSortedCourses.map ((course,index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                     <CourseImage 
                       image={`https://localhost:7092${course.image}`}
                       title={course.nameOfCourse}
                     />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {course.nameOfCourse}
                      </Typography>
                    
                      <Divider sx={{ my: 1.5 }} />

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <EventIcon sx={{ color: 'primary.main', mr: 1 }} />
                        <Typography variant="body2">
                          {course.startDateOfCourse || "בקרוב"}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <AccessTimeIcon sx={{ color: 'primary.main', mr: 1 }} />
                        <Typography variant="body2">
                          {course.dayOfCourse || "לא צוין"}, {course.hourOfCourse || ""}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <LocationOnIcon sx={{ color: 'primary.main', mr: 1 }} />
                        <Typography variant="body2" noWrap>
                          {course.placeOfCourse || "לא צוין"}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mt: 2,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          height: '4.5em'
                        }}
                      >
                        {course.descriptionOfCourse || "אין תיאור זמין לקורס זה."}
                      </Typography>
                    </CardContent>

                    <Box sx={{ p: 2, pt: 0, mt: 'auto' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Chip
                          label={`${course.currentAmountOfStudents || 0}/${course.amountOfStudentsInCourse || 0} תלמידות`}
                          size="small"
                          color={
                            course.currentAmountOfStudents >= course.amountOfStudentsInCourse
                              ? "error"
                              : "primary"
                          }
                        />
                        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold' }}>
                          ₪{course.totalSumOfCourse || 0}
                        </Typography>
                      </Box>

                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => setSelectedFunc(course.idOfCourse)}
                      >
                        פרטים נוספים
                      </Button>
                    </Box>
                  </Card>
                </Grid>
 ////////////////////////////////////////////////////////////////////////////////
              //   <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse}>
              //   {/* || index}> */}
              //   <Fade in={true} timeout={(8 + 1) * 200}> 
              //   {/* <Fade in={true} timeout={(index + 1) * 200}> */} */}
              //     <CourseCard
              //       onClick={() => setSelectedFunc(course.idOfCourse)}
              //       className="course-card-item"
              //     >
              //       <CourseImage 
              //         image={`https://localhost:7092${course.image}`}
              //         title={course.nameOfCourse}
              //       />
              //       <CourseOverlay>
              //         <CategoryBadge label={getCourseCategory(course)} />
              //         <CourseTitle variant="h5">
              //           {course.nameOfCourse}
              //         </CourseTitle>
              //         <CourseInfo>
              //           <Tooltip title="משך הקורס" arrow>
              //             <CourseChip
              //               icon={<AccessTimeIcon />}
              //               label={course.amountOfMeetingsInCourse ? `${course.amountOfMeetingsInCourse} מפגשים` : "לא צוין"}
              //               size="small"
              //             />
              //           </Tooltip>
              //           <Tooltip title="מרצה" arrow>
              //             <CourseChip 
              //              // icon={<PersonPinCircleIcon />}  
              //               label={getCourseInstructor(course)}
              //               size="small"
              //             />
              //           </Tooltip>
              //           <Tooltip title="תאריך פתיחה" arrow>
              //             <CourseChip
              //               // icon={<CalendarViewMonthIcon />}
              //               label={course.startDateOfCourse || "לא צוין"}
              //               size="small"
              //             />
              //           </Tooltip>
              //         </CourseInfo>
              //         {course.currentAmountOfStudents !== undefined && course.amountOfStudentsInCourse !== undefined && (
              //           <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              //             <Chip
              //               // icon={<EventAvailableIcon />}
              //               label={`${course.amountOfStudentsInCourse - course.currentAmountOfStudents} מקומות פנויים`}
              //               size="small"
              //               color={
              //                 (course.amountOfStudentsInCourse - course.currentAmountOfStudents) > 5
              //                   ? "success"
              //                   : (course.amountOfStudentsInCourse - course.currentAmountOfStudents) > 0
              //                     ? "warning"
              //                     : "error"
              //               }
              //               sx={{
              //                 fontWeight: 600,
              //                 background: 'rgba(255,255,255,0.9)',
              //                 color: theme => 
              //                   (course.amountOfStudentsInCourse - course.currentAmountOfStudents) > 5
              //                     ? theme.palette.success.dark
              //                     : (course.amountOfStudentsInCourse - course.currentAmountOfStudents) > 0
              //                       ? theme.palette.warning.dark
              //                       : theme.palette.error.dark,
              //               }}
              //             />
              //           </Box>
              //         )}
              //       </CourseOverlay>
              //     </CourseCard>
              //   </Fade>
              // </Grid>



//////////////////////////////////////////////////////////
              ))
            ) : (
              <Box sx={{ width: '100%', textAlign: 'center', py: 5 }}>
                <Typography variant="h6">
                  {courses?.length > 0
                    ? "לא נמצאו קורסים התואמים לחיפוש"
                    : "אין קורסים זמינים כרגע"}
                </Typography>
              </Box>
            )}
          </Grid>
        </Container>
      ) : (
        <Fade in={true} timeout={500}>
          <Box>
            <ShowCourse
              selectedCourse={selectedCourse}
              onBack={handleBack}
              onCourseUpdate={handleCourseUpdate}
            />
          </Box>
        </Fade>
      )}
    </>
  );
}