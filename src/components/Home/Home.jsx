// // // // // // // // // import * as React from 'react';
// // // // // // // // // import { styled } from '@mui/material/styles';
// // // // // // // // // import Box from '@mui/material/Box';
// // // // // // // // // import ButtonBase from '@mui/material/ButtonBase';
// // // // // // // // // import Typography from '@mui/material/Typography';
// // // // // // // // // import { ShowCourse } from '../ShowCourse/ShowCourse';
// // // // // // // // // import { useSelector } from 'react-redux';
// // // // // // // // // import CardCourse from '../ShowCourse/cardCourse';
// // // // // // // // // import { useDispatch } from 'react-redux';
// // // // // // // // // import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';

// // // // // // // // // // const images
// // // // // // // // // //  = [
// // // // // // // // // //   {
// // // // // // // // // //     url: 'ראיית.jpg',
// // // // // // // // // //     title: 'ראיית חשבון',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'תכנות.png',
// // // // // // // // // //     title: 'הנדסאות תוכנה',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'גרפו.png',
// // // // // // // // // //     title: ' גרפולוגיה',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },

// // // // // // // // // //   {
// // // // // // // // // //     url: 'גרפו.png',
// // // // // // // // // //     title: ' כירולוגיה',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'בימוי.jpg',
// // // // // // // // // //     title: 'בימוי והפקה',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'קתדרה.jpg',
// // // // // // // // // //     title: 'קתדרה ',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'גננות.jpg',
// // // // // // // // // //     title: 'גננות ',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'הנהלח.jpg',
// // // // // // // // // //     title: ' הנהלת חשבונות',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'מזכירות.jpg',
// // // // // // // // // //     title: 'מזכירות וניהול משרד ',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'גינון.jpg',
// // // // // // // // // //     title: 'גינון טיפולי ',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'ספורט.jpg',
// // // // // // // // // //     title: 'ספורט טיפולי ',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'אדריכלות.jpg',
// // // // // // // // // //     title: 'אדריכלות',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'גרפיק.jpg',
// // // // // // // // // //     title: 'גרפיקה ',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'הסטוריה.png',
// // // // // // // // // //     title: 'הוראת היסטוריה',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },

// // // // // // // // // //   {
// // // // // // // // // //     url: 'מתמט.png',
// // // // // // // // // //     title: 'הוראת מתמטיקה ',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },

// // // // // // // // // //   {
// // // // // // // // // //     url: 'תרפי.jpg',
// // // // // // // // // //     title: 'תרפיה באומנות',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },

// // // // // // // // // //   {
// // // // // // // // // //     url: 'ראיית.jpg',
// // // // // // // // // //     title: 'א',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'תכנות.png',
// // // // // // // // // //     title: 'ב',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'גרפו.png',
// // // // // // // // // //     title: 'ג',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     url: 'ספורט.jpg',
// // // // // // // // // //     title: 'ד',
// // // // // // // // // //     width: '25%',
// // // // // // // // // //   }
// // // // // // // // // // ];

// // // // // // // // // const ImageButton = styled(ButtonBase)(({ theme }) => ({
// // // // // // // // //   position: 'relative',
// // // // // // // // //   height: 200,
// // // // // // // // //   [theme.breakpoints.down('sm')]: {
// // // // // // // // //     width: '100% !important', // Overrides inline-style
// // // // // // // // //     height: 100,
// // // // // // // // //   },
// // // // // // // // //   '&:hover, &.Mui-focusVisible': {
// // // // // // // // //     zIndex: 1,
// // // // // // // // //     '& .MuiImageBackdrop-root': {
// // // // // // // // //       opacity: 0.15,
// // // // // // // // //     },
// // // // // // // // //     '& .MuiImageMarked-root': {
// // // // // // // // //       opacity: 0,
// // // // // // // // //     },
// // // // // // // // //     '& .MuiTypography-root': {
// // // // // // // // //       border: '4px solid currentColor',
// // // // // // // // //     },
// // // // // // // // //   },
// // // // // // // // // }));

// // // // // // // // // const ImageSrc = styled('span')({
// // // // // // // // //   position: 'absolute',
// // // // // // // // //   left: 0,
// // // // // // // // //   right: 0,
// // // // // // // // //   top: 0,
// // // // // // // // //   bottom: 0,
// // // // // // // // //   backgroundSize: 'cover',
// // // // // // // // //   backgroundPosition: 'center 40%',
// // // // // // // // // });

// // // // // // // // // const Image = styled('span')(({ theme }) => ({
// // // // // // // // //   position: 'absolute',
// // // // // // // // //   left: 0,
// // // // // // // // //   right: 0,
// // // // // // // // //   top: 0,
// // // // // // // // //   bottom: 0,
// // // // // // // // //   display: 'flex',
// // // // // // // // //   alignItems: 'center',
// // // // // // // // //   justifyContent: 'center',
// // // // // // // // //   color: theme.palette.common.white,
// // // // // // // // // }));

// // // // // // // // // const ImageBackdrop = styled('span')(({ theme }) => ({
// // // // // // // // //   position: 'absolute',
// // // // // // // // //   left: 0,
// // // // // // // // //   right: 0,
// // // // // // // // //   top: 0,
// // // // // // // // //   bottom: 0,
// // // // // // // // //   backgroundColor: theme.palette.common.black,
// // // // // // // // //   opacity: 0.4,
// // // // // // // // //   transition: theme.transitions.create('opacity'),
// // // // // // // // // }));

// // // // // // // // // const ImageMarked = styled('span')(({ theme }) => ({
// // // // // // // // //   height: 3,
// // // // // // // // //   width: 18,
// // // // // // // // //   backgroundColor: theme.palette.common.white,
// // // // // // // // //   position: 'absolute',
// // // // // // // // //   bottom: -2,
// // // // // // // // //   left: 'calc(50% - 9px)',
// // // // // // // // //   transition: theme.transitions.create('opacity'),
// // // // // // // // // }));

// // // // // // // // // export function Home() {
// // // // // // // // //   const [selectedId, setSelectedId] = React.useState()
// // // // // // // // //   const [selectedCourse, setSelectedCourse] = React.useState()
// // // // // // // // //   const [flag, setFlag] = React.useState(true)
// // // // // // // // //   const [flagStatus, setFlagStatus] = React.useState(false)
// // // // // // // // //   const courses = useSelector(state => state.courses.courses);
// // // // // // // // //   const course = useSelector(state => state.courses.selectC);
// // // // // // // // //   const dispatch = useDispatch()


// // // // // // // // //   async function setSelectedFunc(name) {
// // // // // // // // //     try {
// // // // // // // // //       const tempCourse = await dispatch(getCourseByCourseNameThunk(name))
// // // // // // // // //       setSelectedId(tempCourse.payload.idOfCourse)
// // // // // // // // //       setSelectedCourse(tempCourse.payload)
// // // // // // // // //     }
// // // // // // // // //     catch (error) {
// // // // // // // // //       console.error("שגיאה  בהצגת קורס:", error);
// // // // // // // // //     }

// // // // // // // // //   }
// // // // // // // // //   // console.log(tempCourse.payload.idOfCourse+"   selected id")
// // // // // // // // //   //console.log(tempCourse.payload.nameOfCourse+"   name")
// // // // // // // // //   // setSelectedName(name)

