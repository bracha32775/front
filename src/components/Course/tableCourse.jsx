// // // // // import * as React from 'react';
// // // // // import PropTypes from 'prop-types';
// // // // // import { alpha } from '@mui/material/styles';
// // // // // import Box from '@mui/material/Box';
// // // // // import Table from '@mui/material/Table';
// // // // // import TableBody from '@mui/material/TableBody';
// // // // // import TableCell from '@mui/material/TableCell';
// // // // // import TableContainer from '@mui/material/TableContainer';
// // // // // import TableHead from '@mui/material/TableHead';
// // // // // import TablePagination from '@mui/material/TablePagination';
// // // // // import TableRow from '@mui/material/TableRow';
// // // // // import TableSortLabel from '@mui/material/TableSortLabel';
// // // // // import Toolbar from '@mui/material/Toolbar';
// // // // // import Typography from '@mui/material/Typography';
// // // // // import Paper from '@mui/material/Paper';
// // // // // import Checkbox from '@mui/material/Checkbox';
// // // // // import IconButton from '@mui/material/IconButton';
// // // // // import Tooltip from '@mui/material/Tooltip';
// // // // // import FormControlLabel from '@mui/material/FormControlLabel';
// // // // // import Switch from '@mui/material/Switch';
// // // // // import DeleteIcon from '@mui/icons-material/Delete';
// // // // // import FilterListIcon from '@mui/icons-material/FilterList';
// // // // // import { visuallyHidden } from '@mui/utils';
// // // // // import { useDispatch } from 'react-redux';
// // // // // import { useSelector } from 'react-redux';
// // // // // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';


// // // // // // function createData(id, name, calories, fat, carbs, protein) {
// // // // // //   return {
// // // // // //     id,
// // // // // //     name,
// // // // // //     calories,
// // // // // //     fat,
// // // // // //     carbs,
// // // // // //     protein,
// // // // // //   };
// // // // // // }

// // // // // function descendingComparator(a, b, orderBy) {
// // // // //   if (b[orderBy] < a[orderBy]) {
// // // // //     return -1;
// // // // //   }
// // // // //   if (b[orderBy] > a[orderBy]) {
// // // // //     return 1;
// // // // //   }
// // // // //   return 0;
// // // // // }

// // // // // function getComparator(order, orderBy) {
// // // // //   return order === 'desc'
// // // // //     ? (a, b) => descendingComparator(a, b, orderBy)
// // // // //     : (a, b) => -descendingComparator(a, b, orderBy);
// // // // // }

// // // // // const headCells = [
// // // // //       {
// // // // //     id: 'מספר מפגשים',
// // // // //     numeric: false,
// // // // //     disablePadding: false,
// // // // //     label: 'מספר מפגשים',
// // // // //   }, 
// // // // //    {
// // // // //     id: 'יום',
// // // // //     numeric: false,
// // // // //     disablePadding: false,
// // // // //     label: 'יום',
// // // // //   }, 
  
// // // // //    {
// // // // //     id: 'מספר משתתפים',
// // // // //     numeric: false,
// // // // //     disablePadding: false,
// // // // //     label: 'מספר משתתפים',
// // // // //   },
// // // // //   {
// // // // //     id: 'שם',
// // // // //     numeric: false,
// // // // //     disablePadding: false,
// // // // //     label: 'שם',
// // // // //   },
// // // // // ];

// // // // // function EnhancedTableHead(props) {

// // // // //     const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
// // // // //       props;
// // // // //     const createSortHandler = (property) => (event) => {
// // // // //       onRequestSort(event, property);
// // // // //     };
// // // // //   const dispatch=useDispatch()
  
  
// // // // //   const getData=async()=>{
// // // // //     await dispatch(getCoursesThunk())
// // // // //   }
// // // // //     React.useEffect(()=>{
// // // // //         getData()
// // // // //     },[])
   
    
  
 
    
// // // // //   return (
    
// // // // //     <TableHead>
// // // // //       <TableRow>
// // // // //         <TableCell >
// // // // //           {/* <Checkbox
// // // // //             color="primary"
// // // // //             indeterminate={numSelected > 0 && numSelected < rowCount}
// // // // //             checked={rowCount > 0 && numSelected === rowCount}
// // // // //             onChange={onSelectAllClick}
// // // // //             inputProps={{
// // // // //               'aria-label': 'select all desserts',
// // // // //             }}
// // // // //           /> */}
// // // // //         </TableCell>
// // // // //         {headCells.map((headCell) => (
// // // // //           <TableCell
// // // // //             key={headCell.id}
// // // // //             // align={headCell.numeric ? 'right' : 'left'}
// // // // //             padding='none'
// // // // //            align='center'
// // // // //             // padding={headCell.disablePadding ? 'none' : 'normal'}
// // // // //             // sortDirection={orderBy === headCell.id ? order : false}
// // // // //           >
// // // // //             {/* <TableSortLabel
// // // // //               active={orderBy === headCell.id}
// // // // //               direction={orderBy === headCell.id ? order : 'asc'}
// // // // //               onClick={createSortHandler(headCell.id)}
// // // // //             > */}
// // // // //               {headCell.label}
// // // // //               {orderBy === headCell.id ? (
// // // // //                 <Box component="span" sx={visuallyHidden}>
// // // // //                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
// // // // //                 </Box>
// // // // //               ) : null}
// // // // //             {/* </TableSortLabel> */}
// // // // //           </TableCell>
// // // // //         ))}
// // // // //       </TableRow>
// // // // //     </TableHead>
// // // // //   );
// // // // // }

// // // // // EnhancedTableHead.propTypes = {
    
// // // // //   numSelected: PropTypes.number.isRequired,
// // // // //   onRequestSort: PropTypes.func.isRequired,
// // // // //   onSelectAllClick: PropTypes.func.isRequired,
// // // // //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
// // // // //   orderBy: PropTypes.string.isRequired,
// // // // //   rowCount: PropTypes.string.isRequired,
// // // // // };

// // // // // function EnhancedTableToolbar(props) {
    
// // // // //   const { numSelected } = props;
// // // // //   return (
// // // // //     <Toolbar
// // // // //     //   sx={[
// // // // //     //     {
// // // // //     //       pl: { sm: 2 },
// // // // //     //       pr: { xs: 1, sm: 1 },
// // // // //     //     },
// // // // //     // //     numSelected > 0 && {
// // // // //     // //       bgcolor: (theme) =>
// // // // //     // //         alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
// // // // //     // //     },
// // // // //     //   ]}
// // // // //     >
// // // // //       {/* {numSelected > 0 ? (
// // // // //         <Typography
// // // // //           sx={{ flex: '1 1 100%' }}
// // // // //           color="inherit"
// // // // //           variant="subtitle1"
// // // // //           component="div"
// // // // //         >
// // // // //           {numSelected} selected
// // // // //         </Typography>
// // // // //       ) : (
// // // // //         <Typography
// // // // //           sx={{ flex: '1 1 100%' }}
// // // // //           variant="h6"
// // // // //           id="tableTitle"
// // // // //           component="div"
// // // // //         >
// // // // //           Nutrition
// // // // //         </Typography>
// // // // //       )} */}
// // // // //       {numSelected > 0 ? (
// // // // //         <Tooltip title="Delete">
// // // // //           <IconButton>
// // // // //             <DeleteIcon />
// // // // //           </IconButton>
// // // // //         </Tooltip>
// // // // //       ) : (
// // // // //         <Tooltip title="Filter list">
// // // // //           <IconButton>
// // // // //             {/* <FilterListIcon /> */}
// // // // //           </IconButton>
// // // // //         </Tooltip>
// // // // //       )}
// // // // //     </Toolbar>
// // // // //   );
// // // // // }

