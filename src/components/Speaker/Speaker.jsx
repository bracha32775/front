// // // // // import { useEffect } from 'react';
// // // // // import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
// // // // // import AddIcon from '@mui/icons-material/Add';
// // // // // import Button from '@mui/material/Button';
// // // // // import { styled } from '@mui/material/styles';
// // // // // import Dialog from '@mui/material/Dialog';
// // // // // import DialogTitle from '@mui/material/DialogTitle';
// // // // // import DialogContent from '@mui/material/DialogContent';
// // // // // import IconButton from '@mui/material/IconButton';
// // // // // import CloseIcon from '@mui/icons-material/Close';
// // // // // import { Routing } from '../Routing/Routing'
// // // // // import * as React from 'react';
// // // // // import './Speaker.css'
// // // // // import { DeleteForever } from '@mui/icons-material';
// // // // // import { Box, Chip, FormControl, Input, InputBase, InputLabel, MenuItem, Select, TableCell, TableRow, TextField, Typography } from '@mui/material';
// // // // // import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
// // // // // import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
// // // // // import { InputOutlined } from '@mui/icons-material';
// // // // // import { InputRounded } from '@mui/icons-material';
// // // // // import SpeakersTable from './speakersTable';
// // // // // import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
// // // // // import { SchoolOutlined } from '@mui/icons-material';

// // // // // export const Speaker = () => {
// // // // //   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// // // // //     '& .MuiDialogContent-root': {
// // // // //       padding: theme.spacing(3),
// // // // //     },
// // // // //     '& .MuiDialogActions-root': {
// // // // //       padding: theme.spacing(3),
// // // // //     },
// // // // //   }));
// // // // //   const dispatch = useDispatch()
// // // // //   const speakers = useSelector(state => state.speakers.speakers);
// // // // //   const speaker = useSelector(state => state.speakers.selectSpeaker);
// // // // //   const flagClose = useSelector(state => state.speakers.flagClose);
// // // // //   const [flagClose2, setFlagClose2] = React.useState(flagClose)
// // // // //   const [id, setId] = React.useState(false);
// // // // //   const [open, setOpen] = React.useState(false);
// // // // //   const [open2, setOpen2] = React.useState(false);
// // // // //   const [flag, setFlag] = React.useState(false);
// // // // //   const [flag2, setFlag2] = React.useState(false);
// // // // //   const [flag4, setFlag4] = React.useState(false);
// // // // //   const [f, setF] = React.useState(-1);
// // // // //   const [flagDeletedSpeaker, setFlagDeletedSpeaker] = React.useState(false);
// // // // //   const [deletedSpeaker, setDeletedSpeaker] = React.useState("");
// // // // //   const [checkedSpeaker, setCheckedSpeaker] = React.useState();
// // // // //   useEffect(() => {
// // // // //     doIt()
// // // // //   }, [])
// // // // //   async function doIt() {
// // // // //     dispatch(getSpeakersThunk())
// // // // //   }

// // // // //   const handleClickOpen = () => {
// // // // //     setOpen(true);
// // // // //     dispatch(setFlagSpeakerSlice(false))
// // // // //   };
// // // // //   const handleClose = () => {
// // // // //     setOpen(false);
// // // // //   };
// // // // //   const handleClickOpen2 = () => {
// // // // //     setOpen2(true);
// // // // //   };
// // // // //   const handleClose2 = () => {
// // // // //     setOpen2(false);
// // // // //     setFlagClose2(false)
// // // // //   };
// // // // //   async function openDivDetailes(index) {
// // // // //     setFlag(true)
// // // // //     setF(index)
// // // // //   }
// // // // //   const Close = () => {
// // // // //     setFlag(false);
// // // // //   };
// // // // //   const Close2 = () => {
// // // // //     setFlag2(false);
// // // // //   };
// // // // //   // const checkingDeletedSpeaker = () => {
// // // // //   //   debugger
// // // // //   //   if (deletedSpeaker != null)
// // // // //   //     setFlagDeletedSpeaker(true)
// // // // //   // };
// // // // //   const deleteSpeaker = async () => {
// // // // //     // if (deletedSpeaker == checkedSpeaker) {
// // // // //     const tempSpeaker = await dispatch(getBySpeakerNameThunk(deletedSpeaker))
// // // // //     console.log(deletedSpeaker);
// // // // //     setId(tempSpeaker.payload.idOfSpeaker)
// // // // //     //let red = dispatch(getBySpeakerNameThunk(deletedSpeaker))
// // // // //     //console.log(id+"vvvvvvvvvvvvvvvvvvvv");
// // // // //     debugger
// // // // //     dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker))
// // // // //     console.log("tempSpeaker.payload.idOfSpeaker"+tempSpeaker.payload.idOfSpeaker);
// // // // //     setFlag4(true)
// // // // //     //}
// // // // //   };
// // // // //   const whatsGoing = (name2) => {
// // // // //     console.log(name2 + "name2");
// // // // //     setDeletedSpeaker(name2)
// // // // //   };

// // // // //   return <div>

// // // // //     <SpeakersTable></SpeakersTable>
// // // // //     <React.Fragment>
// // // // //       <Button variant="outlined" onClick={handleClickOpen}
// // // // //         align='center'>
// // // // //         הוספת מרצה
// // // // //         <AddIcon ></AddIcon>
// // // // //       </Button>
// // // // //       {!flagClose && <BootstrapDialog
// // // // //         onClose={handleClose}
// // // // //         aria-labelledby="customized-dialog-title"
// // // // //         open={open}
// // // // //       >
// // // // //         <DialogTitle
// // // // //           id="customized-dialog-title">
// // // // //           הוספת מרצה
// // // // //         </DialogTitle>
// // // // //         <IconButton
// // // // //           aria-label="close"
// // // // //           onClick={handleClose}
// // // // //           sx={(theme) => ({
// // // // //             position: 'absolute',
// // // // //             right: 8,
// // // // //             top: 8,
// // // // //             color: theme.palette.grey[60],
// // // // //           })}
// // // // //         >
// // // // //           <CloseIcon />
// // // // //         </IconButton>
// // // // //         <DialogContent dividers>
// // // // //           <AddSpeaker />
// // // // //         </DialogContent >
// // // // //       </BootstrapDialog>}
// // // // //     </React.Fragment>

// // // // //     <>{flag && <React.Fragment>
// // // // //       <BootstrapDialog
// // // // //         open={flag}
// // // // //         aria-labelledby="customized-dialog-title">
// // // // //         <DialogTitle
// // // // //           id="customized-dialog-title">
// // // // //           {speakers[f].courses.map(v => v.nameOfCourse)}
// // // // //         </DialogTitle>
// // // // //         <IconButton
// // // // //           aria-label="close"
// // // // //           onClick={Close}
// // // // //           sx={(theme) => ({
// // // // //             position: 'absolute',
// // // // //             right: 8,
// // // // //             top: 8,
// // // // //             color: theme.palette.grey[60],
// // // // //           })}
// // // // //         >
// // // // //           <CloseIcon />
// // // // //         </IconButton>
// // // // //         <DialogContent dividers>
// // // // //           <td>{speakers[f].courses.map(v => v.map(x =>
// // // // //             <><td>{x.nameOfCourse}</td>
// // // // //               <td>{x.amountOfStudentsInCourse}</td>
// // // // //               <td>{x.startDateOfCourse}</td></>
// // // // //           ))}</td>
// // // // //         </DialogContent >
// // // // //       </BootstrapDialog>
// // // // //     </React.Fragment>
// // // // //     }
// // // // //     </>


// // // // //     {/* [===delete====] */}
// // // // //     <React.Fragment>
// // // // //       <Button variant="outlined" onClick={handleClickOpen2}
// // // // //         align='center'
// // // // //       >
// // // // //         מחיקת מרצה
// // // // //         <DeleteForever />
// // // // //       </Button>
// // // // //       <BootstrapDialog
// // // // //         onClose={handleClose2}
// // // // //         aria-labelledby="customized-dialog-title"
// // // // //         open={open2}
// // // // //       >
// // // // //         <DialogTitle
// // // // //           id="customized-dialog-title">
// // // // //           מחיקת מרצה
// // // // //         </DialogTitle>
// // // // //         <IconButton
// // // // //           aria-label="close"
// // // // //           onClick={handleClose2}
// // // // //           sx={(theme) => ({
// // // // //             position: 'absolute',
// // // // //             right: 8,
// // // // //             top: 8,
// // // // //             color: theme.palette.grey[30],
// // // // //           })}
// // // // //         >
// // // // //           <CloseIcon />
// // // // //         </IconButton>
// // // // //         <DialogContent dividers>

          
// // // // //         <Box className="select" sx={{ minWidth: 120 }}>
// // // // //       <FormControl fullWidth>
// // // // //         <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// // // // //         <Select
// // // // //          onChange={(e) => whatsGoing(e.target.value)}
// // // // //           labelId="demo-simple-select-label"
// // // // //           id="demo-simple-select"
// // // // //           label="מרצה "
// // // // //           className="tool"
// // // // //           defaultValue={""}
// // // // //         >
// // // // //           {speakers.map(speaker => {
// // // // //             return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
// // // // //               {speaker.nameOfSpeaker} </MenuItem>
// // // // //           })}
// // // // //         </Select>
// // // // //       </FormControl>
// // // // //     </Box>
// // // // //           {/* <Box className="select" sx={{ minWidth: 120 }}>
// // // // //             <FormControl fullWidth>
// // // // //               <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// // // // //               <Select
               
// // // // //                 labelId="demo-simple-select-label"
// // // // //                 id="demo-simple-select"
// // // // //                 // defaultValue={""}
// // // // //                 label="מרצה "
// // // // //                 className="tool"

// // // // //               >
// // // // //                 {speakers.map(speaker => {
// // // // //                   return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}

// // // // //                   >{speaker.nameOfSpeaker}</MenuItem>

// // // // //                 })
// // // // //                 }

// // // // //               </Select>
// // // // //             </FormControl>
// // // // //           </Box> */}
// // // // //           <br />
// // // // //           {/* <>{flagDeletedSpeaker && <><div>
// // // // //             <input id="outlined-basic" placeholder=' הקלידי את שם המרצה' 
// // // // //               className="input" onChange={(x) => setCheckedSpeaker(x.target.value)}
// // // // //             />
// // // // //           </div><Button
// // // // //             onClick={() =>deleteSpeaker ()}
// // // // //           >o.k</Button></>}</> */}

// // // // //           {/* {!flagDeletedSpeaker && <Button
// // // // //             onClick={() =>checkingDeletedSpeaker ()}
// // // // //           >o.kk</Button>} */}
// // // // //           <Button
// // // // //             onClick={() => deleteSpeaker()}
// // // // //           >o.k</Button>
// // // // //         </DialogContent >
// // // // //       </BootstrapDialog>
// // // // //     </React.Fragment>

// // // // //     <>{flag2 && <React.Fragment>
// // // // //       <BootstrapDialog
// // // // //         open={flag2}
// // // // //         aria-labelledby="customized-dialog-title">
// // // // //         <DialogTitle
// // // // //           id="customized-dialog-title">
// // // // //           {/* {speakers[f].courses.map(v => v.nameOfCourse)} */}
// // // // //         </DialogTitle>
// // // // //         <IconButton
// // // // //           aria-label="close"
// // // // //           onClick={Close2}
// // // // //           sx={(theme) => ({
// // // // //             position: 'absolute',
// // // // //             right: 8,
// // // // //             top: 8,
// // // // //             color: theme.palette.grey[30],
// // // // //           })}
// // // // //         >
// // // // //           <CloseIcon />
// // // // //         </IconButton>
// // // // //         <DialogContent dividers>


// // // // //           {/* <td>{speakers[f].courses.map(v => v.map(x =>
// // // // //             <><td>{x.nameOfCourse}</td>
// // // // //               <td>{x.amountOfStudentsInCourse}</td>
// // // // //               <td>{x.startDateOfCourse}</td></>
// // // // //           ))}</td> */}
// // // // //         </DialogContent >
// // // // //       </BootstrapDialog>
// // // // //     </React.Fragment>
// // // // //     }
// // // // //     </>
// // // // //   </div>
// // // // // }
// // // // import React, { useEffect, useState } from 'react';
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { styled, alpha } from '@mui/material/styles';
// // // // import { 
// // // //   Box, Button, Dialog, DialogTitle, DialogContent, IconButton, 
// // // //   Typography, Paper, Divider, Grid, Avatar, Chip, TextField, 
// // // //   InputAdornment, FormControl, InputLabel, Select, MenuItem,
// // // //   Tooltip, Zoom, Fade, Backdrop, Card, CardContent, Tabs, Tab,
// // // //   Badge, Snackbar, Alert, CircularProgress, useTheme, useMediaQuery
// // // // } from '@mui/material';
// // // // import { 
// // // //   Add as AddIcon, 
// // // //   DeleteForever, 
// // // //   Close as CloseIcon, 
// // // //   Search as SearchIcon,
// // // //   FilterList as FilterListIcon,
// // // //   PersonAdd as PersonAddIcon,
// // // //   School as SchoolIcon,
// // // //   Event as EventIcon,
// // // //   LocationOn as LocationIcon,
// // // //   Phone as PhoneIcon,
// // // //   Email as EmailIcon,
// // // //   CheckCircle as CheckCircleIcon,
// // // //   Sort as SortIcon,
// // // //   Refresh as RefreshIcon,
// // // //   MoreVert as MoreVertIcon,
// // // //   ArrowUpward as ArrowUpwardIcon,
// // // //   ArrowDownward as ArrowDownwardIcon
// // // // } from '@mui/icons-material';

// // // // import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
// // // // import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
// // // // import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
// // // // import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
// // // // import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
// // // // import SpeakersTable from './speakersTable';
// // // // import './Speaker.css';

// // // // export const Speaker = () => {
// // // //   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// // // //     '& .MuiDialogContent-root': {
// // // //       padding: theme.spacing(3),
// // // //     },
// // // //     '& .MuiDialogActions-root': {
// // // //       padding: theme.spacing(3),
// // // //     },
// // // //   }));
// // // //   const dispatch = useDispatch()
// // // //   const speakers = useSelector(state => state.speakers.speakers);
// // // //   const speaker = useSelector(state => state.speakers.selectSpeaker);
// // // //   const flagClose = useSelector(state => state.speakers.flagClose);
  
// // // //   // State
// // // //   const [open, setOpen] = useState(false);
// // // //   const [openDelete, setOpenDelete] = useState(false);
// // // //   const [openDetails, setOpenDetails] = useState(false);
// // // //   const [selectedSpeaker, setSelectedSpeaker] = useState(null);
// // // //   const [deleteSpeakerName, setDeleteSpeakerName] = useState("");
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [filteredSpeakers, setFilteredSpeakers] = useState([]);
// // // //   const [sortConfig, setSortConfig] = useState({ key: 'nameOfSpeaker', direction: 'ascending' });
// // // //   const [filterCategory, setFilterCategory] = useState('all');
// // // //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [tabValue, setTabValue] = useState(0);

// // // //   // Load speakers on component mount
// // // //   useEffect(() => {
// // // //     loadSpeakers();
// // // //   }, []);

// // // //   // Filter speakers when search term or speakers list changes
// // // //   useEffect(() => {
// // // //     filterSpeakers();
// // // //   }, [searchTerm, speakers, sortConfig, filterCategory]);

// // // //   const loadSpeakers = async () => {
// // // //     setLoading(true);
// // // //     await dispatch(getSpeakersThunk());
// // // //     setLoading(false);
// // // //   };

// // // //   const filterSpeakers = () => {
// // // //     let filtered = [...speakers];
    
// // // //     // Apply search filter
// // // //     if (searchTerm) {
// // // //       filtered = filtered.filter(speaker => 
// // // //         speaker.nameOfSpeaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         speaker.phoneOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         speaker.emailOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase())
// // // //       );
// // // //     }
    
// // // //     // Apply category filter
// // // //     if (filterCategory !== 'all') {
// // // //       filtered = filtered.filter(speaker => {
// // // //         if (filterCategory === 'withCourses') {
// // // //           return speaker.courses && speaker.courses.length > 0;
// // // //         } else if (filterCategory === 'noCourses') {
// // // //           return !speaker.courses || speaker.courses.length === 0;
// // // //         }
// // // //         return true;
// // // //       });
// // // //     }
    
// // // //     // Apply sorting
// // // //     if (sortConfig.key) {
// // // //       filtered.sort((a, b) => {
// // // //         if (a[sortConfig.key] < b[sortConfig.key]) {
// // // //           return sortConfig.direction === 'ascending' ? -1 : 1;
// // // //         }
// // // //         if (a[sortConfig.key] > b[sortConfig.key]) {
// // // //           return sortConfig.direction === 'ascending' ? 1 : -1;
// // // //         }
// // // //         return 0;
// // // //       });
// // // //     }
    
// // // //     setFilteredSpeakers(filtered);
// // // //   };

// // // //   const handleSort = (key) => {
// // // //     let direction = 'ascending';
// // // //     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
// // // //       direction = 'descending';
// // // //     }
// // // //     setSortConfig({ key, direction });
// // // //   };

// // // //   const handleAddSpeaker = () => {
// // // //     setOpen(true);
// // // //     dispatch(setFlagSpeakerSlice(false));
// // // //   };

// // // //   const handleDeleteDialogOpen = () => {
// // // //     setOpenDelete(true);
// // // //   };

