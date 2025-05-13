
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