// // // // // EnhancedTableToolbar.propTypes = {
// // // // //   numSelected: PropTypes.number.isRequired,
// // // // // };

// // // // // export default function TableCourse() {
// // // // //  const courses = useSelector(c =>c.courses.courses)
// // // // //  const rows=courses
// // // // //   const [order, setOrder] = React.useState('asc');
// // // // //   const [orderBy, setOrderBy] = React.useState('calories');
// // // // //   const [selected, setSelected] = React.useState([]);
// // // // //   const [page, setPage] = React.useState(0);
// // // // //   const [dense, setDense] = React.useState(false);
// // // // //   const [rowsPerPage, setRowsPerPage] = React.useState(5);

// // // // //   const handleRequestSort = (event, property) => {
    
// // // // //     const isAsc = orderBy === property && order === 'asc';
// // // // //     setOrder(isAsc ? 'desc' : 'asc');
// // // // //     setOrderBy(property);
// // // // //   };

// // // // //   const handleSelectAllClick = (event) => {
    
// // // // //     if (event.target.checked) {
// // // // //       const newSelected = courses.map((n) => n.id);
// // // // //       setSelected(newSelected);
// // // // //       return;
// // // // //     }
// // // // //     setSelected([]);
// // // // //   };
// // // // // //מיונים
// // // // //    const handleClick = (event, id) => {
// // // // //     const selectedIndex = selected.indexOf(id);
// // // // //     let newSelected = [];

// // // // //     if (selectedIndex === -1) {
// // // // //       newSelected = newSelected.concat(selected, id);
// // // // //     } else if (selectedIndex === 0) {
// // // // //       newSelected = newSelected.concat(selected.slice(1));
// // // // //     } else if (selectedIndex === selected.length - 1) {
// // // // //       newSelected = newSelected.concat(selected.slice(0, -1));
// // // // //     } else if (selectedIndex > 0) {
// // // // //       newSelected = newSelected.concat(
// // // // //         selected.slice(0, selectedIndex),
// // // // //         selected.slice(selectedIndex + 1),
// // // // //       );
// // // // //     }
// // // // //     setSelected(newSelected);
// // // // //   };

// // // // //   const handleChangePage = (event, newPage) => {
// // // // //     setPage(newPage);
// // // // //   };

// // // // //   const handleChangeRowsPerPage = (event) => {
// // // // //     setRowsPerPage(parseInt(event.target.value, 10));
// // // // //     setPage(0);
// // // // //   };

// // // // //   const handleChangeDense = (event) => {
// // // // //     setDense(event.target.checked);
// // // // //   };

// // // // //   // Avoid a layout jump when reaching the last page with empty rows.
// // // // //   const emptyRows =
// // // // //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

// // // // //   const visibleRows = React.useMemo(
// // // // //     () =>
// // // // //       [...rows]
// // // // //         .sort(getComparator(order, orderBy))
// // // // //         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
// // // // //     [order, orderBy, page, rowsPerPage],
// // // // //   );

// // // // //   return (
// // // // //     <>
   
// // // // //     <Box sx={{ width: '100%' }}>
// // // // //           <Paper sx={{ width: '100%', mb: 2 }}>
// // // // //               <EnhancedTableToolbar numSelected={selected.length} />
// // // // //               <TableContainer>
// // // // //                   <Table
// // // // //                       sx={{ minWidth: 750 }}
// // // // //                       aria-labelledby="tableTitle"
// // // // //                       size={dense ? 'small' : 'medium'}
// // // // //                   >
// // // // //                       <EnhancedTableHead
// // // // //                           numSelected={courses.length}
// // // // //                           order={order}
// // // // //                           orderBy={orderBy}
// // // // //                           onSelectAllClick={handleSelectAllClick}
// // // // //                           onRequestSort={handleRequestSort}
// // // // //                           rowCount={rows.length} />
// // // // //                       <TableBody>
// // // // //                           {courses.map((row, index) => {
// // // // //                               const isItemSelected = selected.includes(row.id);
// // // // //                               const labelId = `enhanced-table-checkbox-${index}`;

// // // // //                               return (
// // // // //                                   <TableRow
// // // // //                                       hover
// // // // //                                       //
// // // // //                                       // onClick={(event) => handleClick(event, row.id)}
// // // // //                                       role="checkbox"
// // // // //                                       aria-checked={isItemSelected}
// // // // //                                       tabIndex={-1}
// // // // //                                       key={row.id}
// // // // //                                       selected={isItemSelected}
// // // // //                                       sx={{ cursor: 'pointer' }}
// // // // //                                   >
// // // // //                                       <TableCell padding="checkbox">
// // // // //                                           {/* <Checkbox
// // // // //                   color="primary"
// // // // //                   checked={isItemSelected}
// // // // //                   inputProps={{
// // // // //                     'aria-labelledby': labelId,
// // // // //                   }}
// // // // //                 /> */}
// // // // //                                       </TableCell>
// // // // //                                       {/* <TableCell align="center">{row.emailOfSpeaker}</TableCell> */}
// // // // //                                       <TableCell align="center">{row.amountOfMeetingsInCourse}</TableCell>   
// // // // //                                        <TableCell align="center">{row.dayOfCourse}</TableCell> 
// // // // //                                        <TableCell align="center">{row.amountOfStudentsInCourse}</TableCell>                                                           
// // // // //                                       <TableCell
// // // // //                                       align='center'
// // // // //                                         //   component="th"
// // // // //                                         //   id={labelId}
// // // // //                                         //   scope="row"
// // // // //                                         //   padding="none"
// // // // //                                       >
// // // // //                                           {row.nameOfCourse}
// // // // //                                       </TableCell>
// // // // //                                       {/* <TableCell align="right">{row.protein}</TableCell> */}
// // // // //                                   </TableRow>
// // // // //                               );
// // // // //                           })}
// // // // //                           {emptyRows > 0 && (
// // // // //                               <TableRow
// // // // //                                   style={{
// // // // //                                       height: (dense ? 33 : 53) * emptyRows,
// // // // //                                   }}
// // // // //                               >
// // // // //                                   <TableCell colSpan={6} />
// // // // //                               </TableRow>
// // // // //                           )}
// // // // //                       </TableBody>
// // // // //                   </Table>
// // // // //               </TableContainer>
// // // // //               <TablePagination
// // // // //                   rowsPerPageOptions={[5, 10, 25]}
// // // // //                   component="div"
// // // // //                   count={courses.length}
// // // // //                   rowsPerPage={rowsPerPage}
// // // // //                   page={page}
// // // // //                   onPageChange={handleChangePage}
// // // // //                   onRowsPerPageChange={handleChangeRowsPerPage} />
// // // // //           </Paper>
// // // // //           <FormControlLabel
// // // // //               control={<Switch checked={dense} onChange={handleChangeDense} />}
// // // // //             //   label="Dense padding"
// // // // //                />
// // // // //       </Box></>
// // // // //   );}
// // // // import * as React from 'react';
// // // // import PropTypes from 'prop-types';
// // // // import { alpha } from '@mui/material/styles';
// // // // import Box from '@mui/material/Box';
// // // // import Table from '@mui/material/Table';
// // // // import TableBody from '@mui/material/TableBody';
// // // // import TableCell from '@mui/material/TableCell';
// // // // import TableContainer from '@mui/material/TableContainer';
// // // // import TableHead from '@mui/material/TableHead';
// // // // import TablePagination from '@mui/material/TablePagination';
// // // // import TableRow from '@mui/material/TableRow';
// // // // import TableSortLabel from '@mui/material/TableSortLabel';
// // // // import Toolbar from '@mui/material/Toolbar';
// // // // import Typography from '@mui/material/Typography';
// // // // import Paper from '@mui/material/Paper';
// // // // import Checkbox from '@mui/material/Checkbox';
// // // // import IconButton from '@mui/material/IconButton';
// // // // import Tooltip from '@mui/material/Tooltip';
// // // // import FormControlLabel from '@mui/material/FormControlLabel';
// // // // import Switch from '@mui/material/Switch';
// // // // import DeleteIcon from '@mui/icons-material/Delete';
// // // // import FilterListIcon from '@mui/icons-material/FilterList';
// // // // import { visuallyHidden } from '@mui/utils';
// // // // import { useDispatch } from 'react-redux';
// // // // import { useSelector } from 'react-redux';
// // // // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';

