
import React from "react";
import './Archeive.css'
import { Routing } from "../Routing/Routing";
import CourseArchieveTable from "./CourseArcheiveTable";
import SpeakerArchieveTable from "./SpeakerArcheiveTable";
import StudentArchieveTable from "./StudentArcheiveTable";
import { Button } from "@mui/material";
export const Archieve = () => {
  const [studentFlag, setStudentFlag] = React.useState(false);
  const [speakerFlag, setSpeakerFlag] = React.useState(false);
  const [courseFlag, setCourseFlag] = React.useState(false);

  const openCourse = () => {
    setCourseFlag(true)
    setSpeakerFlag(false)
    setStudentFlag(false)
  };
  const openStudent = () => {
    setStudentFlag(true)
    setCourseFlag(false)
    setSpeakerFlag(false)

  };
  const openSpeaker = () => {
    setSpeakerFlag(true)
    setStudentFlag(false)
    setCourseFlag(false)
  };


  return <div>
    <Routing></Routing>
    <br></br>
   <div className="buttons"> <Button variant="outlined" onClick={() => openStudent(true)}
    sx={{marginLeft:"2%"}}>ארכיון תלמידות</Button>
    <Button variant="outlined" onClick={() => openSpeaker(true)} 
      sx={{marginLeft:"2%"}} >ארכיון מרצות</Button>
    <Button variant="outlined" onClick={() => openCourse(true)} 
      sx={{marginLeft:"2%"}}>ארכיון קורסים</Button></div>
    {courseFlag && <CourseArchieveTable></CourseArchieveTable>}
    {speakerFlag && <SpeakerArchieveTable></SpeakerArchieveTable>}
    {studentFlag && <StudentArchieveTable />}
  </div>
}
// import React from "react";
// import './Archeive.css';
// import { Routing } from "../Routing/Routing";
// import CourseArchieveTable from "./CourseArcheiveTable";
// import SpeakerArchieveTable from "./SpeakerArcheiveTable";
// import StudentArchieveTable from "./StudentArcheiveTable";
// import { Button, Typography, Box, Container, Paper } from "@mui/material";
// import SchoolIcon from '@mui/icons-material/School';
// import PersonIcon from '@mui/icons-material/Person';
// import MenuBookIcon from '@mui/icons-material/MenuBook';

// export const Archieve = () => {
//   const [studentFlag, setStudentFlag] = React.useState(false);
//   const [speakerFlag, setSpeakerFlag] = React.useState(false);
//   const [courseFlag, setCourseFlag] = React.useState(true); // מציג קורסים כברירת מחדל
  
//   const openCourse = () => {
//     setCourseFlag(true);
//     setSpeakerFlag(false);
//     setStudentFlag(false);
//   };
  
//   const openStudent = () => {
//     setStudentFlag(true);
//     setCourseFlag(false);
//     setSpeakerFlag(false);
//   };
  
//   const openSpeaker = () => {
//     setSpeakerFlag(true);
//     setStudentFlag(false);
//     setCourseFlag(false);
//   };
  
//   return (
//     <Container maxWidth="xl" sx={{ padding: 0 }}>
//       <Routing />
      
//       <Paper 
//         elevation={3} 
//         sx={{ 
//           padding: '20px', 
//           marginTop: '20px',
//           borderRadius: '12px',
//           backgroundColor: '#f8f8f8'
//         }}
//       >
//         <Typography 
//           variant="h4" 
//           component="h1" 
//           align="center" 
//           sx={{ 
//             marginBottom: '30px', 
//             color: '#ff1744',
//             fontWeight: 'bold',
//             textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
//           }}
//         >
//           ארכיון המערכת
//         </Typography>
        
//         <Box 
//           sx={{ 
//             display: 'flex', 
//             justifyContent: 'center',
//             gap: '20px',
//             marginBottom: '30px',
//             flexWrap: 'wrap'
//           }} 
//           className="buttons"
//         >
//           <Button 
//             variant={studentFlag ? "contained" : "outlined"} 
//             onClick={openStudent}
//             startIcon={<SchoolIcon />}
//             sx={{
//               padding: '10px 20px',
//               fontSize: '1rem',
//               fontWeight: 'bold',
//               borderRadius: '8px',
//               backgroundColor: studentFlag ? '#ff1744' : 'transparent',
//               borderColor: '#ff1744',
//               color: studentFlag ? 'white' : '#ff1744',
//               '&:hover': {
//                 backgroundColor: studentFlag ? '#d81b60' : 'rgba(255, 23, 68, 0.08)',
//                 borderColor: '#d81b60'
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//             ארכיון תלמידות
//           </Button>
          
//           <Button 
//             variant={speakerFlag ? "contained" : "outlined"} 
//             onClick={openSpeaker}
//             startIcon={<PersonIcon />}
//             sx={{
//               padding: '10px 20px',
//               fontSize: '1rem',
//               fontWeight: 'bold',
//               borderRadius: '8px',
//               backgroundColor: speakerFlag ? '#ff1744' : 'transparent',
//               borderColor: '#ff1744',
//               color: speakerFlag ? 'white' : '#ff1744',
//               '&:hover': {
//                 backgroundColor: speakerFlag ? '#d81b60' : 'rgba(255, 23, 68, 0.08)',
//                 borderColor: '#d81b60'
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//             ארכיון מרצות
//           </Button>
          
//           <Button 
//             variant={courseFlag ? "contained" : "outlined"} 
//             onClick={openCourse}
//             startIcon={<MenuBookIcon />}
//             sx={{
//               padding: '10px 20px',
//               fontSize: '1rem',
//               fontWeight: 'bold',
//               borderRadius: '8px',
//               backgroundColor: courseFlag ? '#ff1744' : 'transparent',
//               borderColor: '#ff1744',
//               color: courseFlag ? 'white' : '#ff1744',
//               '&:hover': {
//                 backgroundColor: courseFlag ? '#d81b60' : 'rgba(255, 23, 68, 0.08)',
//                 borderColor: '#d81b60'
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//             ארכיון קורסים
//           </Button>
//         </Box>
        
//         <Box sx={{ minHeight: '400px' }}>
//           {courseFlag && <CourseArchieveTable />}
//           {speakerFlag && <SpeakerArchieveTable />}
//           {studentFlag && <StudentArchieveTable />}
//         </Box>
//       </Paper>
//     </Container>
//   );
// };
