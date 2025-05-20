import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
import MyAppBar from '../MyAppBar/MyAppBar';
import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
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
    School as SchoolIcon,
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

export const Speaker2 = () => {
    const dispatch = useDispatch();
    const speakers = useSelector(state => state.speakers.speakers);

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [deleteSpeakerName, setDeleteSpeakerName] = useState("");
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [loading, setLoading] = useState(false);
    const flagClose = useSelector(state => state.speakers.flagClose);

    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('nameOfSpeaker');
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        dispatch(getSpeakersThunk());
    }, [dispatch]);

    // פונקציית מיון
    function descendingComparator(a, b, orderBy) {
        if (!a[orderBy] || !b[orderBy]) return 0;

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

    // פילטור המרצים לפי מונח החיפוש
    const filteredSpeakers = speakers.filter(speaker =>
        speaker.nameOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.specializationOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.addressOfSpeaker?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // מיון המרצים
    const sortedSpeakers = React.useMemo(
        () =>
            [...filteredSpeakers].sort(getComparator(order, orderBy)),
        [filteredSpeakers, order, orderBy]
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

    // פתיחת דיאלוג פרטי מרצה
    const handleOpenSpeakerDetails = (speaker) => {
        setSelectedSpeaker(speaker);
        setOpenDialog(true);
    };

    // סגירת דיאלוג
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // בדיקה האם המרצה פעיל (יש לו קורסים)
    const isSpeakerActive = (speaker) => {
        return speaker.courses && speaker.courses.length > 0;
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

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const exportToExcel = () => {
        // הכנת הנתונים לייצוא
        const dataToExport = sortedSpeakers.map(speaker => ({
            'שם המרצה': speaker.nameOfSpeaker || '',
            'תחום התמחות': speaker.specializationOfSpeaker || '',
            'טלפון': speaker.phoneOfSpeaker || '',
            'אימייל': speaker.emailOfSpeaker || '',
            'כתובת': speaker.addressOfSpeaker || '',
            'מספר קורסים': speaker.courses ? speaker.courses.length : 0,
            'סטטוס': isSpeakerActive(speaker) ? 'פעיל' : 'לא פעיל'
        }));

        // יצירת גיליון עבודה
        const worksheet = XLSX.utils.json_to_sheet(dataToExport);

        // יצירת ספר עבודה
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'מרצים');

        // התאמת רוחב העמודות
        const columnWidths = [
            { wch: 20 }, // שם המרצה
            { wch: 20 }, // תחום התמחות
            { wch: 15 }, // טלפון
            { wch: 25 }, // אימייל
            { wch: 30 }, // כתובת
            { wch: 15 }, // מספר קורסים
            { wch: 10 }  // סטטוס
        ];
        worksheet['!cols'] = columnWidths;

        // הורדת הקובץ
        XLSX.writeFile(workbook, 'רשימת_מרצים.xlsx');
    };

    return (

        <ThemeProvider theme={rtlTheme}> <br></br>
            <div dir="rtl">
                <MyAppBar />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        מאגר מרצים
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            onClick={handleAddSpeaker}
                            variant="outlined"
                            color="primary"
                        >
                            <AddIcon />
                            <span> הוספת מרצה</span>
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={handleDeleteDialogOpen}
                        >
                            <DeleteForeverIcon />
                            מחיקת מרצה
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
                            placeholder="חיפוש לפי שם, תחום או מיקום..."
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
                            <Table aria-label="speakers table">
                                <StyledTableHead>
                                    <TableRow>
                                        <TableCell>
                                            <TableSortLabel
                                                active={orderBy === 'nameOfSpeaker'}
                                                direction={orderBy === 'nameOfSpeaker' ? order : 'asc'}
                                                onClick={() => handleRequestSort('nameOfSpeaker')}
                                            >
                                                שם המרצה
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel
                                                active={orderBy === 'specializationOfSpeaker'}
                                                direction={orderBy === 'specializationOfSpeaker' ? order : 'asc'}
                                                onClick={() => handleRequestSort('specializationOfSpeaker')}
                                            >
                                                תחום התמחות
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
                                    {sortedSpeakers
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((speaker) => {
                                            const isActive = isSpeakerActive(speaker);
                                            return (
                                                <StyledTableRow
                                                    key={speaker.idOfSpeaker}
                                                    onClick={() => handleOpenSpeakerDetails(speaker)}
                                                    isActive={isActive}
                                                >
                                                    <TableCell>{speaker.nameOfSpeaker}</TableCell>
                                                    <TableCell>{speaker.specializationOfSpeaker}</TableCell>
                                                    <TableCell>{speaker.phoneOfSpeaker}</TableCell>
                                                    <TableCell>{speaker.emailOfSpeaker}</TableCell>
                                                    <TableCell>{speaker.addressOfSpeaker}</TableCell>
                                                    <TableCell>{speaker.courses ? speaker.courses.length : 0}</TableCell>
                                                    <TableCell>
                                                        <StatusChip
                                                            isActive={isActive}
                                                            label={isActive ? 'פעיל' : 'לא פעיל'}
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
                            count={sortedSpeakers.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            labelRowsPerPage="שורות בעמוד:"
                            labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
                        />
                    </Paper>
                </Container>

                {/* דיאלוג פרטי מרצה */}
                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    maxWidth="md"
                    fullWidth
                >
                    {selectedSpeaker && (
                        <>
                            <DialogHeader>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'white', color: 'primary.main', mr: 2, width: 56, height: 56 }}>
                                        {selectedSpeaker.nameOfSpeaker?.charAt(0)}
                                    </Avatar>
                                    <Typography variant="h6">
                                        {selectedSpeaker.nameOfSpeaker}
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
                                                            secondary={selectedSpeaker.phoneOfSpeaker || 'לא זמין'}
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <EmailIcon color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="אימייל"
                                                            secondary={selectedSpeaker.emailOfSpeaker || 'לא זמין'}
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <HomeIcon color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="כתובת"
                                                            secondary={selectedSpeaker.addressOfSpeaker || 'לא זמין'}
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
                                                            <SchoolIcon color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="תחום התמחות"
                                                            secondary={selectedSpeaker.specializationOfSpeaker || 'לא זמין'}
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <EventIcon color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="מספר קורסים"
                                                            secondary={selectedSpeaker.courses ? selectedSpeaker.courses.length : 0}
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            {isSpeakerActive(selectedSpeaker) ? (
                                                                <CheckCircleIcon color="success" />
                                                            ) : (
                                                                <CancelIcon color="error" />
                                                            )}
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary="סטטוס"
                                                            secondary={isSpeakerActive(selectedSpeaker) ? 'פעיל' : 'לא פעיל'}
                                                        />
                                                    </ListItem>
                                                </List>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    {selectedSpeaker.courses && selectedSpeaker.courses.length > 0 && (
                                        <Grid item xs={12}>
                                            <Card>
                                                <CardContent>
                                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                                                        קורסים ({selectedSpeaker.courses.length})
                                                    </Typography>
                                                    <Divider sx={{ mb: 2 }} />
                                                    <Grid container spacing={2}>
                                                        {selectedSpeaker.courses.map((course) => (
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

                {/* דיאלוג הוספת מרצה */}
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle>הוספת מרצה חדש</DialogTitle>
                    <DialogContent>
                        <AddSpeaker />
                    </DialogContent>
                </Dialog>

                {/* דיאלוג מחיקת מרצה */}
                <Dialog
                    open={openDelete}
                    onClose={() => setOpenDelete(false)}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle>מחיקת מרצה</DialogTitle>
                    <DialogContent>
                        <Box sx={{ mt: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="delete-speaker-label">בחר מרצה למחיקה</InputLabel>
                                <Select
                                    labelId="delete-speaker-label"
                                    value={deleteSpeakerName}
                                    onChange={(e) => setDeleteSpeakerName(e.target.value)}
                                    label="בחר מרצה למחיקה"
                                >
                                    {speakers.map((speaker) => (
                                        <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
                                            {speaker.nameOfSpeaker}
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
                            onClick={handleDeleteSpeaker}
                            color="error"
                            variant="contained"
                            disabled={loading || !deleteSpeakerName}
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

export default Speaker2;