// // // // function descendingComparator(a, b, orderBy) {
// // // //   if (b[orderBy] < a[orderBy]) {
// // // //     return -1;
// // // //   }
// // // //   if (b[orderBy] > a[orderBy]) {
// // // //     return 1;
// // // //   }
// // // //   return 0;
// // // // }

// // // // function getComparator(order, orderBy) {
// // // //   return order === 'desc'
// // // //     ? (a, b) => descendingComparator(a, b, orderBy)
// // // //     : (a, b) => -descendingComparator(a, b, orderBy);
// // // // }

// // // // // מיפוי שמות העמודות למאפיינים בנתונים
// // // // const headCells = [
// // // //   {
// // // //     id: 'amountOfMeetingsInCourse',
// // // //     numeric: true,
// // // //     disablePadding: false,
// // // //     label: 'מספר מפגשים',
// // // //   },
// // // //   {
// // // //     id: 'dayOfCourse',
// // // //     numeric: false,
// // // //     disablePadding: false,
// // // //     label: 'יום',
// // // //   },
// // // //   {
// // // //     id: 'amountOfStudentsInCourse',
// // // //     numeric: true,
// // // //     disablePadding: false,
// // // //     label: 'מספר משתתפים',
// // // //   },
// // // //   {
// // // //     id: 'nameOfCourse',
// // // //     numeric: false,
// // // //     disablePadding: false,
// // // //     label: 'שם',
// // // //   },
// // // // ];

// // // // function EnhancedTableHead(props) {
// // // //   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  
// // // //   const createSortHandler = (property) => (event) => {
// // // //     onRequestSort(event, property);
// // // //   };

// // // //   return (
// // // //     <TableHead>
// // // //       <TableRow>
// // // //         <TableCell padding="checkbox">
// // // //           {/* <Checkbox
// // // //             color="primary"
// // // //             indeterminate={numSelected > 0 && numSelected < rowCount}
// // // //             checked={rowCount > 0 && numSelected === rowCount}
// // // //             onChange={onSelectAllClick}
// // // //             inputProps={{
// // // //               'aria-label': 'select all desserts',
// // // //             }}
// // // //           /> */}
// // // //         </TableCell>
// // // //         {headCells.map((headCell) => (
// // // //           <TableCell
// // // //             key={headCell.id}
// // // //             align='center'
// // // //             padding='none'
// // // //             sortDirection={orderBy === headCell.id ? order : false}
// // // //           >
// // // //             <TableSortLabel
// // // //               active={orderBy === headCell.id}
// // // //               direction={orderBy === headCell.id ? order : 'asc'}
// // // //               onClick={createSortHandler(headCell.id)}
// // // //             >
// // // //               {headCell.label}
// // // //               {orderBy === headCell.id ? (
// // // //                 <Box component="span" sx={visuallyHidden}>
// // // //                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
// // // //                 </Box>
// // // //               ) : null}
// // // //             </TableSortLabel>
// // // //           </TableCell>
// // // //         ))}
// // // //       </TableRow>
// // // //     </TableHead>
// // // //   );
// // // // }

// // // // EnhancedTableHead.propTypes = {
// // // //   numSelected: PropTypes.number.isRequired,
// // // //   onRequestSort: PropTypes.func.isRequired,
// // // //   onSelectAllClick: PropTypes.func.isRequired,
// // // //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
// // // //   orderBy: PropTypes.string.isRequired,
// // // //   rowCount: PropTypes.number.isRequired,
// // // // };

// // // // function EnhancedTableToolbar(props) {
// // // //   const { numSelected } = props;

// // // //   return (
// // // //     <Toolbar
// // // //       sx={{
// // // //         pl: { sm: 2 },
// // // //         pr: { xs: 1, sm: 1 },
// // // //         ...(numSelected > 0 && {
// // // //           bgcolor: (theme) =>
// // // //             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
// // // //         }),
// // // //       }}
// // // //     >
// // // //       {numSelected > 0 ? (
// // // //         <Typography
// // // //           sx={{ flex: '1 1 100%' }}
// // // //           color="inherit"
// // // //           variant="subtitle1"
// // // //           component="div"
// // // //         >
// // // //           {numSelected} נבחרו
// // // //         </Typography>
// // // //       ) : (
// // // //         <Typography
// // // //           sx={{ flex: '1 1 100%' }}
// // // //           variant="h6"
// // // //           id="tableTitle"
// // // //           component="div"
// // // //         >
// // // //           רשימת קורסים
// // // //         </Typography>
// // // //       )}

// // // //       {numSelected > 0 ? (
// // // //         <Tooltip title="מחק">
// // // //           <IconButton>
// // // //             <DeleteIcon />
// // // //           </IconButton>
// // // //         </Tooltip>
// // // //       ) : (
// // // //         <Tooltip title="סנן רשימה">
// // // //           <IconButton>
// // // //             <FilterListIcon />
// // // //           </IconButton>
// // // //         </Tooltip>
// // // //       )}
// // // //     </Toolbar>
// // // //   );
// // // // }

// // // // EnhancedTableToolbar.propTypes = {
// // // //   numSelected: PropTypes.number.isRequired,
// // // // };

// // // // export default function TableCourse() {
// // // //   const dispatch = useDispatch();
// // // //   const courses = useSelector(state => state.courses.courses || []);
  
// // // //   const [order, setOrder] = React.useState('asc');
// // // //   const [orderBy, setOrderBy] = React.useState('nameOfCourse');
// // // //   const [selected, setSelected] = React.useState([]);
// // // //   const [page, setPage] = React.useState(0);
// // // //   const [dense, setDense] = React.useState(false);
// // // //   const [rowsPerPage, setRowsPerPage] = React.useState(5);

// // // //   React.useEffect(() => {
// // // //     dispatch(getCoursesThunk());
// // // //   }, [dispatch]);

// // // //   const handleRequestSort = (event, property) => {
// // // //     const isAsc = orderBy === property && order === 'asc';
// // // //     setOrder(isAsc ? 'desc' : 'asc');
// // // //     setOrderBy(property);
// // // //   };

// // // //   const handleSelectAllClick = (event) => {
// // // //     if (event.target.checked) {
// // // //       const newSelected = courses.map((n) => n.idOfCourse);
// // // //       setSelected(newSelected);
// // // //       return;
// // // //     }
// // // //     setSelected([]);
// // // //   };

