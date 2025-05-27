// // // 
// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from "react-redux";
// // import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
// // import AddIcon from '@mui/icons-material/Add';
// // import Button from '@mui/material/Button';
// // import { styled } from '@mui/material/styles';
// // import Dialog from '@mui/material/Dialog';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import DialogContent from '@mui/material/DialogContent';
// // import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// // import { Routing } from '../Routing/Routing'
// // import { useNavigate } from 'react-router-dom';
// // import { AddStudent } from '../Add/AddStudent/AddStudent'
// // import { useState } from "react";
// // import * as React from 'react';
// // import './Student.css'
// // import EnhancedTable from './studentTable';
// import { setFlagStudentSlice } from '../../redux/Slices/studentSlice';

// // // const JoinCourse3 = () => {
// // export const Student = () => {
// //   const flagClose = useSelector(state => state.students.flagClose);
// //   const nav = useNavigate()
// //   const dispatch = useDispatch()
// //   const students = useSelector(state => state.students.students);
// //   const [open, setOpen] = React.useState(false);
// //   //;setOpen(useSelector(state => state.students.open))
// //   const [flag, setFlag] = useState()
// //   async function doIt() {
// //     await dispatch(getStudentsThunk())
// //   }
  
// //   useEffect(() => {
// //     doIt()
// //   }, [])

// //   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// //     '& .MuiDialogContent-root': {
// //       padding: theme.spacing(3),
// //     },
// //     '& .MuiDialogActions-root': {
// //       padding: theme.spacing(3),
// //     },
// //   }));



// //   const handleClickOpen = () => {
// //     setOpen(true);
// //     dispatch(setFlagStudentSlice(false))
// //   };
// //   const handleClose = () => {
// //     setOpen(false);

// //   };

// //   return <div>
// //     <Routing></Routing>
// //     {/* <p className='pTeachers'>נבחרת התלמידות שלנו</p>
// //     <table>
// //       <thead>
// //         <tr >
// //           <td className='cotarot'>שם</td>
// //           <td className='cotarot'>מספר טלפון כרגע</td>
// //           <td className='cotarot'>כתובת(זמננננננני)</td>
// //         </tr></thead>
// //       <tbody>