// // // //   const handleDeleteSpeaker = async () => {
// // // //     if (!deleteSpeakerName) {
// // // //       setSnackbar({
// // // //         open: true,
// // // //         message: 'יש לבחור מרצה למחיקה',
// // // //         severity: 'error'
// // // //       });
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     try {
// // // //       const tempSpeaker = await dispatch(getBySpeakerNameThunk(deleteSpeakerName));
// // // //       if (tempSpeaker.payload) {
// // // //         await dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker));
// // // //         setSnackbar({
// // // //           open: true,
// // // //           message: `המרצה ${deleteSpeakerName} נמחק בהצלחה`,
// // // //           severity: 'success'
// // // //         });
// // // //         setOpenDelete(false);
// // // //         setDeleteSpeakerName("");
// // // //       }
// // // //     } catch (error) {
// // // //       setSnackbar({
// // // //         open: true,
// // // //         message: 'שגיאה במחיקת המרצה',
// // // //         severity: 'error'
// // // //       });
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleViewDetails = (speaker) => {
// // // //     setSelectedSpeaker(speaker);
// // // //     setOpenDetails(true);
// // // //   };

// // // //   const handleTabChange = (event, newValue) => {
// // // //     setTabValue(newValue);
// // // //   };

// // // //   const handleCloseSnackbar = () => {
// // // //     setSnackbar({ ...snackbar, open: false });
// // // //   };

// // // //   // Generate random color for avatar based on name
// // // //   const getAvatarColor = (name) => {
// // // //     const colors = [
// // // //       '#3f51b5', '#f44336', '#009688', '#ff9800', '#9c27b0', 
// // // //       '#2196f3', '#4caf50', '#ffeb3b', '#795548', '#607d8b'
// // // //     ];
// // // //     const index = name.charCodeAt(0) % colors.length;
// // // //     return colors[index];
// // // //   };

// // // //   // Get speaker initials for avatar
// // // //   const getInitials = (name) => {
// // // //     return name
// // // //       .split(' ')
// // // //       .map(part => part[0])
// // // //       .join('')
// // // //       .toUpperCase();
// // // //   };

// // // //   return (
// // // //     <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
// // // //       <StyledPaper elevation={3}>
// // // //         <PageHeader>
// // // //           <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
// // // //             ניהול מרצים
// // // //           </Typography>
          
// // // //           <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// // // //             <ActionButton
// // // //               variant="contained"
// // // //               color="primary"
// // // //               startIcon={<PersonAddIcon />}
// // // //               onClick={handleAddSpeaker}
// // // //             >
// // // //               הוספת מרצה
// // // //             </ActionButton>
            
// // // //             <ActionButton
// // // //               variant="outlined"
// // // //               color="error"
// // // //               startIcon={<DeleteForever />}
// // // //               onClick={handleDeleteDialogOpen}
// // // //             >
// // // //               מחיקת מרצה
// // // //             </ActionButton>
            
// // // //             <Tooltip title="רענון רשימה">
// // // //               <IconButton 
// // // //                 color="primary" 
// // // //                 onClick={loadSpeakers}
// // // //                 sx={{ 
// // // //                   backgroundColor: alpha(theme.palette.primary.main, 0.1),
// // // //                   '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.2) }
// // // //                 }}
// // // //               >
// // // //                 <RefreshIcon />
// // // //               </IconButton>
// // // //             </Tooltip>
// // // //           </Box>
// // // //         </PageHeader>

// // // //         <Divider sx={{ mb: 3 }} />
        
// // // //         <Box sx={{ mb: 4 }}>
// // // //           <Tabs 
// // // //             value={tabValue} 
// // // //             onChange={handleTabChange}
// // // //             variant="fullWidth"
// // // //             indicatorColor="primary"
// // // //             textColor="primary"
// // // //             sx={{ mb: 3 }}
// // // //           >
// // // //             <Tab icon={<SchoolIcon />} label="כל המרצים" />
// // // //             <Tab icon={<EventIcon />} label="מרצים פעילים" />
// // // //             <Tab icon={<FilterListIcon />} label="סינון מתקדם" />
// // // //           </Tabs>

// // // //           {tabValue === 0 && (
// // // //             <Box>
// // // //               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
// // // //                 <SearchBar
// // // //                   placeholder="חיפוש לפי שם, טלפון או אימייל..."
// // // //                   variant="outlined"
// // // //                   value={searchTerm}
// // // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // // //                   InputProps={{
// // // //                     startAdornment: (
// // // //                       <InputAdornment position="start">
// // // //                         <SearchIcon color="action" />
// // // //                       </InputAdornment>
// // // //                     ),
// // // //                     endAdornment: searchTerm && (
// // // //                       <InputAdornment position="end">
// // // //                         <IconButton size="small" onClick={() => setSearchTerm('')}>
// // // //                           <CloseIcon fontSize="small" />
// // // //                         </IconButton>
// // // //                       </InputAdornment>
// // // //                     )
// // // //                   }}
// // // //                 />
                
// // // //                 <Box sx={{ display: 'flex', gap: 1 }}>
// // // //                   <SortButton 
// // // //                     variant={sortConfig.key === 'nameOfSpeaker' ? 'contained' : 'outlined'}
// // // //                     size="small"
// // // //                     onClick={() => handleSort('nameOfSpeaker')}
// // // //                     endIcon={sortConfig.key === 'nameOfSpeaker' ? 
// // // //                       (sortConfig.direction === 'ascending' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />) : 
// // // //                       <SortIcon />}
// // // //                   >
// // // //                     מיון לפי שם
// // // //                   </SortButton>
// // // //                 </Box>
// // // //               </Box>
              
// // // //               <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
// // // //                 <Typography variant="body2" sx={{ mr: 1, alignSelf: 'center' }}>
// // // //                   סינון מהיר:
// // // //                 </Typography>
// // // //                 <StyledChip 
// // // //                   label="הכל" 
// // // //                   clickable
// // // //                   active={filterCategory === 'all'}
// // // //                   onClick={() => setFilterCategory('all')}
// // // //                 />
// // // //                 <StyledChip 
// // // //                   label="עם קורסים" 
// // // //                   clickable
// // // //                   active={filterCategory === 'withCourses'}
// // // //                   onClick={() => setFilterCategory('withCourses')}
// // // //                 />
// // // //                 <StyledChip 
// // // //                   label="ללא קורסים" 
// // // //                   clickable
// // // //                   active={filterCategory === 'noCourses'}
// // // //                   onClick={() => setFilterCategory('noCourses')}
// // // //                 />
// // // //               </Box>
              
// // // //               {loading ? (
// // // //                 <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
// // // //                   <CircularProgress />
// // // //                 </Box>
// // // //               ) : filteredSpeakers.length > 0 ? (
// // // //                 <Grid container spacing={3}>
// // // //                   {filteredSpeakers.map((speaker) => (
// // // //                     <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
// // // //                       <Card 
// // // //                         sx={{ 
// // // //                           height: '100%', 
// // // //                           display: 'flex', 
// // // //                           flexDirection: 'column',
// // // //                           transition: 'all 0.3s ease',
// // // //                           '&:hover': {
// // // //                             transform: 'translateY(-4px)',
// // // //                             boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
// // // //                           }
// // // //                         }}
// // // //                       >
// // // //                         <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
// // // //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // // //                             {speaker.courses && speaker.courses.length > 0 ? (
// // // //                               <StyledBadge
// // // //                                 overlap="circular"
// // // //                                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// // // //                                 variant="dot"
// // // //                               >
// // // //                                 <SpeakerAvatar 
// // // //                                   sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// // // //                                 >
// // // //                                   {getInitials(speaker.nameOfSpeaker)}
// // // //                                 </SpeakerAvatar>
// // // //                               </StyledBadge>
// // // //                             ) : (
// // // //                               <SpeakerAvatar 
// // // //                                 sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// // // //                               >
// // // //                                 {getInitials(speaker.nameOfSpeaker)}
// // // //                               </SpeakerAvatar>
// // // //                             )}
                            
// // // //                             <Box>
// // // //                               <Typography variant="h6" component="h2" fontWeight="bold">
// // // //                                 {speaker.nameOfSpeaker}
// // // //                               </Typography>
// // // //                               <Typography variant="body2" color="text.secondary">
// // // //                                 {speaker.courses && speaker.courses.length > 0 
// // // //                                   ? `${speaker.courses.length} קורסים פעילים` 
// // // //                                   : 'אין קורסים פעילים'}
// // // //                               </Typography>
// // // //                             </Box>
// // // //                           </Box>
                          
// // // //                           <Divider />
                          
// // // //                           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
// // // //                             {speaker.phoneOfSpeaker && (
// // // //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // //                                 <PhoneIcon fontSize="small" color="action" />
// // // //                                 <Typography variant="body2">
// // // //                                   {speaker.phoneOfSpeaker}
// // // //                                 </Typography>
// // // //                               </Box>
// // // //                             )}
                            
// // // //                             {speaker.emailOfSpeaker && (
// // // //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // //                                 <EmailIcon fontSize="small" color="action" />
// // // //                                 <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
// // // //                                   {speaker.emailOfSpeaker}
// // // //                                 </Typography>
// // // //                               </Box>
// // // //                             )}
                            
// // // //                             {speaker.addressOfSpeaker && (
// // // //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // //                                 <LocationIcon fontSize="small" color="action" />
// // // //                                 <Typography variant="body2">
// // // //                                   {speaker.addressOfSpeaker}
// // // //                                 </Typography>
// // // //                               </Box>
// // // //                             )}
// // // //                           </Box>
                          
// // // //                           <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
// // // //                             <Button 
// // // //                               variant="outlined" 
// // // //                               size="small"
// // // //                               onClick={() => handleViewDetails(speaker)}
// // // //                             >
// // // //                               פרטים נוספים
// // // //                             </Button>
// // // //                           </Box>
// // // //                         </CardContent>
// // // //                       </Card>
// // // //                     </Grid>
// // // //                   ))}
// // // //                 </Grid>
// // // //               ) : (
// // // //                 <Paper 
// // // //                   sx={{ 
// // // //                     p: 4, 
// // // //                     textAlign: 'center',
// // // //                     backgroundColor: alpha(theme.palette.background.paper, 0.7)
// // // //                   }}
// // // //                 >
// // // //                   <Typography variant="h6" color="text.secondary" gutterBottom>
// // // //                     לא נמצאו מרצים
// // // //                   </Typography>
// // // //                   <Typography variant="body2" color="text.secondary">
// // // //                     נסה לשנות את הגדרות החיפוש או הסינון
// // // //                   </Typography>
// // // //                 </Paper>
// // // //               )}
// // // //             </Box>
// // // //           )}
          
// // // //           {tabValue === 1 && (
// // // //             <Box>
// // // //               <Typography variant="h6" gutterBottom>
// // // //                 מרצים עם קורסים פעילים
// // // //               </Typography>
// // // //               <Grid container spacing={3}>
// // // //                 {speakers
// // // //                   .filter(speaker => speaker.courses && speaker.courses.length > 0)
// // // //                   .map((speaker) => (
// // // //                     <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
// // // //                       <Card sx={{ height: '100%' }}>
// // // //                         <CardContent>
// // // //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
// // // //                             <StyledBadge
// // // //                               overlap="circular"
// // // //                               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// // // //                               variant="dot"
// // // //                             >
// // // //                               <SpeakerAvatar 
// // // //                                 sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// // // //                               >
// // // //                                 {getInitials(speaker.nameOfSpeaker)}
// // // //                               </SpeakerAvatar>
// // // //                             </StyledBadge>
                            
// // // //                             <Typography variant="h6" component="h2" fontWeight="bold">
// // // //                               {speaker.nameOfSpeaker}
// // // //                             </Typography>
// // // //                           </Box>
                          
// // // //                           <Divider sx={{ mb: 2 }} />
                          
// // // //                           <Typography variant="subtitle2" gutterBottom>
// // // //                             קורסים פעילים:
// // // //                           </Typography>
                          
// // // //                           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
// // // //                             {speaker.courses.map((course, index) => (
// // // //                               <Chip 
// // // //                                 key={index}
// // // //                                 label={course.nameOfCourse || 'קורס ללא שם'}
// // // //                                 size="small"
// // // //                                 color="primary"
// // // //                                 variant="outlined"
// // // //                               />
// // // //                             ))}
// // // //                           </Box>
                          
// // // //                           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
// // // //                             <Button 
// // // //                               variant="outlined" 
// // // //                               size="small"
// // // //                               onClick={() => handleViewDetails(speaker)}
// // // //                             >
// // // //                               פרטים נוספים
// // // //                             </Button>
// // // //                           </Box>
// // // //                         </CardContent>
// // // //                       </Card>
// // // //                     </Grid>
// // // //                   ))}
// // // //               </Grid>
              
// // // //               {speakers.filter(speaker => speaker.courses && speaker.courses.length > 0).length === 0 && (
// // // //                 <Paper sx={{ p: 4, textAlign: 'center' }}>
// // // //                   <Typography variant="h6" color="text.secondary">
// // // //                     אין מרצים עם קורסים פעילים
// // // //                   </Typography>
// // // //                 </Paper>
// // // //               )}
// // // //             </Box>
// // // //           )}
          
// // // //           {tabValue === 2 && (
// // // //             <FilterContainer>
// // // //               <Typography variant="h6" gutterBottom sx={{ width: '100%' }}>
// // // //                 סינון מתקדם
// // // //               </Typography>
              
// // // //               <Grid container spacing={3}>
// // // //                 <Grid item xs={12} md={6}>
// // // //                   <FormControl fullWidth variant="outlined">
// // // //                     <InputLabel>חיפוש לפי שדה</InputLabel>
// // // //                     <Select
// // // //                       label="חיפוש לפי שדה"
// // // //                       value={sortConfig.key}
// // // //                       onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
// // // //                     >
// // // //                       <MenuItem value="nameOfSpeaker">שם</MenuItem>
// // // //                       <MenuItem value="phoneOfSpeaker">טלפון</MenuItem>
// // // //                       <MenuItem value="emailOfSpeaker">אימייל</MenuItem>
// // // //                     </Select>
// // // //                   </FormControl>
// // // //                 </Grid>
                
// // // //                 <Grid item xs={12} md={6}>
// // // //                   <FormControl fullWidth variant="outlined">
// // // //                     <InputLabel>סדר מיון</InputLabel>
// // // //                     <Select
// // // //                       label="סדר מיון"
// // // //                       value={sortConfig.direction}
// // // //                       onChange={(e) => setSortConfig({ ...sortConfig, direction: e.target.value })}
// // // //                     >
// // // //                       <MenuItem value="ascending">עולה (א-ת)</MenuItem>
// // // //                       <MenuItem value="descending">יורד (ת-א)</MenuItem>
// // // //                     </Select>
// // // //                   </FormControl>
// // // //                 </Grid>
                
// // // //                 <Grid item xs={12}>
// // // //                   <TextField
// // // //                     fullWidth
// // // //                     label="חיפוש חופשי"
// // // //                     variant="outlined"
// // // //                     value={searchTerm}
// // // //                     onChange={(e) => setSearchTerm(e.target.value)}
// // // //                     InputProps={{
// // // //                       startAdornment: (
// // // //                         <InputAdornment position="start">
// // // //                           <SearchIcon />
// // // //                         </InputAdornment>
// // // //                       ),
// // // //                     }}
// // // //                   />
// // // //                 </Grid>
                
// // // //                 <Grid item xs={12}>
// // // //                   <Typography variant="subtitle2" gutterBottom>
// // // //                     סינון לפי קטגוריה:
// // // //                   </Typography>
// // // //                   <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
// // // //                     <StyledChip 
// // // //                       label="הכל" 
// // // //                       clickable
// // // //                       active={filterCategory === 'all'}
// // // //                       onClick={() => setFilterCategory('all')}
// // // //                     />
// // // //                     <StyledChip 
// // // //                       label="עם קורסים" 
// // // //                       clickable
// // // //                       active={filterCategory === 'withCourses'}
// // // //                       onClick={() => setFilterCategory('withCourses')}
// // // //                     />
// // // //                     <StyledChip 
// // // //                       label="ללא קורסים" 
// // // //                       clickable
// // // //                       active={filterCategory === 'noCourses'}
// // // //                       onClick={() => setFilterCategory('noCourses')}
// // // //                     />
// // // //                   </Box>
// // // //                 </Grid>
// // // //               </Grid>
// // // //             </FilterContainer>
// // // //           )}
// // // //         </Box>
        
// // // //         {/* Original Table (can be kept or removed) */}
// // // //         <Box sx={{ display: 'none' }}>
// // // //           <SpeakersTable />
// // // //         </Box>
// // // //       </StyledPaper>
      
// // // //       {/* Add Speaker Dialog */}
// // // //       <StyledDialog
// // // //         open={open}
// // // //         onClose={() => setOpen(false)}
// // // //         maxWidth="md"
// // // //         fullWidth
// // // //         TransitionComponent={Zoom}
// // // //       >
// // // //         <DialogHeader>
// // // //           <PersonAddIcon sx={{ mr: 1 }} />
// // // //           הוספת מרצה
// // // //         </DialogHeader>
// // // //         <IconButton
// // // //           aria-label="close"
// // // //           onClick={() => setOpen(false)}
// // // //           sx={{
// // // //             position: 'absolute',
// // // //             right: 8,
// // // //             top: 8,
// // // //             color: 'white',
// // // //           }}
// // // //         >
// // // //           <CloseIcon />
// // // //         </IconButton>
// // // //         <DialogContent dividers>
// // // //           <AddSpeaker />
// // // //         </DialogContent>
// // // //       </StyledDialog>
      
// // // //       {/* Delete Speaker Dialog */}
// // // //       <StyledDialog
// // // //         open={openDelete}
// // // //         onClose={() => setOpenDelete(false)}
// // // //         maxWidth="sm"
// // // //         fullWidth
// // // //         TransitionComponent={Zoom}
// // // //         >
// // // //           <DialogHeader>
// // // //             <DeleteForever sx={{ mr: 1 }} />
// // // //             מחיקת מרצה
// // // //           </DialogHeader>
// // // //           <IconButton
// // // //             aria-label="close"
// // // //             onClick={() => setOpenDelete(false)}
// // // //             sx={{
// // // //               position: 'absolute',
// // // //               right: 8,
// // // //               top: 8,
// // // //               color: 'white',
// // // //             }}
// // // //           >
// // // //             <CloseIcon />
// // // //           </IconButton>
// // // //           <DialogContent dividers>
// // // //             <Typography variant="body1" gutterBottom color="error">
// // // //               שים לב! פעולה זו אינה ניתנת לביטול. המרצה וכל המידע הקשור אליו יימחקו לצמיתות.
// // // //             </Typography>
            
// // // //             <Box sx={{ my: 3 }}>
// // // //               <FormControl fullWidth variant="outlined">
// // // //                 <InputLabel id="delete-speaker-label">בחר מרצה למחיקה</InputLabel>
// // // //                 <Select
// // // //                   labelId="delete-speaker-label"
// // // //                   value={deleteSpeakerName}
// // // //                   onChange={(e) => setDeleteSpeakerName(e.target.value)}
// // // //                   label="בחר מרצה למחיקה"
// // // //                 >
// // // //                   {speakers.map(speaker => (
// // // //                     <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
// // // //                       {speaker.nameOfSpeaker}
// // // //                     </MenuItem>
// // // //                   ))}
// // // //                 </Select>
// // // //               </FormControl>
// // // //             </Box>
            
// // // //             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
// // // //               <Button 
// // // //                 variant="outlined" 
// // // //                 onClick={() => setOpenDelete(false)}
// // // //               >
// // // //                 ביטול
// // // //               </Button>
// // // //               <Button 
// // // //                 variant="contained" 
// // // //                 color="error"
// // // //                 onClick={handleDeleteSpeaker}
// // // //                 disabled={!deleteSpeakerName || loading}
// // // //                 startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <DeleteForever />}
// // // //               >
// // // //                 {loading ? 'מוחק...' : 'מחיקה'}
// // // //               </Button>
// // // //             </Box>
// // // //           </DialogContent>
// // // //         </StyledDialog>
        
// // // //         {/* Speaker Details Dialog */}
// // // //         <StyledDialog
// // // //           open={openDetails}
// // // //           onClose={() => setOpenDetails(false)}
// // // //           maxWidth="md"
// // // //           fullWidth
// // // //           TransitionComponent={Zoom}
// // // //         >
// // // //           {selectedSpeaker && (
// // // //             <>
// // // //               <DialogHeader>
// // // //                 <SchoolIcon sx={{ mr: 1 }} />
// // // //                 פרטי מרצה: {selectedSpeaker.nameOfSpeaker}
// // // //               </DialogHeader>
// // // //               <IconButton
// // // //                 aria-label="close"
// // // //                 onClick={() => setOpenDetails(false)}
// // // //                 sx={{
// // // //                   position: 'absolute',
// // // //                   right: 8,
// // // //                   top: 8,
// // // //                   color: 'white',
// // // //                 }}
// // // //               >
// // // //                 <CloseIcon />
// // // //               </IconButton>
// // // //               <DialogContent dividers>
// // // //                 <Grid container spacing={3}>
// // // //                   <Grid item xs={12} md={4}>
// // // //                     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
// // // //                       <SpeakerAvatar 
// // // //                         sx={{ 
// // // //                           width: 120, 
// // // //                           height: 120, 
// // // //                           fontSize: 48,
// // // //                           bgcolor: getAvatarColor(selectedSpeaker.nameOfSpeaker)
// // // //                         }}
// // // //                       >
// // // //                         {getInitials(selectedSpeaker.nameOfSpeaker)}
// // // //                       </SpeakerAvatar>
                      
// // // //                       <Typography variant="h5" fontWeight="bold" textAlign="center">
// // // //                         {selectedSpeaker.nameOfSpeaker}
// // // //                       </Typography>
                      
// // // //                       <Chip 
// // // //                         label={selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? 'מרצה פעיל' : 'מרצה לא פעיל'} 
// // // //                         color={selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? 'success' : 'default'}
// // // //                         variant="outlined"
// // // //                       />
// // // //                     </Box>
// // // //                   </Grid>
                  
// // // //                   <Grid item xs={12} md={8}>
// // // //                     <Typography variant="h6" gutterBottom>
// // // //                       פרטי קשר
// // // //                     </Typography>
                    
// // // //                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
// // // //                       {selectedSpeaker.phoneOfSpeaker && (
// // // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // // //                           <PhoneIcon color="primary" />
// // // //                           <Box>
// // // //                             <Typography variant="body2" color="text.secondary">
// // // //                               טלפון
// // // //                             </Typography>
// // // //                             <Typography variant="body1">
// // // //                               {selectedSpeaker.phoneOfSpeaker}
// // // //                             </Typography>
// // // //                           </Box>
// // // //                         </Box>
// // // //                       )}
                      
// // // //                       {selectedSpeaker.emailOfSpeaker && (
// // // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // // //                           <EmailIcon color="primary" />
// // // //                           <Box>
// // // //                             <Typography variant="body2" color="text.secondary">
// // // //                               אימייל
// // // //                             </Typography>
// // // //                             <Typography variant="body1">
// // // //                               {selectedSpeaker.emailOfSpeaker}
// // // //                             </Typography>
// // // //                           </Box>
// // // //                         </Box>
// // // //                       )}
                      
// // // //                       {selectedSpeaker.addressOfSpeaker && (
// // // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // // //                           <LocationIcon color="primary" />
// // // //                           <Box>
// // // //                             <Typography variant="body2" color="text.secondary">
// // // //                               כתובת
// // // //                             </Typography>
// // // //                             <Typography variant="body1">
// // // //                               {selectedSpeaker.addressOfSpeaker}
// // // //                             </Typography>
// // // //                           </Box>
// // // //                         </Box>
// // // //                       )}
// // // //                     </Box>
                    
// // // //                     <Divider sx={{ my: 2 }} />
                    
// // // //                     <Typography variant="h6" gutterBottom>
// // // //                       קורסים
// // // //                     </Typography>
                    
// // // //                     {selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? (
// // // //                       <Box sx={{ mt: 2 }}>
// // // //                         <Grid container spacing={2}>
// // // //                           {selectedSpeaker.courses.map((course, index) => (
// // // //                             <Grid item xs={12} sm={6} key={index}>
// // // //                               <Card variant="outlined" sx={{ height: '100%' }}>
// // // //                                 <CardContent>
// // // //                                   <Typography variant="subtitle1" fontWeight="bold">
// // // //                                     {course.nameOfCourse || 'קורס ללא שם'}
// // // //                                   </Typography>
                                  
// // // //                                   {course.startDateOfCourse && (
// // // //                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
// // // //                                       <EventIcon fontSize="small" color="action" />
// // // //                                       <Typography variant="body2">
// // // //                                         תאריך התחלה: {new Date(course.startDateOfCourse).toLocaleDateString('he-IL')}
// // // //                                       </Typography>
// // // //                                     </Box>
// // // //                                   )}
                                  
// // // //                                   {course.amountOfStudentsInCourse && (
// // // //                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
// // // //                                       <SchoolIcon fontSize="small" color="action" />
// // // //                                       <Typography variant="body2">
// // // //                                         מספר תלמידים: {course.amountOfStudentsInCourse}
// // // //                                       </Typography>
// // // //                                     </Box>
// // // //                                   )}
// // // //                                 </CardContent>
// // // //                               </Card>
// // // //                             </Grid>
// // // //                           ))}
// // // //                         </Grid>
// // // //                       </Box>
// // // //                     ) : (
// // // //                       <Typography variant="body1" color="text.secondary">
// // // //                         אין קורסים פעילים למרצה זה
// // // //                       </Typography>
// // // //                     )}
// // // //                   </Grid>
// // // //                 </Grid>
// // // //               </DialogContent>
// // // //             </>
// // // //           )}
// // // //         </StyledDialog>
        
// // // //         {/* Snackbar for notifications */}
// // // //         <Snackbar
// // // //           open={snackbar.open}
// // // //           autoHideDuration={6000}
// // // //           onClose={handleCloseSnackbar}
// // // //           anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
// // // //         >
// // // //           <Alert 
// // // //             onClose={handleCloseSnackbar} 
// // // //             severity={snackbar.severity} 
// // // //             variant="filled"
// // // //             sx={{ width: '100%' }}
// // // //           >
// // // //             {snackbar.message}
// // // //           </Alert>
// // // //         </Snackbar>
// // // //       </Box>
// // // //     );
// // // //   };
  
// // // // import { useEffect } from 'react';
// // // // import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
// // // // import AddIcon from '@mui/icons-material/Add';
// // // // import Button from '@mui/material/Button';
// // // // import { styled } from '@mui/material/styles';
// // // // import Dialog from '@mui/material/Dialog';
// // // // import DialogTitle from '@mui/material/DialogTitle';
// // // // import DialogContent from '@mui/material/DialogContent';
// // // // import IconButton from '@mui/material/IconButton';
// // // // import CloseIcon from '@mui/icons-material/Close';
// // // // import { Routing } from '../Routing/Routing'
// // // // import * as React from 'react';
// // // // import './Speaker.css'
// // // // import { DeleteForever } from '@mui/icons-material';
// // // // import { Box, Chip, FormControl, Input, InputBase, InputLabel, MenuItem, Select, TableCell, TableRow, TextField, Typography } from '@mui/material';
// // // // import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
// // // // import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
// // // // import { InputOutlined } from '@mui/icons-material';
// // // // import { InputRounded } from '@mui/icons-material';
// // // // import SpeakersTable from './speakersTable';
// // // // import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
// // // // import { SchoolOutlined } from '@mui/icons-material';

// // // // export const Speaker = () => {
// // // //   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// // // //     '& .MuiDialogContent-root': {
// // // //       padding: theme.spacing(3),
// // // //     },
// // // //     '& .MuiDialogActions-root': {
// // // //       padding: theme.spacing(3),
// // // //     },
// // // //   }));
// // // //   const dispatch = useDispatch()
// // // //   const speakers = useSelector(state => state.speakers.speakers);
// // // //   const speaker = useSelector(state => state.speakers.selectSpeaker);
// // // //   const flagClose = useSelector(state => state.speakers.flagClose);
// // // //   const [flagClose2, setFlagClose2] = React.useState(flagClose)
// // // //   const [id, setId] = React.useState(false);
// // // //   const [open, setOpen] = React.useState(false);
// // // //   const [open2, setOpen2] = React.useState(false);
// // // //   const [flag, setFlag] = React.useState(false);
// // // //   const [flag2, setFlag2] = React.useState(false);
// // // //   const [flag4, setFlag4] = React.useState(false);
// // // //   const [f, setF] = React.useState(-1);
// // // //   const [flagDeletedSpeaker, setFlagDeletedSpeaker] = React.useState(false);
// // // //   const [deletedSpeaker, setDeletedSpeaker] = React.useState("");
// // // //   const [checkedSpeaker, setCheckedSpeaker] = React.useState();
// // // //   useEffect(() => {
// // // //     doIt()
// // // //   }, [])
// // // //   async function doIt() {
// // // //     dispatch(getSpeakersThunk())
// // // //   }

// // // //   const handleClickOpen = () => {
// // // //     setOpen(true);
// // // //     dispatch(setFlagSpeakerSlice(false))
// // // //   };
// // // //   const handleClose = () => {
// // // //     setOpen(false);
// // // //   };
// // // //   const handleClickOpen2 = () => {
// // // //     setOpen2(true);
// // // //   };
// // // //   const handleClose2 = () => {
// // // //     setOpen2(false);
// // // //     setFlagClose2(false)
// // // //   };
// // // //   async function openDivDetailes(index) {
// // // //     setFlag(true)
// // // //     setF(index)
// // // //   }
// // // //   const Close = () => {
// // // //     setFlag(false);
// // // //   };
// // // //   const Close2 = () => {
// // // //     setFlag2(false);
// // // //   };
// // // //   // const checkingDeletedSpeaker = () => {
// // // //   //   debugger
// // // //   //   if (deletedSpeaker != null)
// // // //   //     setFlagDeletedSpeaker(true)
// // // //   // };
// // // //   const deleteSpeaker = async () => {
// // // //     // if (deletedSpeaker == checkedSpeaker) {
// // // //     const tempSpeaker = await dispatch(getBySpeakerNameThunk(deletedSpeaker))
// // // //     console.log(deletedSpeaker);
// // // //     setId(tempSpeaker.payload.idOfSpeaker)
// // // //     //let red = dispatch(getBySpeakerNameThunk(deletedSpeaker))
// // // //     //console.log(id+"vvvvvvvvvvvvvvvvvvvv");
// // // //     debugger
// // // //     dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker))
// // // //     console.log("tempSpeaker.payload.idOfSpeaker"+tempSpeaker.payload.idOfSpeaker);
// // // //     setFlag4(true)
// // // //     //}
// // // //   };
// // // //   const whatsGoing = (name2) => {
// // // //     console.log(name2 + "name2");
// // // //     setDeletedSpeaker(name2)
// // // //   };

// // // //   return <div>

// // // //     <SpeakersTable></SpeakersTable>
// // // //     <React.Fragment>
// // // //       <Button variant="outlined" onClick={handleClickOpen}
// // // //         align='center'>
// // // //         הוספת מרצה
// // // //         <AddIcon ></AddIcon>
// // // //       </Button>
// // // //       {!flagClose && <BootstrapDialog
// // // //         onClose={handleClose}
// // // //         aria-labelledby="customized-dialog-title"
// // // //         open={open}
// // // //       >
// // // //         <DialogTitle
// // // //           id="customized-dialog-title">
// // // //           הוספת מרצה
// // // //         </DialogTitle>
// // // //         <IconButton
// // // //           aria-label="close"
// // // //           onClick={handleClose}
// // // //           sx={(theme) => ({
// // // //             position: 'absolute',
// // // //             right: 8,
// // // //             top: 8,
// // // //             color: theme.palette.grey[60],
// // // //           })}
// // // //         >
// // // //           <CloseIcon />
// // // //         </IconButton>
// // // //         <DialogContent dividers>
// // // //           <AddSpeaker />
// // // //         </DialogContent >
// // // //       </BootstrapDialog>}
// // // //     </React.Fragment>

// // // //     <>{flag && <React.Fragment>
// // // //       <BootstrapDialog
// // // //         open={flag}
// // // //         aria-labelledby="customized-dialog-title">
// // // //         <DialogTitle
// // // //           id="customized-dialog-title">
// // // //           {speakers[f].courses.map(v => v.nameOfCourse)}
// // // //         </DialogTitle>
// // // //         <IconButton
// // // //           aria-label="close"
// // // //           onClick={Close}
// // // //           sx={(theme) => ({
// // // //             position: 'absolute',
// // // //             right: 8,
// // // //             top: 8,
// // // //             color: theme.palette.grey[60],
// // // //           })}
// // // //         >
// // // //           <CloseIcon />
// // // //         </IconButton>
// // // //         <DialogContent dividers>
// // // //           <td>{speakers[f].courses.map(v => v.map(x =>
// // // //             <><td>{x.nameOfCourse}</td>
// // // //               <td>{x.amountOfStudentsInCourse}</td>
// // // //               <td>{x.startDateOfCourse}</td></>
// // // //           ))}</td>
// // // //         </DialogContent >
// // // //       </BootstrapDialog>
// // // //     </React.Fragment>
// // // //     }
// // // //     </>


// // // //     {/* [===delete====] */}
// // // //     <React.Fragment>
// // // //       <Button variant="outlined" onClick={handleClickOpen2}
// // // //         align='center'
// // // //       >
// // // //         מחיקת מרצה
// // // //         <DeleteForever />
// // // //       </Button>
// // // //       <BootstrapDialog
// // // //         onClose={handleClose2}
// // // //         aria-labelledby="customized-dialog-title"
// // // //         open={open2}
// // // //       >
// // // //         <DialogTitle
// // // //           id="customized-dialog-title">
// // // //           מחיקת מרצה
// // // //         </DialogTitle>
// // // //         <IconButton
// // // //           aria-label="close"
// // // //           onClick={handleClose2}
// // // //           sx={(theme) => ({
// // // //             position: 'absolute',
// // // //             right: 8,
// // // //             top: 8,
// // // //             color: theme.palette.grey[30],
// // // //           })}
// // // //         >
// // // //           <CloseIcon />
// // // //         </IconButton>
// // // //         <DialogContent dividers>

          
// // // //         <Box className="select" sx={{ minWidth: 120 }}>
// // // //       <FormControl fullWidth>
// // // //         <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// // // //         <Select
// // // //          onChange={(e) => whatsGoing(e.target.value)}
// // // //           labelId="demo-simple-select-label"
// // // //           id="demo-simple-select"
// // // //           label="מרצה "
// // // //           className="tool"
// // // //           defaultValue={""}
// // // //         >
// // // //           {speakers.map(speaker => {
// // // //             return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
// // // //               {speaker.nameOfSpeaker} </MenuItem>
// // // //           })}
// // // //         </Select>
// // // //       </FormControl>
// // // //     </Box>
// // // //           {/* <Box className="select" sx={{ minWidth: 120 }}>
// // // //             <FormControl fullWidth>
// // // //               <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// // // //               <Select
               
// // // //                 labelId="demo-simple-select-label"
// // // //                 id="demo-simple-select"
// // // //                 // defaultValue={""}
// // // //                 label="מרצה "
// // // //                 className="tool"

// // // //               >
// // // //                 {speakers.map(speaker => {
// // // //                   return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}

// // // //                   >{speaker.nameOfSpeaker}</MenuItem>

// // // //                 })
// // // //                 }

// // // //               </Select>
// // // //             </FormControl>
// // // //           </Box> */}
// // // //           <br />
// // // //           {/* <>{flagDeletedSpeaker && <><div>
// // // //             <input id="outlined-basic" placeholder=' הקלידי את שם המרצה' 
// // // //               className="input" onChange={(x) => setCheckedSpeaker(x.target.value)}
// // // //             />
// // // //           </div><Button
// // // //             onClick={() =>deleteSpeaker ()}
// // // //           >o.k</Button></>}</> */}

// // // //           {/* {!flagDeletedSpeaker && <Button
// // // //             onClick={() =>checkingDeletedSpeaker ()}
// // // //           >o.kk</Button>} */}
// // // //           <Button
// // // //             onClick={() => deleteSpeaker()}
// // // //           >o.k</Button>
// // // //         </DialogContent >
// // // //       </BootstrapDialog>
// // // //     </React.Fragment>

// // // //     <>{flag2 && <React.Fragment>
// // // //       <BootstrapDialog
// // // //         open={flag2}
// // // //         aria-labelledby="customized-dialog-title">
// // // //         <DialogTitle
// // // //           id="customized-dialog-title">
// // // //           {/* {speakers[f].courses.map(v => v.nameOfCourse)} */}
// // // //         </DialogTitle>
// // // //         <IconButton
// // // //           aria-label="close"
// // // //           onClick={Close2}
// // // //           sx={(theme) => ({
// // // //             position: 'absolute',
// // // //             right: 8,
// // // //             top: 8,
// // // //             color: theme.palette.grey[30],
// // // //           })}
// // // //         >
// // // //           <CloseIcon />
// // // //         </IconButton>
// // // //         <DialogContent dividers>


// // // //           {/* <td>{speakers[f].courses.map(v => v.map(x =>
// // // //             <><td>{x.nameOfCourse}</td>
// // // //               <td>{x.amountOfStudentsInCourse}</td>
// // // //               <td>{x.startDateOfCourse}</td></>
// // // //           ))}</td> */}
// // // //         </DialogContent >
// // // //       </BootstrapDialog>
// // // //     </React.Fragment>
// // // //     }
// // // //     </>
// // // //   </div>
// // // // }
// // // import React, { useEffect, useState } from 'react';
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { styled, alpha } from '@mui/material/styles';
// // // import { 
// // //   Box, Button, Dialog, DialogTitle, DialogContent, IconButton, 
// // //   Typography, Paper, Divider, Grid, Avatar, Chip, TextField, 
// // //   InputAdornment, FormControl, InputLabel, Select, MenuItem,
// // //   Tooltip, Zoom, Fade, Backdrop, Card, CardContent, Tabs, Tab,
// // //   Badge, Snackbar, Alert, CircularProgress, useTheme, useMediaQuery
// // // } from '@mui/material';
// // // import { 
// // //   Add as AddIcon, 
// // //   DeleteForever, 
// // //   Close as CloseIcon, 
// // //   Search as SearchIcon,
// // //   FilterList as FilterListIcon,
// // //   PersonAdd as PersonAddIcon,
// // //   School as SchoolIcon,
// // //   Event as EventIcon,
// // //   LocationOn as LocationIcon,
// // //   Phone as PhoneIcon,
// // //   Email as EmailIcon,
// // //   CheckCircle as CheckCircleIcon,
// // //   Sort as SortIcon,
// // //   Refresh as RefreshIcon,
// // //   MoreVert as MoreVertIcon,
// // //   ArrowUpward as ArrowUpwardIcon,
// // //   ArrowDownward as ArrowDownwardIcon
// // // } from '@mui/icons-material';

// // // import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
// // // import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
// // // import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
// // // import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
// // // import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
// // // import SpeakersTable from './speakersTable';
// // // import './Speaker.css';

// // // // Styled Components
// // // const StyledPaper = styled(Paper)(({ theme }) => ({
// // //   padding: theme.spacing(3),
// // //   borderRadius: 16,
// // //   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
// // //   background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
// // //   position: 'relative',
// // //   overflow: 'hidden',
// // //   '&::before': {
// // //     content: '""',
// // //     position: 'absolute',
// // //     top: 0,
// // //     left: 0,
// // //     width: '100%',
// // //     height: '5px',
// // //     background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
// // //   }
// // // }));

// // // const PageHeader = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   justifyContent: 'space-between',
// // //   alignItems: 'center',
// // //   marginBottom: theme.spacing(4),
// // //   [theme.breakpoints.down('sm')]: {
// // //     flexDirection: 'column',
// // //     alignItems: 'flex-start',
// // //     gap: theme.spacing(2),
// // //   }
// // // }));

// // // const SearchBar = styled(TextField)(({ theme }) => ({
// // //   width: '100%',
// // //   maxWidth: 400,
// // //   '& .MuiOutlinedInput-root': {
// // //     borderRadius: 30,
// // //     backgroundColor: alpha(theme.palette.common.white, 0.9),
// // //     transition: theme.transitions.create(['box-shadow']),
// // //     '&:hover': {
// // //       boxShadow: '0 0 0 2px rgba(63, 81, 181, 0.2)',
// // //     },
// // //     '&.Mui-focused': {
// // //       boxShadow: '0 0 0 3px rgba(63, 81, 181, 0.3)',
// // //     }
// // //   }
// // // }));

// // // const ActionButton = styled(Button)(({ theme }) => ({
// // //   borderRadius: 30,
// // //   padding: '8px 24px',
// // //   fontWeight: 600,
// // //   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
// // //   transition: 'all 0.3s ease',
// // //   '&:hover': {
// // //     transform: 'translateY(-2px)',
// // //     boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
// // //   }
// // // }));

// // // const FilterContainer = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   gap: theme.spacing(2),
// // //   flexWrap: 'wrap',
// // //   marginBottom: theme.spacing(3),
// // //   padding: theme.spacing(2),
// // //   backgroundColor: alpha(theme.palette.background.paper, 0.7),
// // //   borderRadius: 8,
// // //   [theme.breakpoints.down('sm')]: {
// // //     flexDirection: 'column',
// // //   }
// // // }));

// // // const StyledDialog = styled(Dialog)(({ theme }) => ({
// // //   '& .MuiDialog-paper': {
// // //     borderRadius: 16,
// // //     boxShadow: '0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)',
// // //     overflow: 'visible',
// // //   }
// // // }));

// // // const DialogHeader = styled(DialogTitle)(({ theme }) => ({
// // //   background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
// // //   color: theme.palette.common.white,
// // //   padding: theme.spacing(2, 3),
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   gap: theme.spacing(1),
// // // }));

// // // const SpeakerAvatar = styled(Avatar)(({ theme }) => ({
// // //   width: 60,
// // //   height: 60,
// // //   backgroundColor: theme.palette.primary.main,
// // //   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
// // //   fontSize: 24,
// // // }));

// // // const SortButton = styled(Button)(({ theme }) => ({
// // //   textTransform: 'none',
// // //   borderRadius: 20,
// // //   padding: '4px 12px',
// // //   fontSize: '0.875rem',
// // // }));

// // // const StyledChip = styled(Chip)(({ theme, active }) => ({
// // //   borderRadius: 16,
// // //   fontWeight: 500,
// // //   transition: 'all 0.2s ease',
// // //   ...(active && {
// // //     backgroundColor: theme.palette.primary.main,
// // //     color: theme.palette.common.white,
// // //     boxShadow: '0 2px 8px rgba(63, 81, 181, 0.4)',
// // //   })
// // // }));

// // // const StyledBadge = styled(Badge)(({ theme }) => ({
// // //   '& .MuiBadge-badge': {
// // //     backgroundColor: '#44b700',
// // //     color: '#44b700',
// // //     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
// // //     '&::after': {
// // //       position: 'absolute',
// // //       top: 0,
// // //       left: 0,
// // //       width: '100%',
// // //       height: '100%',
// // //       borderRadius: '50%',
// // //       animation: 'ripple 1.2s infinite ease-in-out',
// // //       border: '1px solid currentColor',
// // //       content: '""',
// // //     },
// // //   },
// // //   '@keyframes ripple': {
// // //     '0%': {
// // //       transform: 'scale(.8)',
// // //       opacity: 1,
// // //     },
// // //     '100%': {
// // //       transform: 'scale(2.4)',
// // //       opacity: 0,
// // //     },
// // //   },
// // // }));

// // // export const Speaker = () => {
// // //   const theme = useTheme();
// // //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// // //   const dispatch = useDispatch();
// // //   const speakers = useSelector(state => state.speakers.speakers);
// // //   const flagClose = useSelector(state => state.speakers.flagClose);
  
// // //   // State
// // //   const [open, setOpen] = useState(false);
// // //   const [openDelete, setOpenDelete] = useState(false);
// // //   const [openDetails, setOpenDetails] = useState(false);
// // //   const [selectedSpeaker, setSelectedSpeaker] = useState(null);
// // //   const [deleteSpeakerName, setDeleteSpeakerName] = useState("");
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [filteredSpeakers, setFilteredSpeakers] = useState([]);
// // //   const [sortConfig, setSortConfig] = useState({ key: 'nameOfSpeaker', direction: 'ascending' });
// // //   const [filterCategory, setFilterCategory] = useState('all');
// // //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
// // //   const [loading, setLoading] = useState(false);
// // //   const [tabValue, setTabValue] = useState(0);

// // //   // Load speakers on component mount
// // //   useEffect(() => {
// // //     loadSpeakers();
// // //   }, []);

// // //   // Filter speakers when search term or speakers list changes
// // //   useEffect(() => {
// // //     filterSpeakers();
// // //   }, [searchTerm, speakers, sortConfig, filterCategory]);

// // //   const loadSpeakers = async () => {
// // //     setLoading(true);
// // //     await dispatch(getSpeakersThunk());
// // //     setLoading(false);
// // //   };

// // //   const filterSpeakers = () => {
// // //     let filtered = [...speakers];
    
// // //     // Apply search filter
// // //     if (searchTerm) {
// // //       filtered = filtered.filter(speaker => 
// // //         speaker.nameOfSpeaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         speaker.phoneOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         speaker.emailOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase())
// // //       );
// // //     }
    
// // //     // Apply category filter
// // //     if (filterCategory !== 'all') {
// // //       filtered = filtered.filter(speaker => {
// // //         if (filterCategory === 'withCourses') {
// // //           return speaker.courses && speaker.courses.length > 0;
// // //         } else if (filterCategory === 'noCourses') {
// // //           return !speaker.courses || speaker.courses.length === 0;
// // //         }
// // //         return true;
// // //       });
// // //     }
    
// // //     // Apply sorting
// // //     if (sortConfig.key) {
// // //       filtered.sort((a, b) => {
// // //         if (a[sortConfig.key] < b[sortConfig.key]) {
// // //           return sortConfig.direction === 'ascending' ? -1 : 1;
// // //         }
// // //         if (a[sortConfig.key] > b[sortConfig.key]) {
// // //           return sortConfig.direction === 'ascending' ? 1 : -1;
// // //         }
// // //         return 0;
// // //       });
// // //     }
    
// // //     setFilteredSpeakers(filtered);
// // //   };

// // //   const handleSort = (key) => {
// // //     let direction = 'ascending';
// // //     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
// // //       direction = 'descending';
// // //     }
// // //     setSortConfig({ key, direction });
// // //   };

// // //   const handleAddSpeaker = () => {
// // //     setOpen(true);
// // //     dispatch(setFlagSpeakerSlice(false));
// // //   };

// // //   const handleDeleteDialogOpen = () => {
// // //     setOpenDelete(true);
// // //   };

// // //   const handleDeleteSpeaker = async () => {
// // //     if (!deleteSpeakerName) {
// // //       setSnackbar({
// // //         open: true,
// // //         message: 'יש לבחור מרצה למחיקה',
// // //         severity: 'error'
// // //       });
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       const tempSpeaker = await dispatch(getBySpeakerNameThunk(deleteSpeakerName));
// // //       if (tempSpeaker.payload) {
// // //         await dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker));
// // //         setSnackbar({
// // //           open: true,
// // //           message: `המרצה ${deleteSpeakerName} נמחק בהצלחה`,
// // //           severity: 'success'
// // //         });
// // //         setOpenDelete(false);
// // //         setDeleteSpeakerName("");
// // //       }
// // //     } catch (error) {
// // //       setSnackbar({
// // //         open: true,
// // //         message: 'שגיאה במחיקת המרצה',
// // //         severity: 'error'
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleViewDetails = (speaker) => {
// // //     setSelectedSpeaker(speaker);
// // //     setOpenDetails(true);
// // //   };

// // //   const handleTabChange = (event, newValue) => {
// // //     setTabValue(newValue);
// // //   };

// // //   const handleCloseSnackbar = () => {
// // //     setSnackbar({ ...snackbar, open: false });
// // //   };

// // //   // Generate random color for avatar based on name
// // //   const getAvatarColor = (name) => {
// // //     const colors = [
// // //       '#3f51b5', '#f44336', '#009688', '#ff9800', '#9c27b0', 
// // //       '#2196f3', '#4caf50', '#ffeb3b', '#795548', '#607d8b'
// // //     ];
// // //     const index = name.charCodeAt(0) % colors.length;
// // //     return colors[index];
// // //   };

// // //   // Get speaker initials for avatar
// // //   const getInitials = (name) => {
// // //     return name
// // //       .split(' ')
// // //       .map(part => part[0])
// // //       .join('')
// // //       .toUpperCase();
// // //   };

// // //   return (
// // //     <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
// // //       <StyledPaper elevation={3}>
// // //         <PageHeader>
// // //           <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
// // //             ניהול מרצים
// // //           </Typography>
          
// // //           <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// // //             <ActionButton
// // //               variant="contained"
// // //               color="primary"
// // //               startIcon={<PersonAddIcon />}
// // //               onClick={handleAddSpeaker}
// // //             >
// // //               הוספת מרצה
// // //             </ActionButton>
            
// // //             <ActionButton
// // //               variant="outlined"
// // //               color="error"
// // //               startIcon={<DeleteForever />}
// // //               onClick={handleDeleteDialogOpen}
// // //             >
// // //               מחיקת מרצה
// // //             </ActionButton>
            
// // //             <Tooltip title="רענון רשימה">
// // //               <IconButton 
// // //                 color="primary" 
// // //                 onClick={loadSpeakers}
// // //                 sx={{ 
// // //                   backgroundColor: alpha(theme.palette.primary.main, 0.1),
// // //                   '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.2) }
// // //                 }}
// // //               >
// // //                 <RefreshIcon />
// // //               </IconButton>
// // //             </Tooltip>
// // //           </Box>
// // //         </PageHeader>

// // //         <Divider sx={{ mb: 3 }} />
        
// // //         <Box sx={{ mb: 4 }}>
// // //           <Tabs 
// // //             value={tabValue} 
// // //             onChange={handleTabChange}
// // //             variant="fullWidth"
// // //             indicatorColor="primary"
// // //             textColor="primary"
// // //             sx={{ mb: 3 }}
// // //           >
// // //             <Tab icon={<SchoolIcon />} label="כל המרצים" />
// // //             <Tab icon={<EventIcon />} label="מרצים פעילים" />
// // //             <Tab icon={<FilterListIcon />} label="סינון מתקדם" />
// // //           </Tabs>

// // //           {tabValue === 0 && (
// // //             <Box>
// // //               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
// // //                 <SearchBar
// // //                   placeholder="חיפוש לפי שם, טלפון או אימייל..."
// // //                   variant="outlined"
// // //                   value={searchTerm}
// // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // //                   InputProps={{
// // //                     startAdornment: (
// // //                       <InputAdornment position="start">
// // //                         <SearchIcon color="action" />
// // //                       </InputAdornment>
// // //                     ),
// // //                     endAdornment: searchTerm && (
// // //                       <InputAdornment position="end">
// // //                         <IconButton size="small" onClick={() => setSearchTerm('')}>
// // //                           <CloseIcon fontSize="small" />
// // //                         </IconButton>
// // //                       </InputAdornment>
// // //                     )
// // //                   }}
// // //                 />
                
// // //                 <Box sx={{ display: 'flex', gap: 1 }}>
// // //                   <SortButton 
// // //                     variant={sortConfig.key === 'nameOfSpeaker' ? 'contained' : 'outlined'}
// // //                     size="small"
// // //                     onClick={() => handleSort('nameOfSpeaker')}
// // //                     endIcon={sortConfig.key === 'nameOfSpeaker' ? 
// // //                       (sortConfig.direction === 'ascending' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />) : 
// // //                       <SortIcon />}
// // //                   >
// // //                     מיון לפי שם
// // //                   </SortButton>
// // //                 </Box>
// // //               </Box>
              
// // //               <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
// // //                 <Typography variant="body2" sx={{ mr: 1, alignSelf: 'center' }}>
// // //                   סינון מהיר:
// // //                 </Typography>
// // //                 <StyledChip 
// // //                   label="הכל" 
// // //                   clickable
// // //                   active={filterCategory === 'all'}
// // //                   onClick={() => setFilterCategory('all')}
// // //                 />
// // //                 <StyledChip 
// // //                   label="עם קורסים" 
// // //                   clickable
// // //                   active={filterCategory === 'withCourses'}
// // //                   onClick={() => setFilterCategory('withCourses')}
// // //                 />
// // //                 <StyledChip 
// // //                   label="ללא קורסים" 
// // //                   clickable
// // //                   active={filterCategory === 'noCourses'}
// // //                   onClick={() => setFilterCategory('noCourses')}
// // //                 />
// // //               </Box>
              
// // //               {loading ? (
// // //                 <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
// // //                   <CircularProgress />
// // //                 </Box>
// // //               ) : filteredSpeakers.length > 0 ? (
// // //                 <Grid container spacing={3}>
// // //                   {filteredSpeakers.map((speaker) => (
// // //                     <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
// // //                       <Card 
// // //                         sx={{ 
// // //                           height: '100%', 
// // //                           display: 'flex', 
// // //                           flexDirection: 'column',
// // //                           transition: 'all 0.3s ease',
// // //                           '&:hover': {
// // //                             transform: 'translateY(-4px)',
// // //                             boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
// // //                           }
// // //                         }}
// // //                       >
// // //                         <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
// // //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // //                             {speaker.courses && speaker.courses.length > 0 ? (
// // //                               <StyledBadge
// // //                                 overlap="circular"
// // //                                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// // //                                 variant="dot"
// // //                               >
// // //                                 <SpeakerAvatar 
// // //                                   sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// // //                                 >
// // //                                   {getInitials(speaker.nameOfSpeaker)}
// // //                                 </SpeakerAvatar>
// // //                               </StyledBadge>
// // //                             ) : (
// // //                               <SpeakerAvatar 
// // //                                 sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// // //                               >
// // //                                 {getInitials(speaker.nameOfSpeaker)}
// // //                               </SpeakerAvatar>
// // //                             )}
                            
// // //                             <Box>
// // //                               <Typography variant="h6" component="h2" fontWeight="bold">
// // //                                 {speaker.nameOfSpeaker}
// // //                               </Typography>
// // //                               <Typography variant="body2" color="text.secondary">
// // //                                 {speaker.courses && speaker.courses.length > 0 
// // //                                   ? `${speaker.courses.length} קורסים פעילים` 
// // //                                   : 'אין קורסים פעילים'}
// // //                               </Typography>
// // //                             </Box>
// // //                           </Box>
                          
// // //                           <Divider />
                          
// // //                           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
// // //                             {speaker.phoneOfSpeaker && (
// // //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // //                                 <PhoneIcon fontSize="small" color="action" />
// // //                                 <Typography variant="body2">
// // //                                   {speaker.phoneOfSpeaker}
// // //                                 </Typography>
// // //                               </Box>
// // //                             )}
                            
// // //                             {speaker.emailOfSpeaker && (
// // //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // //                                 <EmailIcon fontSize="small" color="action" />
// // //                                 <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
// // //                                   {speaker.emailOfSpeaker}
// // //                                 </Typography>
// // //                               </Box>
// // //                             )}
                            
// // //                             {speaker.addressOfSpeaker && (
// // //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // //                                 <LocationIcon fontSize="small" color="action" />
// // //                                 <Typography variant="body2">
// // //                                   {speaker.addressOfSpeaker}
// // //                                 </Typography>
// // //                               </Box>
// // //                             )}
// // //                           </Box>
                          
// // //                           <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
// // //                             <Button 
// // //                               variant="outlined" 
// // //                               size="small"
// // //                               onClick={() => handleViewDetails(speaker)}
// // //                             >
// // //                               פרטים נוספים
// // //                             </Button>
// // //                           </Box>
// // //                         </CardContent>
// // //                       </Card>
// // //                     </Grid>
// // //                   ))}
// // //                 </Grid>
// // //               ) : (
// // //                 <Paper 
// // //                   sx={{ 
// // //                     p: 4, 
// // //                     textAlign: 'center',
// // //                     backgroundColor: alpha(theme.palette.background.paper, 0.7)
// // //                   }}
// // //                 >
// // //                   <Typography variant="h6" color="text.secondary" gutterBottom>
// // //                     לא נמצאו מרצים
// // //                   </Typography>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     נסה לשנות את הגדרות החיפוש או הסינון
// // //                   </Typography>
// // //                 </Paper>
// // //               )}
// // //             </Box>
// // //           )}
          
// // //           {tabValue === 1 && (
// // //             <Box>
// // //               <Typography variant="h6" gutterBottom>
// // //                 מרצים עם קורסים פעילים
// // //               </Typography>
// // //               <Grid container spacing={3}>
// // //                 {speakers
// // //                   .filter(speaker => speaker.courses && speaker.courses.length > 0)
// // //                   .map((speaker) => (
// // //                     <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
// // //                       <Card sx={{ height: '100%' }}>
// // //                         <CardContent>
// // //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
// // //                             <StyledBadge
// // //                               overlap="circular"
// // //                               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// // //                               variant="dot"
// // //                             >
// // //                               <SpeakerAvatar 
// // //                                 sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// // //                               >
// // //                                 {getInitials(speaker.nameOfSpeaker)}
// // //                               </SpeakerAvatar>
// // //                             </StyledBadge>
                            
// // //                             <Typography variant="h6" component="h2" fontWeight="bold">
// // //                               {speaker.nameOfSpeaker}
// // //                             </Typography>
// // //                           </Box>
                          
// // //                           <Divider sx={{ mb: 2 }} />
                          
// // //                           <Typography variant="subtitle2" gutterBottom>
// // //                             קורסים פעילים:
// // //                           </Typography>
                          
// // //                           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
// // //                             {speaker.courses.map((course, index) => (
// // //                               <Chip 
// // //                                 key={index}
// // //                                 label={course.nameOfCourse || 'קורס ללא שם'}
// // //                                 size="small"
// // //                                 color="primary"
// // //                                 variant="outlined"
// // //                               />
// // //                             ))}
// // //                           </Box>
                          
// // //                           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
// // //                             <Button 
// // //                               variant="outlined" 
// // //                               size="small"
// // //                               onClick={() => handleViewDetails(speaker)}
// // //                             >
// // //                               פרטים נוספים
// // //                             </Button>
// // //                           </Box>
// // //                         </CardContent>
// // //                       </Card>
// // //                     </Grid>
// // //                   ))}
// // //               </Grid>
              
// // //               {speakers.filter(speaker => speaker.courses && speaker.courses.length > 0).length === 0 && (
// // //                 <Paper sx={{ p: 4, textAlign: 'center' }}>
// // //                   <Typography variant="h6" color="text.secondary">
// // //                     אין מרצים עם קורסים פעילים
// // //                   </Typography>
// // //                 </Paper>
// // //               )}
// // //             </Box>
// // //           )}
          
// // //           {tabValue === 2 && (
// // //             <FilterContainer>
// // //               <Typography variant="h6" gutterBottom sx={{ width: '100%' }}>
// // //                 סינון מתקדם
// // //               </Typography>
              
// // //               <Grid container spacing={3}>
// // //                 <Grid item xs={12} md={6}>
// // //                   <FormControl fullWidth variant="outlined">
// // //                     <InputLabel>חיפוש לפי שדה</InputLabel>
// // //                     <Select
// // //                       label="חיפוש לפי שדה"
// // //                       value={sortConfig.key}
// // //                       onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
// // //                     >
// // //                       <MenuItem value="nameOfSpeaker">שם</MenuItem>
// // //                       <MenuItem value="phoneOfSpeaker">טלפון</MenuItem>
// // //                       <MenuItem value="emailOfSpeaker">אימייל</MenuItem>
// // //                     </Select>
// // //                   </FormControl>
// // //                 </Grid>
                
// // //                 <Grid item xs={12} md={6}>
// // //                   <FormControl fullWidth variant="outlined">
// // //                     <InputLabel>סדר מיון</InputLabel>
// // //                     <Select
// // //                       label="סדר מיון"
// // //                       value={sortConfig.direction}
// // //                       onChange={(e) => setSortConfig({ ...sortConfig, direction: e.target.value })}
// // //                     >
// // //                       <MenuItem value="ascending">עולה (א-ת)</MenuItem>
// // //                       <MenuItem value="descending">יורד (ת-א)</MenuItem>
// // //                     </Select>
// // //                   </FormControl>
// // //                 </Grid>
                
// // //                 <Grid item xs={12}>
// // //                   <TextField
// // //                     fullWidth
// // //                     label="חיפוש חופשי"
// // //                     variant="outlined"
// // //                     value={searchTerm}
// // //                     onChange={(e) => setSearchTerm(e.target.value)}
// // //                     InputProps={{
// // //                       startAdornment: (
// // //                         <InputAdornment position="start">
// // //                           <SearchIcon />
// // //                         </InputAdornment>
// // //                       ),
// // //                     }}
// // //                   />
// // //                 </Grid>
                
// // //                 <Grid item xs={12}>
// // //                   <Typography variant="subtitle2" gutterBottom>
// // //                     סינון לפי קטגוריה:
// // //                   </Typography>
// // //                   <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
// // //                     <StyledChip 
// // //                       label="הכל" 
// // //                       clickable
// // //                       active={filterCategory === 'all'}
// // //                       onClick={() => setFilterCategory('all')}
// // //                     />
// // //                     <StyledChip 
// // //                       label="עם קורסים" 
// // //                       clickable
// // //                       active={filterCategory === 'withCourses'}
// // //                       onClick={() => setFilterCategory('withCourses')}
// // //                     />
// // //                     <StyledChip 
// // //                       label="ללא קורסים" 
// // //                       clickable
// // //                       active={filterCategory === 'noCourses'}
// // //                       onClick={() => setFilterCategory('noCourses')}
// // //                     />
// // //                   </Box>
// // //                 </Grid>
// // //               </Grid>
// // //             </FilterContainer>
// // //           )}
// // //         </Box>
        
// // //         {/* Original Table (can be kept or removed) */}
// // //         <Box sx={{ display: 'none' }}>
// // //           <SpeakersTable />
// // //         </Box>
// // //       </StyledPaper>
      
// // //       {/* Add Speaker Dialog */}
// // //       <StyledDialog
// // //         open={open}
// // //         onClose={() => setOpen(false)}
// // //         maxWidth="md"
// // //         fullWidth
// // //         TransitionComponent={Zoom}
// // //       >
// // //         <DialogHeader>
// // //           <PersonAddIcon sx={{ mr: 1 }} />
// // //           הוספת מרצה
// // //         </DialogHeader>
// // //         <IconButton
// // //           aria-label="close"
// // //           onClick={() => setOpen(false)}
// // //           sx={{
// // //             position: 'absolute',
// // //             right: 8,
// // //             top: 8,
// // //             color: 'white',
// // //           }}
// // //         >
// // //           <CloseIcon />
// // //         </IconButton>
// // //         <DialogContent dividers>
// // //           <AddSpeaker />
// // //         </DialogContent>
// // //       </StyledDialog>
      
// // //       {/* Delete Speaker Dialog */}
// // //       <StyledDialog
// // //         open={openDelete}
// // //         onClose={() => setOpenDelete(false)}
// // //         maxWidth="sm"
// // //         fullWidth
// // //         TransitionComponent={Zoom}
// // //         >
// // //           <DialogHeader>
// // //             <DeleteForever sx={{ mr: 1 }} />
// // //             מחיקת מרצה
// // //           </DialogHeader>
// // //           <IconButton
// // //             aria-label="close"
// // //             onClick={() => setOpenDelete(false)}
// // //             sx={{
// // //               position: 'absolute',
// // //               right: 8,
// // //               top: 8,
// // //               color: 'white',
// // //             }}
// // //           >
// // //             <CloseIcon />
// // //           </IconButton>
// // //           <DialogContent dividers>
// // //             <Typography variant="body1" gutterBottom color="error">
// // //               שים לב! פעולה זו אינה ניתנת לביטול. המרצה וכל המידע הקשור אליו יימחקו לצמיתות.
// // //             </Typography>
            
// // //             <Box sx={{ my: 3 }}>
// // //               <FormControl fullWidth variant="outlined">
// // //                 <InputLabel id="delete-speaker-label">בחר מרצה למחיקה</InputLabel>
// // //                 <Select
// // //                   labelId="delete-speaker-label"
// // //                   value={deleteSpeakerName}
// // //                   onChange={(e) => setDeleteSpeakerName(e.target.value)}
// // //                   label="בחר מרצה למחיקה"
// // //                 >
// // //                   {speakers.map(speaker => (
// // //                     <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
// // //                       {speaker.nameOfSpeaker}
// // //                     </MenuItem>
// // //                   ))}
// // //                 </Select>
// // //               </FormControl>
// // //             </Box>
            
// // //             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
// // //               <Button 
// // //                 variant="outlined" 
// // //                 onClick={() => setOpenDelete(false)}
// // //               >
// // //                 ביטול
// // //               </Button>
// // //               <Button 
// // //                 variant="contained" 
// // //                 color="error"
// // //                 onClick={handleDeleteSpeaker}
// // //                 disabled={!deleteSpeakerName || loading}
// // //                 startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <DeleteForever />}
// // //               >
// // //                 {loading ? 'מוחק...' : 'מחיקה'}
// // //               </Button>
// // //             </Box>
// // //           </DialogContent>
// // //         </StyledDialog>
        
// // //         {/* Speaker Details Dialog */}
// // //         <StyledDialog
// // //           open={openDetails}
// // //           onClose={() => setOpenDetails(false)}
// // //           maxWidth="md"
// // //           fullWidth
// // //           TransitionComponent={Zoom}
// // //         >
// // //           {selectedSpeaker && (
// // //             <>
// // //               <DialogHeader>
// // //                 <SchoolIcon sx={{ mr: 1 }} />
// // //                 פרטי מרצה: {selectedSpeaker.nameOfSpeaker}
// // //               </DialogHeader>
// // //               <IconButton
// // //                 aria-label="close"
// // //                 onClick={() => setOpenDetails(false)}
// // //                 sx={{
// // //                   position: 'absolute',
// // //                   right: 8,
// // //                   top: 8,
// // //                   color: 'white',
// // //                 }}
// // //               >
// // //                 <CloseIcon />
// // //               </IconButton>
// // //               <DialogContent dividers>
// // //                 <Grid container spacing={3}>
// // //                   <Grid item xs={12} md={4}>
// // //                     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
// // //                       <SpeakerAvatar 
// // //                         sx={{ 
// // //                           width: 120, 
// // //                           height: 120, 
// // //                           fontSize: 48,
// // //                           bgcolor: getAvatarColor(selectedSpeaker.nameOfSpeaker)
// // //                         }}
// // //                       >
// // //                         {getInitials(selectedSpeaker.nameOfSpeaker)}
// // //                       </SpeakerAvatar>
                      
// // //                       <Typography variant="h5" fontWeight="bold" textAlign="center">
// // //                         {selectedSpeaker.nameOfSpeaker}
// // //                       </Typography>
                      
// // //                       <Chip 
// // //                         label={selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? 'מרצה פעיל' : 'מרצה לא פעיל'} 
// // //                         color={selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? 'success' : 'default'}
// // //                         variant="outlined"
// // //                       />
// // //                     </Box>
// // //                   </Grid>
                  
// // //                   <Grid item xs={12} md={8}>
// // //                     <Typography variant="h6" gutterBottom>
// // //                       פרטי קשר
// // //                     </Typography>
                    
// // //                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
// // //                       {selectedSpeaker.phoneOfSpeaker && (
// // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // //                           <PhoneIcon color="primary" />
// // //                           <Box>
// // //                             <Typography variant="body2" color="text.secondary">
// // //                               טלפון
// // //                             </Typography>
// // //                             <Typography variant="body1">
// // //                               {selectedSpeaker.phoneOfSpeaker}
// // //                             </Typography>
// // //                           </Box>
// // //                         </Box>
// // //                       )}
                      
// // //                       {selectedSpeaker.emailOfSpeaker && (
// // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // //                           <EmailIcon color="primary" />
// // //                           <Box>
// // //                             <Typography variant="body2" color="text.secondary">
// // //                               אימייל
// // //                             </Typography>
// // //                             <Typography variant="body1">
// // //                               {selectedSpeaker.emailOfSpeaker}
// // //                             </Typography>
// // //                           </Box>
// // //                         </Box>
// // //                       )}
                      
// // //                       {selectedSpeaker.addressOfSpeaker && (
// // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // //                           <LocationIcon color="primary" />
// // //                           <Box>
// // //                             <Typography variant="body2" color="text.secondary">
// // //                               כתובת
// // //                             </Typography>
// // //                             <Typography variant="body1">
// // //                               {selectedSpeaker.addressOfSpeaker}
// // //                             </Typography>
// // //                           </Box>
// // //                         </Box>
// // //                       )}
// // //                     </Box>
                    
// // //                     <Divider sx={{ my: 2 }} />
                    
// // //                     <Typography variant="h6" gutterBottom>
// // //                       קורסים
// // //                     </Typography>
                    
// // //                     {selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? (
// // //                       <Box sx={{ mt: 2 }}>
// // //                         <Grid container spacing={2}>
// // //                           {selectedSpeaker.courses.map((course, index) => (
// // //                             <Grid item xs={12} sm={6} key={index}>
// // //                               <Card variant="outlined" sx={{ height: '100%' }}>
// // //                                 <CardContent>
// // //                                   <Typography variant="subtitle1" fontWeight="bold">
// // //                                     {course.nameOfCourse || 'קורס ללא שם'}
// // //                                   </Typography>
                                  
// // //                                   {course.startDateOfCourse && (
// // //                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
// // //                                       <EventIcon fontSize="small" color="action" />
// // //                                       <Typography variant="body2">
// // //                                         תאריך התחלה: {new Date(course.startDateOfCourse).toLocaleDateString('he-IL')}
// // //                                       </Typography>
// // //                                     </Box>
// // //                                   )}
                                  
// // //                                   {course.amountOfStudentsInCourse && (
// // //                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
// // //                                       <SchoolIcon fontSize="small" color="action" />
// // //                                       <Typography variant="body2">
// // //                                         מספר תלמידים: {course.amountOfStudentsInCourse}
// // //                                       </Typography>
// // //                                     </Box>
// // //                                   )}
// // //                                 </CardContent>
// // //                               </Card>
// // //                             </Grid>
// // //                           ))}
// // //                         </Grid>
// // //                       </Box>
// // //                     ) : (
// // //                       <Typography variant="body1" color="text.secondary">
// // //                         אין קורסים פעילים למרצה זה
// // //                       </Typography>
// // //                     )}
// // //                   </Grid>
// // //                 </Grid>
// // //               </DialogContent>
// // //             </>
// // //           )}
// // //         </StyledDialog>
        
// // //         {/* Snackbar for notifications */}
// // //         <Snackbar
// // //           open={snackbar.open}
// // //           autoHideDuration={6000}
// // //           onClose={handleCloseSnackbar}
// // //           anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
// // //         >
// // //           <Alert 
// // //             onClose={handleCloseSnackbar} 
// // //             severity={snackbar.severity} 
// // //             variant="filled"
// // //             sx={{ width: '100%' }}
// // //           >
// // //             {snackbar.message}
// // //           </Alert>
// // //         </Snackbar>
// // //       </Box>
// // //     );
// // //   };
  
// // // // import { useEffect } from 'react';
// // // // import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
// // // // import AddIcon from '@mui/icons-material/Add';
// // // // import Button from '@mui/material/Button';
// // // // import { styled } from '@mui/material/styles';
// // // // import Dialog from '@mui/material/Dialog';
// // // // import DialogTitle from '@mui/material/DialogTitle';
// // // // import DialogContent from '@mui/material/DialogContent';
// // // // import IconButton from '@mui/material/IconButton';
// // // // import CloseIcon from '@mui/icons-material/Close';
// // // // import { Routing } from '../Routing/Routing'
// // // // import * as React from 'react';
// // // // import './Speaker.css'
// // // // import { DeleteForever } from '@mui/icons-material';
// // // // import { Box, Chip, FormControl, Input, InputBase, InputLabel, MenuItem, Select, TableCell, TableRow, TextField, Typography } from '@mui/material';
// // // // import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
// // // // import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
// // // // import { InputOutlined } from '@mui/icons-material';
// // // // import { InputRounded } from '@mui/icons-material';
// // // // import SpeakersTable from './speakersTable';
// // // // import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
// // // // import { SchoolOutlined } from '@mui/icons-material';

// // // // export const Speaker = () => {
// // // //   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// // // //     '& .MuiDialogContent-root': {
// // // //       padding: theme.spacing(3),
// // // //     },
// // // //     '& .MuiDialogActions-root': {
// // // //       padding: theme.spacing(3),
// // // //     },
// // // //   }));
// // // //   const dispatch = useDispatch()
// // // //   const speakers = useSelector(state => state.speakers.speakers);
// // // //   const speaker = useSelector(state => state.speakers.selectSpeaker);
// // // //   const flagClose = useSelector(state => state.speakers.flagClose);
// // // //   const [flagClose2, setFlagClose2] = React.useState(flagClose)
// // // //   const [id, setId] = React.useState(false);
// // // //   const [open, setOpen] = React.useState(false);
// // // //   const [open2, setOpen2] = React.useState(false);
// // // //   const [flag, setFlag] = React.useState(false);
// // // //   const [flag2, setFlag2] = React.useState(false);
// // // //   const [flag4, setFlag4] = React.useState(false);
// // // //   const [f, setF] = React.useState(-1);
// // // //   const [flagDeletedSpeaker, setFlagDeletedSpeaker] = React.useState(false);
// // // //   const [deletedSpeaker, setDeletedSpeaker] = React.useState("");
// // // //   const [checkedSpeaker, setCheckedSpeaker] = React.useState();
// // // //   useEffect(() => {
// // // //     doIt()
// // // //   }, [])
// // // //   async function doIt() {
// // // //     dispatch(getSpeakersThunk())
// // // //   }

// // // //   const handleClickOpen = () => {
// // // //     setOpen(true);
// // // //     dispatch(setFlagSpeakerSlice(false))
// // // //   };
// // // //   const handleClose = () => {
// // // //     setOpen(false);
// // // //   };
// // // //   const handleClickOpen2 = () => {
// // // //     setOpen2(true);
// // // //   };
// // // //   const handleClose2 = () => {
// // // //     setOpen2(false);
// // // //     setFlagClose2(false)
// // // //   };
// // // //   async function openDivDetailes(index) {
// // // //     setFlag(true)
// // // //     setF(index)
// // // //   }
// // // //   const Close = () => {
// // // //     setFlag(false);
// // // //   };
// // // //   const Close2 = () => {
// // // //     setFlag2(false);
// // // //   };
// // // //   // const checkingDeletedSpeaker = () => {
// // // //   //   debugger
// // // //   //   if (deletedSpeaker != null)
// // // //   //     setFlagDeletedSpeaker(true)
// // // //   // };
// // // //   const deleteSpeaker = async () => {
// // // //     // if (deletedSpeaker == checkedSpeaker) {
// // // //     const tempSpeaker = await dispatch(getBySpeakerNameThunk(deletedSpeaker))
// // // //     console.log(deletedSpeaker);
// // // //     setId(tempSpeaker.payload.idOfSpeaker)
// // // //     //let red = dispatch(getBySpeakerNameThunk(deletedSpeaker))
// // // //     //console.log(id+"vvvvvvvvvvvvvvvvvvvv");
// // // //     debugger
// // // //     dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker))
// // // //     console.log("tempSpeaker.payload.idOfSpeaker"+tempSpeaker.payload.idOfSpeaker);
// // // //     setFlag4(true)
// // // //     //}
// // // //   };
// // // //   const whatsGoing = (name2) => {
// // // //     console.log(name2 + "name2");
// // // //     setDeletedSpeaker(name2)
// // // //   };

// // // //   return <div>

// // // //     <SpeakersTable></SpeakersTable>
// // // //     <React.Fragment>
// // // //       <Button variant="outlined" onClick={handleClickOpen}
// // // //         align='center'>
// // // //         הוספת מרצה
// // // //         <AddIcon ></AddIcon>
// // // //       </Button>
// // // //       {!flagClose && <BootstrapDialog
// // // //         onClose={handleClose}
// // // //         aria-labelledby="customized-dialog-title"
// // // //         open={open}
// // // //       >
// // // //         <DialogTitle
// // // //           id="customized-dialog-title">
// // // //           הוספת מרצה
// // // //         </DialogTitle>
// // // //         <IconButton
// // // //           aria-label="close"
// // // //           onClick={handleClose}
// // // //           sx={(theme) => ({
// // // //             position: 'absolute',
// // // //             right: 8,
// // // //             top: 8,
// // // //             color: theme.palette.grey[60],
// // // //           })}
// // // //         >
// // // //           <CloseIcon />
// // // //         </IconButton>
// // // //         <DialogContent dividers>
// // // //           <AddSpeaker />
// // // //         </DialogContent >
// // // //       </BootstrapDialog>}
// // // //     </React.Fragment>

// // // //     <>{flag && <React.Fragment>
// // // //       <BootstrapDialog
// // // //         open={flag}
// // // //         aria-labelledby="customized-dialog-title">
// // // //         <DialogTitle
// // // //           id="customized-dialog-title">
// // // //           {speakers[f].courses.map(v => v.nameOfCourse)}
// // // //         </DialogTitle>
// // // //         <IconButton
// // // //           aria-label="close"
// // // //           onClick={Close}
// // // //           sx={(theme) => ({
// // // //             position: 'absolute',
// // // //             right: 8,
// // // //             top: 8,
// // // //             color: theme.palette.grey[60],
// // // //           })}
// // // //         >
// // // //           <CloseIcon />
// // // //         </IconButton>
// // // //         <DialogContent dividers>
// // // //           <td>{speakers[f].courses.map(v => v.map(x =>
// // // //             <><td>{x.nameOfCourse}</td>
// // // //               <td>{x.amountOfStudentsInCourse}</td>
// // // //               <td>{x.startDateOfCourse}</td></>
// // // //           ))}</td>
// // // //         </DialogContent >
// // // //       </BootstrapDialog>
// // // //     </React.Fragment>
// // // //     }
// // // //     </>


// // // //     {/* [===delete====] */}
// // // //     <React.Fragment>
// // // //       <Button variant="outlined" onClick={handleClickOpen2}
// // // //         align='center'
// // // //       >
// // // //         מחיקת מרצה
// // // //         <DeleteForever />
// // // //       </Button>
// // // //       <BootstrapDialog
// // // //         onClose={handleClose2}
// // // //         aria-labelledby="customized-dialog-title"
// // // //         open={open2}
// // // //       >
// // // //         <DialogTitle
// // // //           id="customized-dialog-title">
// // // //           מחיקת מרצה
// // // //         </DialogTitle>
// // // //         <IconButton
// // // //           aria-label="close"
// // // //           onClick={handleClose2}
// // // //           sx={(theme) => ({
// // // //             position: 'absolute',
// // // //             right: 8,
// // // //             top: 8,
// // // //             color: theme.palette.grey[30],
// // // //           })}
// // // //         >
// // // //           <CloseIcon />
// // // //         </IconButton>
// // // //         <DialogContent dividers>

          
// // // //         <Box className="select" sx={{ minWidth: 120 }}>
// // // //       <FormControl fullWidth>
// // // //         <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// // // //         <Select
// // // //          onChange={(e) => whatsGoing(e.target.value)}
// // // //           labelId="demo-simple-select-label"
// // // //           id="demo-simple-select"
// // // //           label="מרצה "
// // // //           className="tool"
// // // //           defaultValue={""}
// // // //         >
// // // //           {speakers.map(speaker => {
// // // //             return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
// // // //               {speaker.nameOfSpeaker} </MenuItem>
// // // //           })}
// // // //         </Select>
// // // //       </FormControl>
// // // //     </Box>
// // // //           {/* <Box className="select" sx={{ minWidth: 120 }}>
// // // //             <FormControl fullWidth>
// // // //               <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// // // //               <Select
               
// // // //                 labelId="demo-simple-select-label"
// // // //                 id="demo-simple-select"
// // // //                 // defaultValue={""}
// // // //                 label="מרצה "
// // // //                 className="tool"

// // // //               >
// // // //                 {speakers.map(speaker => {
// // // //                   return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}

// // // //                   >{speaker.nameOfSpeaker}</MenuItem>

// // // //                 })
// // // //                 }

// // // //               </Select>
// // // //             </FormControl>
// // // //           </Box> */}
// // // //           <br />
// // // //           {/* <>{flagDeletedSpeaker && <><div>
// // // //             <input id="outlined-basic" placeholder=' הקלידי את שם המרצה' 
// // // //               className="input" onChange={(x) => setCheckedSpeaker(x.target.value)}
// // // //             />
// // // //           </div><Button
// // // //             onClick={() =>deleteSpeaker ()}
// // // //           >o.k</Button></>}</> */}

// // // //           {/* {!flagDeletedSpeaker && <Button
// // // //             onClick={() =>checkingDeletedSpeaker ()}
// // // //           >o.kk</Button>} */}
// // // //           <Button
// // // //             onClick={() => deleteSpeaker()}
// // // //           >o.k</Button>
// // // //         </DialogContent >
// // // //       </BootstrapDialog>
// // // //     </React.Fragment>

// // // //     <>{flag2 && <React.Fragment>
// // // //       <BootstrapDialog
// // // //         open={flag2}
// // // //         aria-labelledby="customized-dialog-title">
// // // //         <DialogTitle
// // // //           id="customized-dialog-title">
// // // //           {/* {speakers[f].courses.map(v => v.nameOfCourse)} */}
// // // //         </DialogTitle>
// // // //         <IconButton
// // // //           aria-label="close"
// // // //           onClick={Close2}
// // // //           sx={(theme) => ({
// // // //             position: 'absolute',
// // // //             right: 8,
// // // //             top: 8,
// // // //             color: theme.palette.grey[30],
// // // //           })}
// // // //         >
// // // //           <CloseIcon />
// // // //         </IconButton>
// // // //         <DialogContent dividers>


// // // //           {/* <td>{speakers[f].courses.map(v => v.map(x =>
// // // //             <><td>{x.nameOfCourse}</td>
// // // //               <td>{x.amountOfStudentsInCourse}</td>
// // // //               <td>{x.startDateOfCourse}</td></>
// // // //           ))}</td> */}
// // // //         </DialogContent >
// // // //       </BootstrapDialog>
// // // //     </React.Fragment>
// // // //     }
// // // //     </>
// // // //   </div>
// // // // }
// // // import React, { useEffect, useState } from 'react';
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { styled, alpha } from '@mui/material/styles';
// // // import { 
// // //   Box, Button, Dialog, DialogTitle, DialogContent, IconButton, 
// // //   Typography, Paper, Divider, Grid, Avatar, Chip, TextField, 
// // //   InputAdornment, FormControl, InputLabel, Select, MenuItem,
// // //   Tooltip, Zoom, Fade, Backdrop, Card, CardContent, Tabs, Tab,
// // //   Badge, Snackbar, Alert, CircularProgress, useTheme, useMediaQuery
// // // } from '@mui/material';
// // // import { 
// // //   Add as AddIcon, 
// // //   DeleteForever, 
// // //   Close as CloseIcon, 
// // //   Search as SearchIcon,
// // //   FilterList as FilterListIcon,
// // //   PersonAdd as PersonAddIcon,
// // //   School as SchoolIcon,
// // //   Event as EventIcon,
// // //   LocationOn as LocationIcon,
// // //   Phone as PhoneIcon,
// // //   Email as EmailIcon,
// // //   CheckCircle as CheckCircleIcon,
// // //   Sort as SortIcon,
// // //   Refresh as RefreshIcon,
// // //   MoreVert as MoreVertIcon,
// // //   ArrowUpward as ArrowUpwardIcon,
// // //   ArrowDownward as ArrowDownwardIcon
// // // } from '@mui/icons-material';

// // // import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
// // // import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
// // // import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
// // // import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
// // // import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
// // // import SpeakersTable from './speakersTable';
// // // import './Speaker.css';

// // // export const Speaker = () => {
// // //   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// // //     '& .MuiDialogContent-root': {
// // //       padding: theme.spacing(3),
// // //     },
// // //     '& .MuiDialogActions-root': {
// // //       padding: theme.spacing(3),
// // //     },
// // //   }));
// // //   const dispatch = useDispatch()
// // //   const speakers = useSelector(state => state.speakers.speakers);
// // //   const speaker = useSelector(state => state.speakers.selectSpeaker);
// // //   const flagClose = useSelector(state => state.speakers.flagClose);
  
// // //   // State
// // //   const [open, setOpen] = useState(false);
// // //   const [openDelete, setOpenDelete] = useState(false);
// // //   const [openDetails, setOpenDetails] = useState(false);
// // //   const [selectedSpeaker, setSelectedSpeaker] = useState(null);
// // //   const [deleteSpeakerName, setDeleteSpeakerName] = useState("");
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [filteredSpeakers, setFilteredSpeakers] = useState([]);
// // //   const [sortConfig, setSortConfig] = useState({ key: 'nameOfSpeaker', direction: 'ascending' });
// // //   const [filterCategory, setFilterCategory] = useState('all');
// // //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
// // //   const [loading, setLoading] = useState(false);
// // //   const [tabValue, setTabValue] = useState(0);

// // //   // Load speakers on component mount
// // //   useEffect(() => {
// // //     loadSpeakers();
// // //   }, []);

// // //   // Filter speakers when search term or speakers list changes
// // //   useEffect(() => {
// // //     filterSpeakers();
// // //   }, [searchTerm, speakers, sortConfig, filterCategory]);

// // //   const loadSpeakers = async () => {
// // //     setLoading(true);
// // //     await dispatch(getSpeakersThunk());
// // //     setLoading(false);
// // //   };

// // //   const filterSpeakers = () => {
// // //     let filtered = [...speakers];
    
// // //     // Apply search filter
// // //     if (searchTerm) {
// // //       filtered = filtered.filter(speaker => 
// // //         speaker.nameOfSpeaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         speaker.phoneOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         speaker.emailOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase())
// // //       );
// // //     }
    
// // //     // Apply category filter
// // //     if (filterCategory !== 'all') {
// // //       filtered = filtered.filter(speaker => {
// // //         if (filterCategory === 'withCourses') {
// // //           return speaker.courses && speaker.courses.length > 0;
// // //         } else if (filterCategory === 'noCourses') {
// // //           return !speaker.courses || speaker.courses.length === 0;
// // //         }
// // //         return true;
// // //       });
// // //     }
    
// // //     // Apply sorting
// // //     if (sortConfig.key) {
// // //       filtered.sort((a, b) => {
// // //         if (a[sortConfig.key] < b[sortConfig.key]) {
// // //           return sortConfig.direction === 'ascending' ? -1 : 1;
// // //         }
// // //         if (a[sortConfig.key] > b[sortConfig.key]) {
// // //           return sortConfig.direction === 'ascending' ? 1 : -1;
// // //         }
// // //         return 0;
// // //       });
// // //     }
    
// // //     setFilteredSpeakers(filtered);
// // //   };

// // //   const handleSort = (key) => {
// // //     let direction = 'ascending';
// // //     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
// // //       direction = 'descending';
// // //     }
// // //     setSortConfig({ key, direction });
// // //   };

// // //   const handleAddSpeaker = () => {
// // //     setOpen(true);
// // //     dispatch(setFlagSpeakerSlice(false));
// // //   };

// // //   const handleDeleteDialogOpen = () => {
// // //     setOpenDelete(true);
// // //   };

// // //   const handleDeleteSpeaker = async () => {
// // //     if (!deleteSpeakerName) {
// // //       setSnackbar({
// // //         open: true,
// // //         message: 'יש לבחור מרצה למחיקה',
// // //         severity: 'error'
// // //       });
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       const tempSpeaker = await dispatch(getBySpeakerNameThunk(deleteSpeakerName));
// // //       if (tempSpeaker.payload) {
// // //         await dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker));
// // //         setSnackbar({
// // //           open: true,
// // //           message: `המרצה ${deleteSpeakerName} נמחק בהצלחה`,
// // //           severity: 'success'
// // //         });
// // //         setOpenDelete(false);
// // //         setDeleteSpeakerName("");
// // //       }
// // //     } catch (error) {
// // //       setSnackbar({
// // //         open: true,
// // //         message: 'שגיאה במחיקת המרצה',
// // //         severity: 'error'
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleViewDetails = (speaker) => {
// // //     setSelectedSpeaker(speaker);
// // //     setOpenDetails(true);
// // //   };

// // //   const handleTabChange = (event, newValue) => {
// // //     setTabValue(newValue);
// // //   };

// // //   const handleCloseSnackbar = () => {
// // //     setSnackbar({ ...snackbar, open: false });
// // //   };

// // //   // Generate random color for avatar based on name
// // //   const getAvatarColor = (name) => {
// // //     const colors = [
// // //       '#3f51b5', '#f44336', '#009688', '#ff9800', '#9c27b0', 
// // //       '#2196f3', '#4caf50', '#ffeb3b', '#795548', '#607d8b'
// // //     ];
// // //     const index = name.charCodeAt(0) % colors.length;
// // //     return colors[index];
// // //   };

// // //   // Get speaker initials for avatar
// // //   const getInitials = (name) => {
// // //     return name
// // //       .split(' ')
// // //       .map(part => part[0])
// // //       .join('')
// // //       .toUpperCase();
// // //   };

// // //   return (
// // //     <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
// // //       <StyledPaper elevation={3}>
// // //         <PageHeader>
// // //           <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
// // //             ניהול מרצים
// // //           </Typography>
          
// // //           <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// // //             <ActionButton
// // //               variant="contained"
// // //               color="primary"
// // //               startIcon={<PersonAddIcon />}
// // //               onClick={handleAddSpeaker}
// // //             >
// // //               הוספת מרצה
// // //             </ActionButton>
            
// // //             <ActionButton
// // //               variant="outlined"
// // //               color="error"
// // //               startIcon={<DeleteForever />}
// // //               onClick={handleDeleteDialogOpen}
// // //             >
// // //               מחיקת מרצה
// // //             </ActionButton>
            
// // //             <Tooltip title="רענון רשימה">
// // //               <IconButton 
// // //                 color="primary" 
// // //                 onClick={loadSpeakers}
// // //                 sx={{ 
// // //                   backgroundColor: alpha(theme.palette.primary.main, 0.1),
// // //                   '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.2) }
// // //                 }}
// // //               >
// // //                 <RefreshIcon />
// // //               </IconButton>
// // //             </Tooltip>
// // //           </Box>
// // //         </PageHeader>

// // //         <Divider sx={{ mb: 3 }} />
        
// // //         <Box sx={{ mb: 4 }}>
// // //           <Tabs 
// // //             value={tabValue} 
// // //             onChange={handleTabChange}
// // //             variant="fullWidth"
// // //             indicatorColor="primary"
// // //             textColor="primary"
// // //             sx={{ mb: 3 }}
// // //           >
// // //             <Tab icon={<SchoolIcon />} label="כל המרצים" />
// // //             <Tab icon={<EventIcon />} label="מרצים פעילים" />
// // //             <Tab icon={<FilterListIcon />} label="סינון מתקדם" />
// // //           </Tabs>

// // //           {tabValue === 0 && (
// // //             <Box>
// // //               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
// // //                 <SearchBar
// // //                   placeholder="חיפוש לפי שם, טלפון או אימייל..."
// // //                   variant="outlined"
// // //                   value={searchTerm}
// // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // //                   InputProps={{
// // //                     startAdornment: (
// // //                       <InputAdornment position="start">
// // //                         <SearchIcon color="action" />
// // //                       </InputAdornment>
// // //                     ),
// // //                     endAdornment: searchTerm && (
// // //                       <InputAdornment position="end">
// // //                         <IconButton size="small" onClick={() => setSearchTerm('')}>
// // //                           <CloseIcon fontSize="small" />
// // //                         </IconButton>
// // //                       </InputAdornment>
// // //                     )
// // //                   }}
// // //                 />
                
// // //                 <Box sx={{ display: 'flex', gap: 1 }}>
// // //                   <SortButton 
// // //                     variant={sortConfig.key === 'nameOfSpeaker' ? 'contained' : 'outlined'}
// // //                     size="small"
// // //                     onClick={() => handleSort('nameOfSpeaker')}
// // //                     endIcon={sortConfig.key === 'nameOfSpeaker' ? 
// // //                       (sortConfig.direction === 'ascending' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />) : 
// // //                       <SortIcon />}
// // //                   >
// // //                     מיון לפי שם
// // //                   </SortButton>
// // //                 </Box>
// // //               </Box>
              
// // //               <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
// // //                 <Typography variant="body2" sx={{ mr: 1, alignSelf: 'center' }}>
// // //                   סינון מהיר:
// // //                 </Typography>
// // //                 <StyledChip 
// // //                   label="הכל" 
// // //                   clickable
// // //                   active={filterCategory === 'all'}
// // //                   onClick={() => setFilterCategory('all')}
// // //                 />
// // //                 <StyledChip 
// // //                   label="עם קורסים" 
// // //                   clickable
// // //                   active={filterCategory === 'withCourses'}
// // //                   onClick={() => setFilterCategory('withCourses')}
// // //                 />
// // //                 <StyledChip 
// // //                   label="ללא קורסים" 
// // //                   clickable
// // //                   active={filterCategory === 'noCourses'}
// // //                   onClick={() => setFilterCategory('noCourses')}
// // //                 />
// // //               </Box>
              
// // //               {loading ? (
// // //                 <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
// // //                   <CircularProgress />
// // //                 </Box>
// // //               ) : filteredSpeakers.length > 0 ? (
// // //                 <Grid container spacing={3}>
// // //                   {filteredSpeakers.map((speaker) => (
// // //                     <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
// // //                       <Card 
// // //                         sx={{ 
// // //                           height: '100%', 
// // //                           display: 'flex', 
// // //                           flexDirection: 'column',
// // //                           transition: 'all 0.3s ease',
// // //                           '&:hover': {
// // //                             transform: 'translateY(-4px)',
// // //                             boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
// // //                           }
// // //                         }}
// // //                       >
// // //                         <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
// // //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // //                             {speaker.courses && speaker.courses.length > 0 ? (
// // //                               <StyledBadge
// // //                                 overlap="circular"
// // //                                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// // //                                 variant="dot"
// // //                               >
// // //                                 <SpeakerAvatar 
// // //                                   sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// // //                                 >
// // //                                   {getInitials(speaker.nameOfSpeaker)}
// // //                                 </SpeakerAvatar>
// // //                               </StyledBadge>
// // //                             ) : (
// // //                               <SpeakerAvatar 
// // //                                 sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// // //                               >
// // //                                 {getInitials(speaker.nameOfSpeaker)}
// // //                               </SpeakerAvatar>
// // //                             )}
                            
// // //                             <Box>
// // //                               <Typography variant="h6" component="h2" fontWeight="bold">
// // //                                 {speaker.nameOfSpeaker}
// // //                               </Typography>
// // //                               <Typography variant="body2" color="text.secondary">
// // //                                 {speaker.courses && speaker.courses.length > 0 
// // //                                   ? `${speaker.courses.length} קורסים פעילים` 
// // //                                   : 'אין קורסים פעילים'}
// // //                               </Typography>
// // //                             </Box>
// // //                           </Box>
                          
// // //                           <Divider />
                          
// // //                           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
// // //                             {speaker.phoneOfSpeaker && (
// // //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // //                                 <PhoneIcon fontSize="small" color="action" />
// // //                                 <Typography variant="body2">
// // //                                   {speaker.phoneOfSpeaker}
// // //                                 </Typography>
// // //                               </Box>
// // //                             )}
                            
// // //                             {speaker.emailOfSpeaker && (
// // //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // //                                 <EmailIcon fontSize="small" color="action" />
// // //                                 <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
// // //                                   {speaker.emailOfSpeaker}
// // //                                 </Typography>
// // //                               </Box>
// // //                             )}
                            
// // //                             {speaker.addressOfSpeaker && (
// // //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // //                                 <LocationIcon fontSize="small" color="action" />
// // //                                 <Typography variant="body2">
// // //                                   {speaker.addressOfSpeaker}
// // //                                 </Typography>
// // //                               </Box>
// // //                             )}
// // //                           </Box>
                          
// // //                           <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
// // //                             <Button 
// // //                               variant="outlined" 
// // //                               size="small"
// // //                               onClick={() => handleViewDetails(speaker)}
// // //                             >
// // //                               פרטים נוספים
// // //                             </Button>
// // //                           </Box>
// // //                         </CardContent>
// // //                       </Card>
// // //                     </Grid>
// // //                   ))}
// // //                 </Grid>
// // //               ) : (
// // //                 <Paper 
// // //                   sx={{ 
// // //                     p: 4, 
// // //                     textAlign: 'center',
// // //                     backgroundColor: alpha(theme.palette.background.paper, 0.7)
// // //                   }}
// // //                 >
// // //                   <Typography variant="h6" color="text.secondary" gutterBottom>
// // //                     לא נמצאו מרצים
// // //                   </Typography>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     נסה לשנות את הגדרות החיפוש או הסינון
// // //                   </Typography>
// // //                 </Paper>
// // //               )}
// // //             </Box>
// // //           )}
          
// // //           {tabValue === 1 && (
// // //             <Box>
// // //               <Typography variant="h6" gutterBottom>
// // //                 מרצים עם קורסים פעילים
// // //               </Typography>
// // //               <Grid container spacing={3}>
// // //                 {speakers
// // //                   .filter(speaker => speaker.courses && speaker.courses.length > 0)
// // //                   .map((speaker) => (
// // //                     <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
// // //                       <Card sx={{ height: '100%' }}>
// // //                         <CardContent>
// // //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
// // //                             <StyledBadge
// // //                               overlap="circular"
// // //                               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// // //                               variant="dot"
// // //                             >
// // //                               <SpeakerAvatar 
// // //                                 sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// // //                               >
// // //                                 {getInitials(speaker.nameOfSpeaker)}
// // //                               </SpeakerAvatar>
// // //                             </StyledBadge>
                            
// // //                             <Typography variant="h6" component="h2" fontWeight="bold">
// // //                               {speaker.nameOfSpeaker}
// // //                             </Typography>
// // //                           </Box>
                          
// // //                           <Divider sx={{ mb: 2 }} />
                          
// // //                           <Typography variant="subtitle2" gutterBottom>
// // //                             קורסים פעילים:
// // //                           </Typography>
                          
// // //                           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
// // //                             {speaker.courses.map((course, index) => (
// // //                               <Chip 
// // //                                 key={index}
// // //                                 label={course.nameOfCourse || 'קורס ללא שם'}
// // //                                 size="small"
// // //                                 color="primary"
// // //                                 variant="outlined"
// // //                               />
// // //                             ))}
// // //                           </Box>
                          
// // //                           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
// // //                             <Button 
// // //                               variant="outlined" 
// // //                               size="small"
// // //                               onClick={() => handleViewDetails(speaker)}
// // //                             >
// // //                               פרטים נוספים
// // //                             </Button>
// // //                           </Box>
// // //                         </CardContent>
// // //                       </Card>
// // //                     </Grid>
// // //                   ))}
// // //               </Grid>
              
// // //               {speakers.filter(speaker => speaker.courses && speaker.courses.length > 0).length === 0 && (
// // //                 <Paper sx={{ p: 4, textAlign: 'center' }}>
// // //                   <Typography variant="h6" color="text.secondary">
// // //                     אין מרצים עם קורסים פעילים
// // //                   </Typography>
// // //                 </Paper>
// // //               )}
// // //             </Box>
// // //           )}
          
// // //           {tabValue === 2 && (
// // //             <FilterContainer>
// // //               <Typography variant="h6" gutterBottom sx={{ width: '100%' }}>
// // //                 סינון מתקדם
// // //               </Typography>
              
// // //               <Grid container spacing={3}>
// // //                 <Grid item xs={12} md={6}>
// // //                   <FormControl fullWidth variant="outlined">
// // //                     <InputLabel>חיפוש לפי שדה</InputLabel>
// // //                     <Select
// // //                       label="חיפוש לפי שדה"
// // //                       value={sortConfig.key}
// // //                       onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
// // //                     >
// // //                       <MenuItem value="nameOfSpeaker">שם</MenuItem>
// // //                       <MenuItem value="phoneOfSpeaker">טלפון</MenuItem>
// // //                       <MenuItem value="emailOfSpeaker">אימייל</MenuItem>
// // //                     </Select>
// // //                   </FormControl>
// // //                 </Grid>
                
// // //                 <Grid item xs={12} md={6}>
// // //                   <FormControl fullWidth variant="outlined">
// // //                     <InputLabel>סדר מיון</InputLabel>
// // //                     <Select
// // //                       label="סדר מיון"
// // //                       value={sortConfig.direction}
// // //                       onChange={(e) => setSortConfig({ ...sortConfig, direction: e.target.value })}
// // //                     >
// // //                       <MenuItem value="ascending">עולה (א-ת)</MenuItem>
// // //                       <MenuItem value="descending">יורד (ת-א)</MenuItem>
// // //                     </Select>
// // //                   </FormControl>
// // //                 </Grid>
                
// // //                 <Grid item xs={12}>
// // //                   <TextField
// // //                     fullWidth
// // //                     label="חיפוש חופשי"
// // //                     variant="outlined"
// // //                     value={searchTerm}
// // //                     onChange={(e) => setSearchTerm(e.target.value)}
// // //                     InputProps={{
// // //                       startAdornment: (
// // //                         <InputAdornment position="start">
// // //                           <SearchIcon />
// // //                         </InputAdornment>
// // //                       ),
// // //                     }}
// // //                   />
// // //                 </Grid>
                
// // //                 <Grid item xs={12}>
// // //                   <Typography variant="subtitle2" gutterBottom>
// // //                     סינון לפי קטגוריה:
// // //                   </Typography>
// // //                   <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
// // //                     <StyledChip 
// // //                       label="הכל" 
// // //                       clickable
// // //                       active={filterCategory === 'all'}
// // //                       onClick={() => setFilterCategory('all')}
// // //                     />
// // //                     <StyledChip 
// // //                       label="עם קורסים" 
// // //                       clickable
// // //                       active={filterCategory === 'withCourses'}
// // //                       onClick={() => setFilterCategory('withCourses')}
// // //                     />
// // //                     <StyledChip 
// // //                       label="ללא קורסים" 
// // //                       clickable
// // //                       active={filterCategory === 'noCourses'}
// // //                       onClick={() => setFilterCategory('noCourses')}
// // //                     />
// // //                   </Box>
// // //                 </Grid>
// // //               </Grid>
// // //             </FilterContainer>
// // //           )}
// // //         </Box>
        
// // //         {/* Original Table (can be kept or removed) */}
// // //         <Box sx={{ display: 'none' }}>
// // //           <SpeakersTable />
// // //         </Box>
// // //       </StyledPaper>
      
// // //       {/* Add Speaker Dialog */}
// // //       <StyledDialog
// // //         open={open}
// // //         onClose={() => setOpen(false)}
// // //         maxWidth="md"
// // //         fullWidth
// // //         TransitionComponent={Zoom}
// // //       >
// // //         <DialogHeader>
// // //           <PersonAddIcon sx={{ mr: 1 }} />
// // //           הוספת מרצה
// // //         </DialogHeader>
// // //         <IconButton
// // //           aria-label="close"
// // //           onClick={() => setOpen(false)}
// // //           sx={{
// // //             position: 'absolute',
// // //             right: 8,
// // //             top: 8,
// // //             color: 'white',
// // //           }}
// // //         >
// // //           <CloseIcon />
// // //         </IconButton>
// // //         <DialogContent dividers>
// // //           <AddSpeaker />
// // //         </DialogContent>
// // //       </StyledDialog>
      
// // //       {/* Delete Speaker Dialog */}
// // //       <StyledDialog
// // //         open={openDelete}
// // //         onClose={() => setOpenDelete(false)}
// // //         maxWidth="sm"
// // //         fullWidth
// // //         TransitionComponent={Zoom}
// // //         >
// // //           <DialogHeader>
// // //             <DeleteForever sx={{ mr: 1 }} />
// // //             מחיקת מרצה
// // //           </DialogHeader>
// // //           <IconButton
// // //             aria-label="close"
// // //             onClick={() => setOpenDelete(false)}
// // //             sx={{
// // //               position: 'absolute',
// // //               right: 8,
// // //               top: 8,
// // //               color: 'white',
// // //             }}
// // //           >
// // //             <CloseIcon />
// // //           </IconButton>
// // //           <DialogContent dividers>
// // //             <Typography variant="body1" gutterBottom color="error">
// // //               שים לב! פעולה זו אינה ניתנת לביטול. המרצה וכל המידע הקשור אליו יימחקו לצמיתות.
// // //             </Typography>
            
// // //             <Box sx={{ my: 3 }}>
// // //               <FormControl fullWidth variant="outlined">
// // //                 <InputLabel id="delete-speaker-label">בחר מרצה למחיקה</InputLabel>
// // //                 <Select
// // //                   labelId="delete-speaker-label"
// // //                   value={deleteSpeakerName}
// // //                   onChange={(e) => setDeleteSpeakerName(e.target.value)}
// // //                   label="בחר מרצה למחיקה"
// // //                 >
// // //                   {speakers.map(speaker => (
// // //                     <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
// // //                       {speaker.nameOfSpeaker}
// // //                     </MenuItem>
// // //                   ))}
// // //                 </Select>
// // //               </FormControl>
// // //             </Box>
            
// // //             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
// // //               <Button 
// // //                 variant="outlined" 
// // //                 onClick={() => setOpenDelete(false)}
// // //               >
// // //                 ביטול
// // //               </Button>
// // //               <Button 
// // //                 variant="contained" 
// // //                 color="error"
// // //                 onClick={handleDeleteSpeaker}
// // //                 disabled={!deleteSpeakerName || loading}
// // //                 startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <DeleteForever />}
// // //               >
// // //                 {loading ? 'מוחק...' : 'מחיקה'}
// // //               </Button>
// // //             </Box>
// // //           </DialogContent>
// // //         </StyledDialog>
        
// // //         {/* Speaker Details Dialog */}
// // //         <StyledDialog
// // //           open={openDetails}
// // //           onClose={() => setOpenDetails(false)}
// // //           maxWidth="md"
// // //           fullWidth
// // //           TransitionComponent={Zoom}
// // //         >
// // //           {selectedSpeaker && (
// // //             <>
// // //               <DialogHeader>
// // //                 <SchoolIcon sx={{ mr: 1 }} />
// // //                 פרטי מרצה: {selectedSpeaker.nameOfSpeaker}
// // //               </DialogHeader>
// // //               <IconButton
// // //                 aria-label="close"
// // //                 onClick={() => setOpenDetails(false)}
// // //                 sx={{
// // //                   position: 'absolute',
// // //                   right: 8,
// // //                   top: 8,
// // //                   color: 'white',
// // //                 }}
// // //               >
// // //                 <CloseIcon />
// // //               </IconButton>
// // //               <DialogContent dividers>
// // //                 <Grid container spacing={3}>
// // //                   <Grid item xs={12} md={4}>
// // //                     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
// // //                       <SpeakerAvatar 
// // //                         sx={{ 
// // //                           width: 120, 
// // //                           height: 120, 
// // //                           fontSize: 48,
// // //                           bgcolor: getAvatarColor(selectedSpeaker.nameOfSpeaker)
// // //                         }}
// // //                       >
// // //                         {getInitials(selectedSpeaker.nameOfSpeaker)}
// // //                       </SpeakerAvatar>
                      
// // //                       <Typography variant="h5" fontWeight="bold" textAlign="center">
// // //                         {selectedSpeaker.nameOfSpeaker}
// // //                       </Typography>
                      
// // //                       <Chip 
// // //                         label={selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? 'מרצה פעיל' : 'מרצה לא פעיל'} 
// // //                         color={selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? 'success' : 'default'}
// // //                         variant="outlined"
// // //                       />
// // //                     </Box>
// // //                   </Grid>
                  
// // //                   <Grid item xs={12} md={8}>
// // //                     <Typography variant="h6" gutterBottom>
// // //                       פרטי קשר
// // //                     </Typography>
                    
// // //                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
// // //                       {selectedSpeaker.phoneOfSpeaker && (
// // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // //                           <PhoneIcon color="primary" />
// // //                           <Box>
// // //                             <Typography variant="body2" color="text.secondary">
// // //                               טלפון
// // //                             </Typography>
// // //                             <Typography variant="body1">
// // //                               {selectedSpeaker.phoneOfSpeaker}
// // //                             </Typography>
// // //                           </Box>
// // //                         </Box>
// // //                       )}
                      
// // //                       {selectedSpeaker.emailOfSpeaker && (
// // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // //                           <EmailIcon color="primary" />
// // //                           <Box>
// // //                             <Typography variant="body2" color="text.secondary">
// // //                               אימייל
// // //                             </Typography>
// // //                             <Typography variant="body1">
// // //                               {selectedSpeaker.emailOfSpeaker}
// // //                             </Typography>
// // //                           </Box>
// // //                         </Box>
// // //                       )}
                      
// // //                       {selectedSpeaker.addressOfSpeaker && (
// // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // //                           <LocationIcon color="primary" />
// // //                           <Box>
// // //                             <Typography variant="body2" color="text.secondary">
// // //                               כתובת
// // //                             </Typography>
// // //                             <Typography variant="body1">
// // //                               {selectedSpeaker.addressOfSpeaker}
// // //                             </Typography>
// // //                           </Box>
// // //                         </Box>
// // //                       )}
// // //                     </Box>
                    
// // //                     <Divider sx={{ my: 2 }} />
                    
// // //                     <Typography variant="h6" gutterBottom>
// // //                       קורסים
// // //                     </Typography>
                    
// // //                     {selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? (
// // //                       <Box sx={{ mt: 2 }}>
// // //                         <Grid container spacing={2}>
// // //                           {selectedSpeaker.courses.map((course, index) => (
// // //                             <Grid item xs={12} sm={6} key={index}>
// // //                               <Card variant="outlined" sx={{ height: '100%' }}>
// // //                                 <CardContent>
// // //                                   <Typography variant="subtitle1" fontWeight="bold">
// // //                                     {course.nameOfCourse || 'קורס ללא שם'}
// // //                                   </Typography>
                                  
// // //                                   {course.startDateOfCourse && (
// // //                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
// // //                                       <EventIcon fontSize="small" color="action" />
// // //                                       <Typography variant="body2">
// // //                                         תאריך התחלה: {new Date(course.startDateOfCourse).toLocaleDateString('he-IL')}
// // //                                       </Typography>
// // //                                     </Box>
// // //                                   )}
                                  
// // //                                   {course.amountOfStudentsInCourse && (
// // //                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
// // //                                       <SchoolIcon fontSize="small" color="action" />
// // //                                       <Typography variant="body2">
// // //                                         מספר תלמידים: {course.amountOfStudentsInCourse}
// // //                                       </Typography>
// // //                                     </Box>
// // //                                   )}
// // //                                 </CardContent>
// // //                               </Card>
// // //                             </Grid>
// // //                           ))}
// // //                         </Grid>
// // //                       </Box>
// // //                     ) : (
// // //                       <Typography variant="body1" color="text.secondary">
// // //                         אין קורסים פעילים למרצה זה
// // //                       </Typography>
// // //                     )}
// // //                   </Grid>
// // //                 </Grid>
// // //               </DialogContent>
// // //             </>
// // //           )}
// // //         </StyledDialog>
        
// // //         {/* Snackbar for notifications */}
// // //         <Snackbar
// // //           open={snackbar.open}
// // //           autoHideDuration={6000}
// // //           onClose={handleCloseSnackbar}
// // //           anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
// // //         >
// // //           <Alert 
// // //             onClose={handleCloseSnackbar} 
// // //             severity={snackbar.severity} 
// // //             variant="filled"
// // //             sx={{ width: '100%' }}
// // //           >
// // //             {snackbar.message}
// // //           </Alert>
// // //         </Snackbar>
// // //       </Box>
// // //     );
// // //   };
  
// // // import { useEffect } from 'react';
// // // import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
// // // import AddIcon from '@mui/icons-material/Add';
// // // import Button from '@mui/material/Button';
// // // import { styled } from '@mui/material/styles';
// // // import Dialog from '@mui/material/Dialog';
// // // import DialogTitle from '@mui/material/DialogTitle';
// // // import DialogContent from '@mui/material/DialogContent';
// // // import IconButton from '@mui/material/IconButton';
// // // import CloseIcon from '@mui/icons-material/Close';
// // // import { Routing } from '../Routing/Routing'
// // // import * as React from 'react';
// // // import './Speaker.css'
// // // import { DeleteForever } from '@mui/icons-material';
// // // import { Box, Chip, FormControl, Input, InputBase, InputLabel, MenuItem, Select, TableCell, TableRow, TextField, Typography } from '@mui/material';
// // // import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
// // // import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
// // // import { InputOutlined } from '@mui/icons-material';
// // // import { InputRounded } from '@mui/icons-material';
// // // import SpeakersTable from './speakersTable';
// // // import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
// // // import { SchoolOutlined } from '@mui/icons-material';

// // // export const Speaker = () => {
// // //   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// // //     '& .MuiDialogContent-root': {
// // //       padding: theme.spacing(3),
// // //     },
// // //     '& .MuiDialogActions-root': {
// // //       padding: theme.spacing(3),
// // //     },
// // //   }));
// // //   const dispatch = useDispatch()
// // //   const speakers = useSelector(state => state.speakers.speakers);
// // //   const speaker = useSelector(state => state.speakers.selectSpeaker);
// // //   const flagClose = useSelector(state => state.speakers.flagClose);
// // //   const [flagClose2, setFlagClose2] = React.useState(flagClose)
// // //   const [id, setId] = React.useState(false);
// // //   const [open, setOpen] = React.useState(false);
// // //   const [open2, setOpen2] = React.useState(false);
// // //   const [flag, setFlag] = React.useState(false);
// // //   const [flag2, setFlag2] = React.useState(false);
// // //   const [flag4, setFlag4] = React.useState(false);
// // //   const [f, setF] = React.useState(-1);
// // //   const [flagDeletedSpeaker, setFlagDeletedSpeaker] = React.useState(false);
// // //   const [deletedSpeaker, setDeletedSpeaker] = React.useState("");
// // //   const [checkedSpeaker, setCheckedSpeaker] = React.useState();
// // //   useEffect(() => {
// // //     doIt()
// // //   }, [])
// // //   async function doIt() {
// // //     dispatch(getSpeakersThunk())
// // //   }

// // //   const handleClickOpen = () => {
// // //     setOpen(true);
// // //     dispatch(setFlagSpeakerSlice(false))
// // //   };
// // //   const handleClose = () => {
// // //     setOpen(false);
// // //   };
// // //   const handleClickOpen2 = () => {
// // //     setOpen2(true);
// // //   };
// // //   const handleClose2 = () => {
// // //     setOpen2(false);
// // //     setFlagClose2(false)
// // //   };
// // //   async function openDivDetailes(index) {
// // //     setFlag(true)
// // //     setF(index)
// // //   }
// // //   const Close = () => {
// // //     setFlag(false);
// // //   };
// // //   const Close2 = () => {
// // //     setFlag2(false);
// // //   };
// // //   // const checkingDeletedSpeaker = () => {
// // //   //   debugger
// // //   //   if (deletedSpeaker != null)
// // //   //     setFlagDeletedSpeaker(true)
// // //   // };
// // //   const deleteSpeaker = async () => {
// // //     // if (deletedSpeaker == checkedSpeaker) {
// // //     const tempSpeaker = await dispatch(getBySpeakerNameThunk(deletedSpeaker))
// // //     console.log(deletedSpeaker);
// // //     setId(tempSpeaker.payload.idOfSpeaker)
// // //     //let red = dispatch(getBySpeakerNameThunk(deletedSpeaker))
// // //     //console.log(id+"vvvvvvvvvvvvvvvvvvvv");
// // //     debugger
// // //     dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker))
// // //     console.log("tempSpeaker.payload.idOfSpeaker"+tempSpeaker.payload.idOfSpeaker);
// // //     setFlag4(true)
// // //     //}
// // //   };
// // //   const whatsGoing = (name2) => {
// // //     console.log(name2 + "name2");
// // //     setDeletedSpeaker(name2)
// // //   };

// // //   return <div>

// // //     <SpeakersTable></SpeakersTable>
// // //     <React.Fragment>
// // //       <Button variant="outlined" onClick={handleClickOpen}
// // //         align='center'>
// // //         הוספת מרצה
// // //         <AddIcon ></AddIcon>
// // //       </Button>
// // //       {!flagClose && <BootstrapDialog
// // //         onClose={handleClose}
// // //         aria-labelledby="customized-dialog-title"
// // //         open={open}
// // //       >
// // //         <DialogTitle
// // //           id="customized-dialog-title">
// // //           הוספת מרצה
// // //         </DialogTitle>
// // //         <IconButton
// // //           aria-label="close"
// // //           onClick={handleClose}
// // //           sx={(theme) => ({
// // //             position: 'absolute',
// // //             right: 8,
// // //             top: 8,
// // //             color: theme.palette.grey[60],
// // //           })}
// // //         >
// // //           <CloseIcon />
// // //         </IconButton>
// // //         <DialogContent dividers>
// // //           <AddSpeaker />
// // //         </DialogContent >
// // //       </BootstrapDialog>}
// // //     </React.Fragment>

// // //     <>{flag && <React.Fragment>
// // //       <BootstrapDialog
// // //         open={flag}
// // //         aria-labelledby="customized-dialog-title">
// // //         <DialogTitle
// // //           id="customized-dialog-title">
// // //           {speakers[f].courses.map(v => v.nameOfCourse)}
// // //         </DialogTitle>
// // //         <IconButton
// // //           aria-label="close"
// // //           onClick={Close}
// // //           sx={(theme) => ({
// // //             position: 'absolute',
// // //             right: 8,
// // //             top: 8,
// // //             color: theme.palette.grey[60],
// // //           })}
// // //         >
// // //           <CloseIcon />
// // //         </IconButton>
// // //         <DialogContent dividers>
// // //           <td>{speakers[f].courses.map(v => v.map(x =>
// // //             <><td>{x.nameOfCourse}</td>
// // //               <td>{x.amountOfStudentsInCourse}</td>
// // //               <td>{x.startDateOfCourse}</td></>
// // //           ))}</td>
// // //         </DialogContent >
// // //       </BootstrapDialog>
// // //     </React.Fragment>
// // //     }
// // //     </>


// // //     {/* [===delete====] */}
// // //     <React.Fragment>
// // //       <Button variant="outlined" onClick={handleClickOpen2}
// // //         align='center'
// // //       >
// // //         מחיקת מרצה
// // //         <DeleteForever />
// // //       </Button>
// // //       <BootstrapDialog
// // //         onClose={handleClose2}
// // //         aria-labelledby="customized-dialog-title"
// // //         open={open2}
// // //       >
// // //         <DialogTitle
// // //           id="customized-dialog-title">
// // //           מחיקת מרצה
// // //         </DialogTitle>
// // //         <IconButton
// // //           aria-label="close"
// // //           onClick={handleClose2}
// // //           sx={(theme) => ({
// // //             position: 'absolute',
// // //             right: 8,
// // //             top: 8,
// // //             color: theme.palette.grey[30],
// // //           })}
// // //         >
// // //           <CloseIcon />
// // //         </IconButton>
// // //         <DialogContent dividers>

          
// // //         <Box className="select" sx={{ minWidth: 120 }}>
// // //       <FormControl fullWidth>
// // //         <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// // //         <Select
// // //          onChange={(e) => whatsGoing(e.target.value)}
// // //           labelId="demo-simple-select-label"
// // //           id="demo-simple-select"
// // //           label="מרצה "
// // //           className="tool"
// // //           defaultValue={""}
// // //         >
// // //           {speakers.map(speaker => {
// // //             return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
// // //               {speaker.nameOfSpeaker} </MenuItem>
// // //           })}
// // //         </Select>
// // //       </FormControl>
// // //     </Box>
// // //           {/* <Box className="select" sx={{ minWidth: 120 }}>
// // //             <FormControl fullWidth>
// // //               <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// // //               <Select
               
// // //                 labelId="demo-simple-select-label"
// // //                 id="demo-simple-select"
// // //                 // defaultValue={""}
// // //                 label="מרצה "
// // //                 className="tool"

// // //               >
// // //                 {speakers.map(speaker => {
// // //                   return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}

// // //                   >{speaker.nameOfSpeaker}</MenuItem>

// // //                 })
// // //                 }

// // //               </Select>
// // //             </FormControl>
// // //           </Box> */}
// // //           <br />
// // //           {/* <>{flagDeletedSpeaker && <><div>
// // //             <input id="outlined-basic" placeholder=' הקלידי את שם המרצה' 
// // //               className="input" onChange={(x) => setCheckedSpeaker(x.target.value)}
// // //             />
// // //           </div><Button
// // //             onClick={() =>deleteSpeaker ()}
// // //           >o.k</Button></>}</> */}

// // //           {/* {!flagDeletedSpeaker && <Button
// // //             onClick={() =>checkingDeletedSpeaker ()}
// // //           >o.kk</Button>} */}
// // //           <Button
// // //             onClick={() => deleteSpeaker()}
// // //           >o.k</Button>
// // //         </DialogContent >
// // //       </BootstrapDialog>
// // //     </React.Fragment>

// // //     <>{flag2 && <React.Fragment>
// // //       <BootstrapDialog
// // //         open={flag2}
// // //         aria-labelledby="customized-dialog-title">
// // //         <DialogTitle
// // //           id="customized-dialog-title">
// // //           {/* {speakers[f].courses.map(v => v.nameOfCourse)} */}
// // //         </DialogTitle>
// // //         <IconButton
// // //           aria-label="close"
// // //           onClick={Close2}
// // //           sx={(theme) => ({
// // //             position: 'absolute',
// // //             right: 8,
// // //             top: 8,
// // //             color: theme.palette.grey[30],
// // //           })}
// // //         >
// // //           <CloseIcon />
// // //         </IconButton>
// // //         <DialogContent dividers>


// // //           {/* <td>{speakers[f].courses.map(v => v.map(x =>
// // //             <><td>{x.nameOfCourse}</td>
// // //               <td>{x.amountOfStudentsInCourse}</td>
// // //               <td>{x.startDateOfCourse}</td></>
// // //           ))}</td> */}
// // //         </DialogContent >
// // //       </BootstrapDialog>
// // //     </React.Fragment>
// // //     }
// // //     </>
// // //   </div>
// // // }
// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from "react-redux";
// // import { styled, alpha } from '@mui/material/styles';
// // import { 
// //   Box, Button, Dialog, DialogTitle, DialogContent, IconButton, 
// //   Typography, Paper, Divider, Grid, Avatar, Chip, TextField, 
// //   InputAdornment, FormControl, InputLabel, Select, MenuItem,
// //   Tooltip, Zoom, Fade, Backdrop, Card, CardContent, Tabs, Tab,
// //   Badge, Snackbar, Alert, CircularProgress, useTheme, useMediaQuery
// // } from '@mui/material';
// // import { 
// //   Add as AddIcon, 
// //   DeleteForever, 
// //   Close as CloseIcon, 
// //   Search as SearchIcon,
// //   FilterList as FilterListIcon,
// //   PersonAdd as PersonAddIcon,
// //   School as SchoolIcon,
// //   Event as EventIcon,
// //   LocationOn as LocationIcon,
// //   Phone as PhoneIcon,
// //   Email as EmailIcon,
// //   CheckCircle as CheckCircleIcon,
// //   Sort as SortIcon,
// //   Refresh as RefreshIcon,
// //   MoreVert as MoreVertIcon,
// //   ArrowUpward as ArrowUpwardIcon,
// //   ArrowDownward as ArrowDownwardIcon
// // } from '@mui/icons-material';

// // import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
// // import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
// // import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
// // import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
// // import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
// // import SpeakersTable from './speakersTable';
// // import './Speaker.css';

// // // Styled Components
// // const StyledPaper = styled(Paper)(({ theme }) => ({
// //   padding: theme.spacing(3),
// //   borderRadius: 16,
// //   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
// //   background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
// //   position: 'relative',
// //   overflow: 'hidden',
// //   '&::before': {
// //     content: '""',
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     width: '100%',
// //     height: '5px',
// //     background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
// //   }
// // }));

// // const PageHeader = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   justifyContent: 'space-between',
// //   alignItems: 'center',
// //   marginBottom: theme.spacing(4),
// //   [theme.breakpoints.down('sm')]: {
// //     flexDirection: 'column',
// //     alignItems: 'flex-start',
// //     gap: theme.spacing(2),
// //   }
// // }));

// // const SearchBar = styled(TextField)(({ theme }) => ({
// //   width: '100%',
// //   maxWidth: 400,
// //   '& .MuiOutlinedInput-root': {
// //     borderRadius: 30,
// //     backgroundColor: alpha(theme.palette.common.white, 0.9),
// //     transition: theme.transitions.create(['box-shadow']),
// //     '&:hover': {
// //       boxShadow: '0 0 0 2px rgba(63, 81, 181, 0.2)',
// //     },
// //     '&.Mui-focused': {
// //       boxShadow: '0 0 0 3px rgba(63, 81, 181, 0.3)',
// //     }
// //   }
// // }));

// // const ActionButton = styled(Button)(({ theme }) => ({
// //   borderRadius: 30,
// //   padding: '8px 24px',
// //   fontWeight: 600,
// //   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
// //   transition: 'all 0.3s ease',
// //   '&:hover': {
// //     transform: 'translateY(-2px)',
// //     boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
// //   }
// // }));

// // const FilterContainer = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   gap: theme.spacing(2),
// //   flexWrap: 'wrap',
// //   marginBottom: theme.spacing(3),
// //   padding: theme.spacing(2),
// //   backgroundColor: alpha(theme.palette.background.paper, 0.7),
// //   borderRadius: 8,
// //   [theme.breakpoints.down('sm')]: {
// //     flexDirection: 'column',
// //   }
// // }));

// // const StyledDialog = styled(Dialog)(({ theme }) => ({
// //   '& .MuiDialog-paper': {
// //     borderRadius: 16,
// //     boxShadow: '0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)',
// //     overflow: 'visible',
// //   }
// // }));

// // const DialogHeader = styled(DialogTitle)(({ theme }) => ({
// //   background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
// //   color: theme.palette.common.white,
// //   padding: theme.spacing(2, 3),
// //   display: 'flex',
// //   alignItems: 'center',
// //   gap: theme.spacing(1),
// // }));

// // const SpeakerAvatar = styled(Avatar)(({ theme }) => ({
// //   width: 60,
// //   height: 60,
// //   backgroundColor: theme.palette.primary.main,
// //   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
// //   fontSize: 24,
// // }));

// // const SortButton = styled(Button)(({ theme }) => ({
// //   textTransform: 'none',
// //   borderRadius: 20,
// //   padding: '4px 12px',
// //   fontSize: '0.875rem',
// // }));

// // const StyledChip = styled(Chip)(({ theme, active }) => ({
// //   borderRadius: 16,
// //   fontWeight: 500,
// //   transition: 'all 0.2s ease',
// //   ...(active && {
// //     backgroundColor: theme.palette.primary.main,
// //     color: theme.palette.common.white,
// //     boxShadow: '0 2px 8px rgba(63, 81, 181, 0.4)',
// //   })
// // }));

// // const StyledBadge = styled(Badge)(({ theme }) => ({
// //   '& .MuiBadge-badge': {
// //     backgroundColor: '#44b700',
// //     color: '#44b700',
// //     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
// //     '&::after': {
// //       position: 'absolute',
// //       top: 0,
// //       left: 0,
// //       width: '100%',
// //       height: '100%',
// //       borderRadius: '50%',
// //       animation: 'ripple 1.2s infinite ease-in-out',
// //       border: '1px solid currentColor',
// //       content: '""',
// //     },
// //   },
// //   '@keyframes ripple': {
// //     '0%': {
// //       transform: 'scale(.8)',
// //       opacity: 1,
// //     },
// //     '100%': {
// //       transform: 'scale(2.4)',
// //       opacity: 0,
// //     },
// //   },
// // }));

// // export const Speaker = () => {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// //   const dispatch = useDispatch();
// //   const speakers = useSelector(state => state.speakers.speakers);
// //   const flagClose = useSelector(state => state.speakers.flagClose);
  
// //   // State
// //   const [open, setOpen] = useState(false);
// //   const [openDelete, setOpenDelete] = useState(false);
// //   const [openDetails, setOpenDetails] = useState(false);
// //   const [selectedSpeaker, setSelectedSpeaker] = useState(null);
// //   const [deleteSpeakerName, setDeleteSpeakerName] = useState("");
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [filteredSpeakers, setFilteredSpeakers] = useState([]);
// //   const [sortConfig, setSortConfig] = useState({ key: 'nameOfSpeaker', direction: 'ascending' });
// //   const [filterCategory, setFilterCategory] = useState('all');
// //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
// //   const [loading, setLoading] = useState(false);
// //   const [tabValue, setTabValue] = useState(0);

// //   // Load speakers on component mount
// //   useEffect(() => {
// //     loadSpeakers();
// //   }, []);

// //   // Filter speakers when search term or speakers list changes
// //   useEffect(() => {
// //     filterSpeakers();
// //   }, [searchTerm, speakers, sortConfig, filterCategory]);

// //   const loadSpeakers = async () => {
// //     setLoading(true);
// //     await dispatch(getSpeakersThunk());
// //     setLoading(false);
// //   };

// //   const filterSpeakers = () => {
// //     let filtered = [...speakers];
    
// //     // Apply search filter
// //     if (searchTerm) {
// //       filtered = filtered.filter(speaker => 
// //         speaker.nameOfSpeaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         speaker.phoneOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         speaker.emailOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase())
// //       );
// //     }
    
// //     // Apply category filter
// //     if (filterCategory !== 'all') {
// //       filtered = filtered.filter(speaker => {
// //         if (filterCategory === 'withCourses') {
// //           return speaker.courses && speaker.courses.length > 0;
// //         } else if (filterCategory === 'noCourses') {
// //           return !speaker.courses || speaker.courses.length === 0;
// //         }
// //         return true;
// //       });
// //     }
    
// //     // Apply sorting
// //     if (sortConfig.key) {
// //       filtered.sort((a, b) => {
// //         if (a[sortConfig.key] < b[sortConfig.key]) {
// //           return sortConfig.direction === 'ascending' ? -1 : 1;
// //         }
// //         if (a[sortConfig.key] > b[sortConfig.key]) {
// //           return sortConfig.direction === 'ascending' ? 1 : -1;
// //         }
// //         return 0;
// //       });
// //     }
    
// //     setFilteredSpeakers(filtered);
// //   };

// //   const handleSort = (key) => {
// //     let direction = 'ascending';
// //     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
// //       direction = 'descending';
// //     }
// //     setSortConfig({ key, direction });
// //   };

// //   const handleAddSpeaker = () => {
// //     setOpen(true);
// //     dispatch(setFlagSpeakerSlice(false));
// //   };

// //   const handleDeleteDialogOpen = () => {
// //     setOpenDelete(true);
// //   };

// //   const handleDeleteSpeaker = async () => {
// //     if (!deleteSpeakerName) {
// //       setSnackbar({
// //         open: true,
// //         message: 'יש לבחור מרצה למחיקה',
// //         severity: 'error'
// //       });
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const tempSpeaker = await dispatch(getBySpeakerNameThunk(deleteSpeakerName));
// //       if (tempSpeaker.payload) {
// //         await dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker));
// //         setSnackbar({
// //           open: true,
// //           message: `המרצה ${deleteSpeakerName} נמחק בהצלחה`,
// //           severity: 'success'
// //         });
// //         setOpenDelete(false);
// //         setDeleteSpeakerName("");
// //       }
// //     } catch (error) {
// //       setSnackbar({
// //         open: true,
// //         message: 'שגיאה במחיקת המרצה',
// //         severity: 'error'
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleViewDetails = (speaker) => {
// //     setSelectedSpeaker(speaker);
// //     setOpenDetails(true);
// //   };

// //   const handleTabChange = (event, newValue) => {
// //     setTabValue(newValue);
// //   };

// //   const handleCloseSnackbar = () => {
// //     setSnackbar({ ...snackbar, open: false });
// //   };

// //   // Generate random color for avatar based on name
// //   const getAvatarColor = (name) => {
// //     const colors = [
// //       '#3f51b5', '#f44336', '#009688', '#ff9800', '#9c27b0', 
// //       '#2196f3', '#4caf50', '#ffeb3b', '#795548', '#607d8b'
// //     ];
// //     const index = name.charCodeAt(0) % colors.length;
// //     return colors[index];
// //   };

// //   // Get speaker initials for avatar
// //   const getInitials = (name) => {
// //     return name
// //       .split(' ')
// //       .map(part => part[0])
// //       .join('')
// //       .toUpperCase();
// //   };

// //   return (
// //     <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
// //       <StyledPaper elevation={3}>
// //         <PageHeader>
// //           <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
// //             ניהול מרצים
// //           </Typography>
          
// //           <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// //             <ActionButton
// //               variant="contained"
// //               color="primary"
// //               startIcon={<PersonAddIcon />}
// //               onClick={handleAddSpeaker}
// //             >
// //               הוספת מרצה
// //             </ActionButton>
            
// //             <ActionButton
// //               variant="outlined"
// //               color="error"
// //               startIcon={<DeleteForever />}
// //               onClick={handleDeleteDialogOpen}
// //             >
// //               מחיקת מרצה
// //             </ActionButton>
            
// //             <Tooltip title="רענון רשימה">
// //               <IconButton 
// //                 color="primary" 
// //                 onClick={loadSpeakers}
// //                 sx={{ 
// //                   backgroundColor: alpha(theme.palette.primary.main, 0.1),
// //                   '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.2) }
// //                 }}
// //               >
// //                 <RefreshIcon />
// //               </IconButton>
// //             </Tooltip>
// //           </Box>
// //         </PageHeader>

// //         <Divider sx={{ mb: 3 }} />
        
// //         <Box sx={{ mb: 4 }}>
// //           <Tabs 
// //             value={tabValue} 
// //             onChange={handleTabChange}
// //             variant="fullWidth"
// //             indicatorColor="primary"
// //             textColor="primary"
// //             sx={{ mb: 3 }}
// //           >
// //             <Tab icon={<SchoolIcon />} label="כל המרצים" />
// //             <Tab icon={<EventIcon />} label="מרצים פעילים" />
// //             <Tab icon={<FilterListIcon />} label="סינון מתקדם" />
// //           </Tabs>

// //           {tabValue === 0 && (
// //             <Box>
// //               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
// //                 <SearchBar
// //                   placeholder="חיפוש לפי שם, טלפון או אימייל..."
// //                   variant="outlined"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                   InputProps={{
// //                     startAdornment: (
// //                       <InputAdornment position="start">
// //                         <SearchIcon color="action" />
// //                       </InputAdornment>
// //                     ),
// //                     endAdornment: searchTerm && (
// //                       <InputAdornment position="end">
// //                         <IconButton size="small" onClick={() => setSearchTerm('')}>
// //                           <CloseIcon fontSize="small" />
// //                         </IconButton>
// //                       </InputAdornment>
// //                     )
// //                   }}
// //                 />
                
// //                 <Box sx={{ display: 'flex', gap: 1 }}>
// //                   <SortButton 
// //                     variant={sortConfig.key === 'nameOfSpeaker' ? 'contained' : 'outlined'}
// //                     size="small"
// //                     onClick={() => handleSort('nameOfSpeaker')}
// //                     endIcon={sortConfig.key === 'nameOfSpeaker' ? 
// //                       (sortConfig.direction === 'ascending' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />) : 
// //                       <SortIcon />}
// //                   >
// //                     מיון לפי שם
// //                   </SortButton>
// //                 </Box>
// //               </Box>
              
// //               <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
// //                 <Typography variant="body2" sx={{ mr: 1, alignSelf: 'center' }}>
// //                   סינון מהיר:
// //                 </Typography>
// //                 <StyledChip 
// //                   label="הכל" 
// //                   clickable
// //                   active={filterCategory === 'all'}
// //                   onClick={() => setFilterCategory('all')}
// //                 />
// //                 <StyledChip 
// //                   label="עם קורסים" 
// //                   clickable
// //                   active={filterCategory === 'withCourses'}
// //                   onClick={() => setFilterCategory('withCourses')}
// //                 />
// //                 <StyledChip 
// //                   label="ללא קורסים" 
// //                   clickable
// //                   active={filterCategory === 'noCourses'}
// //                   onClick={() => setFilterCategory('noCourses')}
// //                 />
// //               </Box>
              
// //               {loading ? (
// //                 <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
// //                   <CircularProgress />
// //                 </Box>
// //               ) : filteredSpeakers.length > 0 ? (
// //                 <Grid container spacing={3}>
// //                   {filteredSpeakers.map((speaker) => (
// //                     <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
// //                       <Card 
// //                         sx={{ 
// //                           height: '100%', 
// //                           display: 'flex', 
// //                           flexDirection: 'column',
// //                           transition: 'all 0.3s ease',
// //                           '&:hover': {
// //                             transform: 'translateY(-4px)',
// //                             boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
// //                           }
// //                         }}
// //                       >
// //                         <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
// //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                             {speaker.courses && speaker.courses.length > 0 ? (
// //                               <StyledBadge
// //                                 overlap="circular"
// //                                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// //                                 variant="dot"
// //                               >
// //                                 <SpeakerAvatar 
// //                                   sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// //                                 >
// //                                   {getInitials(speaker.nameOfSpeaker)}
// //                                 </SpeakerAvatar>
// //                               </StyledBadge>
// //                             ) : (
// //                               <SpeakerAvatar 
// //                                 sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// //                               >
// //                                 {getInitials(speaker.nameOfSpeaker)}
// //                               </SpeakerAvatar>
// //                             )}
                            
// //                             <Box>
// //                               <Typography variant="h6" component="h2" fontWeight="bold">
// //                                 {speaker.nameOfSpeaker}
// //                               </Typography>
// //                               <Typography variant="body2" color="text.secondary">
// //                                 {speaker.courses && speaker.courses.length > 0 
// //                                   ? `${speaker.courses.length} קורסים פעילים` 
// //                                   : 'אין קורסים פעילים'}
// //                               </Typography>
// //                             </Box>
// //                           </Box>
                          
// //                           <Divider />
                          
// //                           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
// //                             {speaker.phoneOfSpeaker && (
// //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                                 <PhoneIcon fontSize="small" color="action" />
// //                                 <Typography variant="body2">
// //                                   {speaker.phoneOfSpeaker}
// //                                 </Typography>
// //                               </Box>
// //                             )}
                            
// //                             {speaker.emailOfSpeaker && (
// //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                                 <EmailIcon fontSize="small" color="action" />
// //                                 <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
// //                                   {speaker.emailOfSpeaker}
// //                                 </Typography>
// //                               </Box>
// //                             )}
                            
// //                             {speaker.addressOfSpeaker && (
// //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                                 <LocationIcon fontSize="small" color="action" />
// //                                 <Typography variant="body2">
// //                                   {speaker.addressOfSpeaker}
// //                                 </Typography>
// //                               </Box>
// //                             )}
// //                           </Box>
                          
// //                           <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
// //                             <Button 
// //                               variant="outlined" 
// //                               size="small"
// //                               onClick={() => handleViewDetails(speaker)}
// //                             >
// //                               פרטים נוספים
// //                             </Button>
// //                           </Box>
// //                         </CardContent>
// //                       </Card>
// //                     </Grid>
// //                   ))}
// //                 </Grid>
// //               ) : (
// //                 <Paper 
// //                   sx={{ 
// //                     p: 4, 
// //                     textAlign: 'center',
// //                     backgroundColor: alpha(theme.palette.background.paper, 0.7)
// //                   }}
// //                 >
// //                   <Typography variant="h6" color="text.secondary" gutterBottom>
// //                     לא נמצאו מרצים
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     נסה לשנות את הגדרות החיפוש או הסינון
// //                   </Typography>
// //                 </Paper>
// //               )}
// //             </Box>
// //           )}
          
// //           {tabValue === 1 && (
// //             <Box>
// //               <Typography variant="h6" gutterBottom>
// //                 מרצים עם קורסים פעילים
// //               </Typography>
// //               <Grid container spacing={3}>
// //                 {speakers
// //                   .filter(speaker => speaker.courses && speaker.courses.length > 0)
// //                   .map((speaker) => (
// //                     <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
// //                       <Card sx={{ height: '100%' }}>
// //                         <CardContent>
// //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
// //                             <StyledBadge
// //                               overlap="circular"
// //                               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// //                               variant="dot"
// //                             >
// //                               <SpeakerAvatar 
// //                                 sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
// //                               >
// //                                 {getInitials(speaker.nameOfSpeaker)}
// //                               </SpeakerAvatar>
// //                             </StyledBadge>
                            
// //                             <Typography variant="h6" component="h2" fontWeight="bold">
// //                               {speaker.nameOfSpeaker}
// //                             </Typography>
// //                           </Box>
                          
// //                           <Divider sx={{ mb: 2 }} />
                          
// //                           <Typography variant="subtitle2" gutterBottom>
// //                             קורסים פעילים:
// //                           </Typography>
                          
// //                           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
// //                             {speaker.courses.map((course, index) => (
// //                               <Chip 
// //                                 key={index}
// //                                 label={course.nameOfCourse || 'קורס ללא שם'}
// //                                 size="small"
// //                                 color="primary"
// //                                 variant="outlined"
// //                               />
// //                             ))}
// //                           </Box>
                          
// //                           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
// //                             <Button 
// //                               variant="outlined" 
// //                               size="small"
// //                               onClick={() => handleViewDetails(speaker)}
// //                             >
// //                               פרטים נוספים
// //                             </Button>
// //                           </Box>
// //                         </CardContent>
// //                       </Card>
// //                     </Grid>
// //                   ))}
// //               </Grid>
              
// //               {speakers.filter(speaker => speaker.courses && speaker.courses.length > 0).length === 0 && (
// //                 <Paper sx={{ p: 4, textAlign: 'center' }}>
// //                   <Typography variant="h6" color="text.secondary">
// //                     אין מרצים עם קורסים פעילים
// //                   </Typography>
// //                 </Paper>
// //               )}
// //             </Box>
// //           )}
          
// //           {tabValue === 2 && (
// //             <FilterContainer>
// //               <Typography variant="h6" gutterBottom sx={{ width: '100%' }}>
// //                 סינון מתקדם
// //               </Typography>
              
// //               <Grid container spacing={3}>
// //                 <Grid item xs={12} md={6}>
// //                   <FormControl fullWidth variant="outlined">
// //                     <InputLabel>חיפוש לפי שדה</InputLabel>
// //                     <Select
// //                       label="חיפוש לפי שדה"
// //                       value={sortConfig.key}
// //                       onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
// //                     >
// //                       <MenuItem value="nameOfSpeaker">שם</MenuItem>
// //                       <MenuItem value="phoneOfSpeaker">טלפון</MenuItem>
// //                       <MenuItem value="emailOfSpeaker">אימייל</MenuItem>
// //                     </Select>
// //                   </FormControl>
// //                 </Grid>
                
// //                 <Grid item xs={12} md={6}>
// //                   <FormControl fullWidth variant="outlined">
// //                     <InputLabel>סדר מיון</InputLabel>
// //                     <Select
// //                       label="סדר מיון"
// //                       value={sortConfig.direction}
// //                       onChange={(e) => setSortConfig({ ...sortConfig, direction: e.target.value })}
// //                     >
// //                       <MenuItem value="ascending">עולה (א-ת)</MenuItem>
// //                       <MenuItem value="descending">יורד (ת-א)</MenuItem>
// //                     </Select>
// //                   </FormControl>
// //                 </Grid>
                
// //                 <Grid item xs={12}>
// //                   <TextField
// //                     fullWidth
// //                     label="חיפוש חופשי"
// //                     variant="outlined"
// //                     value={searchTerm}
// //                     onChange={(e) => setSearchTerm(e.target.value)}
// //                     InputProps={{
// //                       startAdornment: (
// //                         <InputAdornment position="start">
// //                           <SearchIcon />
// //                         </InputAdornment>
// //                       ),
// //                     }}
// //                   />
// //                 </Grid>
                
// //                 <Grid item xs={12}>
// //                   <Typography variant="subtitle2" gutterBottom>
// //                     סינון לפי קטגוריה:
// //                   </Typography>
// //                   <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
// //                     <StyledChip 
// //                       label="הכל" 
// //                       clickable
// //                       active={filterCategory === 'all'}
// //                       onClick={() => setFilterCategory('all')}
// //                     />
// //                     <StyledChip 
// //                       label="עם קורסים" 
// //                       clickable
// //                       active={filterCategory === 'withCourses'}
// //                       onClick={() => setFilterCategory('withCourses')}
// //                     />
// //                     <StyledChip 
// //                       label="ללא קורסים" 
// //                       clickable
// //                       active={filterCategory === 'noCourses'}
// //                       onClick={() => setFilterCategory('noCourses')}
// //                     />
// //                   </Box>
// //                 </Grid>
// //               </Grid>
// //             </FilterContainer>
// //           )}
// //         </Box>
        
// //         {/* Original Table (can be kept or removed) */}
// //         <Box sx={{ display: 'none' }}>
// //           <SpeakersTable />
// //         </Box>
// //       </StyledPaper>
      
// //       {/* Add Speaker Dialog */}
// //       <StyledDialog
// //         open={open}
// //         onClose={() => setOpen(false)}
// //         maxWidth="md"
// //         fullWidth
// //         TransitionComponent={Zoom}
// //       >
// //         <DialogHeader>
// //           <PersonAddIcon sx={{ mr: 1 }} />
// //           הוספת מרצה
// //         </DialogHeader>
// //         <IconButton
// //           aria-label="close"
// //           onClick={() => setOpen(false)}
// //           sx={{
// //             position: 'absolute',
// //             right: 8,
// //             top: 8,
// //             color: 'white',
// //           }}
// //         >
// //           <CloseIcon />
// //         </IconButton>
// //         <DialogContent dividers>
// //           <AddSpeaker />
// //         </DialogContent>
// //       </StyledDialog>
      
// //       {/* Delete Speaker Dialog */}
// //       <StyledDialog
// //         open={openDelete}
// //         onClose={() => setOpenDelete(false)}
// //         maxWidth="sm"
// //         fullWidth
// //         TransitionComponent={Zoom}
// //         >
// //           <DialogHeader>
// //             <DeleteForever sx={{ mr: 1 }} />
// //             מחיקת מרצה
// //           </DialogHeader>
// //           <IconButton
// //             aria-label="close"
// //             onClick={() => setOpenDelete(false)}
// //             sx={{
// //               position: 'absolute',
// //               right: 8,
// //               top: 8,
// //               color: 'white',
// //             }}
// //           >
// //             <CloseIcon />
// //           </IconButton>
// //           <DialogContent dividers>
// //             <Typography variant="body1" gutterBottom color="error">
// //               שים לב! פעולה זו אינה ניתנת לביטול. המרצה וכל המידע הקשור אליו יימחקו לצמיתות.
// //             </Typography>
            
// //             <Box sx={{ my: 3 }}>
// //               <FormControl fullWidth variant="outlined">
// //                 <InputLabel id="delete-speaker-label">בחר מרצה למחיקה</InputLabel>
// //                 <Select
// //                   labelId="delete-speaker-label"
// //                   value={deleteSpeakerName}
// //                   onChange={(e) => setDeleteSpeakerName(e.target.value)}
// //                   label="בחר מרצה למחיקה"
// //                 >
// //                   {speakers.map(speaker => (
// //                     <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
// //                       {speaker.nameOfSpeaker}
// //                     </MenuItem>
// //                   ))}
// //                 </Select>
// //               </FormControl>
// //             </Box>
            
// //             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
// //               <Button 
// //                 variant="outlined" 
// //                 onClick={() => setOpenDelete(false)}
// //               >
// //                 ביטול
// //               </Button>
// //               <Button 
// //                 variant="contained" 
// //                 color="error"
// //                 onClick={handleDeleteSpeaker}
// //                 disabled={!deleteSpeakerName || loading}
// //                 startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <DeleteForever />}
// //               >
// //                 {loading ? 'מוחק...' : 'מחיקה'}
// //               </Button>
// //             </Box>
// //           </DialogContent>
// //         </StyledDialog>
        
// //         {/* Speaker Details Dialog */}
// //         <StyledDialog
// //           open={openDetails}
// //           onClose={() => setOpenDetails(false)}
// //           maxWidth="md"
// //           fullWidth
// //           TransitionComponent={Zoom}
// //         >
// //           {selectedSpeaker && (
// //             <>
// //               <DialogHeader>
// //                 <SchoolIcon sx={{ mr: 1 }} />
// //                 פרטי מרצה: {selectedSpeaker.nameOfSpeaker}
// //               </DialogHeader>
// //               <IconButton
// //                 aria-label="close"
// //                 onClick={() => setOpenDetails(false)}
// //                 sx={{
// //                   position: 'absolute',
// //                   right: 8,
// //                   top: 8,
// //                   color: 'white',
// //                 }}
// //               >
// //                 <CloseIcon />
// //               </IconButton>
// //               <DialogContent dividers>
// //                 <Grid container spacing={3}>
// //                   <Grid item xs={12} md={4}>
// //                     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
// //                       <SpeakerAvatar 
// //                         sx={{ 
// //                           width: 120, 
// //                           height: 120, 
// //                           fontSize: 48,
// //                           bgcolor: getAvatarColor(selectedSpeaker.nameOfSpeaker)
// //                         }}
// //                       >
// //                         {getInitials(selectedSpeaker.nameOfSpeaker)}
// //                       </SpeakerAvatar>
                      
// //                       <Typography variant="h5" fontWeight="bold" textAlign="center">
// //                         {selectedSpeaker.nameOfSpeaker}
// //                       </Typography>
                      
// //                       <Chip 
// //                         label={selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? 'מרצה פעיל' : 'מרצה לא פעיל'} 
// //                         color={selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? 'success' : 'default'}
// //                         variant="outlined"
// //                       />
// //                     </Box>
// //                   </Grid>
                  
// //                   <Grid item xs={12} md={8}>
// //                     <Typography variant="h6" gutterBottom>
// //                       פרטי קשר
// //                     </Typography>
                    
// //                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
// //                       {selectedSpeaker.phoneOfSpeaker && (
// //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                           <PhoneIcon color="primary" />
// //                           <Box>
// //                             <Typography variant="body2" color="text.secondary">
// //                               טלפון
// //                             </Typography>
// //                             <Typography variant="body1">
// //                               {selectedSpeaker.phoneOfSpeaker}
// //                             </Typography>
// //                           </Box>
// //                         </Box>
// //                       )}
                      
// //                       {selectedSpeaker.emailOfSpeaker && (
// //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                           <EmailIcon color="primary" />
// //                           <Box>
// //                             <Typography variant="body2" color="text.secondary">
// //                               אימייל
// //                             </Typography>
// //                             <Typography variant="body1">
// //                               {selectedSpeaker.emailOfSpeaker}
// //                             </Typography>
// //                           </Box>
// //                         </Box>
// //                       )}
                      
// //                       {selectedSpeaker.addressOfSpeaker && (
// //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                           <LocationIcon color="primary" />
// //                           <Box>
// //                             <Typography variant="body2" color="text.secondary">
// //                               כתובת
// //                             </Typography>
// //                             <Typography variant="body1">
// //                               {selectedSpeaker.addressOfSpeaker}
// //                             </Typography>
// //                           </Box>
// //                         </Box>
// //                       )}
// //                     </Box>
                    
// //                     <Divider sx={{ my: 2 }} />
                    
// //                     <Typography variant="h6" gutterBottom>
// //                       קורסים
// //                     </Typography>
                    
// //                     {selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? (
// //                       <Box sx={{ mt: 2 }}>
// //                         <Grid container spacing={2}>
// //                           {selectedSpeaker.courses.map((course, index) => (
// //                             <Grid item xs={12} sm={6} key={index}>
// //                               <Card variant="outlined" sx={{ height: '100%' }}>
// //                                 <CardContent>
// //                                   <Typography variant="subtitle1" fontWeight="bold">
// //                                     {course.nameOfCourse || 'קורס ללא שם'}
// //                                   </Typography>
                                  
// //                                   {course.startDateOfCourse && (
// //                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
// //                                       <EventIcon fontSize="small" color="action" />
// //                                       <Typography variant="body2">
// //                                         תאריך התחלה: {new Date(course.startDateOfCourse).toLocaleDateString('he-IL')}
// //                                       </Typography>
// //                                     </Box>
// //                                   )}
                                  
// //                                   {course.amountOfStudentsInCourse && (
// //                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
// //                                       <SchoolIcon fontSize="small" color="action" />
// //                                       <Typography variant="body2">
// //                                         מספר תלמידים: {course.amountOfStudentsInCourse}
// //                                       </Typography>
// //                                     </Box>
// //                                   )}
// //                                 </CardContent>
// //                               </Card>
// //                             </Grid>
// //                           ))}
// //                         </Grid>
// //                       </Box>
// //                     ) : (
// //                       <Typography variant="body1" color="text.secondary">
// //                         אין קורסים פעילים למרצה זה
// //                       </Typography>
// //                     )}
// //                   </Grid>
// //                 </Grid>
// //               </DialogContent>
// //             </>
// //           )}
// //         </StyledDialog>
        
// //         {/* Snackbar for notifications */}
// //         <Snackbar
// //           open={snackbar.open}
// //           autoHideDuration={6000}
// //           onClose={handleCloseSnackbar}
// //           anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
// //         >
// //           <Alert 
// //             onClose={handleCloseSnackbar} 
// //             severity={snackbar.severity} 
// //             variant="filled"
// //             sx={{ width: '100%' }}
// //           >
// //             {snackbar.message}
// //           </Alert>
// //         </Snackbar>
// //       </Box>
// //     );
// //   };
  






















// // import { useEffect } from 'react';
// // import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
// // import { useDispatch, useSelector } from "react-redux";
// // import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
// // import AddIcon from '@mui/icons-material/Add';
// // import Button from '@mui/material/Button';
// // import { styled } from '@mui/material/styles';
// // import Dialog from '@mui/material/Dialog';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import DialogContent from '@mui/material/DialogContent';
// // import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// // import { Routing } from '../Routing/Routing'
// // import * as React from 'react';
// // import './Speaker.css'
// // import { DeleteForever } from '@mui/icons-material';
// // import { Box, Chip, FormControl, Input, InputBase, InputLabel, MenuItem, Select, TableCell, TableRow, TextField, Typography } from '@mui/material';
// // import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
// // import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
// // import { InputOutlined } from '@mui/icons-material';
// // import { InputRounded } from '@mui/icons-material';
// // import SpeakersTable from './speakersTable';
// // import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
// // import { SchoolOutlined } from '@mui/icons-material';

// // export const Speaker = () => {
// //   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// //     '& .MuiDialogContent-root': {
// //       padding: theme.spacing(3),
// //     },
// //     '& .MuiDialogActions-root': {
// //       padding: theme.spacing(3),
// //     },
// //   }));
// //   const dispatch = useDispatch()
// //   const speakers = useSelector(state => state.speakers.speakers);
// //   const speaker = useSelector(state => state.speakers.selectSpeaker);
// //   const flagClose = useSelector(state => state.speakers.flagClose);
// //   const [flagClose2, setFlagClose2] = React.useState(flagClose)
// //   const [id, setId] = React.useState(false);
// //   const [open, setOpen] = React.useState(false);
// //   const [open2, setOpen2] = React.useState(false);
// //   const [flag, setFlag] = React.useState(false);
// //   const [flag2, setFlag2] = React.useState(false);
// //   const [flag4, setFlag4] = React.useState(false);
// //   const [f, setF] = React.useState(-1);
// //   const [flagDeletedSpeaker, setFlagDeletedSpeaker] = React.useState(false);
// //   const [deletedSpeaker, setDeletedSpeaker] = React.useState("");
// //   const [checkedSpeaker, setCheckedSpeaker] = React.useState();
// //   useEffect(() => {
// //     doIt()
// //   }, [])
// //   async function doIt() {
// //     dispatch(getSpeakersThunk())
// //   }

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //     dispatch(setFlagSpeakerSlice(false))
// //   };
// //   const handleClose = () => {
// //     setOpen(false);
// //   };
// //   const handleClickOpen2 = () => {
// //     setOpen2(true);
// //   };
// //   const handleClose2 = () => {
// //     setOpen2(false);
// //     setFlagClose2(false)
// //   };
// //   async function openDivDetailes(index) {
// //     setFlag(true)
// //     setF(index)
// //   }
// //   const Close = () => {
// //     setFlag(false);
// //   };
// //   const Close2 = () => {
// //     setFlag2(false);
// //   };
// //   // const checkingDeletedSpeaker = () => {
// //   //   debugger
// //   //   if (deletedSpeaker != null)
// //   //     setFlagDeletedSpeaker(true)
// //   // };
// //   const deleteSpeaker = async () => {
// //     // if (deletedSpeaker == checkedSpeaker) {
// //     const tempSpeaker = await dispatch(getBySpeakerNameThunk(deletedSpeaker))
// //     console.log(deletedSpeaker);
// //     setId(tempSpeaker.payload.idOfSpeaker)
// //     //let red = dispatch(getBySpeakerNameThunk(deletedSpeaker))
// //     //console.log(id+"vvvvvvvvvvvvvvvvvvvv");
// //     debugger
// //     dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker))
// //     console.log("tempSpeaker.payload.idOfSpeaker"+tempSpeaker.payload.idOfSpeaker);
// //     setFlag4(true)
// //     //}
// //   };
// //   const whatsGoing = (name2) => {
// //     console.log(name2 + "name2");
// //     setDeletedSpeaker(name2)
// //   };

// //   return <div>

// //     <SpeakersTable></SpeakersTable>
// //     <React.Fragment>
// //       <Button variant="outlined" onClick={handleClickOpen}
// //         align='center'>
// //         הוספת מרצה
// //         <AddIcon ></AddIcon>
// //       </Button>
// //       {!flagClose && <BootstrapDialog
// //         onClose={handleClose}
// //         aria-labelledby="customized-dialog-title"
// //         open={open}
// //       >
// //         <DialogTitle
// //           id="customized-dialog-title">
// //           הוספת מרצה
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
// //           <AddSpeaker />
// //         </DialogContent >
// //       </BootstrapDialog>}
// //     </React.Fragment>

// //     <>{flag && <React.Fragment>
// //       <BootstrapDialog
// //         open={flag}
// //         aria-labelledby="customized-dialog-title">
// //         <DialogTitle
// //           id="customized-dialog-title">
// //           {speakers[f].courses.map(v => v.nameOfCourse)}
// //         </DialogTitle>
// //         <IconButton
// //           aria-label="close"
// //           onClick={Close}
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
// //           <td>{speakers[f].courses.map(v => v.map(x =>
// //             <><td>{x.nameOfCourse}</td>
// //               <td>{x.amountOfStudentsInCourse}</td>
// //               <td>{x.startDateOfCourse}</td></>
// //           ))}</td>
// //         </DialogContent >
// //       </BootstrapDialog>
// //     </React.Fragment>
// //     }
// //     </>


// //     {/* [===delete====] */}
// //     <React.Fragment>
// //       <Button variant="outlined" onClick={handleClickOpen2}
// //         align='center'
// //       >
// //         מחיקת מרצה
// //         <DeleteForever />
// //       </Button>
// //       <BootstrapDialog
// //         onClose={handleClose2}
// //         aria-labelledby="customized-dialog-title"
// //         open={open2}
// //       >
// //         <DialogTitle
// //           id="customized-dialog-title">
// //           מחיקת מרצה
// //         </DialogTitle>
// //         <IconButton
// //           aria-label="close"
// //           onClick={handleClose2}
// //           sx={(theme) => ({
// //             position: 'absolute',
// //             right: 8,
// //             top: 8,
// //             color: theme.palette.grey[30],
// //           })}
// //         >
// //           <CloseIcon />
// //         </IconButton>
// //         <DialogContent dividers>

          
// //         <Box className="select" sx={{ minWidth: 120 }}>
// //       <FormControl fullWidth>
// //         <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// //         <Select
// //          onChange={(e) => whatsGoing(e.target.value)}
// //           labelId="demo-simple-select-label"
// //           id="demo-simple-select"
// //           label="מרצה "
// //           className="tool"
// //           defaultValue={""}
// //         >
// //           {speakers.map(speaker => {
// //             return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
// //               {speaker.nameOfSpeaker} </MenuItem>
// //           })}
// //         </Select>
// //       </FormControl>
// //     </Box>
// //           {/* <Box className="select" sx={{ minWidth: 120 }}>
// //             <FormControl fullWidth>
// //               <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
// //               <Select
               
// //                 labelId="demo-simple-select-label"
// //                 id="demo-simple-select"
// //                 // defaultValue={""}
// //                 label="מרצה "
// //                 className="tool"

// //               >
// //                 {speakers.map(speaker => {
// //                   return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}

// //                   >{speaker.nameOfSpeaker}</MenuItem>

// //                 })
// //                 }

// //               </Select>
// //             </FormControl>
// //           </Box> */}
// //           <br />
// //           {/* <>{flagDeletedSpeaker && <><div>
// //             <input id="outlined-basic" placeholder=' הקלידי את שם המרצה' 
// //               className="input" onChange={(x) => setCheckedSpeaker(x.target.value)}
// //             />
// //           </div><Button
// //             onClick={() =>deleteSpeaker ()}
// //           >o.k</Button></>}</> */}

// //           {/* {!flagDeletedSpeaker && <Button
// //             onClick={() =>checkingDeletedSpeaker ()}
// //           >o.kk</Button>} */}
// //           <Button
// //             onClick={() => deleteSpeaker()}
// //           >o.k</Button>
// //         </DialogContent >
// //       </BootstrapDialog>
// //     </React.Fragment>

// //     <>{flag2 && <React.Fragment>
// //       <BootstrapDialog
// //         open={flag2}
// //         aria-labelledby="customized-dialog-title">
// //         <DialogTitle
// //           id="customized-dialog-title">
// //           {/* {speakers[f].courses.map(v => v.nameOfCourse)} */}
// //         </DialogTitle>
// //         <IconButton
// //           aria-label="close"
// //           onClick={Close2}
// //           sx={(theme) => ({
// //             position: 'absolute',
// //             right: 8,
// //             top: 8,
// //             color: theme.palette.grey[30],
// //           })}
// //         >
// //           <CloseIcon />
// //         </IconButton>
// //         <DialogContent dividers>


// //           {/* <td>{speakers[f].courses.map(v => v.map(x =>
// //             <><td>{x.nameOfCourse}</td>
// //               <td>{x.amountOfStudentsInCourse}</td>
// //               <td>{x.startDateOfCourse}</td></>
// //           ))}</td> */}
// //         </DialogContent >
// //       </BootstrapDialog>
// //     </React.Fragment>
// //     }
// //     </>
// //   </div>
// // }
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { styled, alpha } from '@mui/material/styles';
import { 
  Box, Button, Dialog, DialogTitle, DialogContent, IconButton, 
  Typography, Paper, Divider, Grid, Avatar, Chip, TextField, 
  InputAdornment, FormControl, InputLabel, Select, MenuItem,
  Tooltip, Zoom, Fade, Backdrop, Card, CardContent, Tabs, Tab,
  Badge, Snackbar, Alert, CircularProgress, useTheme, useMediaQuery
} from '@mui/material';
import { 
  Add as AddIcon, 
  DeleteForever, 
  Close as CloseIcon, 
  Search as SearchIcon,
  FilterList as FilterListIcon,
  PersonAdd as PersonAddIcon,
  School as SchoolIcon,
  Event as EventIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  CheckCircle as CheckCircleIcon,
  Sort as SortIcon,
  Refresh as RefreshIcon,
  MoreVert as MoreVertIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon
} from '@mui/icons-material';

import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
import SpeakersTable from './speakersTable';
import './Speaker.css';
import { Routing } from '../Routing/Routing';
import { getAllSpeakersThunk } from '../../redux/Thunks/getAllSpeakersThunk';

// Styled Components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '5px',
    background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
  }
}));

const PageHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
  }
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  '& .MuiOutlinedInput-root': {
    borderRadius: 30,
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    transition: theme.transitions.create(['box-shadow']),
    '&:hover': {
      boxShadow: '0 0 0 2px rgba(63, 81, 181, 0.2)',
    },
    '&.Mui-focused': {
      boxShadow: '0 0 0 3px rgba(63, 81, 181, 0.3)',
    }
  }
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: '8px 24px',
  fontWeight: 600,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
  }
}));

