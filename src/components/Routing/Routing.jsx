
import { Route, Routes } from "react-router-dom"
 import { Student } from "../Student/Student"
import { Course } from "../Course/Course"
import { Speaker } from "../Speaker/Speaker"
import MyAppBar from "../MyAppBar/MyAppBar"
import { Home } from "../Home/Home"

import { Supplier } from "../copyTable"
import EnhancedTable from "../Student/studentTable"
import CardCourse from "../ShowCourse/cardCourse"
import { Archeive } from "../Archieve/Archieve"
import {B} from "../b" 
import { HomePage } from "../HomePage/HomePage"
import {ShowCourse} from "../ShowCourse/ShowCourse"
import JoinCourse from "../JoinCourse/JoinCourse"

export const Routing = () => {
    return <Routes>
        <Route path="/" element={<MyAppBar></MyAppBar>}></Route>
        <Route path="/Home/*" element={<Home></Home>}></Route>
        {/* <Route path="/Student/*" element={<Student></Student>}></Route> */}
        <Route path="/Speaker/*" element={<Speaker></Speaker>}></Route>
        <Route path="/Course/*" element={<Course></Course>}></Route>
        <Route path="/ShowCourse/*" element={<ShowCourse></ShowCourse>}></Route>
        {/* <Route path="/ShowCourse/*" element={<CardCourse></CardCourse>}></Route> */}
        <Route path="/joinCourse/*" element={<JoinCourse></JoinCourse>}></Route>
        <Route path="/Supplier/*" element={<Supplier></Supplier>}></Route>
        <Route path="/Student/*" element={<Student></Student>}></Route>
        <Route path="/Archieve/*" element={<Archeive></Archeive>}></Route>
        <Route path="/B/*" element={<B></B>}></Route>
        <Route path='/HomePage' element={<HomePage></HomePage>}></Route>
        {/* <Route path="/HomePage" element={<HomePage></HomePage>}></Route> */}
    </Routes>
}