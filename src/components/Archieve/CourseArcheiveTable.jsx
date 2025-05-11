// import * as React from 'react';
// import PropTypes from 'prop-types';
// import './Archeive.css'
// import { alpha } from '@mui/material/styles';
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
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';
// import { useDispatch } from 'react-redux';
// import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
// import { useSelector } from 'react-redux';
// import { Routing } from '../Routing/Routing';
// import { getCourseArchieveThunk } from '../../redux/Thunks/getCourseArchieveThunk';
// import { CardHeader } from '@mui/material';



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

// const headCells = [
//       {
//     id: 'עלות',
//     numeric: false,
//     disablePadding: false,
//     label: 'עלות',
//   }, 
//    {
//     id: 'יום',
//     numeric: true,
//     disablePadding: false,
//     label: 'יום',
//   }, 
//    {
//     id: 'מספר משתתפות',
//     numeric: false,
//     disablePadding: false,
//     label: 'מספר משתתפות',
//   },
//   {
//     id: 'שם',
//     numeric: false,
//     disablePadding: false,
//     label: 'שם',
//   },
// ];

// function EnhancedTableHead(props) {

//     const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//       props;
//     const createSortHandler = (property) => (event) => {
//       onRequestSort(event, property);
//     };
//   const dispatch=useDispatch()
  
  
//   const getData=async()=>{
//     await dispatch(getCourseArchieveThunk())
//   }
//     React.useEffect(()=>{
//         getData()
//     },[])
   
    
  
 
    
//   return (
    