const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  backgroundColor: alpha(theme.palette.background.paper, 0.7),
  borderRadius: 8,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: 16,
    boxShadow: '0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)',
    overflow: 'visible',
  }
}));

const DialogHeader = styled(DialogTitle)(({ theme }) => ({
  background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
  color: theme.palette.common.white,
  padding: theme.spacing(2, 3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const SpeakerAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  fontSize: 24,
}));

const SortButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: 20,
  padding: '4px 12px',
  fontSize: '0.875rem',
}));

const StyledChip = styled(Chip)(({ theme, active }) => ({
  borderRadius: 16,
  fontWeight: 500,
  transition: 'all 0.2s ease',
  ...(active && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    boxShadow: '0 2px 8px rgba(63, 81, 181, 0.4)',
  })
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const Speaker = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const speakers = useSelector(state => state.speakers.speakers);
  const flagClose = useSelector(state => state.speakers.flagClose);
  
  // State
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [deleteSpeakerName, setDeleteSpeakerName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSpeakers, setFilteredSpeakers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'nameOfSpeaker', direction: 'ascending' });
  const [filterCategory, setFilterCategory] = useState('all');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  // Load speakers on component mount
  useEffect(() => {
    loadSpeakers();
  }, []);

  // Filter speakers when search term or speakers list changes
  useEffect(() => {
    filterSpeakers();
  }, [searchTerm, speakers, sortConfig, filterCategory]);

  const loadSpeakers = async () => {
    setLoading(true);
    // await dispatch(getAllSpeakersThunk());
     await dispatch(getSpeakersThunk());
    console.log("מבנה המרצים:", speakers);
    setLoading(false);
  };

  const filterSpeakers = () => {
    let filtered = [...speakers];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(speaker => 
        speaker.nameOfSpeaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.phoneOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.emailOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (filterCategory !== 'all') {
      filtered = filtered.filter(speaker => {
        if (filterCategory === 'withCourses') {
          return speaker.courses && speaker.courses.length > 0;
        } else if (filterCategory === 'noCourses') {
          return !speaker.courses || speaker.courses.length === 0;
        }
        return true;
      });
    }
    
    // Apply sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredSpeakers(filtered);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleAddSpeaker = () => {
    setOpen(true);
    dispatch(setFlagSpeakerSlice(false));
  };

  const handleDeleteDialogOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteSpeaker = async () => {
    if (!deleteSpeakerName) {
      setSnackbar({
        open: true,
        message: 'יש לבחור מרצה למחיקה',
        severity: 'error'
      });
      return;
    }

    setLoading(true);
    try {
      const tempSpeaker = await dispatch(getBySpeakerNameThunk(deleteSpeakerName));
      if (tempSpeaker.payload) {
        await dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker));
        setSnackbar({
          open: true,
          message: `המרצה ${deleteSpeakerName} נמחק בהצלחה`,
          severity: 'success'
        });
        setOpenDelete(false);
        setDeleteSpeakerName("");
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'שגיאה במחיקת המרצה',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (speaker) => {
    setSelectedSpeaker(speaker);
    setOpenDetails(true);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Generate random color for avatar based on name
  const getAvatarColor = (name) => {
    const colors = [
      '#3f51b5', '#f44336', '#009688', '#ff9800', '#9c27b0', 
      '#2196f3', '#4caf50', '#ffeb3b', '#795548', '#607d8b'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Get speaker initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (  
   <div>
       <Routing></Routing>
       <br></br>
      <StyledPaper elevation={3}>
        <PageHeader>
          <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
            ניהול מרצים
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <ActionButton
              variant="contained"
              color="primary"
              startIcon={<PersonAddIcon />}
              onClick={handleAddSpeaker}
            >
              הוספת מרצה
            </ActionButton>
            
            <ActionButton
              variant="outlined"
              color="error"
              startIcon={<DeleteForever />}
              onClick={handleDeleteDialogOpen}
            >
              מחיקת מרצה
            </ActionButton>
            
            <Tooltip title="רענון רשימה">
              <IconButton 
                color="primary" 
                onClick={loadSpeakers}
                sx={{ 
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.2) }
                }}
              >
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </PageHeader>

        <Divider sx={{ mb: 3 }} />
        
        <Box sx={{ mb: 4 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            sx={{ mb: 3 }}
          >
            <Tab icon={<SchoolIcon />} label="כל המרצים" />
            <Tab icon={<EventIcon />} label="מרצים פעילים" />
            <Tab icon={<FilterListIcon />} label="סינון מתקדם" />
          </Tabs>

          {tabValue === 0 && (
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                <SearchBar
                  placeholder="חיפוש לפי שם, טלפון או אימייל..."
                  variant="outlined"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: searchTerm && (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={() => setSearchTerm('')}>
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <SortButton 
                    variant={sortConfig.key === 'nameOfSpeaker' ? 'contained' : 'outlined'}
                    size="small"
                    onClick={() => handleSort('nameOfSpeaker')}
                    endIcon={sortConfig.key === 'nameOfSpeaker' ? 
                      (sortConfig.direction === 'ascending' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />) : 
                      <SortIcon />}
                  >
                    מיון לפי שם
                  </SortButton>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                <Typography variant="body2" sx={{ mr: 1, alignSelf: 'center' }}>
                  סינון מהיר:
                </Typography>
                <StyledChip 
                  label="הכל" 
                  clickable
                  active={filterCategory === 'all'}
                  onClick={() => setFilterCategory('all')}
                />
                <StyledChip 
                  label="עם קורסים" 
                  clickable
                  active={filterCategory === 'withCourses'}
                  onClick={() => setFilterCategory('withCourses')}
                />
                <StyledChip 
                  label="ללא קורסים" 
                  clickable
                  active={filterCategory === 'noCourses'}
                  onClick={() => setFilterCategory('noCourses')}
                />
              </Box>
              
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                  <CircularProgress />
                </Box>
              ) : filteredSpeakers.length > 0 ? (
                <Grid container spacing={3}>
                  {filteredSpeakers.map((speaker) => (
                    <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
                      <Card 
                        sx={{ 
                          height: '100%', 
                          display: 'flex', 
                          flexDirection: 'column',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
                          }
                        }}
                      >
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {speaker.courses && speaker.courses.length > 0 ? (
                              <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                              >
                                <SpeakerAvatar 
                                  sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
                                >
                                  {getInitials(speaker.nameOfSpeaker)}
                                </SpeakerAvatar>
                              </StyledBadge>
                            ) : (
                              <SpeakerAvatar 
                                sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
                              >
                                {getInitials(speaker.nameOfSpeaker)}
                              </SpeakerAvatar>
                            )}
                            
                            <Box>
                              <Typography variant="h6" component="h2" fontWeight="bold">
                                {speaker.nameOfSpeaker}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {speaker.courses && speaker.courses.length > 0 
                                  ? `${speaker.courses.length} קורסים פעילים` 
                                  : 'אין קורסים פעילים'}
                              </Typography>
                            </Box>
                          </Box>
                          
                          <Divider />
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {speaker.phoneOfSpeaker && (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <PhoneIcon fontSize="small" color="action" />
                                <Typography variant="body2">
                                  {speaker.phoneOfSpeaker}
                                </Typography>
                              </Box>
                            )}
                            
                            {speaker.emailOfSpeaker && (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <EmailIcon fontSize="small" color="action" />
                                <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                                  {speaker.emailOfSpeaker}
                                </Typography>
                              </Box>
                            )}
                            
                            {speaker.addressOfSpeaker && (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationIcon fontSize="small" color="action" />
                                <Typography variant="body2">
                                  {speaker.addressOfSpeaker}
                                </Typography>
                              </Box>
                            )}
                          </Box>
                          
                          <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                            <Button 
                              variant="outlined" 
                              size="small"
                              onClick={() => handleViewDetails(speaker)}
                            >
                              פרטים נוספים
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Paper 
                  sx={{ 
                    p: 4, 
                    textAlign: 'center',
                    backgroundColor: alpha(theme.palette.background.paper, 0.7)
                  }}
                >
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    לא נמצאו מרצים
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    נסה לשנות את הגדרות החיפוש או הסינון
                  </Typography>
                </Paper>
              )}
            </Box>
          )}
          
{tabValue === 2 && (
  <FilterContainer>
    <Typography variant="h6" gutterBottom sx={{ width: '100%' }}>
      סינון מתקדם
    </Typography>
    
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>חיפוש לפי שדה</InputLabel>
          <Select
            label="חיפוש לפי שדה"
            value={sortConfig.key}
            onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
          >
            <MenuItem value="nameOfSpeaker">שם</MenuItem>
            <MenuItem value="phoneOfSpeaker">טלפון</MenuItem>
            <MenuItem value="emailOfSpeaker">אימייל</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>סדר מיון</InputLabel>
          <Select
            label="סדר מיון"
            value={sortConfig.direction}
            onChange={(e) => setSortConfig({ ...sortConfig, direction: e.target.value })}
          >
            <MenuItem value="ascending">עולה (א-ת)</MenuItem>
            <MenuItem value="descending">יורד (ת-א)</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="חיפוש חופשי"
          variant="outlined"
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
      </Grid>
      
      <Grid item xs={12}>
        <Typography variant="subtitle2" gutterBottom>
          סינון לפי קטגוריה:
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <StyledChip
            label="הכל"
            clickable
            active={filterCategory === 'all'}
            onClick={() => setFilterCategory('all')}
          />
          <StyledChip
            label="עם קורסים"
            clickable
            active={filterCategory === 'withCourses'}
            onClick={() => setFilterCategory('withCourses')}
          />
          <StyledChip
            label="ללא קורסים"
            clickable
            active={filterCategory === 'noCourses'}
            onClick={() => setFilterCategory('noCourses')}
          />
        </Box>
      </Grid>
    </Grid>
    
    {/* הוספת הצגת תוצאות הסינון */}
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        תוצאות הסינון
      </Typography>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : filteredSpeakers.length > 0 ? (
        <Grid container spacing={3}>
          {filteredSpeakers.map((speaker) => (
            <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {speaker.courses && speaker.courses.length > 0 ? (
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                      >
                        <SpeakerAvatar
                          sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
                        >
                          {getInitials(speaker.nameOfSpeaker)}
                        </SpeakerAvatar>
                      </StyledBadge>
                    ) : (
                      <SpeakerAvatar
                        sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
                      >
                        {getInitials(speaker.nameOfSpeaker)}
                      </SpeakerAvatar>
                    )}
                    
                    <Box>
                      <Typography variant="h6" component="h2" fontWeight="bold">
                        {speaker.nameOfSpeaker}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {speaker.courses && speaker.courses.length > 0
                          ? `${speaker.courses.length} קורסים פעילים`
                          : 'אין קורסים פעילים'}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider />
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {speaker.phoneOfSpeaker && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneIcon fontSize="small" color="action" />
                        <Typography variant="body2">
                          {speaker.phoneOfSpeaker}
                        </Typography>
                      </Box>
                    )}
                    
                    {speaker.emailOfSpeaker && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailIcon fontSize="small" color="action" />
                        <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                          {speaker.emailOfSpeaker}
                        </Typography>
                      </Box>
                    )}
                    
                    {speaker.addressOfSpeaker && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationIcon fontSize="small" color="action" />
                        <Typography variant="body2">
                          {speaker.addressOfSpeaker}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                  
                  <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleViewDetails(speaker)}
                    >
                      פרטים נוספים
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper
          sx={{
            p: 4,
            textAlign: 'center',
            backgroundColor: alpha(theme.palette.background.paper, 0.7)
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            לא נמצאו מרצים
          </Typography>
          <Typography variant="body2" color="text.secondary">
            נסה לשנות את הגדרות החיפוש או הסינון
          </Typography>
        </Paper>
      )}
    </Box>
  </FilterContainer>
)}























          {tabValue === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                מרצים עם קורסים פעילים
              </Typography>
              <Grid container spacing={3}>
                {speakers
                  .filter(speaker => speaker.courses && speaker.courses.length > 0)
                  .map((speaker) => (
                    <Grid item xs={12} sm={6} md={4} key={speaker.idOfSpeaker}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <StyledBadge
                              overlap="circular"
                              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                              variant="dot"
                            >
                              <SpeakerAvatar 
                                sx={{ bgcolor: getAvatarColor(speaker.nameOfSpeaker) }}
                              >
                                {getInitials(speaker.nameOfSpeaker)}
                              </SpeakerAvatar>
                            </StyledBadge>
                            
                            <Typography variant="h6" component="h2" fontWeight="bold">
                              {speaker.nameOfSpeaker}
                            </Typography>
                          </Box>
                          
                          <Divider sx={{ mb: 2 }} />
                          
                          <Typography variant="subtitle2" gutterBottom>
                            קורסים פעילים:
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                            {speaker.courses.map((course, index) => (
                              <Chip 
                                key={index}
                                label={course.nameOfCourse || 'קורס ללא שם'}
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                            ))}
                          </Box>
                          
                          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button 
                              variant="outlined" 
                              size="small"
                              onClick={() => handleViewDetails(speaker)}
                            >
                              פרטים נוספים
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
              
              {speakers.filter(speaker => speaker.courses && speaker.courses.length > 0).length === 0 && (
                <Paper sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h6" color="text.secondary">
                    אין מרצים עם קורסים פעילים
                  </Typography>
                </Paper>
              )}
            </Box>
          )}
          
          {/* {tabValue === 2 && (
            <FilterContainer>
              <Typography variant="h6" gutterBottom sx={{ width: '100%' }}>
                סינון מתקדם
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>חיפוש לפי שדה</InputLabel>
                    <Select
                      label="חיפוש לפי שדה"
                      value={sortConfig.key}
                      onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
                    >
                      <MenuItem value="nameOfSpeaker">שם</MenuItem>
                      <MenuItem value="phoneOfSpeaker">טלפון</MenuItem>
                      <MenuItem value="emailOfSpeaker">אימייל</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>סדר מיון</InputLabel>
                    <Select
                      label="סדר מיון"
                      value={sortConfig.direction}
                      onChange={(e) => setSortConfig({ ...sortConfig, direction: e.target.value })}
                    >
                      <MenuItem value="ascending">עולה (א-ת)</MenuItem>
                      <MenuItem value="descending">יורד (ת-א)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="חיפוש חופשי"
                    variant="outlined"
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
                </Grid>
                
                <Grid item xs={12}>
                  <Typography variant="subtitle2" gutterBottom>
                    סינון לפי קטגוריה:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <StyledChip 
                      label="הכל" 
                      clickable
                      active={filterCategory === 'all'}
                      onClick={() => setFilterCategory('all')}
                    />
                    <StyledChip 
                      label="עם קורסים" 
                      clickable
                      active={filterCategory === 'withCourses'}
                      onClick={() => setFilterCategory('withCourses')}
                    />
                    <StyledChip 
                      label="ללא קורסים" 
                      clickable
                      active={filterCategory === 'noCourses'}
                      onClick={() => setFilterCategory('noCourses')}
                    />
                  </Box>
                </Grid>
              </Grid>
            </FilterContainer>
          ) */}
          {/* } */}
        </Box>
        
        {/* Original Table (can be kept or removed) */}
        <Box sx={{ display: 'none' }}>
          <SpeakersTable />
        </Box>
      </StyledPaper>
      
      {/* Add Speaker Dialog */}
      <StyledDialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        TransitionComponent={Zoom}
      >
        <DialogHeader>
          <PersonAddIcon sx={{ mr: 1 }} />
          הוספת מרצה
        </DialogHeader>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <AddSpeaker />
        </DialogContent>
      </StyledDialog>
      
      {/* Delete Speaker Dialog */}
      <StyledDialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Zoom}
        >
          <DialogHeader>
            <DeleteForever sx={{ mr: 1 }} />
            מחיקת מרצה
          </DialogHeader>
          <IconButton
            aria-label="close"
            onClick={() => setOpenDelete(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography variant="body1" gutterBottom color="error">
              שים לב! פעולה זו אינה ניתנת לביטול. המרצה וכל המידע הקשור אליו יימחקו לצמיתות.
            </Typography>
            
            <Box sx={{ my: 3 }}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="delete-speaker-label">בחר מרצה למחיקה</InputLabel>
                <Select
                  labelId="delete-speaker-label"
                  value={deleteSpeakerName}
                  onChange={(e) => setDeleteSpeakerName(e.target.value)}
                  label="בחר מרצה למחיקה"
                >
                  {speakers.map(speaker => (
                    <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
                      {speaker.nameOfSpeaker}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button 
                variant="outlined" 
                onClick={() => setOpenDelete(false)}
              >
                ביטול
              </Button>
              <Button 
                variant="contained" 
                color="error"
                onClick={handleDeleteSpeaker}
                disabled={!deleteSpeakerName || loading}
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <DeleteForever />}
              >
                {loading ? 'מוחק...' : 'מחיקה'}
              </Button>
            </Box>
          </DialogContent>
        </StyledDialog>
        
        {/* Speaker Details Dialog */}
        <StyledDialog
          open={openDetails}
          onClose={() => setOpenDetails(false)}
          maxWidth="md"
          fullWidth
          TransitionComponent={Zoom}
        >
          {selectedSpeaker && (
            <>
              <DialogHeader>
                <SchoolIcon sx={{ mr: 1 }} />
                פרטי מרצה: {selectedSpeaker.nameOfSpeaker}
              </DialogHeader>
              <IconButton
                aria-label="close"
                onClick={() => setOpenDetails(false)}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'white',
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                      <SpeakerAvatar 
                        sx={{ 
                          width: 120, 
                          height: 120, 
                          fontSize: 48,
                          bgcolor: getAvatarColor(selectedSpeaker.nameOfSpeaker)
                        }}
                      >
                        {getInitials(selectedSpeaker.nameOfSpeaker)}
                      </SpeakerAvatar>
                      
                      <Typography variant="h5" fontWeight="bold" textAlign="center">
                        {selectedSpeaker.nameOfSpeaker}
                      </Typography>
                      
                      <Chip 
                        label={selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? 'מרצה פעיל' : 'מרצה לא פעיל'} 
                        color={selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? 'success' : 'default'}
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>
                      פרטי קשר
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                      {selectedSpeaker.phoneOfSpeaker && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <PhoneIcon color="primary" />
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              טלפון
                            </Typography>
                            <Typography variant="body1">
                              {selectedSpeaker.phoneOfSpeaker}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                      
                      {selectedSpeaker.emailOfSpeaker && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <EmailIcon color="primary" />
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              אימייל
                            </Typography>
                            <Typography variant="body1">
                              {selectedSpeaker.emailOfSpeaker}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                      
                      {selectedSpeaker.addressOfSpeaker && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <LocationIcon color="primary" />
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              כתובת
                            </Typography>
                            <Typography variant="body1">
                              {selectedSpeaker.addressOfSpeaker}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography variant="h6" gutterBottom>
                      קורסים
                    </Typography>
                    
                    {selectedSpeaker.courses && selectedSpeaker.courses.length > 0 ? (
                      <Box sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                          {selectedSpeaker.courses.map((course, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                              <Card variant="outlined" sx={{ height: '100%' }}>
                                <CardContent>
                                  <Typography variant="subtitle1" fontWeight="bold">
                                    {course.nameOfCourse || 'קורס ללא שם'}
                                  </Typography>
                                  
                                  {course.startDateOfCourse && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                      <EventIcon fontSize="small" color="action" />
                                      <Typography variant="body2">
                                        תאריך התחלה: {new Date(course.startDateOfCourse).toLocaleDateString('he-IL')}
                                      </Typography>
                                    </Box>
                                  )}
                                  
                                  {course.amountOfStudentsInCourse && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                      <SchoolIcon fontSize="small" color="action" />
                                      <Typography variant="body2">
                                        מספר תלמידים: {course.amountOfStudentsInCourse}
                                      </Typography>
                                    </Box>
                                  )}
                                </CardContent>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    ) : (
                      <Typography variant="body1" color="text.secondary">
                        אין קורסים פעילים למרצה זה
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </DialogContent>
            </>
          )}
        </StyledDialog>
        
        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity} 
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
        </div>
    );
  };
  
