// import * as React from 'react';
// import PropTypes from 'prop-types';
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


// // function createData(id, name, calories, fat, carbs, protein) {
// //   return {
// //     id,
// //     name,
// //     calories,
// //     fat,
// //     carbs,
// //     protein,
// //   };
// // }

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
//     id: 'מייל',
//     numeric: false,
//     disablePadding: false,
//     label: 'מייל',
//   }, 
//    {
//     id: 'טלפון',
//     numeric: true,
//     disablePadding: false,
//     label: 'טלפון',
//   }, 
//    {
//     id: 'כתובת',
//     numeric: false,
//     disablePadding: false,
//     label: 'כתובת',
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
//     await dispatch(getStudentsThunk())
//   }
//     React.useEffect(()=>{
//         getData()
//     },[])





//   return (

//     <TableHead>
//       <TableRow>
//         <TableCell >
//           {/* <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           /> */}
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             // align={headCell.numeric ? 'right' : 'left'}
//             padding='none'
//            align='center'
//             // padding={headCell.disablePadding ? 'none' : 'normal'}
//             // sortDirection={orderBy === headCell.id ? order : false}
//           >
//             {/* <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             > */}
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             {/* </TableSortLabel> */}
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
//     <Toolbar
//     //   sx={[
//     //     {
//     //       pl: { sm: 2 },
//     //       pr: { xs: 1, sm: 1 },
//     //     },
//     // //     numSelected > 0 && {
//     // //       bgcolor: (theme) =>
//     // //         alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//     // //     },
//     //   ]}
//     >
//       {/* {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )} */}
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             {/* <FilterListIcon /> */}
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export default function EnhancedTable() {
//  const students = useSelector(s => s.students.students)
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
//                                       //
//                                       // onClick={(event) => handleClick(event, row.id)}
//                                       role="checkbox"
//                                       aria-checked={isItemSelected}
//                                       tabIndex={-1}
//                                       key={row.id}
//                                       selected={isItemSelected}
//                                       sx={{ cursor: 'pointer' }}
//                                   >
//                                       <TableCell padding="checkbox">
//                                           {/* <Checkbox
//                   color="primary"
//                   checked={isItemSelected}
//                   inputProps={{
//                     'aria-labelledby': labelId,
//                   }}
//                 /> */}
//                                       </TableCell>
//                                       <TableCell align="center">{row.emailOfStudent}</TableCell>
//                                        <TableCell align="center">{row.phoneOfStudent}</TableCell> 
//                                        <TableCell align="center">{row.addressOfStudent}</TableCell>                                                           
//                                       <TableCell
//                                       align='center'
//                                         //   component="th"
//                                         //   id={labelId}
//                                         //   scope="row"
//                                         //   padding="none"
//                                       >
//                                           {row.nameOfStudent}
//                                       </TableCell>
//                                       {/* <TableCell align="right">{row.protein}</TableCell> */}
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
//             //   label="Dense padding"
//                />
//       </Box></>
//   );}
///////////////////////////////////////א////////////////////////////////////////////////
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
import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import PrintIcon from '@mui/icons-material/Print';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import TableViewIcon from '@mui/icons-material/TableView';
// 
import {
  Document,
  Packer,
  Paragraph,
  // שנה את השם של Table ל-DocxTable
  Table as DocxTable,
  TableCell as DocxTableCell,
  TableRow as DocxTableRow,
  BorderStyle,
  WidthType,
  HeadingLevel,
  AlignmentType
} from 'docx';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
    id: 'nameOfStudent',
    numeric: false,
    disablePadding: false,
    label: 'שם',
  },
  {
    id: 'addressOfStudent',
    numeric: false,
    disablePadding: false,
    label: 'כתובת',
  },
  {
    id: 'phoneOfStudent',
    numeric: true,
    disablePadding: false,
    label: 'טלפון',
  },
  {
    id: 'emailOfStudent',
    numeric: false,
    disablePadding: false,
    label: 'מייל',
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
  const { onExportExcel, onExportWord } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleExportPDF = () => {
  //   handleClose();
  //   onPrintPDF();
  // };

  const handleExportWord = () => {
    handleClose();
    onExportWord();
  };

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
        רשימת תלמידות
      </Typography>

      <Box sx={{ display: 'flex' }}>
        <Tooltip title="אפשרויות ייצוא">
          <Button
            variant="contained"
            color="primary"
            startIcon={<MoreVertIcon />}
            onClick={handleClick}
            sx={{ ml: 1 }}
          >
            ייצוא
          </Button>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
       
        <MenuItem onClick={handleExportWord}>
          <DescriptionIcon sx={{ mr: 1 }} />
          ייצוא ל-Word
        </MenuItem>
        <MenuItem onClick={handleExportWord}>
          <DescriptionIcon sx={{ mr: 1 }} />
          ייצוא ל-Word
        </MenuItem>
      </Menu>
    </Box>
    </Toolbar >
  );
}

