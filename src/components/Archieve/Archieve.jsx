
// // // import React from "react";
// // // import './Archeive.css'
// // // import { Routing } from "../Routing/Routing";
// // // import CourseArchieveTable from "./CourseArcheiveTable";
// // // import SpeakerArchieveTable from "./SpeakerArcheiveTable";
// // // import StudentArchieveTable from "./StudentArcheiveTable";
// // // import { Button } from "@mui/material";
// // // export const Archieve = () => {
// // //   const [studentFlag, setStudentFlag] = React.useState(false);
// // //   const [speakerFlag, setSpeakerFlag] = React.useState(false);
// // //   const [courseFlag, setCourseFlag] = React.useState(false);

// // //   const openCourse = () => {
// // //     setCourseFlag(true)
// // //     setSpeakerFlag(false)
// // //     setStudentFlag(false)
// // //   };
// // //   const openStudent = () => {
// // //     setStudentFlag(true)
// // //     setCourseFlag(false)
// // //     setSpeakerFlag(false)

// // //   };
// // //   const openSpeaker = () => {
// // //     setSpeakerFlag(true)
// // //     setStudentFlag(false)
// // //     setCourseFlag(false)
// // //   };


// // //   return <div>
// // //     <Routing></Routing>
// // //     <br></br>
// // //    <div className="buttons"> <Button variant="outlined" onClick={() => openStudent(true)}
// // //     sx={{marginLeft:"2%"}}>ארכיון תלמידות</Button>
// // //     <Button variant="outlined" onClick={() => openSpeaker(true)} 
// // //       sx={{marginLeft:"2%"}} >ארכיון מרצות</Button>
// // //     <Button variant="outlined" onClick={() => openCourse(true)} 
// // //       sx={{marginLeft:"2%"}}>ארכיון קורסים</Button></div>
// // //     {courseFlag && <CourseArchieveTable></CourseArchieveTable>}
// // //     {speakerFlag && <SpeakerArchieveTable></SpeakerArchieveTable>}
// // //     {studentFlag && <StudentArchieveTable />}
// // //   </div>
// // // }
// // import React, { useState } from "react";
// // import { Routing } from "../Routing/Routing";
// // import CourseArchieveTable from "./CourseArcheiveTable";
// // import SpeakerArchieveTable from "./SpeakerArcheiveTable";
// // import StudentArchieveTable from "./StudentArcheiveTable";
// // import { Button } from "@mui/material";
// // export const Archieve = () => {
// //   const [studentFlag, setStudentFlag] = React.useState(false);
// //   const [speakerFlag, setSpeakerFlag] = React.useState(false);
// //   const [courseFlag, setCourseFlag] = React.useState(false);

// //   const openCourse = () => {
// //     setCourseFlag(true)
// //     setSpeakerFlag(false)
// //     setStudentFlag(false)
// //   };
// //   const openStudent = () => {
// //     setStudentFlag(true)
// //     setCourseFlag(false)
// //     setSpeakerFlag(false)

// //   };
// //   const openSpeaker = () => {
// //     setSpeakerFlag(true)
// //     setStudentFlag(false)
// //     setCourseFlag(false)
// //   };


// //   return <div>
// //     <Routing></Routing>
// //     <br></br>
// //    <div className="buttons"> <Button variant="outlined" onClick={() => openStudent(true)}
// //     sx={{marginLeft:"2%"}}>ארכיון תלמידות</Button>
// //     <Button variant="outlined" onClick={() => openSpeaker(true)} 
// //       sx={{marginLeft:"2%"}} >ארכיון מרצות</Button>
// //     <Button variant="outlined" onClick={() => openCourse(true)} 
// //       sx={{marginLeft:"2%"}}>ארכיון קורסים</Button></div>
// //     {courseFlag && <CourseArchieveTable></CourseArchieveTable>}
// //     {speakerFlag && <SpeakerArchieveTable></SpeakerArchieveTable>}
// //     {studentFlag && <StudentArchieveTable />}
// //   </div>
// // }

// // import React from "react";
// // import './Archeive.css'
// // import { Routing } from "../Routing/Routing";
// // import CourseArchieveTable from "./CourseArcheiveTable";
// // import SpeakerArchieveTable from "./SpeakerArcheiveTable";
// // import StudentArchieveTable from "./StudentArcheiveTable";
// // import { Button } from "@mui/material";
// // export const Archieve = () => {
// //   const [studentFlag, setStudentFlag] = React.useState(false);
// //   const [speakerFlag, setSpeakerFlag] = React.useState(false);
// //   const [courseFlag, setCourseFlag] = React.useState(false);

