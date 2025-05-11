
// import React from "react";
// import './Archeive.css'
// import { Routing } from "../Routing/Routing";
// import CourseArchieveTable from "./CourseArcheiveTable";
// import SpeakerArchieveTable from "./SpeakerArcheiveTable";
// import StudentArchieveTable from "./StudentArcheiveTable";
// import { Button } from "@mui/material";
// export const Archieve = () => {
//   const [studentFlag, setStudentFlag] = React.useState(false);
//   const [speakerFlag, setSpeakerFlag] = React.useState(false);
//   const [courseFlag, setCourseFlag] = React.useState(false);

//   const openCourse = () => {
//     setCourseFlag(true)
//     setSpeakerFlag(false)
//     setStudentFlag(false)
//   };
//   const openStudent = () => {
//     setStudentFlag(true)
//     setCourseFlag(false)
//     setSpeakerFlag(false)

//   };
//   const openSpeaker = () => {
//     setSpeakerFlag(true)
//     setStudentFlag(false)
//     setCourseFlag(false)
//   };


//   return <div>
//     <Routing></Routing>
//     <br></br>
//    <div className="buttons"> <Button variant="outlined" onClick={() => openStudent(true)}
//     sx={{marginLeft:"2%"}}>ארכיון תלמידות</Button>
//     <Button variant="outlined" onClick={() => openSpeaker(true)} 
//       sx={{marginLeft:"2%"}} >ארכיון מרצות</Button>
//     <Button variant="outlined" onClick={() => openCourse(true)} 
//       sx={{marginLeft:"2%"}}>ארכיון קורסים</Button></div>
//     {courseFlag && <CourseArchieveTable></CourseArchieveTable>}
//     {speakerFlag && <SpeakerArchieveTable></SpeakerArchieveTable>}
//     {studentFlag && <StudentArchieveTable />}
//   </div>
// }
import React, { useState } from "react";
import { Routing } from "../Routing/Routing";
import CourseArchieveTable from "./CourseArcheiveTable";
import SpeakerArchieveTable from "./SpeakerArcheiveTable";
import StudentArchieveTable from "./StudentArcheiveTable";
import { Button, Paper, Typography, Box, Tabs, Tab, Fade } from "@mui/material";
import { styled } from "@mui/material/styles";
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArchiveIcon from '@mui/icons-material/Archive';
import './Archeive.css';

// Styled components
const ArchiveContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3),
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
  direction: 'rtl',
}));

const ArchiveHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(2),
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
    height: 3,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
  minWidth: 120,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    transform: 'translateY(-2px)',
  },
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  minHeight: 400,
  padding: theme.spacing(2),
  backgroundColor: '#ffffff',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
}));

export const Archeive = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="archive-page">
      <Routing />
      
      <ArchiveContainer elevation={3}>
        <ArchiveHeader>
          <ArchiveIcon sx={{ fontSize: 40, marginLeft: 2, color: '#3f51b5' }} />
          <Typography variant="h4" component="h1" fontWeight="bold" color="#3f51b5">
            ארכיון מערכת
          </Typography>
        </ArchiveHeader>

        <StyledTabs 
          value={activeTab} 
          onChange={handleTabChange} 
          variant="fullWidth"
          textColor="primary"
          aria-label="archive tabs"
        >
          <StyledTab icon={<SchoolIcon />} iconPosition="start" label="תלמידות" />
          <StyledTab icon={<PersonIcon />} iconPosition="start" label="מרצות" />
          <StyledTab icon={<MenuBookIcon />} iconPosition="start" label="קורסים" />
        </StyledTabs>

        <ContentContainer>
          <Fade in={activeTab === 0} timeout={500}>
            <div style={{ display: activeTab === 0 ? 'block' : 'none' }}>
              {activeTab === 0 && <StudentArchieveTable />}
            </div>
          </Fade>
          
          <Fade in={activeTab === 1} timeout={500}>
            <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
              {activeTab === 1 && <SpeakerArchieveTable />}
            </div>
          </Fade>
          
          <Fade in={activeTab === 2} timeout={500}>
            <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
              {activeTab === 2 && <CourseArchieveTable />}
            </div>
          </Fade>
        </ContentContainer>
      </ArchiveContainer>
    </div>
  );
};