EnhancedTableToolbar.propTypes = {
  onPrintPDF: PropTypes.func.isRequired,
  onExportWord: PropTypes.func.isRequired,
};

export default function EnhancedTable({ onDeleteStudent, onUpdateStudent, isUpdating }) {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students || []);

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nameOfStudent');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    dispatch(getStudentsThunk());
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
  // const handlePrintPDF = () => {
  //   try {
  //     const doc = new jsPDF();

  //     // הוספת כותרת
  //     doc.setFont("helvetica", "bold");
  //     doc.setFontSize(16);
  //     doc.text("רשימת תלמידות", 105, 15, { align: 'center' });

  //     // הכנת נתונים לטבלה
  //     const tableColumn = ["שם", "כתובת", "טלפון", "מייל"];
  //     const tableRows = students.map(student => [
  //       student.nameOfStudent,
  //       student.addressOfStudent,
  //       student.phoneOfStudent,
  //       student.emailOfStudent
  //     ]);

  //     // יצירת טבלה
  //     doc.autoTable({
  //       head: [tableColumn],
  //       body: tableRows,
  //       startY: 25,
  //       styles: { halign: 'center', font: 'helvetica' },
  //       headStyles: { fillColor: [66, 139, 202] },
  //       alternateRowStyles: { fillColor: [240, 240, 240] },
  //       margin: { top: 20 },
  //       theme: 'grid'
  //     });

  //     // שמירת הקובץ
  //     doc.save("students_list.pdf");
  //   } catch (error) {
  //     console.error("Error generating PDF:", error);
  //     alert("אירעה שגיאה בייצוא ה-PDF. אנא נסה שוב מאוחר יותר.");
  //   }
  // };

  // // פונקציה ליצוא Word
  // const handleExportWord = () => {
  //   try {
  //     // יצירת מסמך Word חדש
  //     const doc = new Document({
  //       sections: [
  //         {
  //           properties: {},
  //           children: [
  //             new Paragraph({
  //               text: "רשימת תלמידות",
  //               heading: HeadingLevel.HEADING_1,
  //               alignment: AlignmentType.CENTER,
  //               spacing: {
  //                 after: 200,
  //               },
  //             }),

  //             // יצירת טבלה
  //             new DocxTable({
  //               width: {
  //                 size: 100,
  //                 type: WidthType.PERCENTAGE,
  //               },
  //               rows: [
  //                 // כותרות הטבלה
  //                 new DocxTableRow({
  //                   tableHeader: true,
  //                   children: [
  //                     new DocxTableCell({
  //                       children: [new Paragraph("שם")],
  //                       shading: {
  //                         fill: "4285F4",
  //                         color: "4285F4",
  //                       },
  //                     }),
  //                     new DocxTableCell({
  //                       children: [new Paragraph("כתובת")],
  //                       shading: {
  //                         fill: "4285F4",
  //                         color: "4285F4",
  //                       },
  //                     }),
  //                     new DocxTableCell({
  //                       children: [new Paragraph("טלפון")],
  //                       shading: {
  //                         fill: "4285F4",
  //                         color: "4285F4",
  //                       },
  //                     }),
  //                     new DocxTableCell({
  //                       children: [new Paragraph("מייל")],
  //                       shading: {
  //                         fill: "4285F4",
  //                         color: "4285F4",
  //                       },
  //                     }),
  //                   ],
  //                 }),

  //                 // נתוני התלמידות
  //                 ...students.map(
  //                   (student) =>
  //                     new DocxTableRow({
  //                       children: [
  //                         new DocxTableCell({
  //                           children: [new Paragraph(student.nameOfStudent || "")],
  //                         }),
  //                         new DocxTableCell({
  //                           children: [new Paragraph(student.addressOfStudent || "")],
  //                         }),
  //                         new DocxTableCell({
  //                           children: [new Paragraph(student.phoneOfStudent || "")],
  //                         }),
  //                         new DocxTableCell({
  //                           children: [new Paragraph(student.emailOfStudent || "")],
  //                         }),
  //                       ],
  //                     })
  //                 ),
  //               ],
  //               borders: {
  //                 top: {
  //                   style: BorderStyle.SINGLE,
  //                   size: 1,
  //                 },
  //                 bottom: {
  //                   style: BorderStyle.SINGLE,
  //                   size: 1,
  //                 },
  //                 left: {
  //                   style: BorderStyle.SINGLE,
  //                   size: 1,
  //                 },
  //                 right: {
  //                   style: BorderStyle.SINGLE,
  //                   size: 1,
  //                 },
  //                 insideHorizontal: {
  //                   style: BorderStyle.SINGLE,
  //                   size: 1,
  //                 },
  //                 insideVertical: {
  //                   style: BorderStyle.SINGLE,
  //                   size: 1,
  //                 },
  //               },
  //             }),

  //             // הוספת פסקה עם מידע נוסף
  //             new Paragraph({
  //               text: `מסמך זה הופק בתאריך: ${new Date().toLocaleDateString('he-IL')}`,
  //               spacing: {
  //                 before: 200,
  //               },
  //             }),
  //           ],
  //         },
  //       ],
  //     });

  //     // שמירת המסמך
  //     Packer.toBlob(doc).then((blob) => {
  //       saveAs(blob, "students_list.docx");
  //     });
  //   } catch (error) {
  //     console.error("Error generating Word document:", error);
  //     alert("אירעה שגיאה בייצוא ל-Word. אנא נסה שוב מאוחר יותר.");
  //   }
  // };
  const handleExportExcel = () => {
    try {
      // יצירת גיליון עבודה
      const worksheet = XLSX.utils.json_to_sheet(
        students.map(student => ({
          'שם': student.nameOfStudent || '',
          'כתובת': student.addressOfStudent || '',
          'טלפון': student.phoneOfStudent || '',
          'מייל': student.emailOfStudent || ''
        }))
      );

      // הגדרת רוחב עמודות
      const wscols = [
        { wch: 20 }, // שם
        { wch: 30 }, // כתובת
        { wch: 15 }, // טלפון
        { wch: 30 }  // מייל
      ];
      worksheet['!cols'] = wscols;

      // יצירת חוברת עבודה
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "תלמידות");

      // המרה לבינארי והורדה
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(data, "students_list.xlsx");
    } catch (error) {
      console.error("Error generating Excel file:", error);
      alert("אירעה שגיאה בייצוא ל-Excel. אנא נסה שוב מאוחר יותר.");
    }
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - students.length) : 0;

  // מיון ופגינציה של הנתונים
  const visibleRows = React.useMemo(() => {
    if (!students || students.length === 0) return [];
    return [...students]
      .sort(getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [order, orderBy, page, rowsPerPage, students]);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <Box sx={{ width: '100%' }} dir="rtl">
          <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar onExportExcel={handleExportExcel}  />
             {/* onExportWord={handleExportWord}  */}
            <TableContainer>
              {isUpdating && (
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, height: '4px', overflow: 'hidden' }}>
                  <Box sx={{ width: '100%', height: '100%', bgcolor: 'primary.main', animation: 'loading 2s infinite' }} />
                </Box>
              )}
              <Table sx={{ minWidth: 750 }} size={dense ? 'small' : 'medium'}>
                <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={students.length || 0} />
                <TableBody>
                  {visibleRows.map((row) => (
                    <TableRow hover tabIndex={-1} key={row.idOfStudent} onClick={() => onUpdateStudent && onUpdateStudent(row)} sx={{ cursor: onUpdateStudent ? 'pointer' : 'default' }}>
                      <TableCell align="center">{row.nameOfStudent}</TableCell>
                      <TableCell align="center">{row.addressOfStudent}</TableCell>
                      <TableCell align="center">{row.phoneOfStudent}</TableCell>
                      <TableCell align="center">{row.emailOfStudent}</TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <TableCell colSpan={4} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={students.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="שורות בעמוד:"
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
            />
          </Paper>
          <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="תצוגה צפופה" />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