// // // // // // // // //   //מה הולך כאן
// // // // // // // // //   function navToShowCourse() {
// // // // // // // // //     debugger
// // // // // // // // //     if (courses.find(c => c.idOfCourse === selectedId
// // // // // // // // //       //   // && c.Status === false
// // // // // // // // //     ) != null) {
// // // // // // // // //       //if(course.idOfCourse==0){
// // // // // // // // //       // console.log(selectedId);
// // // // // // // // //       // setFlagStatus(true) 
// // // // // // // // //       setFlag(false)
// // // // // // // // //     }
// // // // // // // // //     else {
// // // // // // // // //       alert("לא ניתן להרשם כרגע לקורס")
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   React.useEffect(() => {
// // // // // // // // //     if (selectedId != undefined)
// // // // // // // // //       navToShowCourse()
// // // // // // // // //   }, [selectedId])
// // // // // // // // //   return (<>



// // // // // // // // //     {/* <div>
// // // // // // // // //             {courses.map(course => (
// // // // // // // // //                 <div key={course.idOfCourse}>
// // // // // // // // //                     <h3>{course.nameOfCourse}</h3>
// // // // // // // // //                     {course.image && `https://localhost:7092${course.image}`}                  
// // // // // // // // //                     {course.image && <img src={`https://localhost:7092${course.image}`} alt={course.nameOfCourse} />} 
// // // // // // // // //                 </div>
// // // // // // // // //             ))}
// // // // // // // // //         </div>
// // // // // // // // //      */}


// // // // // // // // //     {/* {flag && <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
// // // // // // // // //       {images.map((image, index) => (
// // // // // // // // //         // <ImageButton onClick={() => navToShowCourse(setSelectedId(image.title))}
// // // // // // // // //         // <ImageButton onClick={() =>{setSelectedId(index)}}
// // // // // // // // //         <ImageButton onClick={() => setSelectedFunc(image.title)}
// // // // // // // // //           focusRipple
// // // // // // // // //           key={image.title}
// // // // // // // // //           style={{
// // // // // // // // //             width: image.width,
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
// // // // // // // // //           <ImageBackdrop className="MuiImageBackdrop-root" />
// // // // // // // // //           <Image>
// // // // // // // // //             <Typography
// // // // // // // // //               component="span"
// // // // // // // // //               variant="subtitle1"
// // // // // // // // //               color="inherit"
// // // // // // // // //               sx={(theme) => ({
// // // // // // // // //                 position: 'relative',
// // // // // // // // //                 p: 4,
// // // // // // // // //                 pt: 2,
// // // // // // // // //                 pb: `calc(${theme.spacing(1)} + 6px)`,
// // // // // // // // //               })}
// // // // // // // // //             >
// // // // // // // // //               {image.title}
// // // // // // // // //               <ImageMarked className="MuiImageMarked-root" />
// // // // // // // // //             </Typography >
// // // // // // // // //           </Image>
// // // // // // // // //         </ImageButton>
// // // // // // // // //       ))} </Box>} */}




// // // // // // // // //     {flag && <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
// // // // // // // // //       {courses.map(course => (
// // // // // // // // //         // <ImageButton onClick={() => navToShowCourse(setSelectedId(image.title))}
// // // // // // // // //         // <ImageButton onClick={() =>{setSelectedId(index)}}
// // // // // // // // //         <ImageButton onClick={() => setSelectedFunc(course.nameOfCourse)}
// // // // // // // // //           focusRipple
// // // // // // // // //           key={course.nameOfCourse}
// // // // // // // // //         // style={{
// // // // // // // // //         //   width: "25px",
// // // // // // // // //         // }}
// // // // // // // // //         >
// // // // // // // // //           {/* <ImageSrc style={{ backgroundImage: `url(${image.url})` }} /> */}
// // // // // // // // //           <img src={`https://localhost:7092${course.image}`} alt={course.nameOfCourse}

// // // // // // // // //           />
// // // // // // // // //           {/* src={`https://localhost:7092${course.image}`} */}
// // // // // // // // //           <ImageBackdrop className="MuiImageBackdrop-root" />
// // // // // // // // //           <Image>
// // // // // // // // //             <Typography
// // // // // // // // //               component="span"
// // // // // // // // //               variant="subtitle1"
// // // // // // // // //               color="inherit"
// // // // // // // // //               sx={(theme) => ({
// // // // // // // // //                 position: 'relative',
// // // // // // // // //                 p: 4,
// // // // // // // // //                 pt: 2,
// // // // // // // // //                 pb: `calc(${theme.spacing(1)} + 6px)`,
// // // // // // // // //                 width:'25%',
// // // // // // // // //                 height:'25%'


// // // // // // // // //               })}
// // // // // // // // //             >
// // // // // // // // //               {course.nameOfCourse}
// // // // // // // // //               <ImageMarked className="MuiImageMarked-root" />
// // // // // // // // //             </Typography >
// // // // // // // // //           </Image>
// // // // // // // // //         </ImageButton>
// // // // // // // // //       ))} </Box>}










// // // // // // // // //     {flag == false && <ShowCourse selectedCourse={selectedCourse}></ShowCourse>}
// // // // // // // // //     {/* {flag == false && <CardCourse selectedId={selectedId}></CardCourse>} */}
// // // // // // // // //   </>

// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // // 
// // // // // // // // import * as React from 'react';
// // // // // // // // import { styled } from '@mui/material/styles';
// // // // // // // // import Box from '@mui/material/Box';
// // // // // // // // import Typography from '@mui/material/Typography';
// // // // // // // // import { ShowCourse } from '../ShowCourse/ShowCourse';
// // // // // // // // import { useSelector } from 'react-redux';
// // // // // // // // import { useDispatch } from 'react-redux';
// // // // // // // // import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseName';
// // // // // // // // import { Grid, Chip, Tooltip, useMediaQuery, useTheme, Container, CircularProgress } from '@mui/material';
// // // // // // // // import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// // // // // // // // import PersonIcon from '@mui/icons-material/Person';
// // // // // // // // import AccessTimeIcon from '@mui/icons-material/AccessTime';
// // // // // // // // import SearchIcon from '@mui/icons-material/Search';
// // // // // // // // import InputAdornment from '@mui/material/InputAdornment';
// // // // // // // // import TextField from '@mui/material/TextField';
// // // // // // // // import Fade from '@mui/material/Fade';
// // // // // // // // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// // // // // // // // import { getSpeakerByIdThunk } from '../../redux/Thunks/getSpeakerByIdThunk';

// // // // // // // // // Styled Components
// // // // // // // // const CourseCard = styled('div')(({ theme }) => ({
// // // // // // // //   borderRadius: '16px',
// // // // // // // //   overflow: 'hidden',
// // // // // // // //   position: 'relative',
// // // // // // // //   height: '320px',
// // // // // // // //   cursor: 'pointer',
// // // // // // // //   boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
// // // // // // // //   transition: 'all 0.3s ease',
// // // // // // // //   '&:hover': {
// // // // // // // //     transform: 'translateY(-10px)',
// // // // // // // //     boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
// // // // // // // //   }
// // // // // // // // }));

// // // // // // // // const CourseImage = styled('div')({
// // // // // // // //   position: 'absolute',
// // // // // // // //   top: 0,
// // // // // // // //   left: 0,
// // // // // // // //   right: 0,
// // // // // // // //   bottom: 0,
// // // // // // // //   backgroundSize: 'cover',
// // // // // // // //   backgroundPosition: 'center',
// // // // // // // //   zIndex: 1,
// // // // // // // // });

// // // // // // // // const CourseOverlay = styled('div')(({ theme }) => ({
// // // // // // // //   position: 'absolute',
// // // // // // // //   top: 0,
// // // // // // // //   left: 0,
// // // // // // // //   right: 0,
// // // // // // // //   bottom: 0,
// // // // // // // //   background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
// // // // // // // //   zIndex: 2,
// // // // // // // //   display: 'flex',
// // // // // // // //   flexDirection: 'column',
// // // // // // // //   justifyContent: 'flex-end',
// // // // // // // //   padding: theme.spacing(3),
// // // // // // // //   transition: 'all 0.3s ease',
// // // // // // // // }));

// // // // // // // // const CourseTitle = styled(Typography)(({ theme }) => ({
// // // // // // // //   color: theme.palette.common.white,
// // // // // // // //   fontWeight: 700,
// // // // // // // //   marginBottom: theme.spacing(1),
// // // // // // // //   textShadow: '0 2px 4px rgba(0,0,0,0.5)',
// // // // // // // // }));

// // // // // // // // const CourseInfo = styled(Box)(({ theme }) => ({
// // // // // // // //   display: 'flex',
// // // // // // // //   gap: theme.spacing(2),
// // // // // // // //   marginTop: theme.spacing(1),
// // // // // // // //   flexWrap: 'wrap',
// // // // // // // // }));

// // // // // // // // const CourseChip = styled(Chip)(({ theme }) => ({
// // // // // // // //   background: 'rgba(255,255,255,0.2)',
// // // // // // // //   backdropFilter: 'blur(5px)',
// // // // // // // //   color: theme.palette.common.white,
// // // // // // // //   fontWeight: 500,
// // // // // // // //   '& .MuiChip-icon': {
// // // // // // // //     color: theme.palette.common.white,
// // // // // // // //   }
// // // // // // // // }));

// // // // // // // // const CategoryBadge = styled(Chip)(({ theme }) => ({
// // // // // // // //   position: 'absolute',
// // // // // // // //   top: theme.spacing(2),
// // // // // // // //   right: theme.spacing(2),
// // // // // // // //   zIndex: 3,
// // // // // // // //   background: theme.palette.primary.main,
// // // // // // // //   color: theme.palette.common.white,
// // // // // // // //   fontWeight: 600,
// // // // // // // // }));

// // // // // // // // const CoursesHeader = styled(Typography)(({ theme }) => ({
// // // // // // // //   textAlign: 'center',
// // // // // // // //   margin: theme.spacing(5, 0),
// // // // // // // //   fontWeight: 800,
// // // // // // // //   position: 'relative',
// // // // // // // //   '&:after': {
// // // // // // // //     content: '""',
// // // // // // // //     position: 'absolute',
// // // // // // // //     bottom: '-10px',
// // // // // // // //     left: '50%',
// // // // // // // //     transform: 'translateX(-50%)',
// // // // // // // //     width: '80px',
// // // // // // // //     height: '4px',
// // // // // // // //     background: theme.palette.primary.main,
// // // // // // // //     borderRadius: '2px',
// // // // // // // //   }
// // // // // // // // }));

// // // // // // // // const SearchBox = styled(Box)(({ theme }) => ({
// // // // // // // //   display: 'flex',
// // // // // // // //   justifyContent: 'center',
// // // // // // // //   marginBottom: theme.spacing(5),
// // // // // // // //   width: '100%',
// // // // // // // //   maxWidth: '600px',
// // // // // // // //   margin: '0 auto',
// // // // // // // //   marginBottom: theme.spacing(5),
// // // // // // // // }));

// // // // // // // // const NoCoursesMessage = styled(Box)(({ theme }) => ({
// // // // // // // //   textAlign: 'center',
// // // // // // // //   padding: theme.spacing(5),
// // // // // // // //   color: theme.palette.text.secondary,
// // // // // // // // }));

// // // // // // // // export function Home() {
// // // // // // // //   const [selectedId, setSelectedId] = React.useState();
// // // // // // // //   const [selectedCourse, setSelectedCourse] = React.useState();
// // // // // // // //   const [flag, setFlag] = React.useState(true);
// // // // // // // //   const [searchTerm, setSearchTerm] = React.useState('');
// // // // // // // //   const [loading, setLoading] = React.useState(false);
// // // // // // // //   const [lastUpdated, setLastUpdated] = React.useState(null);
// // // // // // // //   const courses = useSelector(state => state.courses.allCourses);
// // // // // // // //   const dispatch = useDispatch();
// // // // // // // //   const theme = useTheme();
// // // // // // // //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

// // // // // // // //   // Filter courses based on search term
// // // // // // // //   const filteredCourses = React.useMemo(() => {
// // // // // // // //     return courses.filter(course =>
// // // // // // // //       course.nameOfCourse.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // // // //     );
// // // // // // // //   }, [courses, searchTerm]);
// // // // // // // //   // ======================================
// // // // // // // //   // 
// // // // // // // //   async function setSelectedFunc(name) {
// // // // // // // //     try {
// // // // // // // //       setLoading(true);
// // // // // // // //       const tempCourse = await dispatch(getCourseByCourseNameThunk(name));
// // // // // // // //       setSelectedId(tempCourse.payload.idOfCourse);
// // // // // // // //       setSelectedCourse(tempCourse.payload);
// // // // // // // //       // הערה: הסרנו את הבדיקה של סטטוס הקורס כדי לאפשר צפייה בכל הקורסים
// // // // // // // //       navToShowCourse();
// // // // // // // //     }
// // // // // // // //     catch (error) {
// // // // // // // //       console.error("שגיאה בהצגת קורס:", error);
// // // // // // // //     }
// // // // // // // //     finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   // פונקציה זו מעבירה את המשתמש לתצוגת הקורס
// // // // // // // //   function navToShowCourse() {
// // // // // // // //     // בודקים רק אם הקורס קיים, ללא קשר לסטטוס שלו
// // // // // // // //     if (courses.find(c => c.idOfCourse === selectedId) != null) {
// // // // // // // //       setFlag(false);
// // // // // // // //     }
// // // // // // // //   }
// // // // // // // //   // else {
// // // // // // // //   //   alert("לא ניתן להציג את הקורס כרגע");
// // // // // // // //   // }
// // // // // // // //   // }
// // // // // // // //   // ======================================
// // // // // // // //   // async function setSelectedFunc(name) {
// // // // // // // //   //   try {
// // // // // // // //   //     setLoading(true);
// // // // // // // //   //     const tempCourse = await dispatch(getCourseByCourseNameThunk(name));
// // // // // // // //   //     setSelectedId(tempCourse.payload.idOfCourse);
// // // // // // // //   //     setSelectedCourse(tempCourse.payload);
// // // // // // // //   //   }
// // // // // // // //   //   catch (error) {
// // // // // // // //   //     console.error("שגיאה בהצגת קורס:", error);
// // // // // // // //   //   }
// // // // // // // //   //   finally {
// // // // // // // //   //     setLoading(false);
// // // // // // // //   //   }
// // // // // // // //   // }

// // // // // // // //   // function navToShowCourse() {
// // // // // // // //   //   if (courses.find(c => c.idOfCourse === selectedId) != null) {
// // // // // // // //   //     setFlag(false);
// // // // // // // //   //   }
// // // // // // // //   //   else {
// // // // // // // //   //     alert("לא ניתן להרשם כרגע לקורס");
// // // // // // // //   //   }
// // // // // // // //   // }

// // // // // // // //   React.useEffect(() => {
// // // // // // // //     dispatch(getCoursesThunk());
// // // // // // // //     if (selectedId != undefined)
// // // // // // // //       navToShowCourse();
// // // // // // // //   }, [selectedId, selectedCourse]);

// // // // // // // //   // React.useEffect(() => {
// // // // // // // //   //   getCourseSpeakerName(selectedCourse.idOfSpeaker);
// // // // // // // //   // }, [selectedCourse]);

// // // // // // // //   // const getCourseSpeakerName = async (id) => {
// // // // // // // //   //   const name = await dispatch(getSpeakerByIdThunk(id));
// // // // // // // //   //   console.log("name.action.payload.nameOfSpeaker" + "  " + name.action.payload.nameOfSpeaker)
// // // // // // // //   //   return name.action.payload.nameOfSpeaker;

// // // // // // // //   // };
// // // // // // // //   React.useEffect(() => {
// // // // // // // //     if (lastUpdated && selectedCourse) {
// // // // // // // //       // רענון הקורס הנבחר
// // // // // // // //       dispatch(getCourseByCourseNameThunk(selectedCourse.nameOfCourse))
// // // // // // // //         .then(response => {
// // // // // // // //           setSelectedCourse(response.payload);
// // // // // // // //         })
// // // // // // // //         .catch(error => {
// // // // // // // //           console.error("שגיאה בטעינת הקורס המעודכן:", error);
// // // // // // // //         });
// // // // // // // //     }
// // // // // // // //   }, [lastUpdated, dispatch]);



// // // // // // // //   // Mock data for demonstration - replace with actual data from your courses
// // // // // // // //   const getCourseCategory = (course) => {
// // // // // // // //     // This is a placeholder - implement your own category logic
// // // // // // // //     const categories = ['אקדמי', 'מקצועי', 'העשרה', 'אמנות', 'טכנולוגיה'];
// // // // // // // //     return categories[Math.floor(Math.random() * categories.length)];
// // // // // // // //   };

// // // // // // // //   const getCourseDuration = (course) => {
// // // // // // // //     //This is a placeholder - implement your own duration logic
// // // // // // // //     return `${Math.floor(Math.random() * 12) + 1} חודשים`;
// // // // // // // //   };

// // // // // // // //   const getCourseInstructor = (course) => {
// // // // // // // //     // This is a placeholder - implement your own instructor logic
// // // // // // // //     const instructors = ['ד"ר כהן', 'פרופ\' לוי', 'מר ישראלי', 'גב\' אברהם'];
// // // // // // // //     return instructors[Math.floor(Math.random() * instructors.length)];
// // // // // // // //   };

// // // // // // // //   const getStartDate = (course) => {
// // // // // // // //     // This is a placeholder - implement your own date logic
// // // // // // // //     const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני'];
// // // // // // // //     return `${months[Math.floor(Math.random() * months.length)]} 2023`;
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {loading && (
// // // // // // // //         <Box sx={{
// // // // // // // //           display: 'flex',
// // // // // // // //           justifyContent: 'center',
// // // // // // // //           alignItems: 'center',
// // // // // // // //           position: 'fixed',
// // // // // // // //           top: 0,
// // // // // // // //           left: 0,
// // // // // // // //           right: 0,
// // // // // // // //           bottom: 0,
// // // // // // // //           backgroundColor: 'rgba(255,255,255,0.7)',
// // // // // // // //           zIndex: 9999
// // // // // // // //         }}>
// // // // // // // //           <CircularProgress size={60} />
// // // // // // // //         </Box>
// // // // // // // //       )}

// // // // // // // //       {/* {flag == false && (
// // // // // // // //   <ShowCourse 
// // // // // // // //     selectedCourse={selectedCourse} 
// // // // // // // //     onBack={() => setFlag(true)}
// // // // // // // //     onCourseUpdate={() => {
// // // // // // // //       // רענון הקורס הנבחר
// // // // // // // //       dispatch(getCourseByCourseNameThunk(selectedCourse.nameOfCourse))
// // // // // // // //         .then(response => {
// // // // // // // //           setSelectedCourse(response.payload);
// // // // // // // //           // רענון כל הקורסים
// // // // // // // //           dispatch(getCoursesThunk());
// // // // // // // //         });
// // // // // // // //     }}
// // // // // // // //   />
// // // // // // // // )} */}
// // // // // // // //       {/* {flag == false && (
// // // // // // // //       <ShowCourse
// // // // // // // //         selectedCourse={selectedCourse}
// // // // // // // //         onBack={() => setFlag(true)}
// // // // // // // //         onCourseUpdate={() => setLastUpdated(new Date().getTime())}
// // // // // // // //       />
// // // // // // // //     )} */}
// // // // // // // //       {flag ? (
// // // // // // // //         <Container maxWidth="xl" sx={{ padding: 3, direction: 'rtl' }}>
// // // // // // // //           <Fade in={true} timeout={800}>
// // // // // // // //             <Box>
// // // // // // // //               <CoursesHeader variant="h3">
// // // // // // // //                 קורסים והשתלמויות
// // // // // // // //               </CoursesHeader>

// // // // // // // //               <SearchBox>
// // // // // // // //                 <TextField
// // // // // // // //                   fullWidth
// // // // // // // //                   placeholder="חיפוש קורסים..."
// // // // // // // //                   value={searchTerm}
// // // // // // // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // //                   variant="outlined"
// // // // // // // //                   InputProps={{
// // // // // // // //                     startAdornment: (
// // // // // // // //                       <InputAdornment position="start">
// // // // // // // //                         <SearchIcon />
// // // // // // // //                       </InputAdornment>
// // // // // // // //                     ),
// // // // // // // //                     sx: {
// // // // // // // //                       borderRadius: '30px',
// // // // // // // //                       '& fieldset': {
// // // // // // // //                         borderRadius: '30px',
// // // // // // // //                       },
// // // // // // // //                     }
// // // // // // // //                   }}
// // // // // // // //                 />
// // // // // // // //               </SearchBox>
// // // // // // // //               <br></br>
// // // // // // // //               {filteredCourses.length > 0 ? (
// // // // // // // //                 <Grid container spacing={3}>
// // // // // // // //                   {filteredCourses.map((course, index) => (
// // // // // // // //                     <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse || index}>
// // // // // // // //                       <Fade in={true} timeout={(index + 1) * 200}>
// // // // // // // //                         <CourseCard
// // // // // // // //                           onClick={() => setSelectedFunc(course.nameOfCourse)}
// // // // // // // //                         >
// // // // // // // //                           <CourseImage style={{
// // // // // // // //                             backgroundImage: `url(https://localhost:7092${course.image})`
// // // // // // // //                           }} />
// // // // // // // //                           <CourseOverlay>
// // // // // // // //                             <CategoryBadge label={getCourseCategory(course)} />
// // // // // // // //                             <CourseTitle variant="h5">
// // // // // // // //                               {course.nameOfCourse}
// // // // // // // //                             </CourseTitle>
// // // // // // // //                             <CourseInfo>
// // // // // // // //                               <Tooltip title="משך הקורס">
// // // // // // // //                                 <CourseChip
// // // // // // // //                                   icon={<AccessTimeIcon />}
// // // // // // // //                                   label={course.amountOfMeetingsInCourse+" "+"מפגשים"}
// // // // // // // //                                   size="small"
// // // // // // // //                                 />
// // // // // // // //                               </Tooltip>
// // // // // // // //                               <Tooltip title="מרצה">
// // // // // // // //                                 <CourseChip
// // // // // // // //                                   icon={<PersonIcon />}
// // // // // // // //                                   // label={() => getCourseSpeakerName(course.idOfSpeaker)}
// // // // // // // //                                   label={getCourseInstructor(course)}
// // // // // // // //                                   size="small"
// // // // // // // //                                 />
// // // // // // // //                               </Tooltip>
// // // // // // // //                               <Tooltip title="תאריך פתיחה">
// // // // // // // //                                 <CourseChip
// // // // // // // //                                   icon={<CalendarTodayIcon />}
// // // // // // // //                                   label={course.startDateOfCourse}
// // // // // // // //                                   size="small"
// // // // // // // //                                 />
// // // // // // // //                               </Tooltip>
// // // // // // // //                             </CourseInfo>
// // // // // // // //                           </CourseOverlay>
// // // // // // // //                         </CourseCard>
// // // // // // // //                       </Fade>
// // // // // // // //                     </Grid>
// // // // // // // //                   ))}
// // // // // // // //                 </Grid>
// // // // // // // //               ) : (
// // // // // // // //                 <NoCoursesMessage>
// // // // // // // //                   <Typography variant="h6">לא נמצאו קורסים התואמים לחיפוש</Typography>
// // // // // // // //                   <Typography variant="body1" sx={{ mt: 1 }}>נסה לחפש מונחים אחרים או לנקות את החיפוש</Typography>
// // // // // // // //                 </NoCoursesMessage>
// // // // // // // //               )}
// // // // // // // //             </Box>
// // // // // // // //           </Fade>
// // // // // // // //         </Container>
// // // // // // // //       ) : (
// // // // // // // //         <Fade in={true} timeout={500}>
// // // // // // // //           <Box>
// // // // // // // //             <ShowCourse selectedCourse={selectedCourse} onBack={() => setFlag(true)} />
// // // // // // // //           </Box>
// // // // // // // //         </Fade>
// // // // // // // //       )}
// // // // // // // //       {/* {flag == false && (
// // // // // // // //       <ShowCourse
// // // // // // // //         selectedCourse={selectedCourse}
// // // // // // // //         onBack={() => setFlag(true)}
// // // // // // // //         onCourseUpdate={() => setLastUpdated(new Date().getTime())}
// // // // // // // //       />
// // // // // // // //     )} */}

// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // // // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// // // // // // // // import { getCourseByCourseNameThunk } from '../../redux/Thunks/getCourseByCourseNameThunk';
// // // // // // // import { ShowCourse } from '../ShowCourse/ShowCourse';
// // // // // // // import { Routing } from '../Routing/Routing';
// // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // import {
// // // // // // //   Container,
// // // // // // //   Grid,
// // // // // // //   Card,
// // // // // // //   CardContent,
// // // // // // //   CardActions,
// // // // // // //   Typography,
// // // // // // //   Button,
// // // // // // //   Box,
// // // // // // //   Divider,
// // // // // // //   Chip,
// // // // // // //   CircularProgress,
// // // // // // //   TextField,
// // // // // // //   InputAdornment,
// // // // // // //   MenuItem,
// // // // // // //   Select,
// // // // // // //   FormControl,
// // // // // // //   CardMedia,
// // // // // // //   InputLabel,
// // // // // // //   Fade
// // // // // // // } from '@mui/material';
// // // // // // // import {
// // // // // // //   Event as EventIcon,
// // // // // // //   AccessTime as AccessTimeIcon,
// // // // // // //   LocationOn as LocationOnIcon,
// // // // // // //   Search as SearchIcon,
// // // // // // //   FilterList as FilterListIcon,
// // // // // // //   Sort as SortIcon,
// // // // // // //   PersonPinCircle,
// // // // // // //   CalendarViewMonth
// // // // // // // } from '@mui/icons-material';
// // // // // // // import { styled } from '@mui/material/styles';
// // // // // // // import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
// // // // // // // import { Tooltip } from 'bootstrap';
// // // // // // // const CourseCard = styled(Card)(({ theme }) => ({
// // // // // // //   borderRadius: '16px',
// // // // // // //   overflow: 'hidden',
// // // // // // //   position: 'relative',
// // // // // // //   height: '320px',
// // // // // // //   cursor: 'pointer',
// // // // // // //   boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
// // // // // // //   transition: 'all 0.3s ease',
// // // // // // //   '&:hover': {
// // // // // // //     transform: 'translateY(-10px)',
// // // // // // //     boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
// // // // // // //   }
// // // // // // // }));

// // // // // // // const CourseImage = styled(CardMedia)({
// // // // // // //   position: 'absolute',
// // // // // // //   top: 0,
// // // // // // //   left: 0,
// // // // // // //   right: 0,
// // // // // // //   bottom: 0,
// // // // // // //   backgroundSize: 'cover',
// // // // // // //   backgroundPosition: 'center',
// // // // // // //   zIndex: 1,
// // // // // // //   height: '50%'
// // // // // // // });

// // // // // // // const CourseOverlay = styled(Box)(({ theme }) => ({
// // // // // // //   position: 'absolute',
// // // // // // //   top: 0,
// // // // // // //   left: 0,
// // // // // // //   right: 0,
// // // // // // //   bottom: 0,
// // // // // // //   background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
// // // // // // //   zIndex: 2,
// // // // // // //   display: 'flex',
// // // // // // //   flexDirection: 'column',
// // // // // // //   justifyContent: 'flex-end',
// // // // // // //   padding: theme.spacing(3),
// // // // // // //   transition: 'all 0.3s ease',
// // // // // // // }));
// // // // // // // const CourseTitle = styled(Typography)(({ theme }) => ({
// // // // // // //   color: theme.palette.common.white,
// // // // // // //   fontWeight: 700,
// // // // // // //   marginBottom: theme.spacing(1),
// // // // // // //   textShadow: '0 2px 4px rgba(0,0,0,0.5)',
// // // // // // // }));

// // // // // // // const CourseInfo = styled(Box)(({ theme }) => ({
// // // // // // //   display: 'flex',
// // // // // // //   gap: theme.spacing(2),
// // // // // // //   marginTop: theme.spacing(1),
// // // // // // //   flexWrap: 'wrap',
// // // // // // // }));

// // // // // // // const CourseChip = styled(Chip)(({ theme }) => ({
// // // // // // //   background: 'rgba(255,255,255,0.2)',
// // // // // // //   backdropFilter: 'blur(5px)',
// // // // // // //   color: theme.palette.common.white,
// // // // // // //   fontWeight: 500,
// // // // // // //   '& .MuiChip-icon': {
// // // // // // //     color: theme.palette.common.white,
// // // // // // //   }
// // // // // // // }));
// // // // // // // const getCourseInstructor = (course) => {
// // // // // // //   // זוהי פונקציית דוגמה - יש להחליף בלוגיקה אמיתית לפי הצורך
// // // // // // //   if (course.speakerName) return course.speakerName;
// // // // // // //   const instructors = ['ד"ר כהן', 'פרופ\' לוי', 'מר ישראלי', 'גב\' אברהם'];
// // // // // // //   return instructors[Math.floor(Math.random() * instructors.length)];
// // // // // // // };
// // // // // // // const CategoryBadge = styled(Chip)(({ theme }) => ({
// // // // // // //   position: 'absolute',
// // // // // // //   top: theme.spacing(2),
// // // // // // //   right: theme.spacing(2),
// // // // // // //   zIndex: 3,
// // // // // // //   background: theme.palette.primary.main,
// // // // // // //   color: theme.palette.common.white,
// // // // // // //   fontWeight: 600,
// // // // // // // }));

// // // // // // // const CoursesHeader = styled(Typography)(({ theme }) => ({
// // // // // // //   textAlign: 'center',
// // // // // // //   margin: theme.spacing(5, 0),
// // // // // // //   fontWeight: 800,
// // // // // // //   position: 'relative',
// // // // // // //   '&:after': {
// // // // // // //     content: '""',
// // // // // // //     position: 'absolute',
// // // // // // //     bottom: '-10px',
// // // // // // //     left: '50%',
// // // // // // //     transform: 'translateX(-50%)',
// // // // // // //     width: '80px',
// // // // // // //     height: '4px',
// // // // // // //     background: theme.palette.primary.main,
// // // // // // //     borderRadius: '2px',
// // // // // // //   }
// // // // // // // }));

// // // // // // // export function Home() {
// // // // // // //   const [selectedId, setSelectedId] = React.useState();
// // // // // // //   const [selectedCourse, setSelectedCourse] = React.useState();
// // // // // // //   const [flag, setFlag] = React.useState(true);
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // // //   const [sortBy, setSortBy] = useState('nameOfCourse');
// // // // // // //   const [sortOrder, setSortOrder] = useState('asc');
// // // // // // //   const [filterDay, setFilterDay] = useState('');

// // // // // // //   const courses = useSelector(state => state.courses.allCourses);
// // // // // // //   const dispatch = useDispatch();
// // // // // // //   const nav = useNavigate();

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchCourses = async () => {
// // // // // // //       setLoading(true);
// // // // // // //       try {
// // // // // // //         await dispatch(getCoursesThunk());
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching courses:", error);
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchCourses();
// // // // // // //   }, [dispatch]);

// // // // // // //   async function setSelectedFunc(id) {
// // // // // // //     try {
// // // // // // //       setLoading(true);
// // // // // // //       const tempCourse = await dispatch(getCourseByCourseIdThunk(id));
// // // // // // //       setSelectedId(tempCourse.payload.idOfCourse);
// // // // // // //       setSelectedCourse(tempCourse.payload);
// // // // // // //       setFlag(false);
// // // // // // //     }
// // // // // // //     catch (error) {
// // // // // // //       console.error("Error fetching course details:", error);
// // // // // // //     }
// // // // // // //     finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const handleBack = () => {
// // // // // // //     setFlag(true);
// // // // // // //   };

// // // // // // //   const handleCourseUpdate = (updatedCourse) => {
// // // // // // //     setSelectedCourse(updatedCourse);
// // // // // // //   };
// // // // // // //   const getCourseCategory = (course) => {
// // // // // // //     // זוהי פונקציית דוגמה - יש להחליף בלוגיקה אמיתית לפי הצורך
// // // // // // //     const categories = ['אקדמי', 'מקצועי', 'העשרה', 'אמנות', 'טכנולוגיה'];
// // // // // // //     return categories[Math.floor(Math.random() * categories.length)];
// // // // // // //   };
// // // // // // //   // Filter and sort courses
// // // // // // //   const filteredAndSortedCourses = React.useMemo(() => {
// // // // // // //     if (!courses) return [];

// // // // // // //     return [...courses]
// // // // // // //       .filter(course => {
// // // // // // //         const matchesSearch = course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // //           course.descriptionOfCourse?.toLowerCase().includes(searchTerm.toLowerCase());

// // // // // // //         const matchesDay = !filterDay || course.dayOfCourse === filterDay;

// // // // // // //         return matchesSearch && matchesDay;
// // // // // // //       })
// // // // // // //       .sort((a, b) => {
// // // // // // //         let comparison = 0;

// // // // // // //         if (sortBy === 'nameOfCourse') {
// // // // // // //           comparison = a.nameOfCourse?.localeCompare(b.nameOfCourse);
// // // // // // //         } else if (sortBy === 'startDateOfCourse') {
// // // // // // //           comparison = new Date(a.startDateOfCourse) - new Date(b.startDateOfCourse);
// // // // // // //         } else if (sortBy === 'totalSumOfCourse') {
// // // // // // //           comparison = a.totalSumOfCourse - b.totalSumOfCourse;
// // // // // // //         }

// // // // // // //         return sortOrder === 'asc' ? comparison : -comparison;
// // // // // // //       });
// // // // // // //   }, [courses, searchTerm, filterDay, sortBy, sortOrder]);

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {loading && (
// // // // // // //         <Box sx={{
// // // // // // //           display: 'flex',
// // // // // // //           justifyContent: 'center',
// // // // // // //           alignItems: 'center',
// // // // // // //           position: 'fixed',
// // // // // // //           top: 0,
// // // // // // //           left: 0,
// // // // // // //           right: 0,
// // // // // // //           bottom: 0,
// // // // // // //           backgroundColor: 'rgba(255,255,255,0.7)',
// // // // // // //           zIndex: 9999
// // // // // // //         }}>
// // // // // // //           <CircularProgress size={60} />
// // // // // // //         </Box>
// // // // // // //       )}

// // // // // // //       {flag ? (
// // // // // // //         <Container maxWidth="xl" sx={{ padding: 3, direction: 'rtl' }}>
// // // // // // //           <Box sx={{ mb: 4 }}>
// // // // // // //             <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
// // // // // // //               הקורסים שלנו
// // // // // // //             </Typography>

// // // // // // //             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
// // // // // // //               <TextField
// // // // // // //                 placeholder="חיפוש קורסים..."
// // // // // // //                 value={searchTerm}
// // // // // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // //                 sx={{ flexGrow: 1, minWidth: '200px' }}
// // // // // // //                 InputProps={{
// // // // // // //                   startAdornment: (
// // // // // // //                     <InputAdornment position="start">
// // // // // // //                       <SearchIcon />
// // // // // // //                     </InputAdornment>
// // // // // // //                   ),
// // // // // // //                 }}
// // // // // // //               />

// // // // // // //               <FormControl sx={{ minWidth: '150px' }}>
// // // // // // //                 <InputLabel>סינון לפי יום</InputLabel>
// // // // // // //                 <Select
// // // // // // //                   value={filterDay}
// // // // // // //                   onChange={(e) => setFilterDay(e.target.value)}
// // // // // // //                   label="סינון לפי יום"
// // // // // // //                   startAdornment={
// // // // // // //                     <InputAdornment position="start">
// // // // // // //                       <FilterListIcon />
// // // // // // //                     </InputAdornment>
// // // // // // //                   }
// // // // // // //                 >
// // // // // // //                   <MenuItem value="">הכל</MenuItem>
// // // // // // //                   <MenuItem value="ראשון">ראשון</MenuItem>
// // // // // // //                   <MenuItem value="שני">שני</MenuItem>
// // // // // // //                   <MenuItem value="שלישי">שלישי</MenuItem>
// // // // // // //                   <MenuItem value="רביעי">רביעי</MenuItem>
// // // // // // //                   <MenuItem value="חמישי">חמישי</MenuItem>
// // // // // // //                   <MenuItem value="שישי">שישי</MenuItem>
// // // // // // //                 </Select>
// // // // // // //               </FormControl>

// // // // // // //               <FormControl sx={{ minWidth: '150px' }}>
// // // // // // //                 <InputLabel>מיון לפי</InputLabel>
// // // // // // //                 <Select
// // // // // // //                   value={sortBy}
// // // // // // //                   onChange={(e) => setSortBy(e.target.value)}
// // // // // // //                   label="מיון לפי"
// // // // // // //                   startAdornment={
// // // // // // //                     <InputAdornment position="start">
// // // // // // //                       <SortIcon />
// // // // // // //                     </InputAdornment>
// // // // // // //                   }
// // // // // // //                 >
// // // // // // //                   <MenuItem value="nameOfCourse">שם</MenuItem>
// // // // // // //                   <MenuItem value="startDateOfCourse">תאריך התחלה</MenuItem>
// // // // // // //                   <MenuItem value="totalSumOfCourse">מחיר</MenuItem>
// // // // // // //                 </Select>
// // // // // // //               </FormControl>

// // // // // // //               <FormControl sx={{ minWidth: '150px' }}>
// // // // // // //                 <InputLabel>סדר מיון</InputLabel>
// // // // // // //                 <Select
// // // // // // //                   value={sortOrder}
// // // // // // //                   onChange={(e) => setSortOrder(e.target.value)}
// // // // // // //                   label="סדר מיון"
// // // // // // //                 >
// // // // // // //                   <MenuItem value="asc">עולה</MenuItem>
// // // // // // //                   <MenuItem value="desc">יורד</MenuItem>
// // // // // // //                 </Select>
// // // // // // //               </FormControl>
// // // // // // //             </Box>
// // // // // // //           </Box>

// // // // // // //           <Grid container spacing={3}>
// // // // // // //             {filteredAndSortedCourses.length > 0 ? (
// // // // // // //               filteredAndSortedCourses.map ((course,index) => (
// // // // // // //                 <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse}>
// // // // // // //                   <Card
// // // // // // //                     sx={{
// // // // // // //                       height: '100%',
// // // // // // //                       display: 'flex',
// // // // // // //                       flexDirection: 'column',
// // // // // // //                       transition: 'transform 0.2s, box-shadow 0.2s',
// // // // // // //                       '&:hover': {
// // // // // // //                         transform: 'translateY(-5px)',
// // // // // // //                         boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
// // // // // // //                       }
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                      <CourseImage 
// // // // // // //                        image={`https://localhost:7092${course.image}`}
// // // // // // //                        title={course.nameOfCourse}
// // // // // // //                      />
// // // // // // //                     <CardContent sx={{ flexGrow: 1 }}>
// // // // // // //                       <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
// // // // // // //                         {course.nameOfCourse}
// // // // // // //                       </Typography>
                    
// // // // // // //                       <Divider sx={{ my: 1.5 }} />

// // // // // // //                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
// // // // // // //                         <EventIcon sx={{ color: 'primary.main', mr: 1 }} />
// // // // // // //                         <Typography variant="body2">
// // // // // // //                           {course.startDateOfCourse || "בקרוב"}
// // // // // // //                         </Typography>
// // // // // // //                       </Box>

// // // // // // //                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
// // // // // // //                         <AccessTimeIcon sx={{ color: 'primary.main', mr: 1 }} />
// // // // // // //                         <Typography variant="body2">
// // // // // // //                           {course.dayOfCourse || "לא צוין"}, {course.hourOfCourse || ""}
// // // // // // //                         </Typography>
// // // // // // //                       </Box>

// // // // // // //                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
// // // // // // //                         <LocationOnIcon sx={{ color: 'primary.main', mr: 1 }} />
// // // // // // //                         <Typography variant="body2" noWrap>
// // // // // // //                           {course.placeOfCourse || "לא צוין"}
// // // // // // //                         </Typography>
// // // // // // //                       </Box>

// // // // // // //                       <Typography
// // // // // // //                         variant="body2"
// // // // // // //                         color="text.secondary"
// // // // // // //                         sx={{
// // // // // // //                           mt: 2,
// // // // // // //                           overflow: 'hidden',
// // // // // // //                           textOverflow: 'ellipsis',
// // // // // // //                           display: '-webkit-box',
// // // // // // //                           WebkitLineClamp: 3,
// // // // // // //                           WebkitBoxOrient: 'vertical',
// // // // // // //                           height: '4.5em'
// // // // // // //                         }}
// // // // // // //                       >
// // // // // // //                         {course.descriptionOfCourse || "אין תיאור זמין לקורס זה."}
// // // // // // //                       </Typography>
// // // // // // //                     </CardContent>

// // // // // // //                     <Box sx={{ p: 2, pt: 0, mt: 'auto' }}>
// // // // // // //                       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
// // // // // // //                         <Chip
// // // // // // //                           label={`${course.currentAmountOfStudents || 0}/${course.amountOfStudentsInCourse || 0} תלמידות`}
// // // // // // //                           size="small"
// // // // // // //                           color={
// // // // // // //                             course.currentAmountOfStudents >= course.amountOfStudentsInCourse
// // // // // // //                               ? "error"
// // // // // // //                               : "primary"
// // // // // // //                           }
// // // // // // //                         />
// // // // // // //                         <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold' }}>
// // // // // // //                           ₪{course.totalSumOfCourse || 0}
// // // // // // //                         </Typography>
// // // // // // //                       </Box>

// // // // // // //                       <Button
// // // // // // //                         variant="contained"
// // // // // // //                         fullWidth
// // // // // // //                         onClick={() => setSelectedFunc(course.idOfCourse)}
// // // // // // //                       >
// // // // // // //                         פרטים נוספים
// // // // // // //                       </Button>
// // // // // // //                     </Box>
// // // // // // //                   </Card>
// // // // // // //                 </Grid>
// // // // // // //  ////////////////////////////////////////////////////////////////////////////////
// // // // // // //               //   <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse}>
// // // // // // //               //   {/* || index}> */}
// // // // // // //               //   <Fade in={true} timeout={(8 + 1) * 200}> 
// // // // // // //               //   {/* <Fade in={true} timeout={(index + 1) * 200}> */} */}
// // // // // // //               //     <CourseCard
// // // // // // //               //       onClick={() => setSelectedFunc(course.idOfCourse)}
// // // // // // //               //       className="course-card-item"
// // // // // // //               //     >
// // // // // // //               //       <CourseImage 
// // // // // // //               //         image={`https://localhost:7092${course.image}`}
// // // // // // //               //         title={course.nameOfCourse}
// // // // // // //               //       />
// // // // // // //               //       <CourseOverlay>
// // // // // // //               //         <CategoryBadge label={getCourseCategory(course)} />
// // // // // // //               //         <CourseTitle variant="h5">
// // // // // // //               //           {course.nameOfCourse}
// // // // // // //               //         </CourseTitle>
// // // // // // //               //         <CourseInfo>
// // // // // // //               //           <Tooltip title="משך הקורס" arrow>
// // // // // // //               //             <CourseChip
// // // // // // //               //               icon={<AccessTimeIcon />}
// // // // // // //               //               label={course.amountOfMeetingsInCourse ? `${course.amountOfMeetingsInCourse} מפגשים` : "לא צוין"}
// // // // // // //               //               size="small"
// // // // // // //               //             />
// // // // // // //               //           </Tooltip>
// // // // // // //               //           <Tooltip title="מרצה" arrow>
// // // // // // //               //             <CourseChip 
// // // // // // //               //              // icon={<PersonPinCircleIcon />}  
// // // // // // //               //               label={getCourseInstructor(course)}
// // // // // // //               //               size="small"
// // // // // // //               //             />
// // // // // // //               //           </Tooltip>
// // // // // // //               //           <Tooltip title="תאריך פתיחה" arrow>
// // // // // // //               //             <CourseChip
// // // // // // //               //               // icon={<CalendarViewMonthIcon />}
// // // // // // //               //               label={course.startDateOfCourse || "לא צוין"}
// // // // // // //               //               size="small"
// // // // // // //               //             />
// // // // // // //               //           </Tooltip>
// // // // // // //               //         </CourseInfo>
// // // // // // //               //         {course.currentAmountOfStudents !== undefined && course.amountOfStudentsInCourse !== undefined && (
// // // // // // //               //           <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// // // // // // //               //             <Chip
// // // // // // //               //               // icon={<EventAvailableIcon />}
// // // // // // //               //               label={`${course.amountOfStudentsInCourse - course.currentAmountOfStudents} מקומות פנויים`}
// // // // // // //               //               size="small"
// // // // // // //               //               color={
// // // // // // //               //                 (course.amountOfStudentsInCourse - course.currentAmountOfStudents) > 5
// // // // // // //               //                   ? "success"
// // // // // // //               //                   : (course.amountOfStudentsInCourse - course.currentAmountOfStudents) > 0
// // // // // // //               //                     ? "warning"
// // // // // // //               //                     : "error"
// // // // // // //               //               }
// // // // // // //               //               sx={{
// // // // // // //               //                 fontWeight: 600,
// // // // // // //               //                 background: 'rgba(255,255,255,0.9)',
// // // // // // //               //                 color: theme => 
// // // // // // //               //                   (course.amountOfStudentsInCourse - course.currentAmountOfStudents) > 5
// // // // // // //               //                     ? theme.palette.success.dark
// // // // // // //               //                     : (course.amountOfStudentsInCourse - course.currentAmountOfStudents) > 0
// // // // // // //               //                       ? theme.palette.warning.dark
// // // // // // //               //                       : theme.palette.error.dark,
// // // // // // //               //               }}
// // // // // // //               //             />
// // // // // // //               //           </Box>
// // // // // // //               //         )}
// // // // // // //               //       </CourseOverlay>
// // // // // // //               //     </CourseCard>
// // // // // // //               //   </Fade>
// // // // // // //               // </Grid>



// // // // // // // //////////////////////////////////////////////////////////
// // // // // // //               ))
// // // // // // //             ) : (
// // // // // // //               <Box sx={{ width: '100%', textAlign: 'center', py: 5 }}>
// // // // // // //                 <Typography variant="h6">
// // // // // // //                   {courses?.length > 0
// // // // // // //                     ? "לא נמצאו קורסים התואמים לחיפוש"
// // // // // // //                     : "אין קורסים זמינים כרגע"}
// // // // // // //                 </Typography>
// // // // // // //               </Box>
// // // // // // //             )}
// // // // // // //           </Grid>
// // // // // // //         </Container>
// // // // // // //       ) : (
// // // // // // //         <Fade in={true} timeout={500}>
// // // // // // //           <Box>
// // // // // // //             <ShowCourse
// // // // // // //               selectedCourse={selectedCourse}
// // // // // // //               onBack={handleBack}
// // // // // // //               onCourseUpdate={handleCourseUpdate}
// // // // // // //             />
// // // // // // //           </Box>
// // // // // // //         </Fade>
// // // // // // //       )}
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// // // // // // import { ShowCourse } from '../ShowCourse/ShowCourse';
// // // // // // import { Routing } from '../Routing/Routing';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import {
// // // // // //   Container,
// // // // // //   Grid,
// // // // // //   Card,
// // // // // //   CardContent,
// // // // // //   CardActions,
// // // // // //   Typography,
// // // // // //   Button,
// // // // // //   Box,
// // // // // //   Divider,
// // // // // //   Chip,
// // // // // //   CircularProgress,
// // // // // //   TextField,
// // // // // //   InputAdornment,
// // // // // //   MenuItem,
// // // // // //   Select,
// // // // // //   FormControl,
// // // // // //   CardMedia,
// // // // // //   InputLabel,
// // // // // //   Fade
// // // // // // } from '@mui/material';
// // // // // // import {
// // // // // //   Event as EventIcon,
// // // // // //   AccessTime as AccessTimeIcon,
// // // // // //   LocationOn as LocationOnIcon,
// // // // // //   Search as SearchIcon,
// // // // // //   FilterList as FilterListIcon,
// // // // // //   Sort as SortIcon,
// // // // // //   PersonPinCircle,
// // // // // //   CalendarViewMonth
// // // // // // } from '@mui/icons-material';
// // // // // // import { styled } from '@mui/material/styles';
// // // // // // import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';

// // // // // // // עדכון ה-CourseCard כדי שיכלול תמונת רקע
// // // // // // const CourseCard = styled(Card)(({ theme, backgroundImage }) => ({
// // // // // //   borderRadius: '16px',
// // // // // //   overflow: 'hidden',
// // // // // //   position: 'relative',
// // // // // //   height: '320px',
// // // // // //   cursor: 'pointer',
// // // // // //   boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
// // // // // //   transition: 'all 0.3s ease',
// // // // // //   backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
// // // // // //   backgroundSize: 'cover',
// // // // // //   backgroundPosition: 'center',
// // // // // //   backgroundRepeat: 'no-repeat',
// // // // // //   '&:hover': {
// // // // // //     transform: 'translateY(-10px)',
// // // // // //     boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
// // // // // //   },
// // // // // //   // הוספת overlay כדי שהטקסט יהיה קריא
// // // // // //   '&::before': {
// // // // // //     content: '""',
// // // // // //     position: 'absolute',
// // // // // //     top: 0,
// // // // // //     left: 0,
// // // // // //     right: 0,
// // // // // //     bottom: 0,
// // // // // //     background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
// // // // // //     zIndex: 1,
// // // // // //   }
// // // // // // }));

// // // // // // // עדכון ה-CardContent כדי שיהיה מעל התמונה
// // // // // // const StyledCardContent = styled(CardContent)(({ theme }) => ({
// // // // // //   position: 'relative',
// // // // // //   zIndex: 2,
// // // // // //   color: 'white',
// // // // // //   height: '100%',
// // // // // //   display: 'flex',
// // // // // //   flexDirection: 'column',
// // // // // //   justifyContent: 'space-between',
// // // // // //   background: 'transparent',
// // // // // //   '& .MuiTypography-root': {
// // // // // //     color: 'white',
// // // // // //     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
// // // // // //   }
// // // // // // }));

// // // // // // const StyledBox = styled(Box)(({ theme }) => ({
// // // // // //   position: 'relative',
// // // // // //   zIndex: 2,
// // // // // //   '& .MuiTypography-root': {
// // // // // //     color: 'white',
// // // // // //     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
// // // // // //   },
// // // // // //   '& .MuiChip-root': {
// // // // // //     backgroundColor: 'rgba(255,255,255,0.9)',
// // // // // //     color: theme.palette.text.primary,
// // // // // //     fontWeight: 'bold',
// // // // // //   }
// // // // // // }));

// // // // // // const getCourseInstructor = (course) => {
// // // // // //   if (course.speakerName) return course.speakerName;
// // // // // //   const instructors = ['ד"ר כהן', 'פרופ\' לוי', 'מר ישראלי', 'גב\' אברהם'];
// // // // // //   return instructors[Math.floor(Math.random() * instructors.length)];
// // // // // // };

// // // // // // const CategoryBadge = styled(Chip)(({ theme }) => ({
// // // // // //   position: 'absolute',
// // // // // //   top: theme.spacing(2),
// // // // // //   right: theme.spacing(2),
// // // // // //   zIndex: 3,
// // // // // //   background: theme.palette.primary.main,
// // // // // //   color: theme.palette.common.white,
// // // // // //   fontWeight: 600,
// // // // // // }));

// // // // // // const CoursesHeader = styled(Typography)(({ theme }) => ({
// // // // // //   textAlign: 'center',
// // // // // //   margin: theme.spacing(5, 0),
// // // // // //   fontWeight: 800,
// // // // // //   position: 'relative',
// // // // // //   '&:after': {
// // // // // //     content: '""',
// // // // // //     position: 'absolute',
// // // // // //     bottom: '-10px',
// // // // // //     left: '50%',
// // // // // //     transform: 'translateX(-50%)',
// // // // // //     width: '80px',
// // // // // //     height: '4px',
// // // // // //     background: theme.palette.primary.main,
// // // // // //     borderRadius: '2px',
// // // // // //   }
// // // // // // }));

// // // // // // export function Home() {
// // // // // //   const [selectedId, setSelectedId] = React.useState();
// // // // // //   const [selectedCourse, setSelectedCourse] = React.useState();
// // // // // //   const [flag, setFlag] = React.useState(true);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // //   const [sortBy, setSortBy] = useState('nameOfCourse');
// // // // // //   const [sortOrder, setSortOrder] = useState('asc');
// // // // // //   const [filterDay, setFilterDay] = useState('');

// // // // // //   const courses = useSelector(state => state.courses.allCourses);
// // // // // //   const dispatch = useDispatch();
// // // // // //   const nav = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     const fetchCourses = async () => {
// // // // // //       setLoading(true);
// // // // // //       try {
// // // // // //         await dispatch(getCoursesThunk());
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching courses:", error);
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchCourses();
// // // // // //   }, [dispatch]);

// // // // // //   async function setSelectedFunc(id) {
// // // // // //     try {
// // // // // //       setLoading(true);
// // // // // //       const tempCourse = await dispatch(getCourseByCourseIdThunk(id));
// // // // // //       setSelectedId(tempCourse.payload.idOfCourse);
// // // // // //       setSelectedCourse(tempCourse.payload);
// // // // // //       setFlag(false);
// // // // // //     }
// // // // // //     catch (error) {
// // // // // //       console.error("Error fetching course details:", error);
// // // // // //     }
// // // // // //     finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   }

// // // // // //   const handleBack = () => {
// // // // // //     setFlag(true);
// // // // // //   };

// // // // // //   const handleCourseUpdate = (updatedCourse) => {
// // // // // //     setSelectedCourse(updatedCourse);
// // // // // //   };

// // // // // //   const getCourseCategory = (course) => {
// // // // // //     const categories = ['אקדמי', 'מקצועי', 'העשרה', 'אמנות', 'טכנולוגיה'];
// // // // // //     return categories[Math.floor(Math.random() * categories.length)];
// // // // // //   };

// // // // // //   // Filter and sort courses
// // // // // //   const filteredAndSortedCourses = React.useMemo(() => {
// // // // // //     if (!courses) return [];

// // // // // //     return [...courses]
// // // // // //       .filter(course => {
// // // // // //         const matchesSearch = course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //           course.descriptionOfCourse?.toLowerCase().includes(searchTerm.toLowerCase());

// // // // // //         const matchesDay = !filterDay || course.dayOfCourse === filterDay;

// // // // // //         return matchesSearch && matchesDay;
// // // // // //       })
// // // // // //       .sort((a, b) => {
// // // // // //         let comparison = 0;

// // // // // //         if (sortBy === 'nameOfCourse') {
// // // // // //           comparison = a.nameOfCourse?.localeCompare(b.nameOfCourse);
// // // // // //         } else if (sortBy === 'startDateOfCourse') {
// // // // // //           comparison = new Date(a.startDateOfCourse) - new Date(b.startDateOfCourse);
// // // // // //         } else if (sortBy === 'totalSumOfCourse') {
// // // // // //           comparison = a.totalSumOfCourse - b.totalSumOfCourse;
// // // // // //         }

// // // // // //         return sortOrder === 'asc' ? comparison : -comparison;
// // // // // //       });
// // // // // //   }, [courses, searchTerm, filterDay, sortBy, sortOrder]);

// // // // // //   return (
// // // // // //     <>
// // // // // //       {loading && (
// // // // // //         <Box sx={{
// // // // // //           display: 'flex',
// // // // // //           justifyContent: 'center',
// // // // // //           alignItems: 'center',
// // // // // //           position: 'fixed',
// // // // // //           top: 0,
// // // // // //           left: 0,
// // // // // //           right: 0,
// // // // // //           bottom: 0,
// // // // // //           backgroundColor: 'rgba(255,255,255,0.7)',
// // // // // //           zIndex: 9999
// // // // // //         }}>
// // // // // //           <CircularProgress size={60} />
// // // // // //         </Box>
// // // // // //       )}

// // // // // //       {flag ? (
// // // // // //         <Container maxWidth="xl" sx={{ padding: 3, direction: 'rtl' }}>
// // // // // //           <Box sx={{ mb: 4 }}>
// // // // // //             <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
// // // // // //               הקורסים שלנו
// // // // // //             </Typography>

// // // // // //             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
// // // // // //               <TextField
// // // // // //                 placeholder="חיפוש קורסים..."
// // // // // //                 value={searchTerm}
// // // // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // // //                 sx={{ flexGrow: 1, minWidth: '200px' }}
// // // // // //                 InputProps={{
// // // // // //                   startAdornment: (
// // // // // //                     <InputAdornment position="start">
// // // // // //                       <SearchIcon />
// // // // // //                     </InputAdornment>
// // // // // //                   ),
// // // // // //                 }}
// // // // // //               />

// // // // // //               <FormControl sx={{ minWidth: '150px' }}>
// // // // // //                 <InputLabel>סינון לפי יום</InputLabel>
// // // // // //                 <Select
// // // // // //                   value={filterDay}
// // // // // //                   onChange={(e) => setFilterDay(e.target.value)}
// // // // // //                   label="סינון לפי יום"
// // // // // //                   startAdornment={
// // // // // //                     <InputAdornment position="start">
// // // // // //                       <FilterListIcon />
// // // // // //                     </InputAdornment>
// // // // // //                   }
// // // // // //                 >
// // // // // //                   <MenuItem value="">הכל</MenuItem>
// // // // // //                   <MenuItem value="ראשון">ראשון</MenuItem>
// // // // // //                   <MenuItem value="שני">שני</MenuItem>
// // // // // //                   <MenuItem value="שלישי">שלישי</MenuItem>
// // // // // //                   <MenuItem value="רביעי">רביעי</MenuItem>
// // // // // //                   <MenuItem value="חמישי">חמישי</MenuItem>
// // // // // //                   <MenuItem value="שישי">שישי</MenuItem>
// // // // // //                 </Select>
// // // // // //               </FormControl>

// // // // // //               <FormControl sx={{ minWidth: '150px' }}>
// // // // // //                 <InputLabel>מיון לפי</InputLabel>
// // // // // //                 <Select
// // // // // //                   value={sortBy}
// // // // // //                   onChange={(e) => setSortBy(e.target.value)}
// // // // // //                   label="מיון לפי"
// // // // // //                   startAdornment={
// // // // // //                     <InputAdornment position="start">
// // // // // //                       <SortIcon />
// // // // // //                     </InputAdornment>
// // // // // //                   }
// // // // // //                 >
// // // // // //                   <MenuItem value="nameOfCourse">שם</MenuItem>
// // // // // //                   <MenuItem value="startDateOfCourse">תאריך התחלה</MenuItem>
// // // // // //                   <MenuItem value="totalSumOfCourse">מחיר</MenuItem>
// // // // // //                 </Select>
// // // // // //               </FormControl>

// // // // // //               <FormControl sx={{ minWidth: '150px' }}>
// // // // // //                 <InputLabel>סדר מיון</InputLabel>
// // // // // //                 <Select
// // // // // //                   value={sortOrder}
// // // // // //                   onChange={(e) => setSortOrder(e.target.value)}
// // // // // //                   label="סדר מיון"
// // // // // //                 >
// // // // // //                   <MenuItem value="asc">עולה</MenuItem>
// // // // // //                   <MenuItem value="desc">יורד</MenuItem>
// // // // // //                 </Select>
// // // // // //               </FormControl>
// // // // // //             </Box>
// // // // // //           </Box>

// // // // // //           <Grid container spacing={3}>
// // // // // //             {filteredAndSortedCourses.length > 0 ? (
// // // // // //               filteredAndSortedCourses.map((course, index) => (
// // // // // //                 <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse}>
// // // // // //                   <CourseCard
// // // // // //                     backgroundImage={`https://localhost:7092${course.image}`}
// // // // // //                     sx={{
// // // // // //                       height: '100%',
// // // // // //                       display: 'flex',
// // // // // //                       flexDirection: 'column',
// // // // // //                       transition: 'transform 0.2s, box-shadow 0.2s',
// // // // // //                       '&:hover': {
// // // // // //                         transform: 'translateY(-5px)',
// // // // // //                         boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
// // // // // //                       }
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     <StyledCardContent sx={{ flexGrow: 1 }}>
// // // // // //                       <Box>
// // // // // //                         <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
// // // // // //                           {course.nameOfCourse}
// // // // // //                         </Typography>
                      
// // // // // //                         <Divider sx={{ my: 1.5, backgroundColor: 'rgba(255,255,255,0.3)' }} />

// // // // // //                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
// // // // // //                           <EventIcon sx={{ color: 'white', mr: 1 }} />
// // // // // //                           <Typography variant="body2">
// // // // // //                             {course.startDateOfCourse || "בקרוב"}
// // // // // //                           </Typography>
// // // // // //                         </Box>

// // // // // //                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
// // // // // //                           <AccessTimeIcon sx={{ color: 'white', mr: 1 }} />
// // // // // //                           <Typography variant="body2">
// // // // // //                             {course.dayOfCourse || "לא צוין"}, {course.hourOfCourse || ""}
// // // // // //                           </Typography>
// // // // // //                         </Box>

// // // // // //                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
// // // // // //                           <LocationOnIcon sx={{ color: 'white', mr: 1 }} />
// // // // // //                           <Typography variant="body2" noWrap>
// // // // // //                             {course.placeOfCourse || "לא צוין"}
// // // // // //                           </Typography>
// // // // // //                         </Box>

// // // // // //                         <Typography
// // // // // //                           variant="body2"
// // // // // //                           sx={{
// // // // // //                             mt: 2,
// // // // // //                             overflow: 'hidden',
// // // // // //                             textOverflow: 'ellipsis',
// // // // // //                             display: '-webkit-box',
// // // // // //                             WebkitLineClamp: 3,
// // // // // //                             WebkitBoxOrient: 'vertical',
// // // // // //                             height: '4.5em'
// // // // // //                           }}
// // // // // //                         >
// // // // // //                           {course.descriptionOfCourse || "אין תיאור זמין לקורס זה."}
// // // // // //                         </Typography>
// // // // // //                       </Box>

// // // // // //                       <StyledBox sx={{ mt: 'auto' }}>
// // // // // //                         {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', */}
// // // // // //                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
// // // // // //                           <Chip
// // // // // //                             label={`₪${course.totalSumOfCourse || 0}`}
// // // // // //                             color="primary"
// // // // // //                             sx={{ fontWeight: 'bold' }}
// // // // // //                           />
// // // // // //                           <Chip
// // // // // //                             label={`${course.currentAmountOfStudents || 0}/${course.amountOfStudentsInCourse || 0}`}
// // // // // //                             variant="outlined"
// // // // // //                             sx={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
// // // // // //                           />
// // // // // //                         </Box>

// // // // // //                         <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
// // // // // //                           <Chip
// // // // // //                             size="small"
// // // // // //                             label={getCourseCategory(course)}
// // // // // //                             sx={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
// // // // // //                           />
// // // // // //                           <Chip
// // // // // //                             size="small"
// // // // // //                             label={getCourseInstructor(course)}
// // // // // //                             sx={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
// // // // // //                           />
// // // // // //                         </Box>

// // // // // //                         <Button
// // // // // //                           variant="contained"
// // // // // //                           fullWidth
// // // // // //                           onClick={() => setSelectedFunc(course.idOfCourse)}
// // // // // //                           sx={{
// // // // // //                             backgroundColor: 'rgba(255,255,255,0.9)',
// // // // // //                             color: 'primary.main',
// // // // // //                             fontWeight: 'bold',
// // // // // //                             '&:hover': {
// // // // // //                               backgroundColor: 'white',
// // // // // //                             }
// // // // // //                           }}
// // // // // //                         >
// // // // // //                           צפה בפרטים
// // // // // //                         </Button>
// // // // // //                       </StyledBox>
// // // // // //                     </StyledCardContent>
// // // // // //                   </CourseCard>
// // // // // //                 </Grid>
// // // // // //               ))
// // // // // //             ) : (
// // // // // //               <Grid item xs={12}>
// // // // // //                 <Box sx={{ textAlign: 'center', py: 8 }}>
// // // // // //                   <Typography variant="h6" color="text.secondary" gutterBottom>
// // // // // //                     לא נמצאו קורסים
// // // // // //                   </Typography>
// // // // // //                   <Typography variant="body2" color="text.secondary">
// // // // // //                     נסה לשנות את קריטריוני החיפוש או הסינון
// // // // // //                   </Typography>
// // // // // //                 </Box>
// // // // // //               </Grid>
// // // // // //             )}
// // // // // //           </Grid>
// // // // // //         </Container>
// // // // // //       ) : (
// // // // // //         <ShowCourse
// // // // // //           selectedCourse={selectedCourse}
// // // // // //           onBack={handleBack}
// // // // // //           onCourseUpdate={handleCourseUpdate}
// // // // // //         />
// // // // // //       )}
// // // // // //     </>
// // // // // //   );
// // // // // // }
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// // // // // import { ShowCourse } from '../ShowCourse/ShowCourse';
// // // // // import { Routing } from '../Routing/Routing';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import {
// // // // //   Container,
// // // // //   Grid,
// // // // //   Card,
// // // // //   CardContent,
// // // // //   CardActions,
// // // // //   Typography,
// // // // //   Button,
// // // // //   Box,
// // // // //   Divider,
// // // // //   Chip,
// // // // //   CircularProgress,
// // // // //   TextField,
// // // // //   InputAdornment,
// // // // //   MenuItem,
// // // // //   Select,
// // // // //   FormControl,
// // // // //   CardMedia,
// // // // //   InputLabel,
// // // // //   Fade,
// // // // //   Skeleton,
// // // // //   Avatar,
// // // // //   IconButton,
// // // // //   Tooltip,
// // // // //   Badge
// // // // // } from '@mui/material';
// // // // // import {
// // // // //   Event as EventIcon,
// // // // //   AccessTime as AccessTimeIcon,
// // // // //   LocationOn as LocationOnIcon,
// // // // //   Search as SearchIcon,
// // // // //   FilterList as FilterListIcon,
// // // // //   Sort as SortIcon,
// // // // //   PersonPinCircle,
// // // // //   CalendarViewMonth,
// // // // //   Favorite as FavoriteIcon,
// // // // //   FavoriteBorder as FavoriteBorderIcon,
// // // // //   Share as ShareIcon,
// // // // //   Visibility as VisibilityIcon,
// // // // //   Star as StarIcon,
// // // // //   Group as GroupIcon,
// // // // //   TrendingUp as TrendingUpIcon,
// // // // //   Schedule as ScheduleIcon,
// // // // //   PlayArrow as PlayArrowIcon
// // // // // } from '@mui/icons-material';
// // // // // import { styled, keyframes } from '@mui/material/styles';
// // // // // import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';

// // // // // // אנימציות
// // // // // const shimmer = keyframes`
// // // // //   0% {
// // // // //     background-position: -468px 0;
// // // // //   }
// // // // //   100% {
// // // // //     background-position: 468px 0;
// // // // //   }
// // // // // `;

// // // // // const float = keyframes`
// // // // //   0%, 100% {
// // // // //     transform: translateY(0px);
// // // // //   }
// // // // //   50% {
// // // // //     transform: translateY(-10px);
// // // // //   }
// // // // // `;

// // // // // const pulse = keyframes`
// // // // //   0% {
// // // // //     box-shadow: 0 0 0 0 rgba(63, 81, 181, 0.7);
// // // // //   }
// // // // //   70% {
// // // // //     box-shadow: 0 0 0 10px rgba(63, 81, 181, 0);
// // // // //   }
// // // // //   100% {
// // // // //     box-shadow: 0 0 0 0 rgba(63, 81, 181, 0);
// // // // //   }
// // // // // `;

// // // // // // כרטיס קורס משופר
// // // // // const CourseCard = styled(Card)(({ theme, backgroundImage, isPopular }) => ({
// // // // //   borderRadius: '24px',
// // // // //   overflow: 'hidden',
// // // // //   position: 'relative',
// // // // //   height: '420px',
// // // // //   cursor: 'pointer',
// // // // //   boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
// // // // //   transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
// // // // //   backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // // //   backgroundSize: 'cover',
// // // // //   backgroundPosition: 'center',
// // // // //   backgroundRepeat: 'no-repeat',
// // // // //   border: isPopular ? `3px solid ${theme.palette.warning.main}` : 'none',
  
// // // // //   '&:hover': {
// // // // //     transform: 'translateY(-12px) scale(1.02)',
// // // // //     boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
    
// // // // //     '& .course-overlay': {
// // // // //       background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
// // // // //     },
    
// // // // //     '& .course-content': {
// // // // //       transform: 'translateY(-5px)',
// // // // //     },
    
// // // // //     '& .action-buttons': {
// // // // //       opacity: 1,
// // // // //       transform: 'translateY(0)',
// // // // //     },
    
// // // // //     '& .course-image': {
// // // // //       transform: 'scale(1.1)',
// // // // //     }
// // // // //   },
  
// // // // //   '&::before': {
// // // // //     content: '""',
// // // // //     position: 'absolute',
// // // // //     top: 0,
// // // // //     left: 0,
// // // // //     right: 0,
// // // // //     bottom: 0,
// // // // //     background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
// // // // //     zIndex: 1,
// // // // //     transition: 'all 0.3s ease',
// // // // //   },
  
// // // // //   // אפקט זוהר לקורסים פופולריים
// // // // //   ...(isPopular && {
// // // // //     animation: `${pulse} 2s infinite`,
// // // // //   }),
// // // // // }));

// // // // // // שכבת תוכן משופרת
// // // // // const CourseOverlay = styled(Box)(({ theme }) => ({
// // // // //   position: 'absolute',
// // // // //   top: 0,
// // // // //   left: 0,
// // // // //   right: 0,
// // // // //   bottom: 0,
// // // // //   zIndex: 2,
// // // // //   display: 'flex',
// // // // //   flexDirection: 'column',
// // // // //   justifyContent: 'space-between',
// // // // //   padding: theme.spacing(3),
// // // // //   background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
// // // // //   transition: 'all 0.3s ease',
// // // // // }));

// // // // // // תוכן הקורס
// // // // // const CourseContent = styled(Box)(({ theme }) => ({
// // // // //   transition: 'transform 0.3s ease',
// // // // //   '& .MuiTypography-root': {
// // // // //     color: 'white',
// // // // //     textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
// // // // //   }
// // // // // }));

// // // // // // כפתורי פעולה
// // // // // const ActionButtons = styled(Box)(({ theme }) => ({
// // // // //   display: 'flex',
// // // // //   gap: theme.spacing(1),
// // // // //   opacity: 0,
// // // // //   transform: 'translateY(20px)',
// // // // //   transition: 'all 0.3s ease',
// // // // // }));

// // // // // // תג פופולרי
// // // // // const PopularBadge = styled(Chip)(({ theme }) => ({
// // // // //   position: 'absolute',
// // // // //   top: theme.spacing(2),
// // // // //   left: theme.spacing(2),
// // // // //   zIndex: 3,
// // // // //   background: `linear-gradient(45deg, ${theme.palette.warning.main}, ${theme.palette.warning.dark})`,
// // // // //   color: 'white',
// // // // //   fontWeight: 700,
// // // // //   fontSize: '0.75rem',
// // // // //   animation: `${float} 3s ease-in-out infinite`,
// // // // //   boxShadow: '0 4px 12px rgba(255, 193, 7, 0.4)',
// // // // // }));

// // // // // // תג קטגוריה
// // // // // const CategoryBadge = styled(Chip)(({ theme }) => ({
// // // // //   position: 'absolute',
// // // // //   top: theme.spacing(2),
// // // // //   right: theme.spacing(2),
// // // // //   zIndex: 3,
// // // // //   background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
// // // // //   color: 'white',
// // // // //   fontWeight: 600,
// // // // //   backdropFilter: 'blur(10px)',
// // // // //   border: '1px solid rgba(255,255,255,0.2)',
// // // // // }));

// // // // // // מחוון התקדמות
// // // // // const ProgressIndicator = styled(Box)(({ theme, progress }) => ({
// // // // //   position: 'absolute',
// // // // //   bottom: 0,
// // // // //   left: 0,
// // // // //   height: '4px',
// // // // //   width: `${progress}%`,
// // // // //   background: `linear-gradient(90deg, ${theme.palette.success.main}, ${theme.palette.success.light})`,
// // // // //   transition: 'width 0.3s ease',
// // // // //   zIndex: 3,
// // // // // }));

// // // // // // כפתור ראשי משופר
// // // // // const PrimaryButton = styled(Button)(({ theme }) => ({
// // // // //   borderRadius: '12px',
// // // // //   padding: theme.spacing(1.5, 3),
// // // // //   background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
// // // // //   color: 'white',
// // // // //   fontWeight: 700,
// // // // //   textTransform: 'none',
// // // // //   fontSize: '1rem',
// // // // //   boxShadow: '0 4px 15px rgba(63, 81, 181, 0.4)',
// // // // //   transition: 'all 0.3s ease',
  
// // // // //   '&:hover': {
// // // // //     background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
// // // // //     transform: 'translateY(-2px)',
// // // // //     boxShadow: '0 6px 20px rgba(63, 81, 181, 0.6)',
// // // // //   }
// // // // // }));

// // // // // // כפתור משני
// // // // // const SecondaryButton = styled(IconButton)(({ theme }) => ({
// // // // //   backgroundColor: 'rgba(255,255,255,0.9)',
// // // // //   color: theme.palette.primary.main,
// // // // //   backdropFilter: 'blur(10px)',
// // // // //   border: '1px solid rgba(255,255,255,0.3)',
// // // // //   transition: 'all 0.3s ease',
  
// // // // //   '&:hover': {
// // // // //     backgroundColor: 'white',
// // // // //     transform: 'scale(1.1)',
// // // // //     boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
// // // // //   }
// // // // // }));

// // // // // // מידע נוסף
// // // // // const InfoChip = styled(Chip)(({ theme, variant }) => {
// // // // //   const variants = {
// // // // //     students: {
// // // // //       background: 'linear-gradient(45deg, #4CAF50, #45a049)',
// // // // //       icon: <GroupIcon sx={{ color: 'white !important' }} />
// // // // //     },
// // // // //     time: {
// // // // //       background: 'linear-gradient(45deg, #2196F3, #1976D2)',
// // // // //       icon: <ScheduleIcon sx={{ color: 'white !important' }} />
// // // // //     },
// // // // //     price: {
// // // // //       background: 'linear-gradient(45deg, #FF9800, #F57C00)',
// // // // //       icon: <TrendingUpIcon sx={{ color: 'white !important' }} />
// // // // //     }
// // // // //   };

// // // // //   return {
// // // // //     ...variants[variant],
// // // // //     color: 'white',
// // // // //     fontWeight: 600,
// // // // //     fontSize: '0.875rem',
// // // // //     height: '32px',
// // // // //     borderRadius: '16px',
// // // // //     boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
// // // // //     border: '1px solid rgba(255,255,255,0.2)',
// // // // //     backdropFilter: 'blur(5px)',
    
// // // // //     '& .MuiChip-icon': {
// // // // //       color: 'white',
// // // // //     }
// // // // //   };
// // // // // });

// // // // // // פונקציות עזר
// // // // // const getCourseInstructor = (course) => {
// // // // //   if (course.speakerName) return course.speakerName;
// // // // //   const instructors = ['ד"ר כהן', 'פרופ\' לוי', 'מר ישראלי', 'גב\' אברהם'];
// // // // //   return instructors[Math.floor(Math.random() * instructors.length)];
// // // // // };

// // // // // const getCourseCategory = (course) => {
// // // // //   const categories = ['אקדמי', 'מקצועי', 'העשרה', 'אמנות', 'טכנולוגיה'];
// // // // //   return categories[Math.floor(Math.random() * categories.length)];
// // // // // };

// // // // // const isPopularCourse = (course) => {
// // // // //   return course.currentAmountOfStudents > (course.amountOfStudentsInCourse * 0.7);
// // // // // };

// // // // // const getEnrollmentProgress = (course) => {
// // // // //   return (course.currentAmountOfStudents / course.amountOfStudentsInCourse) * 100;
// // // // // };

// // // // // const getRemainingSeats = (course) => {
// // // // //   return course.amountOfStudentsInCourse - course.currentAmountOfStudents;
// // // // // };

// // // // // export function Home() {
// // // // //   const [selectedId, setSelectedId] = React.useState();
// // // // //   const [selectedCourse, setSelectedCourse] = React.useState();
// // // // //   const [flag, setFlag] = React.useState(true);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // //   const [sortBy, setSortBy] = useState('nameOfCourse');
// // // // //   const [sortOrder, setSortOrder] = useState('asc');
// // // // //   const [filterDay, setFilterDay] = useState('');
// // // // //   const [favorites, setFavorites] = useState(new Set());
// // // // //   const [imageLoading, setImageLoading] = useState(new Set());

// // // // //   const courses = useSelector(state => state.courses.allCourses);
// // // // //   const dispatch = useDispatch();

// // // // //   useEffect(() => {
// // // // //     const fetchCourses = async () => {
// // // // //       setLoading(true);
// // // // //       try {
// // // // //         await dispatch(getCoursesThunk());
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching courses:", error);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchCourses();
// // // // //   }, [dispatch]);

// // // // //   const toggleFavorite = (courseId) => {
// // // // //     const newFavorites = new Set(favorites);
// // // // //     if (newFavorites.has(courseId)) {
// // // // //       newFavorites.delete(courseId);
// // // // //     } else {
// // // // //       newFavorites.add(courseId);
// // // // //     }
// // // // //     setFavorites(newFavorites);
// // // // //   };

// // // // //   const handleShare = (course) => {
// // // // //     if (navigator.share) {
// // // // //       navigator.share({
// // // // //         title: course.nameOfCourse,
// // // // //         text: course.descriptionOfCourse,
// // // // //         url: window.location.href,
// // // // //       });
// // // // //     } else {
// // // // //       navigator.clipboard.writeText(window.location.href);
// // // // //       // הוסף הודעת הצלחה כאן
// // // // //     }
// // // // //   };

// // // // //   async function setSelectedFunc(id) {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const tempCourse = await dispatch(getCourseByCourseIdThunk(id));
// // // // //       setSelectedId(tempCourse.payload.idOfCourse);
// // // // //       setSelectedCourse(tempCourse.payload);
// // // // //       setFlag(false);
// // // // //     }
// // // // //     catch (error) {
// // // // //       console.error("Error fetching course details:", error);
// // // // //     }
// // // // //     finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }

// // // // //   const handleBack = () => {
// // // // //     setFlag(true);
// // // // //   };

// // // // //   const handleCourseUpdate = (updatedCourse) => {
// // // // //     setSelectedCourse(updatedCourse);
// // // // //   };

// // // // //   // Filter and sort courses
// // // // //   const filteredAndSortedCourses = React.useMemo(() => {
// // // // //     if (!courses) return [];

// // // // //     return [...courses]
// // // // //       .filter(course => {
// // // // //         const matchesSearch = course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //           course.descriptionOfCourse?.toLowerCase().includes(searchTerm.toLowerCase());

// // // // //         const matchesDay = !filterDay || course.dayOfCourse === filterDay;

// // // // //         return matchesSearch && matchesDay;
// // // // //       })
// // // // //       .sort((a, b) => {
// // // // //         let comparison = 0;

// // // // //         if (sortBy === 'nameOfCourse') {
// // // // //           comparison = a.nameOfCourse?.localeCompare(b.nameOfCourse);
// // // // //         } else if (sortBy === 'startDateOfCourse') {
// // // // //           comparison = new Date(a.startDateOfCourse) - new Date(b.startDateOfCourse);
// // // // //         } else if (sortBy === 'totalSumOfCourse') {
// // // // //           comparison = a.totalSumOfCourse - b.totalSumOfCourse;
// // // // //         } else if (sortBy === 'popularity') {
// // // // //           comparison = getEnrollmentProgress(b) - getEnrollmentProgress(a);
// // // // //         }

// // // // //         return sortOrder === 'asc' ? comparison : -comparison;
// // // // //       });
// // // // //   }, [courses, searchTerm, filterDay, sortBy, sortOrder]);

// // // // //   // רכיב כרטיס קורס
// // // // //   const CourseCardComponent = ({ course, index }) => {
// // // // //     const isPopular = isPopularCourse(course);
// // // // //     const progress = getEnrollmentProgress(course);
// // // // //     const remainingSeats = getRemainingSeats(course);
// // // // //     const isFavorite = favorites.has(course.idOfCourse);

// // // // //     return (
// // // // //       <Fade in={true} timeout={300 + index * 100}>
// // // // //         <CourseCard
// // // // //           backgroundImage={course.image ? `https://localhost:7092${course.image}` : null}
// // // // //           isPopular={isPopular}
// // // // //         >
// // // // //           {/* תג פופולרי */}
// // // // //           {isPopular && (
// // // // //             <PopularBadge 
// // // // //               label="פופולרי" 
// // // // //               icon={<StarIcon />}
// // // // //               size="small"
// // // // //             />
// // // // //           )}

// // // // //           {/* תג קטגוריה */}
// // // // //           <CategoryBadge 
// // // // //             label={getCourseCategory(course)}
// // // // //             size="small"
// // // // //           />

// // // // //           {/* מחוון התקדמות */}
// // // // //           <ProgressIndicator progress={progress} />

// // // // //           {/* תוכן הכרטיס */}
// // // // //           <CourseOverlay className="course-overlay">
// // // // //             <CourseContent className="course-content">
// // // // //               {/* כותרת הקורס */}
// // // // //               <Typography 
// // // // //                 variant="h5" 
// // // // //                 component="h2" 
// // // // //                 gutterBottom 
// // // // //                 sx={{ 
// // // // //                   fontWeight: 800,
// // // // //                   fontSize: '1.5rem',
// // // // //                   lineHeight: 1.2,
// // // // //                   mb: 2
// // // // //                 }}
// // // // //               >
// // // // //                 {course.nameOfCourse}
// // // // //               </Typography>

// // // // //               {/* מידע בסיסי */}
// // // // //               <Box sx={{ mb: 2 }}>
// // // // //                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// // // // //                   <EventIcon sx={{ color: 'white', mr: 1, fontSize: '1.1rem' }} />
// // // // //                   <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
// // // // //                     {course.startDateOfCourse || "בקרוב"}
// // // // //                   </Typography>
// // // // //                 </Box>

// // // // //                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// // // // //                   <AccessTimeIcon sx={{ color: 'white', mr: 1, fontSize: '1.1rem' }} />
// // // // //                   <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
// // // // //                     {course.dayOfCourse || "לא צוין"} • {course.hourOfCourse || ""}
// // // // //                   </Typography>
// // // // //                 </Box>

// // // // //                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// // // // //                   <LocationOnIcon sx={{ color: 'white', mr: 1, fontSize: '1.1rem' }} />
// // // // //                   <Typography variant="body2" noWrap sx={{ fontSize: '0.9rem' }}>
// // // // //                     {course.placeOfCourse || "לא צוין"}
// // // // //                   </Typography>
// // // // //                 </Box>
// // // // //               </Box>

// // // // //               {/* תיאור הקורס */}
// // // // //               <Typography
// // // // //                 variant="body2"
// // // // //                 sx={{
// // // // //                   mb: 2,
// // // // //                   overflow: 'hidden',
// // // // //                   textOverflow: 'ellipsis',
// // // // //                   display: '-webkit-box',
// // // // //                   WebkitLineClamp: 2,
// // // // //                   WebkitBoxOrient: 'vertical',
// // // // //                   height: '2.8em',
// // // // //                   fontSize: '0.875rem',
// // // // //                   lineHeight: 1.4,
// // // // //                   opacity: 0.9
// // // // //                 }}
// // // // //               >
// // // // //                 {course.descriptionOfCourse || "אין תיאור זמין לקורס זה."}
// // // // //               </Typography>

// // // // //               {/* מידע נוסף */}
// // // // //               <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
// // // // //                 <InfoChip
// // // // //                   variant="students"
// // // // //                   size="small"
// // // // //                   icon={<GroupIcon />}
// // // // //                   label={`${remainingSeats} מקומות`}
// // // // //                 />
                
// // // // //                 <InfoChip
// // // // //                   variant="time"
// // // // //                   size="small"
// // // // //                   icon={<ScheduleIcon />}
// // // // //                   label={`${course.amountOfMeetingsInCourse || 0} מפגשים`}
// // // // //                 />
                
// // // // //                 <InfoChip
// // // // //                   variant="price"
// // // // //                   size="small"
// // // // //                   icon={<TrendingUpIcon />}
// // // // //                   label={`₪${course.totalSumOfCourse || 0}`}
// // // // //                 />
// // // // //               </Box>

// // // // //               {/* מרצה */}
// // // // //               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// // // // //                 <Avatar 
// // // // //                   sx={{ 
// // // // //                     width: 32, 
// // // // //                     height: 32, 
// // // // //                     mr: 1,
// // // // //                     background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
// // // // //                   }}
// // // // //                 >
// // // // //                   {getCourseInstructor(course).charAt(0)}
// // // // //                 </Avatar>
// // // // //                 <Typography variant="body2" sx={{ fontWeight: 600 }}>
// // // // //                   {getCourseInstructor(course)}
// // // // //                 </Typography>
// // // // //               </Box>
// // // // //             </CourseContent>

// // // // //             {/* כפתורי פעולה */}
// // // // //             <ActionButtons className="action-buttons">
// // // // //               <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
// // // // //                 <PrimaryButton
// // // // //                   fullWidth
// // // // //                   onClick={() => setSelectedFunc(course.idOfCourse)}
// // // // //                   startIcon={<PlayArrowIcon />}
// // // // //                 >
// // // // //                   צפה בפרטים
// // // // //                 </PrimaryButton>
                
// // // // //                 <Tooltip title={isFavorite ? "הסר מהמועדפים" : "הוסף למועדפים"}>
// // // // //                   <SecondaryButton
// // // // //                     onClick={(e) => {
// // // // //                       e.stopPropagation();
// // // // //                       toggleFavorite(course.idOfCourse);
// // // // //                     }}
// // // // //                   >
// // // // //                     {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
// // // // //                   </SecondaryButton>
// // // // //                 </Tooltip>
                
// // // // //                 <Tooltip title="שתף קורס">
// // // // //                   <SecondaryButton
// // // // //                     onClick={(e) => {
// // // // //                       e.stopPropagation();
// // // // //                       handleShare(course);
// // // // //                     }}
// // // // //                   >
// // // // //                     <ShareIcon />
// // // // //                   </SecondaryButton>
// // // // //                 </Tooltip>
// // // // //               </Box>
// // // // //             </ActionButtons>
// // // // //           </CourseOverlay>
// // // // //         </CourseCard>
// // // // //       </Fade>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       {loading && (
// // // // //         <Box sx={{
// // // // //           display: 'flex',
// // // // //           justifyContent: 'center',
// // // // //           alignItems: 'center',
// // // // //           position: 'fixed',
// // // // //           top: 0,
// // // // //           left: 0,
// // // // //           right: 0,
// // // // //           bottom: 0,
// // // // //           backgroundColor: 'rgba(255,255,255,0.9)',
// // // // //           backdropFilter: 'blur(5px)',
// // // // //           zIndex: 9999
// // // // //         }}>
// // // // //           <Box sx={{ textAlign: 'center' }}>
// // // // //             <CircularProgress size={60} thickness={4} />
// // // // //             <Typography variant="h6" sx={{ mt: 2, color: 'primary.main' }}>
// // // // //               טוען קורסים...
// // // // //             </Typography>
// // // // //           </Box>
// // // // //         </Box>
// // // // //       )}

// // // // //       {flag ? (
// // // // //         <Container maxWidth="xl" sx={{ padding: 3, direction: 'rtl' }}>
// // // // //           {/* כותרת ראשית */}
// // // // //           <Box sx={{ mb: 4, textAlign: 'center' }}>
// // // // //             <Typography 
// // // // //               variant="h3" 
// // // // //               component="h1" 
// // // // //               sx={{ 
// // // // //                 mb: 2, 
// // // // //                 fontWeight: 900,
// // // // //                 background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
// // // // //                 backgroundClip: 'text',
// // // // //                 WebkitBackgroundClip: 'text',
// // // // //                 WebkitTextFillColor: 'transparent',
// // // // //               }}
// // // // //             >
// // // // //               הקורסים שלנו
// // // // //             </Typography>
// // // // //             <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
// // // // //               גלו מגוון רחב של קורסים מקצועיים ואקדמיים המותאמים לכל רמה
// // // // //             </Typography>
// // // // //           </Box>

// // // // //           {/* סרגל חיפוש וסינון משופר */}
// // // // //           <Box sx={{ 
// // // // //             mb: 4, 
// // // // //             p: 3, 
// // // // //             borderRadius: '20px',
// // // // //             background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
// // // // //             backdropFilter: 'blur(10px)',
// // // // //             border: '1px solid rgba(255,255,255,0.3)',
// // // // //             boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
// // // // //           }}>
// // // // //             <Grid container spacing={2} alignItems="center">
// // // // //               <Grid item xs={12} md={4}>
// // // // //                 <TextField
// // // // //                   fullWidth
// // // // //                   placeholder="חיפוש קורסים..."
// // // // //                   value={searchTerm}
// // // // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // // // //                   sx={{
// // // // //                     '& .MuiOutlinedInput-root': {
// // // // //                       borderRadius: '12px',
// // // // //                       backgroundColor: 'white',
// // // // //                     }
// // // // //                   }}
// // // // //                   InputProps={{
// // // // //                     startAdornment: (
// // // // //                       <InputAdornment position="start">
// // // // //                         <SearchIcon color="primary" />
// // // // //                       </InputAdornment>
// // // // //                     ),
// // // // //                   }}
// // // // //                 />
// // // // //               </Grid>

// // // // //               <Grid item xs={12} md={2}>
// // // // //                 <FormControl fullWidth>
// // // // //                   <InputLabel>יום</InputLabel>
// // // // //                   <Select
// // // // //                     value={filterDay}
// // // // //                     onChange={(e) => setFilterDay(e.target.value)}
// // // // //                     label="יום"
// // // // //                     sx={{
// // // // //                       borderRadius: '12px',
// // // // //                       backgroundColor: 'white',
// // // // //                     }}
// // // // //                   >
// // // // //                     <MenuItem value="">הכל</MenuItem>
// // // // //                     <MenuItem value="ראשון">ראשון</MenuItem>
// // // // //                     <MenuItem value="שני">שני</MenuItem>
// // // // //                     <MenuItem value="שלישי">שלישי</MenuItem>
// // // // //                     <MenuItem value="רביעי">רביעי</MenuItem>
// // // // //                     <MenuItem value="חמישי">חמישי</MenuItem>
// // // // //                     <MenuItem value="שישי">שישי</MenuItem>
// // // // //                   </Select>
// // // // //                 </FormControl>
// // // // //               </Grid>

// // // // //               <Grid item xs={12} md={3}>
// // // // //                 <FormControl fullWidth>
// // // // //                   <InputLabel>מיון לפי</InputLabel>
// // // // //                   <Select
// // // // //                     value={sortBy}
// // // // //                     onChange={(e) => setSortBy(e.target.value)}
// // // // //                     label="מיון לפי"
// // // // //                     sx={{
// // // // //                       borderRadius: '12px',
// // // // //                       backgroundColor: 'white',
// // // // //                     }}
// // // // //                   >
// // // // //                     <MenuItem value="nameOfCourse">שם הקורס</MenuItem>
// // // // //                     <MenuItem value="startDateOfCourse">תאריך התחלה</MenuItem>
// // // // //                     <MenuItem value="totalSumOfCourse">מחיר</MenuItem>
// // // // //                     <MenuItem value="popularity">פופולריות</MenuItem>
// // // // //                   </Select>
// // // // //                 </FormControl>
// // // // //               </Grid>

// // // // //               <Grid item xs={12} md={3}>
// // // // //                 <FormControl fullWidth>
// // // // //                   <InputLabel>סדר</InputLabel>
// // // // //                   <Select
// // // // //                     value={sortOrder}
// // // // //                     onChange={(e) => setSortOrder(e.target.value)}
// // // // //                     label="סדר"
// // // // //                     sx={{
// // // // //                       borderRadius: '12px',
// // // // //                       backgroundColor: 'white',
// // // // //                     }}
// // // // //                   >
// // // // //                     <MenuItem value="asc">עולה</MenuItem>
// // // // //                     <MenuItem value="desc">יורד</MenuItem>
// // // // //                   </Select>
// // // // //                 </FormControl>
// // // // //               </Grid>
// // // // //             </Grid>
// // // // //           </Box>

// // // // //           {/* סטטיסטיקות */}
// // // // //           <Box sx={{ mb: 4 }}>
// // // // //             <Grid container spacing={2}>
// // // // //               <Grid item xs={12} sm={4}>
// // // // //                 <Box sx={{
// // // // //                   p: 2,
// // // // //                   borderRadius: '16px',
// // // // //                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // // //                   color: 'white',
// // // // //                   textAlign: 'center'
// // // // //                 }}>
// // // // //                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // // // //                     {filteredAndSortedCourses.length}
// // // // //                   </Typography>
// // // // //                   <Typography variant="body2">קורסים זמינים</Typography>
// // // // //                 </Box>
// // // // //               </Grid>
// // // // //               <Grid item xs={12} sm={4}>
// // // // //                 <Box sx={{
// // // // //                   p: 2,
// // // // //                   borderRadius: '16px',
// // // // //                   background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
// // // // //                   color: 'white',
// // // // //                   textAlign: 'center'
// // // // //                 }}>
// // // // //                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // // // //                     {filteredAndSortedCourses.reduce((sum, course) => sum + course.currentAmountOfStudents, 0)}
// // // // //                   </Typography>
// // // // //                   <Typography variant="body2">סטודנטים רשומים</Typography>
// // // // //                 </Box>
// // // // //               </Grid>
// // // // //               <Grid item xs={12} sm={4}>
// // // // //                 <Box sx={{
// // // // //                   p: 2,
// // // // //                   borderRadius: '16px',
// // // // //                   background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
// // // // //                   color: 'white',
// // // // //                   textAlign: 'center'
// // // // //                 }}>
// // // // //                   {/* <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // // // //                     {filteredAndSortedCourses.reduce((sum, course) => sum + getRemainingSeats(course), 0)}
// // // // //                   </Typography>
// // // // //                   <Typography variant="body */}

// // // // // <Typography variant="body2">מקומות פנויים</Typography>
// // // // //                 </Box>
// // // // //               </Grid>
// // // // //             </Grid>
// // // // //           </Box>

// // // // //           {/* רשת הקורסים */}
// // // // //           <Grid container spacing={3}>
// // // // //             {filteredAndSortedCourses.length > 0 ? (
// // // // //               filteredAndSortedCourses.map((course, index) => (
// // // // //                 <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse}>
// // // // //                   <CourseCardComponent course={course} index={index} />
// // // // //                 </Grid>
// // // // //               ))
// // // // //             ) : (
// // // // //               <Grid item xs={12}>
// // // // //                 <Box sx={{ 
// // // // //                   textAlign: 'center', 
// // // // //                   py: 8,
// // // // //                   borderRadius: '20px',
// // // // //                   background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
// // // // //                   backdropFilter: 'blur(10px)',
// // // // //                   border: '1px solid rgba(255,255,255,0.3)',
// // // // //                 }}>
// // // // //                   <Box sx={{ 
// // // // //                     width: 120, 
// // // // //                     height: 120, 
// // // // //                     mx: 'auto', 
// // // // //                     mb: 3,
// // // // //                     borderRadius: '50%',
// // // // //                     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // // //                     display: 'flex',
// // // // //                     alignItems: 'center',
// // // // //                     justifyContent: 'center'
// // // // //                   }}>
// // // // //                     <SearchIcon sx={{ fontSize: 60, color: 'white' }} />
// // // // //                   </Box>
// // // // //                   <Typography variant="h5" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
// // // // //                     לא נמצאו קורסים
// // // // //                   </Typography>
// // // // //                   <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
// // // // //                     נסה לשנות את קריטריוני החיפוש או הסינון
// // // // //                   </Typography>
// // // // //                   <Button 
// // // // //                     variant="outlined" 
// // // // //                     onClick={() => {
// // // // //                       setSearchTerm('');
// // // // //                       setFilterDay('');
// // // // //                     }}
// // // // //                     sx={{ borderRadius: '12px' }}
// // // // //                   >
// // // // //                     נקה מסננים
// // // // //                   </Button>
// // // // //                 </Box>
// // // // //               </Grid>
// // // // //             )}
// // // // //           </Grid>

// // // // //           {/* מידע נוסף */}
// // // // //           {filteredAndSortedCourses.length > 0 && (
// // // // //             <Box sx={{ mt: 6, textAlign: 'center' }}>
// // // // //               <Typography variant="body2" color="text.secondary">
// // // // //                 מציג {filteredAndSortedCourses.length} מתוך {courses?.length || 0} קורסים
// // // // //               </Typography>
// // // // //             </Box>
// // // // //           )}
// // // // //         </Container>
// // // // //       ) : (
// // // // //         <ShowCourse
// // // // //           selectedCourse={selectedCourse}
// // // // //           onBack={handleBack}
// // // // //           onCourseUpdate={handleCourseUpdate}
// // // // //         />
// // // // //       )}
// // // // //     </>
// // // // //   );
// // // // // }
// // // // import React, { useState, useEffect } from 'react';
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// // // // import { ShowCourse } from '../ShowCourse/ShowCourse';
// // // // import { Routing } from '../Routing/Routing';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import {
// // // //   Container,
// // // //   Grid,
// // // //   Card,
// // // //   CardContent,
// // // //   CardActions,
// // // //   Typography,
// // // //   Button,
// // // //   Box,
// // // //   Divider,
// // // //   Chip,
// // // //   CircularProgress,
// // // //   TextField,
// // // //   InputAdornment,
// // // //   MenuItem,
// // // //   Select,
// // // //   FormControl,
// // // //   CardMedia,
// // // //   InputLabel,
// // // //   Fade,
// // // //   Skeleton,
// // // //   Avatar,
// // // //   IconButton,
// // // //   Tooltip,
// // // //   Badge
// // // // } from '@mui/material';
// // // // import {
// // // //   Event as EventIcon,
// // // //   AccessTime as AccessTimeIcon,
// // // //   LocationOn as LocationOnIcon,
// // // //   Search as SearchIcon,
// // // //   FilterList as FilterListIcon,
// // // //   Sort as SortIcon,
// // // //   PersonPinCircle,
// // // //   CalendarViewMonth,
// // // //   Favorite as FavoriteIcon,
// // // //   FavoriteBorder as FavoriteBorderIcon,
// // // //   Share as ShareIcon,
// // // //   Visibility as VisibilityIcon,
// // // //   Star as StarIcon,
// // // //   Group as GroupIcon,
// // // //   TrendingUp as TrendingUpIcon,
// // // //   Schedule as ScheduleIcon,
// // // //   PlayArrow as PlayArrowIcon
// // // // } from '@mui/icons-material';
// // // // import { styled, keyframes } from '@mui/material/styles';
// // // // import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';

// // // // // אנימציות
// // // // const shimmer = keyframes`
// // // //   0% {
// // // //     background-position: -468px 0;
// // // //   }
// // // //   100% {
// // // //     background-position: 468px 0;
// // // //   }
// // // // `;

// // // // const float = keyframes`
// // // //   0%, 100% {
// // // //     transform: translateY(0px);
// // // //   }
// // // //   50% {
// // // //     transform: translateY(-10px);
// // // //   }
// // // // `;

// // // // const pulse = keyframes`
// // // //   0% {
// // // //     box-shadow: 0 0 0 0 rgba(63, 81, 181, 0.7);
// // // //   }
// // // //   70% {
// // // //     box-shadow: 0 0 0 10px rgba(63, 81, 181, 0);
// // // //   }
// // // //   100% {
// // // //     box-shadow: 0 0 0 0 rgba(63, 81, 181, 0);
// // // //   }
// // // // `;

// // // // // כרטיס קורס משופר
// // // // const CourseCard = styled(Card)(({ theme, backgroundImage, isPopular }) => ({
// // // //   borderRadius: '24px',
// // // //   overflow: 'hidden',
// // // //   position: 'relative',
// // // //   height: '420px',
// // // //   cursor: 'pointer',
// // // //   boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
// // // //   transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
// // // //   backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // //   backgroundSize: 'cover',
// // // //   backgroundPosition: 'center',
// // // //   backgroundRepeat: 'no-repeat',
// // // //   border: isPopular ? `3px solid ${theme.palette.warning.main}` : 'none',
  
// // // //   '&:hover': {
// // // //     transform: 'translateY(-12px) scale(1.02)',
// // // //     boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
    
// // // //     '& .course-overlay': {
// // // //       background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
// // // //     },
    
// // // //     '& .course-content': {
// // // //       transform: 'translateY(-5px)',
// // // //     },
    
// // // //     '& .action-buttons': {
// // // //       opacity: 1,
// // // //       transform: 'translateY(0)',
// // // //     },
    
// // // //     '& .course-image': {
// // // //       transform: 'scale(1.1)',
// // // //     }
// // // //   },
  
// // // //   '&::before': {
// // // //     content: '""',
// // // //     position: 'absolute',
// // // //     top: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
// // // //     zIndex: 1,
// // // //     transition: 'all 0.3s ease',
// // // //   },
  
// // // //   // אפקט זוהר לקורסים פופולריים
// // // //   ...(isPopular && {
// // // //     animation: `${pulse} 2s infinite`,
// // // //   }),
// // // // }));

// // // // // שכבת תוכן משופרת
// // // // const CourseOverlay = styled(Box)(({ theme }) => ({
// // // //   position: 'absolute',
// // // //   top: 0,
// // // //   left: 0,
// // // //   right: 0,
// // // //   bottom: 0,
// // // //   zIndex: 2,
// // // //   display: 'flex',
// // // //   flexDirection: 'column',
// // // //   justifyContent: 'space-between',
// // // //   padding: theme.spacing(3),
// // // //   background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
// // // //   transition: 'all 0.3s ease',
// // // // }));

// // // // // תוכן הקורס
// // // // const CourseContent = styled(Box)(({ theme }) => ({
// // // //   transition: 'transform 0.3s ease',
// // // //   '& .MuiTypography-root': {
// // // //     color: 'white',
// // // //     textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
// // // //   }
// // // // }));

// // // // // כפתורי פעולה
// // // // const ActionButtons = styled(Box)(({ theme }) => ({
// // // //   display: 'flex',
// // // //   gap: theme.spacing(1),
// // // //   opacity: 0,
// // // //   transform: 'translateY(20px)',
// // // //   transition: 'all 0.3s ease',
// // // // }));

// // // // // תג פופולרי
// // // // const PopularBadge = styled(Chip)(({ theme }) => ({
// // // //   position: 'absolute',
// // // //   top: theme.spacing(2),
// // // //   left: theme.spacing(2),
// // // //   zIndex: 3,
// // // //   background: `linear-gradient(45deg, ${theme.palette.warning.main}, ${theme.palette.warning.dark})`,
// // // //   color: 'white',
// // // //   fontWeight: 700,
// // // //   fontSize: '0.75rem',
// // // //   animation: `${float} 3s ease-in-out infinite`,
// // // //   boxShadow: '0 4px 12px rgba(255, 193, 7, 0.4)',
// // // // }));

// // // // // תג קטגוריה
// // // // const CategoryBadge = styled(Chip)(({ theme }) => ({
// // // //   position: 'absolute',
// // // //   top: theme.spacing(2),
// // // //   right: theme.spacing(2),
// // // //   zIndex: 3,
// // // //   background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
// // // //   color: 'white',
// // // //   fontWeight: 600,
// // // //   backdropFilter: 'blur(10px)',
// // // //   border: '1px solid rgba(255,255,255,0.2)',
// // // // }));

// // // // // מחוון התקדמות
// // // // const ProgressIndicator = styled(Box)(({ theme, progress }) => ({
// // // //   position: 'absolute',
// // // //   bottom: 0,
// // // //   left: 0,
// // // //   height: '4px',
// // // //   width: `${progress}%`,
// // // //   background: `linear-gradient(90deg, ${theme.palette.success.main}, ${theme.palette.success.light})`,
// // // //   transition: 'width 0.3s ease',
// // // //   zIndex: 3,
// // // // }));

// // // // // כפתור ראשי משופר
// // // // const PrimaryButton = styled(Button)(({ theme }) => ({
// // // //   borderRadius: '12px',
// // // //   padding: theme.spacing(1.5, 3),
// // // //   background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
// // // //   color: 'white',
// // // //   fontWeight: 700,
// // // //   textTransform: 'none',
// // // //   fontSize: '1rem',
// // // //   boxShadow: '0 4px 15px rgba(63, 81, 181, 0.4)',
// // // //   transition: 'all 0.3s ease',
  
// // // //   '&:hover': {
// // // //     background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
// // // //     transform: 'translateY(-2px)',
// // // //     boxShadow: '0 6px 20px rgba(63, 81, 181, 0.6)',
// // // //   }
// // // // }));

// // // // // כפתור משני
// // // // const SecondaryButton = styled(IconButton)(({ theme }) => ({
// // // //   backgroundColor: 'rgba(255,255,255,0.9)',
// // // //   color: theme.palette.primary.main,
// // // //   backdropFilter: 'blur(10px)',
// // // //   border: '1px solid rgba(255,255,255,0.3)',
// // // //   transition: 'all 0.3s ease',
  
// // // //   '&:hover': {
// // // //     backgroundColor: 'white',
// // // //     transform: 'scale(1.1)',
// // // //     boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
// // // //   }
// // // // }));

// // // // // פונקציות עזר
// // // // const getCourseInstructor = (course) => {
// // // //   if (course.speakerName) return course.speakerName;
// // // //   const instructors = ['ד"ר כהן', 'פרופ\' לוי', 'מר ישראלי', 'גב\' אברהם'];
// // // //   return instructors[Math.floor(Math.random() * instructors.length)];
// // // // };

// // // // const getCourseCategory = (course) => {
// // // //   const categories = ['אקדמי', 'מקצועי', 'העשרה', 'אמנות', 'טכנולוגיה'];
// // // //   return categories[Math.floor(Math.random() * categories.length)];
// // // // };

// // // // const isPopularCourse = (course) => {
// // // //   return course.currentAmountOfStudents > (course.amountOfStudentsInCourse * 0.7);
// // // // };

// // // // const getEnrollmentProgress = (course) => {
// // // //   return (course.currentAmountOfStudents / course.amountOfStudentsInCourse) * 100;
// // // // };

// // // // const getRemainingSeats = (course) => {
// // // //   return course.amountOfStudentsInCourse - course.currentAmountOfStudents;
// // // // };

// // // // // רכיב InfoChip מתוקן
// // // // const InfoChip = ({ variant, label, ...props }) => {
// // // //   const getVariantStyles = (variant) => {
// // // //     switch (variant) {
// // // //       case 'students':
// // // //         return {
// // // //           background: 'linear-gradient(45deg, #4CAF50, #45a049)',
// // // //           icon: <GroupIcon sx={{ color: 'white !important' }} />
// // // //         };
// // // //       case 'time':
// // // //         return {
// // // //           background: 'linear-gradient(45deg, #2196F3, #1976D2)',
// // // //           icon: <ScheduleIcon sx={{ color: 'white !important' }} />
// // // //         };
// // // //       case 'price':
// // // //         return {
// // // //           background: 'linear-gradient(45deg, #FF9800, #F57C00)',
// // // //           icon: <TrendingUpIcon sx={{ color: 'white !important' }} />
// // // //         };
// // // //       default:
// // // //         return {
// // // //           background: 'linear-gradient(45deg, #667eea, #764ba2)',
// // // //           icon: null
// // // //         };
// // // //     }
// // // //   };

// // // //   const variantStyles = getVariantStyles(variant);

// // // //   return (
// // // //     <Chip
// // // //       {...props}
// // // //       label={label}
// // // //       icon={variantStyles.icon}
// // // //       sx={{
// // // //         ...variantStyles,
// // // //         color: 'white',
// // // //         fontWeight: 600,
// // // //         fontSize: '0.875rem',
// // // //         height: '32px',
// // // //         borderRadius: '16px',
// // // //         boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
// // // //         border: '1px solid rgba(255,255,255,0.2)',
// // // //         backdropFilter: 'blur(5px)',
        
// // // //         '& .MuiChip-icon': {
// // // //           color: 'white',
// // // //         }
// // // //       }}
// // // //     />
// // // //   );
// // // // };

// // // // export function Home() {
// // // //   const [selectedId, setSelectedId] = React.useState();
// // // //   const [selectedCourse, setSelectedCourse] = React.useState();
// // // //   const [flag, setFlag] = React.useState(true);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [sortBy, setSortBy] = useState('nameOfCourse');
// // // //   const [sortOrder, setSortOrder] = useState('asc');
// // // //   const [filterDay, setFilterDay] = useState('');
// // // //   const [favorites, setFavorites] = useState(new Set());
// // // //   const [imageLoading, setImageLoading] = useState(new Set());

// // // //   const courses = useSelector(state => state.courses.allCourses);
// // // //   const dispatch = useDispatch();

// // // //   useEffect(() => {
// // // //     const fetchCourses = async () => {
// // // //       setLoading(true);
// // // //       try {
// // // //         await dispatch(getCoursesThunk());
// // // //       } catch (error) {
// // // //         console.error("Error fetching courses:", error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchCourses();
// // // //   }, [dispatch]);

// // // //   const toggleFavorite = (courseId) => {
// // // //     const newFavorites = new Set(favorites);
// // // //     if (newFavorites.has(courseId)) {
// // // //       newFavorites.delete(courseId);
// // // //     } else {
// // // //       newFavorites.add(courseId);
// // // //     }
// // // //     setFavorites(newFavorites);
// // // //   };

// // // //   const handleShare = (course) => {
// // // //     if (navigator.share) {
// // // //       navigator.share({
// // // //         title: course.nameOfCourse,
// // // //         text: course.descriptionOfCourse,
// // // //         url: window.location.href,
// // // //       });
// // // //     } else {
// // // //       navigator.clipboard.writeText(window.location.href);
// // // //       // הוסף הודעת הצלחה כאן
// // // //     }
// // // //   };

// // // //   async function setSelectedFunc(id) {
// // // //     try {
// // // //       setLoading(true);
// // // //       const tempCourse = await dispatch(getCourseByCourseIdThunk(id));
// // // //       setSelectedId(tempCourse.payload.idOfCourse);
// // // //       setSelectedCourse(tempCourse.payload);
// // // //       setFlag(false);
// // // //     }
// // // //     catch (error) {
// // // //       console.error("Error fetching course details:", error);
// // // //     }
// // // //     finally {
// // // //       setLoading(false);
// // // //     }
// // // //   }

// // // //   const handleBack = () => {
// // // //     setFlag(true);
// // // //   };

// // // //   // const handleCourseUpdate = (updatedCourse) => {
// // // //     const handleCourseUpdate = (updatedCourse) => {
// // // //       setSelectedCourse(updatedCourse);
// // // //     };
  
// // // //     // Filter and sort courses
// // // //     const filteredAndSortedCourses = React.useMemo(() => {
// // // //       if (!courses) return [];
  
// // // //       return [...courses]
// // // //         .filter(course => {
// // // //           const matchesSearch = course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //             course.descriptionOfCourse?.toLowerCase().includes(searchTerm.toLowerCase());
  
// // // //           const matchesDay = !filterDay || course.dayOfCourse === filterDay;
  
// // // //           return matchesSearch && matchesDay;
// // // //         })
// // // //         .sort((a, b) => {
// // // //           let comparison = 0;
  
// // // //           if (sortBy === 'nameOfCourse') {
// // // //             comparison = a.nameOfCourse?.localeCompare(b.nameOfCourse);
// // // //           } else if (sortBy === 'startDateOfCourse') {
// // // //             comparison = new Date(a.startDateOfCourse) - new Date(b.startDateOfCourse);
// // // //           } else if (sortBy === 'totalSumOfCourse') {
// // // //             comparison = a.totalSumOfCourse - b.totalSumOfCourse;
// // // //           } else if (sortBy === 'popularity') {
// // // //             comparison = getEnrollmentProgress(b) - getEnrollmentProgress(a);
// // // //           }
  
// // // //           return sortOrder === 'asc' ? comparison : -comparison;
// // // //         });
// // // //     }, [courses, searchTerm, filterDay, sortBy, sortOrder]);
  
// // // //     // רכיב כרטיס קורס
// // // //     const CourseCardComponent = ({ course, index }) => {
// // // //       const isPopular = isPopularCourse(course);
// // // //       const progress = getEnrollmentProgress(course);
// // // //       const remainingSeats = getRemainingSeats(course);
// // // //       const isFavorite = favorites.has(course.idOfCourse);
  
// // // //       return (
// // // //         <Fade in={true} timeout={300 + index * 100}>
// // // //           <CourseCard
// // // //             backgroundImage={course.image ? `https://localhost:7092${course.image}` : null}
// // // //             isPopular={isPopular}
// // // //           >
// // // //             {/* תג פופולרי */}
// // // //             {isPopular && (
// // // //               <PopularBadge 
// // // //                 label="פופולרי" 
// // // //                 icon={<StarIcon />}
// // // //                 size="small"
// // // //               />
// // // //             )}
  
// // // //             {/* תג קטגוריה */}
// // // //             <CategoryBadge 
// // // //               label={getCourseCategory(course)}
// // // //               size="small"
// // // //             />
  
// // // //             {/* מחוון התקדמות */}
// // // //             <ProgressIndicator progress={progress} />
  
// // // //             {/* תוכן הכרטיס */}
// // // //             <CourseOverlay className="course-overlay">
// // // //               <CourseContent className="course-content">
// // // //                 {/* כותרת הקורס */}
// // // //                 <Typography 
// // // //                   variant="h5" 
// // // //                   component="h2" 
// // // //                   gutterBottom 
// // // //                   sx={{ 
// // // //                     fontWeight: 800,
// // // //                     fontSize: '1.5rem',
// // // //                     lineHeight: 1.2,
// // // //                     mb: 2
// // // //                   }}
// // // //                 >
// // // //                   {course.nameOfCourse}
// // // //                 </Typography>
  
// // // //                 {/* מידע בסיסי */}
// // // //                 <Box sx={{ mb: 2 }}>
// // // //                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// // // //                     <EventIcon sx={{ color: 'white', mr: 1, fontSize: '1.1rem' }} />
// // // //                     <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
// // // //                       {course.startDateOfCourse || "בקרוב"}
// // // //                     </Typography>
// // // //                   </Box>
  
// // // //                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// // // //                     <AccessTimeIcon sx={{ color: 'white', mr: 1, fontSize: '1.1rem' }} />
// // // //                     <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
// // // //                       {course.dayOfCourse || "לא צוין"} • {course.hourOfCourse || ""}
// // // //                     </Typography>
// // // //                   </Box>
  
// // // //                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// // // //                     <LocationOnIcon sx={{ color: 'white', mr: 1, fontSize: '1.1rem' }} />
// // // //                     <Typography variant="body2" noWrap sx={{ fontSize: '0.9rem' }}>
// // // //                       {course.placeOfCourse || "לא צוין"}
// // // //                     </Typography>
// // // //                   </Box>
// // // //                 </Box>
  
// // // //                 {/* תיאור הקורס */}
// // // //                 <Typography
// // // //                   variant="body2"
// // // //                   sx={{
// // // //                     mb: 2,
// // // //                     overflow: 'hidden',
// // // //                     textOverflow: 'ellipsis',
// // // //                     display: '-webkit-box',
// // // //                     WebkitLineClamp: 2,
// // // //                     WebkitBoxOrient: 'vertical',
// // // //                     height: '2.8em',
// // // //                     fontSize: '0.875rem',
// // // //                     lineHeight: 1.4,
// // // //                     opacity: 0.9
// // // //                   }}
// // // //                 >
// // // //                   {course.descriptionOfCourse || "אין תיאור זמין לקורס זה."}
// // // //                 </Typography>
  
// // // //                 {/* מידע נוסף */}
// // // //                 <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
// // // //                   <InfoChip
// // // //                     variant="students"
// // // //                     size="small"
// // // //                     label={`${remainingSeats} מקומות`}
// // // //                   />
                  
// // // //                   <InfoChip
// // // //                     variant="time"
// // // //                     size="small"
// // // //                     label={`${course.amountOfMeetingsInCourse || 0} מפגשים`}
// // // //                   />
                  
// // // //                   <InfoChip
// // // //                     variant="price"
// // // //                     size="small"
// // // //                     label={`₪${course.totalSumOfCourse || 0}`}
// // // //                   />
// // // //                 </Box>
  
// // // //                 {/* מרצה */}
// // // //                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// // // //                   <Avatar 
// // // //                     sx={{ 
// // // //                       width: 32, 
// // // //                       height: 32, 
// // // //                       mr: 1,
// // // //                       background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
// // // //                     }}
// // // //                   >
// // // //                     {getCourseInstructor(course).charAt(0)}
// // // //                   </Avatar>
// // // //                   <Typography variant="body2" sx={{ fontWeight: 600 }}>
// // // //                     {getCourseInstructor(course)}
// // // //                   </Typography>
// // // //                 </Box>
// // // //               </CourseContent>
  
// // // //               {/* כפתורי פעולה */}
// // // //               <ActionButtons className="action-buttons">
// // // //                 <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
// // // //                   <PrimaryButton
// // // //                     fullWidth
// // // //                     onClick={() => setSelectedFunc(course.idOfCourse)}
// // // //                     startIcon={<PlayArrowIcon />}
// // // //                   >
// // // //                     צפה בפרטים
// // // //                   </PrimaryButton>
                  
// // // //                   <Tooltip title={isFavorite ? "הסר מהמועדפים" : "הוסף למועדפים"}>
// // // //                     <SecondaryButton
// // // //                       onClick={(e) => {
// // // //                         e.stopPropagation();
// // // //                         toggleFavorite(course.idOfCourse);
// // // //                       }}
// // // //                     >
// // // //                       {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
// // // //                     </SecondaryButton>
// // // //                   </Tooltip>
                  
// // // //                   <Tooltip title="שתף קורס">
// // // //                     <SecondaryButton
// // // //                       onClick={(e) => {
// // // //                         e.stopPropagation();
// // // //                         handleShare(course);
// // // //                       }}
// // // //                     >
// // // //                       <ShareIcon />
// // // //                     </SecondaryButton>
// // // //                   </Tooltip>
// // // //                 </Box>
// // // //               </ActionButtons>
// // // //             </CourseOverlay>
// // // //           </CourseCard>
// // // //         </Fade>
// // // //       );
// // // //     };
  
// // // //     return (
// // // //       <>
// // // //         {loading && (
// // // //           <Box sx={{
// // // //             display: 'flex',
// // // //             justifyContent: 'center',
// // // //             alignItems: 'center',
// // // //             position: 'fixed',
// // // //             top: 0,
// // // //             left: 0,
// // // //             right: 0,
// // // //             bottom: 0,
// // // //             backgroundColor: 'rgba(255,255,255,0.9)',
// // // //             backdropFilter: 'blur(5px)',
// // // //             zIndex: 9999
// // // //           }}>
// // // //             <Box sx={{ textAlign: 'center' }}>
// // // //               <CircularProgress size={60} thickness={4} />
// // // //               <Typography variant="h6" sx={{ mt: 2, color: 'primary.main' }}>
// // // //                 טוען קורסים...
// // // //               </Typography>
// // // //             </Box>
// // // //           </Box>
// // // //         )}
  
// // // //         {flag ? (
// // // //           <Container maxWidth="xl" sx={{ padding: 3, direction: 'rtl' }}>
// // // //             {/* כותרת ראשית */}
// // // //             <Box sx={{ mb: 4, textAlign: 'center' }}>
// // // //               <Typography 
// // // //                 variant="h3" 
// // // //                 component="h1" 
// // // //                 sx={{ 
// // // //                   mb: 2, 
// // // //                   fontWeight: 900,
// // // //                   background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
// // // //                   backgroundClip: 'text',
// // // //                   WebkitBackgroundClip: 'text',
// // // //                   WebkitTextFillColor: 'transparent',
// // // //                 }}
// // // //               >
// // // //                 הקורסים שלנו
// // // //               </Typography>
// // // //               <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
// // // //                 גלו מגוון רחב של קורסים מקצועיים ואקדמיים המותאמים לכל רמה
// // // //               </Typography>
// // // //             </Box>
  
// // // //             {/* סרגל חיפוש וסינון משופר */}
// // // //             <Box sx={{ 
// // // //               mb: 4, 
// // // //               p: 3, 
// // // //               borderRadius: '20px',
// // // //               background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
// // // //               backdropFilter: 'blur(10px)',
// // // //               border: '1px solid rgba(255,255,255,0.3)',
// // // //               boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
// // // //             }}>
// // // //               <Grid container spacing={2} alignItems="center">
// // // //                 <Grid item xs={12} md={4}>
// // // //                   <TextField
// // // //                     fullWidth
// // // //                     placeholder="חיפוש קורסים..."
// // // //                     value={searchTerm}
// // // //                     onChange={(e) => setSearchTerm(e.target.value)}
// // // //                     sx={{
// // // //                       '& .MuiOutlinedInput-root': {
// // // //                         borderRadius: '12px',
// // // //                         backgroundColor: 'white',
// // // //                       }
// // // //                     }}
// // // //                     InputProps={{
// // // //                       startAdornment: (
// // // //                         <InputAdornment position="start">
// // // //                           <SearchIcon color="primary" />
// // // //                         </InputAdornment>
// // // //                       ),
// // // //                     }}
// // // //                   />
// // // //                 </Grid>
  
// // // //                 <Grid item xs={12} md={2}>
// // // //                   <FormControl fullWidth>
// // // //                     <InputLabel>יום</InputLabel>
// // // //                     <Select
// // // //                       value={filterDay}
// // // //                       onChange={(e) => setFilterDay(e.target.value)}
// // // //                       label="יום"
// // // //                       sx={{
// // // //                         borderRadius: '12px',
// // // //                         backgroundColor: 'white',
// // // //                       }}
// // // //                     >
// // // //                       <MenuItem value="">הכל</MenuItem>
// // // //                       <MenuItem value="ראשון">ראשון</MenuItem>
// // // //                       <MenuItem value="שני">שני</MenuItem>
// // // //                       <MenuItem value="שלישי">שלישי</MenuItem>
// // // //                       <MenuItem value="רביעי">רביעי</MenuItem>
// // // //                       <MenuItem value="חמישי">חמישי</MenuItem>
// // // //                       <MenuItem value="שישי">שישי</MenuItem>
// // // //                     </Select>
// // // //                   </FormControl>
// // // //                 </Grid>
  
// // // //                 <Grid item xs={12} md={3}>
// // // //                   <FormControl fullWidth>
// // // //                     <InputLabel>מיון לפי</InputLabel>
// // // //                     <Select
// // // //                       value={sortBy}
// // // //                       onChange={(e) => setSortBy(e.target.value)}
// // // //                       label="מיון לפי"
// // // //                       sx={{
// // // //                         borderRadius: '12px',
// // // //                         backgroundColor: 'white',
// // // //                       }}
// // // //                     >
// // // //                       <MenuItem value="nameOfCourse">שם הקורס</MenuItem>
// // // //                       <MenuItem value="startDateOfCourse">תאריך התחלה</MenuItem>
// // // //                       <MenuItem value="totalSumOfCourse">מחיר</MenuItem>
// // // //                       <MenuItem value="popularity">פופולריות</MenuItem>
// // // //                     </Select>
// // // //                   </FormControl>
// // // //                 </Grid>
  
// // // //                 <Grid item xs={12} md={3}>
// // // //                   <FormControl fullWidth>
// // // //                     <InputLabel>סדר</InputLabel>
// // // //                     <Select
// // // //                       value={sortOrder}
// // // //                       onChange={(e) => setSortOrder(e.target.value)}
// // // //                       label="סדר"
// // // //                       sx={{
// // // //                         borderRadius: '12px',
// // // //                         backgroundColor: 'white',
// // // //                       }}
// // // //                     >
// // // //                       <MenuItem value="asc">עולה</MenuItem>
// // // //                       <MenuItem value="desc">יורד</MenuItem>
// // // //                     </Select>
// // // //                   </FormControl>
// // // //                 </Grid>
// // // //               </Grid>
// // // //             </Box>
  
// // // //             {/* סטטיסטיקות */}
// // // //             <Box sx={{ mb: 4 }}>
// // // //               <Grid container spacing={2}>
// // // //                 <Grid item xs={12} sm={4}>
// // // //                   <Box sx={{
// // // //                     p: 2,
// // // //                     borderRadius: '16px',
// // // //                     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // //                     color: 'white',
// // // //                     textAlign: 'center'
// // // //                   }}>
// // // //                     <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // // //                       {filteredAndSortedCourses.length}
// // // //                     </Typography>
// // // //                     <Typography variant="body2">קורסים זמינים</Typography>
// // // //                   </Box>
// // // //                 </Grid>
// // // //                 <Grid item xs={12} sm={4}>
// // // //                   <Box sx={{
// // // //                     p: 2,
// // // //                     borderRadius: '16px',
// // // //                     background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
// // // //                     color: 'white',
// // // //                     textAlign: 'center'
// // // //                   }}>
// // // //                     <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // // //                       {filteredAndSortedCourses.reduce((sum, course) => sum + course.currentAmountOfStudents, 0)}
// // // //                     </Typography>
// // // //                     <Typography variant="body2">סטודנטים רשומים</Typography>
// // // //                   </Box>
// // // //                 </Grid>
// // // //                 <Grid item xs={12} sm={4}>
// // // //                   <Box sx={{
// // // //                     p: 2,
// // // //                     borderRadius: '16px',
// // // //                     background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
// // // //                     color: 'white',
// // // //                     textAlign: 'center'
// // // //                   }}>
// // // //                     <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // // //                       {filteredAndSortedCourses.reduce((sum, course) => sum + getRemainingSeats(course), 0)}
// // // //                     </Typography>
// // // //                     <Typography variant="body2">מקומות פנויים</Typography>
// // // //                   </Box>
// // // //                 </Grid>
// // // //               </Grid>
// // // //             </Box>
  
// // // //             {/* רשת הקורסים */}
// // // //             <Grid container spacing={3}>
// // // //               {filteredAndSortedCourses.length > 0 ? (
// // // //                 filteredAndSortedCourses.map((course, index) => (
// // // //                   <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse}>
// // // //                     <CourseCardComponent course={course} index={index} />
// // // //                   </Grid>
// // // //                 ))
// // // //               ) : (
// // // //                 <Grid item xs={12}>
// // // //                   <Box sx={{ 
// // // //                     textAlign: 'center', 
// // // //                     py: 8,
// // // //                     borderRadius: '20px',
// // // //                     background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
// // // //                     backdropFilter: 'blur(10px)',
// // // //                     border: '1px solid rgba(255,255,255,0.3)',
// // // //                   }}>
// // // //                     <Box sx={{ 
// // // //                       width: 120, 
// // // //                       height: 120, 
// // // //                       mx: 'auto', 
// // // //                       mb: 3,
// // // //                       borderRadius: '50%',
// // // //                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // //                       display: 'flex',
// // // //                       alignItems: 'center',
// // // //                       justifyContent: 'center'
// // // //                     }}>
// // // //                       <SearchIcon sx={{ fontSize: 60, color: 'white' }} />
// // // //                     </Box>
// // // //                     <Typography variant="h5" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
// // // //                       לא נמצאו קורסים
// // // //                     </Typography>
// // // //                     <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
// // // //                       נסה לשנות את קריטריוני החיפוש או הסינון
// // // //                     </Typography>
// // // //                     <Button 
// // // //                       variant="outlined" 
// // // //                       onClick={() => {
// // // //                         setSearchTerm('');
// // // //                         setFilterDay('');
// // // //                       }}
// // // //                       sx={{ borderRadius: '12px' }}
// // // //                     >
// // // //                       נקה מסננים
// // // //                     </Button>
// // // //                   </Box>
// // // //                 </Grid>
// // // //               )}
// // // //             </Grid>
  
// // // //             {/* מידע נוסף */}
// // // //             {filteredAndSortedCourses.length > 0 && (
// // // //               <Box sx={{ mt: 6, textAlign: 'center' }}>
// // // //                 <Typography variant="body2" color="text.secondary">
// // // //                   מציג {filteredAndSortedCourses.length} מתוך {courses?.length || 0} קורסים
// // // //                 </Typography>
// // // //               </Box>
// // // //             )}
// // // //           </Container>
// // // //         ) : (
// // // //           <ShowCourse
// // // //             selectedCourse={selectedCourse}
// // // //             onBack={handleBack}
// // // //             onCourseUpdate={handleCourseUpdate}
// // // //           />
// // // //         )}
// // // //       </>
// // // //     );
// // // //   }
  
// // // import React, { useState, useEffect } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// // // import { ShowCourse } from '../ShowCourse/ShowCourse';
// // // import { Routing } from '../Routing/Routing';
// // // import { useNavigate } from 'react-router-dom';
// // // import {
// // //   Container,
// // //   Grid,
// // //   Card,
// // //   CardContent,
// // //   CardActions,
// // //   Typography,
// // //   Button,
// // //   Box,
// // //   Divider,
// // //   Chip,
// // //   CircularProgress,
// // //   TextField,
// // //   InputAdornment,
// // //   MenuItem,
// // //   Select,
// // //   FormControl,
// // //   CardMedia,
// // //   InputLabel,
// // //   Fade,
// // //   Skeleton,
// // //   Avatar,
// // //   IconButton,
// // //   Tooltip,
// // //   Badge
// // // } from '@mui/material';
// // // import {
// // //   Event as EventIcon,
// // //   AccessTime as AccessTimeIcon,
// // //   LocationOn as LocationOnIcon,
// // //   Search as SearchIcon,
// // //   FilterList as FilterListIcon,
// // //   Sort as SortIcon,
// // //   PersonPinCircle,
// // //   CalendarViewMonth,
// // //   Favorite as FavoriteIcon,
// // //   FavoriteBorder as FavoriteBorderIcon,
// // //   Share as ShareIcon,
// // //   Visibility as VisibilityIcon,
// // //   Star as StarIcon,
// // //   Group as GroupIcon,
// // //   TrendingUp as TrendingUpIcon,
// // //   Schedule as ScheduleIcon,
// // //   PlayArrow as PlayArrowIcon
// // // } from '@mui/icons-material';
// // // import { styled, keyframes } from '@mui/material/styles';
// // // import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';

// // // // אנימציות
// // // const shimmer = keyframes`
// // //   0% {
// // //     background-position: -468px 0;
// // //   }
// // //   100% {
// // //     background-position: 468px 0;
// // //   }
// // // `;

// // // const float = keyframes`
// // //   0%, 100% {
// // //     transform: translateY(0px);
// // //   }
// // //   50% {
// // //     transform: translateY(-10px);
// // //   }
// // // `;

// // // const pulse = keyframes`
// // //   0% {
// // //     box-shadow: 0 0 0 0 rgba(63, 81, 181, 0.7);
// // //   }
// // //   70% {
// // //     box-shadow: 0 0 0 10px rgba(63, 81, 181, 0);
// // //   }
// // //   100% {
// // //     box-shadow: 0 0 0 0 rgba(63, 81, 181, 0);
// // //   }
// // // `;

// // // // פונקציות עזר
// // // const getCourseInstructor = (course) => {
// // //   if (course.speakerName) return course.speakerName;
// // //   const instructors = ['ד"ר כהן', 'פרופ\' לוי', 'מר ישראלי', 'גב\' אברהם'];
// // //   return instructors[Math.floor(Math.random() * instructors.length)];
// // // };

// // // const getCourseCategory = (course) => {
// // //   const categories = ['אקדמי', 'מקצועי', 'העשרה', 'אמנות', 'טכנולוגיה'];
// // //   return categories[Math.floor(Math.random() * categories.length)];
// // // };

// // // const isPopularCourse = (course) => {
// // //   return course.currentAmountOfStudents > (course.amountOfStudentsInCourse * 0.7);
// // // };

// // // const getEnrollmentProgress = (course) => {
// // //   return (course.currentAmountOfStudents / course.amountOfStudentsInCourse) * 100;
// // // };

// // // const getRemainingSeats = (course) => {
// // //   return course.amountOfStudentsInCourse - course.currentAmountOfStudents;
// // // };

// // // // רכיב InfoChip פשוט
// // // const InfoChip = ({ variant, label, icon, ...props }) => {
// // //   const getVariantColor = (variant) => {
// // //     switch (variant) {
// // //       case 'students':
// // //         return '#4CAF50';
// // //       case 'time':
// // //         return '#2196F3';
// // //       case 'price':
// // //         return '#FF9800';
// // //       default:
// // //         return '#667eea';
// // //     }
// // //   };

// // //   return (
// // //     <Chip
// // //       {...props}
// // //       label={label}
// // //       icon={icon}
// // //       sx={{
// // //         background: `linear-gradient(45deg, ${getVariantColor(variant)}, ${getVariantColor(variant)}dd)`,
// // //         color: 'white',
// // //         fontWeight: 600,
// // //         fontSize: '0.875rem',
// // //         height: '32px',
// // //         borderRadius: '16px',
// // //         boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
// // //         border: '1px solid rgba(255,255,255,0.2)',
// // //         '& .MuiChip-icon': {
// // //           color: 'white',
// // //         }
// // //       }}
// // //     />
// // //   );
// // // };

// // // export function Home() {
// // //   const [selectedId, setSelectedId] = React.useState();
// // //   const [selectedCourse, setSelectedCourse] = React.useState();
// // //   const [flag, setFlag] = React.useState(true);
// // //   const [loading, setLoading] = useState(false);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [sortBy, setSortBy] = useState('nameOfCourse');
// // //   const [sortOrder, setSortOrder] = useState('asc');
// // //   const [filterDay, setFilterDay] = useState('');
// // //   const [favorites, setFavorites] = useState(new Set());

// // //   const courses = useSelector(state => state.courses.allCourses);
// // //   const dispatch = useDispatch();

// // //   useEffect(() => {
// // //     const fetchCourses = async () => {
// // //       setLoading(true);
// // //       try {
// // //         await dispatch(getCoursesThunk());
// // //       } catch (error) {
// // //         console.error("Error fetching courses:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchCourses();
// // //   }, [dispatch]);

// // //   const toggleFavorite = (courseId) => {
// // //     const newFavorites = new Set(favorites);
// // //     if (newFavorites.has(courseId)) {
// // //       newFavorites.delete(courseId);
// // //     } else {
// // //       newFavorites.add(courseId);
// // //     }
// // //     setFavorites(newFavorites);
// // //   };

// // //   const handleShare = (course) => {
// // //     if (navigator.share) {
// // //       navigator.share({
// // //         title: course.nameOfCourse,
// // //         text: course.descriptionOfCourse,
// // //         url: window.location.href,
// // //       });
// // //     } else {
// // //       navigator.clipboard.writeText(window.location.href);
// // //     }
// // //   };

// // //   async function setSelectedFunc(id) {
// // //     try {
// // //       setLoading(true);
// // //       const tempCourse = await dispatch(getCourseByCourseIdThunk(id));
// // //       setSelectedId(tempCourse.payload.idOfCourse);
// // //       setSelectedCourse(tempCourse.payload);
// // //       setFlag(false);
// // //     }
// // //     catch (error) {
// // //       console.error("Error fetching course details:", error);
// // //     }
// // //     finally {
// // //       setLoading(false);
// // //     }
// // //   }

// // //   const handleBack = () => {
// // //     setFlag(true);
// // //   };

// // //   const handleCourseUpdate = (updatedCourse) => {
// // //     setSelectedCourse(updatedCourse);
// // //   };

// // //   // Filter and sort courses
// // //   const filteredAndSortedCourses = React.useMemo(() => {
// // //     if (!courses) return [];

// // //     return [...courses]
// // //       .filter(course => {
// // //         const matchesSearch = course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //           course.descriptionOfCourse?.toLowerCase().includes(searchTerm.toLowerCase());

// // //         const matchesDay = !filterDay || course.dayOfCourse === filterDay;

// // //         return matchesSearch && matchesDay;
// // //       })
// // //       .sort((a, b) => {
// // //         let comparison = 0;

// // //         if (sortBy === 'nameOfCourse') {
// // //           comparison = a.nameOfCourse?.localeCompare(b.nameOfCourse);
// // //         } else if (sortBy === 'startDateOfCourse') {
// // //           comparison = new Date(a.startDateOfCourse) - new Date(b.startDateOfCourse);
// // //         } else if (sortBy === 'totalSumOfCourse') {
// // //           comparison = a.totalSumOfCourse - b.totalSumOfCourse;
// // //         } else if (sortBy === 'popularity') {
// // //           comparison = getEnrollmentProgress(b) - getEnrollmentProgress(a);
// // //         }

// // //         return sortOrder === 'asc' ? comparison : -comparison;
// // //       });
// // //   }, [courses, searchTerm, filterDay, sortBy, sortOrder]);

// // //   // רכיב כרטיס קורס פשוט
// // //   const CourseCardComponent = ({ course, index }) => {
// // //     const isPopular = isPopularCourse(course);
// // //     const progress = getEnrollmentProgress(course);
// // //     const remainingSeats = getRemainingSeats(course);
// // //     const isFavorite = favorites.has(course.idOfCourse);

// // //     return (
// // //       <Fade in={true} timeout={300 + index * 100}>
// // //         <Card
// // //           sx={{
// // //             borderRadius: '24px',
// // //             overflow: 'hidden',
// // //             position: 'relative',
// // //             height: '420px',
// // //             cursor: 'pointer',
// // //             boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
// // //             transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
// // //             backgroundImage: course.image 
// // //               ? `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%), url(https://localhost:7092${course.image})`
// // //               : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // //             backgroundSize: 'cover',
// // //             backgroundPosition: 'center',
// // //             border: isPopular ? '3px solid #FF9800' : 'none',
            
// // //             '&:hover': {
// // //               transform: 'translateY(-12px) scale(1.02)',
// // //               boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
// // //             },
            
// // //             ...(isPopular && {
// // //               animation: `${pulse} 2s infinite`,
// // //             }),
// // //           }}
// // //         >
// // //           {/* תג פופולרי */}
// // //           {isPopular && (
// // //             <Chip
// // //               label="פופולרי"
// // //               icon={<StarIcon />}
// // //               size="small"
// // //               sx={{
// // //                 position: 'absolute',
// // //                 top: 16,
// // //                 left: 16,
// // //                 zIndex: 3,
// // //                 background: 'linear-gradient(45deg, #FF9800, #F57C00)',
// // //                 color: 'white',
// // //                 fontWeight: 700,
// // //                 fontSize: '0.75rem',
// // //                 animation: `${float} 3s ease-in-out infinite`,
// // //                 boxShadow: '0 4px 12px rgba(255, 193, 7, 0.4)',
// // //               }}
// // //             />
// // //           )}

// // //           {/* תג קטגוריה */}
// // //           <Chip
// // //             label={getCourseCategory(course)}
// // //             size="small"
// // //             sx={{
// // //               position: 'absolute',
// // //               top: 16,
// // //               right: 16,
// // //               zIndex: 3,
// // //               background: 'linear-gradient(45deg, #3f51b5, #303f9f)',
// // //               color: 'white',
// // //               fontWeight: 600,
// // //               backdropFilter: 'blur(10px)',
// // //               border: '1px solid rgba(255,255,255,0.2)',
// // //             }}
// // //           />

// // //           {/* מחוון התקדמות */}
// // //           <Box
// // //             sx={{
// // //               position: 'absolute',
// // //               bottom: 0,
// // //               left: 0,
// // //               height: '4px',
// // //               width: `${progress}%`,
// // //               background: 'linear-gradient(90deg, #4CAF50, #8BC34A)',
// // //               transition: 'width 0.3s ease',
// // //               zIndex: 3,
// // //             }}
// // //           />

// // //           {/* תוכן הכרטיס */}
// // //           <Box
// // //             sx={{
// // //               position: 'absolute',
// // //               top: 0,
// // //               left: 0,
// // //               right: 0,
// // //               bottom: 0,
// // //               zIndex: 2,
// // //               display: 'flex',
// // //               flexDirection: 'column',
// // //               justifyContent: 'space-between',
// // //               padding: 3,
// // //               color: 'white',
// // //             }}
// // //           >
// // //             <Box>
// // //               {/* כותרת הקורס */}
// // //               <Typography 
// // //                 variant="h5" 
// // //                 component="h2" 
// // //                 gutterBottom 
// // //                 sx={{ 
// // //                   fontWeight: 800,
// // //                   fontSize: '1.5rem',
// // //                   lineHeight: 1.2,
// // //                   mb: 2,
// // //                   textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
// // //                 }}
// // //               >
// // //                 {course.nameOfCourse}
// // //               </Typography>

// // //               {/* מידע בסיסי */}
// // //               <Box sx={{ mb: 2 }}>
// // //                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// // //                   <EventIcon sx={{ mr: 1, fontSize: '1.1rem' }} />
// // //                   <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
// // //                     {course.startDateOfCourse || "בקרוב"}
// // //                   </Typography>
// // //                 </Box>

// // //                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// // //                   <AccessTimeIcon sx={{ mr: 1, fontSize: '1.1rem' }} />
// // //                   <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
// // //                     {course.dayOfCourse || "לא צוין"} • {course.hourOfCourse || ""}
// // //                   </Typography>
// // //                 </Box>

// // //                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// // //                   <LocationOnIcon sx={{ mr: 1, fontSize: '1.1rem' }} />
// // //                   <Typography variant="body2" noWrap sx={{ fontSize: '0.9rem' }}>
// // //                     {course.placeOfCourse || "לא צוין"}
// // //                   </Typography>
// // //                 </Box>
// // //               </Box>

// // //               {/* תיאור הקורס */}
// // //               <Typography
// // //                 variant="body2"
// // //                 sx={{
// // //                   mb: 2,
// // //                   overflow: 'hidden',
// // //                   textOverflow: 'ellipsis',
// // //                   display: '-webkit-box',
// // //                   WebkitLineClamp: 2,
// // //                   WebkitBoxOrient: 'vertical',
// // //                   height: '2.8em',
// // //                   fontSize: '0.875rem',
// // //                   lineHeight: 1.4,
// // //                   opacity: 0.9
// // //                 }}
// // //                 >
// // //                 {course.descriptionOfCourse || "אין תיאור זמין לקורס זה."}
// // //               </Typography>

// // //               {/* מידע נוסף */}
// // //               <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
// // //                 <InfoChip
// // //                   variant="students"
// // //                   size="small"
// // //                   label={`${remainingSeats} מקומות`}
// // //                   icon={<GroupIcon sx={{ color: 'white !important' }} />}
// // //                 />
                
// // //                 <InfoChip
// // //                   variant="time"
// // //                   size="small"
// // //                   label={`${course.amountOfMeetingsInCourse || 0} מפגשים`}
// // //                   icon={<ScheduleIcon sx={{ color: 'white !important' }} />}
// // //                 />
                
// // //                 <InfoChip
// // //                   variant="price"
// // //                   size="small"
// // //                   label={`₪${course.totalSumOfCourse || 0}`}
// // //                   icon={<TrendingUpIcon sx={{ color: 'white !important' }} />}
// // //                 />
// // //               </Box>

// // //               {/* מרצה */}
// // //               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// // //                 <Avatar 
// // //                   sx={{ 
// // //                     width: 32, 
// // //                     height: 32, 
// // //                     mr: 1,
// // //                     background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
// // //                   }}
// // //                 >
// // //                   {getCourseInstructor(course).charAt(0)}
// // //                 </Avatar>
// // //                 <Typography variant="body2" sx={{ fontWeight: 600 }}>
// // //                   {getCourseInstructor(course)}
// // //                 </Typography>
// // //               </Box>
// // //             </Box>

// // //             {/* כפתורי פעולה */}
// // //             <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
// // //               <Button
// // //                 fullWidth
// // //                 onClick={() => setSelectedFunc(course.idOfCourse)}
// // //                 startIcon={<PlayArrowIcon />}
// // //                 sx={{
// // //                   borderRadius: '12px',
// // //                   padding: '12px 24px',
// // //                   background: 'linear-gradient(45deg, #3f51b5, #303f9f)',
// // //                   color: 'white',
// // //                   fontWeight: 700,
// // //                   textTransform: 'none',
// // //                   fontSize: '1rem',
// // //                   boxShadow: '0 4px 15px rgba(63, 81, 181, 0.4)',
// // //                   transition: 'all 0.3s ease',
                  
// // //                   '&:hover': {
// // //                     background: 'linear-gradient(45deg, #303f9f, #3f51b5)',
// // //                     transform: 'translateY(-2px)',
// // //                     boxShadow: '0 6px 20px rgba(63, 81, 181, 0.6)',
// // //                   }
// // //                 }}
// // //               >
// // //                 צפה בפרטים
// // //               </Button>
              
// // //               <Tooltip title={isFavorite ? "הסר מהמועדפים" : "הוסף למועדפים"}>
// // //                 <IconButton
// // //                   onClick={(e) => {
// // //                     e.stopPropagation();
// // //                     toggleFavorite(course.idOfCourse);
// // //                   }}
// // //                   sx={{
// // //                     backgroundColor: 'rgba(255,255,255,0.9)',
// // //                     color: '#3f51b5',
// // //                     backdropFilter: 'blur(10px)',
// // //                     border: '1px solid rgba(255,255,255,0.3)',
// // //                     transition: 'all 0.3s ease',
                    
// // //                     '&:hover': {
// // //                       backgroundColor: 'white',
// // //                       transform: 'scale(1.1)',
// // //                       boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
// // //                     }
// // //                   }}
// // //                 >
// // //                   {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
// // //                 </IconButton>
// // //               </Tooltip>
              
// // //               <Tooltip title="שתף קורס">
// // //                 <IconButton
// // //                   onClick={(e) => {
// // //                     e.stopPropagation();
// // //                     handleShare(course);
// // //                   }}
// // //                   sx={{
// // //                     backgroundColor: 'rgba(255,255,255,0.9)',
// // //                     color: '#3f51b5',
// // //                     backdropFilter: 'blur(10px)',
// // //                     border: '1px solid rgba(255,255,255,0.3)',
// // //                     transition: 'all 0.3s ease',
                    
// // //                     '&:hover': {
// // //                       backgroundColor: 'white',
// // //                       transform: 'scale(1.1)',
// // //                       boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
// // //                     }
// // //                   }}
// // //                 >
// // //                   <ShareIcon />
// // //                 </IconButton>
// // //               </Tooltip>
// // //             </Box>
// // //           </Box>
// // //         </Card>
// // //       </Fade>
// // //     );
// // //   };

// // //   return (
// // //     <>
// // //       {loading && (
// // //         <Box sx={{
// // //           display: 'flex',
// // //           justifyContent: 'center',
// // //           alignItems: 'center',
// // //           position: 'fixed',
// // //           top: 0,
// // //           left: 0,
// // //           right: 0,
// // //           bottom: 0,
// // //           backgroundColor: 'rgba(255,255,255,0.9)',
// // //           backdropFilter: 'blur(5px)',
// // //           zIndex: 9999
// // //         }}>
// // //           <Box sx={{ textAlign: 'center' }}>
// // //             <CircularProgress size={60} thickness={4} />
// // //             <Typography variant="h6" sx={{ mt: 2, color: 'primary.main' }}>
// // //               טוען קורסים...
// // //             </Typography>
// // //           </Box>
// // //         </Box>
// // //       )}

// // //       {flag ? (
// // //         <Container maxWidth="xl" sx={{ padding: 3, direction: 'rtl' }}>
// // //           {/* כותרת ראשית */}
// // //           <Box sx={{ mb: 4, textAlign: 'center' }}>
// // //             <Typography 
// // //               variant="h3" 
// // //               component="h1" 
// // //               sx={{ 
// // //                 mb: 2, 
// // //                 fontWeight: 900,
// // //                 background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
// // //                 backgroundClip: 'text',
// // //                 WebkitBackgroundClip: 'text',
// // //                 WebkitTextFillColor: 'transparent',
// // //               }}
// // //             >
// // //               הקורסים שלנו
// // //             </Typography>
// // //             <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
// // //               גלו מגוון רחב של קורסים מקצועיים ואקדמיים המותאמים לכל רמה
// // //             </Typography>
// // //           </Box>

// // //           {/* סרגל חיפוש וסינון */}
// // //           <Box sx={{ 
// // //             mb: 4, 
// // //             p: 3, 
// // //             borderRadius: '20px',
// // //             background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
// // //             backdropFilter: 'blur(10px)',
// // //             border: '1px solid rgba(255,255,255,0.3)',
// // //             boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
// // //           }}>
// // //             <Grid container spacing={2} alignItems="center">
// // //               <Grid item xs={12} md={4}>
// // //                 <TextField
// // //                   fullWidth
// // //                   placeholder="חיפוש קורסים..."
// // //                   value={searchTerm}
// // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // //                   sx={{
// // //                     '& .MuiOutlinedInput-root': {
// // //                       borderRadius: '12px',
// // //                       backgroundColor: 'white',
// // //                     }
// // //                   }}
// // //                   InputProps={{
// // //                     startAdornment: (
// // //                       <InputAdornment position="start">
// // //                         <SearchIcon color="primary" />
// // //                       </InputAdornment>
// // //                     ),
// // //                   }}
// // //                 />
// // //               </Grid>

// // //               <Grid item xs={12} md={2}>
// // //                 <FormControl fullWidth>
// // //                   <InputLabel>יום</InputLabel>
// // //                   <Select
// // //                     value={filterDay}
// // //                     onChange={(e) => setFilterDay(e.target.value)}
// // //                     label="יום"
// // //                     sx={{
// // //                       borderRadius: '12px',
// // //                       backgroundColor: 'white',
// // //                     }}
// // //                   >
// // //                     <MenuItem value="">הכל</MenuItem>
// // //                     <MenuItem value="ראשון">ראשון</MenuItem>
// // //                     <MenuItem value="שני">שני</MenuItem>
// // //                     <MenuItem value="שלישי">שלישי</MenuItem>
// // //                     <MenuItem value="רביעי">רביעי</MenuItem>
// // //                     <MenuItem value="חמישי">חמישי</MenuItem>
// // //                     <MenuItem value="שישי">שישי</MenuItem>
// // //                   </Select>
// // //                 </FormControl>
// // //               </Grid>

// // //               <Grid item xs={12} md={3}>
// // //                 <FormControl fullWidth>
// // //                   <InputLabel>מיון לפי</InputLabel>
// // //                   <Select
// // //                     value={sortBy}
// // //                     onChange={(e) => setSortBy(e.target.value)}
// // //                     label="מיון לפי"
// // //                     sx={{
// // //                       borderRadius: '12px',
// // //                       backgroundColor: 'white',
// // //                     }}
// // //                   >
// // //                     <MenuItem value="nameOfCourse">שם הקורס</MenuItem>
// // //                     <MenuItem value="startDateOfCourse">תאריך התחלה</MenuItem>
// // //                     <MenuItem value="totalSumOfCourse">מחיר</MenuItem>
// // //                     <MenuItem value="popularity">פופולריות</MenuItem>
// // //                   </Select>
// // //                 </FormControl>
// // //               </Grid>

// // //               <Grid item xs={12} md={3}>
// // //                 <FormControl fullWidth>
// // //                   <InputLabel>סדר</InputLabel>
// // //                   <Select
// // //                     value={sortOrder}
// // //                     onChange={(e) => setSortOrder(e.target.value)}
// // //                     label="סדר"
// // //                     sx={{
// // //                       borderRadius: '12px',
// // //                       backgroundColor: 'white',
// // //                     }}
// // //                   >
// // //                     <MenuItem value="asc">עולה</MenuItem>
// // //                     <MenuItem value="desc">יורד</MenuItem>
// // //                   </Select>
// // //                 </FormControl>
// // //               </Grid>
// // //             </Grid>
// // //           </Box>

// // //           {/* סטטיסטיקות */}
// // //           <Box sx={{ mb: 4 }}>
// // //             <Grid container spacing={2}>
// // //               <Grid item xs={12} sm={4}>
// // //                 <Box sx={{
// // //                   p: 2,
// // //                   borderRadius: '16px',
// // //                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // //                   color: 'white',
// // //                   textAlign: 'center'
// // //                 }}>
// // //                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // //                     {filteredAndSortedCourses.length}
// // //                   </Typography>
// // //                   <Typography variant="body2">קורסים זמינים</Typography>
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={12} sm={4}>
// // //                 <Box sx={{
// // //                   p: 2,
// // //                   borderRadius: '16px',
// // //                   background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
// // //                   color: 'white',
// // //                   textAlign: 'center'
// // //                 }}>
// // //                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // //                     {filteredAndSortedCourses.reduce((sum, course) => sum + (course.currentAmountOfStudents || 0), 0)}
// // //                   </Typography>
// // //                   <Typography variant="body2">סטודנטים רשומים</Typography>
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={12} sm={4}>
// // //                 <Box sx={{
// // //                   p: 2,
// // //                   borderRadius: '16px',
// // //                   background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
// // //                   color: 'white',
// // //                   textAlign: 'center'
// // //                 }}>
// // //                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // //                     {filteredAndSortedCourses.reduce((sum, course) => sum + getRemainingSeats(course), 0)}
// // //                   </Typography>
// // //                   <Typography variant="body2">מקומות פנויים</Typography>
// // //                 </Box>
// // //               </Grid>
// // //             </Grid>
// // //           </Box>

// // //           {/* רשת הקורסים */}
// // //           <Grid container spacing={3}>
// // //             {filteredAndSortedCourses.length > 0 ? (
// // //               filteredAndSortedCourses.map((course, index) => (
// // //                 <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse}>
// // //                   <CourseCardComponent course={course} index={index} />
// // //                 </Grid>
// // //               ))
// // //             ) : (
// // //               <Grid item xs={12}>
// // //                 <Box sx={{ 
// // //                   textAlign: 'center', 
// // //                   py: 8,
// // //                   borderRadius: '20px',
// // //                   background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
// // //                   backdropFilter: 'blur(10px)',
// // //                   border: '1px solid rgba(255,255,255,0.3)',
// // //                 }}>
// // //                   <Box sx={{ 
// // //                     width: 120, 
// // //                     height: 120, 
// // //                     mx: 'auto', 
// // //                     mb: 3,
// // //                     borderRadius: '50%',
// // //                     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // //                     display: 'flex',
// // //                     alignItems: 'center',
// // //                     justifyContent: 'center'
// // //                   }}>
// // //                     <SearchIcon sx={{ fontSize: 60, color: 'white' }} />
// // //                   </Box>
// // //                   <Typography variant="h5" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
// // //                     לא נמצאו קורסים
// // //                   </Typography>
// // //                   <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
// // //                     נסה לשנות את קריטריוני החיפוש או הסינון
// // //                   </Typography>
// // //                   <Button 
// // //                     variant="outlined" 
// // //                     onClick={() => {
// // //                       setSearchTerm('');
// // //                       setFilterDay('');
// // //                     }}
// // //                     sx={{ borderRadius: '12px' }}
// // //                   >
// // //                     נקה מסננים
// // //                   </Button>
// // //                 </Box>
// // //               </Grid>
// // //             )}
// // //           </Grid>

// // //           {/* מידע נוסף */}
// // //           {/* {filteredAndSortedCour */}
// // //                       {/* מידע נוסף */}
// // //           {filteredAndSortedCourses.length > 0 && (
// // //             <Box sx={{ mt: 6, textAlign: 'center' }}>
// // //               <Typography variant="body2" color="text.secondary">
// // //                 מציג {filteredAndSortedCourses.length} מתוך {courses?.length || 0} קורסים
// // //               </Typography>
// // //             </Box>
// // //           )}
// // //         </Container>
// // //       ) : (
// // //         <ShowCourse
// // //           selectedCourse={selectedCourse}
// // //           onBack={handleBack}
// // //           onCourseUpdate={handleCourseUpdate}
// // //         />
// // //       )}
// // //     </>
// // //   );
// // // }

// // import React, { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// // import { ShowCourse } from '../ShowCourse/ShowCourse';
// // import { Routing } from '../Routing/Routing';
// // import { useNavigate } from 'react-router-dom';
// // import {
// //   Container,
// //   Grid,
// //   Card,
// //   CardContent,
// //   CardActions,
// //   Typography,
// //   Button,
// //   Box,
// //   Divider,
// //   Chip,
// //   CircularProgress,
// //   TextField,
// //   InputAdornment,
// //   MenuItem,
// //   Select,
// //   FormControl,
// //   CardMedia,
// //   InputLabel,
// //   Fade,
// //   Skeleton,
// //   Avatar,
// //   IconButton,
// //   Tooltip,
// //   Badge
// // } from '@mui/material';
// // import {
// //   Event as EventIcon,
// //   AccessTime as AccessTimeIcon,
// //   LocationOn as LocationOnIcon,
// //   Search as SearchIcon,
// //   FilterList as FilterListIcon,
// //   Sort as SortIcon,
// //   PersonPinCircle,
// //   CalendarViewMonth,
// //   Favorite as FavoriteIcon,
// //   FavoriteBorder as FavoriteBorderIcon,
// //   Share as ShareIcon,
// //   Visibility as VisibilityIcon,
// //   Star as StarIcon,
// //   Group as GroupIcon,
// //   TrendingUp as TrendingUpIcon,
// //   Schedule as ScheduleIcon,
// //   PlayArrow as PlayArrowIcon
// // } from '@mui/icons-material';
// // import { styled, keyframes } from '@mui/material/styles';
// // import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';

// // // פונקציות עזר
// // const getCourseInstructor = (course) => {
// //   if (course.speakerName) return course.speakerName;
// //   const instructors = ['ד"ר כהן', 'פרופ\' לוי', 'מר ישראלי', 'גב\' אברהם'];
// //   return instructors[Math.floor(Math.random() * instructors.length)];
// // };

// // const getCourseCategory = (course) => {
// //   const categories = ['אקדמי', 'מקצועי', 'העשרה', 'אמנות', 'טכנולוגיה'];
// //   return categories[Math.floor(Math.random() * categories.length)];
// // };

// // const isPopularCourse = (course) => {
// //   if (!course.currentAmountOfStudents || !course.amountOfStudentsInCourse) return false;
// //   return course.currentAmountOfStudents > (course.amountOfStudentsInCourse * 0.7);
// // };

// // const getEnrollmentProgress = (course) => {
// //   if (!course.currentAmountOfStudents || !course.amountOfStudentsInCourse) return 0;
// //   return (course.currentAmountOfStudents / course.amountOfStudentsInCourse) * 100;
// // };

// // const getRemainingSeats = (course) => {
// //   if (!course.currentAmountOfStudents || !course.amountOfStudentsInCourse) return 0;
// //   return course.amountOfStudentsInCourse - course.currentAmountOfStudents;
// // };

// // // רכיב InfoChip פשוט
// // const InfoChip = ({ variant, label, icon, ...props }) => {
// //   const getVariantColor = (variant) => {
// //     switch (variant) {
// //       case 'students':
// //         return '#4CAF50';
// //       case 'time':
// //         return '#2196F3';
// //       case 'price':
// //         return '#FF9800';
// //       default:
// //         return '#667eea';
// //     }
// //   };

// //   return (
// //     <Chip
// //       {...props}
// //       label={label}
// //       icon={icon}
// //       sx={{
// //         background: `linear-gradient(45deg, ${getVariantColor(variant)}, ${getVariantColor(variant)}dd)`,
// //         color: 'white',
// //         fontWeight: 600,
// //         fontSize: '0.875rem',
// //         height: '32px',
// //         borderRadius: '16px',
// //         boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
// //         border: '1px solid rgba(255,255,255,0.2)',
// //         '& .MuiChip-icon': {
// //           color: 'white',
// //         }
// //       }}
// //     />
// //   );
// // };

// // export function Home() {
// //   const [selectedId, setSelectedId] = React.useState();
// //   const [selectedCourse, setSelectedCourse] = React.useState();
// //   const [flag, setFlag] = React.useState(true);
// //   const [loading, setLoading] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [sortBy, setSortBy] = useState('nameOfCourse');
// //   const [sortOrder, setSortOrder] = useState('asc');
// //   const [filterDay, setFilterDay] = useState('');
// //   const [favorites, setFavorites] = useState(new Set());

// //   // תיקון: נסה לקבל קורסים מכל המקומות האפשריים
// //   const coursesFromAllCourses = useSelector(state => state.courses.allCourses);
// //   const coursesFromCourses = useSelector(state => state.courses.allCourses);
  
// //   // בחר את המערך שלא ריק
// //   const courses = coursesFromAllCourses && coursesFromAllCourses.length > 0 
// //     ? coursesFromAllCourses 
// //     : coursesFromCourses || [];

// //   const dispatch = useDispatch();

// //   // הוסף לוגים לבדיקה
// //   console.log("Home component - coursesFromAllCourses:", coursesFromAllCourses);
// //   console.log("Home component - coursesFromCourses:", coursesFromCourses);
// //   console.log("Home component - final courses:", courses);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       setLoading(true);
// //       try {
// //         console.log("Home: Fetching courses...");
// //         await dispatch(getCoursesThunk());
// //         console.log("Home: Courses fetched successfully");
// //       } catch (error) {
// //         console.error("Home: Error fetching courses:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCourses();
// //   }, [dispatch]);

// //   const toggleFavorite = (courseId) => {
// //     const newFavorites = new Set(favorites);
// //     if (newFavorites.has(courseId)) {
// //       newFavorites.delete(courseId);
// //     } else {
// //       newFavorites.add(courseId);
// //     }
// //     setFavorites(newFavorites);
// //   };

// //   const handleShare = (course) => {
// //     if (navigator.share) {
// //       navigator.share({
// //         title: course.nameOfCourse,
// //         text: course.descriptionOfCourse,
// //         url: window.location.href,
// //       });
// //     } else {
// //       navigator.clipboard.writeText(window.location.href);
// //     }
// //   };

// //   async function setSelectedFunc(id) {
// //     try {
// //       setLoading(true);
// //       console.log("Home: Selecting course with ID:", id);
// //       const tempCourse = await dispatch(getCourseByCourseIdThunk(id));
// //       if (tempCourse && tempCourse.payload) {
// //         setSelectedId(tempCourse.payload.idOfCourse);
// //         setSelectedCourse(tempCourse.payload);
// //         setFlag(false);
// //       }
// //     }
// //     catch (error) {
// //       console.error("Home: Error fetching course details:", error);
// //     }
// //     finally {
// //       setLoading(false);
// //     }
// //   }

// //   const handleBack = () => {
// //     setFlag(true);
// //   };

// //   const handleCourseUpdate = (updatedCourse) => {
// //     setSelectedCourse(updatedCourse);
// //   };

// //   // Filter and sort courses
// //   const filteredAndSortedCourses = React.useMemo(() => {
// //     console.log("Home: Filtering courses, input:", courses);
    
// //     if (!courses || !Array.isArray(courses) || courses.length === 0) {
// //       console.log("Home: No courses to filter");
// //       return [];
// //     }

// //     const filtered = courses.filter(course => {
// //       if (!course) return false;
      
// //       const matchesSearch = !searchTerm || 
// //         (course.nameOfCourse && course.nameOfCourse.toLowerCase().includes(searchTerm.toLowerCase())) ||
// //         (course.descriptionOfCourse && course.descriptionOfCourse.toLowerCase().includes(searchTerm.toLowerCase()));

// //       const matchesDay = !filterDay || course.dayOfCourse === filterDay;

// //       return matchesSearch && matchesDay;
// //     });

// //     const sorted = filtered.sort((a, b) => {
// //       let comparison = 0;

// //       if (sortBy === 'nameOfCourse') {
// //         comparison = (a.nameOfCourse || '').localeCompare(b.nameOfCourse || '');
// //       } else if (sortBy === 'startDateOfCourse') {
// //         comparison = new Date(a.startDateOfCourse || 0) - new Date(b.startDateOfCourse || 0);
// //       } else if (sortBy === 'totalSumOfCourse') {
// //         comparison = (a.totalSumOfCourse || 0) - (b.totalSumOfCourse || 0);
// //       } else if (sortBy === 'popularity') {
// //         comparison = getEnrollmentProgress(b) - getEnrollmentProgress(a);
// //       }

// //       return sortOrder === 'asc' ? comparison : -comparison;
// //     });

// //     console.log("Home: Filtered and sorted courses:", sorted);
// //     return sorted;
// //   }, [courses, searchTerm, filterDay, sortBy, sortOrder]);

// //   // רכיב כרטיס קורס
// //   const CourseCardComponent = ({ course, index }) => {
// //     if (!course) return null;

// //     const isPopular = isPopularCourse(course);
// //     const progress = getEnrollmentProgress(course);
// //     const remainingSeats = getRemainingSeats(course);
// //     const isFavorite = favorites.has(course.idOfCourse);

// //     return (
// //       <Fade in={true} timeout={300 + index * 100}>
// //         <Card
// //           sx={{
// //             borderRadius: '24px',
// //             overflow: 'hidden',
// //             position: 'relative',
// //             height: '420px',
// //             cursor: 'pointer',
// //             boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
// //             transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
// //             backgroundImage: course.image 
// //               ? `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%), url(https://localhost:7092${course.image})`
// //               : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //             border: isPopular ? '3px solid #FF9800' : 'none',
            
// //             '&:hover': {
// //               transform: 'translateY(-12px) scale(1.02)',
// //               boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
// //             },
// //           }}
// //         >
// //           {/* תג פופולרי */}
// //           {isPopular && (
// //             <Chip
// //               label="פופולרי"
// //               icon={<StarIcon />}
// //               size="small"
// //               sx={{
// //                 position: 'absolute',
// //                 top: 16,
// //                 left: 16,
// //                 zIndex: 3,
// //                 background: 'linear-gradient(45deg, #FF9800, #F57C00)',
// //                 color: 'white',
// //                 fontWeight: 700,
// //                 fontSize: '0.75rem',
// //                 boxShadow: '0 4px 12px rgba(255, 193, 7, 0.4)',
// //               }}
// //             />
// //           )}

// //           {/* תג קטגוריה */}
// //           <Chip
// //             label={getCourseCategory(course)}
// //             size="small"
// //             sx={{
// //               position: 'absolute',
// //               top: 16,
// //               right: 16,
// //               zIndex: 3,
// //               background: 'linear-gradient(45deg, #3f51b5, #303f9f)',
// //               color: 'white',
// //               fontWeight: 600,
// //               backdropFilter: 'blur(10px)',
// //               border: '1px solid rgba(255,255,255,0.2)',
// //             }}
// //           />

// //           {/* מחוון התקדמות */}
// //           <Box
// //             sx={{
// //               position: 'absolute',
// //               bottom: 0,
// //               left: 0,
// //               height: '4px',
// //               width: `${progress}%`,
// //               background: 'linear-gradient(90deg, #4CAF50, #8BC34A)',
// //               transition: 'width 0.3s ease',
// //               zIndex: 3,
// //             }}
// //           />

// //           {/* תוכן הכרטיס */}
// //           <Box
// //             sx={{
// //               position: 'absolute',
// //               top: 0,
// //               left: 0,
// //               right: 0,
// //               bottom: 0,
// //               zIndex: 2,
// //               display: 'flex',
// //               flexDirection: 'column',
// //               justifyContent: 'space-between',
// //               padding: 3,
// //               color: 'white',
// //             }}
// //           >
// //             <Box>
// //               {/* כותרת הקורס */}
// //               <Typography 
// //                 variant="h5" 
// //                 component="h2" 
// //                 gutterBottom 
// //                 sx={{ 
// //                   fontWeight: 800,
// //                   fontSize: '1.5rem',
// //                   lineHeight: 1.2,
// //                   mb: 2,
// //                   textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
// //                 }}
// //               >
// //                 {course.nameOfCourse || 'קורס ללא שם'}
// //               </Typography>

// //               {/* מידע בסיסי */}
// //               <Box sx={{ mb: 2 }}>
// //                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// //                   <EventIcon sx={{ mr: 1, fontSize: '1.1rem' }} />
// //                   <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
// //                     {course.startDateOfCourse || "בקרוב"}
// //                   </Typography>
// //                 </Box>

// //                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// //                   <AccessTimeIcon sx={{ mr: 1, fontSize: '1.1rem' }} />
// //                   <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
// //                    {/* </Typography>{course.dayOfCourse || "לא צוין" */}
// //                   {course.hourOfCourse || ""}
// //                   </Typography>
// //                 </Box>

// //                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// //                   <LocationOnIcon sx={{ mr: 1, fontSize: '1.1rem' }} />
// //                   <Typography variant="body2" noWrap sx={{ fontSize: '0.9rem' }}>
// //                     {course.placeOfCourse || "לא צוין"}
// //                   </Typography>
// //                 </Box>
// //               </Box>

// //               {/* תיאור הקורס */}
// //               <Typography
// //                 variant="body2"
// //                 sx={{
// //                   mb: 2,
// //                   overflow: 'hidden',
// //                   textOverflow: 'ellipsis',
// //                   display: '-webkit-box',
// //                   WebkitLineClamp: 2,
// //                   WebkitBoxOrient: 'vertical',
// //                   height: '2.8em',
// //                   fontSize: '0.875rem',
// //                   lineHeight: 1.4,
// //                   opacity: 0.9
// //                 }}
// //               >
// //                 {course.descriptionOfCourse || "אין תיאור זמין לקורס זה."}
// //               </Typography>

// //               {/* מידע נוסף */}
// //               <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
// //                 <InfoChip
// //                   variant="students"
// //                   size="small"
// //                   label={`${remainingSeats} מקומות`}
// //                   icon={<GroupIcon sx={{ color: 'white !important' }} />}
// //                 />
                
// //                 <InfoChip
// //                   variant="time"
// //                   size="small"
// //                   label={`${course.amountOfMeetingsInCourse || 0} מפגשים`}
// //                   icon={<ScheduleIcon sx={{ color: 'white !important' }} />}
// //                 />
                
// //                 <InfoChip
// //                   variant="price"
// //                   size="small"
// //                   label={`₪${course.totalSumOfCourse || 0}`}
// //                   icon={<TrendingUpIcon sx={{ color: 'white !important' }} />}
// //                 />
// //               </Box>

// //               {/* מרצה */}
// //               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //                 <Avatar 
// //                   sx={{ 
// //                     width: 32, 
// //                     height: 32, 
// //                     mr: 1,
// //                     background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
// //                   }}
// //                 >
// //                   {getCourseInstructor(course).charAt(0)}
// //                 </Avatar>
// //                 <Typography variant="body2" sx={{ fontWeight: 600 }}>
// //                   {getCourseInstructor(course)}
// //                 </Typography>
// //               </Box>
// //             </Box>

// //             {/* כפתורי פעולה */}
// //             <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
// //               <Button
// //                 fullWidth
// //                 onClick={() => setSelectedFunc(course.idOfCourse)}
// //                 startIcon={<PlayArrowIcon />}
// //                 sx={{
// //                   borderRadius: '12px',
// //                   padding: '12px 24px',
// //                   background: 'linear-gradient(45deg, #3f51b5, #303f9f)',
// //                   color: 'white',
// //                   fontWeight: 700,
// //                   textTransform: 'none',
// //                   fontSize: '1rem',
// //                   boxShadow: '0 4px 15px rgba(63, 81, 181, 0.4)',
// //                   transition: 'all 0.3s ease',
                  
// //                   '&:hover': {
// //                     background: 'linear-gradient(45deg, #303f9f, #3f51b5)',
// //                     transform: 'translateY(-2px)',
// //                     boxShadow: '0 6px 20px rgba(63, 81, 181, 0.6)',
// //                   }
// //                 }}
// //               >
// //                 צפה בפרטים
// //               </Button>
              
// //               <Tooltip title={isFavorite ? "הסר מהמועדפים" : "הוסף למועדפים"}>
// //                 <IconButton
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     toggleFavorite(course.idOfCourse);
// //                   }}
// //                   sx={{
// //                     backgroundColor: 'rgba(255,255,255,0.9)',
// //                     color: '#3f51b5',
// //                     backdropFilter: 'blur(10px)',
// //                     border: '1px solid rgba(255,255,255,0.3)',
// //                     transition: 'all 0.3s ease',
                    
// //                     '&:hover': {
// //                       backgroundColor: 'white',
// //                       transform: 'scale(1.1)',
// //                       boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
// //                     }
// //                   }}
// //                 >
// //                   {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
// //                 </IconButton>
// //               </Tooltip>
              
// //               <Tooltip title="שתף קורס">
// //                 <IconButton
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleShare(course);
// //                   }}
// //                   sx={{
// //                     backgroundColor: 'rgba(255,255,255,0.9)',
// //                     color: '#3f51b5',
// //                     backdropFilter: 'blur(10px)',
// //                     border: '1px solid rgba(255,255,255,0.3)',
// //                     transition: 'all 0.3s ease',
                    
// //                     '&:hover': {
// //                       backgroundColor: 'white',
// //                       transform: 'scale(1.1)',
// //                       boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
// //                     }
// //                   }}
// //                 >
// //                   <ShareIcon />
// //                 </IconButton>
// //               </Tooltip>
// //             </Box>
// //           </Box>
// //         </Card>
// //       </Fade>
// //     );
// //   };

// //   // הוסף debug info
// //   console.log("Home render - courses length:", courses?.length);
// //   console.log("Home render - filteredAndSortedCourses length:", filteredAndSortedCourses?.length);

// //   return (
// //     <>
// //       {loading && (
// //         <Box sx={{
// //           display: 'flex',
// //           justifyContent: 'center',
// //           alignItems: 'center',
// //           position: 'fixed',
// //           top: 0,
// //           left: 0,
// //           right: 0,
// //           bottom: 0,
// //           backgroundColor: 'rgba(255,255,255,0.9)',
// //           backdropFilter: 'blur(5px)',
// //           zIndex: 9999
// //         }}>
// //           <Box sx={{ textAlign: 'center' }}>
// //             <CircularProgress size={60} thickness={4} />
// //             <Typography variant="h6" sx={{ mt: 2, color: 'primary.main' }}>
// //               טוען קורסים...
// //             </Typography>
// //           </Box>
// //         </Box>
// //       )}

// //       {flag ? (
// //         <Container maxWidth="xl" sx={{ padding: 3, direction: 'rtl' }}>
// //           {/* כותרת ראשית */}
// //           <Box sx={{ mb: 4, textAlign: 'center' }}>
// //             <Typography 
// //               variant="h3" 
// //               component="h1" 
// //               sx={{ 
// //                 mb: 2, 
// //                 fontWeight: 900,
// //                 background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
// //                 backgroundClip: 'text',
// //                 WebkitBackgroundClip: 'text',
// //                 WebkitTextFillColor: 'transparent',
// //               }}
// //             >
// //               הקורסים שלנו
// //             </Typography>
// //             <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
// //               גלו מגוון רחב של קורסים מקצועיים ואקדמיים המותאמים לכל רמה
// //             </Typography>
// //           </Box>

// //           {/* הצגת מידע debug */}
// //           <Box sx={{ mb: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
// //             <Typography variant="body2">
// //               Debug Info: סה"כ קורסים: {courses?.length || 0}, מוצגים: {filteredAndSortedCourses?.length || 0}
// //             </Typography>
// //             <Typography variant="body2">
// //               Loading: {loading ? 'כן' : 'לא'}
// //             </Typography>
// //           </Box>

// //           {/* סרגל חיפוש וסינון */}
// //           <Box sx={{ 
// //             mb: 4, 
// //             p: 3, 
// //             borderRadius: '20px',
// //             background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
// //             backdropFilter: 'blur(10px)',
// //             border: '1px solid rgba(255,255,255,0.3)',
// //             boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
// //           }}>
// //             <Grid container spacing={2} alignItems="center">
// //               <Grid item xs={12} md={4}>
// //                 <TextField
// //                   fullWidth
// //                   placeholder="חיפוש קורסים..."
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                   sx={{
// //                     '& .MuiOutlinedInput-root': {
// //                       borderRadius: '12px',
// //                       backgroundColor: 'white',
// //                     }
// //                   }}
// //                   InputProps={{
// //                     startAdornment: (
// //                       <InputAdornment position="start">
// //                         <SearchIcon color="primary" />
// //                       </InputAdornment>
// //                     ),
// //                   }}
// //                 />
// //               </Grid>

// //               <Grid item xs={12} md={2}>
// //                 <FormControl fullWidth>
// //                   <InputLabel>יום</InputLabel>
// //                   <Select
// //                     value={filterDay}
// //                     onChange={(e) => setFilterDay(e.target.value)}
// //                     label="יום"
// //                     sx={{
// //                       borderRadius: '12px',
// //                       backgroundColor: 'white',
// //                     }}
// //                   >
// //                     <MenuItem value="">הכל</MenuItem>
// //                     <MenuItem value="ראשון">ראשון</MenuItem>
// //                     <MenuItem value="שני">שני</MenuItem>
// //                     <MenuItem value="שלישי">שלישי</MenuItem>
// //                     <MenuItem value="רביעי">רביעי</MenuItem>
// //                     <MenuItem value="חמישי">חמישי</MenuItem>
// //                     <MenuItem value="שישי">שישי</MenuItem>
// //                   </Select>
// //                 </FormControl>
// //               </Grid>

// //               <Grid item xs={12} md={3}>
// //                 <FormControl fullWidth>
// //                   <InputLabel>מיון לפי</InputLabel>
// //                   <Select
// //                     value={sortBy}
// //                     onChange={(e) => setSortBy(e.target.value)}
// //                     label="מיון לפי"
// //                     sx={{
// //                       borderRadius: '12px',
// //                       backgroundColor: 'white',
// //                     }}
// //                   >
// //                     <MenuItem value="nameOfCourse">שם הקורס</MenuItem>
// //                     <MenuItem value="startDateOfCourse">תאריך התחלה</MenuItem>
// //                     <MenuItem value="totalSumOfCourse">מחיר</MenuItem>
// //                     <MenuItem value="popularity">פופולריות</MenuItem>
// //                   </Select>
// //                 </FormControl>
// //               </Grid>

// //               <Grid item xs={12} md={3}>
// //                 <FormControl fullWidth>
// //                   <InputLabel>סדר</InputLabel>
// //                   <Select
// //                     value={sortOrder}
// //                     onChange={(e) => setSortOrder(e.target.value)}
// //                     label="סדר"
// //                     sx={{
// //                       borderRadius: '12px',
// //                       backgroundColor: 'white',
// //                     }}
// //                   >
// //                     <MenuItem value="asc">עולה</MenuItem>
// //                     <MenuItem value="desc">יורד</MenuItem>
// //                   </Select>
// //                 </FormControl>
// //               </Grid>
// //             </Grid>
// //           </Box>

// //           {/* סטטיסטיקות */}
// //           <Box sx={{ mb: 4 }}>
// //             <Grid container spacing={2}>
// //               <Grid item xs={12} sm={4}>
// //                 <Box sx={{
// //                   p: 2,
// //                   borderRadius: '16px',
// //                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //                   color: 'white',
// //                   textAlign: 'center'
// //                 }}>
// //                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
// //                     {filteredAndSortedCourses.length}
// //                   </Typography>
// //                   <Typography variant="body2">קורסים זמינים</Typography>
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={12} sm={4}>
// //                 <Box sx={{
// //                   p: 2,
// //                   borderRadius: '16px',
// //                   background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
// //                   color: 'white',
// //                   textAlign: 'center'
// //                 }}>
// //                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
// //                     {filteredAndSortedCourses.reduce((sum, course) => sum + (course.currentAmountOfStudents || 0), 0)}
// //                   </Typography>
// //                   <Typography variant="body2">סטודנטים רשומים</Typography>
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={12} sm={4}>
// //                 <Box sx={{
// //                   p: 2,
// //                   borderRadius: '16px',
// //                   background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
// //                   color: 'white',
// //                   textAlign: 'center'
// //                 }}>
// //                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
// //                     {filteredAndSortedCourses.reduce((sum, course) => sum + getRemainingSeats(course), 0)}
// //                   </Typography>
// //                   <Typography variant="body2">מקומות פנויים</Typography>
// //                 </Box>
// //               </Grid>
// //             </Grid>
// //           </Box>

// //           {/* רשת הקורסים */}
// //           <Grid container spacing={3}>
// //             {filteredAndSortedCourses.length > 0 ? (
// //               filteredAndSortedCourses.map((course, index) => (
// //                 <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse || index}>
// //                   <CourseCardComponent course={course} index={index} />
// //                 </Grid>
// //               ))
// //             ) : (
// //               <Grid item xs={12}>
// //                 {/* <Box sx={{ */}

// //                 <Box sx={{ 
// //                   textAlign: 'center', 
// //                   py: 8,
// //                   borderRadius: '20px',
// //                   background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
// //                   backdropFilter: 'blur(10px)',
// //                   border: '1px solid rgba(255,255,255,0.3)',
// //                 }}>
// //                   <Box sx={{ 
// //                     width: 120, 
// //                     height: 120, 
// //                     mx: 'auto', 
// //                     mb: 3,
// //                     borderRadius: '50%',
// //                     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center'
// //                   }}>
// //                     <SearchIcon sx={{ fontSize: 60, color: 'white' }} />
// //                   </Box>
// //                   <Typography variant="h5" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
// //                     {!loading && courses.length === 0 ? 'אין קורסים במערכת' : 'לא נמצאו קורסים'}
// //                   </Typography>
// //                   <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
// //                     {!loading && courses.length === 0 
// //                       ? 'נראה שעדיין לא הוספו קורסים למערכת'
// //                       : 'נסה לשנות את קריטריוני החיפוש או הסינון'
// //                     }
// //                   </Typography>
// //                   {searchTerm || filterDay ? (
// //                     <Button 
// //                       variant="outlined" 
// //                       onClick={() => {
// //                         setSearchTerm('');
// //                         setFilterDay('');
// //                       }}
// //                       sx={{ borderRadius: '12px' }}
// //                     >
// //                       נקה מסננים
// //                     </Button>
// //                   ) : null}
// //                 </Box>
// //               </Grid>
// //             )}
// //           </Grid>

// //           {/* מידע נוסף */}
// //           {filteredAndSortedCourses.length > 0 && (
// //             <Box sx={{ mt: 6, textAlign: 'center' }}>
// //               <Typography variant="body2" color="text.secondary">
// //                 מציג {filteredAndSortedCourses.length} מתוך {courses?.length || 0} קורסים
// //               </Typography>
// //             </Box>
// //           )}
// //         </Container>
// //       ) : (
// //         <ShowCourse
// //           selectedCourse={selectedCourse}
// //           onBack={handleBack}
// //           onCourseUpdate={handleCourseUpdate}
// //         />
// //       )}
// //     </>
// //   );
// // }
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
import { getAllCoursesThunk } from '../../redux/Thunks/getAllCoursesThunk';
import { ShowCourse } from '../ShowCourse/ShowCourse';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  TextField,
  InputAdornment,
  Chip,
  Avatar
} from '@mui/material';
import {
  Search as SearchIcon,
  Event as EventIcon,
  AccessTime as AccessTimeIcon,
  LocationOn as LocationOnIcon,
  Group as GroupIcon,
  PlayArrow as PlayArrowIcon
} from '@mui/icons-material';
import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';

export function Home() {
  const [selectedId, setSelectedId] = useState();
  const [selectedCourse, setSelectedCourse] = useState();
  const [flag, setFlag] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // קבלת הקורסים מה-Redux store
  const reduxState = useSelector(state => state);
  const coursesState = useSelector(state => state.courses);
  
  // נסה לקבל קורסים מכל המקומות האפשריים
  let courses = [];
  if (coursesState?.allCourses && Array.isArray(coursesState.allCourses)) {
    courses = coursesState.allCourses;
  } else if (coursesState?.courses && Array.isArray(coursesState.courses)) {
    courses = coursesState.courses;
  }

  const dispatch = useDispatch();

  // Debug logs
  console.log("🔍 Redux State:", reduxState);
  console.log("🔍 Courses State:", coursesState);
  console.log("🔍 Final Courses Array:", courses);
  console.log("🔍 Courses Length:", courses.length);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        console.log("🚀 Fetching courses...");
        
        // נסה את שני ה-thunks
        await dispatch(getCoursesThunk());
        await dispatch(getAllCoursesThunk());
        
        console.log("✅ Courses fetched");
      } catch (error) {
        console.error("❌ Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [dispatch]);

  // סינון קורסים
  const filteredCourses = courses.filter(course => {
    if (!course || !course.nameOfCourse) return false;
    
    if (!searchTerm) return true;
    
    return course.nameOfCourse.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log("🔍 Filtered Courses:", filteredCourses);

  const handleCourseSelect = async (courseId) => {
    try {
      setLoading(true);
      const result = await dispatch(getCourseByCourseIdThunk(courseId));
      if (result?.payload) {
        setSelectedCourse(result.payload);
        setSelectedId(courseId);
        setFlag(false);
      }
    } catch (error) {
      console.error("Error selecting course:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setFlag(true);
  };

  // רכיב כרטיס קורס פשוט
  const SimpleCourseCard = ({ course }) => {
    if (!course) return null;

    return (
      <Card 
        sx={{ 
          height: '100%', 
          cursor: 'pointer',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 3
          }
        }}
        onClick={() => handleCourseSelect(course.idOfCourse)}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {course.nameOfCourse || 'קורס ללא שם'}
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EventIcon sx={{ mr: 1, fontSize: 16 }} />
              <Typography variant="body2">
                {course.startDateOfCourse || "תאריך לא צוין"}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <AccessTimeIcon sx={{ mr: 1, fontSize: 16 }} />
              <Typography variant="body2">
                {course.dayOfCourse || "יום לא צוין"} • {course.hourOfCourse || "שעה לא צוינה"}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 16 }} />
              <Typography variant="body2">
                {course.placeOfCourse || "מקום לא צוין"}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <GroupIcon sx={{ mr: 1, fontSize: 16 }} />
              <Typography variant="body2">
                {course.currentAmountOfStudents || 0} / {course.amountOfStudentsInCourse || 0} משתתפים
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {course.descriptionOfCourse || "אין תיאור זמין"}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Chip 
              label={`₪${course.totalSumOfCourse || 0}`} 
              color="primary" 
              size="small" 
            />
            <Chip 
              label={`${course.amountOfMeetingsInCourse || 0} מפגשים`} 
              variant="outlined" 
              size="small" 
            />
          </Box>

          <Button
            fullWidth
            variant="contained"
            startIcon={<PlayArrowIcon />}
            onClick={(e) => {
              e.stopPropagation();
              handleCourseSelect(course.idOfCourse);
            }}
          >
            צפה בפרטים
          </Button>
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!flag) {
    return (
      <ShowCourse
        selectedCourse={selectedCourse}
        onBack={handleBack}
        onCourseUpdate={(updatedCourse) => setSelectedCourse(updatedCourse)}
      />
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* כותרת */}
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        הקורסים שלנו
      </Typography>

      {/* Debug Info */}
      <Box sx={{ 
        mb: 3, 
        p: 2, 
        backgroundColor: '#f5f5f5', 
        borderRadius: 1,
        border: '1px solid #ddd'
      }}>
        <Typography variant="h6" gutterBottom>מידע Debug:</Typography>
        <Typography variant="body2">Redux State Keys: {Object.keys(reduxState).join(', ')}</Typography>
        <Typography variant="body2">Courses State Keys: {coursesState ? Object.keys(coursesState).join(', ') : 'null'}</Typography>
        <Typography variant="body2">AllCourses Length: {coursesState?.allCourses?.length || 0}</Typography>
        <Typography variant="body2">Courses Length: {coursesState?.courses?.length || 0}</Typography>
        <Typography variant="body2">Final Courses Length: {courses.length}</Typography>
        <Typography variant="body2">Loading: {loading ? 'Yes' : 'No'}</Typography>
      </Box>

      {/* חיפוש */}
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="חיפוש קורסים..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* סטטיסטיקות */}
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h6">
          מציג {filteredCourses.length} מתוך {courses.length} קורסים
        </Typography>
      </Box>

      {/* רשת קורסים */}
      {filteredCourses.length > 0 ? (
        <Grid container spacing={3}>
          {filteredCourses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse || index}>
              <SimpleCourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h5" gutterBottom>
            {courses.length === 0 ? 'אין קורסים במערכת' : 'לא נמצאו קורסים'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {courses.length === 0 
              ? 'נראה שעדיין לא הוספו קורסים למערכת'
              : 'נסה לשנות את מילות החיפוש'
            }
          </Typography>
          {searchTerm && (
            <Button 
              variant="outlined" 
              onClick={() => setSearchTerm('')}
              sx={{ mt: 2 }}
            >
              נקה חיפוש
            </Button>
          )}
        </Box>
      )}
    </Container>
  );
}
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// import { getAllCoursesThunk } from '../../redux/Thunks/getAllCoursesThunk';
// import { ShowCourse } from '../ShowCourse/ShowCourse';
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Box,
//   CircularProgress,
//   TextField,
//   InputAdornment,
//   Chip,
//   Avatar,
//   IconButton,
//   Tooltip,
//   Fade,
//   Paper,
//   LinearProgress
// } from '@mui/material';
// import {
//   Search as SearchIcon,
//   Event as EventIcon,
//   AccessTime as AccessTimeIcon,
//   LocationOn as LocationOnIcon,
//   Group as GroupIcon,
//   PlayArrow as PlayArrowIcon,
//   Favorite as FavoriteIcon,
//   FavoriteBorder as FavoriteBorderIcon,
//   Share as ShareIcon,
//   Star as StarIcon,
//   TrendingUp as TrendingUpIcon,
//   Schedule as ScheduleIcon,
//   Person as PersonIcon
// } from '@mui/icons-material';
// import { getCourseByCourseIdThunk } from '../../redux/Thunks/getCourseByCourseIdThunk';
// import './Home.css';

// // פונקציות עזר
// const getCourseInstructor = (course) => {
//   if (course.speakerName) return course.speakerName;
//   const instructors = ['ד"ר כהן', 'פרופ\' לוי', 'מר ישראלי', 'גב\' אברהם'];
//   return instructors[Math.floor(Math.random() * instructors.length)];
// };

// const getCourseCategory = (course) => {
//   const categories = ['אקדמי', 'מקצועי', 'העשרה', 'אמנות', 'טכנולוגיה'];
//   return categories[Math.floor(Math.random() * categories.length)];
// };

// const isPopularCourse = (course) => {
//   if (!course.currentAmountOfStudents || !course.amountOfStudentsInCourse) return false;
//   return course.currentAmountOfStudents > (course.amountOfStudentsInCourse * 0.7);
// };

// const getEnrollmentProgress = (course) => {
//   if (!course.currentAmountOfStudents || !course.amountOfStudentsInCourse) return 0;
//   return (course.currentAmountOfStudents / course.amountOfStudentsInCourse) * 100;
// };

// const getRemainingSeats = (course) => {
//   if (!course.currentAmountOfStudents || !course.amountOfStudentsInCourse) return 0;
//   return course.amountOfStudentsInCourse - course.currentAmountOfStudents;
// };

// export function Home() {
//   const [selectedId, setSelectedId] = useState();
//   const [selectedCourse, setSelectedCourse] = useState();
//   const [flag, setFlag] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [favorites, setFavorites] = useState(new Set());

//   // קבלת הקורסים מה-Redux store
//   const reduxState = useSelector(state => state);
//   const coursesState = useSelector(state => state.courses);
  
//   // נסה לקבל קורסים מכל המקומות האפשריים
//   let courses = [];
//   if (coursesState?.allCourses && Array.isArray(coursesState.allCourses)) {
//     courses = coursesState.allCourses;
//   } else if (coursesState?.courses && Array.isArray(coursesState.courses)) {
//     courses = coursesState.courses;
//   }

//   const dispatch = useDispatch();

//   // Debug logs
//   console.log("🔍 Redux State:", reduxState);
//   console.log("🔍 Courses State:", coursesState);
//   console.log("🔍 Final Courses Array:", courses);
//   console.log("🔍 Courses Length:", courses.length);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       setLoading(true);
//       try {
//         console.log("🚀 Fetching courses...");
        
//         // נסה את שני ה-thunks
//         await dispatch(getCoursesThunk());
//         await dispatch(getAllCoursesThunk());
        
//         console.log("✅ Courses fetched");
//       } catch (error) {
//         console.error("❌ Error fetching courses:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, [dispatch]);

//   // סינון קורסים
//   const filteredCourses = courses.filter(course => {
//     if (!course || !course.nameOfCourse) return false;
    
//     if (!searchTerm) return true;
    
//     return course.nameOfCourse.toLowerCase().includes(searchTerm.toLowerCase()) ||
//            (course.descriptionOfCourse && course.descriptionOfCourse.toLowerCase().includes(searchTerm.toLowerCase()));
//   });

//   console.log("🔍 Filtered Courses:", filteredCourses);

//   const handleCourseSelect = async (courseId) => {
//     try {
//       setLoading(true);
//       const result = await dispatch(getCourseByCourseIdThunk(courseId));
//       if (result?.payload) {
//         setSelectedCourse(result.payload);
//         setSelectedId(courseId);
//         setFlag(false);
//       }
//     } catch (error) {
//       console.error("Error selecting course:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     setFlag(true);
//   };

//   const toggleFavorite = (courseId) => {
//     const newFavorites = new Set(favorites);
//     if (newFavorites.has(courseId)) {
//       newFavorites.delete(courseId);
//     } else {
//       newFavorites.add(courseId);
//     }
//     setFavorites(newFavorites);
//   };

//   const handleShare = (course) => {
//     if (navigator.share) {
//       navigator.share({
//         title: course.nameOfCourse,
//         text: course.descriptionOfCourse,
//         url: window.location.href,
//       });
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//     }
//   };

//   // רכיב כרטיס קורס מעוצב
//   const StylishCourseCard = ({ course, index }) => {
//     if (!course) return null;

//     const isPopular = isPopularCourse(course);
//     const progress = getEnrollmentProgress(course);
//     const remainingSeats = getRemainingSeats(course);
//     const isFavorite = favorites.has(course.idOfCourse);
//     const instructor = getCourseInstructor(course);
//     const category = getCourseCategory(course);

//     // יצירת URL לתמונת רקע
//     const backgroundImage = course.image 
//       ? `url(https://localhost:7092${course.image})`
//       : `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea;stop-opacity:1" /><stop offset="100%" style="stop-color:%23764ba2;stop-opacity:1" /></linearGradient></defs><rect width="400" height="300" fill="url(%23grad)"/></svg>')`;

//     return (
//       <Fade in={true} timeout={300 + index * 100}>
//         <div className="course-card-wrapper">
//           <Card 
//             className="course-card"
//             sx={{
//               backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%), ${backgroundImage}`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//             }}
//           >
//             {/* תגיות עליונות */}
//             <div className="course-card-badges">
//               {isPopular && (
//                 <Chip
//                   label="פופולרי"
//                   icon={<StarIcon />}
//                   className="popular-badge"
//                 />
//               )}
//               <Chip
//                 label={category}
//                 className="category-badge"
//               />
//             </div>

//             {/* מחוון התקדמות */}
//             <div className="progress-indicator" style={{ width: `${progress}%` }} />

//             {/* תוכן הכרטיס */}
//             <CardContent className="course-card-content">
//               <div className="course-card-header">
//                 <Typography variant="h5" className="course-title">
//                   {course.nameOfCourse || 'קורס ללא שם'}
//                 </Typography>

//                 <div className="course-actions">
//                   <Tooltip title={isFavorite ? "הסר מהמועדפים" : "הוסף למועדפים"}>
//                     <IconButton
//                       className="action-button favorite-button"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleFavorite(course.idOfCourse);
//                       }}
//                     >
//                       {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//                     </IconButton>
//                   </Tooltip>
                  
//                   <Tooltip title="שתף קורס">
//                     <IconButton
//                       className="action-button share-button"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleShare(course);
//                       }}
//                     >
//                       <ShareIcon />
//                     </IconButton>
//                   </Tooltip>
//                 </div>
//               </div>

//               <div className="course-info">
//                 <div className="info-item">
//                   <EventIcon className="info-icon" />
//                   <Typography variant="body2">
//                     {course.startDateOfCourse || "בקרוב"}
//                   </Typography>
//                 </div>

//                 <div className="info-item">
//                   <AccessTimeIcon className="info-icon" />
//                   <Typography variant="body2">
//                     {course.dayOfCourse || "לא צוין"} • {course.hourOfCourse || ""}
//                   </Typography>
//                 </div>

//                 <div className="info-item">
//                   <LocationOnIcon className="info-icon" />
//                   <Typography variant="body2" className="location-text">
//                     {course.placeOfCourse || "לא צוין"}
//                   </Typography>
//                 </div>
//               </div>

//               <Typography variant="body2" className="course-description">
//                 {course.descriptionOfCourse || "אין תיאור זמין לקורס זה."}
//               </Typography>

//               <div className="course-chips">
//                 <Chip
//                   icon={<GroupIcon />}
//                   label={`${remainingSeats} מקומות`}
//                   className="info-chip students-chip"
//                 />
                
//                 <Chip
//                   icon={<ScheduleIcon />}
//                   label={`${course.amountOfMeetingsInCourse || 0} מפגשים`}
//                   className="info-chip meetings-chip"
//                 />
                
//                 <Chip
//                   icon={<TrendingUpIcon />}
//                   label={`₪${course.totalSumOfCourse || 0}`}
//                   className="info-chip price-chip"
//                 />
//               </div>

//               <div className="instructor-info">
//                 <Avatar className="instructor-avatar">
//                   {instructor.charAt(0)}
//                 </Avatar>
//                 <Typography variant="body2" className="instructor-name">
//                   {instructor}
//                 </Typography>
//               </div>

//               <Button
//                 fullWidth
//                 className="view-details-button"
//                 startIcon={<PlayArrowIcon />}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleCourseSelect(course.idOfCourse);
//                 }}
//               >
//                 צפה בפרטים
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </Fade>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="loading-overlay">
//         <div className="loading-content">
//           <CircularProgress size={60} thickness={4} className="loading-spinner" />
//           <Typography variant="h6" className="loading-text">
//             טוען קורסים...
//           </Typography>
//         </div>
//       </div>
//     );
//   }

//   if (!flag) {
//     return (
//       <ShowCourse
//         selectedCourse={selectedCourse}
//         onBack={handleBack}
//         onCourseUpdate={(updatedCourse) => setSelectedCourse(updatedCourse)}
//       />
//     );
//   }

//   return (
//     <div className="home-page-wrapper">
//       <Container maxWidth="xl" className="home-dashboard">
//         {/* כותרת ראשית */}
//         <div className="home-header">
//           <Typography variant="h3" component="h1" className="home-title">
//             הקורסים שלנו
//           </Typography>
//           <Typography variant="h6" className="home-subtitle">
//             גלו מגוון רחב של קורסים מקצועיים ואקדמיים המותאמים לכל רמה
//           </Typography>
//         </div>

//         {/* Debug Info */}
//         <Paper className="debug-info">
//           <Typography variant="h6" gutterBottom>מידע Debug:</Typography>
//           <Typography variant="body2">Redux State Keys: {Object.keys(reduxState).join(', ')}</Typography>
//           <Typography variant="body2">Courses State Keys: {coursesState ? Object.keys(coursesState).join(', ') : 'null'}</Typography>
//           <Typography variant="body2">AllCourses Length: {coursesState?.allCourses?.length || 0}</Typography>
//           <Typography variant="body2">Courses Length: {coursesState?.courses?.length || 0}</Typography>
//           <Typography variant="body2">Final Courses Length: {courses.length}</Typography>
//           <Typography variant="body2">Loading: {loading ? 'Yes' : 'No'}</Typography>
//         </Paper>

//         {/* סרגל חיפוש */}
//         <Paper className="search-container">
//           <TextField
//             fullWidth
//             placeholder="חיפוש קורסים..."
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

//           {/* סטטיסטיקות */}
//           <div className="stats-container">
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4}>
//               <div className="stat-card courses-stat">
//                 <Typography variant="h4" className="stat-number">
//                   {filteredCourses.length}
//                 </Typography>
//                 <Typography variant="body2" className="stat-label">
//                   קורסים זמינים
//                 </Typography>
//               </div>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <div className="stat-card students-stat">
//                 <Typography variant="h4" className="stat-number">
//                   {filteredCourses.reduce((sum, course) => sum + (course.currentAmountOfStudents || 0), 0)}
//                 </Typography>
//                 <Typography variant="body2" className="stat-label">
//                   סטודנטים רשומים
//                 </Typography>
//               </div>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <div className="stat-card seats-stat">
//                 <Typography variant="h4" className="stat-number">
//                   {filteredCourses.reduce((sum, course) => sum + getRemainingSeats(course), 0)}
//                 </Typography>
//                 <Typography variant="body2" className="stat-label">
//                   מקומות פנויים
//                 </Typography>
//               </div>
//             </Grid>
//           </Grid>
//         </div>

//         {/* רשת קורסים */}
//         <div className="courses-grid-container">
//           {filteredCourses.length > 0 ? (
//             <Grid container spacing={3}>
//               {filteredCourses.map((course, index) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} key={course.idOfCourse || index}>
//                   <StylishCourseCard course={course} index={index} />
//                 </Grid>
//               ))}
//             </Grid>
//           ) : (
//             <div className="no-courses-container">
//               <div className="no-courses-content">
//                 <div className="no-courses-icon">
//                   <SearchIcon />
//                 </div>
//                 <Typography variant="h5" className="no-courses-title">
//                   {courses.length === 0 ? 'אין קורסים במערכת' : 'לא נמצאו קורסים'}
//                 </Typography>
//                 <Typography variant="body1" className="no-courses-text">
//                   {courses.length === 0 
//                     ? 'נראה שעדיין לא הוספו קורסים למערכת'
//                     : 'נסה לשנות את מילות החיפוש'
//                   }
//                 </Typography>
//                 {searchTerm && (
//                   <Button 
//                     variant="outlined" 
//                     onClick={() => setSearchTerm('')}
//                     className="clear-search-button"
//                   >
//                     נקה חיפוש
//                   </Button>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* מידע נוסף */}
//         {filteredCourses.length > 0 && (
//           <div className="courses-info">
//             <Typography variant="body2" className="courses-count">
//               מציג {filteredCourses.length} מתוך {courses.length} קורסים
//             </Typography>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// }