// //         {students.map(x => {
// //           return <tr >
// //             <td className='tochen'>{x.nameOfStudent}</td>
// //             <td className='tochen'>{x.phoneOfStudent}</td>
// //             <td className='tochen'>{x.addressOfStudent}</td>
// //           </tr>
// //         })}
// //       </tbody>
// //     </table> */}
// //     <EnhancedTable></EnhancedTable>
// //     <React.Fragment>
// //       <Button variant="outlined" onClick={handleClickOpen}>
// //         הוספת תלמידה
// //         <AddIcon ></AddIcon>
// //       </Button>
// //       {!flagClose && <BootstrapDialog
// //         onClose={handleClose}
// //         aria-labelledby="customized-dialog-title"
// //         open={open}
// //       >
// //         <DialogTitle
// //           id="customized-dialog-title">
// //           הוספת תלמידה
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
// //           <AddStudent></AddStudent>
// //         </DialogContent >
// //       </BootstrapDialog>}
// //     </React.Fragment>
// //   </div>
// // }


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
// import MyAppBar from '../MyAppBar/MyAppBar';
// import { AddStudent} from '../Add/AddStudent/AddStudent';
// import { deleteStudentThunk } from '../../redux/Thunks/deleteStudentThunk';
// import { getByStudentNameThunk } from '../../redux/Thunks/getByStudentNameThunk';
// // import { setFlagSpeakerSlice } from '../../redux/Slices/studentSlice';
// import * as XLSX from 'xlsx';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import {
//     Add as AddIcon,
//     DeleteForever as DeleteForeverIcon
// } from '@mui/icons-material';
// import {
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     Snackbar,
//     Alert,
//     CircularProgress
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import {
//     Box,
//     Typography,
//     TextField,
//     InputAdornment,
//     Container,
//     Paper,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     TablePagination,
//     TableSortLabel,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     Button,
//     Chip,
//     Avatar,
//     Card,
//     CardContent,
//     Grid,
//     Divider,
//     List,
//     ListItem,
//     ListItemText,
//     ListItemIcon,
//     IconButton,
//     Tooltip
// } from '@mui/material';
// import {
//     Search as SearchIcon,
//     Phone as PhoneIcon,
//     Email as EmailIcon,
//     Home as HomeIcon,
//     School as SchoolIcon,
//     Event as EventIcon,
//     CheckCircle as CheckCircleIcon,
//     Cancel as CancelIcon,
//     ArrowBack as ArrowBackIcon,
//     CalendarMonth as CalendarMonthIcon,
//     AccessTime as AccessTimeIcon,
//     LocationOn as LocationOnIcon
// } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// // יצירת תמה עם תמיכה ב-RTL
// const rtlTheme = createTheme({
//     direction: 'rtl',
// });

// // סטיילים מותאמים - פשוטים יותר
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     boxShadow: 'none',
//     border: 'none',
// }));


// const StyledTableHead = styled(TableHead)(({ theme }) => ({
//     '& .MuiTableCell-head': {
//         fontWeight: 'bold',
//         borderBottom: '1px solid rgba(224, 224, 224, 1)',
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme, isActive }) => ({
//     '&:hover': {
//         backgroundColor: 'rgba(0, 0, 0, 0.04)',
//         transition: 'background-color 0.2s ease',
//     },
//     cursor: 'pointer',
//     borderBottom: '1px solid rgba(224, 224, 224, 0.5)',
// }));

// const StatusChip = styled(Chip)(({ theme, isActive }) => ({
//     backgroundColor: isActive ? '#4caf50' : '#f44336',
//     color: 'white',
//     fontWeight: 'bold',
//     '& .MuiChip-icon': {
//         color: 'white',
//     },
// }));

// const SearchField = styled(TextField)(({ theme }) => ({
//     '& .MuiOutlinedInput-root': {
//         borderRadius: '4px',
//     },
// }));

// // שאר הקוד נשאר זהה לדיאלוג שנפתח בלחיצה
// const DialogHeader = styled(DialogTitle)(({ theme }) => ({
//     background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
//     color: 'white',
//     padding: theme.spacing(2),
// }));

// export const Student = () => {
//     const dispatch = useDispatch();
//     const students = useSelector(state => state.students.students);

//     const [open, setOpen] = useState(false);
//     const [openDelete, setOpenDelete] = useState(false);
//     const [deleteStudentName, setDeleteStudentName] = useState("");
//     const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//     const [loading, setLoading] = useState(false);
//     const flagClose = useSelector(state => state.speakers.flagClose);

//     const [searchTerm, setSearchTerm] = useState('');
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(10);
//     const [order, setOrder] = useState('asc');
//     const [orderBy, setOrderBy] = useState('nameOfStudent');
//     const [selectedStudent, setSelectedStudent] = useState(null);
//     const [openDialog, setOpenDialog] = useState(false);

//     useEffect(() => {
//         dispatch(getStudentsThunk());
//     }, [dispatch]);

//     // פונקציית מיון
//     function descendingComparator(a, b, orderBy) {
//         if (!a[orderBy] || !b[orderBy]) return 0;

//         if (b[orderBy] < a[orderBy]) {
//             return -1;
//         }
//         if (b[orderBy] > a[orderBy]) {
//             return 1;
//         }
//         return 0;
//     }

//     function getComparator(order, orderBy) {
//         return order === 'desc'
//             ? (a, b) => descendingComparator(a, b, orderBy)
//             : (a, b) => -descendingComparator(a, b, orderBy);
//     }

//     // פילטור המרצים לפי מונח החיפוש
//     const filteredStudents = students.filter(student =>
//       student.nameOfStudent?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.phoneOfStudent?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.addressOfStudent?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // מיון המרצים
//     const sortedStudents = React.useMemo(
//         () =>
//             [...filteredStudents].sort(getComparator(order, orderBy)),
//         [filteredStudents, order, orderBy]
//     );

//     // טיפול בשינוי עמוד
//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     // טיפול בשינוי מספר שורות בעמוד
//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     // טיפול בשינוי מיון
//     const handleRequestSort = (property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };

//     // פתיחת דיאלוג פרטי מרצה
//     const handleOpenStudentDetails = (student) => {
//         setSelectedStudent(student);
//         setOpenDialog(true);
//     };

//     // סגירת דיאלוג
//     const handleCloseDialog = () => {
//         setOpenDialog(false);
//     };

//     // בדיקה האם המרצה פעיל (יש לו קורסים)
//     const isStudentActive = (student) => {
//         return student.status;
//     };

//     const handleAddStudent = () => {
//         setOpen(true);
//         dispatch(setFlagStudentSlice(false));
//     };

//     const handleDeleteDialogOpen = () => {
//         setOpenDelete(true);
//     };

//     const handleDeleteStudent = async () => {
//         if (!deleteStudentName) {
//             setSnackbar({
//                 open: true,
//                 message: 'יש לבחור תלמידה למחיקה',
//                 severity: 'error'
//             });
//             return;
//         }

//         setLoading(true);
//         try {
//             const tempStudent= await dispatch(getByStudentNameThunk(deleteStudentName));
//             if (tempStudent.payload) {
//                 await dispatch(deleteStudentThunk(tempStudent.payload.idOfStudent));
//                 setSnackbar({
//                     open: true,
//                     message: `המרצה ${deleteStudentName} נמחק בהצלחה`,
//                     severity: 'success'
//                 });
//                 setOpenDelete(false);
//                 setDeleteStudentName("");
//             }
//         } catch (error) {
//             setSnackbar({
//                 open: true,
//                 message: 'שגיאה במחיקת המרצה',
//                 severity: 'error'
//             });
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleCloseSnackbar = () => {
//         setSnackbar({ ...snackbar, open: false });
//     };

//     const exportToExcel = () => {
//         // הכנת הנתונים לייצוא
//         const dataToExport = sortedStudents.map(speaker => ({
//             'שם תלמידה': speaker.nameOfSpeaker || '',
//             'טלפון': speaker.phoneOfSpeaker || '',
//             'אימייל': speaker.emailOfSpeaker || '',
//             'כתובת': speaker.addressOfSpeaker || '',
//             'מספר קורסים': speaker.courses ? speaker.courses.length : 0,
//             'סטטוס': isStudentActive(speaker) ? 'פעיל' : 'לא פעיל'
//         }));

//         // יצירת גיליון עבודה
//         const worksheet = XLSX.utils.json_to_sheet(dataToExport);

//         // יצירת ספר עבודה
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, 'תלמידות');

//         // התאמת רוחב העמודות
//         const columnWidths = [
//             { wch: 20 }, // שם המרצה
//             { wch: 20 }, // תחום התמחות
//             { wch: 15 }, // טלפון
//             { wch: 25 }, // אימייל
//             { wch: 30 }, // כתובת
//             { wch: 15 }, // מספר קורסים
//             { wch: 10 }  // סטטוס
//         ];
//         worksheet['!cols'] = columnWidths;

//         // הורדת הקובץ
//         XLSX.writeFile(workbook, 'רשימת_תלמידות.xlsx');
//     };

//     return (

//         <ThemeProvider theme={rtlTheme}> <br></br>
//             <div dir="rtl">
//                 <MyAppBar />
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//                     <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
//                         מאגר תלמידים
//                     </Typography>
//                     <Box sx={{ display: 'flex', gap: 2 }}>
//                         <Button
//                             onClick={handleAddStudent}
//                             variant="outlined"
//                             color="primary"
//                         >
//                             <AddIcon />
//                             <span> הוספת תלמידה</span>
//                         </Button>
//                         <Button
//                             variant="outlined"
//                             color="error"
//                             onClick={handleDeleteDialogOpen}
//                         >
//                             <DeleteForeverIcon />
//                             מחיקת תלמידה
//                         </Button>

//                         {/* כפתור ייצוא לאקסל */}
//                         <Button
//                             variant="outlined"
//                             color="success"
//                             onClick={exportToExcel}
//                         >
//                             <FileDownloadIcon />
//                             ייצוא לאקסל
//                         </Button>
//                     </Box>
//                 </Box>
//                 <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//                     <Paper
//                         elevation={0}
//                         sx={{
//                             p: 3,
//                             backgroundColor: 'transparent'
//                         }}
//                     >
//                         {/* <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
//                             מאגר מרצים
//                         </Typography> */}

//                         <SearchField
//                             fullWidth
//                             variant="outlined"
//                             placeholder="חיפוש לפי שם, תחום או מיקום..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             sx={{ mb: 3 }}
//                             InputProps={{
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         <SearchIcon />
//                                     </InputAdornment>
//                                 ),
//                             }}
//                         />

//                         <StyledTableContainer>
//                             <Table aria-label="students table">
//                                 <StyledTableHead>
//                                     <TableRow>
//                                         <TableCell>
//                                             <TableSortLabel
//                                                 active={orderBy === 'nameOfStudent'}
//                                                 direction={orderBy === 'nameOfStudent' ? order : 'asc'}
//                                                 onClick={() => handleRequestSort('nameOfStudent')}
//                                             >
//                                                 שם המרצה
//                                             </TableSortLabel>
//                                         </TableCell>
//                                         <TableCell>טלפון</TableCell>
//                                         <TableCell>אימייל</TableCell>
//                                         <TableCell>כתובת</TableCell>
//                                         <TableCell>
//                                             <TableSortLabel
//                                                 active={orderBy === 'courses'}
//                                                 direction={orderBy === 'courses' ? order : 'asc'}
//                                                 onClick={() => handleRequestSort('courses')}
//                                             >
//                                                 מספר קורסים
//                                             </TableSortLabel>
//                                         </TableCell>
//                                         <TableCell>סטטוס</TableCell>
//                                     </TableRow>
//                                 </StyledTableHead>
//                                 <TableBody>
//                                     {sortedStudents
//                                         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                                         .map((student) => {
//                                             const isActive = isStudentActive(student);
//                                             return (
//                                                 <StyledTableRow
//                                                     key={isActive}  
//                                                     onClick={() => handleOpenStudentDetails(student)}
//                                                     isActive={isActive}
//                                                 >
//                                                     <TableCell>{student.nameOfStudent}</TableCell>
//                                                     <TableCell>{student.phoneOfStudent}</TableCell>
//                                                     <TableCell>{student.emailOfStudent}</TableCell>
//                                                     <TableCell>{student.addressOfStudent}</TableCell>
//                                                     <TableCell>{student.courses ? student.courses.length : 0}</TableCell>
//                                                     <TableCell>
//                                                         <StatusChip
//                                                             isActive={isActive}
//                                                             label={student.status ? 'פעיל' : 'לא פעיל'}
//                                                             icon={isActive ? <CheckCircleIcon /> : <CancelIcon />}
//                                                             size="small"
//                                                         />
//                                                     </TableCell>
//                                                 </StyledTableRow>
//                                             );
//                                         })}
//                                 </TableBody>
//                             </Table>
//                         </StyledTableContainer>

//                         <TablePagination
//                             rowsPerPageOptions={[5, 10, 25]}
//                             component="div"
//                             count={sortedStudents.length}
//                             rowsPerPage={rowsPerPage}
//                             page={page}
//                             onPageChange={handleChangePage}
//                             onRowsPerPageChange={handleChangeRowsPerPage}
//                             labelRowsPerPage="שורות בעמוד:"
//                             labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
//                         />
//                     </Paper>
//                 </Container>

//                 {/* דיאלוג פרטי מרצה */}
//                 <Dialog
//                     open={openDialog}
//                     onClose={handleCloseDialog}
//                     maxWidth="md"
//                     fullWidth
//                 >
//                     {selectedStudent && (
//                         <>
//                             <DialogHeader>
//                                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                     <Avatar sx={{ bgcolor: 'white', color: 'primary.main', mr: 2, width: 56, height: 56 }}>
//                                         {selectedStudent.nameOfStudent?.charAt(0)}
//                                     </Avatar>
//                                     <Typography variant="h6">
//                                         {selectedStudent.nameOfStudent}
//                                     </Typography>
//                                 </Box>
//                             </DialogHeader>
//                             <DialogContent>
//                                 <Grid container spacing={3}>
//                                     <Grid item xs={12} md={6}>
//                                         <Card sx={{ height: '100%' }}>
//                                             <CardContent>
//                                                 <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
//                                                     פרטי קשר
//                                                 </Typography>
//                                                 <List>
//                                                     <ListItem>
//                                                         <ListItemIcon>
//                                                             <PhoneIcon color="primary" />
//                                                         </ListItemIcon>
//                                                         <ListItemText
//                                                             primary="טלפון"
//                                                             secondary={selectedStudent.phoneOfStudent || 'לא זמין'}
//                                                         />
//                                                     </ListItem>
//                                                     <ListItem>
//                                                         <ListItemIcon>
//                                                             <EmailIcon color="primary" />
//                                                         </ListItemIcon>
//                                                         <ListItemText
//                                                             primary="אימייל"
//                                                             secondary={selectedStudent.emailOfStudent || 'לא זמין'}
//                                                         />
//                                                     </ListItem>
//                                                     <ListItem>
//                                                         <ListItemIcon>
//                                                             <HomeIcon color="primary" />
//                                                         </ListItemIcon>
//                                                         <ListItemText
//                                                             primary="כתובת"
//                                                             secondary={selectedStudent.addressOfStudent|| 'לא זמין'}
//                                                         />
//                                                     </ListItem>
//                                                 </List>
//                                             </CardContent>
//                                         </Card>
//                                     </Grid>
//                                     <Grid item xs={12} md={6}>
//                                         <Card sx={{ height: '100%' }}>
//                                             <CardContent>
//                                                 <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
//                                                     פרטים מקצועיים
//                                                 </Typography>
//                                                 <List>
                                                   
//                                                     <ListItem>
//                                                         <ListItemIcon>
//                                                             <EventIcon color="primary" />
//                                                         </ListItemIcon>
//                                                         <ListItemText
//                                                             primary="מספר קורסים"
//                                                             secondary={selectedStudent.courses ? selectedStudent.courses.length : 0}
//                                                         />
//                                                     </ListItem>
//                                                     <ListItem>
//                                                         <ListItemIcon>
//                                                             {isStudentActive(selectedStudent) ? (
//                                                                 <CheckCircleIcon color="success" />
//                                                             ) : (
//                                                                 <CancelIcon color="error" />
//                                                             )}
//                                                         </ListItemIcon>
//                                                         <ListItemText
//                                                             primary="סטטוס"
//                                                             secondary={isStudentActive(selectedStudent) ? 'פעיל' : 'לא פעיל'}
//                                                         />
//                                                     </ListItem>
//                                                 </List>
//                                             </CardContent>
//                                         </Card>
//                                     </Grid>

//                                     {selectedStudent.courses && selectedStudent.courses.length > 0 && (
//                                         <Grid item xs={12}>
//                                             <Card>
//                                                 <CardContent>
//                                                     <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
//                                                         קורסים ({selectedStudent.courses.length})
//                                                     </Typography>
//                                                     <Divider sx={{ mb: 2 }} />
//                                                     <Grid container spacing={2}>
//                                                         {selectedStudent.courses.map((course) => (
//                                                             <Grid item xs={12} sm={6} md={4} key={course.idOfCourse}>
//                                                                 <Card variant="outlined">
//                                                                     <CardContent>
//                                                                         <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//                                                                             {course.nameOfCourse}
//                                                                         </Typography>
//                                                                         <Box sx={{ mt: 1 }}>
//                                                                             <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
//                                                                                 <CalendarMonthIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
//                                                                                 <Typography variant="body2" color="text.secondary">
//                                                                                     {course.startDateOfCourse}
//                                                                                 </Typography>
//                                                                             </Box>
//                                                                             <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
//                                                                                 <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
//                                                                                 <Typography variant="body2" color="text.secondary">
//                                                                                     {course.dayOfCourse}, {course.hourOfCourse}
//                                                                                 </Typography>
//                                                                             </Box>
//                                                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                                                 <LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
//                                                                                 <Typography variant="body2" color="text.secondary">
//                                                                                     {course.placeOfCourse || 'לא צוין'}
//                                                                                 </Typography>
//                                                                             </Box>
//                                                                         </Box>
//                                                                     </CardContent>
//                                                                 </Card>
//                                                             </Grid>
//                                                         ))}
//                                                     </Grid>
//                                                 </CardContent>
//                                             </Card>
//                                         </Grid>
//                                     )}
//                                 </Grid>
//                             </DialogContent>
//                             <DialogActions>
//                                 <Button onClick={handleCloseDialog} color="primary">
//                                     סגור
//                                 </Button>
//                             </DialogActions>
//                         </>
//                     )}
//                 </Dialog>

//                 {/* דיאלוג הוספת מרצה */}
//                 <Dialog
//                     open={open}
//                     onClose={() => setOpen(false)}
//                     maxWidth="md"
//                     fullWidth
//                 >
//                     <DialogTitle>הוספת תלמיד חדש</DialogTitle>
//                     <DialogContent>
//                         <AddStudent></AddStudent>
//                     </DialogContent>
//                 </Dialog>

//                 {/* דיאלוג מחיקת מרצה */}
//                 <Dialog
//                     open={openDelete}
//                     onClose={() => setOpenDelete(false)}
//                     maxWidth="sm"
//                     fullWidth
//                 >
//                     <DialogTitle>מחיקת מרצה</DialogTitle>
//                     <DialogContent>
//                         <Box sx={{ mt: 2 }}>
//                             <FormControl fullWidth>
//                                 <InputLabel id="delete-student-label">בחר מרצה למחיקה</InputLabel>
//                                 <Select
//                                     labelId="delete-student-label"
//                                     value={deleteStudentName}
//                                     onChange={(e) => setDeleteStudentName(e.target.value)}
//                                     label="בחר תלמידה למחיקה"
//                                 >
//                                     {students.map((student) => (
//                                         <MenuItem key={student.idOfStudent} value={student.nameOfStudent}>
//                                             {student.nameOfStudent}
//                                         </MenuItem>
//                                     ))}
//                                 </Select>
//                             </FormControl>
//                         </Box>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={() => setOpenDelete(false)} color="primary">
//                             ביטול
//                         </Button>
//                         <Button
//                             onClick={handleDeleteStudent}
//                             color="error"
//                             variant="contained"
//                             disabled={loading || !deleteStudentName}
//                         >
//                             {loading ? <CircularProgress size={24} /> : 'מחק'}
//                         </Button>
//                     </DialogActions>
//                 </Dialog>

//                 {/* Snackbar להודעות */}
//                 <Snackbar
//                     open={snackbar.open}
//                     autoHideDuration={6000}
//                     onClose={handleCloseSnackbar}
//                     anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//                 >
//                     <Alert
//                         onClose={handleCloseSnackbar}
//                         severity={snackbar.severity}
//                         sx={{ width: '100%' }}
//                     >
//                         {snackbar.message}
//                     </Alert>
//                 </Snackbar>
//             </div>
//         </ThemeProvider>
//     );
// };

// export default Student;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
import MyAppBar from '../MyAppBar/MyAppBar';
import { AddStudent} from '../Add/AddStudent/AddStudent';
import { deleteStudentThunk } from '../../redux/Thunks/deleteStudentThunk';
// import { getByStudentNameThunk } from '../../redux/Thunks/getByStudentNameThunk'; // לא נחוץ יותר
// import { setFlagSpeakerSlice } from '../../redux/Slices/studentSlice'; // נראה שזה שגוי, צריך להיות studentSlice
import * as XLSX from 'xlsx';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {
    Add as AddIcon,
    DeleteForever as DeleteForeverIcon
} from '@mui/icons-material';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Snackbar,
    Alert,
    CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    TableSortLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Chip,
    Avatar,
    Card,
    CardContent,
    Grid,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    Tooltip
} from '@mui/material';
import {
    Search as SearchIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    Home as HomeIcon,
    School as SchoolIcon, // אולי לשנות לאייקון אחר אם לא רלוונטי
    Event as EventIcon,
    CheckCircle as CheckCircleIcon,
    Cancel as CancelIcon,
    ArrowBack as ArrowBackIcon,
    CalendarMonth as CalendarMonthIcon,
    AccessTime as AccessTimeIcon,
    LocationOn as LocationOnIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// יצירת תמה עם תמיכה ב-RTL
const rtlTheme = createTheme({
    direction: 'rtl',
});

// סטיילים מותאמים - פשוטים יותר
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    boxShadow: 'none',
    border: 'none',
}));


