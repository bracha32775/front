// 
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Routing } from '../Routing/Routing'
import { useNavigate } from 'react-router-dom';
import { AddStudent } from '../Add/AddStudent/AddStudent'
import { useState } from "react";
import * as React from 'react';
import './Student.css'
// בדוק את הייבוא הזה - זו כנראה הבעיה העיקרית
import EnhancedTable from './studentTable';  // ודא שהקובץ קיים ומייצא ברירת מחדל
import { setFlagStudentSlice } from '../../redux/Slices/studentSlice';

export const Student = () => {
  const flagClose = useSelector(state => state.students.flagClose);
  const nav = useNavigate()
  const dispatch = useDispatch()
  const students = useSelector(state => state.students.students);
  const [open, setOpen] = React.useState(false);
  const [flag, setFlag] = useState()
  
  async function doIt() {
    await dispatch(getStudentsThunk())
  }
  
  useEffect(() => {
    doIt()
  }, [])

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(3),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(3),
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(setFlagStudentSlice(false))
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Routing />
      {/* בדוק אם EnhancedTable מוגדר כראוי */}
      {EnhancedTable ? <EnhancedTable /> : <div>טבלה לא זמינה</div>}
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          הוספת תלמידה
          <AddIcon />
        </Button>
        {!flagClose && (
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title">
              הוספת תלמידה
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={(theme) => ({
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme.palette.grey[60],
              })}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <AddStudent />
            </DialogContent>
          </BootstrapDialog>
        )}
      </React.Fragment>
    </div>
  );
};
