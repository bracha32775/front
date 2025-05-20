
// // import { Route, Routes } from "react-router-dom"
// //  import { Student } from "../Student/Student"
// // import { Course } from "../Course/Course"
// // import { Speaker } from "../Speaker/Speaker"
// // import MyAppBar from "../MyAppBar/MyAppBar"
// // import { Home } from "../Home/Home"

// // import { Supplier } from "../copyTable"
// // import EnhancedTable from "../Student/studentTable"
// // import CardCourse from "../ShowCourse/cardCourse"
// // import {B} from "../b" 
// // import { HomePage } from "../HomePage/HomePage"
// // import {ShowCourse} from "../ShowCourse/ShowCourse"
// // import JoinCourse from "../JoinCourse/JoinCourse"
// // import { Archeive } from "../Archieve/Archieve"





// // export const Routing = () => {
// //     return <Routes>
      
// //         <Route path="/" element={<MyAppBar></MyAppBar>}></Route>
// //         <Route path="/Home/*" element={<Home></Home>}></Route>
// //         {/* <Route path="/Student/*" element={<Student></Student>}></Route> */}
// //         <Route path="/Speaker/*" element={<Speaker></Speaker>}></Route>
// //         <Route path="/Course" element={<Course></Course>}></Route>
// //         <Route path="/ShowCourse/*" element={<ShowCourse></ShowCourse>}></Route>
// //         {/* <Route path="/ShowCourse/*" element={<CardCourse></CardCourse>}></Route> */}
// //         <Route path="/joinCourse/*" element={<JoinCourse></JoinCourse>}></Route>
// //         <Route path="/Supplier/*" element={<Supplier></Supplier>}></Route>
// //         <Route path="/Student/*" element={<Student></Student>}></Route>
// //         <Route path="/Archieve/*" element={<Archeive></Archeive>}></Route>
// //         <Route path="/B/*" element={<B></B>}></Route>
// //         <Route path='/HomePage' element={<HomePage></HomePage>}></Route>
      
// //     </Routes>
// // }

// import { Route, Routes } from "react-router-dom"
// import { Student } from "../Student/Student"
// import { Course } from "../Course/Course"
// import { Speaker } from "../Speaker/Speaker"
// import MyAppBar from "../MyAppBar/MyAppBar"
// import { Home } from "../Home/Home"
// // import { Supplier } from "../copyTable"
// import EnhancedTable from "../Student/studentTable"
// import CardCourse from "../ShowCourse/cardCourse"
// // import { B } from "../b" 
// import { HomePage } from "../HomePage/HomePage"
// import { ShowCourse } from "../ShowCourse/ShowCourse"
// import JoinCourse from "../JoinCourse/JoinCourse"
// import { Archeive } from "../Archieve/Archieve" 
// import { Home2 } from "../Home2/Home2" 
// import { Calendar } from "../Calendar/Calendar" 
// export const Routing = () => {
//     return <Routes>
//         <Route path="/" element={<MyAppBar></MyAppBar>}></Route>
//         <Route path="/Home/*" element={<Home></Home>}></Route>
//         <Route path="/Student/*" element={<Student></Student>}></Route>
//         <Route path="/Speaker/*" element={<Speaker></Speaker>}></Route>
//         <Route path="/Course" element={<Course></Course>}></Route>
//         <Route path="/Course/:id" element={<ShowCourse></ShowCourse>}></Route>
//         <Route path="/ShowCourse/*" element={<ShowCourse></ShowCourse>}></Route>
//         <Route path="/ShowCourse/:id" element={<ShowCourse></ShowCourse>}></Route>
//         <Route path="/joinCourse/*" element={<JoinCourse></JoinCourse>}></Route>
//         {/* <Route path="/Supplier/*" element={<Supplier></Supplier>}></Route> */}
//         {/* <Route path="/Archieve/*" element={<Archieve></Archieve>}></Route> */}
//         {/* <Route path="/B/*" element={<B></B>}></Route> */}
//         <Route path='/HomePage' element={<HomePage></HomePage>}></Route>
//         <Route path='Archieve'element={<Archeive></Archeive>}></Route>
//         <Route path='Home2'element={<Home2></Home2>}></Route>
//         <Route path='Calendar'element={<Calendar></Calendar>}></Route>   
//     </Routes>
// }





import { Route, Routes } from "react-router-dom"
import { Student } from "../Student/Student"
import { Course } from "../Course/Course"
import { Speaker2 } from "../Speaker/Speaker2"
import MyAppBar from "../MyAppBar/MyAppBar"
import { Home } from "../Home/Home"
import { HomePage } from "../HomePage/HomePage"
// import { ShowCourse } from "../ShowCourse/ShowCourse"
// import JoinCourse from "../JoinCourse/JoinCourse"
import {ShowCourse} from "../ShowCourse/ShowCourse"
import { Archeive } from "../Archieve/Archieve"
import { Home2 } from "../Home2/Home2"  
import { Calendar } from "../Calender/Calendar"
import { Speaker } from "../Speaker/Speaker"
import JoinCourse3 from "../JoinCourse/JoinCourse3"
import JoinCourse2 from "../JoinCourse/joinCourse2"
// יש לייבא את Calendar מהנתיב הנכון
// import { Calendar } from "../Calendar/Calendar"

export const Routing = () => {
    return <Routes>
        <Route path="/" element={<MyAppBar></MyAppBar>}></Route>
        <Route path="/Home/*" element={<Home></Home>}></Route>
        {/* <Route path="/Speaker/*" element={<Speaker></Speaker>}></Route> */}
        {/* <Route path="/Student/*" element={<Student></Student>}></Route> */}
        {/* <Route path="/Speaker/*" element={<Speaker></Speaker>}></Route> */}
        <Route path="/Speaker/*" element={<Speaker2></Speaker2>}></Route>
        <Route path="/Course" element={<Course></Course>}></Route>
        <Route path="/ShowCourse/*" element={<ShowCourse></ShowCourse>}></Route>
        {/* <Route path="/joinCourse/*" element={<JoinCourse></JoinCourse>}></Route> */}
        {/* <Route path="/ShowCourse/*" element={<CardCourse></CardCourse>}></Route> */}
        {/* <Route path="/joinCourse/:id" element={<JoinCourse2></JoinCourse2>}></Route> */}
        <Route path="/joinCourse/:id" element={<JoinCourse3></JoinCourse3>}></Route>
        {/* <Route path="/Supplier/*" element={<Supplier></Supplier>}></Route> */}
        <Route path="/Student/*" element={<Student></Student>}></Route>
        <Route path='Archieve'element={<Archeive></Archeive>}></Route>
        <Route path='/HomePage' element={<HomePage></HomePage>}></Route>
        <Route path='Home2'element={<Home2></Home2>}></Route>
        <Route path="/Calendar/" element={<Calendar></Calendar>}></Route>
    </Routes>
}