// //   const openCourse = () => {
// //     setCourseFlag(true)
// //     setSpeakerFlag(false)
// //     setStudentFlag(false)
// //   };
// //   const openStudent = () => {
// //     setStudentFlag(true)
// //     setCourseFlag(false)
// //     setSpeakerFlag(false)

// //   };
// //   const openSpeaker = () => {
// //     setSpeakerFlag(true)
// //     setStudentFlag(false)
// //     setCourseFlag(false)
// //   };


// //   return <div>
// //     <Routing></Routing>
// //     <br></br>
// //    <div className="buttons"> <Button variant="outlined" onClick={() => openStudent(true)}
// //     sx={{marginLeft:"2%"}}>ארכיון תלמידות</Button>
// //     <Button variant="outlined" onClick={() => openSpeaker(true)} 
// //       sx={{marginLeft:"2%"}} >ארכיון מרצות</Button>
// //     <Button variant="outlined" onClick={() => openCourse(true)} 
// //       sx={{marginLeft:"2%"}}>ארכיון קורסים</Button></div>
// //     {courseFlag && <CourseArchieveTable></CourseArchieveTable>}
// //     {speakerFlag && <SpeakerArchieveTable></SpeakerArchieveTable>}
// //     {studentFlag && <StudentArchieveTable />}
// //   </div>
// // }
// import React, { useState } from "react";
// import { Routing } from "../Routing/Routing";
// import CourseArchieveTable from "./CourseArcheiveTable";
// import SpeakerArchieveTable from "./SpeakerArcheiveTable";
// import StudentArchieveTable from "./StudentArcheiveTable";
// import { Button, Paper, Typography, Box, Tabs, Tab, Fade } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import SchoolIcon from '@mui/icons-material/School';
// import PersonIcon from '@mui/icons-material/Person';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import './Archeive.css';

// // Styled components
// const ArchiveContainer = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   margin: theme.spacing(3),
//   borderRadius: 16,
//   boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
//   background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
//   direction: 'rtl',
// }));

// const ArchiveHeader = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   marginBottom: theme.spacing(4),
//   borderBottom: `1px solid ${theme.palette.divider}`,
//   paddingBottom: theme.spacing(2),
// }));

// const StyledTabs = styled(Tabs)(({ theme }) => ({
//   marginBottom: theme.spacing(3),
//   '& .MuiTabs-indicator': {
//     backgroundColor: theme.palette.primary.main,
//     height: 3,
//   },
// }));

// const StyledTab = styled(Tab)(({ theme }) => ({
//   fontWeight: 'bold',
//   fontSize: '1rem',
//   textTransform: 'none',
//   minWidth: 120,
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     backgroundColor: 'rgba(0, 0, 0, 0.04)',
//     transform: 'translateY(-2px)',
//   },
//   '&.Mui-selected': {
//     color: theme.palette.primary.main,
//   },
// }));

// const ContentContainer = styled(Box)(({ theme }) => ({
//   minHeight: 400,
//   padding: theme.spacing(2),
//   backgroundColor: '#ffffff',
//   borderRadius: 8,
//   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
// }));

// export const Archeive = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <div className="archive-page">
//       <Routing />
      
//       <ArchiveContainer elevation={3}>
//         <ArchiveHeader>
//           <ArchiveIcon sx={{ fontSize: 40, marginLeft: 2, color: '#3f51b5' }} />
//           <Typography variant="h4" component="h1" fontWeight="bold" color="#3f51b5">
//             ארכיון מערכת
//           </Typography>
//         </ArchiveHeader>

//         <StyledTabs 
//           value={activeTab} 
//           onChange={handleTabChange} 
//           variant="fullWidth"
//           textColor="primary"
//           aria-label="archive tabs"
//         >
//           <StyledTab icon={<SchoolIcon />} iconPosition="start" label="תלמידות" />
//           <StyledTab icon={<PersonIcon />} iconPosition="start" label="מרצות" />
//           <StyledTab icon={<MenuBookIcon />} iconPosition="start" label="קורסים" />
//         </StyledTabs>

//         <ContentContainer>
//           <Fade in={activeTab === 0} timeout={500}>
//             <div style={{ display: activeTab === 0 ? 'block' : 'none' }}>
//               {activeTab === 0 && <StudentArchieveTable />}
//             </div>
//           </Fade>
          
