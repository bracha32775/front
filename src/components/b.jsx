import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCoursesThunk } from '../redux/Thunks/getCoursesThunk';
import { Routing } from './Routing/Routing';
import { Button } from '@mui/material';
import { Home } from './Home/Home';
import '../components/Course/Course.css'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AddCourse } from './Add/AddCourse/AddCourse';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import * as React from 'react';
import { deleteCourseThunk } from '../redux/Thunks/deleteCourseThunk';
import TableCourse from './Course/tableCourse';


export const B = () => {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses.courses);
    const [flag1, setFlag1] = useState(true); // התחל עם תצוגה טבלאית כברירת מחדל
    const [flag2, setFlag2] = useState(false);
    const [open1, setOpen1] = useState(false); // מצב הדיאלוג
    const [refreshData, setRefreshData] = useState(false); // משתנה לרענון הנתונים

    // טעינת הקורסים רק פעם אחת בטעינה ראשונית או כאשר צריך לרענן
    useEffect(() => {
        dispatch(getCoursesThunk());
    }, [dispatch, refreshData]);

    // פונקציות לשינוי תצוגה
    const chang1 = () => {
        setFlag1(true);
        setFlag2(false);
    };

    const chang2 = () => {
        setFlag2(true);
        setFlag1(false);
    };

    // סגנון לדיאלוג
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(3),
        }
    }));

    // פתיחה וסגירה של הדיאלוג
    const handleClickOpen = () => {
        setOpen1(true);
    };

    const handleClose = () => {
        setOpen1(false);
        // רענון הנתונים לאחר סגירת הדיאלוג
        setRefreshData(prev => !prev);
    };

    // מחיקת קורס
    const deleteThisCourse = (id) => {
        console.log(id + " hello:");
        dispatch(deleteCourseThunk(id));
        // רענון הנתונים לאחר מחיקה
        setRefreshData(prev => !prev);
    };

    return (
        <div>
            <Routing />
            <div className="view-buttons">
                <Button 
                    variant={flag1 ? "contained" : "outlined"} 
                    onClick={chang1}
                >
                    תצוגה טבלאית
                </Button>
                <Button 
                    variant={flag2 ? "contained" : "outlined"} 
                    onClick={chang2}
                >
                    כל הקורסים
                </Button>
            </div>

            {flag2 && <Home />}
            
            {flag1 && (
                <>
                    <TableCourse />
                    
                    <Button 
                        variant="outlined" 
                        onClick={handleClickOpen}
                        startIcon={<AddIcon />}
                        className="add-button"
                    >
                        הוספת קורס
                    </Button>
                    
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open1}
                    >
                        <DialogTitle id="customized-dialog-title">
                            הוספת קורס
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent dividers>
                            <AddCourse onClose={handleClose} />
                        </DialogContent>
                    </BootstrapDialog>
                </>
            )}
        </div>
    );
};