// // // //   const handleClick = (event, id) => {
// // // //     const selectedIndex = selected.indexOf(id);
// // // //     let newSelected = [];

// // // //     if (selectedIndex === -1) {
// // // //       newSelected = newSelected.concat(selected, id);
// // // //     } else if (selectedIndex === 0) {
// // // //       newSelected = newSelected.concat(selected.slice(1));
// // // //     } else if (selectedIndex === selected.length - 1) {
// // // //       newSelected = newSelected.concat(selected.slice(0, -1));
// // // //     } else if (selectedIndex > 0) {
// // // //       newSelected = newSelected.concat(
// // // //         selected.slice(0, selectedIndex),
// // // //         selected.slice(selectedIndex + 1),
// // // //       );
// // // //     }

// // // //     setSelected(newSelected);
// // // //   };

// // // //   const handleChangePage = (event, newPage) => {
// // // //     setPage(newPage);
// // // //   };

// // // //   const handleChangeRowsPerPage = (event) => {
// // // //     setRowsPerPage(parseInt(event.target.value, 10));
// // // //     setPage(0);
// // // //   };

// // // //   const handleChangeDense = (event) => {
// // // //     setDense(event.target.checked);
// // // //   };

// // // //   const isSelected = (id) => selected.indexOf(id) !== -1;

// // // //   // Avoid a layout jump when reaching the last page with empty rows.
// // // //   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - courses.length) : 0;

// // // //   // מיון ופגינציה של הנתונים
// // // //   const visibleRows = React.useMemo(() => {
// // // //     if (!courses || courses.length === 0) return [];
    
// // // //     return [...courses]
// // // //       .sort(getComparator(order, orderBy))
// // // //       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
// // // //   }, [order, orderBy, page, rowsPerPage, courses]);

// // // //   return (
// // // //     <Box sx={{ width: '100%' }}>
// // // //       <Paper sx={{ width: '100%', mb: 2 }}>
// // // //         <EnhancedTableToolbar numSelected={selected.length} />
// // // //         <TableContainer>
// // // //           <Table
// // // //             sx={{ minWidth: 750 }}
// // // //             aria-labelledby="tableTitle"
// // // //             size={dense ? 'small' : 'medium'}
// // // //           >
// // // //             <EnhancedTableHead
// // // //               numSelected={selected.length}
// // // //               order={order}
// // // //               orderBy={orderBy}
// // // //               onSelectAllClick={handleSelectAllClick}
// // // //               onRequestSort={handleRequestSort}
// // // //               rowCount={courses.length || 0}
// // // //             />
// // // //             <TableBody>
// // // //               {visibleRows.map((row, index) => {
// // // //                 const isItemSelected = isSelected(row.idOfCourse);
// // // //                 const labelId = `enhanced-table-checkbox-${index}`;

// // // //                 return (
// // // //                   <TableRow
// // // //                     hover
// // // //                     onClick={(event) => handleClick(event, row.idOfCourse)}
// // // //                     role="checkbox"
// // // //                     aria-checked={isItemSelected}
// // // //                     tabIndex={-1}
// // // //                     key={row.idOfCourse || index}
// // // //                     selected={isItemSelected}
// // // //                     sx={{ cursor: 'pointer' }}
// // // //                   >
// // // //                     <TableCell padding="checkbox">
// // // //                       {/* <Checkbox
// // // //                         color="primary"
// // // //                         checked={isItemSelected}
// // // //                         inputProps={{
// // // //                           'aria-labelledby': labelId,
// // // //                         }}
// // // //                       /> */}
// // // //                     </TableCell>
// // // //                     <TableCell align="center">{row.amountOfMeetingsInCourse}</TableCell>
// // // //                     <TableCell align="center">{row.dayOfCourse}</TableCell>
// // // //                     <TableCell align="center">{row.amountOfStudentsInCourse}</TableCell>
// // // //                     <TableCell
// // // //                       align="center"
// // // //                       component="th"
// // // //                       id={labelId}
// // // //                       scope="row"
// // // //                     >
// // // //                       {row.nameOfCourse}
// // // //                     </TableCell>
// // // //                   </TableRow>
// // // //                 );
// // // //               })}
// // // //               {emptyRows > 0 && (
// // // //                 <TableRow
// // // //                   style={{
// // // //                     height: (dense ? 33 : 53) * emptyRows,
// // // //                   }}
// // // //                 >
// // // //                   <TableCell colSpan={6} />
// // // //                 </TableRow>
// // // //               )}
// // // //             </TableBody>
// // // //           </Table>
// // // //         </TableContainer>
// // // //         <TablePagination
// // // //           rowsPerPageOptions={[5, 10, 25]}
// // // //           component="div"
// // // //           count={courses.length || 0}
// // // //           rowsPerPage={rowsPerPage}
// // // //           page={page}
// // // //           onPageChange={handleChangePage}
// // // //           onRowsPerPageChange={handleChangeRowsPerPage}
// // // //           labelRowsPerPage="שורות בעמוד:"
// // // //           labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
// // // //         />
// // // //       </Paper>
// // // //       <FormControlLabel
// // // //         control={<Switch checked={dense} onChange={handleChangeDense} />}
// // // //         label="תצוגה צפופה"
// // // //       />
// // // //     </Box>
// // // //   );
// // // // }
// // // import * as React from 'react';
// // // import PropTypes from 'prop-types';
// // // import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
// // // import Box from '@mui/material/Box';
// // // import Table from '@mui/material/Table';
// // // import TableBody from '@mui/material/TableBody';
// // // import TableCell from '@mui/material/TableCell';
// // // import TableContainer from '@mui/material/TableContainer';
// // // import TableHead from '@mui/material/TableHead';
// // // import TablePagination from '@mui/material/TablePagination';
// // // import TableRow from '@mui/material/TableRow';
// // // import TableSortLabel from '@mui/material/TableSortLabel';
// // // import Toolbar from '@mui/material/Toolbar';
// // // import Typography from '@mui/material/Typography';
// // // import Paper from '@mui/material/Paper';
// // // import IconButton from '@mui/material/IconButton';
// // // import Tooltip from '@mui/material/Tooltip';
// // // import FormControlLabel from '@mui/material/FormControlLabel';
// // // import Switch from '@mui/material/Switch';
// // // import FilterListIcon from '@mui/icons-material/FilterList';
// // // import { visuallyHidden } from '@mui/utils';
// // // import { useDispatch } from 'react-redux';
// // // import { useSelector } from 'react-redux';
// // // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// // // import rtlPlugin from 'stylis-plugin-rtl';
// // // import { CacheProvider } from '@emotion/react';
// // // import createCache from '@emotion/cache';
// // // import PrintIcon from '@mui/icons-material/Print';
// // // import Button from '@mui/material/Button';
// // // import jsPDF from 'jspdf';
// // // import 'jspdf-autotable';

// // // // RTL הגדרות
// // // const rtlTheme = createTheme({
// // //   direction: 'rtl',
// // // });

// // // // RTL cache
// // // const cacheRtl = createCache({
// // //   key: 'muirtl',
// // //   stylisPlugins: [rtlPlugin],
// // // });

// // // function descendingComparator(a, b, orderBy) {
// // //   if (b[orderBy] < a[orderBy]) {
// // //     return -1;
// // //   }
// // //   if (b[orderBy] > a[orderBy]) {
// // //     return 1;
// // //   }
// // //   return 0;
// // // }