//           <Fade in={activeTab === 1} timeout={500}>
//             <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
//               {activeTab === 1 && <SpeakerArchieveTable />}
//             </div>
//           </Fade>
          
//           <Fade in={activeTab === 2} timeout={500}>
//             <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
//               {activeTab === 2 && <CourseArchieveTable />}
//             </div>
//           </Fade>
//         </ContentContainer>
//       </ArchiveContainer>
//     </div>
//   );
// };

import React, { useState } from "react";
import { Routing } from "../Routing/Routing";
import CourseArchieveTable from "./CourseArcheiveTable";
import SpeakerArchieveTable from "./SpeakerArcheiveTable";
import StudentArchieveTable from "./StudentArcheiveTable";
import { 
  Button, 
  Paper, 
  Typography, 
  Box, 
  Tabs, 
  Tab, 
  Fade,
  Container,
  Card,
  CardContent,
  Divider
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArchiveIcon from '@mui/icons-material/Archive';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import './Archeive.css';

// Styled components
const ArchiveContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  margin: theme.spacing(3),
  borderRadius: 20,
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  border: '1px solid rgba(63, 81, 181, 0.1)',
  overflow: 'hidden',
  position: 'relative',
  direction: 'rtl',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: 6,
    background: 'linear-gradient(90deg, #3f51b5, #2196f3, #e91e63)',
    zIndex: 1,
  }
}));

const ArchiveHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #3f51b5 0%, #2196f3 100%)',
  color: 'white',
  padding: theme.spacing(4),
  margin: 0,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat',
    opacity: 0.3,
  }
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  borderRadius: 16,
  padding: theme.spacing(1),
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
  margin: theme.spacing(3),
  '& .MuiTabs-indicator': {
    height: 4,
    borderRadius: 2,
    background: 'linear-gradient(90deg, #3f51b5, #2196f3)',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.1rem',
  textTransform: 'none',
  minHeight: 60,
  borderRadius: 12,
  margin: theme.spacing(0.5),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  color: '#5a6c7d',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(63, 81, 181, 0.1), rgba(33, 150, 243, 0.1))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(63, 81, 181, 0.15)',
    backgroundColor: 'rgba(63, 81, 181, 0.05)',
  },
  '&.Mui-selected': {
    background: 'linear-gradient(45deg, #3f51b5, #2196f3)',
    color: 'white',
    boxShadow: '0 8px 25px rgba(63, 81, 181, 0.3)',
    transform: 'translateY(-3px)',
    '& .MuiSvgIcon-root': {
      color: 'white',
      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
    },
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)',
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  padding: 0,
  overflow: 'hidden',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  position: 'relative',
  margin: theme.spacing(3),
  minHeight: 500,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    background: 'linear-gradient(90deg, transparent, rgba(63, 81, 181, 0.3), transparent)',
  }
}));

const WelcomeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 400,
  padding: theme.spacing(4),
  textAlign: 'center',
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  borderRadius: 16,
  margin: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%233f51b5' fill-opacity='0.03'/%3E%3C/svg%3E")`,
    opacity: 0.7,
    zIndex: 0,
  }
}));

const WelcomeContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  maxWidth: 600,
  padding: theme.spacing(5),
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: 20,
  boxShadow: '0 15px 35px rgba(63, 81, 181, 0.1)',
  border: '1px solid rgba(63, 81, 181, 0.1)',
  backdropFilter: 'blur(10px)',
  animation: 'fadeInUp 0.8s ease-out',
}));

const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  padding: theme.spacing(3),
  background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.05) 0%, rgba(33, 150, 243, 0.05) 100%)',
  borderRadius: 16,
  margin: theme.spacing(3),
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  }
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  borderRadius: 12,
  background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.08) 0%, rgba(33, 150, 243, 0.08) 100%)',
  border: '1px solid rgba(63, 81, 181, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(63, 81, 181, 0.2)',
    background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.12) 0%, rgba(33, 150, 243, 0.12) 100%)',
  }
}));