const StyledTableHead = styled(TableHead)(({ theme }) => ({
    '& .MuiTableCell-head': {
        fontWeight: 'bold',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme, isActive }) => ({
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        transition: 'background-color 0.2s ease',
    },
    cursor: 'pointer',
    borderBottom: '1px solid rgba(224, 224, 224, 0.5)',
}));

const StatusChip = styled(Chip)(({ theme, isActive }) => ({
    backgroundColor: isActive ? '#4caf50' : '#f44336',
    color: 'white',
    fontWeight: 'bold',
    '& .MuiChip-icon': {
        color: 'white',
    },
}));

const SearchField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '4px',
    },
}));

// שאר הקוד נשאר זהה לדיאלוג שנפתח בלחיצה
const DialogHeader = styled(DialogTitle)(({ theme }) => ({
    background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
    color: 'white',
    padding: theme.spacing(2),
}));

export const Student = () => {
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.students);

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [deleteStudentName, setDeleteStudentName] = useState("");
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [loading, setLoading] = useState(false);
    // const flagClose = useSelector(state => state.speakers.flagClose); // נראה שגוי, צריך להיות studentSlice

    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('nameOfStudent');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        dispatch(getStudentsThunk());
    }, [dispatch]);

    // פונקציית מיון
    function descendingComparator(a, b, orderBy) {
        // טיפול בערכים חסרים או שונים
        const aValue = a[orderBy] ?? ''; // השתמש ב-'' אם הערך חסר
        const bValue = b[orderBy] ?? ''; // השתמש ב-'' אם הערך חסר

        // טיפול מיוחד במספר קורסים
        if (orderBy === 'courses') {
             const aCourseCount = Array.isArray(aValue) ? aValue.length : 0;
             const bCourseCount = Array.isArray(bValue) ? bValue.length : 0;
             if (bCourseCount < aCourseCount) return -1;
             if (bCourseCount > aCourseCount) return 1;
             return 0;
        }


        if (bValue < aValue) {
            return -1;
        }
        if (bValue > aValue) {
            return 1;
        }
        return 0;
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    // פילטור התלמידות לפי מונח החיפוש
    const filteredStudents = students.filter(student =>
      student.nameOfStudent?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phoneOfStudent?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.addressOfStudent?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.emailOfStudent?.toLowerCase().includes(searchTerm.toLowerCase()) // הוספת חיפוש לפי אימייל
    );

    // מיון התלמידות
    const sortedStudents = React.useMemo(
        () =>
            [...filteredStudents].sort(getComparator(order, orderBy)),
        [filteredStudents, order, orderBy]
    );

    // טיפול בשינוי עמוד
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // טיפול בשינוי מספר שורות בעמוד
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // טיפול בשינוי מיון
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    // פתיחת דיאלוג פרטי תלמידה
    const handleOpenStudentDetails = (student) => {
        setSelectedStudent(student);
        setOpenDialog(true);
    };

    // סגירת דיאלוג
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // בדיקה האם התלמידה פעילה (לפי שדה הסטטוס)
    const isStudentActive = (student) => {
        return student.status; // מניח ששדה status הוא בוליאני (true/false)
    };

    const handleAddStudent = () => {
        setOpen(true);
        // dispatch(setFlagStudentSlice(false)); // אם יש flag כזה ב-studentSlice
    };

    const handleDeleteDialogOpen = () => {
        setOpenDelete(true);
    };

    const handleDeleteStudent = async () => {
        if (!deleteStudentName) {
            setSnackbar({
                open: true,
                message: 'יש לבחור תלמידה למחיקה',
                severity: 'error'
            });
            return;
        }

        setLoading(true);
        try {
            // מציאת התלמידה לפי השם שנבחר מהרשימה הקיימת
            const studentToDelete = students.find(s => s.nameOfStudent === deleteStudentName);

            if (studentToDelete) {
                // שליחת ה-ID של התלמידה ל-thunk למחיקה (שינוי סטטוס)
                // שימוש ב-unwrap לטיפול בשגיאות מה-thunk
                await dispatch(deleteStudentThunk(studentToDelete.idOfStudent)).unwrap();
                setSnackbar({
                    open: true,
                    message: `התלמידה ${deleteStudentName} הועברה לארכיון בהצלחה `,
                    severity: 'success'
                });
                setOpenDelete(false);
                setDeleteStudentName("");
                // רענון רשימת התלמידות לאחר המחיקה
                dispatch(getStudentsThunk());
            } else {
                 setSnackbar({
                    open: true,
                    message: `שגיאה: התלמידה ${deleteStudentName} לא נמצאה ברשימה`,
                    severity: 'error'
                });
            }
        } catch (error) {
            console.error("Error deleting student:", error);
            setSnackbar({
                open: true,
                message: `שגיאה במחיקת התלמידה: ${error.message || 'שגיאה לא ידועה'}`,
                severity: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const exportToExcel = () => {
        // הכנת הנתונים לייצוא
        const dataToExport = sortedStudents.map(student => ({ // תיקון speaker ל-student
            'שם תלמידה': student.nameOfStudent || '', // תיקון nameOfSpeaker
            'טלפון': student.phoneOfStudent || '', // תיקון phoneOfSpeaker
            'אימייל': student.emailOfStudent || '', // תיקון emailOfSpeaker
            'כתובת': student.addressOfStudent || '', // תיקון addressOfSpeaker
            'מספר קורסים': student.courses ? student.courses.length : 0,
            'סטטוס': isStudentActive(student) ? 'פעיל' : 'לא פעיל'
        }));

        // יצירת גיליון עבודה
        const worksheet = XLSX.utils.json_to_sheet(dataToExport);

        // יצירת ספר עבודה
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'תלמידות');

        // התאמת רוחב העמודות
        const columnWidths = [
            { wch: 20 }, // שם תלמידה
            { wch: 15 }, // טלפון
            { wch: 25 }, // אימייל
            { wch: 30 }, // כתובת
            { wch: 15 }, // מספר קורסים
            { wch: 10 }  // סטטוס
        ];
        worksheet['!cols'] = columnWidths;

        // הורדת הקובץ
        XLSX.writeFile(workbook, 'רשימת_תלמידות.xlsx');
    };

    return (

        <ThemeProvider theme={rtlTheme}> <br></br>
            <div dir="rtl">
                <MyAppBar />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        מאגר תלמידים
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            onClick={handleAddStudent}
                            variant="outlined"
                            color="primary"
                        >
                            <AddIcon />
                            <span> הוספת תלמידה</span>
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={handleDeleteDialogOpen}
                        >
                            <DeleteForeverIcon />
                            מחיקת תלמידה
                        </Button>

                        {/* כפתור ייצוא לאקסל */}
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={exportToExcel}
                        >
                            <FileDownloadIcon />
                            ייצוא לאקסל
                        </Button>
                    </Box>
                </Box>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            backgroundColor: 'transparent'
                        }}
                    >
                        {/* <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                            מאגר מרצים
                        </Typography> */}

                        <SearchField
                            fullWidth
                            variant="outlined"
                            placeholder="חיפוש לפי שם, טלפון, כתובת או אימייל..." // עדכון פלייסהולדר
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            sx={{ mb: 3 }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <StyledTableContainer>
                            <Table aria-label="students table">
                                <StyledTableHead>
                                    <TableRow>
                                        <TableCell>
                                            <TableSortLabel
                                                active={orderBy === 'nameOfStudent'}
                                                direction={orderBy === 'nameOfStudent' ? order : 'asc'}
                                                onClick={() => handleRequestSort('nameOfStudent')}
                                            >
                                                שם התלמידה
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>טלפון</TableCell>
                                        <TableCell>אימייל</TableCell>
                                        <TableCell>כתובת</TableCell>
                                        <TableCell>
                                            <TableSortLabel
                                                active={orderBy === 'courses'}
                                                direction={orderBy === 'courses' ? order : 'asc'}
                                                onClick={() => handleRequestSort('courses')}
                                            >
                                                מספר קורסים
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>סטטוס</TableCell>
                                    </TableRow>
                                </StyledTableHead>
                                <TableBody>
                                    {sortedStudents
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((student) => {
                                            const isActive = isStudentActive(student);
                                            return (
                                                <StyledTableRow
                                                    key={student.idOfStudent} // תיקון מפתח
                                                    onClick={() => handleOpenStudentDetails(student)}
                                                    isActive={isActive}
                                                >
                                                    <TableCell>{student.nameOfStudent}</TableCell>
                                                    <TableCell>{student.phoneOfStudent}</TableCell>
                                                    <TableCell>{student.emailOfStudent}</TableCell>
                                                    <TableCell>{student.addressOfStudent}</TableCell>
                                                    <TableCell>{student.courses ? student.courses.length : 0}</TableCell>
                                                    <TableCell>
                                                        <StatusChip
                                                            isActive={isActive}
                                                            label={student.status ? 'פעיל' : 'לא פעיל'}
                                                            icon={isActive ? <CheckCircleIcon /> : <CancelIcon />}
                                                            size="small"
                                                        />
                                                    </TableCell>
                                                </StyledTableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </StyledTableContainer>

                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={sortedStudents.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            labelRowsPerPage="שורות בעמוד:"
                            labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
                        />
                    </Paper>
                </Container>

                {/* דיאלוג פרטי תלמידה */}
                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    maxWidth="md"
                    fullWidth
                >
                    {selectedStudent && (
                        <>
                            <DialogHeader>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'white', color: 'primary.main', mr: 2, width: 56, height: 56 }}>
                                        {selectedStudent.nameOfStudent?.charAt(0)}
                                    </Avatar>
                                    <Typography variant="h6">
                                        {selectedStudent.nameOfStudent}
                                    </Typography>
                                </Box>
                            </DialogHeader>
                            <DialogContent>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <Card sx={{ height: '100%' }}>
                                            <CardContent>
                                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                                                    פרטי קשר
                                                </Typography>
                                                <List>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <PhoneIcon color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="טלפון"
                                                            secondary={selectedStudent.phoneOfStudent || 'לא זמין'}
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <EmailIcon color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="אימייל"
                                                            secondary={selectedStudent.emailOfStudent || 'לא זמין'}
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <HomeIcon color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="כתובת"
                                                            secondary={selectedStudent.addressOfStudent|| 'לא זמין'}
                                                        />
                                                    </ListItem>
                                                </List>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Card sx={{ height: '100%' }}>
                                            <CardContent>
                                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                                                    פרטים מקצועיים
                                                </Typography>
                                                <List>

                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <EventIcon color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="מספר קורסים"
                                                            secondary={selectedStudent.courses ? selectedStudent.courses.length : 0}
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            {isStudentActive(selectedStudent) ? (
                                                                <CheckCircleIcon color="success" />
                                                            ) : (
                                                                <CancelIcon color="error" />
                                                            )}
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="סטטוס"
                                                            secondary={isStudentActive(selectedStudent) ? 'פעיל' : 'לא פעיל'}
                                                        />
                                                    </ListItem>
                                                </List>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    {selectedStudent.courses && selectedStudent.courses.length > 0 && (
                                        <Grid item xs={12}>
                                            <Card>
                                                <CardContent>
                                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                                                        קורסים ({selectedStudent.courses.length})
                                                    </Typography>
                                                    <Divider sx={{ mb: 2 }} />
                                                    <Grid container spacing={2}>
                                                        {selectedStudent.courses.map((course) => (
                                                            <Grid item xs={12} sm={6} md={4} key={course.idOfCourse}>
                                                                <Card variant="outlined">
                                                                    <CardContent>
                                                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                                            {course.nameOfCourse}
                                                                        </Typography>
                                                                        <Box sx={{ mt: 1 }}>
                                                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                                                                <CalendarMonthIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                                                                                <Typography variant="body2" color="text.secondary">
                                                                                    {course.startDateOfCourse}
                                                                                </Typography>
                                                                            </Box>
                                                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                                                                <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                                                                                <Typography variant="body2" color="text.secondary">
                                                                                    {course.dayOfCourse}, {course.hourOfCourse}
                                                                                </Typography>
                                                                            </Box>
                                                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                                <LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                                                                                <Typography variant="body2" color="text.secondary">
                                                                                    {course.placeOfCourse || 'לא צוין'}
                                                                                </Typography>
                                                                            </Box>
                                                                        </Box>
                                                                    </CardContent>
                                                                </Card>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )}
                                </Grid>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseDialog} color="primary">
                                    סגור
                                </Button>
                            </DialogActions>
                        </>
                    )}
                </Dialog>

                {/* דיאלוג הוספת תלמידה */}
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle>הוספת תלמיד חדש</DialogTitle>
                    <DialogContent>
                        <AddStudent></AddStudent>
                    </DialogContent>
                </Dialog>

                {/* דיאלוג מחיקת תלמידה */}
                <Dialog
                    open={openDelete}
                    onClose={() => setOpenDelete(false)}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle>מחיקת תלמידה</DialogTitle>
                    <DialogContent>
                        <Box sx={{ mt: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="delete-student-label">בחר תלמידה למחיקה</InputLabel>
                                <Select
                                    labelId="delete-student-label"
                                    value={deleteStudentName}
                                    onChange={(e) => setDeleteStudentName(e.target.value)}
                                    label="בחר תלמידה למחיקה"
                                >
                                    {/* מציג רק תלמידות פעילות לבחירה למחיקה */}
                                    {students.filter(s => s.status).map((student) => (
                                        <MenuItem key={student.idOfStudent} value={student.nameOfStudent}>
                                            {student.nameOfStudent}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDelete(false)} color="primary">
                            ביטול
                        </Button>
                        <Button
                            onClick={handleDeleteStudent}
                            color="error"
                            variant="contained"
                            disabled={loading || !deleteStudentName}
                        >
                            {loading ? <CircularProgress size={24} /> : 'מחק'}
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Snackbar להודעות */}
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert
                        onClose={handleCloseSnackbar}
                        severity={snackbar.severity}
                        sx={{ width: '100%' }}
                    >
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </div>
        </ThemeProvider>
    );
};

export default Student;