// // // function getComparator(order, orderBy) {
// // //   return order === 'desc'
// // //     ? (a, b) => descendingComparator(a, b, orderBy)
// // //     : (a, b) => -descendingComparator(a, b, orderBy);
// // // }

// // // // מיפוי שמות העמודות למאפיינים בנתונים
// // // const headCells = [
// // //   {
// // //     id: 'amountOfMeetingsInCourse',
// // //     numeric: true,
// // //     disablePadding: false,
// // //     label: 'מספר מפגשים',
// // //   },
// // //   {
// // //     id: 'dayOfCourse',
// // //     numeric: false,
// // //     disablePadding: false,
// // //     label: 'יום',
// // //   },
// // //   {
// // //     id: 'amountOfStudentsInCourse',
// // //     numeric: true,
// // //     disablePadding: false,
// // //     label: 'מספר משתתפים',
// // //   },
// // //   {
// // //     id: 'nameOfCourse',
// // //     numeric: false,
// // //     disablePadding: false,
// // //     label: 'שם',
// // //   },
// // // ];

// // // function EnhancedTableHead(props) {
// // //   const { order, orderBy, onRequestSort } = props;
  
// // //   const createSortHandler = (property) => (event) => {
// // //     onRequestSort(event, property);
// // //   };

// // //   return (
// // //     <TableHead>
// // //       <TableRow>
// // //         {headCells.map((headCell) => (
// // //           <TableCell
// // //             key={headCell.id}
// // //             align='center'
// // //             padding='normal'
// // //             sortDirection={orderBy === headCell.id ? order : false}
// // //           >
// // //             <TableSortLabel
// // //               active={orderBy === headCell.id}
// // //               direction={orderBy === headCell.id ? order : 'asc'}
// // //               onClick={createSortHandler(headCell.id)}
// // //             >
// // //               {headCell.label}
// // //               {orderBy === headCell.id ? (
// // //                 <Box component="span" sx={visuallyHidden}>
// // //                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
// // //                 </Box>
// // //               ) : null}
// // //             </TableSortLabel>
// // //           </TableCell>
// // //         ))}
// // //       </TableRow>
// // //     </TableHead>
// // //   );
// // // }

// // // EnhancedTableHead.propTypes = {
// // //   onRequestSort: PropTypes.func.isRequired,
// // //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
// // //   orderBy: PropTypes.string.isRequired,
// // //   rowCount: PropTypes.number.isRequired,
// // // };

// // // function EnhancedTableToolbar(props) {
// // //   const { onPrintPDF } = props;

// // //   return (
// // //     <Toolbar
// // //       sx={{
// // //         pl: { sm: 2 },
// // //         pr: { xs: 1, sm: 1 },
// // //         display: 'flex',
// // //         justifyContent: 'space-between'
// // //       }}
// // //     >
// // //       <Typography
// // //         sx={{ flex: '1 1 100%' }}
// // //         variant="h6"
// // //         id="tableTitle"
// // //         component="div"
// // //       >
// // //         רשימת קורסים
// // //       </Typography>

// // //       <Box sx={{ display: 'flex' }}>
// // //         <Tooltip title="הדפסה ל-PDF">
// // //           <Button 
// // //             variant="contained" 
// // //             color="primary" 
// // //             startIcon={<PrintIcon />}
// // //             onClick={onPrintPDF}
// // //             sx={{ ml: 1 }}
// // //           >
// // //             הדפס
// // //           </Button>
// // //         </Tooltip>
// // //         <Tooltip title="סנן רשימה">
// // //           <IconButton>
// // //             <FilterListIcon />
// // //           </IconButton>
// // //         </Tooltip>
// // //       </Box>
// // //     </Toolbar>
// // //   );
// // // }

// // // EnhancedTableToolbar.propTypes = {
// // //   onPrintPDF: PropTypes.func.isRequired,
// // // };

// // // export default function TableCourse() {
// // //   const dispatch = useDispatch();
// // //   const courses = useSelector(state => state.courses.courses || []);
  
// // //   const [order, setOrder] = React.useState('asc');
// // //   const [orderBy, setOrderBy] = React.useState('nameOfCourse');
// // //   const [page, setPage] = React.useState(0);
// // //   const [dense, setDense] = React.useState(false);
// // //   const [rowsPerPage, setRowsPerPage] = React.useState(5);

// // //   React.useEffect(() => {
// // //     dispatch(getCoursesThunk());
// // //   }, [dispatch]);

// // //   const handleRequestSort = (event, property) => {
// // //     const isAsc = orderBy === property && order === 'asc';
// // //     setOrder(isAsc ? 'desc' : 'asc');
// // //     setOrderBy(property);
// // //   };

// // //   const handleChangePage = (event, newPage) => {
// // //     setPage(newPage);
// // //   };

// // //   const handleChangeRowsPerPage = (event) => {
// // //     setRowsPerPage(parseInt(event.target.value, 10));
// // //     setPage(0);
// // //   };

// // //   const handleChangeDense = (event) => {
// // //     setDense(event.target.checked);
// // //   };

// // //   // פונקציה ליצוא PDF
// // //   const handlePrintPDF = () => {
// // //     const doc = new jsPDF('l', 'mm', 'a4'); // landscape orientation
    
// // //     // הוספת כותרת
// // //     doc.setFont("helvetica", "bold");
// // //     doc.setFontSize(18);
// // //     doc.text("רשימת קורסים", doc.internal.pageSize.width / 2, 15, { align: 'center' });
    
// // //     // הכנת נתונים לטבלה
// // //     const tableColumn = headCells.map(cell => cell.label);
// // //     const tableRows = courses.map(course => [
// // //       course.amountOfMeetingsInCourse,
// // //       course.dayOfCourse,
// // //       course.amountOfStudentsInCourse,
// // //       course.nameOfCourse
// // //     ]);
    
// // //     // יצירת טבלה
// // //     doc.autoTable({
// // //       head: [tableColumn],
// // //       body: tableRows,
// // //       startY: 25,
// // //       styles: { halign: 'center', font: 'helvetica' },
// // //       headStyles: { fillColor: [66, 139, 202] },
// // //       alternateRowStyles: { fillColor: [240, 240, 240] },
// // //       margin: { top: 20 },
// // //       theme: 'grid'
// // //     });
    
// // //     // שמירת הקובץ
// // //     doc.save("courses_list.pdf");
// // //   };

// // //   // Avoid a layout jump when reaching the last page with empty rows.
// // //   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - courses.length) : 0;

// // //   // מיון ופגינציה של הנתונים
// // //   const visibleRows = React.useMemo(() => {
// // //     if (!courses || courses.length === 0) return [];
    
// // //     return [...courses]
// // //       .sort(getComparator(order, orderBy))
// // //       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
// // //   }, [order, orderBy, page, rowsPerPage, courses]);