export const Archieve = () => {
  const [activeTab, setActiveTab] = useState(-1); // -1 means no tab selected initially
  const [showWelcome, setShowWelcome] = useState(true);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setShowWelcome(false);
  };

  const tabData = [
    {
      label: 'תלמידות',
      icon: <SchoolIcon />,
      component: <StudentArchieveTable />,
      color: '#e91e63',
      description: 'ארכיון כל התלמידות שלמדו במוסד'
    },
    {
      label: 'מרצות',
      icon: <PersonIcon />,
      component: <SpeakerArchieveTable />,
      color: '#9c27b0',
      description: 'ארכיון כל המרצות שלימדו במוסד'
    },
    {
      label: 'קורסים',
      icon: <MenuBookIcon />,
      component: <CourseArchieveTable />,
      color: '#3f51b5',
      description: 'ארכיון כל הקורסים שנערכו במוסד'
    }
  ];

  return (
    <div className="archive-page">
      <Routing />
      
      <Container maxWidth="xl">
        <ArchiveContainer elevation={3}>
          <ArchiveHeader>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              position: 'relative',
              zIndex: 2
            }}>
              <ArchiveIcon sx={{ 
                fontSize: '2.5rem', 
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' 
              }} />
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  fontWeight: 700,
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  margin: 0
                }}
              >
                ארכיון מערכת הניהול
              </Typography>
            </Box>
            <Typography 
              variant="h6" 
              sx={{ 
                mt: 2, 
                opacity: 0.9,
                position: 'relative',
                zIndex: 2,
                fontWeight: 400
              }}
            >
              כאן תוכלו לצפות בכל הנתונים הארכיוניים של המערכת
            </Typography>
          </ArchiveHeader>

          <StatsContainer>
            {tabData.map((tab, index) => (
              <StatItem 
                key={index}
                onClick={() => handleTabChange(null, index)}
                className="fade-in"
                sx={{ 
                  animationDelay: `${index * 0.1}s`,
                  borderColor: tab.color + '40',
                  '&:hover': {
                    borderColor: tab.color,
                  }
                }}
              >
                <Box sx={{ color: tab.color, mb: 1 }}>
                  {React.cloneElement(tab.icon, { sx: { fontSize: '2.5rem' } })}
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    color: tab.color,
                    mb: 1
                  }}
                >
                  {tab.label}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#6c757d',
                    fontSize: '0.9rem'
                  }}
                >
                  {tab.description}
                </Typography>
              </StatItem>
            ))}
          </StatsContainer>

          <StyledTabs 
            value={activeTab >= 0 ? activeTab : false}
            onChange={handleTabChange} 
            variant="fullWidth"
            textColor="primary"
            aria-label="archive tabs"
          >
            {tabData.map((tab, index) => (
              <StyledTab 
                key={index}
                icon={tab.icon} 
                iconPosition="start" 
                label={tab.label}
                sx={{
                  '&.Mui-selected': {
                    background: `linear-gradient(45deg, ${tab.color}, ${tab.color}dd)`,
                  }
                }}
              />
            ))}
          </StyledTabs>

          {showWelcome && activeTab === -1 ? (
            <WelcomeContainer>
              <WelcomeContent>
                <TouchAppIcon 
                  sx={{ 
                    fontSize: '4rem', 
                    color: '#3f51b5',
                    mb: 3,
                    animation: 'float 3s ease-in-out infinite'
                  }} 
                />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700, 
                    color: '#2c3e50',
                    mb: 2
                  }}
                >
                  ברוכים הבאים לארכיון
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#7f8c8d',
                    mb: 4,
                    lineHeight: 1.6
                  }}
                >
                  בחרו קטגוריה מהכרטיסיות למעלה או לחצו על אחד הכרטיסים כדי לצפות בנתונים הארכיוניים
                </Typography>
                <Divider sx={{ my: 3, background: 'linear-gradient(90deg, transparent, #3f51b5, transparent)' }} />
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  {tabData.map((tab, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      startIcon={tab.icon}
                      onClick={() => handleTabChange(null, index)}
                      sx={{
                        borderColor: tab.color,
                        color: tab.color,
                        fontWeight: 600,
                        borderRadius: 3,
                        px: 3,
                        py: 1.5,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: tab.color + '10',
                          borderColor: tab.color,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 6px 20px ${tab.color}40`,
                        }
                      }}
                    >
                      {tab.label}
                    </Button>
                  ))}
                </Box>
              </WelcomeContent>
            </WelcomeContainer>
          ) : (
            <ContentContainer>
              {tabData.map((tab, index) => (
                <Fade key={index} in={activeTab === index} timeout={500}>
                  <div style={{ display: activeTab === index ? 'block' : 'none' }}>
                    {activeTab === index && tab.component}
                  </div>
                </Fade>
              ))}
            </ContentContainer>
          )}
        </ArchiveContainer>
      </Container>
    </div>
  );
};