//     <TableHead>
//       <TableRow>
//         <TableCell >
         
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             sx={{color:'#ff1744',textShadow:" 1px 1px black",fontSize:"120%"
//                 // ,backgroundColor:"#ffebee"
//             }}
//             padding='none'
//            align='center'
            
//           >
           
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
          
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
    
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.string.isRequired,
// };

// function EnhancedTableToolbar(props) {
    
//   const { numSelected } = props;
//   return (
//     <Toolbar >
     
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export default function CourseArchieveTable() {
//  const students = useSelector(c => c.courses.courses)
//  const rows=students
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
    
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
    
//     if (event.target.checked) {
//       const newSelected = students.map((n) => n.id);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };
// //מיונים
//    const handleClick = (event, id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }
//     setSelected(newSelected);
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

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const visibleRows = React.useMemo(
//     () =>
//       [...rows]
//         .sort(getComparator(order, orderBy))
//         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
//     [order, orderBy, page, rowsPerPage],
//   );

//   return (
//     <><Box sx={{ width: '100%' }}>
//           <Paper sx={{ width: '100%', mb: 2 }}>
//               <EnhancedTableToolbar numSelected={selected.length} />
//               <TableContainer>
//                   <Table
//                       sx={{ minWidth: 750 }}
//                       aria-labelledby="tableTitle"
//                       size={dense ? 'small' : 'medium'}
//                   >
//                       <EnhancedTableHead
//                           numSelected={students.length}
//                           order={order}
//                           orderBy={orderBy}
//                           onSelectAllClick={handleSelectAllClick}
//                           onRequestSort={handleRequestSort}
//                           rowCount={rows.length} />
//                       <TableBody>
//                           {students.map((row, index) => {
//                               const isItemSelected = selected.includes(row.id);
//                               const labelId = `enhanced-table-checkbox-${index}`;

//                               return (
//                                   <TableRow
//                                       hover
//                                       role="checkbox"
//                                       aria-checked={isItemSelected}
//                                       tabIndex={-1}
//                                       key={row.id}
//                                       selected={isItemSelected}
//                                       sx={{ cursor: 'pointer' }}
//                                   >
//                                       <TableCell padding="checkbox">
//                                       </TableCell>
//                                       <TableCell align="center">{row.totalSumOfCourse}</TableCell>
//                                        <TableCell align="center">{row.dayOfCourse}</TableCell> 
//                                        <TableCell align="center">{row.amountOfStudentsInCourse}</TableCell>                                                           
//                                       <TableCell
//                                       align='center'
//                                       >
//                                           {row.nameOfCourse}
//                                       </TableCell>
//                                   </TableRow>
//                               );
//                           })}
//                           {emptyRows > 0 && (
//                               <TableRow
//                                   style={{
//                                       height: (dense ? 33 : 53) * emptyRows,
//                                   }}
//                               >
//                                   <TableCell colSpan={6} />
//                               </TableRow>
//                           )}
//                       </TableBody>
//                   </Table>
//               </TableContainer>
//               <TablePagination
//                   rowsPerPageOptions={[5, 10, 25]}
//                   component="div"
//                   count={students.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage} />
//           </Paper>
//           <FormControlLabel
//               control={<Switch checked={dense} onChange={handleChangeDense} />}
//                />
//       </Box></>
//   );}
import * as React from 'react';
import PropTypes from 'prop-types';
import './Archeive.css';
import { alpha } from '@mui/material/styles';
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
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseArchieveThunk } from '../../redux/Thunks/getCourseArchieveThunk';
import { CardHeader } from '@mui/material';

// Helper functions for sorting
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

// Table header cells configuration
const headCells = [
  {
    id: 'עלות',
    numeric: false,
    disablePadding: false,
    label: 'עלות',
  },
  {
    id: 'יום',
    numeric: true,
    disablePadding: false,
    label: 'יום',
  },
  {
    id: 'מספר משתתפות',
    numeric: false,
    disablePadding: false,
    label: 'מספר משתתפות',
  },
  {
    id: 'שם',
    numeric: false,
    disablePadding: false,
    label: 'שם',
  },
];

// Enhanced table header component
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const dispatch = useDispatch();
  
  const getData = async () => {
    await dispatch(getCourseArchieveThunk());
  };
  
  React.useEffect(() => {
    getData();
  }, []);
  
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={{
              color: '#ff1744',
              textShadow: "1px 1px black",
              fontSize: "120%",
              fontWeight: "bold",
              textAlign: "center",
              padding: "16px"
            }}
            padding='none'
            align='center'
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
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// Enhanced toolbar component
function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%', fontWeight: 'bold', fontSize: '1.5rem', color: '#ff1744' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          ארכיון קורסים
        </Typography>
      )}
      
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

// Main component
export default function CourseArchieveTable() {
  const courses = useSelector(state => state.courses.courses);
  const rows = courses || [];
  
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nameOfCourse');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  
  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    
    setSelected(newSelected);
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
  
  // Calculate empty rows for pagination
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
  // Get visible rows for current page
  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows],
  );
  
  return (
    <Box sx={{ width: '100%', padding: '20px' }}>
      <Paper 
        sx={{ 
          width: '100%', 
          mb: 2,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id || index}
                    selected={isItemSelected}
                    sx={{ 
                      cursor: 'pointer',
                      '&:nth-of-type(odd)': {
                        backgroundColor: '#f9f9f9',
                      },
                      '&:hover': {
                        backgroundColor: '#f1f1f1',
                      },
                      '&.Mui-selected': {
                        backgroundColor: '#e3f2fd',
                      }
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell 
                      align="center"
                      sx={{ fontWeight: 'medium', fontSize: '1rem' }}
                    >
                      {row.totalSumOfCourse}
                    </TableCell>
                    <TableCell 
                      align="center"
                      sx={{ fontWeight: 'medium', fontSize: '1rem' }}
                    >
                      {row.dayOfCourse}
                    </TableCell>
                    <TableCell 
                      align="center"
                      sx={{ fontWeight: 'medium', fontSize: '1rem' }}
                    >
                      {row.amountOfStudentsInCourse}
                    </TableCell>
                    <TableCell
                      align="center"
                      id={labelId}
                      sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#ff1744' }}
                    >
                      {row.nameOfCourse}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="שורות בעמוד"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
          sx={{
            '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
              fontWeight: 'bold',
            }
          }}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="תצוגה צפופה"
        sx={{ 
          marginTop: '10px',
          '.MuiFormControlLabel-label': {
            fontWeight: 'bold'
          }
        }}
      />
    </Box>
  );
}