// // //   return (
// // //     <CacheProvider value={cacheRtl}>
// // //       <ThemeProvider theme={rtlTheme}>
// // //         <Box sx={{ width: '100%' }} dir="rtl">
// // //           <Paper sx={{ width: '100%', mb: 2 }}>
// // //             <EnhancedTableToolbar onPrintPDF={handlePrintPDF} />
// // //             <TableContainer>
// // //               <Table
// // //                 sx={{ minWidth: 750 }}
// // //                 aria-labelledby="tableTitle"
// // //                 size={dense ? 'small' : 'medium'}
// // //               >
// // //                 <EnhancedTableHead
// // //                   order={order}
// // //                   orderBy={orderBy}
// // //                   onRequestSort={handleRequestSort}
// // //                   rowCount={courses.length || 0}
// // //                 />
// // //                 <TableBody>
// // //                   {visibleRows.map((row, index) => {
// // //                     return (
// // //                       <TableRow
// // //                         hover
// // //                         tabIndex={-1}
// // //                         key={row.idOfCourse || index}
// // //                       >
// // //                         <TableCell align="center">{row.amountOfMeetingsInCourse}</TableCell>
// // //                         <TableCell align="center">{row.dayOfCourse}</TableCell>
// // //                         <TableCell align="center">{row.amountOfStudentsInCourse}</TableCell>
// // //                         <TableCell align="center">{row.nameOfCourse}</TableCell>
// // //                       </TableRow>
// // //                     );
// // //                   })}
// // //                   {emptyRows > 0 && (
// // //                     <TableRow
// // //                       style={{
// // //                         height: (dense ? 33 : 53) * emptyRows,
// // //                       }}
// // //                     >
// // //                       <TableCell colSpan={4} />
// // //                     </TableRow>
// // //                   )}
// // //                 </TableBody>
// // //               </Table>
// // //             </TableContainer>
// // //             <TablePagination
// // //               rowsPerPageOptions={[5, 10, 25]}
// // //               component="div"
// // //               count={courses.length || 0}
// // //               rowsPerPage={rowsPerPage}
// // //               page={page}
// // //               onPageChange={handleChangePage}
// // //               onRowsPerPageChange={handleChangeRowsPerPage}
// // //               labelRowsPerPage="שורות בעמוד:"
// // //               labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
// // //             />
// // //           </Paper>
// // //           <FormControlLabel
// // //             control={<Switch checked={dense} onChange={handleChangeDense} />}
// // //             label="תצוגה צפופה"
// // //           />
// // //         </Box>
// // //       </ThemeProvider>
// // //     </CacheProvider>
// // //   );
// // // }
// // import * as React from 'react';
// // import PropTypes from 'prop-types';
// // import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TablePagination from '@mui/material/TablePagination';
// // import TableRow from '@mui/material/TableRow';
// // import TableSortLabel from '@mui/material/TableSortLabel';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Paper from '@mui/material/Paper';
// // import IconButton from '@mui/material/IconButton';
// // import Tooltip from '@mui/material/Tooltip';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Switch from '@mui/material/Switch';
// // import FilterListIcon from '@mui/icons-material/FilterList';
// // import { visuallyHidden } from '@mui/utils';
// // import { useDispatch } from 'react-redux';
// // import { useSelector } from 'react-redux';
// // import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// // import rtlPlugin from 'stylis-plugin-rtl';
// // import { CacheProvider } from '@emotion/react';
// // import createCache from '@emotion/cache';
// // import PrintIcon from '@mui/icons-material/Print';
// // import Button from '@mui/material/Button';
// // import { jsPDF } from 'jspdf';
// // import 'jspdf-autotable';

// // // RTL הגדרות
// // const rtlTheme = createTheme({
// //   direction: 'rtl',
// // });

// // // RTL cache
// // const cacheRtl = createCache({
// //   key: 'muirtl',
// //   stylisPlugins: [rtlPlugin],
// // });

// // function descendingComparator(a, b, orderBy) {
// //   if (b[orderBy] < a[orderBy]) {
// //     return -1;
// //   }
// //   if (b[orderBy] > a[orderBy]) {
// //     return 1;
// //   }
// //   return 0;
// // }

// // function getComparator(order, orderBy) {
// //   return order === 'desc'
// //     ? (a, b) => descendingComparator(a, b, orderBy)
// //     : (a, b) => -descendingComparator(a, b, orderBy);
// // }

// // // מיפוי שמות העמודות למאפיינים בנתונים
// // const headCells = [
// //   {
// //     id: 'amountOfMeetingsInCourse',
// //     numeric: true,
// //     disablePadding: false,
// //     label: 'מספר מפגשים',
// //   },
// //   {
// //     id: 'dayOfCourse',
// //     numeric: false,
// //     disablePadding: false,
// //     label: 'יום',
// //   },
// //   {
// //     id: 'amountOfStudentsInCourse',
// //     numeric: true,
// //     disablePadding: false,
// //     label: 'מספר משתתפים',
// //   },
// //   {
// //     id: 'nameOfCourse',
// //     numeric: false,
// //     disablePadding: false,
// //     label: 'שם',
// //   },
// // ];

// // function EnhancedTableHead(props) {
// //   const { order, orderBy, onRequestSort } = props;
  
// //   const createSortHandler = (property) => (event) => {
// //     onRequestSort(event, property);
// //   };

// //   return (
// //     <TableHead>
// //       <TableRow>
// //         {headCells.map((headCell) => (
// //           <TableCell
// //             key={headCell.id}
// //             align='center'
// //             padding='normal'
// //             sortDirection={orderBy === headCell.id ? order : false}
// //           >
// //             <TableSortLabel
// //               active={orderBy === headCell.id}
// //               direction={orderBy === headCell.id ? order : 'asc'}
// //               onClick={createSortHandler(headCell.id)}
// //             >
// //               {headCell.label}
// //               {orderBy === headCell.id ? (
// //                 <Box component="span" sx={visuallyHidden}>
// //                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
// //                 </Box>
// //               ) : null}
// //             </TableSortLabel>
// //           </TableCell>
// //         ))}
// //       </TableRow>
// //     </TableHead>
// //   );
// // }

// // EnhancedTableHead.propTypes = {
// //   onRequestSort: PropTypes.func.isRequired,
// //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
// //   orderBy: PropTypes.string.isRequired,
// //   rowCount: PropTypes.number.isRequired,
// // };

// // function EnhancedTableToolbar(props) {
// //   const { onPrintPDF } = props;

// //   return (
// //     <Toolbar
// //       sx={{
// //         pl: { sm: 2 },
// //         pr: { xs: 1, sm: 1 },
// //         display: 'flex',
// //         justifyContent: 'space-between'
// //       }}
// //     >
// //       <Typography
// //         sx={{ flex: '1 1 100%' }}
// //         variant="h6"
// //         id="tableTitle"
// //         component="div"
// //       >
// //         רשימת קורסים
// //       </Typography>

// //       <Box sx={{ display: 'flex' }}>
// //         <Tooltip title="הדפסה ל-PDF">
// //           <Button 
// //             variant="contained" 
// //             color="primary" 
// //             startIcon={<PrintIcon />}
// //             onClick={onPrintPDF}
// //             sx={{ ml: 1 }}
// //           >
// //             הדפס
// //           </Button>
// //         </Tooltip>
// //         <Tooltip title="סנן רשימה">
// //           <IconButton>
// //             <FilterListIcon />
// //           </IconButton>
// //         </Tooltip>
// //       </Box>
// //     </Toolbar>
// //   );
// // }

// // EnhancedTableToolbar.propTypes = {
// //   onPrintPDF: PropTypes.func.isRequired,
// // };

// // export default function TableCourse() {
// //   const dispatch = useDispatch();
// //   const courses = useSelector(state => state.courses.courses || []);
  
// //   const [order, setOrder] = React.useState('asc');
// //   const [orderBy, setOrderBy] = React.useState('nameOfCourse');
// //   const [page, setPage] = React.useState(0);
// //   const [dense, setDense] = React.useState(false);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(5);

// //   React.useEffect(() => {
// //     dispatch(getCoursesThunk());
// //   }, [dispatch]);

// //   const handleRequestSort = (event, property) => {
// //     const isAsc = orderBy === property && order === 'asc';
// //     setOrder(isAsc ? 'desc' : 'asc');
// //     setOrderBy(property);
// //   };

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(parseInt(event.target.value, 10));
// //     setPage(0);
// //   };

// //   const handleChangeDense = (event) => {
// //     setDense(event.target.checked);
// //   };

// //   // פונקציה ליצוא PDF
// //   const handlePrintPDF = () => {
// //     try {
// //       const doc = new jsPDF('l', 'mm', 'a4'); // landscape orientation
      
// //       // הוספת כותרת
// //       doc.setFont("helvetica", "bold");
// //       doc.setFontSize(18);
// //       doc.text("רשימת קורסים", doc.internal.pageSize.width / 2, 15, { align: 'center' });
      
// //       // הכנת נתונים לטבלה
// //       const tableColumn = headCells.map(cell => cell.label);
// //       const tableRows = courses.map(course => [
// //         course.amountOfMeetingsInCourse,
// //         course.dayOfCourse,
// //         course.amountOfStudentsInCourse,
// //         course.nameOfCourse
// //       ]);
      
// //       // יצירת טבלה
// //       doc.autoTable({
// //         head: [tableColumn],
// //         body: tableRows,
// //         startY: 25,
// //         styles: { halign: 'center', font: 'helvetica' },
// //         headStyles: { fillColor: [66, 139, 202] },
// //         alternateRowStyles: { fillColor: [240, 240, 240] },
// //         margin: { top: 20 },
// //         theme: 'grid'
// //       });
      
// //       // שמירת הקובץ
// //       doc.save("courses_list.pdf");
// //     } catch (error) {
// //       console.error("Error generating PDF:", error);
// //       alert("אירעה שגיאה בייצוא ה-PDF. אנא נסה שוב מאוחר יותר.");
// //     }
// //   };

// //   // Avoid a layout jump when reaching the last page with empty rows.
// //   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - courses.length) : 0;

// //   // מיון ופגינציה של הנתונים
// //   const visibleRows = React.useMemo(() => {
// //     if (!courses || courses.length === 0) return [];
    
// //     return [...courses]
// //       .sort(getComparator(order, orderBy))
// //       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
// //   }, [order, orderBy, page, rowsPerPage, courses]);

// //   return (
// //     <CacheProvider value={cacheRtl}>
// //       <ThemeProvider theme={rtlTheme}>
// //         <Box sx={{ width: '100%' }} dir="rtl">
// //           <Paper sx={{ width: '100%', mb: 2 }}>
// //             <EnhancedTableToolbar onPrintPDF={handlePrintPDF} />
// //             <TableContainer>
// //               <Table
// //                 sx={{ minWidth: 750 }}
// //                 aria-labelledby="tableTitle"
// //                 size={dense ? 'small' : 'medium'}
// //               >
// //                 <EnhancedTableHead
// //                   order={order}
// //                   orderBy={orderBy}
// //                   onRequestSort={handleRequestSort}
// //                   rowCount={courses.length || 0}
// //                 />
// //                 <TableBody>
// //                   {visibleRows.map((row, index) => {
// //                     return (
// //                       <TableRow
// //                         hover
// //                         tabIndex={-1}
// //                         key={row.idOfCourse || index}
// //                       >
// //                         <TableCell align="center">{row.amountOfMeetingsInCourse}</TableCell>
// //                         <TableCell align="center">{row.dayOfCourse}</TableCell>
// //                         <TableCell align="center">{row.amountOfStudentsInCourse}</TableCell>
// //                         <TableCell align="center">{row.nameOfCourse}</TableCell>
// //                       </TableRow>
// //                     );
// //                   })}
// //                   {emptyRows > 0 && (
// //                     <TableRow
// //                       style={{
// //                         height: (dense ? 33 : 53) * emptyRows,
// //                       }}
// //                     >
// //                       <TableCell colSpan={4} />
// //                     </TableRow>
// //                   )}
// //                 </TableBody>
// //               </Table>
// //             </TableContainer>
// //             <TablePagination
// //               rowsPerPageOptions={[5, 10, 25]}
// //               component="div"
// //               count={courses.length || 0}
// //               rowsPerPage={rowsPerPage}
// //               page={page}
// //               onPageChange={handleChangePage}
// //               onRowsPerPageChange={handleChangeRowsPerPage}
// //               labelRowsPerPage="שורות בעמוד:"
// //               labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
// //             />
// //           </Paper>
// //           <FormControlLabel
// //             control={<Switch checked={dense} onChange={handleChangeDense} />}
// //             label="תצוגה צפופה"
// //           />
// //         </Box>
// //       </ThemeProvider>
// //     </CacheProvider>
// //   );
// // }
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
// import rtlPlugin from 'stylis-plugin-rtl';
// import { CacheProvider } from '@emotion/react';
// import createCache from '@emotion/cache';
// import PrintIcon from '@mui/icons-material/Print';
// import Button from '@mui/material/Button';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
// import autoTable from 'jspdf-autotable';

// // RTL הגדרות
// const rtlTheme = createTheme({
//   direction: 'rtl',
// });

// // RTL cache
// const cacheRtl = createCache({
//   key: 'muirtl',
//   stylisPlugins: [rtlPlugin],
// });

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // מיפוי שמות העמודות למאפיינים בנתונים
// const headCells = [
//   {
//     id: 'nameOfCourse',
//     numeric: false,
//     disablePadding: false,
//     label: 'שם',
//   },
//   {
//     id: 'amountOfStudentsInCourse',
//     numeric: true,
//     disablePadding: false,
//     label: 'מספר משתתפים',
//   },
//   {
//     id: 'dayOfCourse',
//     numeric: false,
//     disablePadding: false,
//     label: 'יום',
//   },
//   {
//     id: 'amountOfMeetingsInCourse',
//     numeric: true,
//     disablePadding: false,
//     label: 'מספר מפגשים',
//   },
// ];

// function EnhancedTableHead(props) {
//   const { order, orderBy, onRequestSort } = props;
  
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align='center'
//             padding='normal'
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   onRequestSort: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// function EnhancedTableToolbar(props) {
//   const { onPrintPDF } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         display: 'flex',
//         justifyContent: 'space-between'
//       }}
//     >
//       <Typography
//         sx={{ flex: '1 1 100%' }}
//         variant="h6"
//         id="tableTitle"
//         component="div"
//       >
//         רשימת קורסים
//       </Typography>

//       <Box sx={{ display: 'flex' }}>
//         <Tooltip title="הדפסה ל-PDF">
//           <Button 
//             variant="contained" 
//             color="primary" 
//             startIcon={<PrintIcon />}
//             onClick={onPrintPDF}
//             sx={{ ml: 1 }}
//           >
//             הדפס
//           </Button>
//         </Tooltip>
//         <Tooltip title="סנן רשימה">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       </Box>
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   onPrintPDF: PropTypes.func.isRequired,
// };

// export default function TableCourse() {
//   const dispatch = useDispatch();
//   const courses = useSelector(state => state.courses.courses || []);
  
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('nameOfCourse');
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   React.useEffect(() => {
//     dispatch(getCoursesThunk());
//   }, [dispatch]);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   // פונקציה ליצוא PDF
//   const handlePrintPDF = () => {
//     try {
//       // יצירת מסמך PDF חדש
//       const doc = new jsPDF();
      
//       // הוספת כותרת
//       doc.setFont("helvetica", "bold");
//       doc.setFontSize(16);
//       doc.text("רשימת קורסים", 105, 15, { align: 'center' });
      
//       // הכנת נתונים לטבלה
//       const tableColumn = ["מספר מפגשים", "יום", "מספר משתתפים", "שם"];
//       const tableRows = courses.map(course => [
//         course.amountOfMeetingsInCourse,
//         course.dayOfCourse,
//         course.amountOfStudentsInCourse,
//         course.nameOfCourse
//       ]);
      
//       // הגדרת אפשרויות לטבלה
//       const options = {
//         startY: 25,
//         head: [tableColumn],
//         body: tableRows,
//         headStyles: { fillColor: [41, 128, 185], textColor: 255 },
//         bodyStyles: { textColor: 0 },
//         alternateRowStyles: { fillColor: [240, 240, 240] },
//         styles: { 
//           halign: 'center', 
//           valign: 'middle',
//           fontSize: 10,
//           cellPadding: 3
//         },
//         margin: { top: 20 },
//         didDrawPage: function(data) {
//           // הוספת מספר עמוד
//           doc.setFontSize(10);
//           doc.text('עמוד ' + doc.internal.getNumberOfPages(), 
//             doc.internal.pageSize.width / 2, 
//             doc.internal.pageSize.height - 10, 
//             { align: 'center' }
//           );
//         }
//       };
      
//       // יצירת הטבלה
//       doc.autoTable(options);
      
//       // שמירת הקובץ
//       doc.save("courses_list.pdf");
      
//       console.log("PDF generated successfully");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       alert("אירעה שגיאה בייצוא ה-PDF. אנא נסה שוב מאוחר יותר.");
//     }
//   };

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - courses.length) : 0;

//   // מיון ופגינציה של הנתונים
//   const visibleRows = React.useMemo(() => {
//     if (!courses || courses.length === 0) return [];
    
//     return [...courses]
//       .sort(getComparator(order, orderBy))
//       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
//   }, [order, orderBy, page, rowsPerPage, courses]);

//   return (
//     <CacheProvider value={cacheRtl}>
//       <ThemeProvider theme={rtlTheme}>
//         <Box sx={{ width: '100%' }} dir="rtl">
//           <Paper sx={{ width: '100%', mb: 2 }}>
//             <EnhancedTableToolbar onPrintPDF={handlePrintPDF} />
//             <TableContainer>
//               <Table
//                 sx={{ minWidth: 750 }}
//                 aria-labelledby="tableTitle"
//                 size={dense ? 'small' : 'medium'}
//               >
//                 <EnhancedTableHead
//                   order={order}
//                   orderBy={orderBy}
//                   onRequestSort={handleRequestSort}
//                   rowCount={courses.length || 0}
//                 />
//                 <TableBody>
//                   {visibleRows.map((row, index) => {
//                     return (
//                       <TableRow
//                         hover
//                         tabIndex={-1}
//                         key={row.idOfCourse || index}
//                       >
//                         <TableCell align="center">{row.nameOfCourse}</TableCell>
//                         <TableCell align="center">{row.amountOfStudentsInCourse}</TableCell>
//                         <TableCell align="center">{row.dayOfCourse}</TableCell>
//                         <TableCell align="center">{row.amountOfMeetingsInCourse}</TableCell>
//                       </TableRow>
//                     );
//                   })}
//                   {emptyRows > 0 && (
//                     <TableRow
//                       style={{
//                         height: (dense ? 33 : 53) * emptyRows,
//                       }}
//                     >
//                       <TableCell colSpan={4} />
//                     </TableRow>
//                   )}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25]}
//               component="div"
//               count={courses.length || 0}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               labelRowsPerPage="שורות בעמוד:"
//               labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
//             />
//           </Paper>
//           <FormControlLabel
//             control={<Switch checked={dense} onChange={handleChangeDense} />}
//             label="תצוגה צפופה"
//           />
//         </Box>
//       </ThemeProvider>
//     </CacheProvider>
//   );
// }
import * as React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesThunk } from '../../redux/Thunks/getCoursesThunk';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import PrintIcon from '@mui/icons-material/Print';
import Button from '@mui/material/Button';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

// RTL הגדרות
const rtlTheme = createTheme({
  direction: 'rtl',
});

// RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// מיפוי שמות העמודות למאפיינים בנתונים
const headCells = [
  {
    id: 'nameOfCourse',
    numeric: false,
    disablePadding: false,
    label: 'שם',
  },
  {
    id: 'amountOfStudentsInCourse',
    numeric: true,
    disablePadding: false,
    label: 'מספר משתתפים',
  },
  {
    id: 'dayOfCourse',
    numeric: false,
    disablePadding: false,
    label: 'יום',
  },
  {
    id: 'amountOfMeetingsInCourse',
    numeric: true,
    disablePadding: false,
    label: 'מספר מפגשים',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            padding='normal'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  // const { onPrintPDF } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        רשימת קורסים
      </Typography>

      <Box sx={{ display: 'flex' }}>
        {/* <Tooltip title="הדפסה ל-PDF">
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<PrintIcon />}
            onClick={onPrintPDF}
            sx={{ ml: 1 }}
          >
            הדפס
          </Button>
        </Tooltip> */}
      </Box>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  onPrintPDF: PropTypes.func.isRequired,
};

export default function TableCourse() {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses || []);
  
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nameOfCourse');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    dispatch(getCoursesThunk());
  }, [dispatch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // פונקציה ליצוא PDF
  const handlePrintPDF = () => {
    try {
      const doc = new jsPDF();
      
      // הוספת כותרת
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("רשימת קורסים", 105, 15, { align: 'center' });
      
      // הכנת נתונים לטבלה
      const tableColumn = ["שם", "מספר משתתפים", "יום", "מספר מפגשים"];
      const tableRows = courses.map(course => [
        course.nameOfCourse,
        course.amountOfStudentsInCourse,
        course.dayOfCourse,
        course.amountOfMeetingsInCourse
      ]);
      
      // יצירת טבלה
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 25,
        styles: { halign: 'center', font: 'helvetica' },
        headStyles: { fillColor: [66, 139, 202] },
        alternateRowStyles: { fillColor: [240, 240, 240] },
        margin: { top: 20 },
        theme: 'grid'
      });
      
      // שמירת הקובץ
      doc.save("courses_list.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("אירעה שגיאה בייצוא ה-PDF. אנא נסה שוב מאוחר יותר.");
    }
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - courses.length) : 0;

  // מיון ופגינציה של הנתונים
  const visibleRows = React.useMemo(() => {
    if (!courses || courses.length === 0) return [];
    
    return [...courses]
      .sort(getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [order, orderBy, page, rowsPerPage, courses]);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <Box sx={{ width: '100%' }} dir="rtl">
          <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar onPrintPDF={handlePrintPDF} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
              >
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={courses.length || 0}
                />
                <TableBody>
                  {visibleRows.map((row, index) => {
                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={row.idOfCourse || index}
                      >
                        <TableCell align="center">{row.nameOfCourse}</TableCell>
                        <TableCell align="center">{row.amountOfStudentsInCourse}</TableCell>
                        <TableCell align="center">{row.dayOfCourse}</TableCell>
                        <TableCell align="center">{row.amountOfMeetingsInCourse}</TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={4} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={courses.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="שורות בעמוד:"
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="תצוגה צפופה"
          />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
